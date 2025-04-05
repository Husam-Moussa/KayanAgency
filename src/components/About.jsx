import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { LuBrain } from "react-icons/lu";
import {  FaWhatsapp } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import {FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Add social icons

const About = () => {
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
              src="/Images/KAYAN Logo.png"
              alt="KAYAN Logo"
              className="w-3xs"
              data-aos="fade-right"
            />
            <ul className="list-none flex flex-row gap-3 text-white mr-28 cursor-pointer"data-aos="fade-right">
              <li className="duration-300 text-white hover:text-orange-500">
                <Link to="/">Home</Link> {/* Link to Home */}
              </li>
              <li className="duration-300 text-orange-500 hover:text-orange-500">
                <Link to="/about">About</Link> {/* Link to About page */}
              </li>
                <li className="duration-300 text-white hover:text-orange-500">
                              <Link to="/service">Service</Link> {/* Link to Service page */}
                            </li>
                <li className="duration-300 text-white hover:text-orange-500">
                              <Link to="/contact">Contact</Link> {/* Link to Contact page */}
                            </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="bg-orange-500 text-white flex flex-col justify-center items-center text-3xl font-medium" data-aos="fade-up">
        <h2 className="6xl p-5">About our company</h2>
      </section>

      <section className="bg-white text-[#0D1117] flex flex-row justify-center items-center text-3xl font-medium gap-7 p-10" data-aos="fade-up">
        <div className="w-sm">
          <img src="/Images/Logo.png" alt="Logo" className="w-sm mt-10" />
        </div>
        <div className="flex flex-col">
          <p className="text-orange-500 text-xl">About our company</p>
          <h2 className="text-5xl text-[#0D1117]">
            We design and develop your imagination <br /> and can teach you how to make it
          </h2>

          {/* Icons Section */}
          <div className="mt-10 flex flex-row gap-10">
            <div className="flex flex-col items-center" data-aos="zoom-in-up">
              {/* Brain Icon Circle */}
              <div className="flex justify-center items-center bg-orange-500 rounded-full p-6">
                <LuBrain size={40} className="text-white" />
              </div>
              <p className="mt-2 text-center text-[#0D1117]">Construct</p>
            </div>

            <div className="flex flex-col items-center" data-aos="zoom-in-up">
              {/* Teacher Icon Circle */}
              <div className="flex justify-center items-center bg-orange-500 rounded-full p-6">
                <FaChalkboardTeacher size={40} className="text-white" />
              </div>
              <p className="mt-2 text-center text-[#0D1117]">Teach</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D1117] text-orange-500 flex flex-col justify-center items-center text-3xl font-medium gap-7 p-10"data-aos="fade-right">
        <div>
          <p className="text-xl">Founder</p>
          <h2 className="6xl text-white"data-aos="fade-right">Will help and facilitate everything<br />you need to know and ready to<br />construct anything</h2>
        </div>

        {/* Founder Image with hover effect */}
        <div className="relative group">
          <img src="/Images/ME.jpg" alt="Founder" className="w-sm transition-all duration-500" />
          <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-80 transition-all duration-500 z-10"></div>

          {/* Social Icons */}
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:group-hover: transition-all duration-500 z-20">
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/in/husam-moussa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0D1117]">
                < FaLinkedinIn size={30} />
              </a>
              <a href="https://www.instagram.com/husam_musa_/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0D1117]">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-600 text-white flex flex-row font-medium mt-10 p-10 gap-15">
             
                <img
                  src="/Images/KAYAN LOGO.PNG"
                  alt="Kayan Logo"
                  className="w-3xs p-4"data-aos="fade-in"
                />
              
              
              <div className="flex flex-col cursor-pointer "data-aos="fade-right">
               <h1 className="text-4xl text-orange-500">Useful links</h1>
                <Link to="/"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">Home</h2></Link>
                <Link to="/service"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">Service</h2></Link>
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

export default About;

