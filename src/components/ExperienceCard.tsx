import React from 'react';
import type { Experience } from '../data/experiences';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 hover:shadow-xl transition">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.company}</h3>
          <p className="text-lg text-indigo-600 dark:text-indigo-400">{experience.role}</p>
        </div>
        <span className="text-gray-500 dark:text-gray-300 mt-2 md:mt-0">{experience.period}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.description}</p>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Responsibilities:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span key={index} className="bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}