"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Propiedades", href: "/propiedades" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Gestión de propiedades", href: "/gestion-de-propiedades" },
  { name: "Calculadora de ingresos", href: "/calculadora-de-ingresos" },
];

import { Logo } from "@/components/ui/logo";

export function Header({ variant = 'default' }: { variant?: 'default' | 'dark' }) {
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
      style={{
        background: variant === 'dark' ? "white" : "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.045) 77.08%, rgba(255, 255, 255, 0) 100%)",
        backgroundBlendMode: variant === 'dark' ? "normal" : "overlay, normal",
        backdropFilter: variant === 'dark' ? "none" : "blur(22.39px)",
        WebkitBackdropFilter: variant === 'dark' ? "none" : "blur(22.39px)"
      }}
      className={cn(
        "fixed top-[2.125rem] left-1/2 -translate-x-1/2 z-50 flex w-[96%] items-center justify-between rounded-xl border border-white/10 shadow-lg px-12 py-5 transition-all duration-300",
        scrolled || variant === 'dark' ? "bg-white/90 border-gray-100 shadow-sm" : ""
      )}
    >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo 
            variant={scrolled || variant === 'dark' ? 'color' : 'white'} 
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
                "text-sm transition-colors hover:text-[#e3dfd4] hover:mix-blend-normal",
                variant === 'dark'
                    ? "text-[#4c4d4c] font-medium"
                    : pathname === item.href 
                        ? "text-white mix-blend-difference font-bold" 
                        : "text-white mix-blend-difference font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button withArrow>
            Reserva ahora
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("lg:hidden p-2", scrolled || variant === 'dark' ? "text-grey-darker" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

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
          <Button className="w-full justify-center" withArrow>
            Reserva ahora
          </Button>
        </div>
      )}
    </header>
  );
}
