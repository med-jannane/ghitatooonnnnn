import React, { useState } from 'react';
import { MissionProject } from '../types';
import { ExternalLink, Github, Trophy, Eye, X, Sparkles, FolderGit2, Code } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const Missions: React.FC<{ projects: MissionProject[] }> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<MissionProject | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <div className="w-full text-left font-clean text-white">
      
      {/* Page Header */}
      <div className="p3-page-heading">
        <div>
          <span className="section-badge-pink p3-page-badge">
            <FolderGit2 className="w-4 h-4 text-[#1e1b4b]" />
            <span>PAGE 03 ★ MY PROJECTS & PORTFOLIO QUESTS</span>
          </span>
          <h2 className="section-main-title mt-2">
            MES PROJETS & RÉALISATIONS
          </h2>
          <p className="text-base text-white font-medium">Découvrez mes applications Full-Stack, projets PHP/MySQL, manipulation JavaScript DOM et intégrations réactives.</p>
        </div>
        
        {/* Category Filters */}
        <div className="p3-filter-board">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setFilter(cat);
              }}
              className={`p3-filter-button font-pixel text-[10px] py-2.5 px-4 transition-all cursor-pointer font-bold ${
                filter === cat 
                  ? 'bg-[#ffafcc] text-[#1e1b4b] border-white shadow' 
                  : 'bg-[#1e1b4b] text-white border-[#a2d2ff] hover:bg-[#a2d2ff] hover:text-[#1e1b4b]'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className={`p3-project-card ${project.featured ? 'p3-project-featured' : ''}`}
          >
            <div>
              {/* Image Banner */}
              <div className="p3-project-image">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                
                <div className="p3-xp-stamp">
                  <Trophy className="w-3.5 h-3.5 text-[#b8f2e6]" />
                  <span>+{project.xpReward} XP</span>
                </div>

                {project.featured && (
                  <div className="p3-feature-stamp">
                    <Sparkles className="w-3.5 h-3.5 text-[#1e1b4b]" />
                    <span>FEATURED</span>
                  </div>
                )}
              </div>

              <span className="p3-project-category">
                {project.category}
              </span>
              <h3 className="p3-project-title">
                {project.title}
              </h3>
              
              <p className="p3-project-description line-clamp-3">
                {project.description}
              </p>

              <div className="p3-project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="p3-project-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p3-project-actions">
              <button
                onClick={() => {
                  soundFx.playCoin();
                  setSelectedProject(project);
                }}
                className="p3-detail-button btn-outline-mint text-xs py-2 px-3 flex items-center gap-1.5"
              >
                <Eye className="w-4 h-4 text-[#1e1b4b]" />
                <span>DETAILS</span>
              </button>

              <div className="flex items-center gap-2">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="p3-link-button p3-code-link"
                    title="View Code"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>View Code</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="p3-link-button p3-demo-link"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Detailed Preview */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1e1b4b]/90 backdrop-blur-md">
          <div className="p3-modal-card">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 bg-[#ffafcc] text-[#1e1b4b] border-2 border-white rounded-xl hover:bg-[#b8f2e6] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#1e1b4b]" />
              <span className="font-pixel text-xs text-[#1e1b4b] uppercase font-bold">{selectedProject.category}</span>
            </div>

            <h3 className="font-pixel text-xl text-[#1e1b4b] mb-4">{selectedProject.title}</h3>

            <div className="h-60 w-full mb-5 border-3 border-[#a2d2ff] overflow-hidden rounded-2xl bg-[#1e1b4b] shadow-inner">
              <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-base text-[#1e1b4b] leading-relaxed mb-6 font-medium">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap items-center justify-between pt-4 border-t border-[#ffafcc] gap-4">
              <div className="flex items-center gap-2">
                {selectedProject.codeUrl && (
                  <a 
                    href={selectedProject.codeUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-primary-pink text-xs py-2.5 px-4"
                  >
                    <Code className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-secondary-blue text-xs py-2.5 px-4"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="btn-outline-mint text-xs py-2 px-5"
              >
                FERMER
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
