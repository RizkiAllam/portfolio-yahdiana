<script setup lang="ts">
import { skills } from '@/data/skills';
import { education, certifications } from '@/data/education';
import { GraduationCap, Award, Cpu, Star, Code2, Briefcase } from 'lucide-vue-next';

// Import Common Components (Batu Bata LEGO kita)
import Card from '@/components/common/Card.vue';
import Badge from '@/components/common/Badge.vue';

// Helper icon
const getIcon = (name: string) => {
  if (name === 'Code2') return Code2;
  if (name === 'Briefcase') return Briefcase;
  return Award;
}
</script>

<template>
  <section id="skills" class="py-20 px-4 bg-white dark:bg-dark-surface">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      
      <div>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
          <GraduationCap class="text-primary-500 w-6 h-6" /> Education
        </h2>
        
        <div class="space-y-4 mb-12">
          <Card v-for="(edu, i) in education" :key="i">
            <div class="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
              <h3 class="font-bold text-slate-900 dark:text-white text-lg">{{ edu.school }}</h3>
              
              <div class="flex gap-2 flex-wrap">
                <Badge v-for="(ach, j) in edu.achievements" :key="j" 
                      :variant="ach.type === 'honor' ? 'gold' : 'primary'">
                  <Star v-if="ach.type === 'honor'" class="w-3 h-3" /> 
                  {{ ach.label }}
                </Badge>
              </div>
            </div>
            <p class="text-sm text-slate-500 mb-1 font-medium">{{ edu.period }}</p>
            <p class="text-slate-700 dark:text-slate-300 text-sm">{{ edu.degree }}</p>
          </Card>
        </div>

        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
          <Award class="text-primary-500 w-6 h-6" /> Certifications
        </h2>
        
        <div class="flex flex-col gap-4">
          <Card v-for="(cert, k) in certifications" :key="k" class="flex items-center gap-4 !p-4"> 
            <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0 flex items-center justify-center text-blue-600">
                <component :is="getIcon(cert.icon)" class="w-5 h-5" />
            </div>
            <div>
                <div class="font-bold text-slate-900 dark:text-white text-sm md:text-base">{{ cert.title }}</div>
                <div class="text-xs text-slate-500">{{ cert.subtitle }}</div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
          <Cpu class="text-primary-500 w-6 h-6" /> Skills & Tools
        </h2>

        <div class="mb-8">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Hard Skills</h4>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="skill in skills.hard" :key="skill" variant="gray" class="text-sm py-1.5">
              {{ skill }}
            </Badge>
          </div>
        </div>

        <div class="mb-8">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Soft Skills</h4>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="skill in skills.soft" :key="skill" variant="gray" class="text-sm py-1.5">
              {{ skill }}
            </Badge>
          </div>
        </div>

        <div class="p-6 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl text-white shadow-lg mt-8">
            <h3 class="font-bold text-lg mb-2">Secretary at HMPS Informatics</h3>
            <p class="text-primary-100 text-sm font-semibold mb-3 border-b border-white/20 pb-3">2023 - 2024</p>
            <p class="text-sm opacity-95 leading-relaxed">Managed administration, correspondence, and meeting documentation. Assisted in sponsorship proposals and work program evaluation.</p>
        </div>
      </div>

    </div>
  </section>
</template>