
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-72 -right-72 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 -left-72 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-72 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <Header />
      
      <section className="py-16 md:py-24 relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mis <span className="text-gradient">proyectos</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary/80 mx-auto mb-6 rounded-full"></div>
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
