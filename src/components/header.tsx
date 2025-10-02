"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-dark-card/90 backdrop-blur-md shadow-dark-lg border-b border-glow"
          : "bg-gradient-hero backdrop-blur-sm shadow-sm border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/aj-logo.webp"
                alt="AJ Motorbikes Logo"
                width={50}
                height={50}
                className="rounded-full ring-2 ring-primary/20 transition-all duration-300 hover:ring-primary/40"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <button
                type="button"
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer text-left"
                onClick={() => scrollToSection("inicio")}
              >
                AJ Motorbikes
              </button>
              <p className="text-sm text-muted-foreground">
                Taller de Motos en Calahorra
              </p>
            </div>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden md:flex space-x-8">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "taller", label: "Taller" },
              { id: "vehiculos", label: "Vehículos en venta" },
              { id: "tasacion", label: "Tasación" },
              { id: "recambios", label: "Recambio y accesorios" },
              { id: "contacto", label: "Contacto" },
            ].map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-all duration-300 relative group font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contacto y menú móvil */}
          <div className="flex items-center space-x-4">
            {/* Teléfono táctico (redirige a WhatsApp) */}
            <a
              href="https://wa.me/34614154659?text=Hola,%20me%20gustaría%20pedir%20cita%20previa%20para%20mi%20moto"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 text-sm bg-yellow-500 text-black px-4 py-2 font-bold tracking-wider hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            >
              <div className="relative z-10 flex items-center space-x-2">
                {/* Icono de WhatsApp */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c0-5.444 4.425-9.87 9.87-9.87 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.882 6.972c-.003 5.444-4.428 9.869-9.872 9.869zm8.413-18.282A11.815 11.815 0 0011.97 0C5.373 0 0 5.373 0 12c0 2.122.553 4.198 1.601 6.032L.057 24l6.134-1.635A11.93 11.93 0 0011.969 24C18.627 24 24 18.627 24 12c0-2.539-.78-4.998-2.336-7.283z" />
                </svg>
                <span className="font-mono">614 15 46 59</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>

            {/* Botón menú móvil táctico */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 bg-black/60 hover:bg-yellow-500/20 transition-all duration-300 border-2 border-yellow-500/30 hover:border-yellow-500 relative"
            >
              {/* Esquinas tácticas */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-yellow-500"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-yellow-500"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-yellow-500"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-yellow-500"></div>

              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-yellow-500 relative z-10" />
              ) : (
                <Menu className="h-5 w-5 text-yellow-500 relative z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil táctico */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? " pb-8" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-3 pt-4 border-t border-yellow-500/30">
            {[
              { id: "inicio", label: "INICIO", code: "[01]" },
              { id: "taller", label: "TALLER", code: "[02]" },
              { id: "vehiculos", label: "VEHÍCULOS EN VENTA", code: "[03]" },
              { id: "tasacion", label: "TASACIÓN", code: "[04]" },
              { id: "recambios", label: "RECAMBIO Y ACCESORIOS", code: "[05]" },
              { id: "contacto", label: "CONTACTO", code: "[06]" },
            ].map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-300 hover:text-yellow-500 transition-colors py-2 px-4 hover:bg-yellow-500/10 font-bold tracking-wider border-l-2 border-transparent hover:border-yellow-500"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500 font-mono text-xs">
                    {item.code}
                  </span>
                  <span>{item.label}</span>
                </div>
              </button>
            ))}
            <div className="flex items-center space-x-2 text-sm py-2 px-4 bg-yellow-500/10 border border-yellow-500/30 mx-4 mt-4">
              <Phone className="h-4 w-4 text-yellow-500" />
              <span className="text-white font-mono font-bold">
                614 15 46 59
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
