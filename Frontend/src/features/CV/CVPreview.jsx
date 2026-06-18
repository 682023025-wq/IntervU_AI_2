// src/features/CV/CVPreview.jsx
import './CVPreview.css';

export default function CVPreview({ cvData }) {
  if (!cvData) {
    return (
      <div className="cv-preview-empty">
        <p>Mulai isi data CV untuk melihat preview</p>
      </div>
    );
  }

  const { personalInfo, summary, skills, experiences, education } = cvData;

  // Helper: Format date
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    if (dateStr === 'Sekarang' || dateStr === 'Present') return 'Sekarang';
    
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
      return `${months[date.getMonth()]} ${date.getFullYear()}`;
    } catch (e) {
      return dateStr;
    }
  };

  // Check if section has data
  const hasPersonalInfo = personalInfo && (personalInfo.fullName || personalInfo.email);
  const hasSummary = summary && summary.trim();
  const hasSkills = skills && (
    (skills.technical && skills.technical.length > 0) ||
    (skills.soft && skills.soft.length > 0) ||
    (skills.tools && skills.tools.length > 0) ||
    (skills.languages && skills.languages.length > 0)
  );
  const hasExperiences = experiences && experiences.length > 0;
  const hasEducation = education && education.length > 0;

  return (
    <div className="cv-preview-document">
      {/* Header */}
      {hasPersonalInfo && (
        <header className="cv-preview-header">
          <h1 className="cv-preview-name">
            {personalInfo.fullName || 'Nama Anda'}
          </h1>
          
          <div className="cv-preview-contact">
            {personalInfo.email && (
              <span className="cv-preview-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {personalInfo.email}
              </span>
            )}
            
            {personalInfo.phone && (
              <span className="cv-preview-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {personalInfo.phone}
              </span>
            )}
            
            {personalInfo.address && (
              <span className="cv-preview-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {personalInfo.address}
              </span>
            )}
          </div>
          
          {(personalInfo.linkedin || personalInfo.portfolio) && (
            <div className="cv-preview-links">
              {personalInfo.linkedin && (
                <span className="cv-preview-link-item">
                  LinkedIn: {personalInfo.linkedin}
                </span>
              )}
              {personalInfo.portfolio && (
                <span className="cv-preview-link-item">
                  Portfolio: {personalInfo.portfolio}
                </span>
              )}
            </div>
          )}
        </header>
      )}

      {/* Summary */}
      {hasSummary && (
        <section className="cv-preview-section">
          <h2 className="cv-preview-section-title">Ringkasan Profesional</h2>
          <p className="cv-preview-summary">{summary}</p>
        </section>
      )}

      {/* Experiences */}
      {hasExperiences && (
        <section className="cv-preview-section">
          <h2 className="cv-preview-section-title">Pengalaman Kerja</h2>
          <div className="cv-preview-items">
            {experiences.map((exp) => (
              <div key={exp.id} className="cv-preview-item">
                <div className="cv-preview-item-header">
                  <div className="cv-preview-item-title-row">
                    <strong className="cv-preview-item-title">
                      {exp.position || 'Posisi'}
                    </strong>
                    {exp.company && (
                      <span className="cv-preview-item-company">
                        | {exp.company}
                      </span>
                    )}
                  </div>
                  <div className="cv-preview-item-meta">
                    {exp.location && <span>{exp.location}</span>}
                    {(exp.startDate || exp.endDate) && (
                      <span>
                        {exp.startDate && <>{formatDate(exp.startDate)}</>}
                        {(exp.startDate && exp.endDate) && <span> - </span>}
                        {exp.endDate && <>{formatDate(exp.endDate)}</>}
                      </span>
                    )}
                  </div>
                </div>
                {exp.description && (
                  <p className="cv-preview-item-description">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {hasEducation && (
        <section className="cv-preview-section">
          <h2 className="cv-preview-section-title">Pendidikan</h2>
          <div className="cv-preview-items">
            {education.map((edu) => (
              <div key={edu.id} className="cv-preview-item">
                <div className="cv-preview-item-header">
                  <div className="cv-preview-item-title-row">
                    <strong className="cv-preview-item-title">
                      {edu.degree || 'Gelar'}
                    </strong>
                    {edu.school && (
                      <span className="cv-preview-item-company">
                        | {edu.school}
                      </span>
                    )}
                  </div>
                  <div className="cv-preview-item-meta">
                    {edu.location && <span>{edu.location}</span>}
                    {(edu.startDate || edu.endDate) && (
                      <span>
                        {edu.startDate && <>{formatDate(edu.startDate)}</>}
                        {(edu.startDate && edu.endDate) && <span> - </span>}
                        {edu.endDate && <>{formatDate(edu.endDate)}</>}
                      </span>
                    )}
                  </div>
                </div>
                {edu.description && (
                  <p className="cv-preview-item-description">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {hasSkills && (
        <section className="cv-preview-section">
          <h2 className="cv-preview-section-title">Keahlian</h2>
          <div className="cv-preview-skills">
            {skills.technical && skills.technical.length > 0 && (
              <div className="cv-preview-skill-group">
                <strong className="cv-preview-skill-category">Teknis:</strong>
                <span className="cv-preview-skill-list">
                  {skills.technical.filter(s => s.trim()).join(' • ')}
                </span>
              </div>
            )}
            
            {skills.soft && skills.soft.length > 0 && (
              <div className="cv-preview-skill-group">
                <strong className="cv-preview-skill-category">Soft Skills:</strong>
                <span className="cv-preview-skill-list">
                  {skills.soft.filter(s => s.trim()).join(' • ')}
                </span>
              </div>
            )}
            
            {skills.tools && skills.tools.length > 0 && (
              <div className="cv-preview-skill-group">
                <strong className="cv-preview-skill-category">Tools:</strong>
                <span className="cv-preview-skill-list">
                  {skills.tools.filter(s => s.trim()).join(' • ')}
                </span>
              </div>
            )}
            
            {skills.languages && skills.languages.length > 0 && (
              <div className="cv-preview-skill-group">
                <strong className="cv-preview-skill-category">Bahasa:</strong>
                <span className="cv-preview-skill-list">
                  {skills.languages.filter(s => s.trim()).join(' • ')}
                </span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Empty State */}
      {!hasPersonalInfo && !hasSummary && !hasSkills && !hasExperiences && !hasEducation && (
        <div className="cv-preview-empty">
          <p>Mulai isi data CV untuk melihat preview</p>
        </div>
      )}
    </div>
  );
}