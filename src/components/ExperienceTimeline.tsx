import React from 'react';
import { ExperienceLogItem } from '../types';
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const ExperienceTimeline: React.FC<{ experiences: ExperienceLogItem[] }> = ({ experiences }) => (
  <section className="p2-quest-board">
    <header className="p2-quest-header">
      <div className="p2-quest-heading">
        <span className="p2-quest-icon"><Briefcase /></span>
        <div><span className="p2-eyebrow">04 // JOURNAL DE MISSION</span><h3>Expériences professionnelles</h3></div>
      </div>
      <span className="p2-quest-count"><Award /> {experiences.length} QUÊTES VALIDÉES</span>
    </header>

    <div className="p2-quest-grid">
      {experiences.map((exp, index) => (
        <article key={exp.id} onClick={() => soundFx.playClick()} className="p2-quest-card">
          <div className="p2-quest-card-top">
            <span className="p2-quest-number">QUEST<br /><b>0{index + 1}</b></span>
            <span className="p2-quest-status"><span /> TERMINÉE</span>
          </div>
          <p className="p2-quest-company">{exp.company}</p>
          <h4>{exp.role}</h4>
          <div className="p2-quest-meta">
            <span><Calendar />{exp.period}</span>
            <span><MapPin />{exp.location}</span>
          </div>
          <div className="p2-quest-reward-label">OBJECTIFS ACCOMPLIS</div>
          <ul>
            {exp.missions.map((mission, missionIndex) => (
              <li key={missionIndex}><CheckCircle /><span>{mission}</span></li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);
