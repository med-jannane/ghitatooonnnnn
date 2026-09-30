import React, { useEffect, useRef, useState } from 'react';
import { soundFx } from '../utils/sound';
import { Sparkles, Trophy, Play, ArrowRight, RefreshCw } from 'lucide-react';

interface MiniGameIntroProps {
  onUnlockPortfolio: () => void;
}

export const MiniGameIntro: React.FC<MiniGameIntroProps> = ({ onUnlockPortfolio }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'gameover' | 'won'>('start');

  const TARGET_SCORE = 5;

  useEffect(() => {
    if (gameState !== 'playing') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load User Custom Game Images
    const fleurImg = new Image();
    fleurImg.src = '/game/fleurquitombe.png';

    const catcherImg = new Image();
    catcherImg.src = '/game/ou il va tonber.png';

    let animId: number;
    let currentScore = score;
    let currentLives = lives;

    // Enlarged catcher for full-screen play.
    const player = {
      x: canvas.width / 2 - 90,
      y: canvas.height - 120,
      width: 180,
      height: 90,
      speed: 13
    };

    // Enlarged falling flowers for full-screen play.
    interface FallingFlower {
      x: number;
      y: number;
      width: number;
      height: number;
      speed: number;
    }

    let items: FallingFlower[] = [];

    const spawnFlower = () => {
      items.push({
        x: Math.random() * (canvas.width - 92) + 10,
        y: -80,
        width: 76,
        height: 76,
        speed: Math.random() * 1.5 + 3
      });
    };

    let spawnTimer = setInterval(spawnFlower, 750);

    let leftPressed = false;
    let rightPressed = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') leftPressed = true;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') rightPressed = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') leftPressed = false;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') rightPressed = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) * (canvas.width / rect.width);
      player.x = Math.max(0, Math.min(canvas.width - player.width, mouseX - player.width / 2));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('mousemove', handleMouseMove);

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (leftPressed && player.x > 0) player.x -= player.speed;
      if (rightPressed && player.x < canvas.width - player.width) player.x += player.speed;

      if (catcherImg.complete && catcherImg.naturalWidth !== 0) {
        ctx.drawImage(catcherImg, player.x, player.y, player.width, player.height);
      } else {
        ctx.fillStyle = '#ffafcc';
        ctx.fillRect(player.x, player.y, player.width, player.height);
      }

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        item.y += item.speed;

        if (fleurImg.complete && fleurImg.naturalWidth !== 0) {
          ctx.drawImage(fleurImg, item.x, item.y, item.width, item.height);
        } else {
          ctx.fillStyle = '#ffafcc';
          ctx.beginPath();
          ctx.arc(item.x + item.width / 2, item.y + item.height / 2, item.width / 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        if (
          item.y + item.height >= player.y + 10 &&
          item.y <= player.y + player.height &&
          item.x + item.width >= player.x - 10 &&
          item.x <= player.x + player.width + 10
        ) {
          soundFx.playCoin();
          items.splice(i, 1);
          currentScore += 1;
          setScore(currentScore);

          if (currentScore >= TARGET_SCORE) {
            soundFx.playLevelUp();
            setGameState('won');
            clearInterval(spawnTimer);
            return;
          }
          continue;
        }

        if (item.y > canvas.height) {
          items.splice(i, 1);
          currentLives -= 1;
          setLives(currentLives);

          if (currentLives <= 0) {
            setGameState('gameover');
            clearInterval(spawnTimer);
            return;
          }
        }
      }

      animId = requestAnimationFrame(gameLoop);
    };

    animId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(spawnTimer);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [gameState]);

  const startGame = () => {
    soundFx.playClick();
    setScore(0);
    setLives(3);
    setGameState('playing');
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center font-clean ${gameState === 'playing' ? 'bg-transparent p-0' : 'bg-[#1e1b4b]/55 p-4 backdrop-blur-sm sm:p-8'}`}>
      {/* The game becomes a transparent full-screen layer over the portfolio background. */}
      <div className={`relative text-center text-white ${gameState === 'playing' ? 'h-screen w-screen overflow-hidden bg-transparent p-0' : 'max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[28px] border-4 border-[#ffafcc] bg-[#1e1b4b]/95 p-6 shadow-[10px_10px_0_rgba(30,27,75,0.75),0_0_45px_rgba(255,175,204,0.28)] sm:p-12'}`}>
        
        {gameState !== 'playing' && (
          <>
            {/* Header Badge */}
            <div className="mb-6 flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#ffafcc]" />
                <span className="font-pixel text-xs uppercase tracking-widest text-[#b8f2e6] sm:text-sm">
                  GHITA'S FLOWER QUEST
                </span>
                <Sparkles className="h-5 w-5 text-[#ffafcc]" />
              </div>
            </div>

            {/* Title */}
            <h2 className="my-5 font-pixel text-2xl leading-tight text-[#ffafcc] sm:text-4xl">
              CATCH THE FLOWERS !
            </h2>
          </>
        )}

        {gameState === 'start' && (
          <div className="flex flex-col items-center space-y-8 py-6">
            <p className="mx-auto max-w-xl text-base font-medium leading-relaxed text-white sm:text-xl">
              Attrape <b className="text-[#ffafcc] text-xl font-bold">5 fleurs qui tombent</b> avec le panier de Ghita (déplace à la souris ou avec les flèches du clavier) pour débloquer le portfolio !
            </p>

            <div className="flex w-full justify-center pt-2">
              <button
                onClick={startGame}
                className="flex min-h-[72px] w-full max-w-sm items-center justify-center gap-3 rounded-[18px] border-4 border-[#1e1b4b] bg-[#b8f2e6] px-8 py-5 font-pixel text-sm font-bold text-[#1e1b4b] shadow-[7px_7px_0_#1e1b4b] transition-all hover:-translate-y-1 hover:bg-[#ffafcc] hover:shadow-[9px_9px_0_#1e1b4b] active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0_#1e1b4b] cursor-pointer sm:text-base"
              >
                <Play className="h-6 w-6 fill-[#1e1b4b]" />
                <span>COMMENCER À JOUER</span>
              </button>
            </div>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="relative h-screen w-screen">
            <div className="absolute left-1/2 top-5 z-10 flex w-[min(92vw,720px)] -translate-x-1/2 justify-between rounded-xl border-2 border-[#b8f2e6] bg-[#1e1b4b]/80 px-4 py-3 font-pixel text-xs text-[#b8f2e6] shadow-lg sm:top-8 sm:text-sm">
              <span>FLEURS ATTRAPÉES: <span className="text-[#ffafcc] font-bold">{score} / {TARGET_SCORE}</span></span>
              <span>VIES: <span className="text-[#ffafcc]">{lives} / 3</span></span>
            </div>

            <canvas
              ref={canvasRef}
              width={720}
              height={400}
              className="absolute inset-0 block h-full w-full cursor-crosshair"
            />
          </div>
        )}

        {gameState === 'won' && (
          <div className="flex flex-col items-center space-y-8 py-10 text-center">
            <Trophy className="h-28 w-28 animate-pulse text-[#ffafcc] sm:h-32 sm:w-32" />
            <h3 className="font-pixel text-xl leading-relaxed text-white sm:text-3xl">VICTOIRE ! PORTFOLIO DÉBLOQUÉ</h3>
            <button
              onClick={() => {
                soundFx.playLevelUp();
                onUnlockPortfolio();
              }}
              className="flex min-h-[78px] w-full max-w-md items-center justify-center gap-4 rounded-[18px] border-4 border-[#1e1b4b] bg-[#ffafcc] px-8 py-5 font-pixel text-sm font-bold text-[#1e1b4b] shadow-[8px_8px_0_#1e1b4b] transition-all hover:-translate-y-1 hover:bg-[#b8f2e6] hover:shadow-[10px_10px_0_#1e1b4b] active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0_#1e1b4b] cursor-pointer sm:text-base"
            >
              <span>ENTRER DANS LE PORTFOLIO</span>
              <ArrowRight className="h-7 w-7" />
            </button>
          </div>
        )}

        {gameState === 'gameover' && (
          <div className="space-y-6 py-6">
            <h3 className="font-pixel text-xl sm:text-2xl text-[#ffafcc]">GAME OVER !</h3>
            <p className="text-sm text-white">Réessaie pour débloquer le portfolio !</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={startGame}
                className="font-pixel text-xs py-3.5 px-6 bg-[#a2d2ff] text-[#1e1b4b] border-2 border-white rounded-xl flex items-center gap-2 cursor-pointer hover:bg-[#ffafcc] transition-all font-bold"
              >
                <RefreshCw className="w-4 h-4" />
                <span>REJOUER</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
