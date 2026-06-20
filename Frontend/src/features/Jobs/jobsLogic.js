// Business logic untuk Jobs feature

export const jobsLogic = {
  // Filter jobs berdasarkan kriteria
  filterJobs: (jobs, filters) => {
    let filtered = [...jobs];

    // Filter by location
    if (filters.location && filters.location !== 'all') {
      filtered = filtered.filter(job => 
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by job type
    if (filters.jobType && filters.jobType !== 'all') {
      filtered = filtered.filter(job => 
        job.type === filters.jobType
      );
    }

    // Filter by experience level
    if (filters.experience && filters.experience !== 'all') {
      filtered = filtered.filter(job => 
        job.experience_level === filters.experience
      );
    }

    // Filter by remote
    if (filters.remote) {
      filtered = filtered.filter(job => job.is_remote === true);
    }

    // Filter by salary range
    if (filters.minSalary) {
      filtered = filtered.filter(job => 
        job.salary_min >= filters.minSalary
      );
    }

    return filtered;
  },

  // Sort jobs
  sortJobs: (jobs, sortBy) => {
    const sorted = [...jobs];
    
    switch (sortBy) {
      case 'relevance':
        // Default order (already sorted by relevance from backend)
        break;
      case 'newest':
        sorted.sort((a, b) => new Date(b.posted_date) - new Date(a.posted_date));
        break;
      case 'salary_high':
        sorted.sort((a, b) => b.salary_max - a.salary_max);
        break;
      case 'salary_low':
        sorted.sort((a, b) => a.salary_min - b.salary_min);
        break;
      default:
        break;
    }
    
    return sorted;
  },

  // Calculate match score antara CV user dan job requirements
  calculateMatchScore: (userCV, jobRequirements) => {
    if (!userCV || !jobRequirements) return 0;
    
    let score = 0;
    const maxScore = 100;
    
    // Check skills match (40%)
    const userSkills = userCV.skills?.map(s => s.name.toLowerCase()) || [];
    const requiredSkills = jobRequirements.required_skills?.map(s => s.toLowerCase()) || [];
    
    if (requiredSkills.length > 0) {
      const matchedSkills = requiredSkills.filter(skill => 
        userSkills.some(userSkill => userSkill.includes(skill) || skill.includes(userSkill))
      );
      score += (matchedSkills.length / requiredSkills.length) * 40;
    } else {
      score += 40; // No specific requirements
    }
    
    // Check experience match (30%)
    const userExperience = userCV.experiences?.length || 0;
    const requiredExperience = jobRequirements.min_experience_years || 0;
    
    if (userExperience >= requiredExperience) {
      score += 30;
    } else {
      score += (userExperience / requiredExperience) * 30;
    }
    
    // Check education match (20%)
    const userEducation = userCV.education?.[0]?.degree || '';
    const requiredEducation = jobRequirements.min_education || '';
    
    const educationLevels = ['diploma', 'sarjana', 'magister', 'doktor'];
    const userLevel = educationLevels.indexOf(userEducation.toLowerCase());
    const requiredLevel = educationLevels.indexOf(requiredEducation.toLowerCase());
    
    if (userLevel >= requiredLevel) {
      score += 20;
    } else if (userLevel >= 0) {
      score += (userLevel / requiredLevel) * 20;
    }
    
    // Check location match (10%)
    if (jobRequirements.is_remote || 
        userCV.location === jobRequirements.location) {
      score += 10;
    }
    
    return Math.min(Math.round(score), maxScore);
  },

  // Format salary display
  formatSalary: (min, max, currency = 'IDR') => {
    const formatNumber = (num) => {
      if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M`;
      } else if (num >= 1000) {
        return `${(num / 1000).toFixed(0)}K`;
      }
      return num.toString();
    };

    if (min && max) {
      return `${currency} ${formatNumber(min)} - ${formatNumber(max)}`;
    } else if (min) {
      return `${currency} ${formatNumber(min)}+`;
    } else if (max) {
      return `Up to ${currency} ${formatNumber(max)}`;
    }
    return 'Negotiable';
  },

  // Format posted date
  formatPostedDate: (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return date.toLocaleDateString('id-ID', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  },
};