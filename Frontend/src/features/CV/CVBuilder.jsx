// src/features/CV/CVBuilder.jsx
import { useState, useEffect, useRef } from 'react';
import { useCV } from './cvLogic';
import CVForm from './CVForm';
import CVPreview from './CVPreview';
import './CVBuilder.css';

// ===== SVG ICONS =====
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'block'}}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);

const SaveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
    <polyline points="17 21 17 13 7 13 7 21"/>
    <polyline points="7 3 7 8 15 8"/>
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export default function CVBuilder() {
  const { state, setCurrentStep, exportCVData } = useCV();
  const { currentStep, cvData, selectedTemplate } = state;
  
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [fabPosition, setFabPosition] = useState({ x: 0, y: 0 });
  const [isFabDragging, setIsFabDragging] = useState(false);
  const [fabDragOffset, setFabDragOffset] = useState({ x: 0, y: 0 });
  const [isLandscape, setIsLandscape] = useState(false);
  
  const isDraggingRef = useRef(false);
  const isFabDraggingRef = useRef(false);
  const fabStartPosRef = useRef({ x: 0, y: 0 });
  
  const NAVBAR_HEIGHT = 64;
  const BOTTOM_NAV_HEIGHT = 70;
  const FAB_SIZE = 60;
  const FAB_PADDING = 16;
  
  const getPanelDimensions = () => {
    if (isLandscape) return { width: Math.min(280, window.innerWidth - 20), height: Math.min(320, window.innerHeight - NAVBAR_HEIGHT) };
    return { width: 220, height: 300 };
  };

  const panelDimensions = getPanelDimensions();

  useEffect(() => {
    const defaultFab = { x: window.innerWidth - FAB_SIZE - FAB_PADDING, y: window.innerHeight - FAB_SIZE - BOTTOM_NAV_HEIGHT - FAB_PADDING };
    setFabPosition(defaultFab);
    fabStartPosRef.current = defaultFab;
    setPosition({ x: Math.max(0, window.innerWidth - panelDimensions.width - FAB_PADDING), y: Math.max(NAVBAR_HEIGHT, window.innerHeight - panelDimensions.height - BOTTOM_NAV_HEIGHT - FAB_SIZE - FAB_PADDING - 10) });
  }, []);

  useEffect(() => {
    const handleOrientationChange = () => {
      const landscape = window.innerWidth > window.innerHeight;
      setIsLandscape(landscape);
      const newFabPos = { x: window.innerWidth - FAB_SIZE - FAB_PADDING, y: window.innerHeight - FAB_SIZE - BOTTOM_NAV_HEIGHT - FAB_PADDING };
      setFabPosition(newFabPos);
      fabStartPosRef.current = newFabPos;
    };
    handleOrientationChange();
    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => { window.removeEventListener('resize', handleOrientationChange); window.removeEventListener('orientationchange', handleOrientationChange); };
  }, []);

  useEffect(() => {
    if (isDragging || isFabDragging) { document.body.style.overflow = 'hidden'; document.body.style.touchAction = 'none'; }
    else { document.body.style.overflow = ''; document.body.style.touchAction = ''; }
    return () => { document.body.style.overflow = ''; document.body.style.touchAction = ''; };
  }, [isDragging, isFabDragging]);

  const handleDragStart = (e) => {
    e.stopPropagation(); e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    isDraggingRef.current = true; setIsDragging(true);
    setDragOffset({ x: clientX - position.x, y: clientY - position.y });
  };

  const handleDragMove = (e) => {
    if (!isDraggingRef.current) return; e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const newX = clientX - dragOffset.x; const newY = clientY - dragOffset.y;
    const maxX = window.innerWidth - panelDimensions.width; const maxY = window.innerHeight - panelDimensions.height - BOTTOM_NAV_HEIGHT;
    setPosition({ x: Math.max(0, Math.min(newX, maxX)), y: Math.max(NAVBAR_HEIGHT, Math.min(newY, maxY)) });
  };

  const handleDragEnd = () => { isDraggingRef.current = false; setIsDragging(false); };

  const handleFabDragStart = (e) => {
    e.stopPropagation(); e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    isFabDraggingRef.current = true; setIsFabDragging(true);
    setFabDragOffset({ x: clientX - fabPosition.x, y: clientY - fabPosition.y });
  };

  const handleFabDragMove = (e) => {
    if (!isFabDraggingRef.current) return; e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const newX = clientX - fabDragOffset.x; const newY = clientY - fabDragOffset.y;
    const minX = FAB_PADDING; const maxX = window.innerWidth - FAB_SIZE - FAB_PADDING;
    const minY = NAVBAR_HEIGHT + FAB_PADDING; const maxY = window.innerHeight - FAB_SIZE - BOTTOM_NAV_HEIGHT - FAB_PADDING;
    const newPos = { x: Math.max(minX, Math.min(newX, maxX)), y: Math.max(minY, Math.min(newY, maxY)) };
    setFabPosition(newPos); fabStartPosRef.current = newPos;
  };

  const handleFabDragEnd = () => { isFabDraggingRef.current = false; setIsFabDragging(false); };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDragMove, { passive: false }); document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleDragMove, { passive: false }); document.addEventListener('touchend', handleDragEnd);
    }
    return () => { document.removeEventListener('mousemove', handleDragMove); document.removeEventListener('mouseup', handleDragEnd); document.removeEventListener('touchmove', handleDragMove); document.removeEventListener('touchend', handleDragEnd); };
  }, [isDragging, dragOffset, panelDimensions]);

  useEffect(() => {
    if (isFabDragging) {
      document.addEventListener('mousemove', handleFabDragMove, { passive: false }); document.addEventListener('mouseup', handleFabDragEnd);
      document.addEventListener('touchmove', handleFabDragMove, { passive: false }); document.addEventListener('touchend', handleFabDragEnd);
    }
    return () => { document.removeEventListener('mousemove', handleFabDragMove); document.removeEventListener('mouseup', handleFabDragEnd); document.removeEventListener('touchmove', handleFabDragMove); document.removeEventListener('touchend', handleFabDragEnd); };
  }, [isFabDragging, fabDragOffset]);

  const handleTogglePanel = () => {
    if (isChatOpen) setIsChatOpen(false);
    else {
      setIsChatOpen(true);
      const landscape = window.innerWidth > window.innerHeight;
      const w = landscape ? 280 : 220; const h = landscape ? 320 : 300;
      setPosition({ x: Math.max(0, fabStartPosRef.current.x - w + FAB_SIZE), y: Math.max(NAVBAR_HEIGHT, fabStartPosRef.current.y - h) });
    }
  };

  const handleSave = () => {
    exportCVData();
    alert('CV berhasil disimpan!');
  };
  
  const handleDownloadPDF = () => alert('Fitur download PDF akan segera hadir!');

  const steps = [
    { id: 1, name: 'Info Pribadi' },
    { id: 2, name: 'Skill' },
    { id: 3, name: 'Pengalaman' },
    { id: 4, name: 'Organisasi' },
    { id: 5, name: 'Pendidikan' },
    { id: 6, name: 'Proyek' },
  ];

  return (
    <div className="cv-builder-container">
      <div className="cv-builder-grid">
        <div className="cv-form-column">
          <div className="cv-form-card">
            <div className="cv-progress-section">
              <div className="cv-progress-steps">
                {steps.map((step) => (
                  <button key={step.id} onClick={() => setCurrentStep(step.id)} className="cv-step-btn">
                    <div className={`cv-step-circle ${currentStep >= step.id ? 'cv-step-active' : ''}`}>
                      {currentStep >= step.id ? <CheckIcon /> : <span>{step.id}</span>}
                    </div>
                    <span className={`cv-step-label ${currentStep >= step.id ? 'cv-step-label-active' : ''}`}>
                      {step.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="cv-form-body">
              <CVForm />
            </div>
          </div>
        </div>

        <div className="cv-preview-column">
          <div className="cv-preview-card">
            <div className="cv-preview-header">
              <div className="cv-preview-title-wrap">
                <div className="cv-preview-icon"><EyeIcon /></div>
                <h3 className="cv-preview-title">Preview CV</h3>
              </div>
              <span className="cv-preview-template-badge">
                {selectedTemplate === 'modern' ? 'Modern' : 'Classic'}
              </span>
            </div>
            <div className="cv-preview-body">
              <CVPreview cvData={cvData} template={selectedTemplate} />
            </div>
          </div>
        </div>
      </div>

      {isChatOpen && (
        <div 
          className="cv-mobile-draggable-panel"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${panelDimensions.width}px`,
            height: `${panelDimensions.height}px`
          }}
        >
          <div className="cv-mobile-panel-inner">
            <div 
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
              className="cv-mobile-panel-header"
            >
              <div className="cv-mobile-panel-title-wrap">
                <div className="cv-mobile-panel-icon"><EyeIcon /></div>
                <div className="cv-mobile-panel-text">
                  <h3 className="cv-mobile-panel-title">Preview CV</h3>
                  <p className="cv-mobile-panel-subtitle">Geser untuk pindah posisi</p>
                </div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setIsChatOpen(false); }}
                className="cv-mobile-panel-close"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="cv-mobile-panel-content">
              <div className="cv-mobile-preview-wrap">
                <CVPreview cvData={cvData} template={selectedTemplate} />
              </div>
            </div>
            <div className="cv-mobile-panel-footer">
              <button onClick={handleSave} className="cv-mobile-action-btn cv-mobile-btn-primary">
                <SaveIcon /> Simpan
              </button>
              <button onClick={handleDownloadPDF} className="cv-mobile-action-btn cv-mobile-btn-secondary">
                <DownloadIcon /> PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {!isChatOpen && (
        <button
          onMouseDown={handleFabDragStart}
          onTouchStart={handleFabDragStart}
          onClick={handleTogglePanel}
          className="cv-fab-btn"
          style={{
            left: `${fabPosition.x}px`,
            top: `${fabPosition.y}px`,
            width: `${FAB_SIZE}px`,
            height: `${FAB_SIZE}px`,
            transform: isFabDragging ? 'scale(1.1)' : 'scale(1)',
            transition: isFabDragging ? 'none' : 'transform 0.2s, box-shadow 0.2s'
          }}
        >
          <ChatIcon />
        </button>
      )}
    </div>
  );
}