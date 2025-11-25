import React from 'react';
import { Icons } from './Icons';

const painPoints = [
  {
    icon: <Icons.Home size={32} />,
    question: "Sua árvore está inclinando para o lado do vizinho?",
    solution: "Evite riscos e dores de cabeça."
  },
  {
    icon: <Icons.Hammer size={32} />,
    question: "Vai iniciar uma obra e precisa remover uma árvore?",
    solution: "Faça isso com segurança total."
  },
  {
    icon: <Icons.Zap size={32} />,
    question: "Galhos perigosos próximos à rede elétrica?",
    solution: "Não coloque sua família em risco."
  },
  {
    icon: <Icons.Tree size={32} />,
    question: "Árvore gigante e não sabe por onde começar?",
    solution: "Deixe isso com especialistas."
  },
  {
    icon: <Icons.Storm size={32} />,
    question: "Viu galhos quebrados após a tempestade?",
    solution: "Podemos remover com segurança."
  }
];

export const PainPoints: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Padronizado */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-hi-vis-orange font-bold tracking-wider uppercase text-sm">Situações Comuns</span>
          <h2 className="text-deep-forest font-black text-3xl sm:text-4xl uppercase tracking-tight mt-2">
            Identificou Sua Situação?
          </h2>
          <div className="h-1 w-20 bg-hi-vis-orange mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 font-medium">
            Atuamos preventivamente nos cenários de maior risco residencial e comercial.
          </p>
        </div>

        {/* Layout Flex para centralizar 5 itens */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {painPoints.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-hi-vis-orange transition-all duration-300 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] flex flex-col items-start"
            >
              {/* Ícone Padronizado (Box) */}
              <div className="bg-white w-14 h-14 flex items-center justify-center rounded-2xl mb-6 shadow-sm group-hover:bg-deep-forest transition-colors duration-300">
                <div className="text-hi-vis-orange group-hover:text-white transition-colors duration-300">
                    {item.icon}
                </div>
              </div>
              
              <h3 className="font-bold text-deep-forest text-xl mb-3 leading-tight">
                {item.question}
              </h3>
              
              <div className="mt-auto pt-4 border-t border-gray-200 w-full">
                <p className="text-gray-600 font-medium text-sm flex items-center gap-2">
                  <Icons.Check className="text-hi-vis-orange w-4 h-4" />
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};