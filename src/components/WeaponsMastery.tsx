import React from 'react';
import { ToolItem } from '../types';
import { Figma, Palette, PenTool, Code2, Box, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/sound';

const iconMap: Record<string, React.ReactNode> = {
  Figma: <Figma className="w-5 h-5 text-[#ff66b2]" />,
  Palette: <Palette className="w-5 h-5 text-[#ffd700]" />,
  PenTool: <PenTool className="w-5 h-5 text-[#ff66b2]" />,
  Code2: <Code2 className="w-5 h-5 text-[#00ff99]" />,
  Box: <Box className="w-5 h-5 text-[#00e5ff]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#ffd700]" />
};

export const WeaponsMastery: React.FC<{ tools: ToolItem[] }> = ({ tools }) => {
  return (
    <div className="weapons-tiles">
      {tools.map((tool) => (
        <div 
          key={tool.id}
          onClick={() => soundFx.playCoin()}
          className="app-tile"
          title={`${tool.name} (LVL ${tool.level}%)`}
        >
          <div className="shrink-0 mb-1">
            {iconMap[tool.icon] || <Code2 className="w-5 h-5 text-[#00ff99]" />}
          </div>
          <span className="app-tile-name">{tool.name}</span>
        </div>
      ))}
    </div>
  );
};
