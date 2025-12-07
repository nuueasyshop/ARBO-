import React, { useEffect } from 'react';

// Declaração para o TypeScript reconhecer o dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GoogleAds: React.FC = () => {
  // Usa a variável de ambiente OU usa o ID fixo diretamente se a variável falhar
  const adsId = import.meta?.env?.VITE_GOOGLE_ADS_ID || "AW-17782034508";

  useEffect(() => {
    if (!adsId) return;

    // Verificação de segurança: Se o script já existir no head, não adiciona novamente
    // Isso previne duplicação quando o usuário navega entre páginas
    const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${adsId}"]`);
    if (existingScript) return;

    // 1. Injeta o script externo do Google Tag Manager
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${adsId}`;
    script.async = true;
    document.head.appendChild(script);

    // 2. Inicializa o DataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Função gtag segura
    function gtag(...args: any[]){
      window.dataLayer.push(args);
    }
    
    // Configurações iniciais
    gtag('js', new Date());
    gtag('config', adsId);

    // Torna a função gtag acessível globalmente (útil para eventos de conversão futura)
    window.gtag = gtag;

  }, [adsId]);

  return null;
};