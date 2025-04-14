
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Bio from "@/components/Bio";
import Contact from "@/components/Contact";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, ExternalLink, Layout, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto space-y-5 animate-fade-in animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Desarrollador Frontend <span className="text-primary">creativo y apasionado</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Construyo experiencias web modernas, accesibles y de alto rendimiento
              que conectan con los usuarios y resuelven problemas reales.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button size="lg" asChild>
                <Link to="/proyectos">
                  Ver proyectos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contacto">Contacto</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="hidden md:block absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="hidden md:block absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Features section */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="section-title inline-block mx-auto">Mi enfoque</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border animate-fade-in animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Layout className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diseño Moderno</h3>
              <p className="text-muted-foreground">
                Interfaces limpias, elegantes y altamente usables que priorizan la experiencia de usuario.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border animate-fade-in animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Código Limpio</h3>
              <p className="text-muted-foreground">
                Desarrollo estructurado, mantenible y siguiendo las mejores prácticas actuales.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border animate-fade-in animate-slide-up" style={{ animationDelay: "300ms" }}>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alto Rendimiento</h3>
              <p className="text-muted-foreground">
                Aplicaciones optimizadas que cargan rápidamente y funcionan con fluidez en cualquier dispositivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects preview section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex justify-between items-center mb-14">
            <h2 className="section-title">Proyectos destacados</h2>
            <Link 
              to="/proyectos" 
              className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              Ver todos <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Bio section */}
      <Bio />

      {/* Contact section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default Index;
