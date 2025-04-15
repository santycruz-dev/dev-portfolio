import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface ProjectProps {
  title: string;
  summary: string;
  imageUrl: string;
  objective: string;
  technologies: string[];
  challenges: string;
  results: string;
  repoUrl: string;
  demoUrl: string;
  features: string[];
}

interface ProjectCardProps {
  project: ProjectProps;
  isPreview?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isPreview = false }) => {
  const {
    title,
    summary,
    imageUrl,
    objective,
    technologies,
    challenges,
    results,
    repoUrl,
    demoUrl,
    features,
  } = project;

  if (isPreview) {
    return (
      <div className="project-card flex flex-col bg-card/50 hover:bg-card transition-colors duration-500 rounded-xl border border-border/40 hover:border-primary/20 p-5 shadow-sm hover:shadow-md animate-fade-in animate-slide-up group" style={{ animationDelay: "100ms" }}>
        <div className="relative mb-5 overflow-hidden rounded-lg border border-border/60 aspect-video">
          <img 
            src={imageUrl} 
            alt={`${title} screenshot`}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-end p-3">
            <span className="text-white text-xs font-medium">Ver proyecto</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{summary}</p>

        <div className="mb-3">
          {/* Default view with first 3 tags and +X indicator */}
          <div className="flex flex-wrap gap-2 group-hover:hidden">
            {technologies.slice(0, 3).map((tech, index) => (
              <span key={`visible-${index}`} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
            
            {technologies.length > 3 && (
              <span className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium">
                +{technologies.length - 3}
              </span>
            )}
          </div>
          
          {/* Expanded view with all tags */}
          <div className="hidden flex-wrap gap-2 group-hover:flex">
            {technologies.map((tech, index) => (
              <span 
                key={`all-${index}`} 
                className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ease-in-out"
                style={{ 
                  transitionDelay: index >= 3 ? `${(index - 2) * 50}ms` : '0ms',
                  animation: index >= 3 ? 'fadeInScale 0.3s forwards' : 'none'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-3 border-t border-border/30 flex justify-between items-center">
          <div className="flex gap-2">
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110 transform">
                <Github className="h-4 w-4" />
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110 transform">
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
          <Link 
            to="/proyectos" 
            className="text-primary hover:text-primary/80 transition-colors duration-300 text-sm flex items-center gap-1 font-medium"
          >
            Ver detalles <ArrowRight className="h-3 w-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card bg-card/50 rounded-xl border border-border/40 p-6 shadow-sm animate-fade-in animate-slide-up" style={{ animationDelay: "100ms" }}>
      <h3 className="text-2xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-muted-foreground mb-6">{summary}</p>

      <div className="relative mb-8 overflow-hidden rounded-lg border border-border/60 aspect-video">
        <img 
          src={imageUrl} 
          alt={`${title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <div className="p-4 bg-muted/50 rounded-lg border border-border/30">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
              Objetivo y contexto
            </h4>
            <p className="text-muted-foreground text-sm">{objective}</p>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg border border-border/30">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
              Desafíos y soluciones
            </h4>
            <p className="text-muted-foreground text-sm">{challenges}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-muted/50 rounded-lg border border-border/30">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
              Resultados y aprendizajes
            </h4>
            <p className="text-muted-foreground text-sm">{results}</p>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg border border-border/30">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
              Características destacadas
            </h4>
            <ul className="text-muted-foreground text-sm space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
          Tecnologías
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-8 pt-4 border-t border-border/30">
        <Button asChild variant="default" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <ExternalLink className="mr-2 h-4 w-4" /> Ver demo
          </a>
        </Button>
        <Button asChild variant="outline" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Github className="mr-2 h-4 w-4" /> Ver código
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
