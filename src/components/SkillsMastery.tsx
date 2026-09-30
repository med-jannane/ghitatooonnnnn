import React from 'react';
import { SkillItem } from '../types';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const SkillsMastery: React.FC<{ skills: SkillItem[] }> = ({ skills }) => {
  return (
    <div className="pixel-box-beige p-5 rounded-sm">
      <div className="flex items-center justify-between border-b-2 border-[#540d1b] pb-2 mb-4">
        <h3 className="font-pixel-heading text-xs text-[#540d1b] uppercase tracking-wider flex items-center gap-2">
          <span>✨</span> Skills Mastery
        </h3>
        <span className="text-[10px] font-pixel-heading text-[#7a182d] bg-[#e6d3c3] px-2 py-0.5 border border-[#540d1b]">
          PERKS
        </span>
      </div>

      <ul className="space-y-2 font-pixel-body text-xs text-[#2e050c]">
        {skills.map((skill) => (
          <li 
            key={skill.id}
            onClick={() => soundFx.playClick()}
            className="flex items-center justify-between p-2 bg-[#f5eae1] hover:bg-[#e6d3c3] transition-colors border border-[#d4b896] cursor-pointer rounded-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9e223d] shrink-0" />
              <span className="font-medium text-sm text-[#540d1b]">{skill.name}</span>
            </div>
            
            <span className="text-[9px] font-pixel-heading text-[#7a182d] bg-[#f5eae1] px-1.5 py-0.5 border border-[#7a182d]">
              {skill.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
