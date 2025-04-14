
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-96 right-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-96 -left-48 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-0 transform -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '5s' }}></div>
      </div>
      
      <Header />
      
      <section className="py-16 md:py-24 relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Contacto</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary/80 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-muted-foreground">
              ¿Tienes un proyecto en mente o quieres hablar sobre oportunidades de colaboración? Estoy aquí para ayudarte.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="gradient-card glass-card shadow-soft">
              <Contact />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
