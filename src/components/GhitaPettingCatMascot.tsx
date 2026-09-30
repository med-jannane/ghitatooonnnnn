import React, { useState, useEffect } from 'react';

interface GhitaPettingCatMascotProps {
  className?: string;
}

export const GhitaPettingCatMascot: React.FC<GhitaPettingCatMascotProps> = ({ className = '' }) => {
  const [frameIndex, setFrameIndex] = useState(1);

  useEffect(() => {
    const frameInterval = setInterval(() => {
      setFrameIndex((prev) => (prev % 6) + 1);
    }, 250); // Continuous smooth loop non-stop

    return () => clearInterval(frameInterval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={`/caresselechat/${frameIndex}.png`}
        alt="Ghita caresse le chat"
        className="w-28 sm:w-36 h-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
      />
    </div>
  );
};
