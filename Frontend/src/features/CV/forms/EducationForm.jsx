// src/features/CV/forms/EducationForm.jsx
import { useCV } from '../cvLogic';
import { GraduationIcon, PlusIcon, TrashIcon } from '../../../components/Icons';

export default function EducationForm() {
  const { state, addEducation, updateEducation, removeEducation } = useCV();
  const { cvData } = state;
  const edu = cvData.education || [];

  return (
    <div className="cv-form-section">
      <div className="cv-form-subsection">
        <div className="cv-form-section-header">
          <div className="cv-section-title-wrap"><div className="cv-section-icon"><GraduationIcon size={18} /></div><div><h3 className="cv-form-section-title">Pendidikan Formal</h3><p className="cv-form-section-desc">Riwayat pendidikan dari SMA hingga Universitas.</p></div></div>
          <button type="button" onClick={() => addEducation({ id: `edu_${Date.now()}`, degree: '', institution: '', location: '', startDate: '', endDate: '', gpa: '', description: '' })} className="cv-add-item-btn"><PlusIcon /> Tambah</button>
        </div>
        {edu.length === 0 ? <div className="cv-empty-state"><p>Belum ada pendidikan.</p></div> : (
          <div className="cv-items-list">
            {edu.map((item, idx) => (
              <div key={item.id} className="cv-item-card">
                <div className="cv-item-header"><span className="cv-item-number">#{idx + 1}</span><button type="button" onClick={() => removeEducation(item.id)} className="cv-item-delete-btn"><TrashIcon /></button></div>
                <div className="cv-form-grid">
                  <div className="cv-form-field"><label>Gelar/Jurusan</label><input type="text" value={item.degree || ''} onChange={(e) => updateEducation(edu.map(x => x.id === item.id ? { ...x, degree: e.target.value } : x))} /></div>
                  <div className="cv-form-field"><label>Institusi</label><input type="text" value={item.institution || ''} onChange={(e) => updateEducation(edu.map(x => x.id === item.id ? { ...x, institution: e.target.value } : x))} /></div>
                  <div className="cv-form-field"><label>Lokasi</label><input type="text" value={item.location || ''} onChange={(e) => updateEducation(edu.map(x => x.id === item.id ? { ...x, location: e.target.value } : x))} /></div>
                  <div className="cv-form-field"><label>Mulai</label><input type="month" value={item.startDate || ''} onChange={(e) => updateEducation(edu.map(x => x.id === item.id ? { ...x, startDate: e.target.value } : x))} /></div>
                  <div className="cv-form-field"><label>Lulus</label><input type="month" value={item.endDate || ''} onChange={(e) => updateEducation(edu.map(x => x.id === item.id ? { ...x, endDate: e.target.value } : x))} /></div>
                  <div className="cv-form-field"><label>IPK</label><input type="text" value={item.gpa || ''} onChange={(e) => updateEducation(edu.map(x => x.id === item.id ? { ...x, gpa: e.target.value } : x))} placeholder="3.75" /></div>
                </div>
                <div className="cv-form-field cv-form-field-full"><label>Detail</label><textarea value={item.description || ''} onChange={(e) => updateEducation(edu.map(x => x.id === item.id ? { ...x, description: e.target.value } : x))} rows="2" /></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}