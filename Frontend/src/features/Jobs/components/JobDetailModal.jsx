import React from 'react';
import { BriefcaseIcon, MapPinIcon } from '../../../components/Icons';

const XIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const CalendarIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const DollarSignIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const CheckCircleIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

import { jobsLogic } from '../jobsLogic';

const JobDetailModal = ({ job, onClose, onSave, isSaved }) => {
  if (!job) return null;

  const { formatSalary, formatPostedDate } = jobsLogic;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XIcon size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Job Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPinIcon size={16} />
              <span>{job.location}</span>
              {job.is_remote && (
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full">
                  Remote
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <BriefcaseIcon size={16} />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CalendarIcon size={16} />
              <span>Diposting: {formatPostedDate(job.posted_date)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <DollarSignIcon size={16} />
              <span>{formatSalary(job.salary_min, job.salary_max, job.currency)}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Deskripsi Pekerjaan</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
          </div>

          {/* Required Skills */}
          {job.required_skills && job.required_skills.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Skill yang Dibutuhkan</h3>
              <div className="flex flex-wrap gap-2">
                {job.required_skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Benefit</h3>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircleIcon size={16} className="text-green-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Kualifikasi</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircleIcon size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Pengalaman minimal {job.min_experience_years} tahun</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Pendidikan minimal {job.min_education}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex gap-3">
          <button
            onClick={() => onSave(job.id)}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
              isSaved
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isSaved ? '✓ Tersimpan' : 'Simpan Lowongan'}
          </button>
          <button
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Lamar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailModal;