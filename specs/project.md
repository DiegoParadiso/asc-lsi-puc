# Plan de Estudio FCEQYN — UNAM

> Aplicación web interactiva para visualizar y realizar seguimiento del progreso en los planes de estudio de la Facultad de Ciencias Exactas, Químicas y Naturales (UNAM).

---

## Propósito

Permitir a estudiantes de carreras de informática de la FCEQYN realizar un seguimiento visual de su avance académico, consultar correlatividades entre materias, y conocer en tiempo real qué materias están habilitadas para cursar según su progreso actual.

## Stack Tecnológico

| Capa        | Tecnología                    |
|-------------|-------------------------------|
| Framework   | React 19                      |
| Build       | Vite 7                        |
| Animaciones | Framer Motion                 |
| Flechas     | react-xarrows                 |
| Iconos      | lucide-react                  |
| Persistencia| localStorage                  |
| Tipado      | Ninguno (JSX puro)            |

## Carreras Soportadas

| Carrera                              | Plan | ID del Plan         |
|--------------------------------------|------|---------------------|
| Analista en Sistemas de Computación  | 2010 | `analista-2010`     |
| Licenciatura en Sistemas de Información | 2013 | `licenciatura-2013` |
| Profesorado Universitario en Computación | 2015 | `profesorado-2015`  |

## Funcionalidades Clave

1. **Visualización por grilla** — Materias organizadas por año y cuatrimestre.
2. **Ciclo de estados** — Click izquierdo cicla: `Pendiente → Regularizada → Aprobada → Pendiente`.
3. **"Podés Cursar" dinámico** — Si todas las correlativas de cursado están satisfechas, la materia se marca automáticamente como "Podés Cursar".
4. **Flechas de correlatividad** — Click derecho sobre una materia muestra las flechas entrantes y salientes.
5. **Barra de progreso** — Estadísticas en tiempo real con porcentaje de avance.
6. **Persistencia local** — Los estados se guardan en `localStorage` y se restauran al recargar.
7. **Selector de plan** — Pestañas para cambiar entre las 3 carreras.

## Arquitectura del Proyecto

```
src/
├── main.jsx                        # Entry point
├── App.jsx                         # Orquestador raíz
├── App.css                         # Estilos globales
├── index.css                       # Reset + variables CSS
├── data/
│   └── studyPlans.js               # [M1] Datos: definiciones de planes
├── hooks/
│   └── useSubjectStatus.js         # [M2] Hook: estado + persistencia
├── utils/
│   └── correlativity.js            # [M3] Utilidades de correlatividad
└── components/
    ├── StudyGrid.jsx               # [M4a] Grilla principal con años
    ├── SubjectCard.jsx             # [M4b] Card de materia individual
    ├── SubjectDetails.jsx          # [M4c] Panel detalle de materia
    ├── StatsBar.jsx                # [M4d] Barra de estadísticas
    ├── PlanSelector.jsx            # [M4e] Selector de plan
    └── *.css                       # Estilos por componente
```

## Módulos Identificados

| Módulo | Archivo(s)                          | Responsabilidad                              |
|--------|-------------------------------------|----------------------------------------------|
| M1     | `src/data/studyPlans.js`            | Datos estáticos de planes de estudio         |
| M2     | `src/hooks/useSubjectStatus.js`     | Estado de materias, ciclo, localStorage      |
| M3     | `src/utils/correlativity.js`        | Consultas de correlatividad                  |
| M4     | `src/components/*.jsx`              | Componentes de presentación UI               |
| M5     | `src/App.jsx`                       | Orquestación y layout raíz                   |

## Estados de una Materia

| Estado         | Significado                              | ¿Persiste? |
|----------------|------------------------------------------|------------|
| `Pendiente`    | No se ha cursado (valor por defecto)     | Sí         |
| `Podes Cursar` | Cumple correlativas para cursar (automático) | No (se computa) |
| `Regularizada` | Cursada y regularizada                   | Sí         |
| `Aprobada`     | Examen final aprobado                    | Sí         |
| `En Curso`     | Cursando actualmente (dato inicial)      | Sí         |

## Convenciones

- **IDs de materias**: prefijo según carrera (`AS` = Analista, `L13` = Licenciatura, `PC` = Profesorado) + número secuencial.
- **Condiciones de correlatividad**: `Regularizada` (cursado aprobado) o `Aprobada` (final aprobado).
- **Persistencia**: clave `fceqyn-status-v3-${planId}` en `localStorage`.
- **Idioma**: nombres y comentarios en español (dominio del negocio).
