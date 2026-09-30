import React from 'react';

export const MarqueeRibbon: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="marquee-ribbon-yellow">
      <div className="marquee-track font-pixel">
        {Array(12).fill(`★ ${text.toUpperCase()} `).join('')}
      </div>
    </div>
  );
};
