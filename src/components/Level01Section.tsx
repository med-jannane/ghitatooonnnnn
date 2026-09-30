import React from 'react';
import { UserPortfolioProfile } from '../types';
import { Shield, Sparkles, User, Target, Flame, Heart, MapPin, Star } from 'lucide-react';

interface Level01SectionProps {
  profile: UserPortfolioProfile;
  consoleRef?: React.RefObject<HTMLDivElement>;
}

export const Level01Section: React.FC<Level01SectionProps> = ({ profile, consoleRef }) => {
  return (
    <div ref={consoleRef} className="p1-character-layout">
      
      {/* Left Column: Player Title Card */}
      <div className="p1-player-card">
        <div>
          <div className="p1-card-cap">
            <Shield /><span>CHARACTER DATA</span><Heart />
          </div>
          <div className="p1-player-level">
            <span>LVL</span><b>99</b><small>ENGINEER IN PROGRESS</small>
          </div>
          <div className="p1-player-name">{profile.name}</div>
          <div className="p1-player-location"><MapPin />{profile.location}</div>
          <div className="p1-achievement-tag"><Star /> MAX LEVEL UNLOCKED</div>
        </div>

        <div className="p1-xp-meter">
          <div><span>MASTER EXP</span><b>99,999 XP</b></div>
          <span className="p1-xp-track"><span /></span>
        </div>
      </div>

      {/* Center Profile Photo */}
      <div className="p1-avatar-frame">
        <div className="p1-avatar-label"><Sparkles /> PLAYER PORTRAIT <span>01</span></div>
        <img
          src={profile.avatarUrl}
          alt="Ghita Harzafi avec son chat"
          className="p1-avatar-image"
        />
        <span className="p1-avatar-spark">✦</span>
      </div>

      {/* Right Column: Hello Player Dispatch Card */}
      <div className="p1-briefing-card">
        <div>
          <div className="p1-briefing-title">
            <span className="p1-briefing-icon"><Sparkles /></span>
            <span><small>PLAYER BRIEFING</small><b>HELLO, PLAYER!</b></span>
          </div>
          
          <div className="p1-briefing-row">
            <span><User /> PLAYER</span><b>{profile.name}</b>
          </div>

          <div className="p1-briefing-row">
            <span><Target /> SPECIALTY</span><b>{profile.role}</b>
          </div>

          <div className="p1-mission-note">
            <span><Flame /> ACTIVE MISSION</span>
            <p>{profile.mission}</p>
          </div>
        </div>

        <div className="p1-status-line">
          <span>STATUS: READY</span><b>● ACTIVE</b>
        </div>
      </div>

    </div>
  );
};
