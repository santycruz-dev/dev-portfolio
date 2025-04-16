import React from "react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Bio: React.FC = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Decorative luminosity circle */}
      <div 
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,152,0,0.1) 0%, rgba(0,0,0,0) 85%)',
          filter: 'blur(30px)',
          opacity: '0.6',
          animation: 'pulse-glow 8s ease-in-out infinite'
        }}
      />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6 animate-fade-in animate-slide-in">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg leading-relaxed">
              I'm a passionate frontend developer focused on creating exceptional and accessible web experiences. Specialized in React and its ecosystem, with a strong focus on modern user interfaces and sustainable development practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines solid technical skills with an eye for design, allowing me to build applications that are both functional and visually appealing. I constantly stay updated with the latest technologies and best practices in web development.
            </p>
            <div className="pt-4">
              <Button className="flex items-center">
                <FileDown className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-muted/70 rounded-lg p-6 shadow-sm border border-border/10 relative overflow-hidden group transition-all duration-300 hover:border-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <h3 className="text-xl font-semibold mb-4 text-primary relative z-10">Experience</h3>
              <ScrollArea className="h-[320px] pr-4 relative z-10">
                <ul className="space-y-6 pl-3">
                  <li className="relative border-l border-primary/30 pl-6 pb-2 group/item transition-all duration-300">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-primary group-hover/item:scale-110 transition-transform"></div>
                    <h4 className="font-semibold group-hover/item:text-primary transition-colors">Senior Frontend Developer</h4>
                    <p className="text-sm text-muted-foreground">Empresa XYZ · 2020 - Present</p>
                    <p className="text-sm mt-1">Development of web applications with React and Next.js, frontend architecture implementation and performance optimization.</p>
                  </li>
                  <li className="relative border-l border-primary/30 pl-6 pb-2 group/item transition-all duration-300">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-primary group-hover/item:scale-110 transition-transform"></div>
                    <h4 className="font-semibold group-hover/item:text-primary transition-colors">Frontend Developer</h4>
                    <p className="text-sm text-muted-foreground">Empresa ABC · 2018 - 2020</p>
                    <p className="text-sm mt-1">User interface development with Vue.js, API integration and accessibility improvements.</p>
                  </li>
                  <li className="relative border-l border-primary/30 pl-6 pb-2 group/item transition-all duration-300">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-primary group-hover/item:scale-110 transition-transform"></div>
                    <h4 className="font-semibold group-hover/item:text-primary transition-colors">Web Developer</h4>
                    <p className="text-sm text-muted-foreground">Startup DEF · 2016 - 2018</p>
                    <p className="text-sm mt-1">Responsive website development, UI/UX design implementation and load speed optimization.</p>
                  </li>
                  <li className="relative border-l border-primary/30 pl-6 pb-2 group/item transition-all duration-300">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-primary group-hover/item:scale-110 transition-transform"></div>
                    <h4 className="font-semibold group-hover/item:text-primary transition-colors">Junior Frontend Developer</h4>
                    <p className="text-sm text-muted-foreground">Agencia GHI · 2014 - 2016</p>
                    <p className="text-sm mt-1">Web design implementation, development with HTML5, CSS3 and JavaScript, creation of interactive components.</p>
                  </li>
                  <li className="relative border-l border-primary/30 pl-6 pb-2 group/item transition-all duration-300">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-primary group-hover/item:scale-110 transition-transform"></div>
                    <h4 className="font-semibold group-hover/item:text-primary transition-colors">Web Development Intern</h4>
                    <p className="text-sm text-muted-foreground">Empresa JKL · 2013 - 2014</p>
                    <p className="text-sm mt-1">Assistance in the development of corporate websites, content maintenance and technical support.</p>
                  </li>
                </ul>
              </ScrollArea>
            </div>
          </div>
        </div>
        
        <div className="mt-12 animate-fade-in animate-slide-up" style={{ animationDelay: "300ms" }}>
          <h2 className="section-title mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">React Ecosystem</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> React.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> React Router
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> React TanStack
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> React Hook Form
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">State Management</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> React Context API
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Redux / Redux Toolkit
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Zustand
                </li>

              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">Styling in React</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Tailwind CSS
                </li>


                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> CSS Modules
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Framer Motion
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> shadcn/ui
                </li>

              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">Testing & Optimization</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Jest / React Testing Library
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> React DevTools
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Chrome DevTools
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">Tools</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Figma
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Git
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> Prompt Engineering
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span> MCP Integrations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
