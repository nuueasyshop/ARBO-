import React from 'react';
import { Icons } from './Icons';

interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  fallback: string;
}

const testimonialsData: TestimonialProps[] = [
  {
    id: 1,
    name: "Roberto Mendes",
    role: "Síndico Profissional, Cond. Jardins",
    content: "Como síndico, minha prioridade é a prevenção de riscos. A Arbo foi a única empresa que apresentou toda a documentação de segurança e EPIs antes mesmo de eu pedir. A equipe trabalhou uniformizada e isolou a área perfeitamente.",
    image: "/avatar-1.jpg",
    fallback: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Clara Bittencourt",
    role: "Proprietária Residencial",
    content: "Tinha um pinheiro enorme inclinado perigosamente sobre o telhado da garagem. Eu estava apavorada que caísse na próxima chuva. Eles vieram com equipamentos profissionais e removeram tudo 'fatiado', sem deixar cair um galho sequer nas telhas. Um alívio total.",
    image: "/avatar-2.jpg",
    fallback: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Eng. Marcos Viana",
    role: "Gerente de Obras",
    content: "Precisávamos limpar um terreno para fundação com urgência. A equipe da Arbo não só removeu as árvores como fez a destoca completa das raízes em tempo recorde. O terreno ficou limpo e nivelado, pronto para minhas máquinas entrarem.",
    image: "/avatar-3.jpg",
    fallback: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];

export const Testimonials: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackUrl: string) => {
    e.currentTarget.src = fallbackUrl;
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-deep-forest font-black text-3xl sm:text-4xl uppercase tracking-tight">
            Aprovação de Quem Confia
          </h2>
          <div className="h-1 w-20 bg-hi-vis-orange mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Conheça as experiências de quem já escolheu a segurança e profissionalismo da Arbo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonialsData.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-3xl shadow-sm border-t-4 border-transparent hover:border-hi-vis-orange transition-all duration-300 group">
              <div className="mb-6">
                <Icons.Quote className="w-10 h-10 text-gray-200 group-hover:text-hi-vis-orange transition-colors duration-300" />
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed italic relative z-10">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={item.image} 
                  onError={(e) => handleImageError(e, item.fallback)}
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 border-2 border-gray-100"
                />
                <div>
                  <h4 className="font-bold text-deep-forest text-sm uppercase">{item.name}</h4>
                  <span className="text-xs text-gray-500 font-medium">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center justify-center font-bold text-xl text-gray-400">Google Reviews ⭐ 4.9</div>
             <div className="flex items-center justify-center font-bold text-xl text-gray-400">Atendimento 24h</div>
             <div className="flex items-center justify-center font-bold text-xl text-gray-400">Técnicos Certificados</div>
             <div className="flex items-center justify-center font-bold text-xl text-gray-400">NR-35 Expert</div>
        </div>
      </div>
    </section>
  );
};