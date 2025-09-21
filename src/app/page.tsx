import Image from "next/image";
import { MapPin, Clock, Wrench, Shield, Star, Mail, Phone } from "lucide-react";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />

      {/* Hero Section - Estilo Militarizado */}
      <section id="inicio" className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black pt-32 pb-20 overflow-hidden">
        {/* Elementos geométricos militares */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-0.5 bg-yellow-500 transform rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-0.5 bg-yellow-500 transform -rotate-12"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-0.5 bg-yellow-500 transform rotate-12"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-500 rotate-45"></div>
          <div className="absolute bottom-1/4 right-10 w-1 h-1 bg-yellow-500"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Efecto de rayo detrás del título */}
              <div className="absolute -top-8 -right-4 w-80 h-80 opacity-80 pointer-events-none">
                <Image
                  src="/lightb_car.webp"
                  alt="Efecto de luz en título"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain mix-blend-screen"
                  style={{
                    maskImage: 'radial-gradient(circle at 60% 50%, black 25%, rgba(0,0,0,0.6) 55%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at 60% 50%, black 25%, rgba(0,0,0,0.6) 55%, transparent 80%)'
                  }}
                />
              </div>
              
              {/* Línea decorativa superior */}
              <div className="w-16 h-0.5 bg-yellow-500 mb-4"></div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 relative z-10 tracking-wider">
                <span className="text-gray-300">TALLER</span>
                <span className="text-yellow-500 block font-black">AJ MOTORBIKES</span>
              </h2>
              
              {/* Subtítulo militar */}
              <div className="text-yellow-500 font-mono text-sm tracking-widest mb-4 opacity-80">
                [ TACTICAL MOTORCYCLE REPAIR ]
              </div>
              
              {/* Línea decorativa inferior */}
              <div className="w-24 h-0.5 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-300 mb-8 font-medium leading-relaxed">
                <span className="text-yellow-500 font-mono">[15+ AÑOS]</span> de experiencia táctica en mantenimiento y reparación de motocicletas.<br/>
                <span className="text-gray-400">Calahorra, La Rioja</span> - <span className="text-yellow-500">Especialistas en todas las marcas</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 text-black px-8 py-3 font-bold tracking-wider hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">PEDIR CITA</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </button>
                <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 font-bold tracking-wider hover:bg-yellow-500 hover:text-black transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">VER SERVICIOS</span>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-yellow-500 transform rotate-45 group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-yellow-500 transform rotate-45 group-hover:scale-150 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
            <div className="relative">
              {/* Imagen principal del taller con mask espectacular */}
              <div className="relative ">
                <Image
                  src="/photo-1604260324056-45f7c778754a.avif"
                  alt="Taller de motocicletas AJ"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px] transform hover:scale-105 transition-transform duration-700"
                    style={{
                      maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)'
                    }}
                />
                
                
                {/* Overlay gradient dramático */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent via-transparent to-orange-500/10 rounded-2xl"></div>
                
                {/* Efecto de brillo en los bordes */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
                
                {/* Partículas de luz flotantes */}
                <div className="absolute top-4 right-8 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-16 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-8 right-24 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-700"></div>
              </div>

              {/* Card de rating */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-dark-card p-4 rounded-xl shadow-dark border-glow backdrop-blur-sm bg-opacity-90">
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

      {/* Servicios - Estilo Militar */}
      <section id="servicios" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Elementos tácticos de fondo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 right-1/4 w-20 h-0.5 bg-yellow-500 transform rotate-12"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-0.5 bg-yellow-500 transform -rotate-45"></div>
          <div className="absolute top-1/2 left-10 w-2 h-2 bg-yellow-500 rotate-45"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Línea táctica superior */}
            <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-6"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              <span className="text-gray-300">TACTICAL</span> <span className="text-yellow-500">SERVICES</span>
            </h3>
            
            <div className="text-yellow-500 font-mono text-sm tracking-widest mb-4 opacity-80">
              [ SPECIALIZED MOTORCYCLE OPERATIONS ]
            </div>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              <span className="text-yellow-500">Servicios tácticos completos</span> para mantener tu moto en 
              <span className="text-white">condiciones óptimas de combate</span>
            </p>
            
            {/* Línea táctica inferior */}
            <div className="w-16 h-0.5 bg-yellow-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>
              
              <Wrench className="h-12 w-12 text-yellow-500 mb-4" />
              <div className="text-yellow-500 font-mono text-xs tracking-widest mb-2">[SERVICE-01]</div>
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">MANTENIMIENTO TÁCTICO</h4>
              <p className="text-gray-300 mb-4 font-medium">
                <span className="text-yellow-500">Operaciones preventivas</span> para mantener tu moto en 
                <span className="text-white">condiciones de combate óptimas</span>.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 font-mono">
                <li className="flex items-center"><span className="text-yellow-500 mr-2">■</span> Cambio de aceite y filtros</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">■</span> Revisión de frenos</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">■</span> Ajuste de cadena</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">■</span> Revisión general</li>
              </ul>
            </div>

            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>
              
              <Shield className="h-12 w-12 text-yellow-500 mb-4" />
              <div className="text-yellow-500 font-mono text-xs tracking-widest mb-2">[SERVICE-02]</div>
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">REPARACIONES DE COMBATE</h4>
              <p className="text-gray-300 mb-4 font-medium">
                <span className="text-yellow-500">Diagnóstico avanzado</span> y reparación de averías críticas con 
                <span className="text-white">garantía táctica</span>.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 font-mono">
                <li className="flex items-center"><span className="text-yellow-500 mr-2">■</span> Reparación de motor</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">■</span> Sistema eléctrico</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">■</span> Transmisión</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">■</span> Diagnóstico por ordenador</li>
              </ul>
            </div>

            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>
              
              <Star className="h-12 w-12 text-yellow-500 mb-4" />
              <div className="text-yellow-500 font-mono text-xs tracking-widest mb-2">[SERVICE-03]</div>
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">MODIFICACIONES TÁCTICAS</h4>
              <p className="text-gray-300 mb-4 font-medium">
                <span className="text-yellow-500">Upgrades especializados</span> para hacer tu moto única y 
                <span className="text-white">adaptada a tu misión</span>.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 font-mono">
                <li className="flex items-center"><span className="text-yellow-500 mr-2">■</span> Escape deportivo</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">■</span> Suspensiones</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">■</span> Accesorios tácticos</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">■</span> Pintura personalizada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros - Estilo Militar */}
      <section id="nosotros" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Elementos tácticos de fondo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-32 left-20 w-28 h-0.5 bg-yellow-500 transform rotate-30"></div>
          <div className="absolute bottom-40 right-1/4 w-20 h-0.5 bg-yellow-500 transform -rotate-12"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-yellow-500 rotate-45"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Marco táctico para imagen */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-500 z-20"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-yellow-500 z-20"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-yellow-500 z-20"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-500 z-20"></div>
              
              {/* Imagen con mask militar */}
              <div className="relative overflow-hidden">
                <Image
                  src="/photo-1591637333184-19aa84b3e01f.avif"
                  alt="Operaciones tácticas motocicletas"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px] grayscale-[0.4] contrast-110"
                  style={{
                    maskImage: 'linear-gradient(45deg, black 0%, black 65%, rgba(0,0,0,0.7) 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(45deg, black 0%, black 65%, rgba(0,0,0,0.7) 80%, transparent 100%)'
                  }}
                />
                {/* Overlay militar */}
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/15 via-transparent to-gray-900/30"></div>
                
                {/* Indicadores tácticos */}
                <div className="absolute top-4 left-4 w-1 h-6 bg-yellow-500 opacity-70"></div>
                <div className="absolute top-4 left-8 w-6 h-1 bg-yellow-500 opacity-70"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-yellow-500 animate-pulse"></div>
              </div>
            </div>
            <div>
              {/* Línea táctica superior */}
              <div className="w-20 h-0.5 bg-yellow-500 mb-6"></div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wider">
                <span className="text-gray-300">TACTICAL</span> <span className="text-yellow-500">OPERATIONS</span>
              </h3>
              
              <div className="text-yellow-500 font-mono text-sm tracking-widest mb-6 opacity-80">
                [ SINCE 2008 - MOTORCYCLE WARFARE SPECIALISTS ]
              </div>
              
              <p className="text-lg text-gray-300 mb-6 font-medium leading-relaxed">
                En <span className="text-yellow-500 font-bold">AJ Motorbikes</span> somos más que un taller, somos 
                <span className="text-white">operadores tácticos especializados</span> que entienden la importancia crítica 
                de mantener tu moto en <span className="text-yellow-500">condiciones de combate perfectas</span>. 
                Ubicados en el corazón de <span className="text-gray-400">Calahorra, La Rioja</span>.
              </p>
              
              {/* Estadísticas militares */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-black/40 border border-yellow-500/30 p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2 font-mono">15+</div>
                  <div className="text-gray-400 font-mono text-sm tracking-wider">AÑOS DE SERVICIO</div>
                </div>
                <div className="bg-black/40 border border-yellow-500/30 p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2 font-mono">500+</div>
                  <div className="text-gray-400 font-mono text-sm tracking-wider">MISIONES COMPLETADAS</div>
                </div>
              </div>
              
              <p className="text-gray-300 font-medium">
                Nuestro <span className="text-yellow-500">escuadrón de mecánicos especializados</span> está constantemente 
                entrenando en las <span className="text-white">últimas tecnologías tácticas</span> para ofrecerte el mejor servicio, 
                sin importar la marca o modelo de tu <span className="text-yellow-500">máquina de combate</span>.
              </p>
              
              {/* Línea táctica inferior */}
              <div className="w-16 h-0.5 bg-yellow-500 mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto - Estilo Militar */}
      <section id="contacto" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Elementos tácticos de fondo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-16 left-1/4 w-24 h-0.5 bg-yellow-500 transform rotate-45"></div>
          <div className="absolute bottom-24 right-1/3 w-18 h-0.5 bg-yellow-500 transform -rotate-30"></div>
          <div className="absolute top-1/2 right-16 w-2 h-2 bg-yellow-500 rotate-45"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Línea táctica superior */}
            <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-6"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              <span className="text-gray-300">TACTICAL</span> <span className="text-yellow-500">BASE</span>
            </h3>
            
            <div className="text-yellow-500 font-mono text-sm tracking-widest mb-4 opacity-80">
              [ CALAHORRA OPERATIONS CENTER ]
            </div>
            
            <p className="text-lg text-gray-300 font-medium">
              <span className="text-yellow-500">Coordina tu misión</span> con nuestro 
              <span className="text-white">centro de operaciones tácticas</span>
            </p>
            
            {/* Línea táctica inferior */}
            <div className="w-16 h-0.5 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Ubicación Táctica */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 text-center hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>
              
              <MapPin className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-yellow-500 font-mono text-xs tracking-widest mb-2">[COORDINATES]</div>
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">BASE DE OPERACIONES</h4>
              <div className="text-gray-300 font-mono space-y-1">
                <p className="text-yellow-500">Calle Principal, 123</p>
                <p>26500 Calahorra</p>
                <p>La Rioja, <span className="text-yellow-500">ESP</span></p>
              </div>
            </div>

            {/* Horarios de Misión */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 text-center hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>
              
              <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-yellow-500 font-mono text-xs tracking-widest mb-2">[SCHEDULE]</div>
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">HORARIOS DE MISIÓN</h4>
              <div className="text-gray-300 font-mono space-y-2">
                <p><span className="text-yellow-500">LUN-VIE:</span> 09:00 - 18:00</p>
                <p><span className="text-yellow-500">SÁBADOS:</span> 09:00 - 14:00</p>
                <p><span className="text-gray-500">DOMINGOS:</span> STAND-BY</p>
              </div>
            </div>

            {/* Canal de Comunicación */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 text-center hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>
              
              <Phone className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-yellow-500 font-mono text-xs tracking-widest mb-2">[COMMS]</div>
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">CANAL DE COMUNICACIÓN</h4>
              <div className="text-gray-300 font-mono space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-yellow-500" />
                  <span className="text-yellow-500">941 13 XX XX</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-300">info@ajmotorbikes.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Estilo Militar */}
      <footer className="bg-gradient-to-b from-black to-gray-900 py-12 border-t-2 border-yellow-500/30 relative overflow-hidden">
        {/* Elementos tácticos de fondo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-8 left-1/4 w-20 h-0.5 bg-yellow-500 transform rotate-12"></div>
          <div className="absolute bottom-8 right-1/4 w-16 h-0.5 bg-yellow-500 transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rotate-45"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Comando Central */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Image
                    src="/aj-logo.jpeg"
                    alt="AJ Motorbikes Tactical Logo"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-yellow-500/50"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white tracking-wider">AJ MOTORBIKES</h4>
                  <div className="text-yellow-500 font-mono text-xs tracking-widest">[TACTICAL UNIT]</div>
                </div>
              </div>
              <p className="text-gray-300 font-medium leading-relaxed">
                <span className="text-yellow-500">Centro de operaciones tácticas</span> en Calahorra, La Rioja. 
                <span className="text-white">Especialistas en mantenimiento</span> y reparación de 
                <span className="text-yellow-500">máquinas de combate</span>.
              </p>
            </div>
            
            {/* Operaciones Tácticas */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-0.5 bg-yellow-500 mr-3"></div>
                <h5 className="font-bold text-white tracking-wider">OPERACIONES TÁCTICAS</h5>
              </div>
              <ul className="space-y-2 text-gray-300 font-mono">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Mantenimiento preventivo
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Reparaciones de combate
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Diagnóstico avanzado
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Modificaciones tácticas
                </li>
              </ul>
            </div>

            {/* Canal de Comunicación */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-0.5 bg-yellow-500 mr-3"></div>
                <h5 className="font-bold text-white tracking-wider">CANAL DE COMUNICACIÓN</h5>
              </div>
              <div className="space-y-2 text-gray-300 font-mono">
                <p><span className="text-yellow-500">[LOC]</span> Calle Principal, 123</p>
                <p><span className="text-yellow-500">[ZONE]</span> 26500 Calahorra, La Rioja</p>
                <p><span className="text-yellow-500">[COMM]</span> 941 13 XX XX</p>
                <p><span className="text-yellow-500">[DATA]</span> info@ajmotorbikes.com</p>
              </div>
            </div>
          </div>
          
          {/* Línea de separación táctica */}
          <div className="flex items-center mt-8 mb-6">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-yellow-500 rotate-45"></div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
          </div>
          
          {/* Copyright Militar */}
          <div className="text-center">
            <div className="text-yellow-500 font-mono text-sm tracking-widest mb-2">
              [ CLASSIFIED OPERATIONS - AUTHORIZED PERSONNEL ONLY ]
            </div>
            <p className="text-gray-400 font-mono text-sm">
              &copy; 2024 <span className="text-yellow-500">AJ MOTORBIKES TACTICAL UNIT</span> - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

