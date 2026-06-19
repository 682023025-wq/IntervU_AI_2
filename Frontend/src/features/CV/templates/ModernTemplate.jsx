// src/features/CV/templates/ModernTemplate.jsx
import { t } from '../translations';
import './ModernTemplate.css';

export default function ModernTemplate({ cvData, language = 'id' }) {
  const { 
    personalInfo = {}, 
    profileSummary = '', 
    skills = [], 
    workExperience = [],
    internshipExperience = [],
    organizationExperience = [],
    committeeExperience = [],
    education = [],
    certifications = [],
    projects = [],
    achievements = [],
    languages: cvLanguages = [],
    additionalInfo = '',
    links = [],
    formatDate = (d) => d
  } = cvData;

  const translate = (key) => t(key, language);
  const allExperience = [...(workExperience || []), ...(internshipExperience || [])];
  const allOrganization = [
    ...(organizationExperience || []).map(o => ({ ...o, _type: 'organization' })),
    ...(committeeExperience || []).map(c => ({ ...c, _type: 'committee' }))
  ];

  return (
    <div className="modern-cv">
      {/* Header dengan gradient */}
      <header className="modern-header">
        <div className="modern-header-content">
          {personalInfo.photo?.url && (
            <div className="modern-photo">
              <img src={personalInfo.photo.url} alt="Profile" />
            </div>
          )}
          <div className="modern-header-info">
            <h1 className="modern-name">{personalInfo.fullName || 'Your Name'}</h1>
            <div className="modern-contact-row">
              {personalInfo.email && <span>📧 {personalInfo.email}</span>}
              {personalInfo.phone && <span>📱 {personalInfo.phone}</span>}
              {personalInfo.address && <span>📍 {personalInfo.address}</span>}
            </div>
            {links.length > 0 && (
              <div className="modern-links-row">
                {links.map((link, idx) => (
                  <a key={idx} href={link.value.startsWith('http') ? link.value : `https://${link.value}`} target="_blank" rel="noopener noreferrer">
                    {translate(`contact.${link.type}`) || link.type}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="modern-body">
        {/* Main Column */}
        <div className="modern-main">
          {profileSummary && (
            <section className="modern-section">
              <h2 className="modern-section-title">{translate('section.summary')}</h2>
              <p className="modern-text">{profileSummary}</p>
            </section>
          )}

          {allExperience.length > 0 && (
            <section className="modern-section">
              <h2 className="modern-section-title">{translate('section.experience')}</h2>
              {allExperience.map((exp, idx) => (
                <div key={exp.id || idx} className="modern-exp-item">
                  <div className="modern-exp-header">
                    <h3>{exp.position}</h3>
                    <span className="modern-exp-date">
                      {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : translate('label.present')}
                    </span>
                  </div>
                  <p className="modern-exp-company">{exp.company} • {exp.location}</p>
                  {exp.description && <p className="modern-exp-desc">{exp.description}</p>}
                </div>
              ))}
            </section>
          )}

          {projects.length > 0 && (
            <section className="modern-section">
              <h2 className="modern-section-title">{translate('section.projects')}</h2>
              {projects.map((project, idx) => (
                <div key={project.id || idx} className="modern-project">
                  <h3>{project.name}</h3>
                  {project.role && <p className="modern-project-role">{project.role}</p>}
                  {project.technologies && <p className="modern-project-tech">🛠️ {project.technologies}</p>}
                  {project.description && <p className="modern-exp-desc">{project.description}</p>}
                  {project.links && project.links.length > 0 && (
                    <div className="modern-project-links">
                      {project.links.map((link, lidx) => (
                        <a key={lidx} href={link.url.startsWith('http') ? link.url : `https://${link.url}`} target="_blank" rel="noopener noreferrer">
                          {link.type}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>
          )}

          {education.length > 0 && (
            <section className="modern-section">
              <h2 className="modern-section-title">{translate('section.education')}</h2>
              {education.map((edu, idx) => (
                <div key={edu.id || idx} className="modern-exp-item">
                  <div className="modern-exp-header">
                    <h3>{edu.degree}</h3>
                    <span className="modern-exp-date">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </span>
                  </div>
                  <p className="modern-exp-company">{edu.institution} • {edu.location}</p>
                  {edu.gpa && <p className="modern-exp-desc">{translate('label.gpa')}: {edu.gpa}</p>}
                  {edu.description && <p className="modern-exp-desc">{edu.description}</p>}
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="modern-sidebar">
          {skills.length > 0 && (
            <section className="modern-sidebar-section">
              <h2 className="modern-sidebar-title">{translate('section.skills')}</h2>
              <div className="modern-skills-list">
                {skills.map((skill, idx) => (
                  <div key={skill.id || idx} className="modern-skill">
                    <span>{skill.name}</span>
                    {skill.level && (
                      <div className="modern-skill-dots">
                        {[1, 2, 3, 4].map((lvl) => (
                          <div key={lvl} className={`modern-skill-dot ${skill.level >= lvl ? 'filled' : ''}`} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {cvLanguages.length > 0 && (
            <section className="modern-sidebar-section">
              <h2 className="modern-sidebar-title">{translate('section.languages')}</h2>
              {cvLanguages.map((lang, idx) => (
                <div key={lang.id || idx} className="modern-lang-item">
                  <span>{lang.language}</span>
                  {lang.proficiency && <span className="modern-lang-level">{lang.proficiency}</span>}
                </div>
              ))}
            </section>
          )}

          {certifications.length > 0 && (
            <section className="modern-sidebar-section">
              <h2 className="modern-sidebar-title">{translate('section.certifications')}</h2>
              {certifications.map((cert, idx) => (
                <div key={cert.id || idx} className="modern-cert-item">
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                  {cert.date && <p className="modern-date">{formatDate(cert.date)}</p>}
                </div>
              ))}
            </section>
          )}

          {achievements.length > 0 && (
            <section className="modern-sidebar-section">
              <h2 className="modern-sidebar-title">{translate('section.achievements')}</h2>
              {achievements.map((ach, idx) => (
                <div key={ach.id || idx} className="modern-cert-item">
                  <h4>{ach.title}</h4>
                  <p>{ach.event}</p>
                  {ach.date && <p className="modern-date">{formatDate(ach.date)}</p>}
                </div>
              ))}
            </section>
          )}

          {allOrganization.length > 0 && (
            <section className="modern-sidebar-section">
              <h2 className="modern-sidebar-title">{translate('section.organization')}</h2>
              {allOrganization.map((org, idx) => (
                <div key={org.id || idx} className="modern-cert-item">
                  <h4>{org.position}</h4>
                  <p>{org._type === 'organization' ? org.organization : org.eventName}</p>
                  {org.period && <p className="modern-date">{org.period}</p>}
                </div>
              ))}
            </section>
          )}

          {additionalInfo && (
            <section className="modern-sidebar-section">
              <h2 className="modern-sidebar-title">{translate('section.additional')}</h2>
              <p className="modern-text">{additionalInfo}</p>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}