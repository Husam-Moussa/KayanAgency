import Loader from './Loader';
import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import {  FaWhatsapp } from "react-icons/fa";
import {  FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import 'aos/dist/aos.css'; // Import AOS CSS
import { Link } from 'react-router-dom';
const Contact = () => {
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
                <ul className="list-none flex flex-row gap-3 text-white mr-28 cursor-pointer"data-aos="fade-right">
                  <li className="duration-300 text-white hover:text-orange-500">
                    <Link to="/">Home</Link> {/* Link to Home */}
                  </li>
                  <li className="duration-300 text-white hover:text-orange-500">
                    <Link to="/about">About</Link> {/* Link to About page */}
                  </li>
                    <li className="duration-300 text-white hover:text-orange-500">
                                  <Link to="/service">Service</Link> {/* Link to Service page */}
                                </li>
                    <li className="duration-300 text-orange-500 hover:text-orange-500">
                                  <Link to="/contact">Contact</Link> {/* Link to Contact page */}
                                </li>
                </ul>
              </div>
            </nav>
          </header>
          
      <section className="bg-orange-500 text-white flex flex-col justify-center items-center text-3xl font-medium">
        <h2 className="6xl p-5"data-aos="fade-up">Contact us</h2>
      </section>
      <div className="flex flex-col md:flex-row bg-gray-900 text-white p-10 rounded-lg">
      {/* Left Section */}
      <div className="md:w-1/2 p-6"data-aos="fade-left">
        <h3 className="text-orange-500 text-sm font-medium">Contact Us</h3>
        <h2 className="text-4xl font-bold mt-2">Let's work together</h2>
        <p className="text-gray-400 mt-2">
          Thank you for your interest in Attach Web Agency. We're excited to hear from you and discuss...
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <a href="https://wa.me/81932448" target='blank'><span className="text-green-400"> <FaWhatsapp/></span></a>
            </div>
            <div>
              <h4 className="font-semibold text-lg">whatsapp</h4>
              <p className="text-gray-400">81932448</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <a href="https://www.instagram.com/kayan_frontend" target='blank'><span className="text-purple-500"><FaInstagram /></span></a>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Instagram</h4>
              <p className="text-gray-400">Kayan-frontend</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <a href="https://www.linkedin.com/in/husam-moussa"><span className="text-blue-400"><FaLinkedin/> </span></a>
            </div>
            <div>
              <h4 className="font-semibold text-lg">linkedin</h4>
              <p className="text-gray-400">Husam Moussa</p>
             
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="md:w-1/2 p-6 bg-gray-800 rounded-lg"fata-aos="fade-right">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" className="p-3 bg-gray-900 rounded-md text-white w-full" />
          <input type="text" placeholder="Last Name" className="p-3 bg-gray-900 rounded-md text-white w-full" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input type="email" placeholder="Email address*" className="p-3 bg-gray-900 rounded-md text-white w-full" />
          <input type="tel" placeholder="Phone number*" className="p-3 bg-gray-900 rounded-md text-white w-full" />
        </div>
        <select className="p-3 bg-gray-900 rounded-md text-white w-full mt-4">
          <option>Select Query Topic</option>
          <option>Basic</option>
          <option>Standard</option>
          <option>premium</option>
        </select>
        <textarea placeholder="Message" className="p-3 bg-gray-900 rounded-md text-white w-full mt-4 h-28"></textarea>
        <button className="w-full bg-orange-600 p-3 mt-4 duration-300 rounded-md font-medium hover:opacity-45 transition">
          Submit Message
        </button>
      </div>
          </div>
            <section className="bg-gray-600 text-white flex flex-row font-medium mt-10 p-10 gap-15">
                       
                          <img
                            src="KAYAN LOGO.PNG"
                            alt="Kayan Logo"
                            className="w-3xs p-4"data-aos="fade-in"
                          />
                        
                        
                        <div className="flex flex-col cursor-pointer "data-aos="fade-right">
                        <h1 className="text-4xl text-orange-500">Useful links</h1>
                        <Link to="/"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">Home</h2></Link>
                        <Link to="/service"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">Service</h2></Link> 
                        <Link to="/contact"> <h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">Contact</h2></Link>
                        </div>
                        <div className="flex flex-col cursor-pointer"data-aos="fade-right">
                                       <h1 className="text-4xl text-orange-500">Contact us</h1>
                                       <a href="mailto:husammusa864@gmail.com"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">KayanFrontend10@gmail.com</h2></a>
                                       <a href="https://wa.me/81932448"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">81932448</h2></a>
                                       <a href="https://www.instagram.com/kayan_frontend"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">Kayan Frontend</h2></a>
                                     </div>
                             </section>
                       
                             <hr className='text-orange-500'/>
                       
                             <footer className='flex flex-col sm:flex-row justify-between text-xl text-white bg-gray-600 p-10'>
                               <div data-aos="fade-right">
                                 <h2>© 2024 Kayan. All Rights Reserved</h2>
                               </div>
                                 <div className='flex flex-row gap-5'data-aos="fade-right">
                                               <a href="https://www.instagram.com/kayan_frontend"><FaInstagram className="text-xl cursor-pointer duration-300 hover:text-orange-500"/></a>
                                               <a href="https://wa.me/81932448"><FaWhatsapp  className="text-xl cursor-pointer duration-300 hover:text-orange-500"/></a>
                                             </div>
                             </footer>
          </div>
  )
}

export default Contact


