// src/features/CV/CVForm.jsx
import { useCV } from './cvLogic';
import { DEMO_CV_DATA } from './cvData';
import { DownloadIcon, SaveIcon } from '../../components/Icons';
import PersonalInfoForm from './forms/PersonalInfoForm';
import SkillsForm from './forms/SkillsForm';
import ExperienceForm from './forms/ExperienceForm';
import OrganizationForm from './forms/OrganizationForm';
import EducationForm from './forms/EducationForm';
import ProjectsForm from './forms/ProjectsForm';
import './CVForm.css';

export default function CVForm() {
  const { state, setCurrentStep, importCVData, exportCVData } = useCV();

  // Deklarasi fungsi DULU sebelum dipakai di JSX
  const loadDemoData = () => {
    if (window.confirm('Muat data demo? Data saat ini akan ditimpa.')) {
      importCVData(DEMO_CV_DATA);
    }
  };

  const saveData = () => {
    exportCVData();
    alert('Data CV berhasil disimpan ke LocalStorage!');
  };

  const renderCurrentStep = () => {
    switch (state.currentStep) {
      case 1: return <PersonalInfoForm />;
      case 2: return <SkillsForm />;
      case 3: return <ExperienceForm />;
      case 4: return <OrganizationForm />;
      case 5: return <EducationForm />;
      case 6: return <ProjectsForm />;
      default: return null;
    }
  };

  // Return JSX SETELAH semua fungsi dideklarasikan
  return (
    <div className="cv-form-container">
      <div className="cv-form-actions">
        <button type="button" onClick={loadDemoData} className="cv-demo-btn">
          <DownloadIcon size={14} /> Muat Data Demo
        </button>
        <button type="button" onClick={saveData} className="cv-save-btn">
          <SaveIcon size={14} /> Simpan Draft
        </button>
      </div>
      {renderCurrentStep()}
    </div>
  );
}