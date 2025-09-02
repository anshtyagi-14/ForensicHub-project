import React from 'react';
import { FaUserFriends, FaTrophy, FaHistory } from 'react-icons/fa';

const ChallengeCard = ({ title, category, progress, imageUrl, status }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-md mb-4"/>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${progress}%`}}></div>
        </div>
        <p className="text-xs text-gray-500 mb-4">{progress}% complete</p>
        <button className={`w-full py-2 rounded-md text-white transition-colors ${status === 'Continue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}>
            {status}
        </button>
    </div>
);

const Playground = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-2">Welcome to the Playground</h1>
            <p className="text-gray-600 mb-8">Your digital forensics journey continues.</p>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-teal-500 text-white p-4 rounded-lg shadow-lg">
                        <strong>New Challenge Available!</strong> Advanced Blockchain Forensics challenge is now live.
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <ChallengeCard title="Network Traffic Analysis" category="Network" progress={75} imageUrl="https://placehold.co/400x200/3b82f6/ffffff?text=Network" status="Continue" />
                        <ChallengeCard title="Mobile Device Forensics" category="Mobile" progress={45} imageUrl="https://placehold.co/400x200/10b981/ffffff?text=Mobile" status="Continue" />
                        <ChallengeCard title="Email Header Analysis" category="Email" progress={10} imageUrl="https://placehold.co/400x200/f97316/ffffff?text=Email" status="Continue" />
                        <ChallengeCard title="Malware Detection" category="Malware" progress={0} imageUrl="https://placehold.co/400x200/ef4444/ffffff?text=Malware" status="Start Challenge" />
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-lg mb-4">Quick Stats</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex justify-between">Challenges Completed: <strong>23</strong></li>
                            <li className="flex justify-between">Current Streak: <strong>7 days</strong></li>
                            <li className="flex justify-between">Total Points: <strong>1,250</strong></li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-lg mb-4 flex items-center"><FaTrophy className="mr-2 text-yellow-500"/> Leaderboard</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">1. Alex Chen <span className="ml-auto font-semibold">2450</span></li>
                            <li className="flex items-center">2. Sarah Kim <span className="ml-auto font-semibold">2300</span></li>
                            <li className="flex items-center">3. Mike Johnson <span className="ml-auto font-semibold">2100</span></li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-lg mb-4 flex items-center"><FaHistory className="mr-2 text-blue-500"/> Recent Activity</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                           <li>Completed "Network Analysis" challenge</li>
                           <li>Started "Mobile Forensics" challenge</li>
                           <li>Achieved "Streak Master" badge</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Playground;