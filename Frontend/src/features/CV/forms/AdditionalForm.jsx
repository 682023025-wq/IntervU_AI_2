import { useState } from 'react';
import { useCV } from '../cvLogic';
import { GlobeIcon, UserIcon, PlusIcon, TrashIcon } from '../../../components/Icons';

export default function AdditionalForm() {
  const { state, addLanguage, updateLanguages, removeLanguage, updateAdditionalInfo } = useCV();
  const { cvData } = state;
  const languages = cvData.languages || [];
  const additionalInfo = cvData.additionalInfo || '';
  const [newLang, setNewLang] = useState({ language: '', proficiency: 'Menengah' });
  const proficiencies = ['Pemula', 'Dasar', 'Menengah', 'Mahir', 'Native'];

  const handleAddLanguage = () => {
    if (!newLang.language.trim()) return;
    addLanguage({ id: `lang_${Date.now()}`, language: newLang.language, proficiency: newLang.proficiency });
    setNewLang({ language: '', proficiency: 'Menengah' });
  };

  return (
    <div className="cv-form-section">
      <div className="cv-form-subsection">
        <div className="cv-form-section-header">
          <div className="cv-section-title-wrap"><div className="cv-section-icon"><GlobeIcon size={18} /></div><div><h3 className="cv-form-section-title">Bahasa</h3></div></div>
        </div>
        <div className="cv-language-add-row">
          <input type="text" value={newLang.language} onChange={(e) => setNewLang({ ...newLang, language: e.target.value })} placeholder="Contoh: English" onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddLanguage())} />
          <select value={newLang.proficiency} onChange={(e) => setNewLang({ ...newLang, proficiency: e.target.value })}>
            {proficiencies.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          <button onClick={handleAddLanguage} className="cv-add-btn"><PlusIcon /></button>
        </div>
        {languages.length > 0 && (
          <div className="cv-language-list">
            {languages.map((lang, idx) => (
              <div key={lang.id || idx} className="cv-language-item">
                <span className="cv-language-name">{lang.language}</span>
                <select value={lang.proficiency} onChange={(e) => updateLanguages(languages.map(l => l.id === lang.id ? { ...l, proficiency: e.target.value } : l))} className="cv-language-proficiency">
                  {proficiencies.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <button onClick={() => removeLanguage(lang.language)} className="cv-language-remove"><TrashIcon /></button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="cv-form-subsection">
        <div className="cv-form-section-header">
          <div className="cv-section-title-wrap"><div className="cv-section-icon"><UserIcon size={18} /></div><div><h3 className="cv-form-section-title">Informasi Tambahan</h3></div></div>
        </div>
        <div className="cv-form-field cv-form-field-full">
          <label>Info Lainnya</label>
          <textarea value={additionalInfo} onChange={(e) => updateAdditionalInfo(e.target.value)} placeholder="Hobi, minat, volunteer..." rows="4" />
        </div>
      </div>
    </div>
  );
}