import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-charcoal text-white pt-24 lg:pt-32 pb-12 border-t-4 border-hi-vis-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-8 text-white" />
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Definindo o padrão para serviços de arboricultura seguros, eficientes e profissionais. Atendendo propriedades residenciais e comerciais com expertise certificada.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-8 text-gray-200">Serviços</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-hi-vis-orange transition-colors text-left">Remoção de Árvores</button>
              </li>
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-hi-vis-orange transition-colors text-left">Emergência de Tempestades</button>
              </li>
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-hi-vis-orange transition-colors text-left">Destoca</button>
              </li>
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-hi-vis-orange transition-colors text-left">Limpeza de Terreno</button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-8 text-gray-200">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-hi-vis-orange transition-colors text-left">Política de Privacidade</button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-hi-vis-orange transition-colors text-left">Termos de Uso</button>
              </li>
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-hi-vis-orange transition-colors text-left">Certificações de Segurança</button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Arbo Cut-Safe. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
             <span className="text-xs text-gray-600 font-bold px-3 py-1 bg-gray-800 rounded">LIC# ARB-99281-X</span>
          </div>
        </div>
      </div>
    </footer>
  );
};