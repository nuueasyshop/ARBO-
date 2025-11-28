import React, { useState } from 'react';
import { Icons } from './Icons';

// --- CONFIGURAÇÃO DA GALERIA ---
// O site buscará: /gallery-1.jpg, /gallery-2.jpg, etc na pasta public.
const INITIAL_IMAGES = [
  { src: "/gallery-1.jpg", fallback: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80" }, // Destaque
  { src: "/gallery-2.jpg", fallback: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?w=600&q=80" },
  { src: "/gallery-3.jpg", fallback: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&q=80" },
  { src: "/gallery-4.jpg", fallback: "https://images.unsplash.com/photo-1605117882932-f9e32b03ef3c?w=600&q=80" }
];

export const ProjectGallery: React.FC = () => {
  const [images, setImages] = useState(INITIAL_IMAGES.map(img => img.src));

  const handleImageError = (index: number) => {
    const newImages = [...images];
    // Se der erro ao carregar a imagem local, troca pelo fallback online
    if (newImages[index] !== INITIAL_IMAGES[index].fallback) {
      newImages[index] = INITIAL_IMAGES[index].fallback;
      setImages(newImages);
    }
  };

  const handleImageUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newImages = [...images];
      newImages[index] = imageUrl;
      setImages(newImages);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-charcoal text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-hi-vis-orange font-bold tracking-wider uppercase text-sm">Portfólio Recente</span>
            <h2 className="text-white font-black text-3xl sm:text-4xl mt-2">
              Resultados Reais
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-right">
            Veja a complexidade e a limpeza das nossas operações recentes.
            <br/><span className="text-xs opacity-50">(Fotos devem estar em /public/gallery-*.jpg)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className={`relative group rounded-2xl overflow-hidden aspect-[4/3] ${index === 0 ? 'md:col-span-2 md:row-span-2 md:aspect-auto' : ''}`}>
              <img 
                src={img} 
                onError={() => handleImageError(index)}
                alt={`Projeto Arbo Cut-Safe ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-bold text-white">Operação #{index + 1}</span>
              </div>
              
              {/* Upload Button for Demo/Testing */}
              <label className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full cursor-pointer backdrop-blur-md transition-colors opacity-0 group-hover:opacity-100 z-20">
                <Icons.Camera size={20} className="text-white" />
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={(e) => handleImageUpload(index, e)} 
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};