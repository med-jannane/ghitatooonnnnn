import React from 'react';
import { soundFx } from '../utils/sound';
import { Trophy, Mail } from 'lucide-react';

interface MarioStageFloorProps {
  onOpenMissions: () => void;
  onOpenContact: () => void;
}

export const MarioStageFloor: React.FC<MarioStageFloorProps> = ({ onOpenMissions, onOpenContact }) => {
  return (
    <section className="p4-level-clear mt-12 mb-8">
      <div className="p4-level-caption"><span>WORLD 04</span><b>LEVEL CLEAR</b><span>★ ★ ★</span></div>
      
      {/* Mario Elements Row */}
      <div className="mario-elements-row flex justify-around items-end max-w-2xl mx-auto">
        
        {/* Warp Pipe */}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => soundFx.playCoin()} title="Warp Pipe">
          <div className="warp-pipe">
            <div className="warp-pipe-top"></div>
          </div>
        </div>

        {/* Mario Question Blocks */}
        <div className="flex gap-4 items-center">
          <div 
            onClick={() => soundFx.playCoin()} 
            className="mario-block cursor-pointer hover:scale-110 transition-transform"
            title="Coin Block"
          >
            ?
          </div>
          <div 
            onClick={() => soundFx.playCoin()} 
            className="mario-block cursor-pointer hover:scale-110 transition-transform"
            title="Super Block"
          >
            ?
          </div>
          <div 
            onClick={() => soundFx.playCoin()} 
            className="mario-block cursor-pointer hover:scale-110 transition-transform text-[#ffafcc]"
            title="Star Power"
          >
            ★
          </div>
        </div>

        {/* Castle Door */}
        <div className="flex items-end gap-2">
          <div 
            onClick={() => {
              soundFx.playLevelUp();
              onOpenContact();
            }} 
            className="castle-door cursor-pointer hover:scale-105 transition-transform"
            title="Castle Entrance"
          >
            <div className="w-3 h-3 rounded-full bg-[#ffafcc] absolute top-6 right-2 shadow-[0_0_8px_#ffafcc]"></div>
          </div>
        </div>

      </div>

      {/* Interactive Action Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => {
            soundFx.playLevelUp();
            onOpenMissions();
          }}
          className="btn-primary-pink text-xs py-3.5 px-8"
        >
          <Trophy className="w-4 h-4 text-[#1e1b4b]" />
          <span>VOIR LES MISSIONS & PROJETS</span>
        </button>

        <button
          onClick={() => {
            soundFx.playLevelUp();
            onOpenContact();
          }}
          className="btn-secondary-blue text-xs py-3.5 px-8"
        >
          <Mail className="w-4 h-4 text-[#1e1b4b]" />
          <span>ME CONTACTER</span>
        </button>
      </div>

    </section>
  );
};
