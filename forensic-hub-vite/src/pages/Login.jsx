import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- 1. Import useNavigate
import { useAuth } from '../context/AuthContext'; // <-- 2. Import useAuth

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // <-- 3. Initialize useNavigate
    const { login } = useAuth(); // <-- 4. Get the login function from context

    const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        // Check if the response was successful (status 200-299)
        if (response.ok) {
            login(data.token); // Only call login if a token exists
            navigate('/');
        } else {
            // If the server sent an error, display its message
            alert(data.message);
        }
    } catch (error) {
        // This catches network errors where the server can't be reached
        console.error('Failed to fetch:', error);
        alert('Could not connect to the server. Please try again later.');
    }
};

    return (
        // ... your form JSX is the same ...
        <div className="container mx-auto max-w-sm py-20">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin} className="mt-8 space-y-6">
                <div>
                    <label>Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mt-2 border rounded-lg" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mt-2 border rounded-lg" required />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;