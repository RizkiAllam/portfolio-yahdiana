<script setup lang="ts">
import { projects } from '@/data/projects';
import Card from '@/components/common/Card.vue';
import Badge from '@/components/common/Badge.vue';
</script>

<template>
  <section id="projects" class="py-20 px-4 bg-slate-50 dark:bg-[#0f0f0f]">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Professional <span class="text-primary-500">Projects</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400">Key initiatives I've managed and developed.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="(project, index) in projects" :key="index" class="h-full">
          
          <Card class="h-full flex flex-col group hover:!border-primary-300 dark:hover:!border-primary-700">
            
            <div class="flex justify-between items-start mb-6">
              <div class="p-3 bg-slate-50 dark:bg-dark-bg rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                <component :is="project.icon" class="w-8 h-8 text-primary-500" />
              </div>
              <Badge variant="gray">{{ project.year }}</Badge>
            </div>
            
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-sm font-semibold text-slate-500 mb-4">{{ project.role }}</p>
            
            <p class="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow text-sm">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-dark-border/50">
              <Badge v-for="tag in project.tags" :key="tag" variant="gray">
                {{ tag }}
              </Badge>
            </div>
            
          </Card>

        </div>
      </div>
    </div>
  </section>
</template>