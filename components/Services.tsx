import React from 'react';
import { Icons } from './Icons';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Remoção de Árvores",
    description: "Desmontagem segura de árvores perigosas em espaços confinados usando cordas e guindastes.",
    icon: <Icons.Axe className="w-8 h-8 text-hi-vis-orange" />,
  },
  {
    title: "Poda de Precisão",
    description: "Poda estrutural para melhorar a saúde da árvore, estética e segurança de áreas.",
    icon: <Icons.Tree className="w-8 h-8 text-hi-vis-orange" />,
  },
  {
    title: "Destoca de Raízes",
    description: "Remoção completa de tocos e gerenciamento do sistema radicular para terrenos limpos.",
    icon: <Icons.Truck className="w-8 h-8 text-hi-vis-orange" />,
  },
  {
    title: "Avaliação de Risco",
    description: "Laudos técnicos de arboristas certificados para permissões e avaliação de perigos.",
    icon: <Icons.Checklist className="w-8 h-8 text-hi-vis-orange" />,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-deep-forest font-black text-3xl sm:text-4xl uppercase tracking-tight">
            Capacidades Operacionais
          </h2>
          <div className="h-1 w-20 bg-hi-vis-orange mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Equipamentos especializados e expertise para qualquer desafio arborícola.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 border border-gray-100 shadow-sm hover:border-deep-forest transition-colors duration-300 group rounded-3xl"
            >
              <div className="bg-white w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-deep-forest transition-colors duration-300 shadow-sm">
                <div className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-deep-forest mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};