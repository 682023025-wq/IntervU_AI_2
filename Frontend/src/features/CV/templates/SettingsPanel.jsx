// src/features/CV/components/SettingsPanel.jsx
import { useState, useEffect } from 'react';
import { useCV } from '../cvLogic';
import CVPreview from '../CVPreview'; // Import CVPreview
import { languageOptions, t } from '../translations';
import './SettingsPanel.css';

// ===== SVG ICONS =====
const GlobeIcon = ({ size = 16 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>);
const FileTextIcon = ({ size = 16 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>);
const RulerIcon = ({ size = 16 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>);
const FolderIcon = ({ size = 16 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>);
const CheckIcon = ({ size = 14 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>);
const InfoIcon = ({ size = 14 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>);
const SaveIcon = ({ size = 14 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>);
const EditIcon = ({ size = 14 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>);
const TrashIcon = ({ size = 14 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>);

// ===== DATA OPTIONS =====
const templateOptions = [
  { id: 'modern', nameKey: 'template.modern', descKey: 'template.modern.desc', color: '#0F4C75', previewClass: 'template-preview-modern' },
  { id: 'classic', nameKey: 'template.classic', descKey: 'template.classic.desc', color: '#1e293b', previewClass: 'template-preview-classic' },
  { id: 'minimalist', nameKey: 'template.minimalist', descKey: 'template.minimalist.desc', color: '#64748b', previewClass: 'template-preview-minimalist' },
  { id: 'professional', nameKey: 'template.professional', descKey: 'template.professional.desc', color: '#1e293b', previewClass: 'template-preview-professional' },
  { id: 'creative', nameKey: 'template.creative', descKey: 'template.creative.desc', color: '#667eea', previewClass: 'template-preview-creative' },
];

const paperSizeOptions = [
  { value: 'a4', label: 'A4', dimension: '210 × 297 mm', description: 'Standar internasional, paling umum digunakan' },
  { value: 'letter', label: 'Letter', dimension: '216 × 279 mm', description: 'Standar Amerika Serikat' },
  { value: 'legal', label: 'Legal', dimension: '216 × 356 mm', description: 'Ukuran lebih panjang, untuk dokumen resmi' },
];

export default function SettingsPanel() {
  const { state, setLanguage, setTemplate, setPaperSize, exportCVData, importCVData, resetCV } = useCV();
  const { language, selectedTemplate, paperSize, cvData } = state;
  
  // State untuk Saved CVs
  const [savedCVs, setSavedCVs] = useState([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [cvName, setCvName] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('saved_cvs');
    if (saved) {
      try { setSavedCVs(JSON.parse(saved)); } 
      catch (e) { console.error('Error loading saved CVs', e); }
    }
  }, []);

  // Handlers untuk Saved CV
  const handleSaveCV = () => {
    if (!cvName.trim()) { alert('Masukkan nama CV!'); return; }
    const newCV = {
      id: `cv_${Date.now()}`,
      name: cvName,
      template: selectedTemplate,
      data: cvData,
      updatedAt: new Date().toISOString()
    };
    const updated = [...savedCVs, newCV];
    setSavedCVs(updated);
    localStorage.setItem('saved_cvs', JSON.stringify(updated));
    exportCVData();
    setCvName('');
    setShowSaveModal(false);
    alert('CV berhasil disimpan!');
  };

  const handleLoadCV = (cv) => {
    if (window.confirm(`Muat CV "${cv.name}"? Data saat ini akan ditimpa.`)) {
      importCVData(cv.data);
      alert('CV berhasil dimuat! Silakan cek tab Preview.');
    }
  };

  const handleDeleteCV = (id) => {
    if (window.confirm('Hapus CV ini?')) {
      const updated = savedCVs.filter(cv => cv.id !== id);
      setSavedCVs(updated);
      localStorage.setItem('saved_cvs', JSON.stringify(updated));
    }
  };

  const handleResetCV = () => {
    if (window.confirm('Reset semua data CV? Tindakan ini tidak dapat dibatalkan.')) {
      resetCV();
      alert('Data CV berhasil direset!');
    }
  };

  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    } catch (e) { return dateStr; }
  };

  const getTemplateName = (templateId) => {
    const names = { modern: 'Modern', classic: 'Classic', minimalist: 'Minimalist', professional: 'Professional', creative: 'Creative' };
    return names[templateId] || 'Modern';
  };

  return (
    <div className="settings-layout">
      {/* LEFT COLUMN: SETTINGS */}
      <div className="settings-panel">
        <div className="settings-header">
          <h2 className="settings-title">Pengaturan</h2>
          <p className="settings-desc">Konfigurasi preferensi dan manajemen data CV</p>
        </div>

        {/* 1. LANGUAGE SETTING */}
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-section-icon"><GlobeIcon /></div>
            <div>
              <h3 className="settings-section-title">Bahasa CV</h3>
              <p className="settings-section-desc">Pilih bahasa untuk tampilan CV Anda</p>
            </div>
          </div>
          <div className="settings-language-options">
            {languageOptions.map((lang) => (
              <button key={lang.value} onClick={() => setLanguage(lang.value)} className={`settings-language-btn ${language === lang.value ? 'settings-language-btn-active' : ''}`}>
                <span className="settings-language-flag">{lang.flag}</span>
                <span className="settings-language-name">{lang.label}</span>
                {language === lang.value && <span className="settings-language-check"><CheckIcon /></span>}
              </button>
            ))}
          </div>
          <div className="settings-info-box">
            <InfoIcon size={14} />
            <p className="settings-info-text">Bahasa yang dipilih akan diterapkan pada semua template CV.</p>
          </div>
        </div>

        {/* 2. TEMPLATE SETTING */}
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-section-icon"><FileTextIcon /></div>
            <div>
              <h3 className="settings-section-title">Template CV</h3>
              <p className="settings-section-desc">Pilih desain template untuk CV Anda</p>
            </div>
          </div>
          <div className="settings-template-grid">
            {templateOptions.map((template) => (
              <div key={template.id} className={`settings-template-card ${selectedTemplate === template.id ? 'settings-template-card-selected' : ''}`} onClick={() => setTemplate(template.id)}>
                <div className="settings-template-preview" style={{ background: `linear-gradient(135deg, ${template.color}22 0%, ${template.color}11 100%)` }}>
                  <div className={`settings-template-thumb ${template.previewClass}`} />
                </div>
                <div className="settings-template-info">
                  <h4 className="settings-template-name">{t(template.nameKey, language)}</h4>
                  <p className="settings-template-desc">{t(template.descKey, language)}</p>
                </div>
                {selectedTemplate === template.id && <div className="settings-template-badge"><CheckIcon size={12} /> Dipilih</div>}
              </div>
            ))}
          </div>
        </div>

        {/* 3. PAPER SIZE SETTING */}
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-section-icon"><RulerIcon /></div>
            <div>
              <h3 className="settings-section-title">Ukuran Kertas</h3>
              <p className="settings-section-desc">Pilih ukuran kertas untuk preview dan export</p>
            </div>
          </div>
          <div className="settings-paper-options">
            {paperSizeOptions.map((size) => (
              <button key={size.value} onClick={() => setPaperSize(size.value)} className={`settings-paper-btn ${paperSize === size.value ? 'settings-paper-btn-active' : ''}`}>
                <div className="settings-paper-info">
                  <span className="settings-paper-label">{size.label}</span>
                  <span className="settings-paper-dimension">{size.dimension}</span>
                </div>
                <p className="settings-paper-desc">{size.description}</p>
                {paperSize === size.value && <span className="settings-paper-check"><CheckIcon /></span>}
              </button>
            ))}
          </div>
        </div>

        {/* 4. SAVED CV MANAGEMENT */}
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-section-icon"><FolderIcon /></div>
            <div>
              <h3 className="settings-section-title">CV Tersimpan</h3>
              <p className="settings-section-desc">Kelola draft dan versi CV Anda</p>
            </div>
          </div>

          <div className="settings-saved-actions">
            <button onClick={() => setShowSaveModal(true)} className="settings-data-btn settings-data-btn-primary">
              <SaveIcon /> Simpan Versi Baru
            </button>
            <button onClick={handleResetCV} className="settings-data-btn settings-data-btn-danger">
              <TrashIcon /> Reset Data Aktif
            </button>
          </div>

          {savedCVs.length === 0 ? (
            <div className="settings-empty-state">
              <FolderIcon size={24} />
              <p>Belum ada CV tersimpan.</p>
            </div>
          ) : (
            <div className="settings-saved-list">
              {savedCVs.map((cv) => (
                <div key={cv.id} className="settings-saved-item">
                  <div className="settings-saved-info">
                    <div className="settings-saved-icon"><FileTextIcon size={16} /></div>
                    <div className="settings-saved-details">
                      <h4 className="settings-saved-title">{cv.name}</h4>
                      <p className="settings-saved-meta">
                        {getTemplateName(cv.template)} • {formatDate(cv.updatedAt)}
                      </p>
                    </div>
                  </div>
                  <div className="settings-saved-btns">
                    <button onClick={() => handleLoadCV(cv)} className="settings-action-btn" title="Muat CV"><EditIcon /></button>
                    <button onClick={() => handleDeleteCV(cv.id)} className="settings-action-btn settings-action-danger" title="Hapus"><TrashIcon /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: LIVE PREVIEW */}
      <div className="settings-preview-column">
        <div className="settings-preview-header">
          <h3 className="settings-preview-title">Live Preview</h3>
          <p className="settings-preview-desc">Perubahan template & bahasa terlihat di sini</p>
        </div>
        <div className="settings-preview-wrapper">
          <CVPreview />
        </div>
      </div>

      {/* MODAL SIMPAN CV */}
      {showSaveModal && (
        <div className="cv-modal-overlay" onClick={() => setShowSaveModal(false)}>
          <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="cv-modal-title">Simpan CV</h3>
            <p className="cv-modal-desc">Berikan nama untuk versi CV ini.</p>
            <input type="text" value={cvName} onChange={(e) => setCvName(e.target.value)} placeholder="Contoh: CV Software Engineer - v1" className="cv-modal-input" autoFocus onKeyDown={(e) => e.key === 'Enter' && handleSaveCV()} />
            <div className="cv-modal-actions">
              <button onClick={() => setShowSaveModal(false)} className="cv-modal-btn cv-modal-btn-secondary">Batal</button>
              <button onClick={handleSaveCV} className="cv-modal-btn cv-modal-btn-primary"><SaveIcon /> Simpan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}