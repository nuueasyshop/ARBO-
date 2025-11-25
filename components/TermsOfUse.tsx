import React from 'react';
import { Button } from './Button';

interface TermsOfUseProps {
  onBack: () => void;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button variant="outline" onClick={onBack} className="mb-8 border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-deep-forest">
          ← Voltar para Início
        </Button>
        
        <div className="bg-white p-10 shadow-sm border-t-4 border-hi-vis-orange rounded-3xl">
          <h1 className="text-3xl font-black text-deep-forest mb-2">Termos de Uso</h1>
          <p className="text-sm text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
            <p>
              Bem-vindo à <strong>Arbo Cut-Safe</strong>. Ao acessar nosso site e solicitar nossos serviços, você concorda com os seguintes termos e condições.
            </p>

            <h3 className="text-xl font-bold text-charcoal mt-6">1. Serviços</h3>
            <p>
              A Arbo Cut-Safe presta serviços de arboricultura, poda, remoção de árvores e destoca. Todas as informações fornecidas no site são para fins informativos e comerciais.
            </p>

            <h3 className="text-xl font-bold text-charcoal mt-6">2. Estimativas e Orçamentos</h3>
            <p>
              As estimativas fornecidas através do nosso formulário online ou via análise de IA são <strong>preliminares</strong> e baseadas nas informações fornecidas pelo usuário.
            </p>
            <p>
              O valor final e a execução do serviço estão sujeitos a uma <strong>visita técnica presencial</strong> obrigatória para avaliação de segurança, acesso e complexidade real do trabalho. A Arbo Cut-Safe se reserva o direito de recusar serviços que apresentem riscos não mitigáveis.
            </p>

            <h3 className="text-xl font-bold text-charcoal mt-6">3. Responsabilidades do Usuário</h3>
            <p>
              Ao solicitar um orçamento, você garante que:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>É o proprietário legal da área onde a árvore está localizada ou possui autorização formal para solicitar o serviço;</li>
              <li>As informações fornecidas sobre o estado da árvore e do terreno são verdadeiras.</li>
            </ul>

            <h3 className="text-xl font-bold text-charcoal mt-6">4. Propriedade Intelectual</h3>
            <p>
              Todo o conteúdo deste site, incluindo logotipos, textos, gráficos e imagens, é propriedade da Arbo Cut-Safe e está protegido pelas leis de direitos autorais.
            </p>

            <h3 className="text-xl font-bold text-charcoal mt-6">5. Limitação de Responsabilidade</h3>
            <p>
              Embora nos esforcemos para manter as informações do site precisas, não garantimos que o conteúdo esteja livre de erros. A Arbo Cut-Safe não se responsabiliza por danos diretos ou indiretos decorrentes do uso deste site.
            </p>

            <h3 className="text-xl font-bold text-charcoal mt-6">6. Foro</h3>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};