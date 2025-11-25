import React from 'react';
import { Icons } from './Icons';

const steps = [
  {
    number: "01",
    title: "Contato & Foto",
    description: "Você nos envia uma foto ou descrição pelo WhatsApp. Nossa equipe já faz uma pré-análise da situação.",
    icon: <Icons.WhatsApp size={24} />
  },
  {
    number: "02",
    title: "Orçamento Seguro",
    description: "Agendamos uma visita técnica rápida (se necessário) e te passamos um valor fechado, sem surpresas.",
    icon: <Icons.Checklist size={24} />
  },
  {
    number: "03",
    title: "Execução Cirúrgica",
    description: "Nossa equipe chega uniformizada, isola a área e executa o corte com equipamentos de ponta.",
    icon: <Icons.Axe size={24} />
  },
  {
    number: "04",
    title: "Limpeza Total",
    description: "Processamos os resíduos na hora. Você só percebe que estivemos lá porque a árvore perigosa sumiu.",
    icon: <Icons.Leaf size={24} />
  }
];

export const StepProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-deep-forest font-black text-3xl sm:text-4xl uppercase">
            Como Resolvemos Seu Problema
          </h2>
          <p className="mt-4 text-gray-600">Simples, transparente e sem dor de cabeça.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-lg flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-deep-forest text-white rounded-full flex items-center justify-center font-black text-xl mb-4 shadow-md relative">
                  {step.number}
                  <div className="absolute -top-2 -right-2 bg-hi-vis-orange rounded-full p-1.5 border-2 border-white">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl text-charcoal mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};