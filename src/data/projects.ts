import { ProjectProps } from "@/components/ProjectCard";

export const projects: ProjectProps[] = [
  {
    title: "Responsive React E-commerce",
    summary: "Modern online store with adaptive interface and dynamic shopping cart, built with React, Redux and Stripe.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    objective: "Create a complete and user-friendly e-commerce platform with focus on mobile experience and performance optimization.",
    technologies: ["React", "Redux", "Tailwind CSS", "Stripe", "Firebase"],
    challenges: "Main challenges included managing complex shopping cart state, synchronization with unauthenticated users, and performance optimization for mobile devices with slow connections.",
    results: "Achieved 35% increase in mobile conversion rate and 40% reduction in load time through lazy loading, code splitting and image optimization.",
    repoUrl: "https://github.com/username/ecommerce-project",
    demoUrl: "https://ecommerce-project.demo",
    features: [
      "Shopping cart persistent between sessions",
      "Integrated Stripe payments",
      "Smooth animations for better UX",
      "Automatic and manual dark mode"
    ],
  },
  {
    title: "Next.js Analytics Dashboard",
    summary: "Control panel for real-time statistical data visualization, developed with Next.js, React Query and D3.js.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    objective: "Develop a powerful data visualization tool that processes and presents complex information in an intuitive way.",
    technologies: ["Next.js", "TypeScript", "React Query", "D3.js", "Recharts"],
    challenges: "Efficient handling of large data volumes and creating interactive visualizations that maintained good performance were the main technical challenges.",
    results: "The dashboard reduced data analysis time by 60% for end users, with server-side rendering implementations that optimized initial load.",
    repoUrl: "https://github.com/username/analytics-dashboard",
    demoUrl: "https://analytics-dashboard.demo",
    features: [
      "Interactive real-time charts",
      "Data export in multiple formats",
      "Customizable advanced filters",
      "Responsive design for all screens"
    ],
  },
  {
    title: "Vue Task Application",
    summary: "Advanced task manager with collaborative features, integrated calendar and productivity metrics, using Vue 3 and Composition API.",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    objective: "Develop an application to efficiently manage tasks with collaborative features and productivity analysis.",
    technologies: ["Vue 3", "Composition API", "Pinia", "Vite", "Firebase Auth"],
    challenges: "Real-time synchronization between users and devices required careful architecture to ensure data consistency and prevent editing conflicts.",
    results: "The application achieved an NPS of 82 among its first users, especially highlighting interface intuitiveness and synchronization speed.",
    repoUrl: "https://github.com/username/task-app",
    demoUrl: "https://task-app.demo",
    features: [
      "Real-time collaborative editing",
      "Visual productivity analysis",
      "Offline mode with later synchronization",
      "Customizable notifications"
    ],
  },
  {
    title: "React Native Mobile App",
    summary: "Cross-platform mobile app for fitness and nutrition tracking with GPS monitoring and progress analysis.",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    objective: "Design a mobile app that allows users to track their physical activity and nutrition with a smooth experience on iOS and Android.",
    technologies: ["React Native", "Expo", "Redux Toolkit", "Firebase", "Maps API"],
    challenges: "Integrating GPS tracking with low battery consumption and maintaining data synchronization between devices were the main technical challenges.",
    results: "The app reached 50,000 downloads in the first 3 months, with an average rating of 4.7 stars on both app stores.",
    repoUrl: "https://github.com/username/fitness-tracker-app",
    demoUrl: "https://fitness-app.demo",
    features: [
      "Real-time GPS activity tracking",
      "Personalized nutrition analysis",
      "Cross-device synchronization",
      "Offline mode with later synchronization"
    ],
  },
  {
    title: "Microservices Education Platform",
    summary: "Learning management system with microservices architecture, focused on scalability and user experience.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    objective: "Create a complete educational platform that allows institutions to efficiently manage courses, students and educational content.",
    technologies: ["Node.js", "Express", "MongoDB", "Docker", "Kubernetes", "React"],
    challenges: "Designing a microservices architecture that maintained high availability and data consistency while supporting traffic spikes during exams.",
    results: "The platform currently supports over 50,000 students and 2,000 educators, with 99.9% uptime and response times under 200ms.",
    repoUrl: "https://github.com/username/learning-platform",
    demoUrl: "https://edu-platform.demo",
    features: [
      "Integrated video conferencing system",
      "Automated assessments",
      "Analytics panel for educators",
      "Personalized content recommendation system"
    ],
  },
];
