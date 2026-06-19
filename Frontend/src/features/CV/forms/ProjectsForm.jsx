// src/features/CV/forms/ProjectsForm.jsx
import { useCV } from '../cvLogic';
import { CodeIcon, StarIcon, PlusIcon, TrashIcon, LinkIcon } from '../../../components/Icons';

export default function ProjectsForm() {
  const { state, addProject, updateProjects, removeProject, addCertification, updateCertifications, removeCertification, addAchievement, updateAchievements, removeAchievement } = useCV();
  const { cvData } = state;
  const projects = cvData.projects || [];
  const certs = cvData.certifications || [];
  const achs = cvData.achievements || [];

  const linkTypes = [
    { value: 'github', label: 'GitHub' },
    { value: 'website', label: 'Website' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'demo', label: 'Live Demo' },
    { value: 'other', label: 'Lainnya' }
  ];

  const handleAddLink = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    const newLinks = [...(project.links || []), { id: `link_${Date.now()}`, type: 'website', url: '' }];
    updateProjects(projects.map(p => p.id === projectId ? { ...p, links: newLinks } : p));
  };

  const handleUpdateLink = (projectId, linkId, field, value) => {
    const project = projects.find(p => p.id === projectId);
    const newLinks = project.links.map(l => l.id === linkId ? { ...l, [field]: value } : l);
    updateProjects(projects.map(p => p.id === projectId ? { ...p, links: newLinks } : p));
  };

  const handleRemoveLink = (projectId, linkId) => {
    const project = projects.find(p => p.id === projectId);
    const newLinks = project.links.filter(l => l.id !== linkId);
    updateProjects(projects.map(p => p.id === projectId ? { ...p, links: newLinks } : p));
  };

  return (
    <div className="cv-form-section">
      {/* PROJECTS */}
      <div className="cv-form-subsection">
        <div className="cv-form-section-header">
          <div className="cv-section-title-wrap"><div className="cv-section-icon"><CodeIcon size={18} /></div><div><h3 className="cv-form-section-title">Proyek</h3></div></div>
          <button type="button" onClick={() => addProject({ id: `proj_${Date.now()}`, name: '', role: '', technologies: '', links: [], description: '' })} className="cv-add-item-btn"><PlusIcon /> Tambah</button>
        </div>
        {projects.length === 0 ? <div className="cv-empty-state"><p>Belum ada proyek.</p></div> : (
          <div className="cv-items-list">
            {projects.map((p, idx) => (
              <div key={p.id} className="cv-item-card">
                <div className="cv-item-header"><span className="cv-item-number">#{idx + 1}</span><button type="button" onClick={() => removeProject(p.id)} className="cv-item-delete-btn"><TrashIcon /></button></div>
                <div className="cv-form-grid">
                  <div className="cv-form-field"><label>Nama Proyek</label><input type="text" value={p.name || ''} onChange={(e) => updateProjects(projects.map(x => x.id === p.id ? { ...x, name: e.target.value } : x))} /></div>
                  <div className="cv-form-field"><label>Peran</label><input type="text" value={p.role || ''} onChange={(e) => updateProjects(projects.map(x => x.id === p.id ? { ...x, role: e.target.value } : x))} /></div>
                  <div className="cv-form-field cv-form-field-full"><label>Teknologi</label><input type="text" value={p.technologies || ''} onChange={(e) => updateProjects(projects.map(x => x.id === p.id ? { ...x, technologies: e.target.value } : x))} placeholder="React, Node.js, PostgreSQL" /></div>
                </div>
                
                {/* Dynamic Links */}
                <div className="cv-form-field cv-form-field-full" style={{ marginTop: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <label style={{ margin: 0 }}>Tautan Proyek</label>
                    <button type="button" onClick={() => handleAddLink(p.id)} className="cv-add-btn" style={{ padding: '4px 8px', fontSize: '0.7rem' }}><PlusIcon size={12} /> Tambah Link</button>
                  </div>
                  {(p.links || []).length === 0 ? (
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>Belum ada tautan.</p>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {p.links.map((link) => (
                        <div key={link.id} style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                          <select value={link.type} onChange={(e) => handleUpdateLink(p.id, link.id, 'type', e.target.value)} style={{ padding: '6px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.75rem', width: '120px' }}>
                            {linkTypes.map(lt => <option key={lt.value} value={lt.value}>{lt.label}</option>)}
                          </select>
                          <input type="text" value={link.url} onChange={(e) => handleUpdateLink(p.id, link.id, 'url', e.target.value)} placeholder="URL tautan..." style={{ flex: 1, padding: '6px 8px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.75rem' }} />
                          <button type="button" onClick={() => handleRemoveLink(p.id, link.id)} style={{ padding: '6px', background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex' }}><TrashIcon size={12} /></button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="cv-form-field cv-form-field-full"><label>Deskripsi</label><textarea value={p.description || ''} onChange={(e) => updateProjects(projects.map(x => x.id === p.id ? { ...x, description: e.target.value } : x))} rows="2" /></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CERTIFICATIONS & ACHIEVEMENTS (Kode sama seperti sebelumnya, pastikan import TrashIcon, PlusIcon, StarIcon sudah ada) */}
      {/* ... (Sertifikasi dan Prestasi tetap sama seperti kode sebelumnya) ... */}
      <div className="cv-form-subsection">
        <div className="cv-form-section-header">
          <div className="cv-section-title-wrap"><div className="cv-section-icon"><StarIcon size={18} /></div><div><h3 className="cv-form-section-title">Sertifikasi</h3></div></div>
          <button type="button" onClick={() => addCertification({ id: `cert_${Date.now()}`, name: '', issuer: '', date: '', link: '' })} className="cv-add-item-btn"><PlusIcon /></button>
        </div>
        {certs.length === 0 ? <div className="cv-empty-state"><p>Belum ada sertifikasi.</p></div> : (
          <div className="cv-items-list">
            {certs.map((c, idx) => (
              <div key={c.id} className="cv-item-card">
                <div className="cv-item-header"><span className="cv-item-number">#{idx + 1}</span><button type="button" onClick={() => removeCertification(c.id)} className="cv-item-delete-btn"><TrashIcon /></button></div>
                <div className="cv-form-grid">
                  <div className="cv-form-field"><label>Nama</label><input type="text" value={c.name || ''} onChange={(e) => updateCertifications(certs.map(x => x.id === c.id ? { ...x, name: e.target.value } : x))} /></div>
                  <div className="cv-form-field"><label>Penerbit</label><input type="text" value={c.issuer || ''} onChange={(e) => updateCertifications(certs.map(x => x.id === c.id ? { ...x, issuer: e.target.value } : x))} /></div>
                  <div className="cv-form-field"><label>Tanggal</label><input type="month" value={c.date || ''} onChange={(e) => updateCertifications(certs.map(x => x.id === c.id ? { ...x, date: e.target.value } : x))} /></div>
                  <div className="cv-form-field"><label>Link</label><input type="text" value={c.link || ''} onChange={(e) => updateCertifications(certs.map(x => x.id === c.id ? { ...x, link: e.target.value } : x))} /></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="cv-form-subsection">
        <div className="cv-form-section-header">
          <div className="cv-section-title-wrap"><div className="cv-section-icon"><StarIcon size={18} /></div><div><h3 className="cv-form-section-title">Prestasi</h3></div></div>
          <button type="button" onClick={() => addAchievement({ id: `ach_${Date.now()}`, title: '', event: '', date: '', description: '' })} className="cv-add-item-btn"><PlusIcon /></button>
        </div>
        {achs.length === 0 ? <div className="cv-empty-state"><p>Belum ada prestasi.</p></div> : (
          <div className="cv-items-list">
            {achs.map((a, idx) => (
              <div key={a.id} className="cv-item-card">
                <div className="cv-item-header"><span className="cv-item-number">#{idx + 1}</span><button type="button" onClick={() => removeAchievement(a.id)} className="cv-item-delete-btn"><TrashIcon /></button></div>
                <div className="cv-form-grid">
                  <div className="cv-form-field"><label>Judul</label><input type="text" value={a.title || ''} onChange={(e) => updateAchievements(achs.map(x => x.id === a.id ? { ...x, title: e.target.value } : x))} /></div>
                  <div className="cv-form-field"><label>Acara</label><input type="text" value={a.event || ''} onChange={(e) => updateAchievements(achs.map(x => x.id === a.id ? { ...x, event: e.target.value } : x))} /></div>
                  <div className="cv-form-field"><label>Tanggal</label><input type="month" value={a.date || ''} onChange={(e) => updateAchievements(achs.map(x => x.id === a.id ? { ...x, date: e.target.value } : x))} /></div>
                </div>
                <div className="cv-form-field cv-form-field-full"><label>Deskripsi</label><textarea value={a.description || ''} onChange={(e) => updateAchievements(achs.map(x => x.id === a.id ? { ...x, description: e.target.value } : x))} rows="2" /></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}