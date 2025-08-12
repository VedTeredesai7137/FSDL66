import React, { useState } from 'react';
import CardFormat from './Cardformat';
import Navigation from './Navigation';
import Overview from './Overview';
import univariateData from './Univariate';
import bivariateMultivariateData from './Bivariate';
import practicalEDAWorkflowData from './practicalEDAWorkflowData';
// CardFormat component - reusable template

// Navigation component

// Overview component

// Coming Soon component
const ComingSoon = ({ title, icon }) => (
  <div className="max-w-4xl mx-auto p-6">
    <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">{title}</h2>
      <p className="text-gray-300 text-lg">This section is coming soon!</p>
      <p className="text-gray-400 mt-2">Content will be added in future updates.</p>
    </div>
  </div>
);

// Univariate Analysis data

// Main App component
const App = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview setActiveTab={setActiveTab} />;
      case 'univariate':
        return <CardFormat data={univariateData} />;
      case 'bivariate':
        return <CardFormat data={bivariateMultivariateData} />;
      case 'workflow':
        return <CardFormat data={practicalEDAWorkflowData} />;
      case 'scaling':
        return <ComingSoon title="Data Scaling" icon="⚜" />;
      case 'encoding':
        return <ComingSoon title="Categorical Encoding" icon="⚡" />;
      default:
        return <Overview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="py-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;