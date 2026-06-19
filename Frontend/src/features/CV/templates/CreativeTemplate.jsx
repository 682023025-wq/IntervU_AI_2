// src/features/CV/templates/CreativeTemplate.jsx
import { t } from '../translations';
import './CreativeTemplate.css';

export default function CreativeTemplate({ cvData, language = 'id' }) {
  const { 
    personalInfo = {}, 
    profileSummary = '', 
    skills = [], 
    workExperience = [],
    internshipExperience = [],
    education = [],
    projects = [],
    achievements = [],
    languages: cvLanguages = [],
    links = [],
    formatDate = (d) => d
  } = cvData;

  const translate = (key) => t(key, language);
  const allExperience = [...(workExperience || []), ...(internshipExperience || [])];

  return (
    <div className="creative-cv">
      <header className="creative-header">
        <div className="creative-header-bg"></div>
        <div className="creative-header-content">
          {personalInfo.photo?.url && (
            <div className="creative-photo">
              <img src={personalInfo.photo.url} alt="Profile" />
            </div>
          )}
          <div className="creative-info">
            <h1 className="creative-name">{personalInfo.fullName || 'Your Name'}</h1>
            <div className="creative-contact">
              {personalInfo.email && <span>✉ {personalInfo.email}</span>}
              {personalInfo.phone && <span>☎ {personalInfo.phone}</span>}
              {personalInfo.address && <span>⚲ {personalInfo.address}</span>}
            </div>
            {links.length > 0 && (
              <div className="creative-links">
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

      <div className="creative-body">
        {profileSummary && (
          <section className="creative-section creative-about">
            <h2 className="creative-title">{translate('section.summary')}</h2>
            <p>{profileSummary}</p>
          </section>
        )}

        <div className="creative-grid">
          <div className="creative-col-main">
            {allExperience.length > 0 && (
              <section className="creative-section">
                <h2 className="creative-title">{translate('section.experience')}</h2>
                <div className="creative-timeline">
                  {allExperience.map((exp, idx) => (
                    <div key={exp.id || idx} className="creative-timeline-item">
                      <div className="creative-timeline-dot"></div>
                      <div className="creative-timeline-content">
                        <h3>{exp.position}</h3>
                        <p className="creative-timeline-company">{exp.company}</p>
                        <p className="creative-timeline-date">
                          {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : translate('label.present')}
                        </p>
                        {exp.description && <p>{exp.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {projects.length > 0 && (
              <section className="creative-section">
                <h2 className="creative-title">{translate('section.projects')}</h2>
                <div className="creative-projects">
                  {projects.map((project, idx) => (
                    <div key={project.id || idx} className="creative-project-card">
                      <h3>{project.name}</h3>
                      {project.role && <p className="creative-project-role">{project.role}</p>}
                      {project.technologies && (
                        <div className="creative-tags">
                          {project.technologies.split(',').map((tech, i) => (
                            <span key={i} className="creative-tag">{tech.trim()}</span>
                          ))}
                        </div>
                      )}
                      {project.description && <p>{project.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="creative-col-side">
            {skills.length > 0 && (
              <section className="creative-section">
                <h2 className="creative-title">{translate('section.skills')}</h2>
                <div className="creative-skills-cloud">
                  {skills.map((skill, idx) => (
                    <span 
                      key={skill.id || idx} 
                      className="creative-skill-bubble"
                      style={{ fontSize: `${0.7 + (skill.level || 3) * 0.1}rem` }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {education.length > 0 && (
              <section className="creative-section">
                <h2 className="creative-title">{translate('section.education')}</h2>
                {education.map((edu, idx) => (
                  <div key={edu.id || idx} className="creative-edu-item">
                    <h3>{edu.degree}</h3>
                    <p>{edu.institution}</p>
                    <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                  </div>
                ))}
              </section>
            )}

            {cvLanguages.length > 0 && (
              <section className="creative-section">
                <h2 className="creative-title">{translate('section.languages')}</h2>
                <div className="creative-langs">
                  {cvLanguages.map((lang, idx) => (
                    <div key={lang.id || idx} className="creative-lang-item">
                      <span>{lang.language}</span>
                      <div className="creative-lang-dots">
                        {[1, 2, 3, 4, 5].map((lvl) => {
                          const profLevel = { 'Pemula': 1, 'Dasar': 2, 'Menengah': 3, 'Mahir': 4, 'Native': 5 }[lang.proficiency] || 3;
                          return <div key={lvl} className={`creative-lang-dot ${profLevel >= lvl ? 'filled' : ''}`} />;
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {achievements.length > 0 && (
              <section className="creative-section">
                <h2 className="creative-title">{translate('section.achievements')}</h2>
                {achievements.map((ach, idx) => (
                  <div key={ach.id || idx} className="creative-achievement">
                    <span className="creative-achievement-icon">🏆</span>
                    <div>
                      <strong>{ach.title}</strong>
                      <p>{ach.event}</p>
                    </div>
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}