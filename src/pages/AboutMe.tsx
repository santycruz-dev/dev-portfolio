
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bio from "@/components/Bio";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mí</h1>
            <p className="text-xl text-muted-foreground">
              Conoce más sobre mi experiencia, habilidades y trayectoria profesional
            </p>
          </div>
          
          <Bio />

          <div className="mt-16 space-y-8 max-w-3xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-4">Mi historia</h2>
              <p className="text-muted-foreground mb-4">
                Mi camino en el desarrollo web comenzó hace más de 5 años, cuando descubrí la fascinante combinación de lógica y creatividad que ofrece el frontend. Desde entonces, he trabajado en una variedad de proyectos que han fortalecido mi experiencia y ampliado mis habilidades.
              </p>
              <p className="text-muted-foreground">
                Lo que más disfruto del desarrollo frontend es la constante evolución y el reto de crear interfaces que no solo sean visualmente atractivas, sino también funcionales, accesibles e intuitivas para todo tipo de usuarios.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Filosofía de trabajo</h2>
              <p className="text-muted-foreground mb-4">
                Creo firmemente en el desarrollo centrado en el usuario. Cada línea de código que escribo tiene como objetivo mejorar la experiencia de las personas que utilizarán el producto final.
              </p>
              <p className="text-muted-foreground">
                Mi enfoque combina principios de diseño moderno con buenas prácticas de desarrollo, accesibilidad web y optimización de rendimiento, siempre buscando el equilibrio perfecto entre estética y funcionalidad.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Fuera del código</h2>
              <p className="text-muted-foreground">
                Cuando no estoy programando, me gusta mantenerme actualizado sobre nuevas tecnologías, participar en comunidades de desarrollo y contribuir a proyectos open source. También disfruto de la fotografía, los videojuegos y explorar nuevos lugares.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
