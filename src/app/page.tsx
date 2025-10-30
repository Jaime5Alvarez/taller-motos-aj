import {
  Bike,
  CircleDot,
  ClipboardCheck,
  Clock,
  Cog,
  Gem,
  Mail,
  MapPin,
  Package,
  Phone,
  Settings,
  Shield,
  Star,
  Tag,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/header";
import { VehicleImageCarousel } from "@/components/vehicle-image-carousel";
import { VehicleService } from "@/modules/vehicles/application/services/vehicle-service";

// Configuraciones para mantener los vehículos siempre actualizados
// export const dynamic = "force-dynamic";
// export const revalidate = 0;

async function getVehiclesForSale() {
  const vehicleService = new VehicleService();
  try {
    const vehicles = await vehicleService.getAvailableVehiclesWithDetails();
    // Mostrar solo los vehículos disponibles (no vendidos)
    return vehicles;
  } catch (error) {
    console.error("Error fetching vehicles for sale:", error);
    return [];
  }
}

export default async function Home() {
  const vehiclesForSale = await getVehiclesForSale();

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />

      {/* Hero Section - Estilo Militarizado */}
      <section
        id="inicio"
        className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-gray-900 pt-32 pb-32 overflow-hidden"
      >
        {/* Elementos geométricos militares intensificados */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* Líneas principales */}
          <div className="absolute top-20 left-10 w-32 h-0.5 bg-yellow-500 transform rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-0.5 bg-yellow-500 transform -rotate-12"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-0.5 bg-yellow-500 transform rotate-12"></div>
          <div className="absolute top-16 left-1/2 w-20 h-0.5 bg-yellow-500 transform rotate-75"></div>
          <div className="absolute bottom-20 right-1/4 w-28 h-0.5 bg-yellow-500 transform -rotate-30"></div>

          {/* Formas geométricas */}
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-500 rotate-45"></div>
          <div className="absolute bottom-1/4 right-10 w-1 h-1 bg-yellow-500"></div>
          <div className="absolute top-24 right-1/2 w-3 h-3 border border-yellow-500 rotate-45"></div>
          <div className="absolute bottom-40 left-16 w-4 h-4 border border-yellow-500 transform rotate-12"></div>

          {/* Triángulos tácticos */}
          <div className="absolute top-32 right-16 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-yellow-500"></div>
          <div className="absolute bottom-28 left-1/3 w-0 h-0 border-l-3 border-r-3 border-t-6 border-transparent border-t-yellow-500 transform rotate-45"></div>

          {/* Retículas */}
          <div className="absolute top-12 left-1/3 w-8 h-8 grid grid-cols-3 gap-0.5">
            <div className="w-1 h-1 bg-yellow-500"></div>
            <div className="w-1 h-1 bg-yellow-500"></div>
            <div className="w-1 h-1 bg-yellow-500"></div>
          </div>

          {/* Líneas de conexión */}
          <div className="absolute top-28 left-20 w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent transform rotate-30"></div>
          <div className="absolute bottom-36 right-32 w-16 h-0.5 bg-gradient-to-l from-yellow-500 to-transparent transform -rotate-15"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in animate-duration-1000">
              {/* Efecto de rayo detrás del título */}
              <div className="absolute -top-8 -right-4 w-80 h-80 opacity-80 pointer-events-none animate-fade-in animate-delay-500">
                <Image
                  src="/lightb_car.webp"
                  alt="Taller de motos AJ Motorbikes en Calahorra - Especialistas en reparación y mantenimiento"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain mix-blend-screen"
                  style={{
                    maskImage:
                      "radial-gradient(circle at 60% 50%, black 25%, rgba(0,0,0,0.6) 55%, transparent 80%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at 60% 50%, black 25%, rgba(0,0,0,0.6) 55%, transparent 80%)",
                  }}
                />
              </div>

              {/* Línea decorativa superior */}
              <div className="w-16 h-0.5 bg-yellow-500 mb-4 animate-fade-in animate-delay-300"></div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 relative z-10 tracking-wider animate-fade-in animate-delay-500">
                <span className="text-gray-300">TALLER</span>
                <span className="text-yellow-500 block font-black">
                  AJ MOTORBIKES
                </span>
              </h1>

              {/* Subtítulo militar */}
              <div className="text-yellow-500 font-mono text-sm tracking-widest mb-4 opacity-80 animate-fade-in animate-delay-700">
                ESPECIALISTAS EN MOTOCICLETAS
              </div>

              {/* Línea decorativa inferior */}
              <div className="w-24 h-0.5 bg-yellow-500 mb-6 animate-fade-in animate-delay-700"></div>
              <p className="text-lg text-gray-300 mb-8 font-medium leading-relaxed animate-fade-in animate-delay-1000">
                <span className="text-yellow-500 font-mono">
                  TALLER DE MOTOS
                </span>{" "}
                con pasión por las motocicletas desde hace décadas.
                <br />
                <span className="text-gray-400">Calahorra, La Rioja</span> -{" "}
                <span className="text-yellow-500">
                  Especialistas en todas las marcas
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-bottom animate-delay-1000 animate-duration-700">
                <a
                  href="https://wa.me/34614154659?text=Hola,%20me%20gustaría%20pedir%20cita%20previa%20para%20mi%20moto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black px-8 py-3 font-bold tracking-wider hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group inline-block text-center"
                >
                  <span className="relative z-10">PEDIR CITA</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </a>
                <a
                  href="#taller"
                  className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 font-bold tracking-wider hover:bg-yellow-500 hover:text-black transition-all duration-300 relative overflow-hidden group inline-block text-center"
                >
                  <span className="relative z-10">VER SERVICIOS</span>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-yellow-500 transform rotate-45 group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-yellow-500 transform rotate-45 group-hover:scale-150 transition-transform duration-300"></div>
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in animate-delay-500 animate-duration-1000">
              {/* Imagen principal del taller con mask espectacular */}
              <div className="relative ">
                <Image
                  src="/photo-1604260324056-45f7c778754a.avif"
                  alt="Taller mecánico de motocicletas en Calahorra - AJ Motorbikes servicio profesional"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px] transform hover:scale-105 transition-transform duration-700"
                  style={{
                    maskImage:
                      "radial-gradient(circle at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0) 100%)",
                  }}
                />

                {/* Overlay gradient dramático */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-orange-500/10 rounded-2xl"></div>

                {/* Efecto de brillo en los bordes */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>

                {/* Partículas de luz flotantes */}
                <div className="absolute top-4 right-8 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-16 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-8 right-24 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-700"></div>
              </div>

              {/* Efecto de luz adicional */}
              <div className="absolute -bottom-12 -left-16 w-48 h-48 opacity-90 transform rotate-x-180">
                <Image
                  src="/lighta_car.webp"
                  alt="Servicios de taller de motos multimarca en La Rioja"
                  width={192}
                  height={192}
                  className="w-full h-full object-contain mix-blend-screen"
                  style={{
                    maskImage:
                      "radial-gradient(circle at center, black 35%, rgba(0,0,0,0.7) 65%, transparent 85%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at center, black 35%, rgba(0,0,0,0.7) 65%, transparent 85%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Elemento de transición */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-gray-900/50"></div>

        {/* Línea de separación táctica */}
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
          <div className="flex items-center">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent to-yellow-500/30"></div>
            <div className="mx-4 w-2 h-2 bg-yellow-500/60 rotate-45"></div>
            <div className="w-32 h-0.5 bg-gradient-to-l from-transparent to-yellow-500/30"></div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros integrado en Inicio */}
      <div className="py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-black relative overflow-hidden">
        {/* Elementos tácticos de fondo intensificados */}
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          {/* Líneas existentes */}
          <div className="absolute top-32 left-20 w-28 h-0.5 bg-yellow-500 transform rotate-30"></div>
          <div className="absolute bottom-40 right-1/4 w-20 h-0.5 bg-yellow-500 transform -rotate-12"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-yellow-500 rotate-45"></div>

          {/* Nuevos elementos */}
          <div className="absolute top-16 right-1/3 w-22 h-0.5 bg-yellow-500 transform rotate-65"></div>
          <div className="absolute bottom-24 left-1/4 w-18 h-0.5 bg-yellow-500 transform -rotate-35"></div>
          <div className="absolute top-48 left-16 w-16 h-0.5 bg-yellow-500 transform rotate-15"></div>

          {/* Marcos tácticos */}
          <div className="absolute top-20 right-16 w-6 h-6 border border-yellow-500 rotate-45"></div>
          <div className="absolute bottom-32 left-1/3 w-4 h-4 border-2 border-yellow-500 transform rotate-30"></div>

          {/* Indicadores de radar */}
          <div className="absolute top-36 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-36 right-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse delay-300"></div>

          {/* Líneas de barrido */}
          <div className="absolute top-28 left-24 w-20 h-0.5 bg-gradient-to-r from-yellow-500 via-transparent to-yellow-500 transform rotate-20"></div>
          <div className="absolute bottom-28 right-24 w-14 h-0.5 bg-gradient-to-l from-yellow-500 via-transparent to-yellow-500 transform -rotate-40"></div>
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
                  alt="Expertos en reparación de motocicletas con más de 20 años de experiencia en Calahorra"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px] grayscale-[0.4] contrast-110"
                  style={{
                    maskImage:
                      "linear-gradient(45deg, black 0%, black 65%, rgba(0,0,0,0.7) 80%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(45deg, black 0%, black 65%, rgba(0,0,0,0.7) 80%, transparent 100%)",
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

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wider">
                <span className="text-gray-300">EXPERTOS</span>{" "}
                <span className="text-yellow-500">EN MOTOCICLETAS</span>
              </h2>

              <div className="text-yellow-500 font-mono text-sm tracking-widest mb-6 opacity-80">
                TECNOLOGÍA AVANZADA - SERVICIO PROFESIONAL
              </div>

              <p className="text-lg text-gray-300 mb-6 font-medium leading-relaxed">
                En{" "}
                <span className="text-yellow-500 font-bold">AJ Motorbikes</span>{" "}
                combinamos
                <span className="text-white">
                  {" "}
                  equipamiento de última generación
                </span>{" "}
                con
                <span className="text-yellow-500">
                  {" "}
                  pasión genuina por las motocicletas
                </span>
                . Nuestro compromiso es ofrecer el mejor servicio profesional en{" "}
                <span className="text-gray-400">Calahorra, La Rioja</span>.
              </p>

              {/* Estadísticas de calidad */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-black/40 border border-yellow-500/30 p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2 font-mono">
                    24/7
                  </div>
                  <div className="text-gray-400 font-mono text-sm tracking-wider">
                    DISPONIBILIDAD
                  </div>
                </div>
                <div className="bg-black/40 border border-yellow-500/30 p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2 font-mono">
                    100%
                  </div>
                  <div className="text-gray-400 font-mono text-sm tracking-wider">
                    GARANTÍA DE CALIDAD
                  </div>
                </div>
              </div>

              <p className="text-gray-300 font-medium">
                Contamos con{" "}
                <span className="text-yellow-500">mecánicos certificados</span>{" "}
                y
                <span className="text-white">
                  {" "}
                  herramientas de diagnóstico de última generación
                </span>{" "}
                para ofrecerte un servicio profesional de máxima calidad, sin
                importar la marca o modelo de tu{" "}
                <span className="text-yellow-500">motocicleta</span>.
              </p>

              {/* Línea táctica inferior */}
              <div className="w-16 h-0.5 bg-yellow-500 mt-6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Taller - Valores y Servicios - Estilo Militar */}
      <section
        id="taller"
        className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
      >
        {/* Elementos tácticos de fondo intensificados */}
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          {/* Líneas principales */}
          <div className="absolute top-10 right-1/4 w-20 h-0.5 bg-yellow-500 transform rotate-12"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-0.5 bg-yellow-500 transform -rotate-45"></div>
          <div className="absolute top-1/2 left-10 w-2 h-2 bg-yellow-500 rotate-45"></div>

          {/* Nuevos elementos geométricos */}
          <div className="absolute top-16 left-1/2 w-24 h-0.5 bg-yellow-500 transform rotate-60"></div>
          <div className="absolute bottom-32 right-20 w-18 h-0.5 bg-yellow-500 transform -rotate-25"></div>
          <div className="absolute top-32 right-1/3 w-14 h-0.5 bg-yellow-500 transform rotate-80"></div>

          {/* Formas complejas */}
          <div className="absolute top-24 left-20 w-3 h-3 border-2 border-yellow-500 rotate-45"></div>
          <div className="absolute bottom-28 right-1/4 w-4 h-4 border border-yellow-500 transform rotate-12"></div>

          {/* Puntos de conexión */}
          <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-yellow-500 rounded-full"></div>

          {/* Líneas de escaneo */}
          <div className="absolute top-20 right-10 w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          <div className="absolute bottom-24 left-16 w-16 h-0.5 bg-gradient-to-l from-transparent via-yellow-500 to-transparent transform rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Por qué elegirnos - Valores del taller */}
          <div className="text-center mb-16">
            {/* Línea táctica superior */}
            <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-6"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              <span className="text-gray-300">POR QUÉ</span>{" "}
              <span className="text-yellow-500">ELEGIRNOS</span>
            </h2>

            <div className="text-yellow-500 font-mono text-sm tracking-widest mb-4 opacity-80">
              NUESTRO COMPROMISO CONTIGO
            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              <span className="text-yellow-500">
                Tres pilares fundamentales
              </span>{" "}
              que nos definen como
              <span className="text-white"> tu mejor opción</span> en Calahorra
            </p>

            {/* Línea táctica inferior */}
            <div className="w-16 h-0.5 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* LOS MEJORES PRECIOS */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group text-center">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

              <Tag className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h4 className="text-2xl font-bold mb-3 text-white tracking-wide">
                LOS MEJORES PRECIOS
              </h4>
              <div className="text-yellow-500 font-mono text-sm tracking-wider mb-4">
                NEGOCIAMOS CADA DÍA
              </div>
              <p className="text-gray-300 font-medium leading-relaxed">
                Hablamos con nuestros proveedores pensando en conseguir el mejor
                precio para nuestros clientes
              </p>
            </div>

            {/* EXPERTOS EN MOTOS */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group text-center">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

              <Bike className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h4 className="text-2xl font-bold mb-3 text-white tracking-wide">
                EXPERTOS EN MOTOS
              </h4>
              <div className="text-yellow-500 font-mono text-sm tracking-wider mb-4">
                ESTÁS EN BUENAS MANOS
              </div>
              <p className="text-gray-300 font-medium leading-relaxed">
                Después de 20 años dedicados a la moto podemos decir que somos
                expertos y que nos encanta nuestro trabajo.
              </p>
            </div>

            {/* LA MEJOR CALIDAD */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group text-center">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

              <Gem className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h4 className="text-2xl font-bold mb-3 text-white tracking-wide">
                LA MEJOR CALIDAD
              </h4>
              <div className="text-yellow-500 font-mono text-sm tracking-wider mb-4">
                NOS GUSTA QUE NOS TRATEN BIEN
              </div>
              <p className="text-gray-300 font-medium leading-relaxed">
                Ponemos exclusivamente los materiales que pondríamos en nuestra
                propia moto. No podía ser de otra manera.
              </p>
            </div>
          </div>

          {/* Separador táctico */}
          <div className="flex items-center mb-20">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-yellow-500 rotate-45"></div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
          </div>

          {/* Servicios para motos */}
          <div className="text-center mb-16">
            {/* Línea táctica superior */}
            <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-6"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              <span className="text-gray-300">SERVICIOS</span>{" "}
              <span className="text-yellow-500">PARA MOTOS</span>
            </h2>

            <div className="text-yellow-500 font-mono text-sm tracking-widest mb-4 opacity-80">
              SERVICIOS ESPECIALIZADOS PARA MOTOCICLETAS
            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              <span className="text-yellow-500">
                Servicios profesionales completos
              </span>{" "}
              para mantener tu moto en
              <span className="text-white">
                {" "}
                condiciones óptimas de rendimiento
              </span>
            </p>

            {/* Línea táctica inferior */}
            <div className="w-16 h-0.5 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TALLER MULTIMARCA */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

              <Settings className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">
                TALLER MULTIMARCA
              </h3>
              <p className="text-gray-300 font-medium">
                Reparación y mantenimiento de motos de todas las marcas
              </p>
            </div>

            {/* RECAMBIOS */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

              <Package className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">
                RECAMBIOS
              </h3>
              <p className="text-gray-300 font-medium">
                Recambios originales y compatibles, nuevos o de ocasión
              </p>
            </div>

            {/* ELECTRICIDAD */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

              <Zap className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">
                ELECTRICIDAD
              </h3>
              <p className="text-gray-300 font-medium">
                Diagnóstico y solución de fallos eléctricos
              </p>
            </div>

            {/* NEUMÁTICOS */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

              <CircleDot className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">
                NEUMÁTICOS
              </h3>
              <p className="text-gray-300 font-medium">
                Venta, montaje y equilibrado de neumáticos
              </p>
            </div>

            {/* MECÁNICA */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

              <Cog className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">
                MECÁNICA
              </h3>
              <p className="text-gray-300 font-medium">
                Servicio completo de mecánica general y reparaciones
              </p>
            </div>

            {/* REVISIÓN PRE-ITV */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

              <ClipboardCheck className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">
                REVISIÓN PRE-ITV
              </h3>
              <p className="text-gray-300 font-medium">
                Comprobación de todos los puntos clave antes de la ITV
              </p>
            </div>
          </div>

          {/* Botón Cita Previa */}
          <div className="text-center mt-16">
            <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-8"></div>
            <h4 className="text-2xl font-bold text-white mb-6 tracking-wider">
              <span className="text-gray-300">PIDE TU</span>{" "}
              <span className="text-yellow-500">CITA PREVIA</span>
            </h4>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
              <span className="text-yellow-500">Contacta con nosotros</span>{" "}
              para programar el mantenimiento o reparación de tu moto
            </p>
            <a
              href="https://wa.me/34614154659?text=Hola,%20me%20gustaría%20pedir%20cita%20previa%20para%20mi%20moto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-black px-8 py-3 font-bold tracking-wider hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group text-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                {/* Icono de WhatsApp */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c0-5.444 4.425-9.87 9.87-9.87 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.882 6.972c-.003 5.444-4.428 9.869-9.872 9.869zm8.413-18.282A11.815 11.815 0 0011.97 0C5.373 0 0 5.373 0 12c0 2.122.553 4.198 1.601 6.032L.057 24l6.134-1.635A11.93 11.93 0 0011.969 24C18.627 24 24 18.627 24 12c0-2.539-.78-4.998-2.336-7.283z" />
                </svg>
                <span className="font-mono">PEDIR CITA POR WHATSAPP</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <div className="w-16 h-0.5 bg-yellow-500 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Vehículos en venta - Estilo Militar */}
      <section
        id="vehiculos"
        className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      >
        {/* Elementos tácticos de fondo intensificados */}
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          {/* Líneas principales */}
          <div className="absolute top-16 left-1/4 w-24 h-0.5 bg-yellow-500 transform rotate-45"></div>
          <div className="absolute bottom-24 right-1/3 w-18 h-0.5 bg-yellow-500 transform -rotate-30"></div>
          <div className="absolute top-1/2 right-16 w-2 h-2 bg-yellow-500 rotate-45"></div>

          {/* Red táctica compleja */}
          <div className="absolute top-12 right-1/4 w-20 h-0.5 bg-yellow-500 transform rotate-75"></div>
          <div className="absolute bottom-16 left-1/3 w-16 h-0.5 bg-yellow-500 transform -rotate-50"></div>
          <div className="absolute top-32 left-16 w-22 h-0.5 bg-yellow-500 transform rotate-25"></div>

          {/* Marcos de mira */}
          <div className="absolute top-20 right-20 w-8 h-8 border-2 border-yellow-500 rotate-45">
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>
          <div className="absolute bottom-20 left-20 w-6 h-6 border border-yellow-500 transform rotate-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Línea táctica superior */}
            <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-6"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              <span className="text-gray-300">VEHÍCULOS</span>{" "}
              <span className="text-yellow-500">EN VENTA</span>
            </h2>

            <div className="text-yellow-500 font-mono text-sm tracking-widest mb-4 opacity-80">
              MOTOS Y COCHES DE OCASIÓN SELECCIONADOS
            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              <span className="text-yellow-500">Vehículos revisados</span> y
              garantizados.
              <span className="text-white">
                {" "}
                Encuentra tu próxima moto o coche
              </span>{" "}
              en nuestro catálogo especializado
            </p>

            {/* Línea táctica inferior */}
            <div className="w-16 h-0.5 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          {/* Vehículos disponibles */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {vehiclesForSale.length > 0 ? (
              vehiclesForSale.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-black/60 border-2 border-gray-700 hover:border-yellow-500 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Esquinas tácticas */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60 z-10"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60 z-10"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60 z-10"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60 z-10"></div>

                  {/* Carrusel de imágenes del vehículo */}
                  <VehicleImageCarousel
                    images={vehicle.images || []}
                    vehicleName={vehicle.name}
                    status={vehicle.status}
                  />

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-white tracking-wide uppercase">
                        {vehicle.name}
                      </h4>
                      <span className="text-yellow-500 font-mono text-sm">
                        {vehicle.year}
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="text-2xl font-bold text-yellow-500 mb-1">
                        {(vehicle.price / 100).toLocaleString("es-ES", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        €
                      </div>
                      <div className="text-sm text-gray-400 font-mono">
                        {vehicle.mileage.toLocaleString("es-ES")} KM
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {vehicle.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-xs font-mono">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-2">■</span>
                        <span className="text-gray-400 capitalize">
                          {vehicle.fuel}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-2">■</span>
                        <span className="text-gray-400">{vehicle.year}</span>
                      </div>
                      {vehicle.features && vehicle.features.length > 0 && (
                        <>
                          <div className="flex items-center">
                            <span className="text-yellow-500 mr-2">■</span>
                            <span className="text-gray-400">
                              {vehicle.features[0].feature}
                            </span>
                          </div>
                          {vehicle.features[1] && (
                            <div className="flex items-center">
                              <span className="text-yellow-500 mr-2">■</span>
                              <span className="text-gray-400">
                                {vehicle.features[1].feature}
                              </span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    <a
                      href={`https://wa.me/34614154659?text=Hola,%20me%20gustaría%20más%20información%20sobre%20${encodeURIComponent(vehicle.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-4 font-bold text-sm tracking-wider transition-all duration-300 inline-block text-center"
                    >
                      VER DETALLES
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">
                  No hay vehículos disponibles en este momento.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Vuelve pronto para ver nuestras últimas ofertas.
                </p>
              </div>
            )}
          </div>

          {/* Botón para ver más vehículos */}
          <div className="text-center mt-12">
            <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-8"></div>
            <a
              href="https://wa.me/34614154659?text=Hola,%20me%20gustaría%20información%20sobre%20los%20vehículos%20en%20venta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 font-bold tracking-wider transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                VER MÁS VEHÍCULOS
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <div className="w-16 h-0.5 bg-yellow-500 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Tasación - Estilo Militar */}
      <section
        id="tasacion"
        className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden"
      >
        {/* Elementos tácticos de fondo intensificados */}
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          {/* Líneas principales */}
          <div className="absolute top-20 left-1/4 w-28 h-0.5 bg-yellow-500 transform rotate-30"></div>
          <div className="absolute bottom-32 right-1/4 w-22 h-0.5 bg-yellow-500 transform -rotate-45"></div>
          <div className="absolute top-1/2 left-16 w-2 h-2 bg-yellow-500 rotate-45"></div>

          {/* Elementos geométricos complejos */}
          <div className="absolute top-16 right-1/3 w-20 h-0.5 bg-yellow-500 transform rotate-60"></div>
          <div className="absolute bottom-20 left-1/3 w-18 h-0.5 bg-yellow-500 transform -rotate-25"></div>
          <div className="absolute top-40 right-16 w-16 h-0.5 bg-yellow-500 transform rotate-80"></div>

          {/* Marcos de targeting */}
          <div className="absolute top-24 left-20 w-6 h-6 border-2 border-yellow-500 rotate-45"></div>
          <div className="absolute bottom-28 right-1/4 w-4 h-4 border border-yellow-500 transform rotate-12"></div>

          {/* Puntos de radar */}
          <div className="absolute top-36 right-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-36 left-1/2 w-1 h-1 bg-yellow-500 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Línea táctica superior */}
            <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-6"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              <span className="text-gray-300">TASACIÓN</span>{" "}
              <span className="text-yellow-500">PROFESIONAL</span>
            </h2>

            <div className="text-yellow-500 font-mono text-sm tracking-widest mb-4 opacity-80">
              TE COMPRAMOS TU MOTO AL MEJOR PRECIO
            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              <span className="text-yellow-500">
                Tasación gratuita de tu moto
              </span>{" "}
              con
              <span className="text-white">
                {" "}
                evaluación completa y pago inmediato
              </span>
            </p>

            {/* Línea táctica inferior */}
            <div className="w-16 h-0.5 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          {/* Contenido de Tasación */}
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
                  src="/photo-1636761358772-798789548d25.avif"
                  alt="Tasación y compra de motos de ocasión en Calahorra - AJ Motorbikes"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                  style={{
                    maskImage:
                      "radial-gradient(circle at center, black 40%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.4) 80%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at center, black 40%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.4) 80%, transparent 100%)",
                  }}
                />
                {/* Overlay militar */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-gray-900/30"></div>

                {/* Indicadores tácticos */}
                <div className="absolute top-4 right-4 w-2 h-8 bg-yellow-500 opacity-70"></div>
                <div className="absolute top-4 right-8 w-8 h-2 bg-yellow-500 opacity-70"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-500 animate-pulse"></div>
              </div>
            </div>

            <div>
              {/* Línea táctica superior */}
              <div className="w-20 h-0.5 bg-yellow-500 mb-6"></div>

              <h4 className="text-2xl font-bold text-white mb-6 tracking-wider">
                <span className="text-gray-300">TE COMPRAMOS</span>{" "}
                <span className="text-yellow-500">TU MOTO</span>
              </h4>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center font-mono font-bold text-black">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-2">
                      EVALUACIÓN GRATUITA
                    </h5>
                    <p className="text-gray-300">
                      Inspección completa y valoración profesional
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center font-mono font-bold text-black">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-2">MEJOR PRECIO</h5>
                    <p className="text-gray-300">
                      Oferta competitiva según el mercado actual
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center font-mono font-bold text-black">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-2">
                      PAGO INMEDIATO
                    </h5>
                    <p className="text-gray-300">
                      Transferencia o efectivo al momento
                    </p>
                  </div>
                </div>
              </div>

              {/* Botón de contacto para tasación */}
              <div className="mb-6">
                <a
                  href="https://wa.me/34614154659?text=Hola,%20me%20gustaría%20solicitar%20una%20tasación%20para%20mi%20moto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 font-bold tracking-wider transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                >
                  <span className="relative z-10">SOLICITAR TASACIÓN</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </a>
              </div>

              {/* Línea táctica inferior */}
              <div className="w-16 h-0.5 bg-yellow-500"></div>
            </div>
          </div>

          {/* Separador táctico */}
          <div className="flex items-center mb-20">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-yellow-500 rotate-45"></div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
          </div>

          {/* Segunda parte: Recambios y accesorios */}
          <div id="recambios" className="text-center mb-16">
            <h4 className="text-2xl font-bold text-white mb-4 tracking-wider">
              <span className="text-gray-300">RECAMBIOS Y</span>{" "}
              <span className="text-yellow-500">EQUIPACIÓN</span>
            </h4>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              <span className="text-yellow-500">
                Amplio catálogo de recambios
              </span>{" "}
              originales y compatibles,
              <span className="text-white"> accesorios y equipación</span> para
              todas las marcas de motocicletas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Recambios originales */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

              <Wrench className="h-12 w-12 text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">
                RECAMBIOS ORIGINALES
              </h4>
              <p className="text-gray-300 mb-4 font-medium">
                <span className="text-yellow-500">Piezas originales</span> y
                compatibles de
                <span className="text-white"> máxima calidad y garantía</span>.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 font-mono">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Motor y
                  transmisión
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Frenos y
                  suspensión
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Sistema
                  eléctrico
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Carrocería y
                  chasis
                </li>
              </ul>
            </div>

            {/* Accesorios */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

              <Star className="h-12 w-12 text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">
                ACCESORIOS
              </h4>
              <p className="text-gray-300 mb-4 font-medium">
                <span className="text-yellow-500">Mejora y personaliza</span> tu
                moto con
                <span className="text-white"> accesorios de alta calidad</span>.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 font-mono">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Maletas y
                  baúles
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Escapes
                  deportivos
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Protecciones
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Iluminación
                  LED
                </li>
              </ul>
            </div>

            {/* Equipación */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              {/* Esquinas tácticas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

              <Shield className="h-12 w-12 text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">
                EQUIPACIÓN PROFESIONAL
              </h4>
              <p className="text-gray-300 mb-4 font-medium">
                <span className="text-yellow-500">Equipación completa</span>{" "}
                para tu
                <span className="text-white"> seguridad y comodidad</span> en
                carretera.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 font-mono">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Cascos
                  certificados
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Chaquetas y
                  pantalones
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Guantes y
                  botas
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Protecciones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto - Estilo Militar */}
      <section
        id="contacto"
        className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      >
        {/* Elementos tácticos de fondo intensificados */}
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          {/* Líneas principales */}
          <div className="absolute top-16 left-1/4 w-24 h-0.5 bg-yellow-500 transform rotate-45"></div>
          <div className="absolute bottom-24 right-1/3 w-18 h-0.5 bg-yellow-500 transform -rotate-30"></div>
          <div className="absolute top-1/2 right-16 w-2 h-2 bg-yellow-500 rotate-45"></div>

          {/* Red táctica compleja */}
          <div className="absolute top-12 right-1/4 w-20 h-0.5 bg-yellow-500 transform rotate-75"></div>
          <div className="absolute bottom-16 left-1/3 w-16 h-0.5 bg-yellow-500 transform -rotate-50"></div>
          <div className="absolute top-32 left-16 w-22 h-0.5 bg-yellow-500 transform rotate-25"></div>

          {/* Marcos de mira */}
          <div className="absolute top-20 right-20 w-8 h-8 border-2 border-yellow-500 rotate-45">
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>
          <div className="absolute bottom-20 left-20 w-6 h-6 border border-yellow-500 transform rotate-30"></div>

          {/* Indicadores de sistema */}
          <div className="absolute top-28 left-1/2 w-1 h-1 bg-yellow-500 animate-pulse"></div>
          <div className="absolute bottom-32 right-1/2 w-1.5 h-1.5 bg-yellow-500 animate-pulse delay-500"></div>

          {/* Líneas de conexión */}
          <div className="absolute top-24 right-32 w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent transform rotate-60"></div>
          <div className="absolute bottom-28 left-32 w-14 h-0.5 bg-gradient-to-l from-transparent via-yellow-500 to-transparent transform -rotate-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Línea táctica superior */}
            <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-6"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              <span className="text-gray-300">NUESTRO</span>{" "}
              <span className="text-yellow-500">TALLER</span>
            </h2>

            <div className="text-yellow-500 font-mono text-sm tracking-widest mb-4 opacity-80">
              CALAHORRA - LA RIOJA
            </div>

            <p className="text-lg text-gray-300 font-medium">
              <span className="text-yellow-500">Visítanos</span> en nuestro
              <span className="text-white">
                {" "}
                taller especializado en motocicletas
              </span>
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
              <div className="text-yellow-500 font-mono text-xs tracking-widest mb-2">
                UBICACIÓN
              </div>
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">
                UBICACIÓN DEL TALLER
              </h4>
              <div className="text-gray-300 font-mono space-y-1">
                <p className="text-yellow-500">Av. Achútegui de Blas, 22</p>
                <p>26500 Calahorra</p>
                <p>
                  La Rioja, <span className="text-yellow-500">ESP</span>
                </p>
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
              <div className="text-yellow-500 font-mono text-xs tracking-widest mb-2">
                HORARIOS
              </div>
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">
                HORARIOS DE ATENCIÓN
              </h4>
              <div className="text-gray-300 font-mono space-y-2">
                <p>
                  <span className="text-yellow-500">LUN-VIE:</span> 08:00 -
                  16:00
                </p>
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
              <div className="text-yellow-500 font-mono text-xs tracking-widest mb-2">
                COMUNICACIÓN
              </div>
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">
                CANAL DE COMUNICACIÓN
              </h4>
              <div className="text-gray-300 font-mono space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-yellow-500" />
                  <span className="text-yellow-500">614 15 46 59</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-300">
                    ajmotorbikeslr@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Estilo Militar */}
      <footer className="bg-gradient-to-b from-black to-gray-900 py-12 border-t-2 border-yellow-500/30 relative overflow-hidden">
        {/* Elementos tácticos de fondo intensificados */}
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          {/* Líneas base */}
          <div className="absolute top-8 left-1/4 w-20 h-0.5 bg-yellow-500 transform rotate-12"></div>
          <div className="absolute bottom-8 right-1/4 w-16 h-0.5 bg-yellow-500 transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rotate-45"></div>

          {/* Red geométrica compleja */}
          <div className="absolute top-4 right-1/3 w-18 h-0.5 bg-yellow-500 transform rotate-45"></div>
          <div className="absolute bottom-4 left-1/3 w-14 h-0.5 bg-yellow-500 transform -rotate-35"></div>
          <div className="absolute top-6 left-16 w-12 h-0.5 bg-yellow-500 transform rotate-70"></div>
          <div className="absolute bottom-6 right-16 w-10 h-0.5 bg-yellow-500 transform -rotate-55"></div>

          {/* Elementos de interfaz táctica */}
          <div className="absolute top-3 left-1/2 w-4 h-4 border border-yellow-500 rotate-45">
            <div className="absolute top-1 left-1 w-2 h-2 border border-yellow-500"></div>
          </div>
          <div className="absolute bottom-3 right-1/2 w-3 h-3 border-2 border-yellow-500 transform rotate-30"></div>

          {/* Puntos de navegación */}
          <div className="absolute top-2 right-20 w-1 h-1 bg-yellow-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 left-20 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse delay-700"></div>

          {/* Líneas de escaneo */}
          <div className="absolute top-5 left-8 w-16 h-0.5 bg-gradient-to-r from-yellow-500 via-transparent to-yellow-500 transform rotate-15"></div>
          <div className="absolute bottom-5 right-8 w-12 h-0.5 bg-gradient-to-l from-yellow-500 via-transparent to-yellow-500 transform -rotate-25"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Comando Central */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Image
                    src="/aj-logo.webp"
                    alt="Logo AJ Motorbikes - Taller de motos en Calahorra La Rioja"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-yellow-500/50"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white tracking-wider">
                    AJ MOTORBIKES
                  </h4>
                  <div className="text-yellow-500 font-mono text-xs tracking-widest">
                    TALLER ESPECIALIZADO
                  </div>
                </div>
              </div>
              <p className="text-gray-300 font-medium leading-relaxed">
                <span className="text-yellow-500">Taller especializado</span> en
                Calahorra, La Rioja.
                <span className="text-white">
                  {" "}
                  Equipamiento de última generación
                </span>{" "}
                para el mantenimiento y reparación de
                <span className="text-yellow-500">
                  {" "}
                  motocicletas de todas las marcas
                </span>
                .
              </p>
            </div>

            {/* Operaciones Tácticas */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-0.5 bg-yellow-500 mr-3"></div>
                <h5 className="font-bold text-white tracking-wider">
                  SERVICIOS ESPECIALIZADOS
                </h5>
              </div>
              <ul className="space-y-2 text-gray-300 font-mono">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Mantenimiento
                  preventivo
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Reparaciones
                  especializadas
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Diagnóstico
                  avanzado
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Modificaciones
                  personalizadas
                </li>
              </ul>
            </div>

            {/* Canal de Comunicación */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-0.5 bg-yellow-500 mr-3"></div>
                <h5 className="font-bold text-white tracking-wider">
                  CANAL DE COMUNICACIÓN
                </h5>
              </div>
              <ul className="space-y-2 text-gray-300 font-mono">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> Av. Achútegui
                  de Blas, 22
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> 26500
                  Calahorra, La Rioja
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span> 614 15 46 59
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">■</span>{" "}
                  ajmotorbikeslr@gmail.com
                </li>
              </ul>
            </div>
          </div>

          {/* Línea de separación táctica */}
          <div className="flex items-center mt-8 mb-6">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-yellow-500 rotate-45"></div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <div className="text-yellow-500 font-mono text-sm tracking-widest mb-2">
              ESPECIALISTAS EN MOTOCICLETAS
            </div>
            <p className="text-gray-400 font-mono text-sm mb-3">
              &copy; 2025 <span className="text-yellow-500">AJ MOTORBIKES</span>{" "}
              - Todos los derechos reservados
            </p>
            <div className="border-t border-yellow-500/20 pt-4">
              <p className="text-gray-500 text-xs">
                Página realizada por{" "}
                <a
                  href="https://www.linkedin.com/in/jaime-alvarez-b0441b241/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors font-medium"
                >
                  Jaime Álvarez
                </a>{" "}
                • Software Developer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
