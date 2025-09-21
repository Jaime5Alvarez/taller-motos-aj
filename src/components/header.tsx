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
          ? "bg-card/80 backdrop-blur-md shadow-dark border-b border-glow" 
          : "bg-card shadow-sm border-b border-border"
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
            {/* Teléfono */}
            <div className="hidden sm:flex items-center space-x-2 text-sm bg-primary/10 px-3 py-2 rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground font-medium">941 13 XX XX</span>
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 border border-primary/20"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-primary" />
              ) : (
                <Menu className="h-5 w-5 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
        }`}>
          <nav className="flex flex-col space-y-3 pt-4 border-t border-border">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "servicios", label: "Servicios" },
              { id: "nosotros", label: "Nosotros" },
              { id: "contacto", label: "Contacto" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-primary/10 font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center space-x-2 text-sm py-2 px-4">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">941 13 XX XX</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
