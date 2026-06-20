import React from 'react';

const FilterIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const JobFilters = ({ filters, onFilterChange, onReset }) => {
  const jobTypes = ['all', 'Full-time', 'Part-time', 'Contract', 'Internship'];
  const experienceLevels = ['all', 'Entry-level', 'Mid-level', 'Senior', 'Lead'];
  const locations = ['all', 'Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta', 'Remote'];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
          <FilterIcon size={18} />
          Filter
        </h3>
        <button
          onClick={onReset}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Reset
        </button>
      </div>

      <div className="space-y-4">
        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lokasi
          </label>
          <select
            value={filters.location || 'all'}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc === 'all' ? 'Semua Lokasi' : loc}
              </option>
            ))}
          </select>
        </div>

        {/* Job Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipe Pekerjaan
          </label>
          <select
            value={filters.jobType || 'all'}
            onChange={(e) => onFilterChange('jobType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type === 'all' ? 'Semua Tipe' : type}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Level Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Level Pengalaman
          </label>
          <select
            value={filters.experience || 'all'}
            onChange={(e) => onFilterChange('experience', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level === 'all' ? 'Semua Level' : level}
              </option>
            ))}
          </select>
        </div>

        {/* Remote Only Toggle */}
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.remote || false}
              onChange={(e) => onFilterChange('remote', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Hanya Remote</span>
          </label>
        </div>

        {/* Min Salary Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gaji Minimum (IDR)
          </label>
          <input
            type="number"
            value={filters.minSalary || ''}
            onChange={(e) => onFilterChange('minSalary', e.target.value ? Number(e.target.value) : null)}
            placeholder="Contoh: 5000000"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default JobFilters;