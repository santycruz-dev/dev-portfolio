
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
];
