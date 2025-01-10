import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import uberLogo from '../assets/uber logo.png';

const CaptainLogin = () => {
         const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [captainData, setcaptainData] = useState({});
    
        const handleSubmit = (e) => {
            e.preventDefault();
            setcaptainData({
                email:email,
                password:password 
            })
            
            setEmail('');
            setPassword('');
        };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-8" src={uberLogo} alt="Uber Logo" />
                <form onSubmit={handleSubmit}>
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
                    <label htmlFor="password" className="text-lg font-medium mb-2 block">
                        Enter Password
                    </label>
                    <input
                        id="password"
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="password"
                    />
                    <button
                        type="submit"
                        className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center">
                    New here? {' '}
                    <Link to="/captain-signup" className="text-blue-600">
                        Register as a Captain
                    </Link>
                </p>
            </div>
            <div>
                <Link
                    to='/login'
                    className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg"
                >
                    Sign in as User
                </Link>
            </div>
        </div>
  )
}

export default CaptainLogin;