
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../src/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-7xl md:text-9xl font-bold text-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold">Página no encontrada</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" /> Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
