// src/features/CV/components/TemplateSelector.jsx
import { t } from '../features/CV/translations';
import { useCV } from './../features/CV/cvLogic';
import './TemplateSelector.css';

export default function TemplateSelector({ selectedTemplate, onSelectTemplate }) {
  const { state } = useCV();
  const language = state.language || 'id';

  const templates = [
    { 
      id: 'modern', 
      nameKey: 'template.modern',
      descKey: 'template.modern.desc',
      color: '#0F4C75',
      preview: 'modern'
    },
    { 
      id: 'classic', 
      nameKey: 'template.classic',
      descKey: 'template.classic.desc',
      color: '#1e293b',
      preview: 'classic'
    },
    { 
      id: 'minimalist', 
      nameKey: 'template.minimalist',
      descKey: 'template.minimalist.desc',
      color: '#64748b',
      preview: 'minimalist'
    },
    { 
      id: 'professional', 
      nameKey: 'template.professional',
      descKey: 'template.professional.desc',
      color: '#1e293b',
      preview: 'professional'
    },
    { 
      id: 'creative', 
      nameKey: 'template.creative',
      descKey: 'template.creative.desc',
      color: '#667eea',
      preview: 'creative'
    },
  ];

  return (
    <div className="template-selector">
      <div className="template-grid">
        {templates.map((template) => (
          <div 
            key={template.id}
            className={`template-card ${selectedTemplate === template.id ? 'template-card-selected' : ''}`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <div className="template-preview" style={{ background: `linear-gradient(135deg, ${template.color}22 0%, ${template.color}11 100%)` }}>
              <div className={`template-preview-thumb template-preview-${template.preview}`} />
            </div>
            <div className="template-info">
              <h4 className="template-name">{t(template.nameKey, language)}</h4>
              <p className="template-description">{t(template.descKey, language)}</p>
            </div>
            {selectedTemplate === template.id && (
              <div className="template-badge">✓ Dipilih</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}