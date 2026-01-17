<script setup lang="ts">
import { ref } from 'vue';
import { Sun, Moon, Menu, X } from 'lucide-vue-next'; // Import Menu & X
import { useTheme } from '@/composables/useTheme';

const { isDark, toggleDark } = useTheme();
const isMenuOpen = ref(false); // State untuk buka/tutup menu mobile

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    isMenuOpen.value = false; // Otomatis tutup menu saat link diklik
  }
};
</script>

<template>
  <nav class="fixed w-full z-50 glass transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        
        <div class="flex items-center gap-2 cursor-pointer" @click="scrollTo('hero')">
           <div class="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">Y</div>
           <span class="font-bold text-xl text-slate-900 dark:text-white">Yahdiana<span class="text-primary-500">.</span></span>
        </div>

        <div class="hidden md:flex space-x-8 items-center">
          <button v-for="item in navItems" :key="item.id" @click="scrollTo(item.id)" 
            class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
            {{ item.label }}
          </button>
          
          <button @click="toggleDark()" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Sun v-if="isDark" class="w-5 h-5 text-yellow-400" />
            <Moon v-else class="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <div class="md:hidden flex items-center gap-2">
            <button @click="toggleDark()" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Sun v-if="isDark" class="w-5 h-5 text-yellow-400" />
                <Moon v-else class="w-5 h-5 text-slate-600" />
            </button>

            <button @click="isMenuOpen = !isMenuOpen" class="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
                <Menu v-if="!isMenuOpen" class="w-6 h-6" />
                <X v-else class="w-6 h-6" />
            </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-dark-surface border-b border-slate-100 dark:border-dark-border shadow-lg z-40">
         <div class="px-4 py-4 space-y-2">
             <button v-for="item in navItems" :key="item.id"
                @click="scrollTo(item.id)"
                class="block w-full text-left px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 font-medium transition-colors"
             >
                {{ item.label }}
             </button>
         </div>
      </div>
    </transition>
  </nav>
</template>