import React from 'react';
import { Code2, Database, Cloud, Brain } from 'lucide-react';

const skillCategories = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Programming Languages",
    skills: ["Golang", "JavaScript", "Python"]
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Technology",
    skills: ["OpenAI", "AI Cognitive Search", "Generative AI", "RAG", "Lang chain", "NLP"]
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Technology",
    skills: ["AWS Lambda", "Kubernetes", "Docker", "SQS", "Kinesis", "Api Gateway"]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Databases",
    skills: ["MongoDB", "MySQL", "DynamoDB", "PostgreSQL"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-center mb-4 text-indigo-600 dark:text-indigo-400">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}