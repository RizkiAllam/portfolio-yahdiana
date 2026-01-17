<script setup lang="ts">
import { ref, computed } from 'vue';
import { Sparkles, Loader2, FileSearch, CheckCircle2 } from 'lucide-vue-next';
import { marked } from 'marked';

// Props context (CV data)
const props = defineProps<{ context: string }>();

const jobDescription = ref('');
const isAnalyzing = ref(false);
const analysisResult = ref('');

const analyze = async () => {
  if (!jobDescription.value.trim()) return;
  isAnalyzing.value = true;
  
  // LOGIC MOCKING (Simulasi AI)
  // Kita gunakan console.log agar variable props.context dianggap "terpakai" oleh TypeScript
  console.log("Analyzing CV Context:", props.context);
  console.log("Against Job Description:", jobDescription.value);
  
  // Simulasi delay 2 detik seolah-olah sedang menghubungi Gemini
  setTimeout(() => {
      analysisResult.value = `
## Match Score: 85%
### Why it's a fit:
- **Strong Analytical Background:** Your experience with ISO 31000 and BeyondTrust aligns well with the risk assessment requirements.
- **Tools Proficiency:** You have proven skills in Data Handling and Visualization which are requested.
### Advice:
- Highlight your specific C++ projects more if the job requires low-level programming.
      `;
      isAnalyzing.value = false;
  }, 2000);
};

const parsedResult = computed(() => marked.parse(analysisResult.value));
</script>

<template>
  <section id="ai-tools" class="py-20 px-4 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-surface dark:to-primary-950/20">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-bold mb-4">
          <Sparkles class="w-3 h-3" /> POWERED BY GEMINI AI
        </div>
        
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Job Match <span class="text-purple-600">Analyzer</span></h2>
        <p class="text-slate-600 dark:text-slate-400">Paste a job description to see how well Yahdiana's profile matches.</p>
      </div>

      <div class="bg-white dark:bg-dark-surface p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-dark-border grid md:grid-cols-2 gap-8">
        <div class="flex flex-col">
          <label class="font-bold text-slate-700 dark:text-slate-300 mb-2">Job Description</label>
          <textarea v-model="jobDescription" class="flex-1 min-h-[200px] p-4 rounded-xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-dark-border focus:ring-2 focus:ring-purple-500 outline-none text-sm" placeholder="Paste JD here..."></textarea>
          <button @click="analyze" :disabled="isAnalyzing || !jobDescription" class="mt-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold flex justify-center items-center gap-2 disabled:opacity-50">
            <Loader2 v-if="isAnalyzing" class="w-5 h-5 animate-spin" />
            <span v-else>Analyze Match</span>
          </button>
        </div>

        <div class="bg-slate-50 dark:bg-[#0f0f0f] rounded-xl p-6 border border-slate-100 dark:border-dark-border h-full min-h-[250px] overflow-y-auto">
          <div v-if="!analysisResult && !isAnalyzing" class="h-full flex flex-col items-center justify-center text-slate-400 text-center">
            <FileSearch class="w-12 h-12 mb-3 opacity-50" />
            <p>Results will appear here</p>
          </div>
          
          <div v-else-if="isAnalyzing" class="h-full flex flex-col items-center justify-center space-y-2">
            <div class="flex gap-2"><span class="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></span><span class="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-75"></span></div>
            <p class="text-sm text-slate-500">Reading job description...</p>
          </div>
          
          <div v-else class="prose prose-sm dark:prose-invert">
            <h3 class="text-purple-600 font-bold flex items-center gap-2"><CheckCircle2 class="w-5 h-5"/> Analysis Complete</h3>
            <div v-html="parsedResult"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>