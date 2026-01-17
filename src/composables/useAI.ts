import { ref } from 'vue';
import type { ChatMessage } from '@/types';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Mengambil Key dari .env (Pastikan server sudah direstart setelah edit .env)
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// --- STATE GLOBAL ---
const isChatOpen = ref(false);
const isLoading = ref(false);
const messages = ref<ChatMessage[]>([
  { role: 'model', text: "Hello! I am Yahdiana's AI assistant. Ask me anything about her!" }
]);

export function useAI() {
  
  const sendMessage = async (userText: string, contextData: string) => {
    if (!userText.trim()) return;
    
    // 1. Cek Key
    if (!API_KEY) {
      isChatOpen.value = true;
      messages.value.push({ role: 'user', text: userText });
      messages.value.push({ role: 'model', text: "⚠️ Error: API Key is missing in .env file." });
      return;
    }

    // 2. Update UI
    isChatOpen.value = true;
    messages.value.push({ role: 'user', text: userText });
    isLoading.value = true;

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      
      // ✅ KITA GUNAKAN MODEL YANG TERBUKTI BERHASIL DI SYSTEM CHECK TADI
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = `
        You are a professional AI Assistant representing Yahdiana Amalia Hasibuan.
        Your goal is to answer questions about her skills, experience, and projects based strictly on the context below.
        
        CONTEXT (Yahdiana's CV Data):
        ${contextData}
        
        USER QUESTION:
        ${userText}
        
        INSTRUCTIONS:
        - Be polite, professional, and enthusiastic.
        - Keep answers concise (max 3-4 sentences).
        - If the answer is not in the context, say you don't know but she is adaptable.
        - Answer in the same language as the User Question.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      messages.value.push({ role: 'model', text: text });

    } catch (error: any) {
      console.error("Gemini Error:", error);
      let msg = "Connection Error.";
      if (error.message) msg = error.message;
      messages.value.push({ role: 'model', text: `⚠️ Maaf, terjadi kesalahan: ${msg}` });
    } finally {
      isLoading.value = false;
    }
  };

  return { isChatOpen, isLoading, messages, sendMessage };
}