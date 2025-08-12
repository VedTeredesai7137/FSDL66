import React, { useState } from 'react';

const Overview = ({ setActiveTab }) => (
  <div className="max-w-4xl mx-auto p-6">
    <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
      <h1 className="text-4xl font-bold text-gray-100 font-serif mb-6 text-center">
        Data Preprocessing Concepts
      </h1>
      <p className="text-lg text-gray-300 text-center mb-8">
        A comprehensive guide to machine learning preprocessing techniques
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <button 
          onClick={() => setActiveTab('univariate')} 
          className="block group text-left"
        >
          <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <div className="text-3xl mb-3">⚙</div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Univariate Analysis</h3>
            <p className="text-gray-300">Deep dive into single variable analysis, distributions, and outliers</p>
          </div>
        </button>
        
        <button 
          onClick={() => setActiveTab('bivariate')} 
          className="block group text-left"
        >
          <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <div className="text-3xl mb-3">⚛</div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Bivariate Analysis</h3>
            <p className="text-gray-300">Explore relationships between two variables</p>
          </div>
        </button>
        
        <button 
          onClick={() => setActiveTab('workflow')} 
          className="block group text-left"
        >
          <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <div className="text-3xl mb-3">⚠</div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">EDA Workflow</h3>
            <p className="text-gray-300">Systematic approach to exploratory data analysis</p>
          </div>
        </button>
        
        <button 
          onClick={() => setActiveTab('scaling')} 
          className="block group text-left"
        >
          <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <div className="text-3xl mb-3">⚜</div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Data Scaling</h3>
            <p className="text-gray-300">Standardization vs Normalization techniques</p>
          </div>
        </button>
      </div>
    </div>
  </div>
);

export default Overview