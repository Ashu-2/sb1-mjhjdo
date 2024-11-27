import React from 'react';
import { experiences } from '../data/experiences';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Professional Experience</h2>
        <div className="max-h-[800px] overflow-y-auto pr-4 space-y-8 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-700">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}