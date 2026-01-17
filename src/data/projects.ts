import type { Project } from '@/types';
import { ShieldAlert, Lock } from 'lucide-vue-next'; // Import icon langsung

export const projects: Project[] = [
  {
    title: 'Risk Management Analysis',
    role: 'ISO Standards Analysis Developer',
    year: 'Oct - Dec 2023',
    description: 'Detailed qualitative analysis for Basabasi Cafe using ISO 31000:2018. Categorized hazards based on likelihood and impact.',
    tags: ['Risk Analysis', 'ISO 31000', 'Safety Protocols'],
    icon: ShieldAlert
  },
  {
    title: 'Web Security Analysis',
    role: 'Security Analyst Intern',
    year: 'Nov - Dec 2024',
    description: 'Utilized BeyondTrust to scan and analyze web vulnerabilities for BID TIK Polda DIY.',
    tags: ['Cybersecurity', 'BeyondTrust', 'Web Analysis'],
    icon: Lock
  }
];