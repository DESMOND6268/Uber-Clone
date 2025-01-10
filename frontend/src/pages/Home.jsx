import React, { Fragment } from 'react';
import uberLogo from '../assets/uber logo.png';
import uberOnboarding from '../assets/uber landing page img.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Fragment>
      <div
        className="h-screen pt-8 flex justify-between flex-col w-full"
        style={{ backgroundImage: `url(${uberOnboarding})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <img className="w-16 ml-8" src={uberLogo} alt="Uber Logo" />
        <div className="bg-white pb-7 py-4 px-4 flex flex-col justify-between items-center">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link to='/login' className="text-lg flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
 