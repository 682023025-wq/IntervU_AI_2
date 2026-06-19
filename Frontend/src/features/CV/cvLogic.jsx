// src/features/CV/cvLogic.jsx
import { createContext, useContext, useReducer, useEffect } from 'react';
import { DEFAULT_CV_DATA } from './cvData';

const CVContext = createContext();

const initialState = {
  cvData: DEFAULT_CV_DATA,
  currentStep: 1,
  selectedTemplate: 'modern',
  language: 'id',
  paperSize: 'a4', // BARU: Ukuran kertas default
};

function cvReducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_STEP': 
      return { ...state, currentStep: action.payload };
    
    case 'SET_TEMPLATE':
      return { ...state, selectedTemplate: action.payload };
    
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    
    case 'SET_PAPER_SIZE': // BARU
      return { ...state, paperSize: action.payload };
    
    case 'IMPORT_CV_DATA': 
      return { ...state, cvData: action.payload };
    
    case 'RESET_CV':
      return { ...initialState, cvData: DEFAULT_CV_DATA };

    // ... (semua case lainnya tetap sama)
    case 'UPDATE_PROFILE_SUMMARY': 
      return { ...state, cvData: { ...state.cvData, profileSummary: action.payload } };
    case 'UPDATE_PHOTO': 
      return { ...state, cvData: { ...state.cvData, photo: action.payload } };
    case 'ADD_CONTACT': 
      return { ...state, cvData: { ...state.cvData, contactInfo: [...(state.cvData.contactInfo || []), action.payload] } };
    case 'REMOVE_CONTACT': 
      return { ...state, cvData: { ...state.cvData, contactInfo: (state.cvData.contactInfo || []).filter(c => c.value !== action.payload) } };
    case 'UPDATE_CONTACT':
      return { ...state, cvData: { ...state.cvData, contactInfo: (state.cvData.contactInfo || []).map(c => c.type === action.payload.type ? { ...c, value: action.payload.value } : c) } };
    case 'ADD_SKILL': 
      return { ...state, cvData: { ...state.cvData, skills: [...(state.cvData.skills || []), action.payload] } };
    case 'REMOVE_SKILL': 
      return { ...state, cvData: { ...state.cvData, skills: (state.cvData.skills || []).filter(s => s.id !== action.payload) } };
    case 'UPDATE_SKILL_LEVEL': 
      return { ...state, cvData: { ...state.cvData, skills: (state.cvData.skills || []).map(s => s.id === action.payload.id ? { ...s, level: action.payload.level } : s) } };
    case 'ADD_WORK_EXPERIENCE': 
      return { ...state, cvData: { ...state.cvData, workExperience: [...(state.cvData.workExperience || []), action.payload] } };
    case 'UPDATE_WORK_EXPERIENCE': 
      return { ...state, cvData: { ...state.cvData, workExperience: action.payload } };
    case 'REMOVE_WORK_EXPERIENCE': 
      return { ...state, cvData: { ...state.cvData, workExperience: (state.cvData.workExperience || []).filter(e => e.id !== action.payload) } };
    case 'ADD_INTERNSHIP_EXPERIENCE': 
      return { ...state, cvData: { ...state.cvData, internshipExperience: [...(state.cvData.internshipExperience || []), action.payload] } };
    case 'UPDATE_INTERNSHIP_EXPERIENCE': 
      return { ...state, cvData: { ...state.cvData, internshipExperience: action.payload } };
    case 'REMOVE_INTERNSHIP_EXPERIENCE': 
      return { ...state, cvData: { ...state.cvData, internshipExperience: (state.cvData.internshipExperience || []).filter(e => e.id !== action.payload) } };
    case 'ADD_ORGANIZATION_EXPERIENCE': 
      return { ...state, cvData: { ...state.cvData, organizationExperience: [...(state.cvData.organizationExperience || []), action.payload] } };
    case 'UPDATE_ORGANIZATION_EXPERIENCE': 
      return { ...state, cvData: { ...state.cvData, organizationExperience: action.payload } };
    case 'REMOVE_ORGANIZATION_EXPERIENCE': 
      return { ...state, cvData: { ...state.cvData, organizationExperience: (state.cvData.organizationExperience || []).filter(e => e.id !== action.payload) } };
    case 'ADD_COMMITTEE_EXPERIENCE': 
      return { ...state, cvData: { ...state.cvData, committeeExperience: [...(state.cvData.committeeExperience || []), action.payload] } };
    case 'UPDATE_COMMITTEE_EXPERIENCE': 
      return { ...state, cvData: { ...state.cvData, committeeExperience: action.payload } };
    case 'REMOVE_COMMITTEE_EXPERIENCE': 
      return { ...state, cvData: { ...state.cvData, committeeExperience: (state.cvData.committeeExperience || []).filter(e => e.id !== action.payload) } };
    case 'ADD_EDUCATION': 
      return { ...state, cvData: { ...state.cvData, education: [...(state.cvData.education || []), action.payload] } };
    case 'UPDATE_EDUCATION': 
      return { ...state, cvData: { ...state.cvData, education: action.payload } };
    case 'REMOVE_EDUCATION': 
      return { ...state, cvData: { ...state.cvData, education: (state.cvData.education || []).filter(e => e.id !== action.payload) } };
    case 'ADD_PROJECT': 
      return { ...state, cvData: { ...state.cvData, projects: [...(state.cvData.projects || []), action.payload] } };
    case 'UPDATE_PROJECTS': 
      return { ...state, cvData: { ...state.cvData, projects: action.payload } };
    case 'REMOVE_PROJECT': 
      return { ...state, cvData: { ...state.cvData, projects: (state.cvData.projects || []).filter(p => p.id !== action.payload) } };
    case 'ADD_CERTIFICATION': 
      return { ...state, cvData: { ...state.cvData, certifications: [...(state.cvData.certifications || []), action.payload] } };
    case 'UPDATE_CERTIFICATIONS': 
      return { ...state, cvData: { ...state.cvData, certifications: action.payload } };
    case 'REMOVE_CERTIFICATION': 
      return { ...state, cvData: { ...state.cvData, certifications: (state.cvData.certifications || []).filter(c => c.id !== action.payload) } };
    case 'ADD_ACHIEVEMENT': 
      return { ...state, cvData: { ...state.cvData, achievements: [...(state.cvData.achievements || []), action.payload] } };
    case 'UPDATE_ACHIEVEMENTS': 
      return { ...state, cvData: { ...state.cvData, achievements: action.payload } };
    case 'REMOVE_ACHIEVEMENT': 
      return { ...state, cvData: { ...state.cvData, achievements: (state.cvData.achievements || []).filter(a => a.id !== action.payload) } };
    case 'ADD_LANGUAGE': 
      return { ...state, cvData: { ...state.cvData, languages: [...(state.cvData.languages || []), action.payload] } };
    case 'UPDATE_LANGUAGES': 
      return { ...state, cvData: { ...state.cvData, languages: action.payload } };
    case 'REMOVE_LANGUAGE': 
      return { ...state, cvData: { ...state.cvData, languages: (state.cvData.languages || []).filter(l => l.language !== action.payload) } };
    case 'UPDATE_ADDITIONAL_INFO': 
      return { ...state, cvData: { ...state.cvData, additionalInfo: action.payload } };

    default: 
      return state;
  }
}

