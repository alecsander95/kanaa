import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-[#1a2b1f] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <Link href="/" className="flex items-center">
              <Logo 
                variant="white" 
                className="h-12 w-auto" 
                aria-label="KANAA - Comfort · Calmness · Peace"
              />
            </Link>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
            {/* Column 1 */}
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-white/90">KANNA</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/nosotros" className="hover:text-gold-normal transition-colors">Sobre nosotros</Link></li>
                <li><Link href="/nosotros#equipo" className="hover:text-gold-normal transition-colors">Nuestro equipo</Link></li>
                <li><Link href="/nosotros#historia" className="hover:text-gold-normal transition-colors">Experiencia & Historia</Link></li>
              </ul>
            </div>
            
            {/* Column 2 */}
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-white/90">Propiedades</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/propiedades" className="hover:text-gold-normal transition-colors">Listado de propiedades</Link></li>
                <li><Link href="/propiedades?filter=featured" className="hover:text-gold-normal transition-colors">Destacadas</Link></li>
                <li><Link href="/blog" className="hover:text-gold-normal transition-colors">Guías y tips de viaje</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-white/90">Property Management</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/gestion-de-propiedades" className="hover:text-gold-normal transition-colors">Únete como propietario</Link></li>
                <li><Link href="/gestion-de-propiedades" className="hover:text-gold-normal transition-colors">Property Management</Link></li>
                <li><Link href="/calculadora-de-ingresos" className="hover:text-gold-normal transition-colors">Calculadora de ingresos</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-white/90">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/legal/privacidad" className="hover:text-gold-normal transition-colors">Política de privacidad</Link></li>
                <li><Link href="/legal/terminos" className="hover:text-gold-normal transition-colors">Términos y condiciones</Link></li>
                <li><Link href="/legal/cookies" className="hover:text-gold-normal transition-colors">Política de cookies</Link></li>
              </ul>
            </div>
          </div>
          
           {/* CTA Button in Footer */}
           <div>
              <Button variant="white" withArrow>
                Contáctanos
              </Button>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} – KANAA. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
