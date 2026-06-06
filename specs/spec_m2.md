# Módulo 2: State Management — useSubjectStatus

> **Archivo**: `src/hooks/useSubjectStatus.js`
> **Responsabilidad**: Gestionar el estado de cada materia del usuario, persistir en localStorage, y computar el estado sintético "Podés Cursar".

---

## 1. Propósito

Es el núcleo de la lógica de estado de la aplicación. Toma los datos crudos de `studyPlans` y produce materias con estado enriquecido (incluyendo el estado dinámico "Podés Cursar"). También expone la función `cycleStatus` para que la UI permita al usuario cambiar el estado de una materia.

## 2. API

### 2.1 `useSubjectStatus(planId, initialSubjects)`

**Inputs**:
| Parámetro         | Tipo        | Descripción                              |
|-------------------|-------------|------------------------------------------|
| `planId`          | `string`    | ID del plan (ej: `'analista-2010'`)      |
| `initialSubjects` | `Subject[]` | Arreglo de materias desde studyPlans     |

**Output** (return):
```js
{
  subjectsWithStatus: Subject[],   // Materias con status actualizado
  cycleStatus: (subjectId) => void // Función para cambiar estado
}
```

### 2.2 `cycleStatus(subjectId)`

Cicla el estado de la materia según: `Pendiente → Regularizada → Aprobada → Pendiente`

## 3. Flujo de Estado

### 3.1 Inicialización

```mermaid
flowchart LR
    A[localStorage] -->|existe| B[Parsear JSON]
    A -->|no existe| C[Objeto vacío {}]
    B --> D[userStatuses state]
    C --> D
```

### 3.2 Cómputo de subjectsWithStatus

```js
subjectsWithStatus = initialSubjects.map(subject => {
  status = userStatuses[subject.id] || 'Pendiente'

  if (status === 'Pendiente' && correlatives.toCourse satisfechas) {
    status = 'Podes Cursar'  // Estado sintético
  }

  return { ...subject, status }
})
```

### 3.3 Persistencia

Cada cambio en `userStatuses` dispara un `useEffect` que escribe en `localStorage`:

```
Key:   fceqyn-status-v3-${planId}
Value: JSON.stringify(userStatuses)
```

## 4. Lógica de Satisfacción de Condiciones

```js
satisfiesCondition(actualStatus, requiredCondition) {
  if (requiredCondition === 'Regularizada')
    return actualStatus === 'Regularizada' || actualStatus === 'Aprobada'
  if (requiredCondition === 'Aprobada')
    return actualStatus === 'Aprobada'
  return false
}
```

Una materia está "habilitada para cursar" si **todos** sus requisitos `toCourse` están satisfechos.

## 5. Estados No Persistidos

El estado `'Podes Cursar'` **NUNCA** se guarda en `localStorage`. Se computa en cada render mediante `useMemo`. Si el usuario cicla desde `'Podes Cursar'`, pasa directamente a `'Regularizada'` (porque `userStatuses[subject.id]` es `undefined`, que se evalúa como `'Pendiente'` en el ciclo).

## 6. Manejo de Errores

- Si `localStorage` falla al leer (dato corrupto), se inicializa como `{}`.
- Si `localStorage` falla al escribir, el error se traga silenciosamente (console.error para debug).

## 7. Dependencias

| Módulo | Uso                                  |
|--------|--------------------------------------|
| React  | `useState`, `useEffect`, `useMemo`   |
| —      | `localStorage` (Web API)             |
