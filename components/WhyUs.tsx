import React, { useState } from 'react';
import { Icons } from './Icons';

export const WhyUs: React.FC = () => {
  return (
    <section id="safety" className="bg-deep-forest py-24 lg:py-32 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight mb-8">
              Segurança não é uma opção.<br/>É o nosso padrão.
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              A Arbo Cut-Safe opera sob rigorosos protocolos de segurança projetados para ambientes de alto risco. Cada operação começa com uma Análise Preliminar de Risco (APR) completa.
            </p>
            
            <ul className="space-y-6">
              {[
                "Protocolos de Segurança Rígidos",
                "Equipamentos Modernos e Inspecionados",
                "Arboristas Treinados (NR-35)",
                "Garantia de Local Limpo"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-hi-vis-orange flex items-center justify-center">
                    <Icons.Check size={18} className="text-white" />
                  </div>
                  <span className="font-bold text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 border-2 border-hi-vis-orange opacity-30 translate-x-4 translate-y-4 rounded-3xl"></div>
            <div className="relative bg-charcoal p-10 md:p-14 border-l-4 border-hi-vis-orange shadow-2xl rounded-3xl">
                <Icons.Helmet className="text-gray-500 mb-8" size={56} />
                <h3 className="text-2xl font-bold mb-6">A Promessa Cut-Safe</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                    "Tratamos sua propriedade com o mesmo respeito que tratamos nosso equipamento de segurança. Cortes precisos, quedas controladas e zero danos às estruturas vizinhas."
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};