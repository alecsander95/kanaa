import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const robotoSerif = localFont({
  src: "./fonts/RobotoSerif-Variable.ttf",
  variable: "--font-roboto-serif",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "KANAA | Alquileres vacacionales fáciles",
  description: "Siéntete como en casa, en cualquier lugar. Gestión de propiedades y alquileres vacacionales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${robotoSerif.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
