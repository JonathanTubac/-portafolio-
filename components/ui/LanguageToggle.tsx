'use client';

import { useLang } from '@/components/providers/LanguageProvider';

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200 text-xs font-mono font-semibold tracking-wide"
      aria-label="Toggle language"
    >
      <span className={lang === 'en' ? 'text-white' : 'text-white/30'}>EN</span>
      <span className="text-white/20">/</span>
      <span className={lang === 'es' ? 'text-white' : 'text-white/30'}>ES</span>
    </button>
  );
}
