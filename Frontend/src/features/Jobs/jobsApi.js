import axios from '../../lib/axios';

// API calls untuk Jobs feature
export const jobsApi = {
  // Search jobs dengan filter
  searchJobs: async (params) => {
    try {
      const response = await axios.get('/jobs/search', { params });
      return response.data;
    } catch (error) {
      console.error('Error searching jobs:', error);
      throw error;
    }
  },

  // Get job detail by ID
  getJobDetail: async (jobId) => {
    try {
      const response = await axios.get(`/jobs/${jobId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching job detail:', error);
      throw error;
    }
  },

  // Get recommended jobs berdasarkan CV user
  getRecommendedJobs: async () => {
    try {
      const response = await axios.get('/jobs/recommended');
      return response.data;
    } catch (error) {
      console.error('Error fetching recommended jobs:', error);
      throw error;
    }
  },

  // Save job to favorites
  saveJob: async (jobId) => {
    try {
      const response = await axios.post('/jobs/save', { job_id: jobId });
      return response.data;
    } catch (error) {
      console.error('Error saving job:', error);
      throw error;
    }
  },

  // Get saved jobs
  getSavedJobs: async () => {
    try {
      const response = await axios.get('/jobs/saved');
      return response.data;
    } catch (error) {
      console.error('Error fetching saved jobs:', error);
      throw error;
    }
  },
};