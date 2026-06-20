import React, { useState, useEffect, useMemo } from 'react';
import { BriefcaseIcon } from '../../../components/Icons';

const RefreshCwIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);

const AlertCircleIcon = ({ size = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

import JobCard from './JobCard';
import JobSearchBar from './JobSearchBar';
import JobFilters from './JobFilters';
import JobDetailModal from './JobDetailModal';
import { jobsLogic } from './../jobsLogic';
import { mockJobs } from './../data/mockJobs';
import './JobsPage.css';

const JobsPage = () => {
  // State
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: 'all',
    jobType: 'all',
    experience: 'all',
    remote: false,
    minSalary: null,
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState(new Set());

  // Load initial data (mock untuk sekarang)
  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        // TODO: Replace dengan jobsApi.getRecommendedJobs() saat backend ready
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate loading
        setJobs(mockJobs);
      } catch (error) {
        console.error('Failed to load jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  // Filter & Sort logic
  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    // Apply search term
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(job =>
        job.title.toLowerCase().includes(lowerSearch) ||
        job.company.toLowerCase().includes(lowerSearch) ||
        job.required_skills?.some(skill => skill.toLowerCase().includes(lowerSearch))
      );
    }

    // Apply filters
    result = jobsLogic.filterJobs(result, filters);

    // Apply sorting
    result = jobsLogic.sortJobs(result, sortBy);

    return result;
  }, [jobs, searchTerm, filters, sortBy]);

  // Handlers
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      location: 'all',
      jobType: 'all',
      experience: 'all',
      remote: false,
      minSalary: null,
    });
    setSearchTerm('');
    setSortBy('relevance');
  };

  const handleSaveJob = (jobId) => {
    setSavedJobs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(jobId)) {
        newSet.delete(jobId);
      } else {
        newSet.add(jobId);
      }
      return newSet;
    });
  };

  return (
    <div className="jobs-page">
      {/* Header */}
      <div className="jobs-header">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <BriefcaseIcon size={28} className="text-blue-600" />
          Cari Lowongan Kerja
        </h1>
        <p className="text-gray-600 mt-1">
          Temukan pekerjaan yang cocok dengan profil dan skill kamu
        </p>
      </div>

      {/* Search Section */}
      <div className="jobs-search-section">
        <JobSearchBar onSearch={setSearchTerm} />
      </div>

      {/* Main Content Grid */}
      <div className="jobs-content">
        {/* Sidebar Filters */}
        <aside className="jobs-sidebar">
          <JobFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
          />

          {/* Sort Options */}
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Urutkan Berdasarkan
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="relevance">Relevansi</option>
              <option value="newest">Terbaru</option>
              <option value="salary_high">Gaji Tertinggi</option>
              <option value="salary_low">Gaji Terendah</option>
            </select>
          </div>
        </aside>

        {/* Job Listings */}
        <main className="jobs-listings">
          {/* Results Info */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">
              Menampilkan <span className="font-semibold">{filteredJobs.length}</span> lowongan
            </p>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <RefreshCwIcon size={14} />
              Refresh
            </button>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-lg p-4 shadow-sm animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-10 bg-gray-200 rounded w-full mt-4"></div>
                </div>
              ))}
            </div>
          ) : filteredJobs.length === 0 ? (
            /* Empty State */
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <AlertCircleIcon size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Tidak ada lowongan ditemukan
              </h3>
              <p className="text-gray-500 mb-4">
                Coba ubah filter atau kata kunci pencarian kamu
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            /* Job Cards Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredJobs.map(job => (
                <JobCard
                  key={job.id}
                  job={job}
                  isSaved={savedJobs.has(job.id)}
                  onSave={handleSaveJob}
                  onClick={() => setSelectedJob(job)}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Detail Modal */}
      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onSave={handleSaveJob}
          isSaved={savedJobs.has(selectedJob.id)}
        />
      )}
    </div>
  );
};

export default JobsPage;