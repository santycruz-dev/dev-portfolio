
import React from "react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Bio: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6 animate-fade-in animate-slide-in">
            <h2 className="section-title">Sobre mí</h2>
            <p className="text-lg leading-relaxed">
              Soy un desarrollador frontend apasionado por crear experiencias web excepcionales y accesibles. Especializado en React y su ecosistema, con un fuerte enfoque en interfaces de usuario modernas y prácticas de desarrollo sostenibles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mi enfoque combina habilidades técnicas sólidas con un ojo para el diseño, permitiéndome construir aplicaciones que son tanto funcionales como visualmente atractivas. Constantemente me mantengo actualizado con las últimas tecnologías y mejores prácticas en el desarrollo web.
            </p>
            <div className="pt-4">
              <Button className="flex items-center">
                <FileDown className="mr-2 h-4 w-4" /> Descargar CV
              </Button>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div>
              <h3 className="text-xl font-semibold mb-3">Habilidades técnicas</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Frontend</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> React / Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Vue / Nuxt
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Tailwind CSS
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> CSS / Sass
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Herramientas</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Git / GitHub
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Vite / Webpack
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Jest / Testing Library
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Figma / Adobe XD
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> CI/CD
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Experiencia</h3>
              <ScrollArea className="h-[300px] pr-4 border-r border-border/30">
                <ul className="space-y-6">
                  <li className="relative border-l border-muted pl-6 pb-2">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-primary"></div>
                    <h4 className="font-semibold">Desarrollador Frontend Senior</h4>
                    <p className="text-sm text-muted-foreground">Empresa XYZ · 2020 - Presente</p>
                    <p className="text-sm mt-1">Desarrollo de aplicaciones web con React y Next.js, implementación de arquitectura frontend y optimización de rendimiento.</p>
                  </li>
                  <li className="relative border-l border-muted pl-6 pb-2">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-primary"></div>
                    <h4 className="font-semibold">Desarrollador Frontend</h4>
                    <p className="text-sm text-muted-foreground">Empresa ABC · 2018 - 2020</p>
                    <p className="text-sm mt-1">Desarrollo de interfaces de usuario con Vue.js, integración de APIs y mejoras de accesibilidad.</p>
                  </li>
                  <li className="relative border-l border-muted pl-6 pb-2">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-primary"></div>
                    <h4 className="font-semibold">Desarrollador Web</h4>
                    <p className="text-sm text-muted-foreground">Startup DEF · 2016 - 2018</p>
                    <p className="text-sm mt-1">Desarrollo de sitios web responsivos, implementación de diseños UI/UX y optimización de velocidad de carga.</p>
                  </li>
                  <li className="relative border-l border-muted pl-6 pb-2">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-primary"></div>
                    <h4 className="font-semibold">Desarrollador Frontend Junior</h4>
                    <p className="text-sm text-muted-foreground">Agencia GHI · 2014 - 2016</p>
                    <p className="text-sm mt-1">Implementación de diseños web, desarrollo con HTML5, CSS3 y JavaScript, creación de componentes interactivos.</p>
                  </li>
                  <li className="relative border-l border-muted pl-6 pb-2">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-primary"></div>
                    <h4 className="font-semibold">Pasante de Desarrollo Web</h4>
                    <p className="text-sm text-muted-foreground">Empresa JKL · 2013 - 2014</p>
                    <p className="text-sm mt-1">Asistencia en el desarrollo de sitios web corporativos, mantenimiento de contenido y soporte técnico.</p>
                  </li>
                </ul>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
