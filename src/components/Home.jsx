import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import { SiGooglemeet } from "react-icons/si";
import { FaStickyNote } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import Loader from './Loader';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);  // State for managing the menu toggle

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
                  src="/KAYAN LOGO.png"
                  alt="KAYAN Logo"
                  className="w-3xs"
                  data-aos="fade-right"
                />
                <ul className="list-none flex flex-row gap-3 text-white mr-28 cursor-pointer" data-aos="fade-right">
                  <li className="duration-300 text-orange-500 hover:text-orange-500">
                    <Link to="/">Home</Link> {/* Link to Home */}
                  </li>
                  <li className="duration-300 text-white hover:text-orange-500">
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

      <section className="bg-[#0D1117] text-white flex flex-col justify-center items-center text-3xl font-medium" data-aos="fade-right">
        <div className="text-center">
          <h3 className="text-4xl">Transforming</h3>
          <h2 className="text-9xl">VISION INTO</h2>
          <h2 className="text-4xl">Reality</h2>
        </div>
      </section>

      <section className="bg-[#0D1117] text-white flex flex-col justify-center items-center text-3xl font-medium mt-20" data-aos="fade-right">
        <h2 className="text-orange-500 text-xl">Work process</h2>
        <h4 className="text-7xl text-white mb-10">Follow 4 easy work steps</h4>
        
        <div className="flex flex-wrap justify-center items-center gap-28 duration-300 text-orange-500 mt-10 space-x-10 sm:space-x-5">
          {/* Step 1 */}
          <div className="flex flex-col items-center mb-8 sm:mb-4">
            <div className="circle-icon bg-orange-500 flex items-center justify-center text-white w-20 h-20 rounded-full mb-3">
              <SiGooglemeet className="text-3xl transition-transform transform hover:scale-100" />
            </div>
            <h2 className="text-white">Zoom meeting</h2>
            <p className="text-lg text-gray-600 mt-1.5 text-center">
              Discuss and talk about what<br />you want us to build
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center mb-8 sm:mb-4">
            <div className="circle-icon bg-orange-500 flex items-center justify-center text-white w-20 h-20 rounded-full mb-3">
              <FaStickyNote className="text-3xl transition-transform transform hover:scale-100" />
            </div>
            <h2 className="text-white">Notes</h2>
            <p className="text-lg text-gray-600 mt-1.5 text-center">
              We make sure of the<br />website properties
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center mb-8 sm:mb-4">
            <div className="circle-icon bg-orange-500 flex items-center justify-center text-white w-20 h-20 rounded-full mb-3">
              <FaNetworkWired className="text-3xl" />
            </div>
            <h2 className="text-white">Construction</h2>
            <p className="text-lg text-gray-600 mt-1.5 text-center">
              We start building<br />the website
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center mb-8 sm:mb-4">
            <div className="circle-icon bg-orange-500 flex items-center justify-center text-white w-20 h-20 rounded-full mb-3">
              <GiReceiveMoney className="text-3xl transition-transform transform hover:scale-100" />
            </div>
            <h2 className="text-white">Finishing</h2>
            <p className="text-lg text-gray-600 mt-1.5 text-center">
              Finishing the project and<br />make sure of any changes<br />you want to apply
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-orange-500 flex flex-col sm:flex-row justify-center items-center text-3xl font-medium mt-20 p-10">
        <div className='flex flex-col sm:ml-12 font-medium'>
          <h2 className="text-orange-500 text-xl" data-aos="fade-right">About our company</h2>
          <h4 className="text-3xl text-gray-600" data-aos="fade-right">We provide the best websites and teach you how to make it</h4>
          <p className='text-base text-gray-600 mt-5' data-aos="fade-right">At Kayan, we create visually stunning and high-performance websites tailored to your business needs. We also empower individuals by offering hands-on training in web development, helping them build their own digital presence. Whether you need a website or want to learn how to make one, we’ve got you covered!</p>
          <Link to="/about">
            <button className='mt-5 bg-orange-500 text-white p-4 w-sm cursor-pointer duration-300 hover:opacity-45' data-aos="fade-right">Get started now</button>
          </Link>
        </div>
        <img src="/Images/OFFICE.jpg" alt="" className='w-full sm:w-xl mt-12 sm:mt-0 sm:mr-12' data-aos="fade-in"/>
      </section>
      <section className="bg-[#0D1117] text-white p-16 flex flex-col justify-center items-center text-3xl font-medium">
        <h2 className="9xl p-5" data-aos="fade-up">Our Services</h2>

        {/* Service 1 */}
        <div className="flex flex-row items-center mt-10 gap-14 text-orange-500">
          <div className="relative group">
            <img src="Images/Service1.jpg" alt="Development" className="w-sm" />
            {/* Hover effect container */}
            <div className="absolute inset-0 flex justify-center items-center bg-orange-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <Link to="/contact"><button className="px-6 py-2 bg-white cursor-pointer text-orange-500 rounded-full">
                Make an Appointment
              </button></Link>
            </div>
          </div>

          <div className="relative group">
            <img src="Images/Service2.jpg" alt="Teaching" className="w-sm" />
            {/* Hover effect container */}
            <div className="absolute inset-0 flex justify-center items-center bg-orange-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
            <Link to="/contact"><button className="px-6 py-2 bg-white cursor-pointer text-orange-500 rounded-full">
                Make an Appointment
              </button></Link>
            </div>
            </div>
          
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-gray-600 text-white flex flex-col sm:flex-row font-medium mt-10 p-10 gap-15">
        <img
          src="KAYAN LOGO.PNG"
          alt="Kayan Logo"
          className="w-3xs p-4" data-aos="fade-in"
        />
        
        <div className="flex flex-col cursor-pointer " data-aos="fade-right">
          <h1 className="text-4xl text-orange-500">Useful links</h1>
          <Link to="/about"><h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">About</h2></Link>
          <Link to="/service"> <h2 className="text-2xl duration-300  cursor-pointer hover:text-orange-500">Services</h2></Link>
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
  );
};

export default Home;
