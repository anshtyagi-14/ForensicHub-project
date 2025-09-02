import React from 'react';
import LawCard from '../components/LawCard'; 
import { FaSearch, FaBell, FaBookOpen, FaCheckCircle, FaGavel } from 'react-icons/fa';

const Laws = () => {
  const lawsData = [
    { title: 'Digital Evidence Standards', description: 'Guidelines for collecting, preserving, and presenting digital evidence.', imageUrl: 'https://placehold.co/600x400/dc2626/ffffff?text=Federal', category: 'Federal', status: 'Updated' },
    { title: 'Privacy & Data Protection', description: 'Laws governing personal data handling and privacy rights.', imageUrl: 'https://placehold.co/600x400/6b21a8/ffffff?text=International', category: 'International', status: '7 Updates' },
    { title: 'Cybercrime Legislation', description: 'Laws prohibiting computer crimes and digital fraud.', imageUrl: 'https://placehold.co/600x400/16a34a/ffffff?text=State', category: 'State', status: '1 Update' },
    { title: 'Chain of Custody', description: 'Legal requirements for evidence handling and documentation.', imageUrl: 'https://placehold.co/600x400/f59e0b/ffffff?text=Procedural', category: 'Procedural', status: '' },
    { title: 'Expert Testimony', description: 'Standards for forensic expert witness testimony.', imageUrl: 'https://placehold.co/600x400/be123c/ffffff?text=Judicial', category: 'Judicial', status: '5 Updates' },
    { title: 'International Cooperation', description: 'Cross-border digital evidence sharing agreements.', imageUrl: 'https://placehold.co/600x400/7c2d12/ffffff?text=International', category: 'International', status: '4 Updates' },
  ];

  const quickAccessItems = [
    { icon: <FaBookOpen size={24} className="text-teal-600" />, title: 'Legal Glossary', description: 'Definitions of key legal terms in digital forensics.' },
    { icon: <FaCheckCircle size={24} className="text-teal-600" />, title: 'Compliance Checker', description: 'Verify your procedures meet current legal standards.' },
    { icon: <FaGavel size={24} className="text-teal-600" />, title: 'Case Precedents', description: 'Important court decisions affecting digital evidence.' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Laws & Regulations</h1>
        <p className="text-gray-600 mb-6">Stay informed about the latest legal frameworks governing digital forensics.</p>
        <div className="relative mb-6">
          <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search laws and regulations..." className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded-r-lg mb-8 flex justify-between items-center">
          <div className="flex items-center">
            <FaBell className="mr-3" />
            <p><strong>Recent Legal Updates:</strong> New amendments to the Digital Evidence Standards Act effective January 2025.</p>
          </div>
          <button className="bg-white text-orange-700 font-semibold py-2 px-4 rounded-lg border border-orange-300 hover:bg-orange-50 transition-colors">View Details</button>
        </div>
        
        <div className="flex space-x-2 sm:space-x-4 border-b mb-8">
            {['All', 'Federal', 'State', 'International', 'Procedural', 'Judicial'].map(tab => (
                <button key={tab} className="pb-3 px-2 sm:px-4 text-sm sm:text-base font-semibold text-gray-500 border-b-2 border-transparent hover:border-teal-500 hover:text-teal-600 focus:outline-none focus:border-teal-500 focus:text-teal-600 transition-colors">
                    {tab}
                </button>
            ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {lawsData.map((law, index) => (
            <LawCard key={index} {...law} />
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Quick Access Resources</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {quickAccessItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laws;