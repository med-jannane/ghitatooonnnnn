import React, { useState } from 'react';
import { Send, Terminal, CheckCircle, Mail, User, MessageSquare, ShieldAlert } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const ContactTerminal: React.FC<{ recipientEmail: string }> = ({ recipientEmail }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playCoin();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      soundFx.playLevelUp();
    }, 1200);
  };

  return (
    <div className="w-full text-left font-clean text-white mb-12">
      
      {/* Header Banner */}
      <div className="p4-page-heading">
        <span className="section-badge-pink">
          <ShieldAlert className="w-4 h-4 text-[#1e1b4b]" />
          <span>PAGE 04 ★ CONTACT & FINAL QUEST</span>
        </span>
        <h2 className="section-main-title mt-2">
          CONTACT ME & COLLABORATION
        </h2>
        <p className="text-base text-white font-medium">Envoyez-moi un message direct pour discuter d'un projet, d'un stage ou d'une opportunité !</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Terminal Screen */}
        <div className="p4-terminal-panel lg:col-span-5">
          <div className="flex items-center gap-3 mb-6 border-b border-[#a2d2ff] pb-3">
            <Terminal className="w-5 h-5 text-[#b8f2e6]" />
            <span className="font-pixel text-xs text-[#b8f2e6]">CONNECT_TERMINAL.EXE</span>
          </div>

          <div className="font-clean text-sm text-white space-y-4 leading-relaxed">
            <p className="text-[#ffafcc] font-pixel text-xs font-bold">▶ SYSTEM READY FOR INPUT</p>
            <p className="font-medium text-base">Une opportunité de stage/alternance, une idée de projet ou envie d'échanger ?</p>
            
            <div className="p-4 bg-[#1e1b4b] border border-[#a2d2ff] rounded-xl text-sm">
              <p className="font-bold mb-1 text-[#b8f2e6] font-pixel text-xs">MAIL DIRECT:</p>
              <a href={`mailto:${recipientEmail}`} className="underline text-white hover:text-[#ffafcc] font-mono text-sm">
                {recipientEmail}
              </a>
            </div>

            <p className="text-xs text-[#b8f2e6] italic">
              Réponse garantie sous 24h avec accusé de réception.
            </p>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="p4-contact-form lg:col-span-7">
          {sent ? (
            <div className="text-center py-10 space-y-4">
              <div className="inline-flex p-4 bg-[#b8f2e6] rounded-full text-[#1e1b4b] animate-bounce border-2 border-white">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-pixel text-lg text-[#1e1b4b]">MESSAGE ENVOYÉ !</h3>
              <p className="font-clean text-base text-[#1e1b4b] font-medium">
                Votre message a été transmis avec succès. Merci !
              </p>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setSent(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="btn-primary-pink text-xs py-3 px-6 mt-4"
              >
                ENVOYER UN AUTRE MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-clean text-base">
              
              <div>
                <label className="font-pixel text-xs text-[#1e1b4b] block mb-2 flex items-center gap-2 font-bold">
                  <User className="w-4 h-4 text-[#1e1b4b]" />
                  <span>VOTRE NOM / PSEUDO</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Clara - Recruteur / Tech Lead"
                  className="p4-input w-full p-4 bg-white border-2 border-[#a2d2ff] focus:border-[#ffafcc] outline-none text-[#1e1b4b] font-clean text-base font-medium"
                />
              </div>

              <div>
                <label className="font-pixel text-xs text-[#1e1b4b] block mb-2 flex items-center gap-2 font-bold">
                  <Mail className="w-4 h-4 text-[#1e1b4b]" />
                  <span>VOTRE EMAIL</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="nom@entreprise.com"
                  className="p4-input w-full p-4 bg-white border-2 border-[#a2d2ff] focus:border-[#ffafcc] outline-none text-[#1e1b4b] font-clean text-base font-medium"
                />
              </div>

              <div>
                <label className="font-pixel text-xs text-[#1e1b4b] block mb-2 flex items-center gap-2 font-bold">
                  <MessageSquare className="w-4 h-4 text-[#1e1b4b]" />
                  <span>VOTRE MESSAGE</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Bonjour Ghita, votre profil nous intéresse pour..."
                  className="p4-input w-full p-4 bg-white border-2 border-[#a2d2ff] focus:border-[#ffafcc] outline-none text-[#1e1b4b] font-clean text-base resize-none font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  onClick={() => soundFx.playClick()}
                  className="btn-primary-pink w-full text-xs py-4"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'TRANSMISSION EN COURS...' : 'ENVOYER LE MESSAGE'}</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>

    </div>
  );
};
