import React from 'react';
import { Icons } from './Icons';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5537988426191?text=Olá,%20gostaria%20de%20um%20orçamento%20da%20Arbo%20Cut-Safe"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 flex items-center gap-2 group animate-bounce-slow"
      aria-label="Falar no WhatsApp"
    >
      <Icons.WhatsApp size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
        Orçamento Rápido
      </span>
    </a>
  );
};