import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AJ Motorbikes - Taller de Motos en Calahorra | Reparación y Mantenimiento",
  description:
    "Taller especializado en mantenimiento y reparación de motocicletas en Calahorra, La Rioja. Más de 20 años de experiencia. Taller multimarca, recambios, neumáticos y tasación. ¡Pide cita previa!",
  keywords: [
    "taller motos Calahorra",
    "reparación motos La Rioja",
    "mantenimiento motocicletas",
    "taller multimarca",
    "recambios motos Calahorra",
    "neumáticos moto",
    "tasación motos",
    "mecánica motos",
    "revisión ITV moto",
    "AJ Motorbikes",
    "motos ocasión Calahorra",
    "electricidad motos",
    "taller motos cerca de mi",
  ],
  authors: [{ name: "AJ Motorbikes" }],
  creator: "AJ Motorbikes",
  publisher: "AJ Motorbikes",
  metadataBase: new URL("https://www.ajmotorbikes.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.ajmotorbikes.com",
    title: "AJ Motorbikes - Taller de Motos en Calahorra | Reparación y Mantenimiento",
    description:
      "Taller especializado en mantenimiento y reparación de motocicletas en Calahorra, La Rioja. Más de 20 años de experiencia. Taller multimarca, recambios, neumáticos y tasación.",
    siteName: "AJ Motorbikes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AJ Motorbikes - Taller de Motos en Calahorra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Motorbikes - Taller de Motos en Calahorra",
    description:
      "Taller especializado en mantenimiento y reparación de motocicletas en Calahorra, La Rioja. Más de 20 años de experiencia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
        <NextTopLoader
          height={4}
          color="hsl(from oklch(0.795 0.184 86.047) h s l)"
          showSpinner={false}
          speed={200}
          easing="ease"
        />
      </body>
    </html>
  );
}
