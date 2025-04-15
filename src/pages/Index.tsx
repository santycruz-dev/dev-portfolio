import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Bio from "@/components/Bio";
import Contact from "@/components/Contact";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, ExternalLink, Layout, Terminal, Zap, Shield, Database, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 right-1/4 w-56 h-56 bg-primary/5 rounded-full blur-3xl"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl space-y-8 animate-fade-in animate-slide-up">
            <div className="inline-block">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-primary/30 rounded-full bg-primary/10 text-primary mb-4">
                Web3 Innovation
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Enhancing <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary">New</span> Web3 Experience
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl relative">
              Construyo experiencias web modernas, accesibles y de alto rendimiento
              que conectan con los usuarios y resuelven problemas reales.
              <span className="absolute -left-6 top-0 h-full w-1 bg-primary/50 rounded-full"></span>
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300">
                <Link to="/proyectos" className="flex items-center z-10 relative">
                  Ver proyectos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="absolute inset-0 w-full h-full bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary group">
                <Link to="/contacto" className="flex items-center">
                  Contactar
                  <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 pt-6 border-t border-border/40">
              <div>
                <div className="text-3xl font-bold text-primary">+50</div>
                <div className="text-sm text-muted-foreground">Proyectos completados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">+5</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-10 right-10 w-64 h-64 border border-primary/20 rounded-full opacity-30 animate-pulse-slow"></div>
        <div className="hidden md:block absolute top-1/3 right-32 w-32 h-32 border border-accent/20 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="hidden md:block absolute bottom-20 left-10 w-40 h-40 border border-primary/30 rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
      </section>

      {/* Features section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-40 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container relative z-10">
          <div className="mb-16 max-w-2xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-primary/30 rounded-full bg-primary/10 text-primary">
                Características Destacadas
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Experiencia web moderna con <span className="text-gradient">tecnología avanzada</span></h2>
            <p className="text-muted-foreground">Soluciones tecnológicas diseñadas para un mundo digital en constante evolución</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card group">
              <div className="feature-icon-wrapper bg-primary/10 group-hover:bg-primary/20">
                <Shield className="feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Reliable, <span className="text-muted-foreground">tamper-proof network</span></h3>
              <p className="text-muted-foreground">
                Interfaces limpias, elegantes y altamente usables que priorizan la experiencia de usuario.
                Diseño optimizado para diferentes dispositivos y plataformas.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to="#" className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Leer más <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
            
            <div className="feature-card group">
              <div className="feature-icon-wrapper bg-accent/10 group-hover:bg-accent/20">
                <Database className="feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">Seamless <span className="text-muted-foreground">connection to any API</span></h3>
              <p className="text-muted-foreground">
                Desarrollo estructurado, mantenible y siguiendo las mejores prácticas actuales.
                Integración con APIs externas y servicios de terceros.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to="#" className="text-accent text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Leer más <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
            
            <div className="feature-card group">
              <div className="feature-icon-wrapper bg-primary/10 group-hover:bg-primary/20">
                <Workflow className="feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Proven, <span className="text-muted-foreground">ready-made solutions</span></h3>
              <p className="text-muted-foreground">
                Aplicaciones optimizadas que cargan rápidamente y funcionan con fluidez en cualquier dispositivo.
                Soluciones escalables y adaptables a diferentes necesidades.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to="#" className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Leer más <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute -bottom-20 right-10 w-40 h-40 border border-primary/20 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="hidden md:block absolute top-40 left-10 w-20 h-20 border border-accent/20 rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: "1.2s" }}></div>
      </section>

      {/* Code example section */}
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-3xl font-bold">
              Integrate services<br />
              <span className="text-gradient">into your dApp</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="rounded-md overflow-hidden border border-border/50 bg-black">
              <div className="flex items-center justify-between bg-secondary p-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-green-400 font-mono">
{`import { Web3Experience } from '@web3-experience/core';

const App = () => {
  return (
    <Web3Experience
      apiKey="YOUR_API_KEY"
      theme="dark"
      features={['wallet', 'transactions', 'nfts']}
    >
      <YourAppContent />
    </Web3Experience>
  );
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Projects preview section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/5">
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
          
          <div className="pb-10">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {projects.slice(0, 5).map((project, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="border-none bg-transparent">
                      <CardContent className="p-0">
                        <ProjectCard project={project} isPreview={true} />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-6">
                <CarouselPrevious className="static translate-y-0 ml-auto" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Program boxes section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/40">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-3xl font-bold">
              Get involved <br/>
              <span className="text-primary">through our grant</span> Programs
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border/40 bg-card p-6 rounded-md">
              <h3 className="text-lg font-semibold mb-4">Community grant program</h3>
              <p className="text-muted-foreground mb-6">
                Participa en nuestros programas de desarrollo comunitario y obtén financiamiento para tus proyectos innovadores.
              </p>
              <Link to="#" className="text-primary text-sm hover:underline">Leer más</Link>
            </div>
            
            <div className="border border-border/40 bg-card p-6 rounded-md">
              <h3 className="text-lg font-semibold mb-4">Integration grants program</h3>
              <p className="text-muted-foreground mb-6">
                Descubre oportunidades para integrar nuevas tecnologías en tus proyectos existentes con nuestro programa de ayudas.
              </p>
              <Link to="#" className="text-primary text-sm hover:underline">Leer más</Link>
            </div>
            
            <div className="border border-border/40 bg-card p-6 rounded-md">
              <h3 className="text-lg font-semibold mb-4">Social impact program</h3>
              <p className="text-muted-foreground mb-6">
                Crea aplicaciones que generen un impacto social positivo con el apoyo de nuestro programa especializado.
              </p>
              <Link to="#" className="text-primary text-sm hover:underline">Leer más</Link>
            </div>
            
            <div className="border border-border/40 bg-card p-6 rounded-md">
              <h3 className="text-lg font-semibold mb-4">Easy research program</h3>
              <p className="text-muted-foreground mb-6">
                Colabora con equipos de investigación y desarrollo para explorar nuevas posibilidades tecnológicas.
              </p>
              <Link to="#" className="text-primary text-sm hover:underline">Leer más</Link>
            </div>
          </div>
        </div>
      </section>

      {/* News section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-3xl font-bold">
              Our latest<br/>
              <span className="text-primary">news today</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border/40 bg-card p-6 rounded-md flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="number-indicator">01</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Lanzamiento de nueva plataforma</h3>
                <p className="text-muted-foreground mb-4">
                  Hemos lanzado nuestra nueva plataforma con características mejoradas y un rendimiento optimizado.
                </p>
                <p className="text-xs text-muted-foreground/70">Junio 15, 2023</p>
              </div>
            </div>
            
            <div className="border border-border/40 bg-card p-6 rounded-md flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="number-indicator">02</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Colaboración con nuevos partners</h3>
                <p className="text-muted-foreground mb-4">
                  Estamos emocionados de anunciar nuevas colaboraciones estratégicas con empresas líderes del sector.
                </p>
                <p className="text-xs text-muted-foreground/70">Mayo 28, 2023</p>
              </div>
            </div>
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
