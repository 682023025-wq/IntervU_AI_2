// src/features/CV/CVPreview.jsx
import { useCV } from './cvLogic';
import { ModernTemplate, ClassicTemplate, MinimalistTemplate, ProfessionalTemplate, CreativeTemplate } from './templates';
import './CVPreview.css';

export default function CVPreview({ cvData: propCvData, template: propTemplate }) {
  const { state } = useCV();
  
  const cvData = propCvData || state.cvData;
  const selectedTemplate = propTemplate || state.selectedTemplate || 'modern';
  const language = state.language || 'id';

  if (!cvData) {
    return (
      <div className="cv-preview-empty">
        <p>Mulai isi data CV untuk melihat preview</p>
      </div>
    );
  }

  // Helper: Format date (multi-language)
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    if (dateStr === 'Sekarang' || dateStr === 'Present') {
      return language === 'id' ? 'Sekarang' : 'Present';
    }
    
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      
      const monthsID = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
      const monthsEN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const months = language === 'id' ? monthsID : monthsEN;
      
      return `${months[date.getMonth()]} ${date.getFullYear()}`;
    } catch (e) {
      return dateStr;
    }
  };

  // Helper: Extract contact by type
  const getContact = (type) => {
    const contact = (cvData.contactInfo || []).find(c => c.type === type);
    return contact?.value || '';
  };

  const getAllLinks = () => {
    return (cvData.contactInfo || []).filter(c => !['email', 'phone', 'address'].includes(c.type));
  };

  const hasData = () => {
    const hasName = getContact('email') || getContact('phone');
    const hasSummary = cvData.profileSummary && cvData.profileSummary.trim();
    const hasSkills = cvData.skills && cvData.skills.length > 0;
    const hasWork = cvData.workExperience && cvData.workExperience.length > 0;
    const hasIntern = cvData.internshipExperience && cvData.internshipExperience.length > 0;
    const hasEdu = cvData.education && cvData.education.length > 0;
    const hasProjects = cvData.projects && cvData.projects.length > 0;
    const hasCerts = cvData.certifications && cvData.certifications.length > 0;
    const hasAch = cvData.achievements && cvData.achievements.length > 0;
    const hasLangs = cvData.languages && cvData.languages.length > 0;
    const hasOrg = cvData.organizationExperience && cvData.organizationExperience.length > 0;
    const hasCom = cvData.committeeExperience && cvData.committeeExperience.length > 0;

    return hasName || hasSummary || hasSkills || hasWork || hasIntern || 
           hasEdu || hasProjects || hasCerts || hasAch || hasLangs || hasOrg || hasCom;
  };

  const transformedData = {
    personalInfo: {
      fullName: getContact('fullName') || 'Nama Anda',
      email: getContact('email'),
      phone: getContact('phone'),
      address: getContact('address'),
      photo: cvData.photo || { url: '', publicId: '' },
      linkedin: getContact('linkedin'),
      github: getContact('github'),
      website: getContact('website'),
      instagram: getContact('instagram'),
      twitter: getContact('twitter'),
      youtube: getContact('youtube'),
      tiktok: getContact('tiktok'),
    },
    profileSummary: cvData.profileSummary || '',
    skills: cvData.skills || [],
    workExperience: cvData.workExperience || [],
    internshipExperience: cvData.internshipExperience || [],
    organizationExperience: cvData.organizationExperience || [],
    committeeExperience: cvData.committeeExperience || [],
    education: cvData.education || [],
    certifications: cvData.certifications || [],
    projects: cvData.projects || [],
    achievements: cvData.achievements || [],
    languages: cvData.languages || [],
    additionalInfo: cvData.additionalInfo || '',
    links: getAllLinks(),
    formatDate: formatDate,
  };

  const renderTemplate = () => {
    const props = { cvData: transformedData, language };
    
    switch (selectedTemplate) {
      case 'classic':
        return <ClassicTemplate {...props} />;
      case 'minimalist':
        return <MinimalistTemplate {...props} />;
      case 'professional':
        return <ProfessionalTemplate {...props} />;
      case 'creative':
        return <CreativeTemplate {...props} />;
      case 'modern':
      default:
        return <ModernTemplate {...props} />;
    }
  };

  if (!hasData()) {
    return (
      <div className="cv-preview-empty">
        <p>Mulai isi data CV untuk melihat preview</p>
      </div>
    );
  }

  return (
    <div className="cv-preview-container">
      {renderTemplate()}
    </div>
  );
}