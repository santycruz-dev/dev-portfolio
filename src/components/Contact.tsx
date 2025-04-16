import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
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
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 relative z-10 overflow-hidden">
      {/* Decorative luminosity circles */}
      <div 
        className="hidden md:block absolute -top-32 -left-32 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,152,0,0.1) 0%, rgba(0,0,0,0) 85%)',
          filter: 'blur(25px)',
          opacity: '0.6',
          animation: 'pulse-glow 8s ease-in-out infinite'
        }}
      />
      <div 
        className="hidden md:block absolute bottom-10 -right-24 w-72 h-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,152,0,0.1) 0%, rgba(0,0,0,0) 85%)',
          filter: 'blur(20px)',
          opacity: '0.6',
          animation: 'pulse-glow 8s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />
      <div className="container">
        <div className="max-w-3xl mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold">Contact</h2>
          <div className="w-24 h-px bg-primary mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Do you have a project in mind or want to discuss collaboration opportunities?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8 animate-fade-in animate-slide-in">
            <div>
              <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
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
              <h3 className="text-xl font-semibold mb-3">Availability</h3>
              <p className="text-muted-foreground">
                I'm currently <span className="text-accent font-semibold mr-1">available</span>
                 for freelance projects and full-time opportunities.
                My working hours are quite flexible.
              </p>
            </div>
          </div>

          <div className="animate-fade-in animate-slide-up" style={{ animationDelay: "200ms" }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-background border-border/60 focus:border-primary/50"
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
                  placeholder="your@example.com"
                  className="bg-background border-border/60 focus:border-primary/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={5}
                  className="bg-background border-border/60 focus:border-primary/50"
                  required
                />
              </div>
              <Button type="submit" className="futuristic-button w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
