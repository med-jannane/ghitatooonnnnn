import React from 'react';
import { LanguageItem } from '../types';
import { soundFx } from '../utils/sound';
import { Globe2 } from 'lucide-react';

export const LanguagesRadar: React.FC<{ languages: LanguageItem[] }> = ({ languages }) => (
  <section className="p2-panel p2-language-panel">
    <div className="p2-mini-heading"><span className="p2-panel-icon"><Globe2 /></span><div><span className="p2-eyebrow">05 // ZONE DE COMMUNICATION</span><h3>Langues</h3></div></div>
    <div className="p2-language-list">
      {languages.map((lang, index) => (
        <button key={lang.name} onClick={() => soundFx.playClick()} className="p2-language-row">
          <span className="p2-language-index">0{index + 1}</span>
          <span className="p2-language-main"><span><b>{lang.name}</b><small>{lang.level}</small></span><span className="p2-language-track"><span style={{ width: `${lang.percentage}%` }} /></span></span>
          <span className="p2-language-score">{lang.percentage}</span>
        </button>
      ))}
    </div>
  </section>
);
