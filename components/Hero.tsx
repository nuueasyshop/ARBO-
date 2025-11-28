import React, { useState } from 'react';
import { Button } from './Button';
import { Icons } from './Icons';

// --- CONFIGURAÇÃO DE IMAGEM ---
// O site buscará automaticamente a imagem "hero-bg.jpg" na pasta "public".
// Se ela não existir, usará a imagem de fallback da internet.
const LOCAL_HERO_IMAGE = "/hero-bg.jpg";
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?q=80&w=1600&auto=format&fit=crop"; 

export const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState(LOCAL_HERO_IMAGE);

  const handleImageError = () => {
    // Se a imagem local não for encontrada, usa o fallback
    if (heroImage === LOCAL_HERO_IMAGE) {
      setHeroImage(FALLBACK_IMAGE);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setHeroImage(imageUrl);
    }
  };

  return (
    <section className="relative bg-gray-100 overflow-hidden group">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-charcoal text-xs font-bold uppercase tracking-wider mb-6 border border-gray-200 shadow-sm">
                <span className="w-2 h-2 bg-hi-vis-orange rounded-full mr-2"></span>
                Especializada e Certificada
              </div>
              <h1 className="text-4xl tracking-tight font-black text-deep-forest sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Arboricultura</span>{' '}
                <span className="block text-hi-vis-orange xl:inline">Profissional</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-medium">
                Executamos remoções complexas de árvores, podas e avaliações de risco com protocolos de segurança rigorosos. Não apenas cortamos árvores; protegemos seu patrimônio.
              </p>
              <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                 <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                    Solicitar Avaliação
                 </Button>
                 <Button variant="secondary" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                    Ver Serviços
                 </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500 font-semibold sm:justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                    <Icons.Shield className="text-deep-forest" size={20} />
                    <span>Proteção Patrimonial</span>
                </div>
                <div className="flex items-center gap-2">
                    <Icons.Check className="text-deep-forest" size={20} />
                    <span>Técnicas NR-35</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-charcoal relative">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90 transition-all duration-500"
          src={heroImage}
          onError={handleImageError}
          alt="Arborista trabalhando em altura com segurança"
        />
        <div className="absolute inset-0 bg-deep-forest mix-blend-multiply opacity-40 pointer-events-none"></div>

        {/* Botão de Upload de Imagem (Apenas para visualização/teste local) */}
        <div className="absolute bottom-4 right-4 z-20 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
            <input 
                type="file" 
                id="hero-image-upload" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageUpload}
            />
            <button 
                onClick={() => document.getElementById('hero-image-upload')?.click()}
                className="bg-white/80 hover:bg-white text-charcoal p-2 rounded-full shadow-lg backdrop-blur-sm transition-all flex items-center gap-2 text-xs font-bold uppercase"
                title="Alterar imagem (Preview)"
            >
                <Icons.Camera size={16} />
                <span className="hidden md:inline">Testar Imagem</span>
            </button>
        </div>
      </div>
    </section>
  );
};