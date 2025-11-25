import React from 'react';
import { Icons } from './Icons';
import { Button } from './Button';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button variant="outline" onClick={onBack} className="mb-8 border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-deep-forest">
          ← Voltar para Início
        </Button>
        
        <div className="bg-white p-10 shadow-sm border-t-4 border-deep-forest rounded-3xl">
          <h1 className="text-3xl font-black text-deep-forest mb-2">Política de Privacidade</h1>
          <p className="text-sm text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
            <p>
              A <strong>Arbo Cut-Safe</strong> valoriza a privacidade de seus visitantes e clientes. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao utilizar nosso site e serviços de estimativa online.
            </p>

            <h3 className="text-xl font-bold text-charcoal mt-6">1. Coleta de Informações</h3>
            <p>
              Coletamos informações que você nos fornece voluntariamente ao preencher nosso formulário de orçamento, incluindo:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Nome completo;</li>
              <li>Número de telefone;</li>
              <li>Descrição do serviço solicitado;</li>
              <li>Imagens (caso enviadas para avaliação).</li>
            </ul>

            <h3 className="text-xl font-bold text-charcoal mt-6">2. Uso das Informações</h3>
            <p>
              Utilizamos seus dados exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fornecer estimativas de orçamento preliminares (incluindo o uso de IA para análise técnica);</li>
              <li>Entrar em contato para agendar visitas técnicas;</li>
              <li>Melhorar nossos serviços e atendimento ao cliente.</li>
            </ul>
            <p className="font-bold">Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.</p>

            <h3 className="text-xl font-bold text-charcoal mt-6">3. Cookies e Tecnologias de Rastreamento</h3>
            <p>
              Utilizamos cookies para melhorar a experiência do usuário e para fins de publicidade (Google Ads). Isso nos permite mostrar anúncios relevantes para usuários que já visitaram nosso site. Você pode desativar os cookies nas configurações do seu navegador.
            </p>

            <h3 className="text-xl font-bold text-charcoal mt-6">4. Segurança de Dados</h3>
            <p>
              Implementamos medidas de segurança técnica e organizacional para proteger seus dados contra acesso não autorizado, alteração ou destruição. Nosso site utiliza criptografia SSL (Secure Socket Layer) para garantir a transmissão segura de dados.
            </p>

            <h3 className="text-xl font-bold text-charcoal mt-6">5. Seus Direitos</h3>
            <p>
              Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais armazenados em nossos sistemas. Para exercer esses direitos, entre em contato conosco através do telefone ou e-mail fornecidos no site.
            </p>

            <h3 className="text-xl font-bold text-charcoal mt-6">6. Contato</h3>
            <p>
              Se tiver dúvidas sobre esta política, entre em contato pelo telefone <strong>0800-ARBO-SAFE</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};