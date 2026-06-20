import React from 'react';
import { Award, RotateCcw } from 'lucide-react';

export default function ResultView({ answers, onRestart }) {
  if (!answers || answers.length === 0) return null;

  const avgScore = Math.round(
    answers.reduce((acc, curr) => acc + (curr.score || 0), 0) / answers.length
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Award className="w-10 h-10 text-green-600" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Interview Selesai!</h2>
        <p className="text-gray-600 mb-6">
          Skor Rata-rata Kamu:{' '}
          <span className="font-bold text-blue-600 text-xl">{avgScore}/100</span>
        </p>

        {/* Answer List */}
        <div className="space-y-3 mb-8 text-left">
          {answers.map((ans, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100"
            >
              <span className="text-sm text-gray-700 truncate w-2/3">
                {ans.question}
              </span>
              <span className="font-semibold text-green-600">{ans.score}</span>
            </div>
          ))}
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-semibold flex items-center justify-center gap-2 mx-auto transition-colors"
        >
          <RotateCcw size={18} />
          Ulangi Interview
        </button>
      </div>
    </div>
  );
} 