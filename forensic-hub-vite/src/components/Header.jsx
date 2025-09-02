import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { isLoggedIn, logout } = useAuth(); 

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Laws', path: '/laws' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Resources', path: '/resources' },
    { name: 'Playground', path: '/playground' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <NavLink to="/">Forensic<span className="text-blue-600">Hub</span></NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 transition-colors duration-300 ${isActive ? 'font-bold text-blue-600 border-b-2 border-blue-600' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <NavLink to="/profile">
                <FaUserCircle className="w-8 h-8 text-gray-500 hover:text-blue-600" />
              </NavLink>
              <button onClick={logout} className="text-gray-600 hover:text-blue-600 text-sm font-semibold">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="text-gray-600 hover:text-blue-600 font-semibold">Login</NavLink>
              <NavLink to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-semibold">Sign Up</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;