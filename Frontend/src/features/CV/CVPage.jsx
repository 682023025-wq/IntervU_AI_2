// src/features/CV/CVPage.jsx
import { useState } from 'react';
import { Navbar, BottomNav } from '../../components';
import { CVProvider } from './cvLogic';
import CVBuilder from './CVBuilder';
import CVPreview from './CVPreview';
import SettingsPanel from './templates/SettingsPanel';
import './CVPage.css';

// Icons
const EyeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>);
const SettingsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>);

function CVPageContent() {
  const [activeTab, setActiveTab] = useState('builder');

  return (
    <div className="cv-page-container">
      <Navbar />
      <div className="cv-content-wrapper">
        <div className="cv-header">
          <div className="cv-header-left">
            <h1 className="cv-title">CV Builder</h1>
            <p className="cv-subtitle">Buat dan kelola CV profesional Anda</p>
          </div>
        </div>

        {/* Hanya 3 Tab Sekarang */}
        <div className="cv-tabs">
          <button onClick={() => setActiveTab('builder')} className={`cv-tab ${activeTab === 'builder' ? 'cv-tab-active' : ''}`}>
            Builder
          </button>
          <button onClick={() => setActiveTab('preview')} className={`cv-tab cv-tab-preview-only ${activeTab === 'preview' ? 'cv-tab-active' : ''}`}>
            <EyeIcon /><span>Preview</span>
          </button>
          <button onClick={() => setActiveTab('settings')} className={`cv-tab ${activeTab === 'settings' ? 'cv-tab-active' : ''}`}>
            <SettingsIcon /><span>Pengaturan</span>
          </button>
        </div>

        <div className="cv-content">
          {activeTab === 'builder' && <CVBuilder />}
          {activeTab === 'preview' && <CVPreview />}
          {activeTab === 'settings' && <SettingsPanel />}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default function CVPage() {
  return (
    <CVProvider>
      <CVPageContent />
    </CVProvider>
  );
}