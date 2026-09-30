import React, { useState } from 'react';
import { soundFx } from '../utils/sound';
import { Volume2, VolumeX, Music, Download, SlidersHorizontal, ShieldCheck, Zap } from 'lucide-react';

interface HeaderHUDProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenCustomizer: () => void;
}

export const HeaderHUD: React.FC<HeaderHUDProps> = ({
  soundEnabled,
  onToggleSound,
  onOpenCustomizer
}) => {
  const [bgmActive, setBgmActive] = useState(false);

  const handleToggleBGM = () => {
    const state = soundFx.toggleBGM();
    setBgmActive(state);
  };

  const handleDownloadCV = () => {
    soundFx.playLevelUp();
    alert("Téléchargement du CV de Ghita Harzafi (EMSI / ISTA NTIC)");
  };

  return (
    <header className="arcade-hud">
      {/* Left: Player Status Badge */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-[#380a13] px-3 py-1.5 rounded-lg border border-[#ffd700] shadow-sm">
          <Zap className="w-3.5 h-3.5 text-[#00ff99] animate-pulse" />
          <span className="text-[#00ff99] font-pixel text-[10px] tracking-wider">FULL-STACK ENGINEER</span>
        </div>
        <div className="hidden lg:flex items-center gap-1 text-[9px] text-[#ffd700]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00e5ff]" />
          <span>LVL.20 (EMSI IIR)</span>
        </div>
      </div>

      {/* Middle Title Badge */}
      <div className="hidden sm:flex items-center gap-2 bg-[#120307]/80 px-4 py-1.5 rounded-full border border-[#ff66b2]/40 backdrop-blur-md">
        <span className="text-[#ff66b2] font-pixel text-[10px] tracking-widest">
          GHITA HARZAFI ★ PORTFOLIO 2026
        </span>
      </div>

      {/* Right Action Controls */}
      <div className="flex items-center gap-2">
        {/* HP Bar */}
        <div className="hidden md:flex items-center gap-2 mr-2">
          <div className="hp-bar">
            <div className="hp-fill"></div>
          </div>
          <span className="text-[#00ff99] font-pixel text-[9px]">P1 100%</span>
        </div>

        {/* Sound FX Toggle */}
        <button 
          onClick={() => {
            soundFx.playClick();
            onToggleSound();
          }}
          className="h-8 w-8 bg-[#380a13] border-2 border-[#d4af37] text-white rounded-lg hover:border-[#00ff99] hover:bg-[#5a1020] transition-all flex items-center justify-center cursor-pointer shadow-md"
          title="Bruitages FX"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-[#00ff99]" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
        </button>

        {/* BGM Toggle */}
        <button
          onClick={handleToggleBGM}
          className={`h-8 px-3 border-2 font-pixel text-[9px] rounded-lg flex items-center gap-1.5 cursor-pointer transition-all shadow-md ${
            bgmActive 
              ? 'bg-[#ff66b2] text-black border-[#ff66b2] shadow-[0_0_12px_#ff66b2]' 
              : 'bg-[#380a13] text-[#ff66b2] border-[#ff66b2] hover:bg-[#ff66b2] hover:text-black'
          }`}
          title="Musique 8-Bit BGM"
        >
          <Music className="w-3.5 h-3.5" />
          <span>BGM</span>
        </button>

        {/* Download CV Button */}
        <button
          onClick={handleDownloadCV}
          className="h-8 px-3.5 border-2 border-[#ffd700] bg-gradient-to-r from-[#380a13] to-[#5a1020] text-[#ffd700] font-pixel text-[9px] rounded-lg hover:border-[#00ff99] hover:text-[#00ff99] cursor-pointer transition-all flex items-center gap-1.5 shadow-md hover:scale-105"
        >
          <Download className="w-3.5 h-3.5 shrink-0 text-[#ffd700]" />
          <span>CV</span>
        </button>

        {/* Customizer Button */}
        <button
          onClick={() => {
            soundFx.playCoin();
            onOpenCustomizer();
          }}
          className="h-8 px-3.5 border-2 border-[#00ff99] bg-[#052417] text-[#00ff99] font-pixel text-[9px] rounded-lg hover:bg-[#00ff99] hover:text-black cursor-pointer transition-all flex items-center gap-1.5 shadow-md hover:scale-105"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 shrink-0" />
          <span>ÉDITER</span>
        </button>
      </div>
    </header>
  );
};
