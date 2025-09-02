import React from 'react';
import { 
    FaEnvelope, 
    FaPhone, 
    FaMapMarkerAlt, 
    FaPaperPlane, 
    FaTwitter, 
    FaLinkedin, 
    FaGithub 
} from 'react-icons/fa';

const TeamMemberCard = ({ name, title, imageUrl, specialties }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 text-center overflow-hidden">
       <img src={imageUrl} alt={name} className="w-full h-56 object-cover" />
        <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <p className="text-teal-600 font-semibold text-sm mb-3">{title}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {specialties.map(spec => (
                    <span key={spec} className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">{spec}</span>
                ))}
            </div>
            <div className="flex justify-center space-x-3 text-gray-500">
                <a href="#" className="hover:text-teal-600"><FaTwitter /></a>
                <a href="#" className="hover:text-teal-600"><FaLinkedin /></a>
                <a href="#" className="hover:text-teal-600"><FaGithub /></a>
            </div>
        </div>
    </div>
);

const Contact = () => {
 
    const teamData = [
        { name: 'Sarah', title: 'Lead Digital Forensics Expert', imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg', specialties: ['Network Forensics', 'Malware Analysis', 'Expert Testimony'] },
        { name: 'Mike', title: 'Mobile Forensics Specialist', imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg', specialties: ['iOS Forensics', 'Android Analysis', 'Cloud Investigations'] },
        { name: 'Alex', title: 'Legal Technology Advisor', imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg', specialties: ['Legal Compliance', 'Evidence Presentation', 'Regulatory Guidance'] },
        { name: 'Emma', title: 'Cybersecurity Researcher', imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg', specialties: ['Threat Intelligence', 'Incident Response', 'Digital Evidence'] },
        { name: 'James', title: 'Forensics Training Director', imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg', specialties: ['Education', 'Certification Programs', 'Industry Standards'] },
        { name: 'Lisa', title: 'Community Manager', imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg', specialties: ['Community Engagement', 'User Support'] },
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Get in Touch</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Connect with our team of digital forensics experts and join our growing community.</p>
                </div>

                
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    
                    <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="font-semibold text-sm text-gray-700">First Name</label>
                                    <input type="text" placeholder="Enter your first name" className="mt-2 w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-700">Last Name</label>
                                    <input type="text" placeholder="Enter your last name" className="mt-2 w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                                </div>
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-gray-700">Email Address</label>
                                <input type="email" placeholder="Enter your email address" className="mt-2 w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                            </div>
                             <div>
                                <label className="font-semibold text-sm text-gray-700">Subject</label>
                                <input type="text" placeholder="What's this about?" className="mt-2 w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-gray-700">Message</label>
                                <textarea placeholder="Tell us more about your inquiry..." rows="5" className="mt-2 w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center">
                                <FaPaperPlane className="mr-2"/> Send Message
                            </button>
                        </form>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 ">
                        <div>
                            <h3 className="font-bold mb-4">Contact Information</h3>
                             <div className="space-y-3 text-gray-700 text-sm">
                                <p className="flex items-center"><span className="bg-teal-100 p-2 rounded-full mr-3"><FaEnvelope className="text-teal-600" /></span> contactus@forensichub.com</p>
                                <p className="flex items-center"><span className="bg-teal-100 p-2 rounded-full mr-3"><FaPhone className="text-teal-600" /></span> +91 9001010010</p>
                                <p className="flex items-start"><span className="bg-teal-100 p-2 rounded-full mr-3"><FaMapMarkerAlt className="text-teal-600" /></span> 123 Cyber Security <br/>San Francisco</p>
                            </div>
                        </div>
                        
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 space-y-8">
                            <div>
                                <h3 className="font-bold mb-4">Office Hours</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                                    <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                                    <p><strong>Sunday:</strong> Closed</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 space-y-8">
                            <div>
                                <h3 className="font-bold mb-4">Follow Us</h3>
                                <div className="flex space-x-4 text-gray-500">
                                    <a href="#" className="hover:text-teal-600"><FaTwitter size={20} /></a>
                                    <a href="#" className="hover:text-teal-600"><FaLinkedin size={20} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Meet Our Team</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">Experienced professionals dedicated to advancing digital forensics.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamData.map(member => <TeamMemberCard key={member.name} {...member} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;