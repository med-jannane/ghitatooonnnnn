import React from 'react';
import { Award, Heart, CheckCircle2, Sparkles, Trophy, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const CertificationsCard: React.FC<{ certifications: string[] }> = ({ certifications }) => (
  <section className="p2-panel p2-achievement-panel">
    <div className="p2-mini-heading"><span className="p2-panel-icon"><Trophy /></span><div><span className="p2-eyebrow">06 // SUCCÈS DÉBLOQUÉS</span><h3>Certifications</h3></div></div>
    <div className="p2-achievement-list">
      {certifications.map((cert, index) => (
        <article key={index} onClick={() => soundFx.playClick()} className="p2-achievement-item">
          <span className="p2-achievement-seal"><Award /></span><span className="p2-achievement-copy"><small>BADGE 0{index + 1}</small><b>{cert}</b></span><CheckCircle2 className="p2-achievement-check" />
        </article>
      ))}
    </div>
  </section>
);

export const HobbiesCard: React.FC<{ hobbies: string[] }> = ({ hobbies }) => (
  <section className="p2-panel p2-sidequest-panel">
    <div className="p2-mini-heading"><span className="p2-panel-icon"><Heart /></span><div><span className="p2-eyebrow">07 // HORS MISSION</span><h3>Side quests</h3></div></div>
    <div className="p2-sidequest-list">
      {hobbies.map((hobby, index) => (
        <button key={index} onClick={() => soundFx.playClick()} className="p2-sidequest-item"><span className="p2-sidequest-star"><Sparkles /></span><span>{hobby.replace(/^[^\w\s]+/, '').trim()}</span><ArrowUpRight className="p2-sidequest-arrow" /></button>
      ))}
    </div>
  </section>
);
