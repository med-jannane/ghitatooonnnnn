import React, { useState } from 'react';
import { soundFx } from '../utils/sound';

export const DraggableCharacter: React.FC = () => {
  const [position, setPosition] = useState({ x: 20, y: 80 }); // Percentage positions
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
    soundFx.playClick();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;
    setPosition({
      x: Math.min(Math.max(xPercent, 5), 92),
      y: Math.min(Math.max(yPercent, 5), 92)
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="fixed inset-0 pointer-events-none z-40"
    >
      <div
        onMouseDown={handleMouseDown}
        style={{ left: `${position.x}%`, top: `${position.y}%` }}
        className="fixed pointer-events-auto cursor-grab active:cursor-grabbing -translate-x-1/2 -translate-y-1/2 group transition-transform duration-75"
        title="Déplace-moi où tu veux sur l'écran !"
      >
        <div className="relative">
          <img
            src="/avatar.png"
            alt="Ghita Harzafi Character Avatar"
            className="w-16 h-16 object-contain drop-shadow-[0_4px_0_rgba(0,0,0,0.8)] group-hover:scale-110"
          />
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#190308] text-[#00ff99] font-pixel text-[8px] px-1.5 py-0.5 border border-[#00ff99] rounded shadow">
            GHITA (DÉPLAÇABLE)
          </div>
        </div>
      </div>
    </div>
  );
};
