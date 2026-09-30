import React from 'react';
import { Sparkles, Heart, Crosshair, Star, Globe, Mail, MapPin } from 'lucide-react';
import { UserPortfolioProfile } from '../types';
import { soundFx } from '../utils/sound';

interface RetroConsoleProps {
  profile: UserPortfolioProfile;
  consoleRef?: React.RefObject<HTMLDivElement>;
}

export const RetroConsole: React.FC<RetroConsoleProps> = ({ profile, consoleRef }) => {
  return (
    <section ref={consoleRef} id="about-section" className="w-full max-w-5xl mx-auto my-12 px-4 scroll-mt-20">
      
      {/* Level Header Title */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-4 border-[#540d1b] pb-3">
        <div>
          <span className="text-[#f29bb0] font-pixel-heading text-sm tracking-widest uppercase">Level 01</span>
          <h2 className="text-2xl sm:text-4xl font-pixel-heading text-[#f5eae1] tracking-wider mt-1">
            Meet the player
          </h2>
          <p className="text-xl font-pixel-body text-[#e5c158] mt-1 font-semibold">{profile.name}</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center gap-2 text-xs font-pixel-heading text-[#e6d3c3]">
          <MapPin className="w-4 h-4 text-[#9e223d]" />
          <span>{profile.location}</span>
        </div>
      </div>

      {/* Retro 3DS Console & Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left / Center: Handheld 3DS Console */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="console-frame w-full max-w-lg">
            
            {/* Top Display Screen */}
            <div className="console-screen text-center relative mb-6 min-h-[220px] flex flex-col items-center justify-center border-4 border-[#3a0610]">
              
              {/* Floating Stars around frame */}
              <div className="absolute top-2 left-3 text-lg animate-bounce">⭐</div>
              <div className="absolute top-3 right-4 text-lg animate-pulse">✨</div>
              <div className="absolute bottom-2 left-4 text-xs font-pixel-heading text-[#f29bb0]">2026 3DS PRO</div>

              {/* Character Avatar Display */}
              <div className="relative my-2 group cursor-pointer" onClick={() => soundFx.playMeow()}>
                <img 
                  src={profile.avatarUrl} 
                  alt={profile.name} 
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain border-4 border-[#540d1b] rounded-md bg-[#18090f] shadow-lg animate-pixel-float"
                />
                <Star className="w-5 h-5 text-[#e5c158] fill-[#e5c158] absolute -top-2 -left-2 animate-spin" />
                <Star className="w-5 h-5 text-[#e5c158] fill-[#e5c158] absolute -bottom-2 -right-2 animate-bounce" />
              </div>

              <div className="text-[10px] font-pixel-heading text-[#d4b896] mt-1">
                PLAYER ID: #001 ★ {profile.role.split('/')[0]}
              </div>
            </div>

            {/* Console Hinge / Speaker Grille */}
            <div className="flex justify-between items-center px-6 py-1 mb-4 bg-[#3a0610] rounded-sm border-y-2 border-[#8c1d35]">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f29bb0]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#f29bb0]"></div>
              </div>
              <span className="text-[9px] font-pixel-heading text-[#e6d3c3] tracking-widest">NINTENDO 3DS RETRO</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e5c158]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#e5c158]"></div>
              </div>
            </div>

            {/* Lower Touchscreen */}
            <div className="console-screen bg-[#1c0a10] border-4 border-[#540d1b] p-4 text-left font-pixel-body">
              <div className="flex items-center justify-between border-b-2 border-[#540d1b] pb-2 mb-3">
                <span className="text-xs font-pixel-heading text-[#e5c158]">PLAYER STATS CARD</span>
                <Heart className="w-3.5 h-3.5 text-[#f29bb0] fill-[#f29bb0]" />
              </div>
              
              <div className="space-y-2 text-sm text-[#f5eae1]">
                <p><span className="text-[#f29bb0] font-semibold">Bio:</span> {profile.bio}</p>
                <p><span className="text-[#e5c158] font-semibold">Mission:</span> {profile.mission}</p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-pixel-heading text-[#d4b896]">STATUS:</span>
                  <span className="pixel-tag pixel-tag-gold animate-pulse">{profile.status}</span>
                </div>
              </div>
            </div>

            {/* Console Controls (D-Pad & Buttons A, B, X, Y) */}
            <div className="flex justify-between items-center mt-6 px-4">
              
              {/* D-Pad Cross */}
              <div className="relative w-20 h-20">
                <button 
                  onClick={() => soundFx.playClick()}
                  className="absolute top-0 left-6 w-8 h-7 bg-[#2e050c] hover:bg-[#7a182d] border-2 border-[#d4b896] rounded-t-sm flex items-center justify-center text-[10px] text-white"
                >
                  ▲
                </button>
                <button 
                  onClick={() => soundFx.playClick()}
                  className="absolute bottom-0 left-6 w-8 h-7 bg-[#2e050c] hover:bg-[#7a182d] border-2 border-[#d4b896] rounded-b-sm flex items-center justify-center text-[10px] text-white"
                >
                  ▼
                </button>
                <button 
                  onClick={() => soundFx.playClick()}
                  className="absolute top-6 left-0 w-7 h-8 bg-[#2e050c] hover:bg-[#7a182d] border-2 border-[#d4b896] rounded-l-sm flex items-center justify-center text-[10px] text-white"
                >
                  ◄
                </button>
                <button 
                  onClick={() => soundFx.playClick()}
                  className="absolute top-6 right-0 w-7 h-8 bg-[#2e050c] hover:bg-[#7a182d] border-2 border-[#d4b896] rounded-r-sm flex items-center justify-center text-[10px] text-white"
                >
                  ►
                </button>
              </div>

              {/* Action Buttons Cluster */}
              <div className="grid grid-cols-2 gap-2 text-center">
                <button 
                  onClick={() => soundFx.playCoin()}
                  className="w-9 h-9 rounded-full bg-[#9e223d] hover:bg-[#c24660] border-2 border-[#e5c158] font-pixel-heading text-xs text-white shadow-md flex items-center justify-center"
                >
                  X
                </button>
                <button 
                  onClick={() => soundFx.playCoin()}
                  className="w-9 h-9 rounded-full bg-[#540d1b] hover:bg-[#7a182d] border-2 border-[#e5c158] font-pixel-heading text-xs text-white shadow-md flex items-center justify-center"
                >
                  A
                </button>
                <button 
                  onClick={() => soundFx.playCoin()}
                  className="w-9 h-9 rounded-full bg-[#540d1b] hover:bg-[#7a182d] border-2 border-[#e5c158] font-pixel-heading text-xs text-white shadow-md flex items-center justify-center"
                >
                  Y
                </button>
                <button 
                  onClick={() => soundFx.playCoin()}
                  className="w-9 h-9 rounded-full bg-[#9e223d] hover:bg-[#c24660] border-2 border-[#e5c158] font-pixel-heading text-xs text-white shadow-md flex items-center justify-center"
                >
                  B
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Right Side: Retro "Hello !!" Window Card (Modeled after reference image) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Hello Card */}
          <div className="pixel-box-beige p-5 rounded-sm">
            <div className="bg-[#540d1b] text-[#f5eae1] px-3 py-1 font-pixel-heading text-xs inline-block mb-3 rounded-sm border border-[#e5c158]">
              Hello !! ✨
            </div>
            
            <div className="space-y-3 font-pixel-body text-sm text-[#2e050c]">
              <div>
                <span className="font-pixel-heading text-xs text-[#9e223d] block">Player:</span>
                <span className="font-bold text-base">{profile.name}</span>
              </div>
              
              <div>
                <span className="font-pixel-heading text-xs text-[#9e223d] block">Role:</span>
                <span>{profile.role}</span>
              </div>

              <div>
                <span className="font-pixel-heading text-xs text-[#9e223d] block">Mission:</span>
                <p className="text-xs leading-relaxed">{profile.mission}</p>
              </div>

              <div>
                <span className="font-pixel-heading text-xs text-[#9e223d] block">Status:</span>
                <span className="text-xs font-semibold text-[#540d1b] bg-[#e6d3c3] px-2 py-0.5 border border-[#540d1b] inline-block">
                  {profile.status}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#d4b896] text-xs font-pixel-heading text-[#7a182d] flex justify-between items-center">
              <span>LET'S START THE GAME!</span>
              <span>🎮</span>
            </div>
          </div>

          {/* Social Quick Links */}
          <div className="pixel-box p-4 flex justify-around items-center">
            <a 
              href={profile.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              className="pixel-button text-[10px] py-1.5 px-3"
            >
              <Globe className="w-3.5 h-3.5" /> GITHUB
            </a>
            <a 
              href={profile.linkedinUrl} 
              target="_blank" 
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              className="pixel-button pixel-button-beige text-[10px] py-1.5 px-3"
            >
              LINKEDIN
            </a>
            <a 
              href={`mailto:${profile.email}`}
              onClick={() => soundFx.playClick()}
              className="pixel-button text-[10px] py-1.5 px-3"
            >
              <Mail className="w-3.5 h-3.5" /> EMAIL
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
