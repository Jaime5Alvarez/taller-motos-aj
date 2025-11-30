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
  Navigation
} from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/header";
import { VehicleImageCarousel } from "@/components/vehicle-image-carousel";
import { VehicleService } from "@/modules/vehicles/application/services/vehicle-service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Interfaz para los datos de cada pueblo
interface TownData {
  name: string;
  time: string;
  distance: string;
  route: string;
  description: string;
}

// Datos específicos para cada pueblo (esto hace el contenido único)
const towns: Record<string, TownData> = {
  "arnedo": {
    name: "Arnedo",
    time: "15 minutos",
    distance: "14 km",
    route: "LR-134",
    description: "Para los motoristas de la Ciudad del Calzado, somos la opción más técnica y cercana."
  },
  "autol": {
    name: "Autol",
    time: "10 minutos",
    distance: "7 km",
    route: "LR-115",
    description: "Estamos prácticamente al lado. Merece la pena el breve trayecto para un servicio premium."
  },
  "rincon-de-soto": {
    name: "Rincón de Soto",
    time: "12 minutos",
    distance: "13 km",
    route: "N-232",
    description: "Atendemos habitualmente a clientes de Rincón que buscan especialistas multimarca."
  },
  "alfaro": {
    name: "Alfaro",
    time: "20 minutos",
    distance: "24 km",
    route: "N-232",
    description: "El trayecto desde Alfaro se compensa con nuestra garantía de calidad y rapidez."
  },
  "pradejon": {
    name: "Pradejón",
    time: "8 minutos",
    distance: "6 km",
    route: "N-232",
    description: "Vecinos de Pradejón, somos vuestro taller de referencia a un paso de casa."
  },
  "san-adrian": {
    name: "San Adrián",
    time: "5 minutos",
    distance: "4 km",
    route: "NA-134",
    description: "Cruzando el puente ya estás aquí. El servicio más rápido para San Adrián."
  },
  "aldeanueva-de-ebro": {
    name: "Aldeanueva de Ebro",
    time: "15 minutos",
    distance: "16 km",
    route: "N-232",
    description: "Muchos moteros de Aldeanueva ya confían el mantenimiento de sus máquinas a AJ Motorbikes."
  }
};

