import React from 'react';
import { FaTools, FaRegClock, FaArrowRight } from 'react-icons/fa';

const CaseStudyCard = ({ title, description, headerText, category, level, duration, tools }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-shadow duration-300 hover:shadow-xl flex flex-col">
        <div className="relative bg-slate-800 h-48 flex items-center justify-center p-4">
            <h2 className="text-5xl font-extrabold text-white text-center">{headerText}</h2>
            <div className="absolute top-4 left-4 flex flex-col items-start space-y-2">
                <span className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{category}</span>
                <span className="bg-yellow-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{level}</span>
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
            <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                <span className="flex items-center"><FaRegClock className="mr-2" /> {duration}</span>
                <span className="flex items-center"><FaTools className="mr-2" /> {tools} tools</span>
            </div>
            <button className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
                View Case Study <FaArrowRight className="ml-2" />
            </button>
        </div>
    </div>
);

export default CaseStudyCard;