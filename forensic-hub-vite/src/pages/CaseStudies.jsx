import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import { FaFileAlt, FaUserTie, FaComments } from 'react-icons/fa';

const CaseStudies = () => {

    const studies = [
        { 
            title: 'Corporate Data Breach Investigation', 
            description: 'Investigation of a sophisticated APT attack on a Fortune 500 company.', 
            headerText: 'Breach', 
            category: 'Network Security', 
            level: 'Advanced', 
            duration: '3 weeks', 
            tools: 4 
        },

        { 
            title: 'Mobile Device Financial Fraud', 
            description: 'Recovery of deleted financial records from an Android device.', 
            headerText: 'Mobile Fraud', 
            category: 'Mobile Forensics', 
            level: 'Intermediate', 
            duration: '2 weeks', 
            tools: 3 
        },
        { 
            title: 'Email Phishing Campaign Analysis', 
            description: 'Traced the source of a targeted phishing campaign.', 
            headerText: 'Phishing', 
            category: 'Email Forensics', 
            level: 'Beginner', 
            duration: '1 week', 
            tools: 3 
        },
    ];


    const learningResources = [
        {
            icon: <FaFileAlt size={24} className="text-blue-500"/>,
            iconBg: 'bg-blue-100',
            title: 'Case Templates',
            description: 'Structured templates for documenting your own investigations.'
        },
        {
            icon: <FaUserTie size={24} className="text-orange-500"/>,
            iconBg: 'bg-orange-100',
            title: 'Expert Insights',
            description: 'Commentary and analysis from leading forensics professionals.'
        },
        {
            icon: <FaComments size={24} className="text-green-500"/>,
            iconBg: 'bg-green-100',
            title: 'Community Discussion',
            description: 'Engage with peers and share insights on complex cases.'
        }
    ];
    
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studies.map((study, index) => <CaseStudyCard key={index} {...study} />)}
                </div>
                <div className="mt-20 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Learning Resources</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {learningResources.map((resource, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className={`p-4 rounded-full ${resource.iconBg} mb-4`}>
                                    {resource.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                                <p className="text-sm text-gray-600">{resource.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;