import React, { useState, useRef, useEffect } from 'react';
import { HeroBanner } from './components/HeroBanner';
import { Level01Section } from './components/Level01Section';
import { ConnectedCardsRow } from './components/ConnectedCardsRow';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { LanguagesRadar } from './components/LanguagesRadar';
import { CertificationsCard, HobbiesCard } from './components/HobbiesCertifications';
import { MarioStageFloor } from './components/MarioStageFloor';
import { Missions } from './components/Missions';
import { ContactTerminal } from './components/ContactTerminal';
import { DataCustomizerModal } from './components/DataCustomizerModal';
import { CoverScreen } from './components/CoverScreen';
import { MiniGameIntro } from './components/MiniGameIntro';
import { GhitaPettingCatMascot } from './components/GhitaPettingCatMascot';
import { initialPortfolioData } from './data/initialData';
import { UserPortfolioProfile } from './types';
import { soundFx } from './utils/sound';
import { ArrowLeft, ArrowRight, RotateCcw, User, ShieldCheck, FolderGit2, Mail, Music2, Pause, Play } from 'lucide-react';

export const App: React.FC = () => {
  const [profile, setProfile] = useState<UserPortfolioProfile>(initialPortfolioData);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const backgroundMusicRef = useRef<HTMLAudioElement>(null);
  
  // App Navigation Flow: 'cover' -> 'game' -> 'portfolio'
  const [appState, setAppState] = useState<'cover' | 'game' | 'portfolio'>('cover');

  // Portfolio Step-by-Step Pages: 1 (About Me) -> 2 (Skills & Degrees) -> 3 (My Projects) -> 4 (Contact Me)
  const [portfolioStep, setPortfolioStep] = useState<1 | 2 | 3 | 4>(1);

  const consoleSectionRef = useRef<HTMLDivElement>(null);

  const startBackgroundMusic = () => {
    const audio = backgroundMusicRef.current;
    if (!audio) return;
    audio.volume = 0.4;
    void audio.play().then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false));
  };

  useEffect(() => {
    startBackgroundMusic();
  }, []);

  const toggleBackgroundMusic = () => {
    const audio = backgroundMusicRef.current;
    if (!audio) return;
    if (musicPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setMusicPlaying(false);
      return;
    }
    startBackgroundMusic();
  };

  const handleNextStep = () => {
    soundFx.playLevelUp();
    setPortfolioStep((prev) => (prev < 4 ? (prev + 1) as 1 | 2 | 3 | 4 : 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    soundFx.playClick();
    setPortfolioStep((prev) => (prev > 1 ? (prev - 1) as 1 | 2 | 3 | 4 : 4));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#480ca8] text-[#ffffff] font-clean relative bg-pixel-wallpaper flex flex-col justify-between">
      
      {/* 1. Page de Garde / Cover Screen */}
      {appState === 'cover' && (
        <CoverScreen
          onStartGame={() => { startBackgroundMusic(); setAppState('game'); }}
          onDirectAccess={() => { startBackgroundMusic(); setAppState('portfolio'); }}
        />
      )}

      {/* 2. Mini-Jeu des Fleurs qui tombent */}
      {appState === 'game' && (
        <MiniGameIntro onUnlockPortfolio={() => setAppState('portfolio')} />
      )}

      {/* 3. Main Portfolio Multi-Step Navigation Pages */}
      <audio
        ref={backgroundMusicRef}
        src="/(FREE)%20pinkpantheress%20Type%20Beat%20-%20Pretty.mp3"
        loop
        preload="auto"
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
      />

      <button
        type="button"
        className="music-control"
        onClick={toggleBackgroundMusic}
        aria-label={musicPlaying ? 'Arrêter la musique' : 'Lancer la musique'}
        title={musicPlaying ? 'Arrêter la musique' : 'Lancer la musique'}
      >
        <Music2 className="music-control-note" />
        {musicPlaying ? <Pause /> : <Play />}
        <span>{musicPlaying ? 'MUSIQUE ON' : 'MUSIQUE OFF'}</span>
      </button>

      {appState === 'portfolio' && (
        <div className="portfolio-wrapper portfolio-theme">
          
          {/* Top Step Navigation Progress Bar */}
          <div className="step-nav-bar">
            <button 
              onClick={() => { soundFx.playClick(); setPortfolioStep(1); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className={`step-nav-item ${portfolioStep === 1 ? 'active' : ''}`}
            >
              <User className="w-4 h-4" />
              <span>1. ABOUT ME</span>
            </button>
            <button 
              onClick={() => { soundFx.playClick(); setPortfolioStep(2); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className={`step-nav-item ${portfolioStep === 2 ? 'active' : ''}`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>2. SKILLS & DEGREES</span>
            </button>
            <button 
              onClick={() => { soundFx.playClick(); setPortfolioStep(3); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className={`step-nav-item ${portfolioStep === 3 ? 'active' : ''}`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>3. MY PROJECTS</span>
            </button>
            <button 
              onClick={() => { soundFx.playClick(); setPortfolioStep(4); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className={`step-nav-item ${portfolioStep === 4 ? 'active' : ''}`}
            >
              <Mail className="w-4 h-4" />
              <span>4. CONTACT ME</span>
            </button>
          </div>

          {/* PAGE 1: ABOUT ME */}
          {portfolioStep === 1 && (
            <div>
              <HeroBanner />
              <div className="page-one-intro-gap" aria-hidden="true" />
              <Level01Section profile={profile} consoleRef={consoleSectionRef} />
            </div>
          )}

          {/* PAGE 2: SKILLS & DEGREES */}
          {portfolioStep === 2 && (
            <div className="page-two-content flex flex-col gap-12">
              <div className="p-game-section-head">
                <span className="section-badge-pink">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>PAGE 02 ★ COMPÉTENCES & FORMATIONS</span>
                </span>
                <h2 className="section-main-title mt-2">PLAYER DEVELOPMENT HUB</h2>
                <p className="text-base font-medium text-white">Mon arsenal technique, mon parcours, mes expériences et les compétences qui construisent mon aventure professionnelle.</p>
              </div>

              <ConnectedCardsRow profile={profile} />
              <ExperienceTimeline experiences={profile.experiences} />
              
              <div className="p2-bottom-grid">
                <LanguagesRadar languages={profile.languages} />
                <CertificationsCard certifications={profile.certifications} />
                <HobbiesCard hobbies={profile.hobbies} />
              </div>
            </div>
          )}

          {/* PAGE 3: MY PROJECTS */}
          {portfolioStep === 3 && (
            <div>
              <Missions projects={profile.projects} />
            </div>
          )}

          {/* PAGE 4: CONTACT ME */}
          {portfolioStep === 4 && (
            <div className="flex flex-col gap-12">
              <ContactTerminal recipientEmail={profile.email} />
              <MarioStageFloor 
                onOpenMissions={() => setPortfolioStep(3)}
                onOpenContact={() => setPortfolioStep(4)}
              />
            </div>
          )}

          {/* Bottom Page Navigation Controls (CONTINUER / PRÉCÉDENT) */}
          <div className="page-nav-controls">
            {portfolioStep > 1 ? (
              <button 
                onClick={handlePrevStep}
                className="btn-outline-teal"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>PRÉCÉDENT</span>
              </button>
            ) : <div />}

            {portfolioStep < 4 ? (
              <button 
                onClick={handleNextStep}
                className="btn-primary-pink animate-pulse text-sm py-4 px-8"
              >
                <span>CONTINUER (PAGE {portfolioStep + 1})</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={() => {
                  soundFx.playLevelUp();
                  setPortfolioStep(1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-secondary-purple text-sm py-4 px-8"
              >
                <span>REVENIR À LA PAGE 1</span>
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      )}

      {/* Data Customizer Modal */}
      <DataCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profileData={profile}
        onUpdateProfile={(updated) => setProfile(updated)}
      />

      {/* Petting Cat Mascot Fixed at base of Street Lamp on Sidewalk (Red Arrow Location) */}
      {appState === 'portfolio' && (
        <div 
          className={`portfolio-mascot fixed bottom-2 z-40 cursor-pointer transition-transform hover:scale-105 sm:bottom-4 ${portfolioStep === 2 ? 'left-2 scale-75 sm:left-6' : 'left-2 sm:left-6'}`}
          onClick={() => soundFx.playClick()}
          title="Ghita caresse le chat"
        >
          <GhitaPettingCatMascot />
        </div>
      )}

    </div>
  );
};

export default App;
