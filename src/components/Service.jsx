import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import Loader from './Loader';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Service = () => {
  const [loading, setLoading] = useState(true);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration (in ms)
      once: false, // Whether animations should happen only once (default: false)
    });

    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#0D1117]">
      <header className="font-medium text-2xl text-white">
        <nav>
          <div className="flex justify-between items-center">
            <img
              src="KAYAN Logo.png"
              alt="KAYAN Logo"
              className="w-3xs"
              data-aos="fade-right"
            />
            <ul className="list-none flex flex-row gap-3 text-white mr-28 cursor-pointer" data-aos="fade-right">
              <li className="duration-300 text-white hover:text-orange-500">
                <Link to="/">Home</Link> {/* Link to Home */}
              </li>
              <li className="duration-300 text-white hover:text-orange-500">
                <Link to="/about">About</Link> {/* Link to About page */}
              </li>
              <li className="duration-300 text-orange-500 hover:text-orange-500">
                <Link to="/service">Service</Link> {/* Link to Service page */}
              </li>
              <li className="duration-300 text-white hover:text-orange-500">
                <Link to="/contact">Contact</Link> {/* Link to Contact page */}
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="bg-[#0D1117] text-white flex flex-col justify-center items-center text-3xl font-medium">
        <h2 className="9xl p-5" data-aos="fade-up">Our Services</h2>

        {/* Service 1 */}
        <div className="flex flex-row items-center mt-10 gap-14 text-orange-500">
          <div className="relative group">
            <img src="/Images/Service1.jpg" alt="Development" className="w-sm" />
            {/* Hover effect container */}
            <div className="absolute inset-0 flex justify-center items-center bg-orange-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
               <Link to="/contact"><button className="px-6 py-2 bg-white cursor-pointer text-orange-500 rounded-full">
                              Make an Appointment
                            </button></Link>
            </div>
          </div>

          <div className="relative group">
            <img src="/Images/Service2.jpg" alt="Teaching" className="w-sm" />
            {/* Hover effect container */}
            <div className="absolute inset-0 flex justify-center items-center bg-orange-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
               <Link to="/contact"><button className="px-6 py-2 bg-white cursor-pointer text-orange-500 rounded-full">
                              Make an Appointment
                            </button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-orange-500 flex flex-col justify-center items-center text-3xl font-medium mt-10 p-10">
        <p className="text-xl mt-10">Our Pricing Plans</p>
        <h2 className="text-7xl text-[#0D1117]">Our Flexible Pricing</h2>
      </section>

      {/* Pricing Section */}
      <section className="bg-white text-white p-15">
        <h2 className="text-5xl text-center text-[#0D1117] mb-10">Our Pricing Plans</h2>
        <div className="flex justify-center gap-10">
          {/* Basic Plan */}
          <div className="bg-gray-600 p-8 rounded-lg shadow-lg w-80 hover:shadow-xl transition-all duration-300">
            <h3 className="text-4xl font-bold text-center text-orange-500">Basic Plan</h3>
            <p className="text-5xl font-bold text-center mt-4">$200</p>
            <ul className="mt-6 text-lg">
              <li>Basic Portfolio</li>
              <li>Basic Business</li>
            </ul>
            <div className="mt-8 text-center">
              <Link to="/contact"><button className="px-6 py-2 cursor-pointer bg-orange-500 text-white rounded-full hover:bg-white hover:text-orange-500 transition-colors duration-300">
                Get in Touch
              </button></Link>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-gray-600 p-8 rounded-lg  shadow-lg w-80 hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-center text-orange-500">Standard Plan</h3>
            <p className="text-5xl text-center font-bold mt-4">$300</p>
            <ul className="mt-6 text-lg">
              <li>Standard Portfolio</li>
              <li>Standard Business</li>
            </ul>
            <div className="mt-8 text-center">
            <Link to="/contact"><button className="px-6 cursor-pointer py-2 bg-orange-500 text-white rounded-full hover:bg-white hover:text-orange-500 transition-colors duration-300">
                Get in Touch
              </button></Link>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-gray-600 p-8 rounded-lg shadow-lg w-80 hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-center text-orange-500">Premium Plan</h3>
            <p className="text-5xl font-bold text-center mt-4">$400</p>
            <ul className="mt-6 text-lg">
              <li>Premium Portfolio</li>
              <li>Premium Business</li>
            </ul>
            <div className="mt-8 text-center">
            <Link to="/contact"><button className="px-6 cursor-pointer py-2 bg-orange-500 text-white rounded-full hover:bg-white hover:text-orange-500 transition-colors duration-300">
                Get in Touch
              </button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-600 text-white flex flex-row font-medium mt-10 p-10 gap-15">
        <img
          src="KAYAN LOGO.PNG"
          alt="Kayan Logo"
          className="w-3xs p-4"
          data-aos="fade-in"
        />

        <div className="flex flex-col cursor-pointer "data-aos="fade-right">
                      <h1 className="text-4xl text-orange-500">Useful links</h1>
                       <Link to="/"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">Home</h2></Link>
                       <Link to="/about"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">About</h2></Link>
                       <Link to="/contact"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">Contact</h2></Link>
                     </div>
                     <div className="flex flex-col cursor-pointer"data-aos="fade-right">
                       <h1 className="text-4xl text-orange-500">Contact us</h1>
                       <a href="mailto:husammusa864@gmail.com"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">KayanFrontend10@gmail.com</h2></a>
                       <a href="https://wa.me/81932448"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">81932448</h2></a>
                       <a href="https://www.instagram.com/kayan_frontend"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">Kayan Frontend</h2></a>
                     </div>
                   </section>
             
                   <hr className='text-orange-500'/>
             
                   <footer className='flex flex-row justify-between text-xl text-white bg-gray-600 p-10'>
                     <div data-aos="fade-right">
                       <h2>© 2024 Kayan. All Rights Reserved</h2>
                     </div>
                     <div className='flex flex-row gap-5'data-aos="fade-right">
                       <a href="https://www.instagram.com/kayan_frontend"><FaInstagram className="text-xl cursor-pointer duration-300 hover:text-orange-500"/></a>
                       <a href="https://wa.me/81932448"><FaWhatsapp  className="text-xl cursor-pointer duration-300 hover:text-orange-500"/></a>
                     </div>
                   </footer>
    </div>
  );
};

export default Service;


