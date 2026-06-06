# Contracts — Plan de Estudio FCEQYN

> Este documento define los contratos (interfaces) entre módulos del sistema. Todos los módulos se comunican a través de estas formas de datos bien definidas.

---

## 1. Contrato: Subject

El tipo central del dominio. Toda materia en cualquier plan sigue esta forma:

```ts
interface Subject {
  id: string;              // Ej: "AS101", "L1301", "PC100"
  name: string;            // Nombre completo (ej: "ALGORITMO Y ESTRUCTURA DE DATOS I")
  year: number;            // 1..5 (año del plan)
  period: string;          // "1er.Cuatrimestre" | "2do.Cuatrimestre" | "1° anual"
  status: SubjectStatus;   // Estado actual del usuario
  grade: number | null;    // Nota (null si no aprobada)
  correlatives: Correlatives;  // Correlatividades
}
```

### 1.1 SubjectStatus

```ts
type SubjectStatus =
  | 'Pendiente'       // Por defecto (localStorage ausente)
  | 'Podes Cursar'    // Estado sintético: cumple prerequisitos de cursado
  | 'Regularizada'    // Cursada, cursado aprobado
  | 'Aprobada'        // Final aprobado (con nota)
  | 'En Curso';       // Cursando actualmente (seed data)
```

### 1.2 Correlatives

```ts
interface Correlatives {
  toCourse: CorrelativeRequirement[];   // Requisitos para cursar
  toApprove: CorrelativeRequirement[];   // Requisitos para rendir final
}
```

### 1.3 CorrelativeRequirement

```ts
interface CorrelativeRequirement {
  id: string;        // Subject ID de la materia requerida
  condition: 'Regularizada' | 'Aprobada';  // Condición mínima necesaria
}
```

---

## 2. Contrato: Plan

```ts
interface Plan {
  id: string;        // Identificador único del plan
  name: string;      // Nombre legible del plan
  subjects: Subject[];  // Lista de materias del plan
}
```

Los planes disponibles se referencian como:
- `analista` → plan de Analista en Sistemas de Computación (2010)
- `licenciatura` → plan de Licenciatura en Sistemas de Información (2013)
- `profesorado` → plan de Profesorado Universitario en Computación (2015)

---

## 3. Contrato: PlanId

```ts
type PlanId =
  | 'analista-2010'
  | 'licenciatura-2013'
  | 'profesorado-2015';
```

---

## 4. Contratos entre Módulos

### 4.1 M1 (Data) → M2 (Hook)

**Exporta**: `studyPlans` (objeto con los 3 planes)
**Formato**:
```ts
{ analista: Plan, licenciatura: Plan, profesorado: Plan }
```

### 4.2 M2 (Hook) → M5 (App)

**Exporta**: `{ subjectsWithStatus: Subject[], cycleStatus: (id: string) => void }`

`subjectsWithStatus` = copia de `Subject[]` con `status` actualizado:
- Si hay entrada en `userStatuses` → se usa ese estado
- Si es `Pendiente` y cumple correlativas de `toCourse` → se asigna `'Podes Cursar'`

`cycleStatus(subjectId)` → muta `userStatuses` con el siguiente estado en el ciclo.

### 4.3 M2 (Hook) → localStorage

**Clave**: `fceqyn-status-v3-${planId}`
**Valor**:
```ts
Record<string, SubjectStatus>  // ej: { "AS101": "Aprobada", "AS103": "Regularizada" }
```

### 4.4 M3 (Utils) → M4 (Components)

| Función               | Input                            | Output                    |
|-----------------------|----------------------------------|---------------------------|
| `checkCorrelativity`  | `subject: Subject`               | `{ toCourse, toApprove }` |
| `getDependents`       | `subjectId, allSubjects`         | `string[]` (IDs)          |
| `getStatusColor`      | `status: string`                 | `string` (CSS var)        |

### 4.5 M4 (Components) ←→ M5 (App)

**Props compartidas por App → StudyGrid**:

```ts
interface StudyGridProps {
  plan: Plan;
  onCycleStatus: (id: string) => void;
  activeSubject: Subject | null;
  onSelectSubject: (subject: Subject | null) => void;
  selectedPlanId: PlanId;
  onSelectPlan: (id: PlanId) => void;
}
```

**Props StudyGrid → SubjectCard**:

```ts
interface SubjectCardProps {
  subject: Subject;
  plan: Plan;
  onCycleStatus: (id: string) => void;
  onSelect: (subject: Subject | null) => void;
  activeSubject: Subject | null;
}
```

---

## 5. Contrato de Persistencia (M2 ↔ localStorage)

| Aspecto         | Detalle                                  |
|-----------------|------------------------------------------|
| Storage Key     | `fceqyn-status-v3-${planId}`             |
| Storage Value   | JSON string de `Record<string, string>`  |
| Trigger Guardado| Cada vez que `userStatuses` cambia (via `useEffect`) |
| Trigger Lectura | Al montar el hook (`useState` lazy init)  |
| Valores Válidos | `'Regularizada'`, `'Aprobada'`, `'Pendiente'` (o ausente = `Pendiente`) |

---

## 6. Estado Sintético: "Podés Cursar"

**NO** se persiste en `localStorage`. Se computa en cada render mediante `useMemo` en `useSubjectStatus`.

**Regla**: una materia obtiene `'Podes Cursar'` si:
1. Su estado actual es `'Pendiente'` (no hay entrada en `userStatuses`)
2. Todos los requisitos en `correlatives.toCourse` están satisfechos
3. Un requisito se satisface si:
   - `condition === 'Regularizada'` → el estado real es `'Regularizada'` o `'Aprobada'`
   - `condition === 'Aprobada'` → el estado real es `'Aprobada'`
