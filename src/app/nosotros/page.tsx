import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Home, TrendingUp, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-beige-light">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero-bg.png"
            alt="About Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 px-4 text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-medium mb-6">
            Alquileres vacacionales fáciles
          </h1>
          <p className="text-xl text-white/90 font-medium">
            Agilizamos la gestión del alquiler vacacional para garantizar la tranquilidad y experiencias inolvidables a los huéspedes.
          </p>
        </div>
      </section>

      {/* ¿Quiénes somos? */}
      <section className="py-24 bg-[#FBF9F4]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-serif font-bold text-green-darker">¿Quiénes somos?</h2>
              <p className="text-grey-normal leading-relaxed">
                Somos una empresa especializada en gestión integral de alquileres vacacionales, creada para simplificar la vida de los propietarios y elevar la experiencia de los huéspedes.
              </p>
              <p className="text-grey-normal leading-relaxed">
                En KANAA combinamos estrategia inmobiliaria, tecnología y operación profesional para transformar propiedades en activos rentables, bien administrados y sin complicaciones. Nos enfocamos en cada detalle para que tú solo disfrutes los resultados.
              </p>
              <Button className="mt-4" withArrow>Conoce nuestros proyectos</Button>
            </div>
            <div className="w-full md:w-1/2 relative h-[500px]">
               {/* Collage Effect Mock */}
               <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-lg z-10">
                 <Image src="https://placehold.co/600x800/e6dfd1/grey?text=Interior" alt="Interior" fill className="object-cover" />
               </div>
               <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-lg z-20 border-8 border-[#FBF9F4]">
                 <Image src="https://placehold.co/600x600/green/white?text=Lifestyle" alt="Lifestyle" fill className="object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué estamos aquí? */}
      <section className="py-24 bg-green-darker text-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden">
                <Image src="https://placehold.co/800x600/1a2b1f/white?text=Why+Us" alt="Why Us" fill className="object-cover opacity-80" />
             </div>
             <div className="w-full md:w-1/2 space-y-6">
               <h2 className="text-4xl font-serif font-bold text-white">¿Por qué estamos aquí?</h2>
               <p className="text-white/80 leading-relaxed">
                 Creemos que una segunda residencia no debería convertirse en una carga operativa, sino en una fuente de tranquilidad, ingresos constantes y crecimiento a largo plazo.
               </p>
               <p className="text-white/80 leading-relaxed">
                 Por eso estamos redefiniendo la forma en que funcionan los alquileres vacacionales: con procesos claros, tecnología inteligente y un enfoque centrado en la experiencia del huésped y del propietario.
               </p>
               <Button className="mt-4" withArrow>Contáctanos</Button>
             </div>
           </div>
        </div>
      </section>

      {/* Nuestra experiencia en acción */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-green-darker mb-4">Nuestra experiencia en acción</h2>
            <p className="text-grey-normal max-w-2xl mx-auto">
              Acompañamos cada proyecto desde su origen hasta su operación, cuidando cada etapa del proceso para maximizar su valor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F9F9F9] p-8 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-gold-normal border border-gray-100">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-green-darker mb-3">Selección estratégica</h3>
              <p className="text-sm text-grey-normal leading-relaxed">
                Identificamos ubicaciones con alto potencial de rentabilidad y demanda turística sostenible.
              </p>
            </div>
            
            <div className="bg-[#F9F9F9] p-8 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-gold-normal border border-gray-100">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-green-darker mb-3">Desarrollo inteligente</h3>
              <p className="text-sm text-grey-normal leading-relaxed">
                Optimizamos propiedades funcionales y atractivas para el mercado vacacional.
              </p>
            </div>

            <div className="bg-[#F9F9F9] p-8 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-gold-normal border border-gray-100">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-green-darker mb-3">Gestión eficiente</h3>
              <p className="text-sm text-grey-normal leading-relaxed">
                Administramos con foco en ingresos, ocupación y experiencia del huésped.
              </p>
            </div>

            <div className="bg-[#F9F9F9] p-8 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-gold-normal border border-gray-100">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-green-darker mb-3">Oportunidades claras</h3>
              <p className="text-sm text-grey-normal leading-relaxed">
                Trabajamos con esquemas transparentes y decisiones basadas en datos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Únete a nuestro equipo */}
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
               <Button withArrow>Conoce nuestras vacantes</Button>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
