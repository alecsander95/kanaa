"use client";

import * as React from "react";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion } from "@/components/ui/accordion";
import { 
  Check, 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  ShieldCheck, 
  LayoutGrid, 
  PieChart, 
  BarChart3, 
  Users, 
  Star,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

export default function CalculatorPage() {
  const [showResults, setShowResults] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const faqItems = [
    {
      id: "1",
      question: "¿Cómo funciona nuestro servicio?",
      answer: "Nuestro servicio está diseñado para ser simple y eficiente. Solo necesitas registrarte, dejar lo que necesitas y nosotros nos encargamos del resto."
    },
    {
      id: "2",
      question: "¿Cuánto tiempo tarda en completarse una solicitud?",
      answer: "Dependiendo de la complejidad, la mayoría de las solicitudes se procesan en menos de 24 horas."
    },
    {
      id: "3",
      question: "¿Puedo modificar o cancelar mi reservación?",
      answer: "Sí, puedes realizar cambios o cancelaciones según nuestras políticas flexibles hasta 48 horas antes."
    },
    {
      id: "4",
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos todas las tarjetas de crédito principales, transferencias bancarias y pagos digitales."
    },
    {
      id: "5",
      question: "¿Cómo contacto al soporte si tengo un problema?",
      answer: "Nuestro equipo de soporte está disponible 24/7 a través de chat en vivo, correo electrónico o teléfono."
    }
  ];

  return (
    <div className="min-h-screen bg-beige-light font-sans">
      <Header />

      {/* Hero Calculator */}
      <section className="relative min-h-[800px] flex items-center justify-center pt-32 pb-5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/calculadora-hero-bg.png"
            alt="Calculator Background"
            fill
            className="object-cover"
          />
          <div className="hidden absolute inset-0 bg-green-darker/60" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
             <div className="w-full md:w-1/2 text-white">
                <h1 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">
                  Descubre cuánto puede generar tu propiedad
                </h1>
                <p className="text-xl text-white/90 font-medium mb-8">
                  Calcula el potencial de ingresos de tu inmueble en minutos y recibe una estimación anual personalizada, clara y transparente.
                </p>
             </div>

             <div className="w-full md:w-1/2">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl">
                  <form onSubmit={handleCalculate} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-white uppercase tracking-wider">Dirección de propiedad</label>
                        <Input 
                          placeholder="Ej. Calle 10 Norte, Tulum..." 
                          className="bg-white/20 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30 h-12" 
                          required 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-white uppercase tracking-wider">Capacidad de huéspedes</label>
                            <select className="flex h-12 w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 [&>option]:text-grey-darker">
                              <option>1-2</option>
                              <option>3-4</option>
                              <option>5-6</option>
                              <option>7+</option>
                            </select>
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-white uppercase tracking-wider">Tipo de propiedad</label>
                            <select className="flex h-12 w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 [&>option]:text-grey-darker">
                              <option>Apartamento</option>
                              <option>Casa</option>
                              <option>Villa</option>
                              <option>Estudio</option>
                            </select>
                         </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-white uppercase tracking-wider">No. de Habitaciones</label>
                            <select className="flex h-12 w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 [&>option]:text-grey-darker">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4+</option>
                            </select>
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-white uppercase tracking-wider">No. de Baños</label>
                            <select className="flex h-12 w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 [&>option]:text-grey-darker">
                              <option>1</option>
                              <option>2</option>
                              <option>3+</option>
                            </select>
                         </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-white uppercase tracking-wider">Años de propiedad</label>
                        <select className="flex h-12 w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 [&>option]:text-grey-darker">
                           <option>Menos de 1 año</option>
                           <option>1-5 años</option>
                           <option>5-10 años</option>
                           <option>Más de 10 años</option>
                        </select>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4" 
                      disabled={loading}
                      withArrow
                    >
                      {loading ? "Calculando..." : "Calcular ahora"}
                    </Button>
                  </form>
                </div>
             </div>
          </div>

          {/* Results Card (Conditional) */}
          {showResults && (
            <div className="max-w-4xl mx-auto mt-12 bg-white rounded-3xl p-8 md:p-10 shadow-xl animate-in fade-in slide-in-from-bottom-4 border border-gray-100 relative z-20">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-serif font-bold text-green-darker mb-2">Estimación de Ingresos</h3>
                <p className="text-grey-normal text-lg">Basado en propiedades similares en tu zona con gestión premium</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-[#FBF9F4] p-8 rounded-2xl text-center border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-green-normal">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-bold text-grey-normal uppercase tracking-wider mb-2">Ingreso Anual</p>
                  <p className="text-3xl font-bold text-green-darker">$45k - $52k</p>
                  <p className="text-xs text-grey-normal mt-1">USD / Año</p>
                </div>
                <div className="bg-[#FBF9F4] p-8 rounded-2xl text-center border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-gold-normal">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-bold text-grey-normal uppercase tracking-wider mb-2">Ocupación</p>
                  <p className="text-3xl font-bold text-gold-darker">78%</p>
                  <p className="text-xs text-grey-normal mt-1">Promedio Anual</p>
                </div>
                <div className="bg-[#FBF9F4] p-8 rounded-2xl text-center border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-grey-darker">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-bold text-grey-normal uppercase tracking-wider mb-2">Tarifa Diaria</p>
                  <p className="text-3xl font-bold text-grey-darker">$210</p>
                  <p className="text-xs text-grey-normal mt-1">USD / Noche</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Por qué elegir KANNA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 relative h-[800px] rounded-2xl overflow-hidden">
                 <Image src="https://placehold.co/800x1200/e6dfd1/grey?text=Interior" alt="Interior Kanna" fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2 space-y-12">
                 <div className="mb-8">
                   <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-darker mb-4">
                     ¿Por qué elegir KANNA para gestionar tu propiedad?
                   </h2>
                   <p className="text-grey-normal text-lg">
                     Porque cuidamos tu propiedad, optimizamos tus ingresos y nos encargamos de todo para que disfrutes tranquilidad y resultados.
                   </p>
                 </div>

                 <div className="space-y-8">
                    <div className="flex gap-6">
                       <div className="w-14 h-14 rounded-full bg-[#FBF9F4] flex items-center justify-center shrink-0 text-gold-normal">
                          <Calendar className="w-6 h-6" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-green-darker mb-2">Reservas y canales</h3>
                          <p className="text-grey-normal">Plan estratégico, mayor ocupación.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-14 h-14 rounded-full bg-[#FBF9F4] flex items-center justify-center shrink-0 text-gold-normal">
                          <ShieldCheck className="w-6 h-6" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-green-darker mb-2">Cuidado de la propiedad</h3>
                          <p className="text-grey-normal">Inmuebles siempre en óptimas condiciones.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-14 h-14 rounded-full bg-[#FBF9F4] flex items-center justify-center shrink-0 text-gold-normal">
                          <LayoutGrid className="w-6 h-6" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-green-darker mb-2">Gestión Integral</h3>
                          <p className="text-grey-normal">Nos encargamos de todo.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-14 h-14 rounded-full bg-[#FBF9F4] flex items-center justify-center shrink-0 text-gold-normal">
                          <TrendingUp className="w-6 h-6" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-green-darker mb-2">Optimización de ingresos</h3>
                          <p className="text-grey-normal">Precios inteligentes, mejores resultados.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Optimización de ingresos */}
      <section className="py-24 bg-[#FBF9F4]">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 space-y-8 order-2 md:order-1">
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-darker">
                   Optimización de ingresos
                 </h2>
                 <p className="text-grey-normal text-lg leading-relaxed">
                   Asegúrate de obtener la mayor rentabilidad posible. Utilizamos estrategias integrales y tecnología de vanguardia para optimizar el potencial de ingresos de tu propiedad.
                 </p>
                 
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-green-darker text-white flex items-center justify-center">
                          <PieChart className="w-5 h-5" />
                       </div>
                       <span className="text-green-darker font-medium">Análisis de datos</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-green-darker text-white flex items-center justify-center">
                          <DollarSign className="w-5 h-5" />
                       </div>
                       <span className="text-green-darker font-medium">Herramientas de fijación de precios robustas</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-green-darker text-white flex items-center justify-center">
                          <BarChart3 className="w-5 h-5" />
                       </div>
                       <span className="text-green-darker font-medium">Predicciones de tendencias</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-green-darker text-white flex items-center justify-center">
                          <LayoutGrid className="w-5 h-5" />
                       </div>
                       <span className="text-green-darker font-medium">Informes transparentes</span>
                    </div>
                 </div>
              </div>
              <div className="w-full md:w-1/2 relative h-[600px] order-1 md:order-2">
                 {/* Collage Effect */}
                 <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-lg z-10">
                   <Image src="https://placehold.co/600x800/e6dfd1/grey?text=Bedroom" alt="Bedroom" fill className="object-cover" />
                 </div>
                 <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-lg z-20 border-8 border-[#FBF9F4]">
                   <Image src="https://placehold.co/600x600/1a3c29/white?text=Living" alt="Living" fill className="object-cover" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Gestión de reservas (Dark) */}
      <section className="py-24 bg-green-darker text-white">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden">
                  <Image src="https://placehold.co/800x600/e6dfd1/grey?text=Resort+Vibe" alt="Resort" fill className="object-cover" />
               </div>
               <div className="w-full md:w-1/2 space-y-8">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold">Gestión de reservas</h2>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Gestionamos las reservas hechas por usuarios, manteniendo su propiedad en manos fiables. Tenemos el criterio, un don para garantizar una experiencia de cumplimiento sin fisuras para usted como para los alojados.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                           <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg mb-1">Gestión de listados</h4>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                           <Users className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg mb-1">Marketing y visibilidad</h4>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                           <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg mb-1">Control de reservas</h4>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                           <Check className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg mb-1">Asistencia 24/7/365 para huéspedes</h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            <div className="flex items-center gap-4">
               <span className="text-4xl font-serif font-bold text-gold-normal">+100</span>
               <span className="text-grey-dark uppercase tracking-wide font-medium">Propiedades gestionadas</span>
            </div>
            <div className="flex items-center gap-4">
               <span className="text-4xl font-serif font-bold text-gold-normal">+2</span>
               <span className="text-grey-dark uppercase tracking-wide font-medium">Años de experiencia</span>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-darker mb-4">Experiencias que nos respaldan</h2>
               <p className="text-grey-normal text-lg">Propietarios y viajeros comparten cómo KANNA transformó su forma de viajar y gestionar sus propiedades.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-green-darker p-8 rounded-2xl text-white relative">
                     <div className="absolute top-8 right-8">
                        <div className="flex gap-1 text-gold-normal">
                           {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                        </div>
                     </div>
                     <div className="flex flex-col items-center text-center mt-4">
                        <div className="w-16 h-16 rounded-full bg-white/20 overflow-hidden mb-4 relative">
                           <Image src={`https://placehold.co/100x100/grey/white?text=${i}`} alt="User" fill className="object-cover" />
                        </div>
                        <h4 className="font-bold text-lg">Alexander Montes de Oca</h4>
                        <span className="text-xs uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full mt-2 mb-6">Viajero</span>
                        <p className="text-white/80 text-sm italic leading-relaxed">
                           "KANNA me ha permitido viajar con la confianza de que siempre llegaré a un lugar impecable y acogedor. Su atención al detalle es insuperable."
                        </p>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
               <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-green-darker hover:text-white transition-colors">
                  <ChevronLeft className="w-5 h-5" />
               </button>
               <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-green-darker hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
               </button>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#FBF9F4]">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-16">
               <div className="w-full md:w-1/3">
                  <h2 className="text-4xl font-serif font-bold text-green-darker mb-6">Preguntas frecuentes</h2>
                  <p className="text-grey-normal text-lg mb-8">
                     Consulta las preguntas más frecuentes y obtén información rápida y clara sobre cómo trabajamos.
                  </p>
               </div>
               <div className="w-full md:w-2/3">
                  <Accordion items={faqItems} />
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-green-darker relative overflow-hidden">
         <div className="absolute inset-0 z-0">
             <Image src="https://placehold.co/1920x600/1a3c29/white?text=Footer+BG" alt="BG" fill className="object-cover opacity-20" />
         </div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="w-full md:w-1/2 text-white">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                     Conoce el potencial real de tu propiedad
                  </h2>
                  <p className="text-xl text-white/80 mb-8">
                     Ingresa algunos datos clave y obtén una estimación de ingresos anual basada en el tipo de inmueble, su capacidad y su ubicación.
                  </p>
               </div>
               <div className="w-full md:w-1/2">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl">
                     <form className="space-y-4">
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-white uppercase tracking-wider">Dirección de propiedad</label>
                           <Input className="bg-white/20 border-white/10 text-white placeholder:text-white/50 h-12" placeholder="Dirección..." />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-white uppercase tracking-wider">Cantidad de huéspedes</label>
                              <select className="flex h-12 w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white focus-visible:outline-none [&>option]:text-grey-darker">
                                 <option>1-4</option>
                                 <option>5-8</option>
                              </select>
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-white uppercase tracking-wider">Tipo de propiedad</label>
                              <select className="flex h-12 w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white focus-visible:outline-none [&>option]:text-grey-darker">
                                 <option>Casa</option>
                                 <option>Depto</option>
                              </select>
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-white uppercase tracking-wider">No. de habitaciones</label>
                              <select className="flex h-12 w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white focus-visible:outline-none [&>option]:text-grey-darker">
                                 <option>1</option>
                                 <option>2</option>
                              </select>
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-white uppercase tracking-wider">No. de baños</label>
                              <select className="flex h-12 w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white focus-visible:outline-none [&>option]:text-grey-darker">
                                 <option>1</option>
                                 <option>2</option>
                              </select>
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-white uppercase tracking-wider">Años de propiedad</label>
                           <select className="flex h-12 w-full rounded-md border border-white/10 bg-white/20 px-3 py-2 text-sm text-white focus-visible:outline-none [&>option]:text-grey-darker">
                              <option>1-5</option>
                              <option>5+</option>
                           </select>
                        </div>
                        <Button variant="white" className="w-full h-12 mt-2">Calcular precio</Button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
