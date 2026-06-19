import { useCV } from '../cvLogic';
import { BriefcaseIcon, GraduationIcon, PlusIcon, TrashIcon } from '../../../components/Icons';

export default function ExperienceForm() {
  const { state, addWorkExperience, updateWorkExperience, removeWorkExperience, addInternshipExperience, updateInternshipExperience, removeInternshipExperience } = useCV();
  const { cvData } = state;
  const workExperience = cvData.workExperience || [];
  const internshipExperience = cvData.internshipExperience || [];

  const renderCard = (exp, idx, type, list, onUpdate, onDelete) => (
    <div key={exp.id} className="cv-item-card">
      <div className="cv-item-header"><span className="cv-item-number">#{idx + 1}</span><button onClick={() => onDelete(exp.id)} className="cv-item-delete-btn"><TrashIcon /></button></div>
      <div className="cv-form-grid">
        <div className="cv-form-field"><label>Posisi</label><input type="text" value={exp.position || ''} onChange={(e) => onUpdate(list.map(item => item.id === exp.id ? { ...item, position: e.target.value } : item))} placeholder={type === 'work' ? 'Backend Developer' : 'Intern'} /></div>
        <div className="cv-form-field"><label>Perusahaan</label><input type="text" value={exp.company || ''} onChange={(e) => onUpdate(list.map(item => item.id === exp.id ? { ...item, company: e.target.value } : item))} placeholder="PT. Teknologi" /></div>
        <div className="cv-form-field"><label>Lokasi</label><input type="text" value={exp.location || ''} onChange={(e) => onUpdate(list.map(item => item.id === exp.id ? { ...item, location: e.target.value } : item))} placeholder="Jakarta / Remote" /></div>
        <div className="cv-form-field"><label>Mulai</label><input type="month" value={exp.startDate || ''} onChange={(e) => onUpdate(list.map(item => item.id === exp.id ? { ...item, startDate: e.target.value } : item))} /></div>
        <div className="cv-form-field"><label>Selesai</label><input type="month" value={exp.endDate || ''} onChange={(e) => onUpdate(list.map(item => item.id === exp.id ? { ...item, endDate: e.target.value } : item))} /></div>
      </div>
      <div className="cv-form-field cv-form-field-full"><label>Deskripsi</label><textarea value={exp.description || ''} onChange={(e) => onUpdate(list.map(item => item.id === exp.id ? { ...item, description: e.target.value } : item))} placeholder="• Mengembangkan REST API..." rows="3" /></div>
    </div>
  );

  return (
    <div className="cv-form-section">
      <div className="cv-form-subsection">
        <div className="cv-form-section-header">
          <div className="cv-section-title-wrap"><div className="cv-section-icon"><BriefcaseIcon size={18} /></div><div><h3 className="cv-form-section-title">Pengalaman Kerja</h3><p className="cv-form-section-desc">Full-time atau freelance.</p></div></div>
          <button onClick={() => addWorkExperience({ id: `work_${Date.now()}`, position: '', company: '', location: '', startDate: '', endDate: '', description: '' })} className="cv-add-item-btn"><PlusIcon /> Tambah</button>
        </div>
        {workExperience.length === 0 ? <div className="cv-empty-state"><p>Belum ada pengalaman kerja.</p></div> : <div className="cv-items-list">{workExperience.map((exp, idx) => renderCard(exp, idx, 'work', workExperience, updateWorkExperience, removeWorkExperience))}</div>}
      </div>

      <div className="cv-form-subsection">
        <div className="cv-form-section-header">
          <div className="cv-section-title-wrap"><div className="cv-section-icon"><GraduationIcon size={18} /></div><div><h3 className="cv-form-section-title">Pengalaman Magang</h3><p className="cv-form-section-desc">Internship.</p></div></div>
          <button onClick={() => addInternshipExperience({ id: `intern_${Date.now()}`, position: '', company: '', location: '', startDate: '', endDate: '', description: '' })} className="cv-add-item-btn"><PlusIcon /> Tambah</button>
        </div>
        {internshipExperience.length === 0 ? <div className="cv-empty-state"><p>Belum ada magang.</p></div> : <div className="cv-items-list">{internshipExperience.map((exp, idx) => renderCard(exp, idx, 'intern', internshipExperience, updateInternshipExperience, removeInternshipExperience))}</div>}
      </div>
    </div>
  );
}