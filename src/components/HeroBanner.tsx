import React from 'react';
import { Sparkles, Sword, Star, Heart, Zap } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="p1-hero-board">
      <div className="p1-hero-main">
        <span className="p1-level-tag"><Sparkles /> PAGE 01 / PLAYER SELECT</span>
        <h1>GHITA<br /><span>HARZAFI</span></h1>
        <p className="p1-hero-role">Étudiante ingénieure Software &amp; Data</p>
        <p className="p1-hero-intro">Je transforme les idées en expériences numériques utiles, élégantes et vivantes.</p>
        <p className="p1-hero-copy">Je crée des applications Web Full-Stack, j'explore l'IA et je conçois des interfaces interactives où la technologie reste claire, humaine et agréable à utiliser.</p>
      </div>
      <aside className="p1-hero-side">
        <div className="p1-player-stats-label"><span>PLAYER 01</span><Heart /></div>
        <div className="p1-pixel-emblem"><Sword /></div>
        <div className="p1-stat-line"><span><Star /> CRÉATIVITÉ</span><b>MAX</b></div>
        <div className="p1-stat-line"><span><Zap /> CURIOSITÉ</span><b>MAX</b></div>
        <div className="p1-xp-line"><span>MISSION</span><b>Construire des produits à impact concret, du prototype à la mise en ligne.</b></div>
      </aside>
      <span className="p1-hero-corner" aria-hidden="true">✦</span>
    </section>
  );
};
