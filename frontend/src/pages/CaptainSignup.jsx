import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import uberLogo from '../assets/uber logo.png';

const CaptainSignup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            fullName: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        });

        // Reset form fields after submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-6" src={uberLogo} alt="Uber Logo" />
                <form onSubmit={submitHandler}>
                    {/* Name Field (Side by Side) */}
                    <label htmlFor="name" className="text-lg font-medium mb-2 block">
                        What's your name
                    </label>
                    <div className="flex mb-6">
                        <div className="flex-1 pr-2">
                            <input
                                id="firstName"
                                className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="flex-1 pl-2">
                            <input
                                id="lastName"
                                className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <label htmlFor="email" className="text-lg font-medium mb-2 block">
                        What's your email
                    </label>
                    <input
                        id="email"
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="email@example.com"
                    />

                    {/* Password Field */}
                    <label htmlFor="password" className="text-lg font-medium mb-2 block">
                        Enter Password
                    </label>
                    <input
                        id="password"
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="password"
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center">
                    Already have an account?{' '}
                    <Link to="/captain-login" className="text-blue-600">
                        Login here
                    </Link>
                </p>
            </div>
            <div>
                <p className="text-xs text-center text-gray-500">
                    This site is protected by reCAPTCHA and the <span className='underline'>Google Policy</span> and <span className='underline'>Terms of Service apply</span>
                </p>
            </div>
        </div>
    );
};

export default CaptainSignup;