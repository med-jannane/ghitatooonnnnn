import React, { useState } from 'react';
import { soundFx } from '../utils/sound';

export const CuteCatPet: React.FC<{ catName: string }> = ({ catName }) => {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [speech, setSpeech] = useState<string | null>(null);

  const handleCatClick = (e: React.MouseEvent) => {
    soundFx.playMeow();
    const newHeart = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY - 40
    };
    setHearts((prev) => [...prev, newHeart]);

    const quotes = ["Miaou ! ✨", "Purrr... 💕", "+10 XP !", "Level Up ! 🌸", "Welcome ! 🐾"];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSpeech(randomQuote);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1500);

    setTimeout(() => {
      setSpeech(null);
    }, 2500);
  };

  return (
    <>
      {/* Floating hearts on click */}
      {hearts.map((h) => (
        <div
          key={h.id}
          className="fixed pointer-events-none text-xl animate-bounce z-50 transition-all duration-1000"
          style={{ left: h.x, top: h.y }}
        >
          💖
        </div>
      ))}

      {/* Walking Cat Bar */}
      <div className="fixed bottom-2 left-0 right-0 pointer-events-none z-40 overflow-hidden h-16">
        <div className="animate-cat-walk pointer-events-auto inline-flex items-center gap-2 cursor-pointer group" onClick={handleCatClick}>
          {speech && (
            <div className="bg-[#f5eae1] text-[#540d1b] font-pixel-heading text-[10px] px-2 py-1 border-2 border-[#540d1b] rounded-t-md shadow-md animate-bounce">
              {speech}
            </div>
          )}
          <img 
            src="/cat.png" 
            alt={catName} 
            className="w-10 h-10 object-contain drop-shadow-[0_2px_0_rgba(0,0,0,0.8)] group-hover:scale-125 transition-transform" 
          />
        </div>
      </div>
    </>
  );
};
