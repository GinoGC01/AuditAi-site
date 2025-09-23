// src/data/funciones.ts

export type Example = {
  exampleDescription: string;
  images?: string[];
  files?: string[];
}

export type Funcion = {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  content: string;
  bullets?: string[];
  example?: Example;
};

export const funciones: Funcion[] = [
  {
    slug: 'lectura-archivos',
    title: 'Lectura automática de PDFs y Excel',
    description: 'Subí resúmenes bancarios o planillas y AuditAi extrae automáticamente las partidas relevantes en segundos.',
    icon: '📄',
    content:
      'AuditAi procesa PDFs (incluido OCR en imágenes) y archivos Excel para identificar tablas, columnas y campos contables. ' +
      'Nuestro pipeline combina OCR, parsers de tablas y reglas de reconocimiento (fechas, montos, CUIT/CUIL, descripciones) para estructurar la información. ' +
      'Resultado: datos normalizados listos para análisis, conciliación y generación de reportes, sin carga manual.',
    bullets: [
      'Soporte: PDF (text layer / imagen) y XLS/XLSX/CSV',
      'OCR optimizado para extractos y facturas (solo fotos dentro de PDF)',
      'Normalización automática de fechas y montos'
    ],
    example: {
      exampleDescription: 'Ejemplo: de un resumen bancario PDF extraemos: fecha, descripción, importe, tipo (crédito/débito) y categoría tentativa.',
      images: [
        '/funciones/lectura/lectura1.jpg',
        '/funciones/lectura/lectura2.jpg'
      ],
      files: ['/funciones/lectura/BBAV-Bank-Statement-TemplateLab.com_.pdf']
    }
  },
  {
    slug: 'deteccion-impuestos',
    title: 'Detección de impuestos y gastos',
    description: 'Identifica ingresos, retenciones e impuestos aplicables para simplificar la conciliación fiscal.',
    icon: '💰',
    content:
      'AuditAi detecta y clasifica partidas impositivas —IVA, retenciones, percepciones— y las vincula a transacciones cuando es posible. ' +
      'Aplica reglas fiscales y heurísticas para marcar montos que requieren atención fiscal o ajuste, facilitando la presentación y el cálculo de obligaciones. ' +
      'Además genera reportes que consolidan totales por tipo de impuesto para que el contador los valide fácilmente.',
    bullets: [
      'Clasificación automática por tipo impositivo',
      'Suma y reporte por régimen (IVA, Ganancias, Retenciones)',
      'Señalado de partidas recicladas o dudosas para revisión'
    ],
    example: {
      exampleDescription: 'Ejemplo: detecta una retención bancaria y la asocia al proveedor/operación, calculando la base imponible sugerida.',
      images: ['/funciones/deteccion-impuestos/deteccion1.jpg'],
      files: ['/funciones/deteccion-impuestos/Resumen_Cuenta_Santander.pdf']
    }
  },
  {
    slug: 'reportes-accionables',
    title: 'Reportes claros y accionables',
    description: 'Generación de informes listos para presentar: resumen de ingresos, gastos, impuestos y puntos de atención.',
    icon: '📊',
    content:
      'AuditAi genera reportes directamente dentro del chat para agilizar la lectura y comprensión de la información contable. ' +
      'Los reportes muestran ingresos, egresos, impuestos y saldos, acompañados de observaciones clave. ' +
      'Esto facilita el intercambio de datos con clientes o colegas sin pérdida de tiempo y mantiene la rigurosidad contable necesaria.',
    bullets: [
      'Reportes claros y breves, listos para leer sin salir del chat',
      'Identificación automática de anomalías e inconsistencias',
      'Comparativos y métricas que permiten tomar decisiones rápidas'
    ],
    example: {
      exampleDescription: 'Ejemplo: un reporte mensual que muestra margen, variación vs mes anterior y 3 alertas prioritarias.',
      images: [
        '/funciones/reporte-alertas/reporte1.jpg',
        '/funciones/reporte-alertas/reporte2.jpg'
      ],
      files: [
        '/funciones/reporte-alertas/Resumen_Cuenta_Santander_Sep2025.pdf',
        '/funciones/deteccion-impuestos/Resumen_Cuenta_Santander.pdf'
      ]
    }
  },
  {
    slug: 'deteccion-inconsistencias',
    title: 'Detección de inconsistencias',
    description: 'AuditAi encuentra errores y patrones sospechosos que suelen pasar desapercibidos en revisiones manuales.',
    icon: '⚡',
    content:
      'Utilizamos reglas y modelos que detectan duplicados, discrepancias entre montos y movimientos esperados, y patrones fuera de lo común. ' +
      'Cada inconsistencia se etiqueta con un nivel de prioridad y una sugerencia de chequeo para que el contador actúe rápido.',
    bullets: [
      'Detección de duplicados y transacciones incompletas',
      'Alertas por desvíos estadísticos y montos atípicos',
      'Prioridad y guía de verificación para cada hallazgo'
    ],
    example: {
      exampleDescription: 'Ejemplo: detecta un cargo recurrente con variación de monto >50% respecto a su histórico y lo marca como alto.',
      images: [
        '/funciones/deteccion-inconsistencias/inconsistencia1.jpg',
        '/funciones/deteccion-inconsistencias/inconsistencia2.jpg'
      ],
      files: ['/funciones/deteccion-inconsistencias/Bank-Statement-Template-3-TemplateLab.pdf']
    }
  },
  {
    slug: 'ahorro-tiempo',
    title: 'Ahorro de tiempo',
    description: 'Automatiza flujos repetitivos y liberá horas para tareas de mayor valor agregado.',
    icon: '⏱️',
    content:
      'AuditAi reduce drásticamente el tiempo de procesamiento mediante carga masiva, reglas automáticas y plantillas reutilizables. ' +
      'Con workflows configurables, podés procesar lotes de reportes y distribuir resultados a clientes o integrarlos con tu software contable.',
    bullets: [
      'Procesamiento por lotes y plantillas',
      'Integraciones posibles (export a ERP/conta)',
      'Flujos repetibles y audit trail para control'
    ],
    example: {
      exampleDescription: 'Ejemplo: procesar todos los extractos del mes en 2 minutos y exportar un pack de reportes por cliente.',
      images: [
        '/funciones/tiempo/tiempo1.jpg',
        '/funciones/tiempo/tiempo2.jpg'
      ],
      files: ['/funciones/deteccion-inconsistencias/Bank-Statement-Template-3-TemplateLab.pdf']
    }
  }
]

export default funciones
