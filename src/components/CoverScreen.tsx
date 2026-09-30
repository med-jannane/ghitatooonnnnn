import React from 'react';
import { GhitaMascot } from './GhitaMascot';
import { soundFx } from '../utils/sound';
import { ArrowRight } from 'lucide-react';

interface CoverScreenProps {
  onStartGame: () => void;
  onDirectAccess: () => void;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({ onStartGame, onDirectAccess }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0306] overflow-hidden font-pixel">
      
      {/* Full-screen cover image */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Cover keeps the image edge-to-edge across the viewport */}
        <picture className="w-full h-full flex items-center justify-center">
          <source media="(max-width: 768px)" srcSet="/backgorund/firstmobile.jpg" />
          <img 
            src="/backgorund/firstpc.jpg" 
            alt="Page de Garde Ghita Harzafi" 
            className="w-full h-full object-cover"
          />
        </picture>

        {/* Mascot Standing Directly on the Sidewalk (Trottoir) */}
        <div className="absolute bottom-0 sm:bottom-1 left-4 sm:left-10 z-10">
          <GhitaMascot />
        </div>

        {/* Center Bottom Portfolio Button */}
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-8">
          <button
            onClick={() => {
              soundFx.playLevelUp();
              onStartGame();
            }}
            className="pixel-button-style flex w-[min(88vw,420px)] min-h-[76px] items-center justify-center gap-4 rounded-[18px] border-[5px] border-[#1e1b4b] bg-[#b8f2e6] px-8 py-5 text-base font-bold text-[#1e1b4b] shadow-[8px_8px_0_#1e1b4b,0_0_28px_rgba(184,242,230,0.65)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#ffafcc] hover:shadow-[10px_10px_0_#1e1b4b,0_0_32px_rgba(255,175,204,0.75)] active:translate-x-1 active:translate-y-1 active:shadow-[4px_4px_0_#1e1b4b] cursor-pointer sm:text-xl"
          >
            <span>COMMENCER L'AVENTURE</span>
            <ArrowRight className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              onDirectAccess();
            }}
            className="min-h-[48px] w-[min(76vw,300px)] rounded-xl border-2 border-[#1e1b4b] bg-white/90 px-5 py-3 font-pixel text-[10px] font-bold text-[#1e1b4b] shadow-[4px_4px_0_#1e1b4b] transition-all hover:-translate-y-0.5 hover:bg-[#ffafcc] active:translate-x-1 active:translate-y-1 active:shadow-none sm:text-xs"
          >
            ACCÈS DIRECT AU PORTFOLIO
          </button>
        </div>

      </div>

    </div>
  );
};
