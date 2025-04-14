
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-foreground">
            <span className="text-primary">Dev</span>Portfolio
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active-nav-link' : ''}`}>
            Inicio
          </Link>
          <Link to="/proyectos" className={`nav-link ${isActive('/proyectos') ? 'active-nav-link' : ''}`}>
            Proyectos
          </Link>
          <Link to="/sobre-mi" className={`nav-link ${isActive('/sobre-mi') ? 'active-nav-link' : ''}`}>
            Sobre Mí
          </Link>
          <Link to="/contacto" className={`nav-link ${isActive('/contacto') ? 'active-nav-link' : ''}`}>
            Contacto
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="mr-2"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 h-[calc(100vh-4rem)] w-full overflow-y-auto bg-background p-6 md:hidden animate-fade-in">
            <nav className="flex flex-col items-center space-y-6 text-lg">
              <Link
                to="/"
                className="nav-link w-full text-center text-xl py-3"
                onClick={closeMenu}
              >
                Inicio
              </Link>
              <Link
                to="/proyectos"
                className="nav-link w-full text-center text-xl py-3"
                onClick={closeMenu}
              >
                Proyectos
              </Link>
              <Link
                to="/sobre-mi"
                className="nav-link w-full text-center text-xl py-3"
                onClick={closeMenu}
              >
                Sobre Mí
              </Link>
              <Link
                to="/contacto"
                className="nav-link w-full text-center text-xl py-3"
                onClick={closeMenu}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
