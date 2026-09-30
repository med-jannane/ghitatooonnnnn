import React from 'react';
import { UserPortfolioProfile } from '../types';
import { soundFx } from '../utils/sound';
import { Figma, Palette, PenTool, Code2, Box, Sparkles, GraduationCap, Wrench, ShieldCheck, ArrowUpRight, Star } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Figma: <Figma />,
  Palette: <Palette />,
  PenTool: <PenTool />,
  Code2: <Code2 />,
  Box: <Box />,
  Sparkles: <Sparkles />
};

const PanelTitle: React.FC<{ number: string; eyebrow: string; title: string; icon: React.ReactNode }> = ({ number, eyebrow, title, icon }) => (
  <div className="p2-panel-title">
    <span className="p2-panel-icon">{icon}</span>
    <div className="min-w-0">
      <span className="p2-eyebrow">{number} // {eyebrow}</span>
      <h3>{title}</h3>
    </div>
    <span className="p2-heading-rule" aria-hidden="true" />
  </div>
);

export const ConnectedCardsRow: React.FC<{ profile: UserPortfolioProfile }> = ({ profile }) => (
  <div className="p2-overview-grid">
    <section className="p2-panel p2-inventory-panel">
      <PanelTitle number="01" eyebrow="INVENTAIRE" title="Outils équipés" icon={<Wrench />} />
      <div className="p2-inventory-grid">
        {profile.tools.map((tool, index) => (
          <button key={tool.id} onClick={() => soundFx.playCoin()} title={`${tool.name} (${tool.level}%)`} className="p2-inventory-item">
            <span className="p2-item-index">OBJ. 0{index + 1}</span>
            <span className="p2-item-icon">{icons[tool.icon] || <Sparkles />}</span>
            <span className="p2-item-name">{tool.name}</span>
            <span className="p2-item-meter"><span style={{ width: `${tool.level}%` }} /></span>
            <span className="p2-item-level">MAÎTRISE <b>{tool.level}%</b></span>
          </button>
        ))}
      </div>
    </section>

    <section className="p2-panel p2-skill-panel">
      <PanelTitle number="02" eyebrow="ARBRE DE TALENTS" title="Compétences" icon={<ShieldCheck />} />
      <div className="p2-skill-tree">
        {profile.skills.map((skill, index) => (
          <button key={skill.id} onClick={() => soundFx.playClick()} className="p2-skill-node">
            <span className="p2-skill-orb"><Star /></span>
            <span className="p2-skill-copy"><b>{skill.name}</b><small>{skill.category === 'soft_skill' ? 'TALENT PERSONNEL' : 'COMPÉTENCE TECHNIQUE'}</small></span>
            <span className="p2-skill-rank">{skill.level}</span>
            {index < profile.skills.length - 1 && <span className="p2-skill-link" aria-hidden="true" />}
          </button>
        ))}
      </div>
    </section>

    <section className="p2-panel p2-education-panel">
      <PanelTitle number="03" eyebrow="CARTE DU PARCOURS" title="Formation" icon={<GraduationCap />} />
      <div className="p2-education-track">
        {profile.trainingLogs.map((log, index) => (
          <article key={log.id} onClick={() => soundFx.playClick()} className="p2-education-step">
            <div className="p2-education-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <span className="p2-education-period">{log.period}</span>
            <h4>{log.title}</h4>
            <p className="p2-education-school">{log.institution}</p>
            <p className="p2-education-details">{log.details}</p>
            <ArrowUpRight className="p2-education-arrow" />
          </article>
        ))}
      </div>
    </section>
  </div>
);
