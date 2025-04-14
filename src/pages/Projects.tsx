
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      
      <section className="py-16 md:py-24 relative z-10">
        <div className="container">
          <div className="max-w-3xl mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mis <span className="text-primary">proyectos</span>
            </h1>
            <div className="w-24 h-px bg-primary mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Explora una selección de mis trabajos más recientes y destacados en desarrollo frontend
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
