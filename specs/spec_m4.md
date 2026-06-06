# Módulo 4: UI Components

> **Archivos**: `src/components/*.jsx`
> **Responsabilidad**: Renderizar la interfaz de usuario, manejar eventos de entrada, y mostrar datos visualmente.

---

## 1. Componentes

| Componente      | Archivo               | Propósito                                    |
|-----------------|-----------------------|----------------------------------------------|
| StudyGrid       | `StudyGrid.jsx`       | Layout principal: grilla por años/períodos   |
| SubjectCard     | `SubjectCard.jsx`     | Card individual de una materia               |
| SubjectDetails  | `SubjectDetails.jsx`  | Panel lateral con detalle de correlativas     |
| StatsBar        | `StatsBar.jsx`        | Barra de progreso y estadísticas             |
| PlanSelector    | `PlanSelector.jsx`    | Pestañas de selección de carrera             |

---

## 2. StudyGrid

### 2.1 Props

```js
{
  plan: Plan,
  onCycleStatus: (id: string) => void,
  activeSubject: Subject | null,
  onSelectSubject: (subject: Subject | null) => void,
  selectedPlanId: PlanId,
  onSelectPlan: (id: PlanId) => void
}
```

### 2.2 Estados Internos (useMemo)

| Estado    | Tipo     | Descripción                                      |
|-----------|----------|--------------------------------------------------|
| `years`   | `object` | Materias agrupadas por `{ year: { 1: [], 2: [] }` (cuatrimestre 1 o 2) |
| `arrows`  | `array`  | Configuraciones de flechas Xarrow a renderizar  |

### 2.3 Lógica de Agrupación (years)

- Materias con período que contiene `'2do'` o `'segundo'` → cuatrimestre 2.
- Cualquier otro período → cuatrimestre 1 (incluye anuales).

### 2.4 Lógica de Flechas (arrows)

Solo se renderizan cuando `activeSubject` no es `null`. Para cada materia destino, se buscan sus correlativas (uniendo `toCourse` y `toApprove` sin duplicados). Si la correlativa es de un año diferente, se genera una flecha desde la materia origen hacia la materia destino.

**Offsetting**: Las flechas múltiples hacia un mismo destino se distribuyen horizontalmente con un paso de 20px y curvatura variable para evitar superposición.

### 2.5 Layout

```
┌─────────────────────────────────────────┐
│ [Logo]  [PlanSelector tabs]             │
├─────────────────────────────────────────┤
│ Leyenda de colores                       │
├─────────────────────────────────────────┤
│ StatsBar (progreso)                      │
├─────────────────────────────────────────┤
│ ┌─ 1er Año ──────────────────────────┐  │
│ │ 1er Cuat. / Anual  │ 2do Cuat.     │  │
│ │ [Card] [Card]       │ [Card] [Card] │  │
│ └─────────────────────────────────────┘  │
│ ┌─ 2do Año ──────────────────────────┐  │
│ │ ...                  │ ...          │  │
│ └─────────────────────────────────────┘  │
│ ───────────────────────────────────      │
│ Flechas Xarrow superpuestas              │
└─────────────────────────────────────────┘
```

---

## 3. SubjectCard

### 3.1 Props

```js
{
  subject: Subject,
  plan: Plan,
  onCycleStatus: (id: string) => void,
  onSelect: (subject: Subject | null) => void,
  activeSubject: Subject | null
}
```

### 3.2 Interacciones

| Evento             | Acción                                                       |
|--------------------|--------------------------------------------------------------|
| Click izquierdo    | Cicla estado (`onCycleStatus`) + limpia selección (`onSelect(null)`) |
| Click derecho      | Alterna selección para mostrar flechas (`onSelect(subject)`) |
| Context menu       | Prevenido (evita menú nativo del navegador)                  |

### 3.3 Highlight States

Cuando hay un `activeSubject`, cada card calcula su estado de resaltado:

| Highlight        | Condición                                                   |
|------------------|-------------------------------------------------------------|
| `'active'`       | Esta card es el `activeSubject`                              |
| `'dependency'`   | Esta card es prerequisito del `activeSubject`                |
| `'dependent'`    | El `activeSubject` es prerequisito de esta card              |
| `'dimmed'`       | Sin relación con `activeSubject`                             |
| `'normal'`       | No hay `activeSubject` seleccionado                         |

### 3.4 Render

```html
<motion.div id="card-{subject.id}">
  <span>{subject.id}</span>  <!-- Código de materia -->
  <h3>{subject.name}</h3>    <!-- Nombre completo -->
</motion.div>
```

---

## 4. StatsBar

### 4.1 Props

```js
{
  subjects: Subject[]
}
```

### 4.2 Estadísticas Computadas

| Estadística     | Cálculo                          |
|-----------------|----------------------------------|
| `aprobadas`     | `status === 'Aprobada'`          |
| `regularizadas` | `status === 'Regularizada'`      |
| `podesCursar`   | `status === 'Podes Cursar'`      |
| `pendientes`    | `status === 'Pendiente'`         |
| `total`         | `subjects.length`                |
| `pct`           | `Math.round(aprobadas / total * 100)` |

### 4.3 Layout

```
┌──────────────────────────────────────────────┐
│  35% ████████████████░░░░░░░░░░░░░░░░░░░░░  │
│  ● 12 Aprobadas  ● 5 Regularizadas  ...     │
└──────────────────────────────────────────────┘
```

---

## 5. SubjectDetails

### 5.1 Props

```js
{
  subject: Subject | null,  // null → no renderiza
  plan: Plan,
  onClose: () => void,
  onSelectSubject: (subject: Subject) => void
}
```

### 5.2 Secciones

1. **Header**: ID + badge de estado + botón cerrar
2. **Título**: Nombre de la materia
3. **Meta**: Año, período, nota (si existe)
4. **Correlatividades requeridas**: dividido en "Para Cursar" y "Para Aprobar"
5. **Es requisito para**: lista de materias que dependen de esta (usando `getDependents`)

### 5.3 Estado Actual

> ⚠️ **Nota**: `SubjectDetails` está definido e importable pero **no se utiliza actualmente** en `App.jsx`. Está disponible para futura integración como panel lateral o modal.

---

## 6. PlanSelector

### 6.1 Props

```js
{
  selectedPlanId: PlanId,
  onSelectPlan: (id: PlanId) => void
}
```

### 6.2 Comportamiento

Renderiza 3 botones tipo tab. El botón activo recibe clase `active` y muestra un indicador animado con `framer-motion` (`layoutId="activePlan"` para animación compartida de layout).

---

## 7. Dependencias Externas

| Librería       | Uso                                  | Componentes                |
|----------------|--------------------------------------|----------------------------|
| framer-motion  | Animaciones de cards y transiciones  | SubjectCard, SubjectDetails, PlanSelector |
| react-xarrows  | Flechas de correlatividad            | StudyGrid                  |
| lucide-react   | Iconos (X, CheckCircle2, AlertCircle, ArrowRight) | SubjectDetails |

## 8. Estilos

Cada componente tiene su archivo CSS compañero (`ComponentName.css`). Los estilos globales y variables CSS están en `index.css`. Los estilos de colores de estado se definen como variables CSS:

```css
--status-aprobado-bg:  /* Verde - Aprobada */
--status-regular-bg:   /* Azul - Regularizada */
--status-curso-bg:     /* Celeste - Podés Cursar */
--status-none-bg:      /* Gris - Pendiente */
```
