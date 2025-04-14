
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por tu mensaje. Me pondré en contacto contigo lo antes posible.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="section-title text-center mx-auto">Contacto</h2>
          <p className="text-center text-muted-foreground mt-4 mb-10">
            ¿Interesado en colaborar o tienes alguna pregunta? No dudes en contactarme.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8 animate-fade-in animate-slide-in">
              <div>
                <h3 className="text-xl font-semibold mb-3">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <a href="mailto:tu@email.com" className="hover:text-primary transition-colors">
                      tu@email.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 mr-3 text-primary" />
                    <a 
                      href="https://github.com/username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/username
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3 text-primary" />
                    <a 
                      href="https://linkedin.com/in/username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/username
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Disponibilidad</h3>
                <p className="text-muted-foreground">
                  Actualmente estoy {" "}
                  <span className="text-accent font-semibold">disponible</span>
                  {" "} para proyectos freelance y oportunidades de tiempo completo. 
                  Mi horario de trabajo es bastante flexible.
                </p>
              </div>
            </div>

            <div className="animate-fade-in animate-slide-up" style={{ animationDelay: "200ms" }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@ejemplo.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿En qué puedo ayudarte?"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
