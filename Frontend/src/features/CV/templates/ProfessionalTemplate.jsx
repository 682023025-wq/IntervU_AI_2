// src/features/CV/templates/ProfessionalTemplate.jsx
import { t } from '../translations';
import './ProfessionalTemplate.css';

export default function ProfessionalTemplate({ cvData, language = 'id' }) {
  const { 
    personalInfo = {}, 
    profileSummary = '', 
    skills = [], 
    workExperience = [],
    internshipExperience = [],
    organizationExperience = [],
    education = [],
    certifications = [],
    achievements = [],
    languages: cvLanguages = [],
    links = [],
    formatDate = (d) => d
  } = cvData;

  const translate = (key) => t(key, language);
  const allExperience = [...(workExperience || []), ...(internshipExperience || [])];

  return (
    <div className="professional-cv">
      <header className="professional-header">
        <div className="professional-header-left">
          <h1 className="professional-name">{personalInfo.fullName || 'Your Name'}</h1>
          {profileSummary && <p className="professional-summary">{profileSummary}</p>}
        </div>
        {personalInfo.photo?.url && (
          <div className="professional-photo">
            <img src={personalInfo.photo.url} alt="Profile" />
          </div>
        )}
      </header>

      <div className="professional-contact-bar">
        {personalInfo.email && <span>📧 {personalInfo.email}</span>}
        {personalInfo.phone && <span>📱 {personalInfo.phone}</span>}
        {personalInfo.address && <span>📍 {personalInfo.address}</span>}
        {links.slice(0, 3).map((link, idx) => (
          <a key={idx} href={link.value.startsWith('http') ? link.value : `https://${link.value}`} target="_blank" rel="noopener noreferrer">
            {translate(`contact.${link.type}`) || link.type}
          </a>
        ))}
      </div>

      <div className="professional-body">
        <div className="professional-main">
          {allExperience.length > 0 && (
            <section className="professional-section">
              <h2>{translate('section.experience')}</h2>
              {allExperience.map((exp, idx) => (
                <div key={exp.id || idx} className="professional-exp">
                  <div className="professional-exp-top">
                    <h3>{exp.position}</h3>
                    <span>{formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : translate('label.present')}</span>
                  </div>
                  <p className="professional-exp-company">{exp.company} | {exp.location}</p>
                  {exp.description && <p>{exp.description}</p>}
                </div>
              ))}
            </section>
          )}

          {education.length > 0 && (
            <section className="professional-section">
              <h2>{translate('section.education')}</h2>
              {education.map((edu, idx) => (
                <div key={edu.id || idx} className="professional-exp">
                  <div className="professional-exp-top">
                    <h3>{edu.degree}</h3>
                    <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                  </div>
                  <p className="professional-exp-company">{edu.institution} | {edu.location}</p>
                  {edu.gpa && <p>{translate('label.gpa')}: {edu.gpa}</p>}
                </div>
              ))}
            </section>
          )}
        </div>

        <aside className="professional-sidebar">
          {skills.length > 0 && (
            <section className="professional-side-section">
              <h2>{translate('section.skills')}</h2>
              <div className="professional-skills">
                {skills.map((skill, idx) => (
                  <div key={skill.id || idx} className="professional-skill-item">
                    <span>{skill.name}</span>
                    {skill.level && (
                      <div className="professional-skill-bar">
                        <div className="professional-skill-fill" style={{ width: `${(skill.level / 4) * 100}%` }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {organizationExperience.length > 0 && (
            <section className="professional-side-section">
              <h2>{translate('section.organization')}</h2>
              {organizationExperience.map((org, idx) => (
                <div key={org.id || idx} className="professional-side-item">
                  <strong>{org.position}</strong>
                  <p>{org.organization}</p>
                  {org.period && <span>{org.period}</span>}
                </div>
              ))}
            </section>
          )}

          {certifications.length > 0 && (
            <section className="professional-side-section">
              <h2>{translate('section.certifications')}</h2>
              {certifications.map((cert, idx) => (
                <div key={cert.id || idx} className="professional-side-item">
                  <strong>{cert.name}</strong>
                  <p>{cert.issuer}</p>
                  {cert.date && <span>{formatDate(cert.date)}</span>}
                </div>
              ))}
            </section>
          )}

          {achievements.length > 0 && (
            <section className="professional-side-section">
              <h2>{translate('section.achievements')}</h2>
              {achievements.map((ach, idx) => (
                <div key={ach.id || idx} className="professional-side-item">
                  <strong>{ach.title}</strong>
                  <p>{ach.event}</p>
                </div>
              ))}
            </section>
          )}

          {cvLanguages.length > 0 && (
            <section className="professional-side-section">
              <h2>{translate('section.languages')}</h2>
              {cvLanguages.map((lang, idx) => (
                <div key={lang.id || idx} className="professional-lang">
                  <span>{lang.language}</span>
                  <span>{lang.proficiency}</span>
                </div>
              ))}
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}