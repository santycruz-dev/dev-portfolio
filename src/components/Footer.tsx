import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background relative overflow-hidden">
      {/* Decorative luminosity circle */}
      <div 
        className="hidden md:block absolute bottom-16 right-16 w-[30rem] h-[30rem] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,152,0,0.1) 0%, rgba(0,0,0,0) 85%)',
          filter: 'blur(25px)',
          opacity: '0.6',
          animation: 'pulse-glow 8s ease-in-out infinite'
        }}
      />
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">
              <span className="text-primary">Dev</span>Portfolio
            </h3>
            <p className="text-sm text-muted-foreground">
              Professional frontend development portfolio, focused on modern technologies and exceptional user experience design.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/proyectos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/sobre-mi" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="flex space-x-3">
              <a
                href="https://github.com/santycruz-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 152, 0, 0.5))' }} />
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 152, 0, 0.5))' }} />
              </a>
              <a
                href="mailto:santycruz.dev@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 152, 0, 0.5))' }} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
            santycruz.dev@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {currentYear} DevPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
