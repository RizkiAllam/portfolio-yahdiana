<script setup lang="ts">
import { ref } from 'vue';
import { Sun, Moon } from 'lucide-vue-next';
import { useTheme } from '@/composables/useTheme';

const { isDark, toggleDark } = useTheme();
const isMenuOpen = ref(false);

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  isMenuOpen.value = false;
};
</script>

<template>
  <nav class="fixed w-full z-50 glass transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="flex items-center gap-2 cursor-pointer" @click="scrollTo('hero')">
            <div class="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">Y</div>
            <span class="font-bold text-xl text-slate-900 dark:text-white">Yahdiana.</span>
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
      </div>
    </div>
  </nav>
</template>