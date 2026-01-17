<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue';
import Hero from '@/components/sections/Hero.vue';
import Experience from '@/components/sections/Experience.vue';
import Projects from '@/components/sections/Projects.vue';
import JobAnalyzer from '@/components/sections/JobAnalyzer.vue'; // New
import Skills from '@/components/sections/Skills.vue'; // New
import Contact from '@/components/sections/Contact.vue'; // New
import ChatBot from '@/components/features/ChatBot.vue';

import { profile } from '@/data/profile';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';

// Context lengkap
const contextString = JSON.stringify({ profile, experiences, projects, skills });
</script>

<template>
  <div class="min-h-screen bg-primary-50 dark:bg-dark-bg transition-colors duration-300 text-slate-800 dark:text-slate-200 font-sans">
    <Navbar />
    
    <main>
      <Hero />
      <Experience />
      <JobAnalyzer :context="contextString" />
      <Projects />
      <Skills />
      <Contact />
    </main>

    <footer class="py-8 text-center text-slate-500 text-sm bg-slate-900 text-slate-600 border-t border-white/5">
      &copy; 2026 Yahdiana Amalia Hasibuan.
    </footer>

    <ChatBot :context="contextString" />
  </div>
</template>