export async function generateStaticParams() {
  return Object.keys(towns).map((town) => ({
    town,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ town: string }> }): Promise<Metadata> {
  const { town } = await params;
  const townData = towns[town];
  
  if (!townData) {
    return {
      title: "Taller de Motos | AJ Motorbikes",
    };
  }

  return {
    title: `Taller de Motos para ${townData.name} | AJ Motorbikes (Calahorra)`,
    description: `Servicio de taller de motos para ${townData.name}. Estamos a solo ${townData.time} (${townData.distance}). Mecánica, neumáticos y tasación. Tu taller de confianza cerca.`,
    alternates: {
      canonical: `https://www.ajmotorbikes.com/taller-motos/${town}`,
    },
  };
}

async function getVehiclesForSale() {
  const vehicleService = new VehicleService();
  try {
    const vehicles = await vehicleService.getAvailableVehiclesWithDetails();
    return vehicles;
  } catch (error) {
    console.error("Error fetching vehicles for sale:", error);
    return [];
  }
}

export default async function TownPage({ params }: { params: Promise<{ town: string }> }) {
  const { town } = await params;
  const townData = towns[town];

  if (!townData) {
    notFound();
  }

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
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in animate-duration-1000">
              {/* Efecto de rayo detrás del título */}
              <div className="absolute -top-8 -right-4 w-80 h-80 opacity-80 pointer-events-none animate-fade-in animate-delay-500">
                <Image
                  src="/lightb_car.webp"
                  alt={`Taller de motos AJ Motorbikes servicio para ${townData.name}`}
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
                <span className="text-gray-300">SERVICIO PARA</span>
                <span className="text-yellow-500 block font-black">
                  {townData.name.toUpperCase()}
                </span>
              </h1>

              {/* Subtítulo militar */}
              <div className="text-yellow-500 font-mono text-sm tracking-widest mb-4 opacity-80 animate-fade-in animate-delay-700">
                TU TALLER DE CONFIANZA EN CALAHORRA
              </div>

              {/* Línea decorativa inferior */}
              <div className="w-24 h-0.5 bg-yellow-500 mb-6 animate-fade-in animate-delay-700"></div>
              <p className="text-lg text-gray-300 mb-8 font-medium leading-relaxed animate-fade-in animate-delay-1000">
                <span className="text-yellow-500 font-mono">
                  AJ MOTORBIKES
                </span>{" "}
                es tu referencia en la zona.
                <br />
                <span className="text-gray-400">Desde nuestras instalaciones en Calahorra</span> damos cobertura completa a motoristas de {townData.name}.
                <span className="text-white block mt-2 text-xl font-bold">
                   ¿Buscas calidad? Merece la pena el trayecto.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-bottom animate-delay-1000 animate-duration-700">
                <a
                  href="https://wa.me/3464664011?text=Hola,%20soy%20de%20tu%20zona%20y%20me%20gustaría%20pedir%20cita%20para%20mi%20moto"
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
              {/* Imagen principal del taller */}
              <div className="relative ">
                <Image
                  src="/photo-1604260324056-45f7c778754a.avif"
                  alt={`Taller mecánico de motocicletas cerca de ${townData.name}`}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATOS DE VIAJE (Elemento Diferenciador para SEO) */}
      <section className="bg-black/80 border-y border-yellow-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
               <MapPin className="text-yellow-500 h-8 w-8" />
               <div>
                 <p className="text-xs text-gray-400 font-mono">ORIGEN - DESTINO</p>
                 <p className="text-white font-bold">{townData.name} <span className="text-yellow-500">➔</span> Calahorra</p>
               </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-yellow-500/30"></div>
            <div className="flex items-center gap-3">
               <Clock className="text-yellow-500 h-8 w-8" />
               <div>
                 <p className="text-xs text-gray-400 font-mono">TIEMPO ESTIMADO</p>
                 <p className="text-white font-bold">{townData.time}</p>
               </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-yellow-500/30"></div>
            <div className="flex items-center gap-3">
               <Navigation className="text-yellow-500 h-8 w-8" />
               <div>
                 <p className="text-xs text-gray-400 font-mono">DISTANCIA / RUTA</p>
                 <p className="text-white font-bold">{townData.distance} por {townData.route}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros (Adaptado) */}
      <div className="py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden">
                <Image
                  src="/motos-taller.webp"
                  alt={`Reparación de motos para clientes de ${townData.name}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px] grayscale-[0.4] contrast-110"
                  style={{
                    maskImage: "linear-gradient(45deg, black 0%, black 65%, rgba(0,0,0,0.7) 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(45deg, black 0%, black 65%, rgba(0,0,0,0.7) 80%, transparent 100%)",
                  }}
                />
              </div>
            </div>
            <div>
              <div className="w-20 h-0.5 bg-yellow-500 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wider">
                <span className="text-gray-300">TU TALLER DE CONFIANZA</span>{" "}
                <span className="text-yellow-500">CERCA DE TI</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 font-medium leading-relaxed">
                {townData.description}
                <br/><br/>
                En <span className="text-yellow-500 font-bold">AJ Motorbikes</span> sabemos que desplazarse desde {townData.name} requiere un esfuerzo, por eso nos aseguramos de que valga la pena con un servicio de máxima calidad y rapidez.
              </p>
              
               {/* Estadísticas de calidad */}
               <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-black/40 border border-yellow-500/30 p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2 font-mono">
                    100%
                  </div>
                  <div className="text-gray-400 font-mono text-sm tracking-wider">
                    SATISFACCIÓN
                  </div>
                </div>
                <div className="bg-black/40 border border-yellow-500/30 p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2 font-mono">
                    PRO
                  </div>
                  <div className="text-gray-400 font-mono text-sm tracking-wider">
                    EQUIPAMIENTO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Taller - Servicios */}
      <section id="taller" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              <span className="text-gray-300">SERVICIOS PARA</span>{" "}
              <span className="text-yellow-500">{townData.name.toUpperCase()}</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              Todo lo que tu moto necesita, a un paso de <span className="text-yellow-500">{townData.name}</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TALLER MULTIMARCA */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              <Settings className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">TALLER MULTIMARCA</h3>
              <p className="text-gray-300 font-medium">Reparación y mantenimiento de todas las marcas.</p>
            </div>
            {/* RECAMBIOS */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              <Package className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">RECAMBIOS</h3>
              <p className="text-gray-300 font-medium">Piezas originales y compatibles.</p>
            </div>
            {/* NEUMÁTICOS */}
            <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              <CircleDot className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">NEUMÁTICOS</h3>
              <p className="text-gray-300 font-medium">Venta y montaje de neumáticos.</p>
            </div>
             {/* ELECTRICIDAD */}
             <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              <Zap className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">ELECTRICIDAD</h3>
              <p className="text-gray-300 font-medium">Diagnóstico de fallos eléctricos.</p>
            </div>
             {/* MECÁNICA */}
             <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              <Cog className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">MECÁNICA</h3>
              <p className="text-gray-300 font-medium">Mecánica general y reparaciones complejas.</p>
            </div>
             {/* PRE-ITV */}
             <div className="bg-black/60 border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-300 relative group">
              <ClipboardCheck className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">PRE-ITV</h3>
              <p className="text-gray-300 font-medium">Revisión completa para pasar la ITV.</p>
            </div>
          </div>
          
          {/* Botón Cita Previa */}
          <div className="text-center mt-16">
            <a
              href="https://wa.me/34646640511?text=Hola,%20me%20gustaría%20pedir%20cita%20previa%20para%20mi%20moto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-black px-8 py-3 font-bold tracking-wider hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group text-center"
            >
              PEDIR CITA AHORA
            </a>
          </div>
        </div>
      </section>

      {/* Vehículos en venta */}
      <section id="vehiculos" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              <span className="text-gray-300">VEHÍCULOS</span> <span className="text-yellow-500">EN VENTA</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              ¿Buscas moto en <span className="text-yellow-500">{townData.name}</span>? Mira nuestras ofertas en Calahorra.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {vehiclesForSale.length > 0 ? (
              vehiclesForSale.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-black/60 border-2 border-gray-700 hover:border-yellow-500 transition-all duration-300 relative group overflow-hidden"
                >
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
                    <a
                      href={`https://wa.me/34646640511?text=Hola,%20estoy%20interesado%20en%20la%20${encodeURIComponent(vehicle.name)}%20desde%20${townData.name}`}
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
                  Consulta nuestro catálogo completo en el taller.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tasación */}
      <section id="tasacion" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              <span className="text-gray-300">COMPRAMOS TU MOTO EN</span> <span className="text-yellow-500">{townData.name.toUpperCase()}</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              Tráenos tu moto desde {townData.name} y te damos la mejor tasación al momento.
            </p>
             <div className="mt-8">
                <a
                  href="https://wa.me/34646640511?text=Hola,%20me%20gustaría%20solicitar%20una%20tasación%20para%20mi%20moto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 font-bold tracking-wider transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                >
                  SOLICITAR TASACIÓN
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* Footer - Estilo Militar */}
      <footer className="bg-gradient-to-b from-black to-gray-900 py-12 border-t-2 border-yellow-500/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid md:grid-cols-3 gap-8">
             <div>
                <h4 className="text-xl font-bold text-white tracking-wider mb-4">AJ MOTORBIKES</h4>
                <p className="text-gray-300">
                  Servicio integral para <span className="text-yellow-500">{townData.name}</span> desde nuestras instalaciones en Calahorra.
                </p>
             </div>
             <div>
                <h5 className="font-bold text-white tracking-wider mb-4">UBICACIÓN</h5>
                 <ul className="space-y-2 text-gray-300 font-mono">
                  <li>Av. Achútegui de Blas, 22</li>
                  <li>26500 Calahorra, La Rioja</li>
                 </ul>
             </div>
              <div>
                <h5 className="font-bold text-white tracking-wider mb-4">CONTACTO</h5>
                 <ul className="space-y-2 text-gray-300 font-mono">
                  <li>646 64 05 11</li>
                  <li>ajmotorbikeslr@gmail.com</li>
                 </ul>
             </div>
           </div>
           <div className="text-center mt-12 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                AJ Motorbikes - Servicio para {townData.name} y alrededores.
              </p>
           </div>
        </div>
      </footer>
    </div>
  );
}
