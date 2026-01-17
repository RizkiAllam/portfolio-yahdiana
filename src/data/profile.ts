import type { Profile } from '@/types';

export const profile: Profile = {
  name: "Yahdiana Amalia Hasibuan",
  shortName: "Yahdiana Amalia Hasibuan",
  role: "Data Analyst & Risk Management",
  location: "Yogyakarta, Indonesia", // Asumsi dari UIN/Polda DIY
  availability: "Open to Work",
  
  about: "Fresh Graduate in Informatics with a passion for Data Analysis and Risk Management. Creating systematic solutions and data-driven insights. I am eager to contribute my knowledge and analytical skills to support your company's growth.",
  
  contact: {
    email: "yahdianaamalia@gmail.com",
    phone: "+62 822 7413 8229",
    linkedin: "Yahdiana Amalia",
    linkedinUrl: "#", // Ganti dengan URL LinkedIn asli nanti
  },

  // Statistik yang muncul di bawah Hero Section
  stats: [
    { value: '3.56', label: 'GPA' },
    { value: '6m+', label: 'Experience' },
    { value: '3', label: 'Companies' },
    { value: '2', label: 'Projects' },
  ]
};