import React, { useState } from 'react';


const CardFormat = ({ data }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">{data.icon}</span>
            <h1 className="text-3xl font-bold text-gray-100 font-serif">{data.title}</h1>
          </div>
          <p className="text-lg text-gray-300 mb-4">{data.description}</p>
          
          {data.keyPoint && (
            <div className="bg-gray-700 rounded-lg p-4">
              <p className="text-yellow-400 font-bold">{data.keyPoint.title}:</p>
              <p className="text-gray-300 mt-2">{data.keyPoint.content}</p>
            </div>
          )}
        </div>

        {/* Sections */}
        <div className="p-6">
          {data.sections.map((section, index) => (
            <div key={index} className="mb-8 pb-6 border-b border-gray-700 last:border-b-0">
              <h3 className="text-xl font-semibold text-gray-300 mb-3">{section.title}</h3>
              <p className="text-gray-300 mb-4">{section.content}</p>
              
              {section.code && (
                <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                    {section.code}
                  </pre>
                </div>
              )}
              
              {section.example && (
                <p className="text-gray-400 italic">{section.example}</p>
              )}
            </div>
          ))}

          {/* Tips Section */}
          {data.tips && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Tips & Guidelines</h3>
              {data.tips.map((tip, tipIndex) => (
                <div key={tipIndex} className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">{tip.title}</h4>
                  <ul className="list-none space-y-2">
                    {tip.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-yellow-400 mr-2">▶</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardFormat