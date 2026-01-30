import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassPanel } from "@/components/ui/glass-panel";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-beige-light">
      <Header />
      
      <section className="relative min-h-[600px] flex items-center justify-center pt-32 pb-5">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080/e6dfd1/white?text=Contact+Background"
            alt="Contact Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-4xl md:text-6xl font-medium mb-6">
                Hablemos de tu proyecto
              </h1>
              <p className="text-xl text-white/90 font-medium">
                Déjanos tus datos y uno de nuestros asesores se pondrá en contacto contigo para entender tu necesidad y acompañarte en el siguiente paso.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white uppercase tracking-wider">Email*</label>
                      <Input type="email" placeholder="tu@email.com" className="bg-white/20 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30" />
                    </div>
                    
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-white uppercase tracking-wider">Whatsapp</label>
                       <Input type="tel" placeholder="+52 ..." className="bg-white/20 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase tracking-wider">Motivo de contacto</label>
                    <select className="flex h-11 w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 [&>option]:text-grey-darker">
                      <option>Información general</option>
                      <option>Reservas</option>
                      <option>Property Management</option>
                      <option>Otros</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase tracking-wider">Cuéntanos brevemente qué necesitas</label>
                    <textarea 
                      className="flex min-h-[100px] w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                      placeholder="Escribe aquí..."
                    />
                  </div>

                  <Button variant="white" className="w-auto px-8" withArrow>Enviar</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-[#F5F2EB]">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
             <div className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image src="https://placehold.co/800x1000/e6dfd1/grey?text=Our+Team" alt="Team" fill className="object-cover" />
             </div>
             <div className="w-full md:w-1/2">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-darker mb-6">Únete a nuestro equipo</h2>
               <p className="text-grey-normal mb-6 text-lg leading-relaxed">
                 En KANAA buscamos personas que compartan nuestra visión: trabajar con compromiso, claridad y enfoque a largo plazo.
               </p>
               <p className="text-grey-normal mb-8 text-lg leading-relaxed">
                 Si te interesa formar parte de un equipo que construye proyectos con propósito, toma decisiones basadas en datos y apuesta por la excelencia operativa, nos encantará conocerte.
               </p>
               <Button className="bg-white text-green-darker border border-gray-200 hover:bg-gray-50 rounded-full shadow-sm" withArrow>Conoce nuestras vacantes</Button>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
