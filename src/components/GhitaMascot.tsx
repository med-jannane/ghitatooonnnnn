import React, { useState, useEffect } from 'react';

interface GhitaMascotProps {
  className?: string;
}

export const GhitaMascot: React.FC<GhitaMascotProps> = ({ className = '' }) => {
  const [frameIndex, setFrameIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev % 4) + 1);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={`/salut/${frameIndex}.png`}
        alt="Ghita Mascot Salut"
        className="w-28 sm:w-36 h-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
      />
      <div className="absolute -top-6 -right-4 bg-[#fff07c] text-black font-pixel text-[9px] px-2 py-1 rounded-full border-2 border-black shadow animate-bounce">
        Salut ! ✨
      </div>
    </div>
  );
};
