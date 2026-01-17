<script setup lang="ts">
// Kita bikin opsi warna biar fleksibel
defineProps<{
  variant?: 'gray' | 'primary' | 'gold'
}>();
</script>

<template>
  <span 
    class="px-2.5 py-1 rounded-md text-xs font-bold inline-flex items-center gap-1.5 border transition-colors cursor-default"
    :class="{
      // Default (Gray/Slate) - untuk Skills biasa / Tag project
      'bg-slate-50 text-slate-600 border-slate-200 dark:bg-dark-bg dark:text-slate-300 dark:border-dark-border': !variant || variant === 'gray',
      
      // Primary (Pink) - untuk hal penting
      'bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-900/20 dark:text-primary-300 dark:border-primary-800': variant === 'primary',
      
      // Gold (Kuning) - untuk Cum Laude / Penghargaan
      'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800': variant === 'gold'
    }"
  >
    <slot />
  </span>
</template>