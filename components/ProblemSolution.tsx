import React from 'react';
import { Icons } from './Icons';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-hi-vis-orange font-bold tracking-wider uppercase text-sm">Não corra riscos desnecessários</span>
          <h2 className="text-deep-forest font-black text-3xl sm:text-4xl mt-2">
            O "Barato" que Pode Custar sua Paz (e seu Telhado)
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Arboricultura não é jardinagem. É engenharia de risco. Veja a diferença entre contratar um amador e a Arbo Cut-Safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* O Jeito Arriscado */}
          <div className="bg-white p-8 rounded-3xl border-2 border-red-100 shadow-sm relative overflow-hidden group hover:border-red-200 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Icons.Warning size={120} className="text-red-500" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-100 rounded-full text-red-600">
                  <Icons.Close size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">O "Faz-Tudo" Amador</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icons.Close className="text-red-400 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-600"><strong>Risco de Acidentes:</strong> Sem EPIs e sem treinamento, um acidente no seu quintal pode virar uma dor de cabeça enorme.</p>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.Close className="text-red-400 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-600"><strong>Danos ao Imóvel:</strong> Galhos caindo sem controle sobre telhas, calhas e fiação elétrica por falta de técnica.</p>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.Close className="text-red-400 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-600"><strong>Bagunça Eterna:</strong> Deixam tocos feios no chão e restos de madeira para você limpar depois.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* O Jeito Cut-Safe */}
          <div className="bg-deep-forest p-8 rounded-3xl border-2 border-deep-forest shadow-xl relative overflow-hidden text-white transform md:-translate-y-4">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Icons.Shield size={120} className="text-white" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-hi-vis-orange rounded-full text-white">
                  <Icons.Check size={24} />
                </div>
                <h3 className="text-xl font-bold">O Padrão Arbo Cut-Safe</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icons.Check className="text-hi-vis-orange mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-100"><strong>Controle de Risco:</strong> Uso rigoroso de EPIs e cumprimento das normas de segurança para evitar qualquer incidente.</p>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.Check className="text-hi-vis-orange mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-100"><strong>Cirurgia de Precisão:</strong> Usamos cordas e equipamentos para descer peças suavemente, sem tocar na sua casa.</p>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.Check className="text-hi-vis-orange mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-100"><strong>Terreno Impecável:</strong> Trituramos os galhos e removemos o toco. Seu jardim fica mais limpo do que quando chegamos.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};