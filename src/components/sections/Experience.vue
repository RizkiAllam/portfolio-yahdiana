<script setup lang="ts">
import { experiences } from '@/data/experience';
import { CheckCircle } from 'lucide-vue-next';
</script>

<template>
  <section id="experience" class="py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
        Work <span class="text-primary-500">Experience</span>
      </h2>

      <div class="relative border-l-2 border-primary-200 dark:border-slate-700 ml-6 space-y-12">
        <div v-for="(job, index) in experiences" :key="index" class="relative pl-12">
          <div class="absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-dark-bg bg-primary-500"></div>
          
          <div class="bg-white dark:bg-dark-surface p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-dark-border">
            <div class="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ job.role }}</h3>
                  <div class="text-primary-600 dark:text-primary-400 font-medium">{{ job.company }}</div>
                </div>
                <div class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-bold rounded-full h-fit mt-2 md:mt-0">{{ job.period }}</div>
            </div>

            <ul class="space-y-2">
                <li v-for="task in job.tasks" :key="task" class="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle class="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  {{ task }}
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>