
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-xl text-muted-foreground">
              ¿Tienes un proyecto en mente o quieres hablar sobre oportunidades de colaboración? Estoy aquí para ayudarte.
            </p>
          </div>
          
          <Contact />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
