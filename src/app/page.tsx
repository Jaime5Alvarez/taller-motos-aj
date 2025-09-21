import Image from "next/image";
import { Phone, MapPin, Clock, Wrench, Shield, Star, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/aj-logo.jpeg"
                alt="AJ Motorbikes Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary">AJ Motorbikes</h1>
                <p className="text-sm text-muted-foreground">Taller de Motos en Calahorra</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Inicio</a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors">Servicios</a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">Nosotros</a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">Contacto</a>
            </nav>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="hidden sm:inline">941 13 XX XX</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-primary/10 to-secondary/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Tu Moto en las
                <span className="text-primary block">Mejores Manos</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Más de 15 años de experiencia en el mantenimiento y reparación de motocicletas en Calahorra, La Rioja. 
                Especialistas en todas las marcas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Pedir Cita
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                  Ver Servicios
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/lighta_car.webp"
                alt="Motocicleta en el taller"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-muted-foreground text-sm">+200 clientes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos un servicio completo para mantener tu moto en perfecto estado
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
              <Wrench className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-3">Mantenimiento Preventivo</h4>
              <p className="text-muted-foreground mb-4">
                Revisiones completas, cambio de aceite, filtros y ajustes para mantener tu moto como nueva.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Cambio de aceite y filtros</li>
                <li>• Revisión de frenos</li>
                <li>• Ajuste de cadena</li>
                <li>• Revisión general</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-3">Reparaciones</h4>
              <p className="text-muted-foreground mb-4">
                Diagnóstico y reparación de averías mecánicas y eléctricas con garantía.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Reparación de motor</li>
                <li>• Sistema eléctrico</li>
                <li>• Transmisión</li>
                <li>• Diagnóstico por ordenador</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
              <Star className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-3">Personalización</h4>
              <p className="text-muted-foreground mb-4">
                Modificaciones y mejoras para hacer tu moto única y adaptada a tus necesidades.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Escape deportivo</li>
                <li>• Suspensiones</li>
                <li>• Accesorios</li>
                <li>• Pintura personalizada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/lightb_car.webp"
                alt="Taller AJ Motorbikes"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pasión por las Motos desde 2008
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                En AJ Motorbikes somos más que un taller, somos moteros apasionados que entienden 
                la importancia de mantener tu moto en perfecto estado. Ubicados en el corazón de 
                Calahorra, La Rioja, hemos construido nuestra reputación basada en la calidad, 
                confianza y atención personalizada.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Motos reparadas</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Nuestro equipo de mecánicos especializados está constantemente formándose en las 
                últimas tecnologías para ofrecerte el mejor servicio, sin importar la marca o 
                modelo de tu motocicleta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visítanos en Calahorra
            </h3>
            <p className="text-xl text-muted-foreground">
              Estamos aquí para cuidar de tu moto
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Ubicación</h4>
              <p className="text-muted-foreground">
                Calle Principal, 123<br />
                26500 Calahorra<br />
                La Rioja, España
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Horarios</h4>
              <div className="text-muted-foreground space-y-1">
                <p>Lunes - Viernes: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Contacto</h4>
              <div className="text-muted-foreground space-y-2">
                <p className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  941 13 XX XX
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@ajmotorbikes.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/aj-logo.jpeg"
                  alt="AJ Motorbikes Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h4 className="text-xl font-bold">AJ Motorbikes</h4>
              </div>
              <p className="text-background/80">
                Tu taller de confianza en Calahorra, La Rioja. 
                Especialistas en mantenimiento y reparación de motocicletas.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Servicios</h5>
              <ul className="space-y-2 text-background/80">
                <li>Mantenimiento preventivo</li>
                <li>Reparaciones mecánicas</li>
                <li>Diagnóstico electrónico</li>
                <li>Personalización</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contacto</h5>
              <div className="space-y-2 text-background/80">
                <p>Calle Principal, 123</p>
                <p>26500 Calahorra, La Rioja</p>
                <p>Tel: 941 13 XX XX</p>
                <p>info@ajmotorbikes.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 AJ Motorbikes. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
