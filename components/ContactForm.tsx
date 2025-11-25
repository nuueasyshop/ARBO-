import React, { useState } from 'react';
import { Button } from './Button';
import { Icons } from './Icons';
import { analyzeJobRequest } from '../services/geminiService';
import { QuoteStatus } from '../types';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [status, setStatus] = useState<QuoteStatus>(QuoteStatus.IDLE);

  const handleAnalysis = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!jobDescription) return;

    setStatus(QuoteStatus.ANALYZING);
    const result = await analyzeJobRequest(jobDescription);
    setAiAnalysis(result);
    setStatus(QuoteStatus.SUCCESS);
  };

  const handleWhatsAppSubmit = () => {
    // Construct WhatsApp message
    const text = `*Olá, Arbo Cut-Safe!*%0A%0A*Nome:* ${name}%0A*Solicitação:* ${jobDescription}%0A%0A*Pré-análise IA:* ${aiAnalysis || 'Não realizada'}`;
    window.open(`https://wa.me/5537988426191?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-charcoal text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Info Side - Agora VERDE ESCURO (Deep Forest) */}
          <div className="lg:w-2/5 p-10 lg:p-12 bg-deep-forest text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-black uppercase mb-8">Fale Conosco</h2>
              <p className="text-white/90 mb-10 text-lg leading-relaxed">
                Prefere agilidade? Nosso atendimento é focado no WhatsApp para resolver sua emergência mais rápido.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Icons.WhatsApp className="mt-1 text-hi-vis-orange w-6 h-6" />
                  <div>
                    <h4 className="font-bold text-lg">WhatsApp Direto</h4>
                    <p className="text-lg opacity-90 hover:text-white cursor-pointer underline">Falar com Especialista</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icons.Clock className="mt-1 text-hi-vis-orange w-6 h-6" />
                  <div>
                    <h4 className="font-bold text-lg">Disponibilidade</h4>
                    <p className="text-lg">Seg-Sex: 7h - 18h<br/>Plantão WhatsApp 24h</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Abstract Pattern */}
            <Icons.Tree className="absolute -bottom-10 -right-10 w-64 h-64 text-white opacity-10" />
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 lg:p-12 bg-white text-gray-800">
            <div className="space-y-6">
              <div>
                 <h3 className="text-2xl font-black text-deep-forest uppercase mb-2">Orçamento Inteligente</h3>
                 <p className="text-gray-500 text-sm">Use nossa IA para descrever o problema, depois envie tudo pronto pelo WhatsApp.</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Seu Nome</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 p-4 focus:outline-none focus:border-deep-forest transition-colors rounded-lg" 
                    placeholder="Como podemos te chamar?" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">O que precisa ser feito?</label>
                <textarea 
                  rows={3} 
                  className="w-full bg-gray-50 border-2 border-gray-200 p-4 focus:outline-none focus:border-deep-forest transition-colors rounded-lg" 
                  placeholder="Ex: Árvore muito alta perto da fiação..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>
                
                {status !== QuoteStatus.SUCCESS && (
                    <button 
                        onClick={handleAnalysis}
                        disabled={status === QuoteStatus.ANALYZING || !jobDescription}
                        className="mt-2 text-sm text-hi-vis-orange font-bold flex items-center gap-2 hover:underline disabled:opacity-50"
                    >
                        <Icons.Zap size={14} /> 
                        {status === QuoteStatus.ANALYZING ? 'Analisando...' : 'Pedir ajuda da IA para descrever (Opcional)'}
                    </button>
                )}
              </div>

              {status === QuoteStatus.SUCCESS && (
                 <div className="bg-green-50 border-l-4 border-deep-forest p-6 animate-fade-in rounded-lg">
                    <div className="flex items-start">
                        <Icons.Check className="text-deep-forest mt-1 mr-4 flex-shrink-0" size={24} />
                        <div>
                            <h4 className="font-bold text-deep-forest text-sm uppercase">Sugestão Técnica da IA</h4>
                            <p className="text-gray-700 mt-2 text-sm">{aiAnalysis}</p>
                        </div>
                    </div>
                 </div>
              )}

              <Button 
                onClick={handleWhatsAppSubmit}
                variant="primary" 
                fullWidth 
                className="bg-[#25D366] hover:bg-[#128C7E] shadow-lg flex items-center gap-2 justify-center"
              >
                <Icons.WhatsApp size={20} />
                Continuar no WhatsApp
              </Button>
              <p className="text-center text-xs text-gray-400">Ao clicar, você será redirecionado para o WhatsApp com os dados preenchidos.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};