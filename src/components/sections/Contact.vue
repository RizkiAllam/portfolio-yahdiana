<script setup lang="ts">
import { Mail, Phone, Linkedin } from 'lucide-vue-next';
import { profile } from '@/data/profile';
</script>

<template>
  <section id="contact" class="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500"></div>
    
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <h2 class="text-3xl font-bold mb-8">Let's Work Together</h2>
      <p class="text-slate-400 mb-12 max-w-2xl mx-auto">
        I am eager to contribute my knowledge and analytical skills to support your company's growth.
      </p>

      <div class="grid md:grid-cols-3 gap-6">
        <a :href="`mailto:${profile.contact.email}`" class="p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition border border-white/10 flex flex-col items-center group">
          <Mail class="w-8 h-8 mb-4 text-primary-400 group-hover:scale-110 transition" />
          <h3 class="font-semibold">Email</h3>
          <p class="text-sm text-slate-400 mt-1">{{ profile.contact.email }}</p>
        </a>
        
        <a :href="`tel:${profile.contact.phone}`" class="p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition border border-white/10 flex flex-col items-center group">
          <Phone class="w-8 h-8 mb-4 text-primary-400 group-hover:scale-110 transition" />
          <h3 class="font-semibold">Phone</h3>
          <p class="text-sm text-slate-400 mt-1">{{ profile.contact.phone }}</p>
        </a>

        <a :href="profile.contact.linkedinUrl" class="p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition border border-white/10 flex flex-col items-center group">
          <Linkedin class="w-8 h-8 mb-4 text-primary-400 group-hover:scale-110 transition" />
          <h3 class="font-semibold">LinkedIn</h3>
          <p class="text-sm text-slate-400 mt-1">{{ profile.contact.linkedin }}</p>
        </a>
      </div>
    </div>
  </section>
</template>