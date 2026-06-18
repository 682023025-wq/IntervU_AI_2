// src/features/CV/CVPage.jsx
import { useState } from 'react';
import { Navbar, BottomNav } from '../../components';
import { CVProvider } from './cvLogic';
import CVBuilder from './CVBuilder';
import './CVPage.css';

// SVG Icons
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const FileTextIcon = ({ size = 32 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" x2="8" y1="13" y2="13"/>
    <line x1="16" x2="8" y1="17" y2="17"/>
    <line x1="10" x2="8" y1="9" y2="9"/>
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);

export default function CVPage() {
  const [activeTab, setActiveTab] = useState('builder');
  const [showModal, setShowModal] = useState(false);

  const cvTemplates = [
    { id: 1, name: 'Modern', preview: 'Template modern dengan desain minimalis' },
    { id: 2, name: 'Professional', preview: 'Template profesional untuk corporate' },
    { id: 3, name: 'Creative', preview: 'Template kreatif untuk industri kreatif' },
  ];

  const savedCVs = [
    { id: 1, title: 'CV - Software Engineer', updated: '2 hari lalu', template: 'Modern' },
    { id: 2, title: 'CV - Product Manager', updated: '1 minggu lalu', template: 'Professional' },
  ];

  return (
    <CVProvider>
      <div className="cv-page-container">
        <Navbar />
        
        <div className="cv-content-wrapper">
          {/* Header */}
          <div className="cv-header">
            <div className="cv-header-left">
              <h1 className="cv-title">CV Builder</h1>
              <p className="cv-subtitle">Buat dan kelola CV profesional Anda</p>
            </div>
            <button onClick={() => setShowModal(true)} className="cv-create-btn">
              <PlusIcon />
              <span>Buat CV Baru</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="cv-tabs">
            <button
              onClick={() => setActiveTab('builder')}
              className={`cv-tab ${activeTab === 'builder' ? 'cv-tab-active' : ''}`}
            >
              Builder
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`cv-tab ${activeTab === 'templates' ? 'cv-tab-active' : ''}`}
            >
              Template
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`cv-tab ${activeTab === 'saved' ? 'cv-tab-active' : ''}`}
            >
              CV Tersimpan
            </button>
          </div>

          {/* Content */}
          <div className="cv-content">
            {activeTab === 'builder' && <CVBuilder />}

            {activeTab === 'templates' && (
              <div className="cv-templates-grid">
                {cvTemplates.map((template) => (
                  <div key={template.id} className="cv-template-card">
                    <div className="cv-template-preview">
                      <FileTextIcon size={32} />
                    </div>
                    <div className="cv-template-info">
                      <h3 className="cv-template-name">{template.name}</h3>
                      <p className="cv-template-desc">{template.preview}</p>
                      <button className="cv-template-btn">Gunakan Template</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="cv-saved-list">
                {savedCVs.map((cv) => (
                  <div key={cv.id} className="cv-saved-card">
                    <div className="cv-saved-info">
                      <div className="cv-saved-icon">
                        <FileTextIcon size={20} />
                      </div>
                      <div className="cv-saved-details">
                        <h3 className="cv-saved-title">{cv.title}</h3>
                        <p className="cv-saved-meta">Template: {cv.template} • {cv.updated}</p>
                      </div>
                    </div>
                    <div className="cv-saved-actions">
                      <button className="cv-action-btn"><EditIcon /></button>
                      <button className="cv-action-btn"><DownloadIcon /></button>
                      <button className="cv-action-btn cv-action-danger"><TrashIcon /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <BottomNav />
      </div>
    </CVProvider>
  );
}