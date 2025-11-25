import React, { useState } from 'react';
import { Logo } from './Logo';
import { Button } from './Button';
import { Icons } from './Icons';

interface HeaderProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const scrollToElement = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    onNavigate('home');
    setTimeout(scrollToElement, 100);
  };

  const handleHomeClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={handleHomeClick}>
            <Logo />
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-600 font-medium text-sm uppercase tracking-wide">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-deep-forest transition-colors flex items-center h-full">Serviços</a>
            <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="hover:text-deep-forest transition-colors flex items-center h-full">Como Funciona</a>
            <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="hover:text-deep-forest transition-colors flex items-center h-full">Projetos</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-deep-forest transition-colors flex items-center h-full">Sobre</a>
          </nav>
          
          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col items-end mr-2">
              <span className="text-xs text-gray-500 font-bold uppercase flex items-center gap-1"><Icons.Zap size={12} className="text-hi-vis-orange"/> Atendimento Nacional</span>
              <a href="https://wa.me/5537988426191" target="_blank" rel="noreferrer" className="text-deep-forest font-black text-lg leading-none hover:text-[#25D366] transition-colors flex items-center gap-1">
                <Icons.WhatsApp size={18} /> Falar com Especialista
              </a>
            </div>
            <Button variant="primary" onClick={(e) => handleNavClick(e, 'contact')}>
              Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <Icons.Close size={24} /> : <div className="space-y-1.5"><div className="w-6 h-0.5 bg-gray-600"></div><div className="w-6 h-0.5 bg-gray-600"></div><div className="w-6 h-0.5 bg-gray-600"></div></div>}
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block px-3 py-4 text-base font-bold text-gray-700 hover:bg-gray-50 rounded-lg">Serviços</a>
            <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="block px-3 py-4 text-base font-bold text-gray-700 hover:bg-gray-50 rounded-lg">Como Funciona</a>
            <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="block px-3 py-4 text-base font-bold text-gray-700 hover:bg-gray-50 rounded-lg">Galeria</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block px-3 py-4 text-base font-bold text-hi-vis-orange bg-orange-50 rounded-lg mt-2">Solicitar Orçamento</a>
          </div>
        </div>
      )}

      {/* Mobile Phone Bar */}
      <div className="lg:hidden bg-deep-forest text-white text-center py-2 text-sm font-bold shadow-md flex justify-center items-center gap-2">
         <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
         <a href="https://wa.me/5537988426191" className="flex items-center justify-center gap-2">
            WhatsApp Oficial
         </a>
      </div>
    </header>
  );
};