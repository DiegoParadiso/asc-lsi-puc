# Módulo 3: Utilities — correlativity

> **Archivo**: `src/utils/correlativity.js`
> **Responsabilidad**: Proveer funciones auxiliares para consultar y visualizar correlatividades entre materias.

---

## 1. Propósito

Aislar la lógica de consulta de correlatividades para que los componentes de UI no tengan que conocer la estructura interna de los datos. Centraliza operaciones como "obtener dependientes de una materia" y "color según estado".

## 2. API

### 2.1 `checkCorrelativity(subject)`

**Input**: `subject: Subject` — objeto materia completo.

**Output**:
```js
{
  toCourse: CorrelativeRequirement[],   // Requisitos para cursar
  toApprove: CorrelativeRequirement[]   // Requisitos para aprobar
}
```

**Nota**: Actualmente es un simple acceso directo a `subject.correlatives`. Se mantiene como función para abstraer la estructura interna por si cambia en el futuro.

### 2.2 `getDependents(subjectId, allSubjects)`

**Input**:
| Parámetro      | Tipo        | Descripción                              |
|----------------|-------------|------------------------------------------|
| `subjectId`    | `string`    | ID de la materia a consultar             |
| `allSubjects`  | `Subject[]` | Lista completa de materias del plan      |

**Output**: `string[]` — IDs de las materias que **requieren** a `subjectId` como correlativa.

**Lógica**:
```js
allSubjects.forEach(s => {
  if (s.correlatives.toCourse.some(req => req.id === subjectId) ||
      s.correlatives.toApprove.some(req => req.id === subjectId)) {
    dependents.push(s.id)
  }
})
```

### 2.3 `getStatusColor(status)`

**Input**: `status: string` — estado de la materia.

**Output**: `string` — nombre de variable CSS correspondiente:

| Estado        | CSS Variable                 |
|---------------|------------------------------|
| `'Aprobado'`  | `var(--status-aprobado-bg)`  |
| `'Regularizada'` | `var(--status-regular-bg)` |
| `'En Curso'`  | `var(--status-curso-bg)`     |
| *default*     | `var(--status-none-bg)`      |

## 3. Dependencias

Este módulo **no depende de ningún otro módulo** del proyecto. Es puramente funcional.

## 4. Notas de Diseño

- `getDependents` recorre toda la lista de materias (O(n)). Para planes pequeños (< 40 materias) es aceptable.
- Los colores se definen como variables CSS en `index.css` y se referencian aquí.
- La función `checkCorrelativity` es un wrapper que actualmente delega directamente; se diseñó para futura evolución (ej: agregar validación o caching).
