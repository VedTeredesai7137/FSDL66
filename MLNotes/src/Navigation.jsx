import React, { useState } from 'react';
const Navigation = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'univariate', label: 'Univariate Analysis', icon: '⚙' },
    { id: 'bivariate', label: 'Bivariate Analysis', icon: '⚛' },
    { id: 'workflow', label: 'EDA Workflow', icon: '⚠' },
    { id: 'scaling', label: 'Data Scaling', icon: '⚜' },
    { id: 'encoding', label: 'Categorical Encoding', icon: '⚡' }
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => setActiveTab('overview')}
            className="text-2xl font-bold text-yellow-400 font-serif hover:text-yellow-300 transition-colors"
          >
            ML Concepts
          </button>
          <div className="flex space-x-1 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === item.id
                    ? 'bg-yellow-500 text-gray-900'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation