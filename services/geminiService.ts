import { GoogleGenAI } from "@google/genai";

export const analyzeJobRequest = async (details: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Modo Demo: Chave de API não configurada. Normalmente, nossa IA analisaria sua solicitação para estimar a urgência e equipamentos. Por favor, envie o formulário para entrarmos em contato.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
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