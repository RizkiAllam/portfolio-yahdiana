<script setup lang="ts">
import { Sparkles, Database, ShieldCheck } from 'lucide-vue-next';
import { profile } from '@/data/profile';
import { useAI } from '@/composables/useAI';

// Mengambil state global agar bisa membuka chat window
const { isChatOpen } = useAI();
</script>

<template>
  <section id="hero" class="pt-32 pb-20 px-4 relative overflow-hidden">
    <div class="absolute top-20 right-0 -z-10 w-96 h-96 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    
    <div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      
      <div class="flex-1 text-center md:text-left">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-sm font-semibold mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          {{ profile.availability }}
        </div>
        
        <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
          Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-600">{{ profile.shortName }}</span>
        </h1>
        
        <p class="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          {{ profile.about }}
        </p>

        <div class="flex gap-4 justify-center md:justify-start">
           <button 
              @click="isChatOpen = true"
              class="px-8 py-3 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 transition flex items-center gap-2 shadow-lg shadow-primary-500/30 active:scale-95 transform duration-200"
           >
              <Sparkles class="w-4 h-4" /> Ask AI about Me
           </button>
           <a 
              href="/cv.pdf" 
              download="CV_Yahdiana_Amalia.pdf"
              class="px-8 py-3 rounded-full bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-200 font-bold hover:border-primary-500 transition active:scale-95 transform duration-200"
           >
              Download CV
           </a>
        </div>
      </div>

      <div class="flex-1 flex justify-center relative w-full">
        <div class="relative w-64 h-64 md:w-80 md:h-80 animate-float">
           
           <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/50 to-purple-600/50 rounded-full blur-3xl opacity-60 dark:opacity-40 animate-pulse"></div>

           <div class="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 rounded-3xl rotate-6 opacity-20 dark:opacity-40"></div>
           
           <div class="absolute inset-0 bg-white dark:bg-dark-surface rounded-3xl shadow-2xl flex items-center justify-center border border-slate-100 dark:border-dark-border overflow-hidden group z-10">
              
              <img 
                src="/profile.jpg" 
                alt="Yahdiana Amalia" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
           </div>
           
           <div class="absolute -right-4 top-10 bg-white dark:bg-dark-surface p-3 rounded-xl shadow-lg border border-slate-100 dark:border-dark-border flex items-center gap-3 animate-bounce z-20" style="animation-duration: 3s;">
              <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                 <Database class="w-5 h-5" />
              </div>
              <div class="text-xs font-bold dark:text-white leading-tight">Data<br>Analyst</div>
           </div>

           <div class="absolute -left-4 bottom-10 bg-white dark:bg-dark-surface p-3 rounded-xl shadow-lg border border-slate-100 dark:border-dark-border flex items-center gap-3 animate-bounce z-20" style="animation-duration: 4s; animation-delay: 1s;">
              <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600">
                 <ShieldCheck class="w-5 h-5" />
              </div>
              <div class="text-xs font-bold dark:text-white leading-tight">Risk<br>Mgmt</div>
           </div>

        </div>
      </div>
    </div>

    <div class="mt-16 pt-8 border-t border-slate-100 dark:border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div v-for="(stat, i) in profile.stats" :key="i" class="text-center group cursor-default">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">{{ stat.value }}</div>
            <div class="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">{{ stat.label }}</div>
        </div>
    </div>

  </section>
</template>