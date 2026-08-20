// Aviso de cierre del taller. Para quitarlo de la web, poner `active: false`.
export const vacationNotice = {
  active: true,
  title: "CERRADO POR VACACIONES",
  range: "Del 24 de agosto al 1 de septiembre",
  detail:
    "El taller permanece cerrado por vacaciones. Escríbenos por WhatsApp y te atendemos a la vuelta.",
  short: "CERRADO del 24 de agosto al 1 de septiembre",
  // Fechas ISO para los datos estructurados de Google
  startDate: "2026-08-24",
  endDate: "2026-09-01",
  whatsappUrl:
    "https://wa.me/34614154659?text=Hola,%20quería%20pedir%20cita%20para%20mi%20moto%20cuando%20volváis%20de%20vacaciones",
} as const;
