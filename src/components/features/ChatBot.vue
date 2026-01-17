<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import { MessageSquare, X, Send, Bot, User } from 'lucide-vue-next';
import { useAI } from '@/composables/useAI';
import { marked } from 'marked'; // Pastikan sudah npm install marked

const props = defineProps<{
  context: string // Menerima data profile sebagai string context
}>();

const { isChatOpen, isLoading, messages, sendMessage } = useAI();
const userInput = ref('');
const chatContainer = ref<HTMLElement | null>(null);

// Auto-scroll ke bawah saat ada pesan baru
watch(messages, async () => {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
}, { deep: true });

const handleSend = () => {
  if (!userInput.value.trim() || isLoading.value) return;
  
  // Kirim pesan + context profile
  sendMessage(userInput.value, props.context);
  userInput.value = '';
};

// Fungsi helper render markdown aman
const renderMarkdown = (text: string) => {
  return marked.parse(text);
};
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
    
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-95 opacity-0 translate-y-4"
      enter-to-class="transform scale-100 opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100 translate-y-0"
      leave-to-class="transform scale-95 opacity-0 translate-y-4"
    >
      <div v-if="isChatOpen" class="bg-white dark:bg-dark-surface w-[90vw] sm:w-96 h-[500px] rounded-2xl shadow-2xl border border-slate-200 dark:border-dark-border flex flex-col overflow-hidden mb-4">
        
        <div class="bg-gradient-to-r from-primary-600 to-purple-600 p-4 flex justify-between items-center text-white shadow-md">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Bot class="w-5 h-5" />
            </div>
            <div>
              <h3 class="font-bold text-sm">Yahdiana AI</h3>
              <div class="text-xs text-white/80 flex items-center gap-1">
                <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
              </div>
            </div>
          </div>
          <button @click="isChatOpen = false" class="hover:bg-white/20 p-1 rounded transition">
            <X class="w-5 h-5" />
          </button>
        </div>

        <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-[#121212]">
          <div v-for="(msg, i) in messages" :key="i" class="flex gap-2" :class="msg.role === 'user' ? 'flex-row-reverse' : ''">
            
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white"
                 :class="msg.role === 'user' ? 'bg-slate-400' : 'bg-primary-500'">
               <User v-if="msg.role === 'user'" class="w-4 h-4" />
               <Bot v-else class="w-4 h-4" />
            </div>

            <div class="max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm"
                 :class="msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-tr-none' 
                    : 'bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-200 rounded-tl-none'">
              <div v-if="msg.role === 'model'" v-html="renderMarkdown(msg.text)" class="prose prose-sm dark:prose-invert"></div>
              <div v-else>{{ msg.text }}</div>
            </div>
          </div>

          <div v-if="isLoading" class="flex gap-2">
             <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"><Bot class="w-4 h-4 text-primary-500"/></div>
             <div class="bg-white dark:bg-dark-surface px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
             </div>
          </div>
        </div>

        <div class="p-3 bg-white dark:bg-dark-surface border-t border-slate-100 dark:border-dark-border">
          <form @submit.prevent="handleSend" class="flex gap-2">
            <input 
              v-model="userInput" 
              type="text" 
              placeholder="Ask about skills..." 
              class="flex-1 bg-slate-100 dark:bg-slate-900 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 dark:text-white"
              :disabled="isLoading"
            />
            <button type="submit" :disabled="!userInput.trim() || isLoading" 
              class="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-xl disabled:opacity-50 transition-colors">
              <Send class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </transition>

    <button @click="isChatOpen = !isChatOpen" class="group flex items-center justify-center w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-primary-500/40 transition-all active:scale-95">
      <X v-if="isChatOpen" class="w-6 h-6" />
      <MessageSquare v-else class="w-6 h-6 group-hover:scale-110 transition-transform" />
    </button>
  </div>
</template>