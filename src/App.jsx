import React, { useState } from 'react';
import profileImg from './assets/photo.png';

import { 
  Linkedin, 
  Facebook, 
  Instagram, 
  FileText, 
  Phone 
} from 'lucide-react';

/**
 * Mohammed Mostafa Portfolio
 */

const App = () => {
  const [lang, setLang] = useState('en');
  const isRtl = lang === 'ar';

  // Contact Links
  const userData = {
    phone: "tel:+201061212018",
    linkedin: "https://www.linkedin.com/in/muhammad-mostafa-857642247/",
    facebook: "https://www.facebook.com/muhammad.mostafa.773",
    instagram: "https://www.instagram.com/muhamed_mostafakamel?igsh=cWNjYXU1MGdnbWZ2",
    whatsapp: "https://wa.me/201061212018"
  };

  const content = {
    en: {
      name: "Mohammed Mostafa",
      role: "Sales Manager @ VAI Development",
      skills: ["Sales Strategy", "Business Development", "CRM", "Client Relations"],
      resume: "Download CV",
      image: "src/assets/photo.png",
      pdf: ""
    },
    ar: {
      name: "محمد مصطفى",
      role: "مدير مبيعات في VAI Development",
      skills: ["إدارة المبيعات", "تطوير الأعمال", "إدارة علاقات العملاء", "التفاوض"],
      resume: "تحميل السيرة الذاتية",
      image: "src/assets/photo.png",
      pdf: ""
    }
  };

  const t = content[lang];

  return (
    <div
      className={`min-h-screen bg-[#050505] text-white p-6 md:p-12 transition-all duration-500 ${
        isRtl ? 'font-arabic' : 'font-sans'
      }`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-widest">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {isRtl ? 'متصل الآن' : 'ONLINE'}
          </div>

          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="bg-white text-black px-5 py-2 rounded-full font-bold text-xs uppercase hover:bg-gray-200 transition-colors"
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Card */}
          <div className="md:col-span-2 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center shadow-2xl">
            <div className="w-40 h-40 rounded-2xl overflow-hidden ring-2 ring-white/10 bg-[#1a1a1a]">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Mostafa";
                    
                }}
              />
            </div>

            <div className="text-center md:text-start">
              <h1 className="text-4xl font-bold mb-2">{t.name}</h1>
              <p className="text-blue-400 font-medium">{t.role}</p>
            </div>
          </div>

          {/* Socials */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-6 grid grid-cols-2 gap-3">
            <a
              href={userData.phone}
              className="flex items-center justify-center p-4 bg-white/5 rounded-2xl hover:bg-green-500 transition-all"
            >
              <Phone />
            </a>

            <a
              href={userData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all"
            >
              <Linkedin />
            </a>

            <a
              href={userData.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-4 bg-white/5 rounded-2xl hover:bg-blue-800 transition-all"
            >
              <Facebook />
            </a>

            <a
              href={userData.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-4 bg-white/5 rounded-2xl hover:bg-pink-600 transition-all"
            >
              <Instagram />
            </a>
          </div>

          {/* Skills */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
            <h3 className="text-[10px] font-black text-gray-500 uppercase mb-4 tracking-[0.2em]">
              {isRtl ? 'المهارات' : 'Stack'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {t.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CV & WhatsApp */}
          <div className="md:col-span-2 flex gap-4">
            <a
              href={t.pdf}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-blue-600 p-6 rounded-3xl flex items-center justify-center gap-3 font-bold hover:bg-blue-700"
            >
              <FileText /> {t.resume}
            </a>

            <a
              href={userData.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] p-6 rounded-3xl flex items-center justify-center hover:scale-105 transition-all"
            >
              <Phone />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center opacity-30 text-[10px] font-bold tracking-[0.5em] uppercase">
          {"Yousef Mohamed"} © 2026
        </footer>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
          .font-arabic { font-family: 'Cairo', sans-serif; }
        `,
        }}
      />
    </div>
  );
};

export default App;
