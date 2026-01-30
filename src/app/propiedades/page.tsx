import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Filter } from "lucide-react";
import propertiesData from "@/data/properties.json";

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-beige-light">
      <Header variant="dark" />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-5 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-medium text-green-darker mb-4">Nuestras Propiedades</h1>
                    <p className="text-grey-normal text-lg max-w-2xl">
                        Explora nuestra colección exclusiva de alojamientos vacacionales seleccionados por su calidad, ubicación y diseño.
                    </p>
                </div>
                <Button className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filtrar propiedades
                </Button>
            </div>
            
            {/* Quick Filters (Optional) */}
            <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                {["Todos", "Tulum", "Playa del Carmen", "Cancún", "Villas", "Apartamentos"].map((filter, i) => (
                    <button 
                        key={i}
                        className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                            i === 0 
                            ? "bg-green-darker text-white" 
                            : "bg-[#F5F2EB] text-grey-darker hover:bg-[#e6e0d4]"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
      </div>

      <section className="py-24 bg-beige-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertiesData.map((property) => (
              <div key={property.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={`https://placehold.co/600x400/e0d9ca/grey?text=${property.title}`}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-grey-darker shadow-sm">
                    <Star className="h-3.5 w-3.5 text-gold-normal fill-gold-normal" />
                    {property.rating}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-medium text-white">
                     <MapPin className="h-3.5 w-3.5" />
                     {property.location}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-bold text-green-darker line-clamp-1 group-hover:text-gold-darker transition-colors">{property.title}</h3>
                  </div>
                  
                  <div className="text-sm text-grey-normal flex gap-3 mb-6">
                      <span>{property.guests} Huéspedes</span>
                      <span>•</span>
                      <span>{property.bedrooms} Hab.</span>
                      <span>•</span>
                      <span>Wifi & A/C</span>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-grey-normal uppercase tracking-wider font-bold mb-0.5">Desde</p>
                        <p className="text-green-darker font-bold text-xl">
                        ${property.price} <span className="text-grey-normal text-xs font-normal">/ noche</span>
                        </p>
                    </div>
                    <Button withArrow>Ver detalles</Button>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate data to fill grid for demo */}
            {propertiesData.map((property) => (
              <div key={`${property.id}-dup`} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={`https://placehold.co/600x400/e0d9ca/grey?text=${property.title}`}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-grey-darker shadow-sm">
                    <Star className="h-3.5 w-3.5 text-gold-normal fill-gold-normal" />
                    {property.rating}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-medium text-white">
                     <MapPin className="h-3.5 w-3.5" />
                     {property.location}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-bold text-green-darker line-clamp-1 group-hover:text-gold-darker transition-colors">{property.title}</h3>
                  </div>
                  
                  <div className="text-sm text-grey-normal flex gap-3 mb-6">
                      <span>{property.guests} Huéspedes</span>
                      <span>•</span>
                      <span>{property.bedrooms} Hab.</span>
                      <span>•</span>
                      <span>Wifi & A/C</span>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-grey-normal uppercase tracking-wider font-bold mb-0.5">Desde</p>
                        <p className="text-green-darker font-bold text-xl">
                        ${property.price} <span className="text-grey-normal text-xs font-normal">/ noche</span>
                        </p>
                    </div>
                    <Button withArrow>Ver detalles</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
