import React from 'react';
import { TrainingLogItem } from '../types';
import { GraduationCap } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const TrainingLog: React.FC<{ items: TrainingLogItem[] }> = ({ items }) => {
  return (
    <div className="connected-card">
      <div className="card-header-yellow">Training Log (Formation)</div>

      <div className="space-y-2.5 font-pixel-sub text-xs">
        {items.map((item) => (
          <div 
            key={item.id}
            onClick={() => soundFx.playClick()}
            className="p-2 bg-[#fdf5eb] border border-[#ff66b2] rounded cursor-pointer hover:bg-white transition-colors"
          >
            <div className="flex items-start gap-1.5 mb-1">
              <GraduationCap className="w-4 h-4 text-[#b30059] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-[#5c0d1e]">{item.title}</h4>
                <p className="text-[11px] text-[#8c1a32] font-semibold">{item.institution}</p>
              </div>
            </div>
            
            <div className="mt-1 text-[10px] text-[#5c0d1e] font-pixel text-[#d4af37]">
              📅 {item.period}
            </div>

            {item.details && (
              <p className="mt-1 text-[10px] text-gray-700 italic leading-snug">
                "{item.details}"
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
