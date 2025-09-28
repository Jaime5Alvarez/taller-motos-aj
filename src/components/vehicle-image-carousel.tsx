"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { VehicleImage } from "@/types/vehicle";

interface VehicleImageCarouselProps {
  images: VehicleImage[];
  vehicleName: string;
  status?: "available" | "sold";
}

export function VehicleImageCarousel({
  images,
  vehicleName,
  status = "available",
}: VehicleImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Si solo hay una imagen, no mostrar controles de navegación
  if (images.length === 1) {
    return (
      <div className="relative h-48 overflow-hidden">
        <Image
          src={images[0].imageUrl}
          alt={vehicleName}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div
          className={`absolute top-4 right-4 px-3 py-1 font-bold text-sm ${
            status === "available"
              ? "bg-yellow-500 text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {status === "available" ? "DISPONIBLE" : "VENDIDO"}
        </div>
      </div>
    );
  }

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="relative h-48 overflow-hidden group">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent className="h-48">
          {images.map((image, index) => (
            <CarouselItem key={image.id} className="h-48">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image.imageUrl}
                  alt={`${vehicleName} - Imagen ${index + 1}`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controles de navegación estilo militar - solo aparecen en hover */}
        <div className="absolute inset-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border-yellow-500/50 text-yellow-500 hover:text-yellow-400 size-8 transition-all duration-200 hover:scale-110 hover:border-yellow-400" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border-yellow-500/50 text-yellow-500 hover:text-yellow-400 size-8 transition-all duration-200 hover:scale-110 hover:border-yellow-400" />
        </div>
      </Carousel>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

      {/* Badge disponible */}
      <div
        className={`absolute top-4 right-4 px-3 py-1 font-bold text-sm ${
          status === "available"
            ? "bg-yellow-500 text-black"
            : "bg-red-500 text-white"
        } z-10`}
      >
        {status === "available" ? "DISPONIBLE" : "VENDIDO"}
      </div>

      {/* Indicadores de puntos estilo militar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 transition-all duration-200 ${
              index === current - 1
                ? "bg-yellow-500 scale-125 shadow-lg shadow-yellow-500/50"
                : "bg-white/50 hover:bg-white/80 hover:scale-110"
            } ${
              index === current - 1 ? "rounded-sm rotate-45" : "rounded-full"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Contador de imágenes estilo militar */}
      <div className="absolute top-4 left-4 bg-black/60 text-yellow-500 px-2 py-1 text-xs font-mono border border-yellow-500/30 z-10">
        <span className="text-yellow-500">{current}</span>
        <span className="text-white/60">/</span>
        <span className="text-white/80">{count}</span>
      </div>

      {/* Líneas tácticas decorativas */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-yellow-500/40 z-10"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-yellow-500/40 z-10"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-yellow-500/40 z-10"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-yellow-500/40 z-10"></div>
    </div>
  );
}
