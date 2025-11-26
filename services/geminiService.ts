import { GoogleGenAI } from "@google/genai";

export const analyzeJobRequest = async (details: string): Promise<string> => {
  // Use import.meta.env for Vite environments (Vercel)
  // The system prompt usually mandates process.env, but in a pure Vite frontend build, 
  // process.env is not available at runtime. import.meta.env is the standard.
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiKey) {
    return "Modo Demo: Chave de API não configurada (VITE_API_KEY). Normalmente, nossa IA analisaria sua solicitação para estimar a urgência e equipamentos. Por favor, envie o formulário para entrarmos em contato.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    const systemPrompt = `Você é um consultor arborista especialista da 'Arbo Cut-Safe'. 
    Analise a descrição do trabalho do usuário. 
    Forneça uma avaliação breve e profissional (máx 3 frases) em PORTUGUÊS DO BRASIL focando em:
    1. Urgência (Baixa/Média/Emergência)
    2. Equipamento Sugerido (Caminhão cesto, escaladores, guindaste, destocador)
    3. Considerações de segurança.
    
    Tom: Profissional, tranquilizador, segurança em primeiro lugar.
    Não forneça valores em dinheiro.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: details,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || "Obrigado. Recebemos seus detalhes e entraremos em contato em breve.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Obrigado pelo seu contato. Nossa equipe revisará sua mensagem e responderá imediatamente.";
  }
};