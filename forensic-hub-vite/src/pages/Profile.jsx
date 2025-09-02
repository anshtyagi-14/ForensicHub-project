import React from 'react';
import { FaUser, FaTrophy, FaCog, FaSignOutAlt } from 'react-icons/fa';

const ProgressBar = ({ label, percentage, color = 'bg-blue-600' }) => (
    <div>
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-700">{label}</span>
            <span className="text-sm font-medium text-gray-700">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className={`${color} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
);


const Profile = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-6 py-12">
                <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex items-center justify-between">
                    <div className="flex items-center">
                        <FaUser className="w-16 h-16 rounded-full text-gray-400 mr-4"/>
                        <div>
                            <h1 className="text-2xl font-bold">Ansh Tyagi</h1>
                            <p className="text-gray-500">Digital Forensics Analyst</p>
                            <p className="text-blue-800 font-semibold">Level 10</p>
                        </div>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Edit Profile</button>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-4">Learning Progress</h3>
                            <div className="space-y-4">
                                <ProgressBar label="Network Forensics" percentage={85} />
                                <ProgressBar label="Mobile Analysis" percentage={72} color="bg-green-500" />
                                <ProgressBar label="Legal Compliance" percentage={90} color="bg-yellow-500" />
                                <ProgressBar label="Malware Analysis" percentage={45} color="bg-red-500" />
                            </div>
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-4">Recent Activity</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li><strong>Network Traffic Analysis</strong> - <span className="text-gray-500">2 hours ago</span></li>
                                <li><strong>Downloaded Mobile Forensics Guide</strong> - <span className="text-gray-500">1 day ago</span></li>
                                <li><strong>Earned Network Expert badge</strong> - <span className="text-gray-500">3 days ago</span></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="space-y-8">
                         <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-4 flex items-center"><FaTrophy className="mr-2 text-yellow-500"/> Achievements</h3>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="p-2 border rounded-lg">First Case Solved</div>
                                <div className="p-2 border rounded-lg">Network Expert</div>
                                <div className="p-2 border rounded-lg">Mobile Master</div>
                                <div className="p-2 border rounded-lg">Streak Champion</div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-4 flex items-center"><FaCog className="mr-2 text-gray-500"/> Settings</h3>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center"><span>Email Notifications</span> <input type="checkbox" className="toggle-checkbox" defaultChecked /></li>
                                <li className="flex justify-between items-center"><span>Public Profile</span> <input type="checkbox" className="toggle-checkbox" /></li>
                                <li className="hover:text-blue-600 cursor-pointer">Change Password</li>
                                <li className="hover:text-blue-600 cursor-pointer">Privacy Settings</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;