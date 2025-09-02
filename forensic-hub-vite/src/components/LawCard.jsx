import React from 'react';
import { FaGavel, FaArrowRight } from 'react-icons/fa';

const LawCard = ({ title, description, imageUrl, category, status }) => {
  // Define colors for different categories for the tag
  const categoryColors = {
    Federal: 'bg-blue-500',
    International: 'bg-purple-500',
    State: 'bg-green-500',
    Procedural: 'bg-yellow-500',
    Judicial: 'bg-red-500',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-3 left-3 text-white text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[category] || 'bg-gray-500'}`}>
          {category}
        </div>
        {status && (
          <div className="absolute top-3 right-3 bg-gray-800 bg-opacity-70 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {status}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center mb-2">
          <FaGavel className="text-teal-600 mr-3" />
          <h3 className="text-md font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4 h-16">{description}</p>
        <button className="w-full bg-white text-teal-600 font-semibold py-2 px-4 rounded-lg border-2 border-gray-200 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-colors">
          View Details <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default LawCard;