# Módulo 1: Data — studyPlans

> **Archivo**: `src/data/studyPlans.js`
> **Responsabilidad**: Definir la estructura estática de los planes de estudio, incluyendo materias y sus correlatividades.

---

## 1. Propósito

Proveer la fuente única de verdad para los datos curriculares de las 3 carreras soportadas. Este módulo es puramente declarativo: no contiene lógica, solo datos.

## 2. Exports

| Export           | Tipo     | Descripción                                    |
|------------------|----------|------------------------------------------------|
| `studyPlans`     | `object` | Objeto con 3 propiedades: `analista`, `licenciatura`, `profesorado` |

Cada propiedad es un objeto `Plan`.

## 3. Estructura del Dato

### 3.1 Plan

```js
{
  id: 'analista-2010',          // string — identificador único del plan
  name: 'Analista en Sistemas...', // string — nombre legible
  subjects: [ ... ]             // Subject[] — materias del plan
}
```

### 3.2 Subject

```js
{
  id: 'AS101',                    // string — código único de materia
  name: 'ALGORITMO Y ESTRUCTURA...', // string — nombre completo
  year: 1,                        // number — año en el plan (1-5)
  period: '1er.Cuatrimestre',     // string — período lectivo
  status: 'Aprobado',             // string — estado semilla (solo para debug/demo)
  grade: 8,                       // number | null — nota (si aprobada)
  correlatives: {                 // object — correlatividades
    toCourse: [ ... ],            // CorrelativeRequirement[] — para cursar
    toApprove: [ ... ]            // CorrelativeRequirement[] — para aprobar
  }
}
```

### 3.3 CorrelativeRequirement

```js
{
  id: 'AS104',          // string — ID de la materia requerida
  condition: 'Regularizada'  // 'Regularizada' | 'Aprobada' — condición mínima
}
```

## 4. Convenciones de IDs

| Prefijo | Carrera                          |
|---------|----------------------------------|
| AS      | Analista en Sistemas de Computación |
| L13     | Licenciatura en Sistemas de Información |
| PC      | Profesorado Universitario en Computación |

Los números siguen una secuencia no estrictamente correlativa (ej: AS101..AS308, L1301..L1340, PC100..PC407).

## 5. Períodos Académicos

| Valor en `period`       | Significado                     |
|--------------------------|---------------------------------|
| `'1er.Cuatrimestre'`     | Primer cuatrimestre (marzo-julio) |
| `'2do.Cuatrimestre'`     | Segundo cuatrimestre (agosto-diciembre) |
| `'1° anual'`             | Materia anual                   |

## 6. Reglas de Correlatividad

Cada materia define dos conjuntos de requisitos:

- **toCourse** (`para cursar`): condiciones que deben cumplirse **antes** de poder cursar la materia.
- **toApprove** (`para aprobar`): condiciones que deben cumplirse **antes** de poder rendir el examen final.

Una materia sin correlativas tiene arreglos vacíos: `{ toCourse: [], toApprove: [] }`.

## 7. Seed Data (status inicial)

El archivo incluye datos semilla con estados predefinidos (`'Aprobado'`, `'Regularizada'`, `'En Curso'`) para propósitos de demo/desarrollo. En producción estos son ignorados por el hook `useSubjectStatus`, que solo considera los estados guardados en `localStorage`.

## 8. Dependencias

Este módulo no importa ningún otro archivo del proyecto. Es puramente data estática.
