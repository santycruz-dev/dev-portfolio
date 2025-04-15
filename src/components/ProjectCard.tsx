
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
      <div className="project-card h-full flex flex-col animate-fade-in animate-slide-up" style={{ animationDelay: "100ms" }}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{summary}</p>

        <div className="relative mb-4 overflow-hidden rounded-lg border border-border">
          <img 
            src={imageUrl} 
            alt={`${title} screenshot`}
            className="w-full h-40 object-cover transition-transform duration-700 hover:scale-105" 
          />
        </div>

        <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="tech-badge text-xs">
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="tech-badge text-xs">+{technologies.length - 3}</span>
            )}
          </div>
        </div>

        <div className="mt-auto flex justify-end">
          <Link 
            to="/proyectos" 
            className="text-primary hover:text-primary/80 transition-colors text-sm flex items-center gap-1"
          >
            Ver detalles <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card animate-fade-in animate-slide-up" style={{ animationDelay: "100ms" }}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{summary}</p>

      <div className="relative mb-6 overflow-hidden rounded-lg border border-border">
        <img 
          src={imageUrl} 
          alt={`${title} screenshot`}
          className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" 
        />
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-1">Objetivo y contexto</h4>
        <p className="text-muted-foreground text-sm">{objective}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-1">Tecnologías</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-1">Desafíos y soluciones</h4>
        <p className="text-muted-foreground text-sm">{challenges}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-1">Resultados y aprendizajes</h4>
        <p className="text-muted-foreground text-sm">{results}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-1">Características destacadas</h4>
        <ul className="text-muted-foreground text-sm list-disc list-inside">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        <Button asChild variant="default">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Ver demo
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Ver código
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
