import React, { useState } from 'react';
import { UserPortfolioProfile } from '../types';
import { X, Save, Copy, Check, FileText, UserCheck, Sparkles, Heart } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface DataCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileData: UserPortfolioProfile;
  onUpdateProfile: (updated: UserPortfolioProfile) => void;
}

export const DataCustomizerModal: React.FC<DataCustomizerModalProps> = ({
  isOpen,
  onClose,
  profileData,
  onUpdateProfile
}) => {
  const [formData, setFormData] = useState<UserPortfolioProfile>(profileData);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'checklist' | 'edit'>('checklist');

  if (!isOpen) return null;

  const handleSave = () => {
    soundFx.playLevelUp();
    onUpdateProfile(formData);
    onClose();
  };

  const handleCopyJSON = () => {
    soundFx.playCoin();
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#fdf5eb] text-[#2b050c] border-4 border-[#ff66b2] max-w-2xl w-full p-5 rounded-md relative shadow-2xl my-8">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-[#5c0d1e] pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#b32443]" />
            <h3 className="font-pixel text-xs text-[#5c0d1e]">
              INFORMATIONS À FOURNIR & ÉDITION
            </h3>
          </div>
          <button 
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-1 bg-[#5c0d1e] text-white border border-[#ffd700] hover:bg-[#85182d]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('checklist');
            }}
            className={`pixel-button-style text-[9px] py-1 px-2.5 ${activeTab === 'checklist' ? 'bg-[#00ff99] text-black border-[#00ff99]' : ''}`}
          >
            📋 LISTE À FOURNIR
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('edit');
            }}
            className={`pixel-button-style text-[9px] py-1 px-2.5 ${activeTab === 'edit' ? 'bg-[#00ff99] text-black border-[#00ff99]' : ''}`}
          >
            ✏️ ÉDITEUR EN DIRECT
          </button>
        </div>

        {/* Content Body */}
        <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-3 text-xs">
          
          {activeTab === 'checklist' ? (
            <div className="space-y-3">
              
              <div className="p-3 bg-[#f5eae1] border border-[#5c0d1e] rounded space-y-1">
                <h4 className="font-pixel text-[10px] text-[#b32443] flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5" /> 1. PROFIL & INFORMATIONS
                </h4>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-[#5c0d1e]">
                  <li><b>Nom & Prénom</b> (Ex: Meera Manoj)</li>
                  <li><b>Titre / Métier</b> (Ex: UI/UX Designer)</li>
                  <li><b>Bio & Slogan / Mission</b></li>
                  <li><b>Localisation & Email de contact</b></li>
                </ul>
              </div>

              <div className="p-3 bg-[#f5eae1] border border-[#5c0d1e] rounded space-y-1">
                <h4 className="font-pixel text-[10px] text-[#b32443] flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" /> 2. OUTILS & COMPÉTENCES
                </h4>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-[#5c0d1e]">
                  <li><b>Logiciels (Weapons)</b> : Figma, Procreate, React, Blender...</li>
                  <li><b>Compétences clés</b> : UI Design, Research, Prototyping...</li>
                  <li><b>Diplômes & Parcours</b> : Écoles, Années</li>
                </ul>
              </div>

              <div className="p-3 bg-[#f5eae1] border border-[#5c0d1e] rounded space-y-1">
                <h4 className="font-pixel text-[10px] text-[#b32443] flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-[#ff66b2]" /> 3. PROJETS & LIENS
                </h4>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-[#5c0d1e]">
                  <li><b>Vos Projets</b> : Titre, description, démo ou images</li>
                  <li><b>Liens sociaux</b> : GitHub, LinkedIn, Email</li>
                </ul>
              </div>

            </div>
          ) : (
            <div className="space-y-3">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-[#5c0d1e] block mb-1">Nom / Prénom</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-1.5 bg-white border border-[#5c0d1e] rounded text-xs"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#5c0d1e] block mb-1">Rôle / Intitulé</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full p-1.5 bg-white border border-[#5c0d1e] rounded text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-[#5c0d1e] block mb-1">Bio</label>
                <textarea
                  rows={2}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full p-1.5 bg-white border border-[#5c0d1e] rounded text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-[#5c0d1e] block mb-1">Mission</label>
                <textarea
                  rows={2}
                  value={formData.mission}
                  onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                  className="w-full p-1.5 bg-white border border-[#5c0d1e] rounded text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-[#5c0d1e] block mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-1.5 bg-white border border-[#5c0d1e] rounded text-xs"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#5c0d1e] block mb-1">Localisation</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full p-1.5 bg-white border border-[#5c0d1e] rounded text-xs"
                  />
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="pt-3 mt-3 border-t border-[#5c0d1e] flex flex-wrap justify-between items-center gap-2">
          <button
            onClick={handleCopyJSON}
            className="pixel-button-style text-[9px] py-1 px-2.5 flex items-center gap-1"
          >
            {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'COPIÉ !' : 'COPIER MON JSON'}</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="pixel-button-style text-[9px] py-1 px-2.5 bg-[#2d050c]"
            >
              ANNULER
            </button>
            <button
              onClick={handleSave}
              className="pixel-button-style text-[9px] py-1 px-3 bg-[#052417] text-[#00ff99] border-[#00ff99]"
            >
              <Save className="w-3 h-3 text-[#00ff99]" />
              <span>APPLIQUER</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
