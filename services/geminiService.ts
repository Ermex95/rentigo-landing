import { GoogleGenAI } from "@google/genai";

// Fix critico per l'errore di build su GitHub (TS2580)
declare const process: {
  env: {
    API_KEY?: string;
  }
};

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getRentigoAdvice = async (userQuery: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found. Chat functionality will be limited.");
    return "Mi dispiace, al momento non riesco a connettermi ai servizi AI (API Key mancante).";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `Sei 'Rentigo Bot', un assistente di vendita esperto per un software SaaS di gestione immobiliare (Property Management) chiamato Rentigo.
        
        Il tuo tono è professionale, rassicurante e conciso. Parla sempre in ITALIANO.
        
        Il software offre:
        1. Channel Manager (Sincronizzazione calendari Booking, Airbnb, VRBO).
        2. Check-in Online automatizzati (invio documenti alla questura, tassa di soggiorno).
        3. Dashboard finanziaria (statistiche entrate, occupazione).
        4. App mobile per gestire tutto in mobilità.

        Rispondi alle domande degli utenti su come gestire meglio i loro appartamenti. Se chiedono prezzi, inventa piani realistici (es. Piano Starter 9€/mese per immobile, Piano Pro 19€/mese).
        Sii breve.`,
      }
    });
    
    return response.text || "Non sono riuscito a generare una risposta. Riprova.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sembra esserci un problema di connessione. Riprova più tardi.";
  }
};
