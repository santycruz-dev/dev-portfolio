
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">DevPortfolio</h3>
            <p className="text-sm text-muted-foreground">
              Portafolio profesional de desarrollo frontend, con enfoque en tecnologías modernas y diseño de experiencias de usuario excepcionales.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/proyectos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="/sobre-mi" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">Contacto</h3>
            <div className="flex space-x-3">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:tu@email.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              tu@email.com
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DevPortfolio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
