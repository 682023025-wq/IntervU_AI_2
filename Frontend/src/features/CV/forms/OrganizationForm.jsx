// src/features/CV/forms/OrganizationForm.jsx
import { useCV } from '../cvLogic';
import { UserIcon, StarIcon, PlusIcon, TrashIcon } from '../../../components/Icons';

export default function OrganizationForm() {
  const { state, addOrganizationExperience, updateOrganizationExperience, removeOrganizationExperience, addCommitteeExperience, updateCommitteeExperience, removeCommitteeExperience } = useCV();
  const { cvData } = state;
  const orgs = cvData.organizationExperience || [];
  const committees = cvData.committeeExperience || [];

  const renderOrgCard = (exp, idx, type, list, onUpdate, onDelete) => (
    <div key={exp.id} className="cv-item-card">
      <div className="cv-item-header"><span className="cv-item-number">#{idx + 1}</span><button type="button" onClick={() => onDelete(exp.id)} className="cv-item-delete-btn"><TrashIcon /></button></div>
      <div className="cv-form-grid">
        <div className="cv-form-field"><label>{type === 'org' ? 'Jabatan' : 'Peran'}</label><input type="text" value={exp.position || ''} onChange={(e) => onUpdate(list.map(item => item.id === exp.id ? { ...item, position: e.target.value } : item))} /></div>
        <div className="cv-form-field"><label>{type === 'org' ? 'Organisasi' : 'Acara'}</label><input type="text" value={exp.organization || exp.eventName || ''} onChange={(e) => onUpdate(list.map(item => item.id === exp.id ? { ...item, [type === 'org' ? 'organization' : 'eventName']: e.target.value } : item))} /></div>
        <div className="cv-form-field"><label>Periode</label><input type="text" value={exp.period || ''} onChange={(e) => onUpdate(list.map(item => item.id === exp.id ? { ...item, period: e.target.value } : item))} placeholder="2023 - 2024" /></div>
      </div>
      <div className="cv-form-field cv-form-field-full"><label>Deskripsi</label><textarea value={exp.description || ''} onChange={(e) => onUpdate(list.map(item => item.id === exp.id ? { ...item, description: e.target.value } : item))} rows="2" /></div>
    </div>
  );

  return (
    <div className="cv-form-section">
      <div className="cv-form-subsection">
        <div className="cv-form-section-header">
          <div className="cv-section-title-wrap"><div className="cv-section-icon"><UserIcon size={18} /></div><div><h3 className="cv-form-section-title">Organisasi</h3></div></div>
          <button type="button" onClick={() => addOrganizationExperience({ id: `org_${Date.now()}`, position: '', organization: '', period: '', description: '' })} className="cv-add-item-btn"><PlusIcon /></button>
        </div>
        {orgs.length === 0 ? <div className="cv-empty-state"><p>Belum ada organisasi.</p></div> : <div className="cv-items-list">{orgs.map((exp, idx) => renderOrgCard(exp, idx, 'org', orgs, updateOrganizationExperience, removeOrganizationExperience))}</div>}
      </div>

      <div className="cv-form-subsection">
        <div className="cv-form-section-header">
          <div className="cv-section-title-wrap"><div className="cv-section-icon"><StarIcon size={18} /></div><div><h3 className="cv-form-section-title">Kepanitiaan</h3></div></div>
          <button type="button" onClick={() => addCommitteeExperience({ id: `com_${Date.now()}`, position: '', eventName: '', period: '', description: '' })} className="cv-add-item-btn"><PlusIcon /></button>
        </div>
        {committees.length === 0 ? <div className="cv-empty-state"><p>Belum ada kepanitiaan.</p></div> : <div className="cv-items-list">{committees.map((exp, idx) => renderOrgCard(exp, idx, 'com', committees, updateCommitteeExperience, removeCommitteeExperience))}</div>}
      </div>
    </div>
  );
}