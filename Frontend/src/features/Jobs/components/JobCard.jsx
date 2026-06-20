import React from 'react';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import Clock from 'lucide-react/dist/esm/icons/clock';
import Bookmark from 'lucide-react/dist/esm/icons/bookmark';
import BookmarkCheck from 'lucide-react/dist/esm/icons/bookmark-check';
import { jobsLogic } from '../jobsLogic';

const JobCard = ({ job, onSave, isSaved, onClick }) => {
  const { formatSalary, formatPostedDate } = jobsLogic;

  return (
    <div 
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4 cursor-pointer border border-gray-100"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{job.title}</h3>
          <p className="text-sm text-gray-600 font-medium">{job.company}</p>
        </div>
        
        {/* Match Score Badge */}
        {job.match_score && (
          <div className={`px-2 py-1 rounded-full text-xs font-bold ${
            job.match_score >= 80 ? 'bg-green-100 text-green-700' :
            job.match_score >= 60 ? 'bg-yellow-100 text-yellow-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {job.match_score}% Match
          </div>
        )}
      </div>

      <div className="space-y-2 mb-3">
        {/* Location & Remote */}
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-2" />
          <span>{job.location}</span>
          {job.is_remote && (
            <span className="ml-2 px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full">
              Remote
            </span>
          )}
        </div>

        {/* Job Type & Experience */}
        <div className="flex items-center text-sm text-gray-600">
          <Briefcase size={16} className="mr-2" />
          <span>{job.type} • {job.experience_level}</span>
        </div>

        {/* Posted Date */}
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={16} className="mr-2" />
          <span>{formatPostedDate(job.posted_date)}</span>
        </div>
      </div>

      {/* Salary */}
      <div className="mb-3">
        <span className="text-sm font-semibold text-gray-800">
          {formatSalary(job.salary_min, job.salary_max, job.currency)}
        </span>
      </div>

      {/* Skills Tags */}
      {job.required_skills && job.required_skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {job.required_skills.slice(0, 4).map((skill, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              {skill}
            </span>
          ))}
          {job.required_skills.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
              +{job.required_skills.length - 4} more
            </span>
          )}
        </div>
      )}

      {/* Save Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSave(job.id);
        }}
        className="w-full mt-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm"
      >
        {isSaved ? (
          <>
            <BookmarkCheck size={16} className="text-blue-600" />
            <span className="text-blue-600">Saved</span>
          </>
        ) : (
          <>
            <Bookmark size={16} />
            <span>Save Job</span>
          </>
        )}
      </button>
    </div>
  );
};

export default JobCard;