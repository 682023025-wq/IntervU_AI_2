// src/features/CV/templates/ClassicTemplate.jsx
import { t } from '../translations';
import './ClassicTemplate.css';

export default function ClassicTemplate({ cvData, language = 'id' }) {
  const { 
    personalInfo = {}, 
    profileSummary = '', 
    skills = [], 
    workExperience = [],
    internshipExperience = [],
    education = [],
    certifications = [],
    languages: cvLanguages = [],
    links = [],
    formatDate = (d) => d
  } = cvData;

  const translate = (key) => t(key, language);
  const allExperience = [...(workExperience || []), ...(internshipExperience || [])];

  return (
    <div className="classic-cv">
      <header className="classic-header">
        <h1 className="classic-name">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="classic-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>| {personalInfo.phone}</span>}
          {personalInfo.address && <span>| {personalInfo.address}</span>}
        </div>
        {links.length > 0 && (
          <div className="classic-links">
            {links.map((link, idx) => (
              <span key={idx}>
                {translate(`contact.${link.type}`) || link.type}: {link.value}
                {idx < links.length - 1 && ' | '}
              </span>
            ))}
          </div>
        )}
      </header>

      {profileSummary && (
        <section className="classic-section">
          <h2>{translate('section.summary')}</h2>
          <p>{profileSummary}</p>
        </section>
      )}

      {allExperience.length > 0 && (
        <section className="classic-section">
          <h2>{translate('section.experience')}</h2>
          {allExperience.map((exp, idx) => (
            <div key={exp.id || idx} className="classic-exp">
              <div className="classic-exp-header">
                <strong>{exp.position}</strong>
                <span>{exp.company} | {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : translate('label.present')}</span>
              </div>
              <p className="classic-exp-location">{exp.location}</p>
              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="classic-section">
          <h2>{translate('section.education')}</h2>
          {education.map((edu, idx) => (
            <div key={edu.id || idx} className="classic-exp">
              <div className="classic-exp-header">
                <strong>{edu.degree}</strong>
                <span>{edu.institution} | {formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
              </div>
              {edu.location && <p className="classic-exp-location">{edu.location}</p>}
              {edu.gpa && <p>{translate('label.gpa')}: {edu.gpa}</p>}
            </div>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="classic-section">
          <h2>{translate('section.skills')}</h2>
          <p>{skills.map(s => s.name).join(' • ')}</p>
        </section>
      )}

      {cvLanguages.length > 0 && (
        <section className="classic-section">
          <h2>{translate('section.languages')}</h2>
          <p>{cvLanguages.map(l => `${l.language}${l.proficiency ? ` (${l.proficiency})` : ''}`).join(' • ')}</p>
        </section>
      )}

      {certifications.length > 0 && (
        <section className="classic-section">
          <h2>{translate('section.certifications')}</h2>
          {certifications.map((cert, idx) => (
            <div key={cert.id || idx} className="classic-cert">
              <strong>{cert.name}</strong> - {cert.issuer} {cert.date && `(${formatDate(cert.date)})`}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}