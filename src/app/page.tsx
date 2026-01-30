import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Input } from "@/components/ui/input";
import { Star, Users, Home as HomeIcon, MapPin, Hash } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-beige-light font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.png" 
            alt="Kanna Hero" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="container relative z-10 px-4 h-full flex flex-col justify-center">
          <div className="max-w-4xl mx-auto text-center text-white mb-20">
            <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
              Siéntete como en casa, <br/> en cualquier lugar.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white/90 font-serif italic">
              Encuentra tu próxima casa de descanso ideal.
            </p>
          </div>
          
          <div className="bg-white rounded-[10px] md:rounded-full p-2 max-w-5xl mx-auto w-full shadow-lg flex flex-col md:flex-row gap-2">
              <div className="flex-1 px-6 py-2 border-r border-gray-200 last:border-0 relative">
                <label className="text-[10px] font-bold text-green-darker uppercase tracking-wider mb-1 block">Destino</label>
                <Input placeholder="¿A dónde quieres ir?" className="bg-transparent border-0 p-0 h-6 text-green-darker placeholder:text-gray-400 focus-visible:ring-0 text-sm" />
              </div>
              <div className="flex-1 px-6 py-2 border-r border-gray-200 last:border-0 relative">
                 <label className="text-[10px] font-bold text-green-darker uppercase tracking-wider mb-1 block">Llegada</label>
                 <Input type="date" className="bg-transparent border-0 p-0 h-6 text-green-darker placeholder:text-gray-400 focus-visible:ring-0 text-sm" />
              </div>
              <div className="flex-1 px-6 py-2 border-r border-gray-200 last:border-0 relative">
                 <label className="text-[10px] font-bold text-green-darker uppercase tracking-wider mb-1 block">Salida</label>
                 <Input type="date" className="bg-transparent border-0 p-0 h-6 text-green-darker placeholder:text-gray-400 focus-visible:ring-0 text-sm" />
              </div>
              <div className="flex-1 px-6 py-2 relative">
                 <label className="text-[10px] font-bold text-green-darker uppercase tracking-wider mb-1 block">Huéspedes</label>
                 <Input placeholder="¿Cuántos?" className="bg-transparent border-0 p-0 h-6 text-green-darker placeholder:text-gray-400 focus-visible:ring-0 text-sm" />
              </div>
              <div className="p-1">
                <Button className="w-12 h-12 rounded-full bg-green-darker hover:bg-green-normal text-white flex items-center justify-center p-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </Button>
              </div>
          </div>
        </div>
      </section>

      {/* Alojamientos Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 gap-2 text-center">
             <h2 className="text-4xl font-serif font-medium text-green-darker">Conoce nuestros alojamientos</h2>
             <p className="text-grey-normal max-w-xl text-lg mb-4">
               Todos nuestros alojamientos están destinado a que pases una estadía de relajación
             </p>
             <Button variant="outline" className="rounded-full border border-gray-200 text-sm h-10 px-6 hover:bg-gray-50 text-grey-darker" withArrow>Ver todos los alojamientos</Button>
          </div>
          
          {/* Mock Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="group cursor-pointer">
                 <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                   <Image src={`https://placehold.co/600x600/e6dfd1/grey?text=Property+${i}`} alt="Property" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-darker">
                     $1,250 MXN
                   </div>
                 </div>
                 <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-green-darker mb-1">Casa en Montaña</h3>
                        <p className="text-grey-normal text-xs mb-2">$6,700 por 5 noches</p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-grey-dark bg-gray-100 px-2 py-1 rounded-full">
                        <span className="flex items-center gap-1">★ 4.98</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 text-xs text-grey-normal mt-1 border-t border-gray-100 pt-2">
                   <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 4</span>
                   <span className="flex items-center gap-1"><HomeIcon className="w-3 h-3" /> 2</span>
                   <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 1</span>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>
      
      {/* Stats / Features Section */}
      <section className="bg-beige-light">
         <div className="container mx-auto px-4 py-24">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="relative h-[800px] w-full">
                <div className="absolute left-0 top-0 w-[90%] h-full rounded-2xl overflow-hidden">
                   <Image src="https://placehold.co/800x1200/e6dfd1/grey?text=Bathtub" alt="Relax" fill className="object-cover" />
                </div>
             </div>
             <div className="space-y-8 flex flex-col justify-center h-full">
                <div className="relative h-[300px] w-full rounded-2xl overflow-hidden mb-8">
                   <Image src="https://placehold.co/800x600/e6dfd1/grey?text=Patio" alt="Patio" fill className="object-cover" />
                </div>
                <div>
                   <h2 className="text-4xl md:text-5xl font-serif font-medium text-green-darker leading-tight mb-6">
                     Más que hospedaje, <br/> una mejor forma de descansar
                   </h2>
                   <p className="text-grey-dark text-lg leading-relaxed mb-8">
                     En KANNA disfrutas espacios cómodos, tranquilos y pensados para que te relajes desde el primer momento.
                   </p>
                   <Button variant="outline" className="rounded-full border border-green-darker text-green-darker hover:bg-green-darker hover:text-white transition-colors" withArrow>
                     Ver alojamientos
                   </Button>
                </div>
             </div>
           </div>
         </div>
         
         {/* Stats Bar */}
         <div className="border-t border-green-darker/10 bg-[#F5F2EB] py-12">
            <div className="container mx-auto px-4">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                 <div>
                   <div className="text-3xl font-serif font-bold text-[#C5A028] mb-1">+1,500</div>
                   <div className="text-xs font-bold text-green-darker uppercase tracking-wider">Huéspedes felices</div>
                 </div>
                 <div>
                   <div className="text-3xl font-serif font-bold text-[#C5A028] mb-1">+2</div>
                   <div className="text-xs font-bold text-green-darker uppercase tracking-wider">Años de experiencia</div>
                 </div>
                 <div>
                   <div className="text-3xl font-serif font-bold text-[#C5A028] mb-1">+1,200</div>
                   <div className="text-xs font-bold text-green-darker uppercase tracking-wider">Estancias realizadas</div>
                 </div>
                 <div>
                   <div className="text-3xl font-serif font-bold text-[#C5A028] mb-1 flex items-center justify-center gap-1">
                      4.92 <Star className="w-5 h-5 fill-current" />
                   </div>
                   <div className="text-xs font-bold text-green-darker uppercase tracking-wider">Valoración promedio</div>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Property Management CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-green-darker rounded-[2rem] p-12 md:p-16 relative overflow-hidden">
             {/* Background Pattern/Image Overlay */}
             <div className="absolute inset-0 z-0 opacity-10">
                <Image src="https://placehold.co/1200x600/white/black?text=Pattern" alt="Pattern" fill className="object-cover" />
             </div>
             
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                   <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
                     ¿Tienes una propiedad? <br/> Déjala en manos expertas
                   </h2>
                   <p className="text-white/80 text-lg mb-8 max-w-lg">
                     Nos encargamos de todo: desde la promoción hasta la limpieza, para que tú solo disfrutes de los ingresos.
                   </p>
                   <Button className="bg-white text-green-darker hover:bg-gray-100 rounded-full px-8 py-6 text-base" withArrow>
                     Quiero saber más
                   </Button>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                   <Image src="https://placehold.co/800x600/e6dfd1/grey?text=Property+Management" alt="Property Management" fill className="object-cover" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-[#F5F2EB]">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-4xl md:text-5xl font-serif font-medium text-green-darker mb-6">
             Calcula tus ingresos potenciales
           </h2>
           <p className="text-grey-normal text-lg max-w-2xl mx-auto mb-12">
             Descubre cuánto podrías ganar rentando tu propiedad con nosotros. Nuestra calculadora te da un estimado basado en datos reales del mercado.
           </p>
           
           <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="text-left space-y-2">
                    <label className="text-xs font-bold text-green-darker uppercase tracking-wider">Ubicación</label>
                    <div className="relative">
                       <Input placeholder="Ej. Tulum, Quintana Roo" className="h-12 border-gray-200 rounded-lg" />
                       <MapPin className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
                    </div>
                 </div>
                 <div className="text-left space-y-2">
                    <label className="text-xs font-bold text-green-darker uppercase tracking-wider">Tipo de Propiedad</label>
                    <div className="relative">
                       <Input placeholder="Ej. Casa, Departamento" className="h-12 border-gray-200 rounded-lg" />
                       <HomeIcon className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
                    </div>
                 </div>
                 <div className="text-left space-y-2">
                    <label className="text-xs font-bold text-green-darker uppercase tracking-wider">Habitaciones</label>
                    <div className="relative">
                       <Input placeholder="Número de habitaciones" type="number" className="h-12 border-gray-200 rounded-lg" />
                       <Hash className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
                    </div>
                 </div>
              </div>
              
              <div className="mt-12 p-6 bg-beige-light rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                 <div className="text-left">
                    <span className="text-sm text-grey-normal block mb-1">Ingreso mensual estimado</span>
                    <span className="text-4xl font-serif font-bold text-green-darker">$25,000 - $35,000 MXN</span>
                 </div>
                 <Button className="bg-green-darker hover:bg-green-normal text-white rounded-full px-8 py-6" withArrow>
                    Ver desglose completo
                 </Button>
              </div>
           </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-green-darker mb-4">Lo que dicen de nosotros</h2>
              <p className="text-grey-normal text-lg max-w-2xl mx-auto">
                La experiencia de nuestros huéspedes y propietarios es nuestra mejor carta de presentación.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#F5F2EB] p-8 rounded-2xl relative">
                   <div className="flex items-center gap-1 text-[#C5A028] mb-6">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                   </div>
                   <p className="text-grey-dark text-lg italic mb-8 leading-relaxed">
                     "Una experiencia increíble. La casa estaba impecable y la atención del equipo de KANNA fue excepcional desde el primer momento."
                   </p>
                   <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                         <Image src={`https://placehold.co/100x100/e6dfd1/grey?text=User+${i}`} alt="User" fill className="object-cover" />
                      </div>
                      <div>
                         <div className="font-bold text-green-darker">María González</div>
                         <div className="text-xs text-grey-normal uppercase tracking-wider">Huésped en Tulum</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Blog / Articles Section */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-4xl font-serif font-medium text-green-darker mb-4">Inspiración para tu próximo viaje</h2>
                  <p className="text-grey-normal text-lg max-w-xl">
                    Descubre destinos, consejos y guías para hacer de tu estancia una experiencia inolvidable.
                  </p>
               </div>
               <Button variant="outline" className="rounded-full border border-gray-200 text-sm h-10 px-6 hover:bg-gray-50 text-grey-darker hidden md:flex" withArrow>
                 Ver todos los artículos
               </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                       <Image src={`https://placehold.co/800x450/e6dfd1/grey?text=Article+${i}`} alt="Article" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="text-xs font-bold text-green-darker uppercase tracking-wider mb-2">Destinos</div>
                    <h3 className="text-2xl font-serif font-medium text-green-darker mb-3 group-hover:text-green-normal transition-colors">
                      Los 5 mejores cenotes para visitar en Yucatán
                    </h3>
                    <p className="text-grey-normal mb-4 line-clamp-2">
                      Sumérgete en la belleza natural de la península y descubre estos tesoros escondidos que no te puedes perder.
                    </p>
                    <div className="text-sm font-bold text-green-darker underline decoration-2 underline-offset-4 group-hover:text-green-normal transition-colors">Leer artículo</div>
                 </div>
               ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
               <Button variant="outline" className="rounded-full border border-gray-200 text-sm h-10 px-6 hover:bg-gray-50 text-grey-darker w-full" withArrow>
                 Ver todos los artículos
               </Button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
