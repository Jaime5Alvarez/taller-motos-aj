"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

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
                src="/aj-logo.jpeg"
                alt="AJ Motorbikes Logo"
                width={50}
                height={50}
                className="rounded-full ring-2 ring-primary/20 transition-all duration-300 hover:ring-primary/40"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                  onClick={() => scrollToSection("inicio")}>
                AJ Motorbikes
              </h1>
              <p className="text-sm text-muted-foreground">Taller de Motos en Calahorra</p>
            </div>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden md:flex space-x-8">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "servicios", label: "Servicios" },
              { id: "nosotros", label: "Nosotros" },
              { id: "contacto", label: "Contacto" }
            ].map((item) => (
              <button
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
            {/* Teléfono táctico */}
            <div className="hidden sm:flex items-center space-x-2 text-sm bg-yellow-500 text-black px-4 py-2 font-bold tracking-wider hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
              <div className="relative z-10 flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="font-mono">941 13 XX XX</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </div>

            {/* Botón menú móvil táctico */}
            <button
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
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
        }`}>
          <nav className="flex flex-col space-y-3 pt-4 border-t border-yellow-500/30">
            {[
              { id: "inicio", label: "INICIO", code: "[01]" },
              { id: "servicios", label: "SERVICIOS", code: "[02]" },
              { id: "nosotros", label: "NOSOTROS", code: "[03]" },
              { id: "contacto", label: "CONTACTO", code: "[04]" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-300 hover:text-yellow-500 transition-colors py-2 px-4 hover:bg-yellow-500/10 font-bold tracking-wider border-l-2 border-transparent hover:border-yellow-500"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500 font-mono text-xs">{item.code}</span>
                  <span>{item.label}</span>
                </div>
              </button>
            ))}
            <div className="flex items-center space-x-2 text-sm py-2 px-4 bg-yellow-500/10 border border-yellow-500/30 mx-4">
              <Phone className="h-4 w-4 text-yellow-500" />
              <span className="text-white font-mono font-bold">941 13 XX XX</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
