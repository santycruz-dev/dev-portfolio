
import { ProjectProps } from "@/components/ProjectCard";

export const projects: ProjectProps[] = [
  {
    title: "E-commerce Responsivo con React",
    summary: "Tienda online moderna con interfaz adaptable y carrito de compras dinámico, construida con React, Redux y Stripe.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    objective: "Crear una plataforma de comercio electrónico completa y fácil de usar, con un enfoque en la experiencia móvil y optimización de rendimiento.",
    technologies: ["React", "Redux", "Tailwind CSS", "Stripe", "Firebase"],
    challenges: "Los principales desafíos incluyeron la gestión del estado complejo del carrito de compras, sincronización con usuarios no autenticados, y optimización de rendimiento para dispositivos móviles con conexiones lentas.",
    results: "Se logró un aumento del 35% en la tasa de conversión móvil y una reducción del 40% en el tiempo de carga mediante lazy loading, code splitting y optimización de imágenes.",
    repoUrl: "https://github.com/username/ecommerce-project",
    demoUrl: "https://ecommerce-project.demo",
    features: [
      "Carrito persistente entre sesiones",
      "Pagos con Stripe integrado",
      "Animaciones suaves para una mejor UX",
      "Modo oscuro automático y manual"
    ],
  },
  {
    title: "Dashboard Analytics con Next.js",
    summary: "Panel de control para visualización de datos estadísticos en tiempo real, desarrollado con Next.js, React Query y D3.js.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    objective: "Desarrollar una herramienta de visualización de datos poderosa que procese y presente información compleja de manera intuitiva.",
    technologies: ["Next.js", "TypeScript", "React Query", "D3.js", "Recharts"],
    challenges: "La manipulación eficiente de grandes volúmenes de datos y la creación de visualizaciones interactivas que mantuvieran un buen rendimiento fueron los principales retos técnicos.",
    results: "El dashboard redujo el tiempo de análisis de datos en un 60% para los usuarios finales, con implementaciones de server-side rendering que optimizaron la carga inicial.",
    repoUrl: "https://github.com/username/analytics-dashboard",
    demoUrl: "https://analytics-dashboard.demo",
    features: [
      "Gráficos interactivos en tiempo real",
      "Exportación de datos en múltiples formatos",
      "Filtros avanzados personalizables",
      "Diseño responsive para todas las pantallas"
    ],
  },
  {
    title: "Aplicación de Tareas con Vue",
    summary: "Gestor de tareas avanzado con funciones colaborativas, calendario integrado y métricas de productividad, usando Vue 3 y Composition API.",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    objective: "Desarrollar una aplicación que ayude a gestionar tareas de manera eficiente con características colaborativas y análisis de productividad.",
    technologies: ["Vue 3", "Composition API", "Pinia", "Vite", "Firebase Auth"],
    challenges: "La sincronización en tiempo real entre usuarios y dispositivos requirió una arquitectura cuidadosa para garantizar consistencia de datos y prevenir conflictos de edición.",
    results: "La aplicación logró un NPS de 82 entre sus primeros usuarios, destacando especialmente la intuitividad de la interfaz y la velocidad de sincronización.",
    repoUrl: "https://github.com/username/task-app",
    demoUrl: "https://task-app.demo",
    features: [
      "Edición colaborativa en tiempo real",
      "Análisis de productividad visual",
      "Modo offline con sincronización posterior",
      "Notificaciones personalizables"
    ],
  },
  {
    title: "App móvil con React Native",
    summary: "Aplicación móvil multiplataforma para seguimiento de fitness y nutrición con seguimiento GPS y análisis de progreso.",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    objective: "Diseñar una aplicación móvil que permita a los usuarios hacer seguimiento de su actividad física y nutrición con una experiencia fluida en iOS y Android.",
    technologies: ["React Native", "Expo", "Redux Toolkit", "Firebase", "Maps API"],
    challenges: "Integrar el seguimiento GPS con bajo consumo de batería y mantener la sincronización de datos entre dispositivos fueron los principales desafíos técnicos.",
    results: "La aplicación alcanzó 50,000 descargas en los primeros 3 meses, con una calificación promedio de 4.7 estrellas en ambas tiendas de aplicaciones.",
    repoUrl: "https://github.com/username/fitness-tracker-app",
    demoUrl: "https://fitness-app.demo",
    features: [
      "Seguimiento GPS de actividades en tiempo real",
      "Análisis personalizado de nutrición",
      "Sincronización entre dispositivos",
      "Modo offline con sincronización posterior"
    ],
  },
  {
    title: "Plataforma educativa con Microservicios",
    summary: "Sistema de gestión de aprendizaje con arquitectura de microservicios, enfocado en escalabilidad y experiencia de usuario.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    objective: "Crear una plataforma educativa completa que permita a instituciones gestionar cursos, estudiantes y contenido educativo de manera eficiente.",
    technologies: ["Node.js", "Express", "MongoDB", "Docker", "Kubernetes", "React"],
    challenges: "Diseñar una arquitectura de microservicios que mantuviera alta disponibilidad y consistencia de datos mientras soportaba picos de tráfico durante exámenes.",
    results: "La plataforma actualmente soporta más de 50,000 estudiantes y 2,000 educadores, con un tiempo de actividad del 99.9% y tiempos de respuesta por debajo de 200ms.",
    repoUrl: "https://github.com/username/learning-platform",
    demoUrl: "https://edu-platform.demo",
    features: [
      "Sistema de videoconferencias integrado",
      "Evaluaciones automatizadas",
      "Panel de analíticas para educadores",
      "Sistema de recomendación de contenido personalizado"
    ],
  },
];
