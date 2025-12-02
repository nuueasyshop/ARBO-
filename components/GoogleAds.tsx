import React, { useEffect } from 'react';

export const GoogleAds: React.FC = () => {
  const adsId = import.meta.env.VITE_GOOGLE_ADS_ID;

  useEffect(() => {
    if (!adsId) return;

    // Injeta o script do Google Tag Manager apenas se o ID existir
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${adsId}`;
    script.async = true;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${adsId}');
    `;
    document.head.appendChild(inlineScript);

    return () => {
      // Limpeza opcional (geralmente tags do google persistem)
    };
  }, [adsId]);

  return null; // Este componente não renderiza nada visualmente
};