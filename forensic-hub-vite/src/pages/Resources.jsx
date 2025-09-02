import React from 'react';
import { 
    FaDownload, 
    FaBook, 
    FaTools, 
    FaVideo, 
    FaFileAlt,
    FaExternalLinkAlt 
} from 'react-icons/fa';

const ResourceCard = ({ title, category, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col justify-between hover:shadow-lg transition-shadow">
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-md mb-4"/>
        <div>
            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{category}</span>
            <h3 className="font-bold mt-2 text-gray-800">{title}</h3>
        </div>
        <button className="mt-4 w-full bg-gray-100 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center">
            <FaDownload className="mr-2" /> Download
        </button>
    </div>
);

const Resources = () => {
    const resources = [
        { title: 'Digital Forensics Fundamentals', category: 'Beginner', imageUrl: 'https://placehold.co/300x200/dbeafe/1e3a8a?text=Guide' },
        { title: 'Network Analysis Toolkit', category: 'Tool', imageUrl: 'https://placehold.co/300x200/c7d2fe/1e3a8a?text=Toolkit' },
        { title: 'Mobile Forensics Video Course', category: 'Video', imageUrl: 'https://placehold.co/300x200/e0e7ff/1e3a8a?text=Video' },
        { title: 'Legal Documentation Templates', category: 'Template', imageUrl: 'https://placehold.co/300x200/dbeafe/1e3a8a?text=Template' },
        { title: 'Malware Analysis Handbook', category: 'Guide', imageUrl: 'https://placehold.co/300x200/c7d2fe/1e3a8a?text=Malware' },
        { title: 'Cloud Forensics Checklist', category: 'Template', imageUrl: 'https://placehold.co/300x200/e0e7ff/1e3a8a?text=Checklist' },
    ];

    const certificationLinks = ['GCFE Study Guide', 'CCE Practice Exams', 'CISSP Security Assessment'];
    const standardsLinks = ['ISO 27037 Guidelines', 'NIST Cybersecurity Framework', 'RFC 3227 Evidence Guidelines'];

    const categories = [
        { icon: <FaBook size={24} className="text-blue-500"/>, bgColor: 'bg-blue-100', title: 'Beginner Guides', description: 'Essential reading for newcomers to digital forensics.' },
        { icon: <FaTools size={24} className="text-orange-500"/>, bgColor: 'bg-orange-100', title: 'Professional Tools', description: 'Software and utilities for forensic investigations.' },
        { icon: <FaVideo size={24} className="text-green-500"/>, bgColor: 'bg-green-100', title: 'Video Tutorials', description: 'Step-by-step video instruction and demonstrations.' },
        { icon: <FaFileAlt size={24} className="text-indigo-500"/>, bgColor: 'bg-indigo-100', title: 'Documentation', description: 'Templates, checklists, and reference materials.' },
    ];
    
    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Learning Resources</h1>
                <p className="text-gray-600 mb-8">A comprehensive collection of tools, guides, and educational materials.</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {resources.map((res, index) => <ResourceCard key={index} {...res} />)}
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="font-bold text-xl mb-1 text-gray-800">Certification Resources</h3>
                        <p className="text-sm text-gray-500 mb-4">Comprehensive study materials for major digital forensics certifications.</p>
                        <ul className="space-y-3">
                            {certificationLinks.map(link => (
                                <li key={link} className="flex justify-between items-center text-teal-600 font-semibold hover:text-teal-700 cursor-pointer">
                                    <span>{link}</span>
                                    <FaExternalLinkAlt className="text-gray-400" />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="font-bold text-xl mb-1 text-gray-800">Industry Standards</h3>
                        <p className="text-sm text-gray-500 mb-4">Latest industry standards and best practices documentation.</p>
                        <ul className="space-y-3">
                            {standardsLinks.map(link => (
                                <li key={link} className="flex justify-between items-center text-teal-600 font-semibold hover:text-teal-700 cursor-pointer">
                                    <span>{link}</span>
                                    <FaExternalLinkAlt className="text-gray-400" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Browse by Category</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat, index) => (
                            <div key={index} className="text-center">
                                <div className={`inline-block p-4 rounded-full ${cat.bgColor} mb-4`}>
                                    {cat.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{cat.title}</h3>
                                <p className="text-sm text-gray-600">{cat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;