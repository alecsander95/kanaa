import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Shield, Sparkles, TrendingUp } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import { Star } from "lucide-react";

export default function PropertyManagementPage() {
  return (
    <div className="min-h-screen bg-beige-light">
      <Header />
      
      {/* Hero with Form Overlay */}
      <section className="relative min-h-[700px] flex items-center justify-center pt-32 pb-5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gestion-hero-bg.png"
            alt="Management Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="w-full md:w-1/2 text-white">
               <h1 className="text-4xl md:text-6xl font-medium mb-6">
                 Convierte tu propiedad en un activo rentable
               </h1>
               <p className="text-xl text-white/90 font-medium">
                 Encuentra tu próximo caso de descanso ideal.
               </p>
             </div>
             
             <div className="w-full md:w-1/2">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl max-w-md ml-auto">
                   <form className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-2">
                         <label className="text-xs font-bold text-white uppercase tracking-wider">Nombre(s)</label>
                         <Input placeholder="Tu nombre" className="bg-white/20 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30" />
                       </div>
                       <div className="space-y-2">
                         <label className="text-xs font-bold text-white uppercase tracking-wider">Apellidos</label>
                         <Input placeholder="Tus apellidos" className="bg-white/20 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30" />
                       </div>
                     </div>
                     
                     <div className="space-y-2">
                       <label className="text-xs font-bold text-white uppercase tracking-wider">Email*</label>
                       <Input type="email" placeholder="tu@email.com" className="bg-white/20 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30" />
                     </div>
                     
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-white uppercase tracking-wider">Número telefónico</label>
                        <Input type="tel" placeholder="+52 ..." className="bg-white/20 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30" />
                     </div>
                     
                     <div className="space-y-2">
                       <label className="text-xs font-bold text-white uppercase tracking-wider">¿Dónde se encuentra tu propiedad?</label>
                       <select className="flex h-11 w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 [&>option]:text-grey-darker">
                         <option>Selecciona una ubicación</option>
                         <option>Mérida, Yucatán</option>
                         <option>Costa Yucateca</option>
                         <option>Tulum</option>
                         <option>Otro</option>
                       </select>
                     </div>

                     <div className="space-y-2">
                        <label className="text-xs font-bold text-white uppercase tracking-wider">Nombre del anfitrión (opcional)</label>
                        <Input placeholder="Nombre del anfitrión" className="bg-white/20 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30" />
                     </div>

                     <Button variant="white" className="w-full mt-2" withArrow>Enviar</Button>
                   </form>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Gestión Inteligente (Grid Images) */}
      <section className="py-24 bg-[#FBF9F4]">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-4xl font-serif font-bold text-green-darker mb-4">Gestión inteligente de propiedades</h2>
             <p className="text-grey-normal text-sm md:text-base leading-relaxed">
               Ayudamos a propietarios a maximizar el potencial de sus inmuebles a través de un modelo de gestión profesional, transparente y respaldado por datos. Desde la estrategia de venta hasta la operación diaria, nos ocupamos de todo.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[600px]">
             {/* Left Large Image */}
             <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-full">
               <Image src="https://placehold.co/800x1000/e6dfd1/grey?text=Pool+Area" alt="Pool" fill className="object-cover" />
             </div>
             {/* Right Column Images */}
             <div className="flex flex-col gap-6 h-full">
               <div className="relative flex-1 rounded-2xl overflow-hidden h-[300px] md:h-auto">
                 <Image src="https://placehold.co/800x600/green/white?text=Exterior" alt="Exterior" fill className="object-cover" />
               </div>
               <div className="relative flex-1 rounded-2xl overflow-hidden h-[300px] md:h-auto">
                 <Image src="https://placehold.co/800x600/1a2b1f/white?text=Interior" alt="Interior" fill className="object-cover" />
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Pensado para quienes buscan tranquilidad */}
      <section className="py-0 bg-green-darker text-white">
         <div className="flex flex-col md:flex-row">
           <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
             <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
               Pensado para quienes buscan tranquilidad y resultados
             </h2>
             <p className="text-white/80 mb-8 leading-relaxed">
               Ideal para propietarios que quieren maximizar ingresos sin encargarse de la gestión diaria de su propiedad.
             </p>
             <div>
               <Button variant="white" withArrow>Conoce más</Button>
             </div>
           </div>
           <div className="w-full md:w-1/2 relative min-h-[500px]">
             <Image src="https://placehold.co/1000x1000/e6dfd1/grey?text=Lifestyle" alt="Tranquility" fill className="object-cover" />
           </div>
         </div>
      </section>

      {/* Gestión de alquileres simplificada */}
      <section className="py-24 bg-[#FBF9F4]">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="w-full md:w-1/2 relative">
               <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl z-10 w-4/5">
                 <Image src="https://placehold.co/800x800/e6dfd1/grey?text=Detail" alt="Detail" fill className="object-cover" />
               </div>
               <div className="absolute top-1/2 right-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-lg z-20 border-8 border-[#FBF9F4] -translate-y-1/3 translate-x-12">
                 <Image src="https://placehold.co/600x600/green/white?text=Room" alt="Room" fill className="object-cover" />
               </div>
             </div>
             
             <div className="w-full md:w-1/2 md:pl-12 mt-12 md:mt-0">
               <h2 className="text-4xl font-serif font-bold text-green-darker mb-6">
                 Gestión de alquileres vacacionales simplificada
               </h2>
               <p className="text-grey-normal mb-8 leading-relaxed">
                 Agiliza la gestión del alquiler vacacional para su tranquilidad y una mayor rentabilidad.
               </p>
               
               <ul className="space-y-6">
                 <li className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-green-darker text-white flex items-center justify-center shrink-0">
                     <TrendingUp className="h-5 w-5" />
                   </div>
                   <div>
                     <h4 className="font-bold text-grey-darker mb-1">Soporte digital y presencial</h4>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-green-darker text-white flex items-center justify-center shrink-0">
                     <Shield className="h-5 w-5" />
                   </div>
                   <div>
                     <h4 className="font-bold text-grey-darker mb-1">Seguro de alquiler integral</h4>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-green-darker text-white flex items-center justify-center shrink-0">
                     <Sparkles className="h-5 w-5" />
                   </div>
                   <div>
                     <h4 className="font-bold text-grey-darker mb-1">Servicios de limpieza profesional</h4>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-green-darker text-white flex items-center justify-center shrink-0">
                     <CheckCircle className="h-5 w-5" />
                   </div>
                   <div>
                     <h4 className="font-bold text-grey-darker mb-1">Contratos de mantenimiento gratuitos</h4>
                   </div>
                 </li>
               </ul>
             </div>
           </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-24 border-t border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 text-center">
           <div>
             <span className="text-4xl font-serif font-bold text-gold-normal block">+100</span>
             <span className="text-sm text-grey-darker font-bold uppercase tracking-wider">Propiedades gestionadas</span>
           </div>
           <div>
             <span className="text-4xl font-serif font-bold text-gold-normal block">+2</span>
             <span className="text-sm text-grey-darker font-bold uppercase tracking-wider">Años de experiencia</span>
           </div>
        </div>
      </section>

      {/* Testimonials (Reused from Home but corrected style) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-grey-darker mb-4">
              Experiencias que nos respaldan
            </h2>
            <p className="text-grey-normal">Huéspedes y propietarios comparten cómo KANAA transformó su forma de viajar y gestionar sus propiedades.</p>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
            {testimonialsData.map((item) => (
              <div key={item.id} className="min-w-[300px] md:min-w-[400px] bg-[#233A2A] p-8 rounded-2xl shadow-sm snap-center flex flex-col items-center text-center">
                 <div className="h-16 w-16 rounded-full bg-white/10 relative overflow-hidden mb-4 border-2 border-gold-normal">
                    <Image src={`https://placehold.co/100x100/grey/white?text=${item.name.charAt(0)}`} alt={item.name} fill className="object-cover" />
                 </div>
                 <h4 className="font-bold text-white text-lg">{item.name}</h4>
                 <p className="text-xs text-gold-normal uppercase tracking-wider mb-6">{item.role}</p>
                <p className="text-white/80 italic mb-6 leading-relaxed">"{item.content}"</p>
                <div className="flex gap-1 mt-auto">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-gold-normal fill-gold-normal" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-green-darker text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="max-w-2xl">
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Convierte tu propiedad en un activo rentable</h2>
             <p className="text-white/80">
               Nos encargamos de la gestión completa de tu inversión para que tú obtengas ingresos, tranquilidad y tiempo para lo que más disfrutas.
             </p>
           </div>
           <Button variant="white" size="lg" className="px-8 text-lg" withArrow>
             Habla con un asesor
           </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
