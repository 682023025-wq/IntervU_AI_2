// src/features/CV/templates/MinimalistTemplate.jsx
import { t } from '../translations';
import './MinimalistTemplate.css';

export default function MinimalistTemplate({ cvData, language = 'id' }) {
  const { 
    personalInfo = {}, 
    profileSummary = '', 
    skills = [], 
    workExperience = [],
    internshipExperience = [],
    education = [],
    projects = [],
    certifications = [],
    languages: cvLanguages = [],
    links = [],
    formatDate = (d) => d
  } = cvData;

  const translate = (key) => t(key, language);
  const allExperience = [...(workExperience || []), ...(internshipExperience || [])];

  return (
    <div className="minimalist-cv">
      <header className="minimalist-header">
        <h1 className="minimalist-name">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="minimalist-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.address && <span>• {personalInfo.address}</span>}
        </div>
        {links.length > 0 && (
          <div className="minimalist-links">
            {links.map((link, idx) => (
              <a key={idx} href={link.value.startsWith('http') ? link.value : `https://${link.value}`} target="_blank" rel="noopener noreferrer">
                {translate(`contact.${link.type}`) || link.type}
              </a>
            ))}
          </div>
        )}
      </header>

      {profileSummary && (
        <section className="minimalist-section">
          <h2>{translate('section.summary')}</h2>
          <p>{profileSummary}</p>
        </section>
      )}

      {allExperience.length > 0 && (
        <section className="minimalist-section">
          <h2>{translate('section.experience')}</h2>
          {allExperience.map((exp, idx) => (
            <div key={exp.id || idx} className="minimalist-item">
              <div className="minimalist-item-header">
                <strong>{exp.position}</strong>
                <span>{formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : translate('label.present')}</span>
              </div>
              <p className="minimalist-item-sub">{exp.company} | {exp.location}</p>
              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="minimalist-section">
          <h2>{translate('section.education')}</h2>
          {education.map((edu, idx) => (
            <div key={edu.id || idx} className="minimalist-item">
              <div className="minimalist-item-header">
                <strong>{edu.degree}</strong>
                <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
              </div>
              <p className="minimalist-item-sub">{edu.institution} | {edu.location}</p>
              {edu.gpa && <p>{translate('label.gpa')}: {edu.gpa}</p>}
            </div>
          ))}
        </section>
      )}

      {projects.length > 0 && (
        <section className="minimalist-section">
          <h2>{translate('section.projects')}</h2>
          {projects.map((project, idx) => (
            <div key={project.id || idx} className="minimalist-item">
              <div className="minimalist-item-header">
                <strong>{project.name}</strong>
                {project.role && <span>{project.role}</span>}
              </div>
              {project.technologies && <p className="minimalist-item-sub">{project.technologies}</p>}
              {project.description && <p>{project.description}</p>}
            </div>
          ))}
        </section>
      )}

      <div className="minimalist-two-col">
        {skills.length > 0 && (
          <section className="minimalist-section">
            <h2>{translate('section.skills')}</h2>
            <p>{skills.map(s => s.name).join(' • ')}</p>
          </section>
        )}

        {cvLanguages.length > 0 && (
          <section className="minimalist-section">
            <h2>{translate('section.languages')}</h2>
            <p>{cvLanguages.map(l => `${l.language}${l.proficiency ? ` (${l.proficiency})` : ''}`).join(' • ')}</p>
          </section>
        )}
      </div>

      {certifications.length > 0 && (
        <section className="minimalist-section">
          <h2>{translate('section.certifications')}</h2>
          {certifications.map((cert, idx) => (
            <div key={cert.id || idx} className="minimalist-item">
              <strong>{cert.name}</strong>
              <p>{cert.issuer} {cert.date && `• ${formatDate(cert.date)}`}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}