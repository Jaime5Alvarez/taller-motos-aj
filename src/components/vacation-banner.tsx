import { CalendarOff } from "lucide-react";
import { vacationNotice } from "@/lib/vacation-notice";

export function VacationBanner() {
  if (!vacationNotice.active) {
    return null;
  }

  return (
    // El header es fijo y crece a dos líneas entre md y xl, de ahí el padding por tramos
    <section className="bg-slate-900 pt-28 md:pt-40 xl:pt-28 pb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-black/70 border-2 border-yellow-500 p-6 md:p-8 relative animate-fade-in">
        {/* Esquinas tácticas */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500 opacity-60"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500 opacity-60"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500 opacity-60"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500 opacity-60"></div>

        <div className="flex flex-col md:flex-row md:items-center gap-6 text-center md:text-left">
          <CalendarOff className="h-12 w-12 text-yellow-500 mx-auto md:mx-0 shrink-0" />

          <div className="flex-1">
            <div className="text-yellow-500 font-mono text-xs tracking-widest mb-2">
              AVISO
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-wider">
              {vacationNotice.title}
            </h2>
            <p className="text-yellow-500 font-mono text-lg md:text-xl mt-2 tracking-wide">
              {vacationNotice.range}
            </p>
            <p className="text-gray-300 mt-3 font-medium">
              {vacationNotice.detail}
            </p>
          </div>

          <a
            href={vacationNotice.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-6 py-3 font-bold tracking-wider hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shrink-0 text-center"
          >
            ESCRÍBENOS
          </a>
        </div>
      </div>
    </section>
  );
}