export const CVProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cvReducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem('cv_draft');
    const savedTemplate = localStorage.getItem('cv_template');
    const savedLanguage = localStorage.getItem('cv_language');
    const savedPaperSize = localStorage.getItem('cv_paper_size'); // BARU
    
    if (saved) {
      try { dispatch({ type: 'IMPORT_CV_DATA', payload: JSON.parse(saved) }); } 
      catch (e) { console.error('Error loading CV', e); }
    }
    
    if (savedTemplate) dispatch({ type: 'SET_TEMPLATE', payload: savedTemplate });
    if (savedLanguage) dispatch({ type: 'SET_LANGUAGE', payload: savedLanguage });
    if (savedPaperSize) dispatch({ type: 'SET_PAPER_SIZE', payload: savedPaperSize }); // BARU
  }, []);

  const exportCVData = () => {
    localStorage.setItem('cv_draft', JSON.stringify(state.cvData));
    localStorage.setItem('cv_template', state.selectedTemplate);
    localStorage.setItem('cv_language', state.language);
    localStorage.setItem('cv_paper_size', state.paperSize); // BARU
    return state.cvData;
  };

  const value = {
    state,
    dispatch,
    setCurrentStep: (step) => dispatch({ type: 'SET_CURRENT_STEP', payload: step }),
    setTemplate: (template) => {
      dispatch({ type: 'SET_TEMPLATE', payload: template });
      localStorage.setItem('cv_template', template);
    },
    setLanguage: (language) => {
      dispatch({ type: 'SET_LANGUAGE', payload: language });
      localStorage.setItem('cv_language', language);
    },
    setPaperSize: (size) => { // BARU
      dispatch({ type: 'SET_PAPER_SIZE', payload: size });
      localStorage.setItem('cv_paper_size', size);
    },
    importCVData: (data) => dispatch({ type: 'IMPORT_CV_DATA', payload: data }),
    resetCV: () => {
      dispatch({ type: 'RESET_CV' });
      localStorage.removeItem('cv_draft');
      localStorage.removeItem('cv_template');
      localStorage.removeItem('cv_language');
      localStorage.removeItem('cv_paper_size');
    },
    exportCVData,
    
    // Contact
    addContact: (c) => dispatch({ type: 'ADD_CONTACT', payload: c }),
    removeContact: (v) => dispatch({ type: 'REMOVE_CONTACT', payload: v }),
    updateContact: (type, value) => dispatch({ type: 'UPDATE_CONTACT', payload: { type, value } }),
    
    // Profile & Photo
    updateProfileSummary: (p) => dispatch({ type: 'UPDATE_PROFILE_SUMMARY', payload: p }),
    updatePhoto: (p) => dispatch({ type: 'UPDATE_PHOTO', payload: p }),
    
    // Skills
    addSkill: (s) => dispatch({ type: 'ADD_SKILL', payload: s }),
    removeSkill: (id) => dispatch({ type: 'REMOVE_SKILL', payload: id }),
    updateSkillLevel: (id, level) => dispatch({ type: 'UPDATE_SKILL_LEVEL', payload: { id, level } }),
    
    // Work Experience
    addWorkExperience: (e) => dispatch({ type: 'ADD_WORK_EXPERIENCE', payload: e }),
    updateWorkExperience: (e) => dispatch({ type: 'UPDATE_WORK_EXPERIENCE', payload: e }),
    removeWorkExperience: (id) => dispatch({ type: 'REMOVE_WORK_EXPERIENCE', payload: id }),
    
    // Internship
    addInternshipExperience: (e) => dispatch({ type: 'ADD_INTERNSHIP_EXPERIENCE', payload: e }),
    updateInternshipExperience: (e) => dispatch({ type: 'UPDATE_INTERNSHIP_EXPERIENCE', payload: e }),
    removeInternshipExperience: (id) => dispatch({ type: 'REMOVE_INTERNSHIP_EXPERIENCE', payload: id }),
    
    // Organization
    addOrganizationExperience: (e) => dispatch({ type: 'ADD_ORGANIZATION_EXPERIENCE', payload: e }),
    updateOrganizationExperience: (e) => dispatch({ type: 'UPDATE_ORGANIZATION_EXPERIENCE', payload: e }),
    removeOrganizationExperience: (id) => dispatch({ type: 'REMOVE_ORGANIZATION_EXPERIENCE', payload: id }),
    
    // Committee
    addCommitteeExperience: (e) => dispatch({ type: 'ADD_COMMITTEE_EXPERIENCE', payload: e }),
    updateCommitteeExperience: (e) => dispatch({ type: 'UPDATE_COMMITTEE_EXPERIENCE', payload: e }),
    removeCommitteeExperience: (id) => dispatch({ type: 'REMOVE_COMMITTEE_EXPERIENCE', payload: id }),
    
    // Education
    addEducation: (e) => dispatch({ type: 'ADD_EDUCATION', payload: e }),
    updateEducation: (e) => dispatch({ type: 'UPDATE_EDUCATION', payload: e }),
    removeEducation: (id) => dispatch({ type: 'REMOVE_EDUCATION', payload: id }),
    
    // Projects
    addProject: (p) => dispatch({ type: 'ADD_PROJECT', payload: p }),
    updateProjects: (p) => dispatch({ type: 'UPDATE_PROJECTS', payload: p }),
    removeProject: (id) => dispatch({ type: 'REMOVE_PROJECT', payload: id }),
    
    // Certifications
    addCertification: (c) => dispatch({ type: 'ADD_CERTIFICATION', payload: c }),
    updateCertifications: (c) => dispatch({ type: 'UPDATE_CERTIFICATIONS', payload: c }),
    removeCertification: (id) => dispatch({ type: 'REMOVE_CERTIFICATION', payload: id }),
    
    // Achievements
    addAchievement: (a) => dispatch({ type: 'ADD_ACHIEVEMENT', payload: a }),
    updateAchievements: (a) => dispatch({ type: 'UPDATE_ACHIEVEMENTS', payload: a }),
    removeAchievement: (id) => dispatch({ type: 'REMOVE_ACHIEVEMENT', payload: id }),
    
    // Languages
    addLanguage: (l) => dispatch({ type: 'ADD_LANGUAGE', payload: l }),
    updateLanguages: (l) => dispatch({ type: 'UPDATE_LANGUAGES', payload: l }),
    removeLanguage: (lang) => dispatch({ type: 'REMOVE_LANGUAGE', payload: lang }),
    
    // Additional Info
    updateAdditionalInfo: (info) => dispatch({ type: 'UPDATE_ADDITIONAL_INFO', payload: info }),
  };

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
};

export const useCV = () => {
  const context = useContext(CVContext);
  if (!context) throw new Error('useCV must be used within CVProvider');
  return context;
};