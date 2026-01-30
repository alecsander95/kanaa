"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Propiedades", href: "/propiedades" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Gestión de propiedades", href: "/gestion-de-propiedades" },
  { name: "Calculadora de ingresos", href: "/calculadora-de-ingresos" },
];

import { Logo } from "@/components/ui/logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo 
            variant={scrolled ? 'color' : 'white'} 
            className="h-12 w-auto" 
            aria-label="KANAA - Comfort · Calmness · Peace"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold-normal",
                pathname === item.href 
                  ? "text-gold-normal" 
                  : (scrolled ? "text-grey-dark" : "text-white")
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            size="sm"
            variant={scrolled ? "beige" : "white"}
            className="rounded-full font-medium transition-all shadow-sm"
            withArrow
          >
            Reserva ahora
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("lg:hidden p-2", scrolled ? "text-grey-darker" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-base font-medium py-2 border-b border-gray-50",
                pathname === item.href ? "text-green-normal" : "text-grey-dark"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="secondary" className="w-full justify-center" withArrow>
            Reserva ahora
          </Button>
        </div>
      )}
    </header>
  );
}
