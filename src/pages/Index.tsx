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
                Web Innovation
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Freelance <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary">Frontend</span> Web3 Developer
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl relative">
              I build modern, accessible, high-performance web experiences
              that connect with users and solve real problems.
              <span className="absolute -left-6 top-0 h-full w-1 bg-primary/50 rounded-full"></span>
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300" onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                View projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 w-full h-full bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary group" onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Contact me
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 pt-6 border-t border-border/40">
              <div>
                <div className="text-3xl font-bold text-primary">+15</div>
                <div className="text-sm text-muted-foreground">Projects completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">+3</div>
                <div className="text-sm text-muted-foreground">Years of experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfied clients</div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="hidden md:block absolute bottom-10 right-10 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,152,0,0.05) 0%, rgba(0,0,0,0) 85%)',
            filter: 'blur(15px)',
            animation: 'pulse-glow 10s ease-in-out infinite',
            opacity: '0.5'
          }}
        />
        <div 
          className="hidden md:block absolute bottom-20 left-10 w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,152,0,0.03) 0%, rgba(0,0,0,0) 85%)',
            filter: 'blur(12px)',
            animation: 'pulse-glow 8s ease-in-out infinite',
            opacity: '0.3'
          }}
        />
        <div 
          className="hidden md:block absolute top-1/3 right-32 w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,152,0,0.04) 0%, rgba(0,0,0,0) 85%)',
            filter: 'blur(10px)',
            animation: 'pulse-glow 9s ease-in-out infinite',
            opacity: '0.3',
            animationDelay: '1s'
          }}
        />
      </section>

      {/* Features section */}
      <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-40 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          
        </div>

        <div className="container relative z-10">
          <div className="mb-16 max-w-2xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-primary/30 rounded-full bg-primary/10 text-primary">
                Featured Projects
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Modern web experiences with <span className="text-gradient">advanced technology</span></h2>
            <p className="text-muted-foreground">Innovative digital solutions designed for an ever-evolving technological landscape</p>
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

        <div 
          className="hidden md:block absolute -bottom-20 right-10 w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,152,0,0.03) 0%, rgba(0,0,0,0) 85%)',
            filter: 'blur(12px)',
            animation: 'pulse-glow 8s ease-in-out infinite',
            opacity: '0.3'
          }}
        />
        <div 
          className="hidden md:block absolute top-40 left-10 w-20 h-20 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,152,0,0.02) 0%, rgba(0,0,0,0) 85%)',
            filter: 'blur(8px)',
            animation: 'pulse-glow 7s ease-in-out infinite',
            opacity: '0.3',
            animationDelay: '1.2s'
          }}
        />
      </section>

      {/* Services section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/40">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-3xl font-bold">
              Specialized <br/>
              <span className="text-primary">development services</span> & expertise
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
            <div className="border border-border/40 bg-card p-6 rounded-md group transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Frontend Development</h3>
              </div>
              <p className="text-muted-foreground mb-6 relative z-10">
                Creating responsive, accessible, and performant user interfaces with modern frameworks like React, Next.js, and TypeScript.
              </p>
              <Link to="/services" className="text-primary text-sm hover:underline relative z-10">Learn more</Link>
            </div>
            
            <div className="border border-border/40 bg-card p-6 rounded-md group transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <Database className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Web3 Integration</h3>
              </div>
              <p className="text-muted-foreground mb-6 relative z-10">
                Implementing blockchain solutions, smart contract integration, and decentralized applications with Ethereum, Solana, and more.
              </p>
              <Link to="/services" className="text-primary text-sm hover:underline relative z-10">Learn more</Link>
            </div>
            
            <div className="border border-border/40 bg-card p-6 rounded-md group transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <Layout className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">UI/UX Design</h3>
              </div>
              <p className="text-muted-foreground mb-6 relative z-10">
                Designing intuitive user experiences and visually appealing interfaces that enhance user engagement and satisfaction.
              </p>
              <Link to="/services" className="text-primary text-sm hover:underline relative z-10">Learn more</Link>
            </div>
            
            <div className="border border-border/40 bg-card p-6 rounded-md group transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Performance Optimization</h3>
              </div>
              <p className="text-muted-foreground mb-6 relative z-10">
                Improving application speed, responsiveness, and overall performance through advanced optimization techniques.
              </p>
              <Link to="/services" className="text-primary text-sm hover:underline relative z-10">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

          {/* Bio section */}
          <Bio />


      {/* Testimonials section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-3xl font-bold">
              Client <br/>
              <span className="text-primary">testimonials</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border/40 bg-card p-6 rounded-md flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">"</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-4 italic">
                  "The web application developed exceeded our expectations. The attention to detail and performance optimization made a significant difference in our user engagement metrics."
                </p>
                <h3 className="text-lg font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-xs text-muted-foreground/70">CTO, TechVision Inc.</p>
              </div>
            </div>
            
            <div className="border border-border/40 bg-card p-6 rounded-md flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">"</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-4 italic">
                  "Working with this developer was a seamless experience. Their expertise in Web3 technologies helped us launch our dApp ahead of schedule with all the features we needed."
                </p>
                <h3 className="text-lg font-semibold mb-1">Michael Chen</h3>
                <p className="text-xs text-muted-foreground/70">Founder, BlockChain Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  

  
      {/* Contact section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
