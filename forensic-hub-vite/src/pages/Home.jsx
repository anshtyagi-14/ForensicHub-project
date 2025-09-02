import React, { useRef } from 'react';
import { 
  FaChalkboardTeacher, 
  FaBook, 
  FaBalanceScale, 
  FaFlask,
  FaShieldAlt,
  FaPlus,
  FaBolt,
  FaBookOpen,
  FaUsers
} from 'react-icons/fa';

const Home = () => {
  const excelRef = useRef(null);
  const stats = [
    { value: '2,500+', label: 'Active Investigators' },
    { value: '15,000+', label: 'Challenges Completed' },
    { value: '94%', label: 'Success Rate' },
    { value: '50+', label: 'Countries' },
  ];

  const features = [
    { icon: <FaFlask size={40} className="text-blue-500" />, title: 'Interactive Challenges', description: 'Test your skills with real-world scenarios.' },
    { icon: <FaBook size={40} className="text-blue-500" />, title: 'Learning Resources', description: 'Access a vast library of guides and tools.' },
    { icon: <FaChalkboardTeacher size={40} className="text-blue-500" />, title: 'Case Studies', description: 'Learn from detailed investigation breakdowns.' },
    { icon: <FaBalanceScale size={40} className="text-blue-500" />, title: 'Laws & Regulations', description: 'Stay updated on the legal frameworks.' },
  ];

  const whatsNewItems = [
    { title: 'Advanced Blockchain Forensics', subtitle: 'New Challenge', tag: 'Expert', tagColor: 'bg-red-100 text-red-800' },
    { title: 'Mobile Device Analysis Guide', subtitle: 'Resource Update', tag: 'Popular', tagColor: 'bg-blue-100 text-blue-800' },
    { title: 'European GDPR Compliance', subtitle: 'Legal Update', tag: 'Important', tagColor: 'bg-yellow-100 text-yellow-800' },
  ];

  const handleScroll = () => {
    excelRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>

      <section className="bg-gray-800 text-white" style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/08/01/25/09/360_F_801250950_oLdhbiP1PiRjyuf16xGQWlnTrRYo7ssW.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="w-full py-32 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold">Welcome to ForensicHub</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Master digital forensics through hands-on challenges, comprehensive resources, and real-world case studies.
            </p>
            <div className="mt-8">
              <button onClick={handleScroll}  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">Start Your Journey</button>
            </div>
          </div>

        </div>
      </section>


      <section className="bg-white py-16" >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-50" ref={excelRef}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Everything You Need to Excel</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            From beginner-friendly tutorials to advanced investigation techniques, we provide the tools and knowledge for every skill level.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">What's New</h2>
              <div className="space-y-4">
                {whatsNewItems.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center justify-between hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                      <FaShieldAlt className="text-blue-500 mr-4" size={24} />
                      <div>
                        <h3 className="font-semibold">{item.title} <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.tagColor}`}>{item.tag}</span></h3>
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                      </div>
                    </div>
                    <FaPlus className="text-gray-400 cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center"><FaBolt className="mr-2 text-yellow-500" /> Quick Start</h2>
              <div className="space-y-4">
                <button className="w-full text-white bg-teal-600 hover:bg-teal-700 font-semibold py-3 px-4 rounded-lg transition-colors">Take a Challenge</button>
                <button className="w-full bg-white hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg border flex items-center justify-center transition-colors"><FaBookOpen className="mr-2"/> Browse Resources</button>
                <button className="w-full bg-white hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg border flex items-center justify-center transition-colors"><FaUsers className="mr-2"/> Join Community</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Global Community</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with forensic investigators, security professionals, and learners from around the world.
          </p>
          <div className="flex justify-center mb-8">
            <img src="https://www.eaie.org/static/94c29f94-0ce2-4f78-aeca6ed9218b19f9/1000x667_highestperformance__4a7c7e45a350/1000x667_global_communities.png.png" alt="Global Community" className="rounded-xl shadow-2xl w-100 h-60"/>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;