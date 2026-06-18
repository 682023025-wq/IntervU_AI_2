// src/features/CV/cvLogic.js
import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';

const CVContext = createContext();

const initialState = {
  currentStep: 1,
  cvData: {
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      portfolio: ''
    },
    summary: '',
    skills: {
      technical: [],
      soft: [],
      tools: [],
      languages: []
    },
    experiences: [],
    education: []
  }
};

function cvReducer(state, action) {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    
    case 'UPDATE_PERSONAL_INFO':
      return {
        ...state,
        cvData: {
          ...state.cvData,
          personalInfo: { ...state.cvData.personalInfo, ...action.payload }
        }
      };
    
    case 'UPDATE_SUMMARY':
      return {
        ...state,
        cvData: { ...state.cvData, summary: action.payload }
      };
    
    case 'UPDATE_SKILLS':
      return {
        ...state,
        cvData: {
          ...state.cvData,
          skills: { ...state.cvData.skills, ...action.payload }
        }
      };
    
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        cvData: {
          ...state.cvData,
          experiences: [...state.cvData.experiences, { id: Date.now(), ...action.payload }]
        }
      };
    
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        cvData: {
          ...state.cvData,
          experiences: state.cvData.experiences.map(exp =>
            exp.id === action.payload.id ? { ...exp, ...action.payload.data } : exp
          )
        }
      };
    
    case 'DELETE_EXPERIENCE':
      return {
        ...state,
        cvData: {
          ...state.cvData,
          experiences: state.cvData.experiences.filter(exp => exp.id !== action.payload)
        }
      };
    
    case 'ADD_EDUCATION':
      return {
        ...state,
        cvData: {
          ...state.cvData,
          education: [...state.cvData.education, { id: Date.now(), ...action.payload }]
        }
      };
    
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        cvData: {
          ...state.cvData,
          education: state.cvData.education.map(edu =>
            edu.id === action.payload.id ? { ...edu, ...action.payload.data } : edu
          )
        }
      };
    
    case 'DELETE_EDUCATION':
      return {
        ...state,
        cvData: {
          ...state.cvData,
          education: state.cvData.education.filter(edu => edu.id !== action.payload)
        }
      };
    
    case 'LOAD_DATA':
      return { ...state, cvData: action.payload };
    
    default:
      return state;
  }
}

export function CVProvider({ children }) {
  const [state, dispatch] = useReducer(cvReducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem('cv_draft');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        dispatch({ type: 'LOAD_DATA', payload: data });
      } catch (e) {
        console.error('Error loading CV data:', e);
      }
    }
  }, []);

  const setCurrentStep = useCallback((step) => {
    dispatch({ type: 'SET_STEP', payload: step });
  }, []);

  const updatePersonalInfo = useCallback((data) => {
    dispatch({ type: 'UPDATE_PERSONAL_INFO', payload: data });
  }, []);

  const updateSummary = useCallback((data) => {
    dispatch({ type: 'UPDATE_SUMMARY', payload: data });
  }, []);

  const updateSkills = useCallback((data) => {
    dispatch({ type: 'UPDATE_SKILLS', payload: data });
  }, []);

  const addExperience = useCallback((data) => {
    dispatch({ type: 'ADD_EXPERIENCE', payload: data });
  }, []);

  const updateExperience = useCallback((id, data) => {
    dispatch({ type: 'UPDATE_EXPERIENCE', payload: { id, data } });
  }, []);

  const deleteExperience = useCallback((id) => {
    dispatch({ type: 'DELETE_EXPERIENCE', payload: id });
  }, []);

  const addEducation = useCallback((data) => {
    dispatch({ type: 'ADD_EDUCATION', payload: data });
  }, []);

  const updateEducation = useCallback((id, data) => {
    dispatch({ type: 'UPDATE_EDUCATION', payload: { id, data } });
  }, []);

  const deleteEducation = useCallback((id) => {
    dispatch({ type: 'DELETE_EDUCATION', payload: id });
  }, []);

  const exportCVData = useCallback(() => {
    return state.cvData;
  }, [state.cvData]);

  return (
    <CVContext.Provider value={{
      state,
      setCurrentStep,
      updatePersonalInfo,
      updateSummary,
      updateSkills,
      addExperience,
      updateExperience,
      deleteExperience,
      addEducation,
      updateEducation,
      deleteEducation,
      exportCVData
    }}>
      {children}
    </CVContext.Provider>
  );
}

export function useCV() {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error('useCV must be used within CVProvider');
  }
  return context;
}