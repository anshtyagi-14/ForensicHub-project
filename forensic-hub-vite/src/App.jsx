import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

const Home = lazy(() => import('./pages/Home'));
const Laws = lazy(() => import('./pages/Laws'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Resources = lazy(() => import('./pages/Resources'));
const Playground = lazy(() => import('./pages/Playground'));
const Profile = lazy(() => import('./pages/Profile'));
const Contact = lazy(() => import('./pages/Contact'));
const  LoginPage= lazy(() => import('./pages/Login'));
const SignupPage = lazy(() => import('./pages/SignupPage'));


function App() {
  return (
    <Router>
    <AuthProvider> 
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/laws" element={<Laws />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      </AuthProvider> 
    </Router>
  );
}

export default App;