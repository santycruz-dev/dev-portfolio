
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      
      <section className="py-16 md:py-24 relative z-10">
        <div className="container">
          <div className="max-w-3xl mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Contacto</span>
            </h1>
            <div className="w-24 h-px bg-primary mb-6"></div>
            <p className="text-xl text-muted-foreground">
              ¿Tienes un proyecto en mente o quieres hablar sobre oportunidades de colaboración? Estoy aquí para ayudarte.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="border border-border/40 bg-card p-6 rounded-md">
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
