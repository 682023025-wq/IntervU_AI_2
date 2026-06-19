// src/features/CV/forms/SkillsForm.jsx
import { useState } from 'react';
import { useCV } from '../cvLogic';
import { StarIcon, GlobeIcon, PlusIcon, TrashIcon } from '../../../components/Icons';

export default function SkillsForm() {
  const { state, addSkill, removeSkill, updateSkillLevel, addLanguage, updateLanguages, removeLanguage } = useCV();
  const { cvData } = state;
  const skills = cvData.skills || [];
  const languages = cvData.languages || [];
  
  const [newSkill, setNewSkill] = useState('');
  const [newLang, setNewLang] = useState({ language: '', proficiency: '' }); // Default kosong
  const proficiencies = ['Pemula', 'Dasar', 'Menengah', 'Mahir', 'Native'];

  const handleAddSkill = () => {
    if (!newSkill.trim()) return;
    if (skills.some(s => s.name.toLowerCase() === newSkill.toLowerCase())) { alert('Skill sudah ada!'); return; }
    addSkill({ id: `skill_${Date.now()}`, name: newSkill, level: null }); // Default null
    setNewSkill('');
  };

  const handleAddLanguage = () => {
    if (!newLang.language.trim()) return;
    addLanguage({ id: `lang_${Date.now()}`, language: newLang.language, proficiency: newLang.proficiency || null });
    setNewLang({ language: '', proficiency: '' });
  };

  const handleLevelClick = (skillId, level) => {
    const current = skills.find(s => s.id === skillId)?.level;
    // Jika klik level yang sama, reset jadi null (kosong)
    updateSkillLevel(skillId, current === level ? null : level);
  };

  const getLevelLabel = (level) => ({ 1: 'Pemula', 2: 'Dasar', 3: 'Menengah', 4: 'Ahli' }[level] || 'Belum dinilai');
  const getLevelColor = (level) => ({ 1: '#94a3b8', 2: '#60a5fa', 3: '#10b981', 4: '#f59e0b' }[level] || '#cbd5e1');

  return (
    <div className="cv-form-section">
      {/* SKILLS */}
      <div className="cv-form-subsection">
        <div className="cv-form-section-header">
          <div className="cv-section-title-wrap">
            <div className="cv-section-icon"><StarIcon size={18} /></div>
            <div><h3 className="cv-form-section-title">Skill & Keahlian</h3><p className="cv-form-section-desc">Klik level untuk mengatur, klik lagi untuk mengosongkan.</p></div>
          </div>
        </div>

        <div className="cv-skill-add-container">
          <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())} placeholder="Contoh: JavaScript, Python..." className="cv-skill-input" />
          <button type="button" onClick={handleAddSkill} className="cv-add-skill-btn"><PlusIcon /> Tambah</button>
        </div>

        {skills.length === 0 ? <div className="cv-empty-state"><p>Belum ada skill.</p></div> : (
          <div className="cv-skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="cv-skill-card">
                <div className="cv-skill-card-header">
                  <span className="cv-skill-name">{skill.name}</span>
                  <button type="button" onClick={() => removeSkill(skill.id)} className="cv-skill-remove"><TrashIcon /></button>
                </div>
                <div className="cv-skill-level-container">
                  <div className="cv-skill-level-dots">
                    {[1, 2, 3, 4].map((level) => (
                      <button 
                        key={level} 
                        type="button"
                        onClick={() => handleLevelClick(skill.id, level)} 
                        className="cv-skill-level-dot" 
                        style={{ backgroundColor: skill.level >= level ? getLevelColor(skill.level) : '#e2e8f0' }} 
                        title={getLevelLabel(level)} 
                      />
                    ))}
                  </div>
                  <span className="cv-skill-level-label" style={{ color: skill.level ? getLevelColor(skill.level) : '#94a3b8' }}>{getLevelLabel(skill.level)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* LANGUAGES */}
      <div className="cv-form-subsection">
        <div className="cv-form-section-header">
          <div className="cv-section-title-wrap">
            <div className="cv-section-icon"><GlobeIcon size={18} /></div>
            <div><h3 className="cv-form-section-title">Bahasa</h3><p className="cv-form-section-desc">Bahasa yang kamu kuasai.</p></div>
          </div>
        </div>
        
        <div className="cv-language-add-row">
          <input type="text" value={newLang.language} onChange={(e) => setNewLang({ ...newLang, language: e.target.value })} placeholder="Contoh: English" onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddLanguage())} />
          <select value={newLang.proficiency} onChange={(e) => setNewLang({ ...newLang, proficiency: e.target.value })}>
            <option value="">Level (Opsional)</option>
            {proficiencies.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          <button type="button" onClick={handleAddLanguage} className="cv-add-btn"><PlusIcon /></button>
        </div>

        {languages.length > 0 && (
          <div className="cv-language-list">
            {languages.map((lang, idx) => (
              <div key={lang.id || idx} className="cv-language-item">
                <span className="cv-language-name">{lang.language}</span>
                <select value={lang.proficiency || ''} onChange={(e) => updateLanguages(languages.map(l => l.id === lang.id ? { ...l, proficiency: e.target.value || null } : l))} className="cv-language-proficiency">
                  <option value="">Level (Opsional)</option>
                  {proficiencies.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <button type="button" onClick={() => removeLanguage(lang.language)} className="cv-language-remove"><TrashIcon /></button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}