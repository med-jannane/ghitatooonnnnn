import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface FooterProps {
  name: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export const Footer: React.FC<FooterProps> = ({ name, githubUrl, linkedinUrl, email }) => {
  const scrollToTop = () => {
    soundFx.playLevelUp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#120307]/95 border-t-4 border-[#85182d] py-12 px-6 mt-20 text-[#f5ebe1] font-clean relative z-30 shadow-2xl backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Info */}
        <div className="text-center md:text-left">
          <div className="font-pixel text-sm text-[#00ff99] mb-2 tracking-wider flex items-center justify-center md:justify-start gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd700]" />
            <span>{name.toUpperCase()} ★ PORTFOLIO 2026</span>
          </div>
          <p className="text-sm text-[#ffd700] font-medium">
            Étudiante Ingénieure IIR (EMSI) ★ Software & Full-Stack Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => soundFx.playClick()}
            className="p-3 bg-[#380a13] border-2 border-[#ffd700] text-white rounded-xl hover:bg-[#00ff99] hover:text-black transition-all hover:scale-110 shadow-lg"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => soundFx.playClick()}
            className="p-3 bg-[#380a13] border-2 border-[#ffd700] text-white rounded-xl hover:bg-[#00ff99] hover:text-black transition-all hover:scale-110 shadow-lg"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${email}`}
            onClick={() => soundFx.playClick()}
            className="p-3 bg-[#380a13] border-2 border-[#ffd700] text-white rounded-xl hover:bg-[#00ff99] hover:text-black transition-all hover:scale-110 shadow-lg"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="pixel-button-style text-xs py-3 px-6 bg-[#380a13] text-[#ffd700] border-[#ffd700] hover:bg-[#ffd700] hover:text-black cursor-pointer flex items-center gap-2 rounded-xl shadow-lg"
        >
          <span>RETOUR EN HAUT</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-[#85182d]/50 text-center text-xs text-[#e6d3c3] flex items-center justify-center gap-2">
        <span>© 2026 Ghita Harzafi. Conçu avec passion</span>
        <Heart className="w-4 h-4 text-[#ff66b2] fill-[#ff66b2] animate-pulse" />
        <span>en React & TypeScript</span>
      </div>
    </footer>
  );
};
