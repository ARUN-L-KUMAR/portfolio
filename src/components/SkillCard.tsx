import React, { ReactNode, useEffect, useState } from 'react';

interface SkillCardProps {
  title: string;
  level: number;
  icon?: ReactNode;
  darkMode?: boolean;
}

export function SkillCard({ title, level, icon, darkMode }: SkillCardProps) {
  const [fill, setFill] = useState(0);
  useEffect(() => {
    setTimeout(() => setFill(level), 200);
  }, [level]);
  return (
    <div
      className={`rounded-2xl border shadow-lg p-6 flex flex-col items-center transition-all duration-300 group
        ${darkMode
          ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white'
          : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}
        hover:shadow-2xl hover:border-blue-400`}
    >
      {icon && (
        <div className="mb-2 text-3xl transition-transform group-hover:scale-125 group-hover:text-blue-500">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="mt-4 w-full">
        <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}
          style={{ overflow: 'hidden' }}>
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${fill}%` }}
          />
        </div>
        <span className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{level}%</span>
      </div>
    </div>
  );
}