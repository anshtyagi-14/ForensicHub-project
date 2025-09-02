import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';   

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                login(data.token);
                navigate('/');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Failed to fetch:', error);
            alert('Could not connect to the server. Please try again later.');
        }
    };

    return (
        <div className="container mx-auto max-w-sm py-20">
            <h1 className="text-3xl font-bold text-center">Create an Account</h1>
            <form onSubmit={handleSignup} className="mt-8 space-y-6">
                <div>
                    <label>Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 mt-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 mt-2 border rounded-lg"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupPage;