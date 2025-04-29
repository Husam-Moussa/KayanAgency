import React, { useState, useEffect, useRef } from 'react';
import { FaLaptopCode, FaChalkboardTeacher, FaPaintBrush, FaTools, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';

const Home = () => {
  const [navbarGlow, setNavbarGlow] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setNavbarGlow(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <>
     
<Navbar/>
      {/* Home Section */}
      <div id="home" className="relative w-full h-screen">
        <img
          src="/HomeImages/HomeImage.png"
          alt="Home Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-4 w-full">
          <h1 className="text-white overflow-y-hidden text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight" data-aos="fade-right">
            We’re Building Your Future
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl mt-6 max-w-2xl" data-aos="fade-left">
            Take a step towards the future of Web Development with the latest technologies
          </p>
          <Link to="/about">
            <button className="mt-10 bg-orange-500 cursor-pointer overflow-y-hidden text-white px-6 py-3 text-lg sm:text-xl rounded-2xl transition duration-300 hover:opacity-70" data-aos="fade-up">
              About us
            </button>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="bg-white py-16 px-4 text-center mt-7">
        <h2 className="text-3xl md:text-6xl mb-6 overflow-y-hidden" data-aos="fade-in">Our Services</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-xl" data-aos="fade-right">
          We provide cutting-edge web development solutions using the latest technologies to help you build scalable, secure, and modern digital experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 max-w-7xl mx-auto" data-aos="fade-in">
          <div className="flex flex-col items-center rounded-2xl p-6">
            <FaLaptopCode className="text-blue-950 text-5xl mb-4" />
            <h3 className="text-2xl mb-2">Website Development</h3>
            <p className="text-gray-600 mt-2">
              Fast, responsive, and scalable websites built with modern frameworks like React, Next.js, and more.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl p-6">
            <FaChalkboardTeacher className="text-blue-950 text-5xl mb-4" />
            <h3 className="text-2xl mb-2">Web Development Training</h3>
            <p className="text-gray-600 mt-2">
              Personalized training and mentorship for beginners and professionals to level up their development skills.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl p-6">
            <FaPaintBrush className="text-blue-950 text-5xl mb-4" />
            <h3 className="text-2xl mb-2">UI/UX Design</h3>
            <p className="text-gray-600 mt-2">
              We design intuitive, user-centered interfaces that enhance usability and create great user experiences.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl p-6">
            <FaTools className="text-blue-950 text-5xl mb-4" />
            <h3 className="text-2xl mb-2">Maintenance & Support</h3>
            <p className="text-gray-600 mt-2">
              Ongoing maintenance, performance optimization, and support to keep your site secure and up-to-date.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-100 py-16 px-6 md:px-16 mt-7">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left mt-10">
            <h2 className="overflow-y-hidden text-4xl sm:text-5xl md:text-6xl mb-6 text-blue-950" data-aos="fade-right">
              We are experts in this field<br /> since almost 2 years.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4 leading-relaxed" data-aos="fade-left">
              Over the past 24 months, we’ve delivered dozens of successful projects to clients around the world. Helping businesses grow by enhancing their online presence with modern, user-centric websites and applications.
            </p>
          </div>
          <div className="md:w-1/2 space-y-6 w-full" data-aos="fade-in">
            {[{ label: "Building", percent: 85 },
              { label: "Teaching", percent: 80 },
              { label: "Designing", percent: 90 },
              { label: "Planning", percent: 85 }].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xl sm:text-2xl text-blue-950">{item.label}</span>
                    <span className="text-xl sm:text-2xl text-orange-500">{item.percent}%</span>
                  </div>
                  <div className="h-2 bg-gray-300 rounded-full">
                    <div
                      className="h-full bg-orange-500 rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-orange-500 py-16 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col items-center text-center" data-aos="zoom-in">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-white leading-snug max-w-4xl">
            An innovative company working with the latest technologies
          </h2>
          <Link to='/about'>
            <button className="mt-10 cursor-pointer bg-white text-orange-500 px-6 py-3 text-lg sm:text-xl rounded-2xl transition duration-300 hover:opacity-80">
              About us
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-24 px-4 text-center mt-7">
        <h2 className="text-3xl md:text-6xl mb-6 overflow-y-hidden" data-aos="fade-right">Our Clients Say</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-xl" data-aos="fade-right">
          Trusted by clients worldwide to build modern, impactful digital experiences.
        </p>
        <div className="flex justify-center gap-20 mt-16 flex-wrap" data-aos="fade-in">
          <div className="flex items-center text-left gap-6 max-w-md">
            <img src="/HomeImages/Client1.jpg" alt="Client 1" className="w-24 h-24 object-cover rounded-full" />
            <div className="flex flex-col text-gray-700">
              <p className="text-lg sm:text-xl">
                It’s just brilliant. I will recommend Cobuild to everyone I know! I’m really glad these guys got Cobuild out there.
              </p>
              <p className="text-base sm:text-lg text-black mt-2">Rabih Bawab</p>
            </div>
          </div>

          <div className="flex items-center text-left gap-6 max-w-md">
            <img src="/HomeImages/Client2.png" alt="Client 2" className="w-24 h-24 object-cover rounded-full" />
            <div className="flex flex-col text-gray-700">
              <p className="text-lg sm:text-xl">
                Amazing service and quick turnaround. Cobuild's team is professional and easy to work with. Highly recommended!
              </p>
              <p className="text-base sm:text-lg text-black mt-2">Mohammad Chehab</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="bg-gray-100 py-24 px-4 text-center mt-7">
        <div className="flex flex-col md:flex-row items-center justify-center gap-48 mt-10" data-aos="zoom-in">
          <div className="flex flex-col items-center text-gray-700">
            <IoIosHome className="text-blue-950 text-7xl mb-4" />
            <p className="text-lg sm:text-2xl">Address</p>
            <p className="text-lg sm:text-lg">Tyre Lebanon</p>
          </div>
          <div className="flex flex-col items-center text-gray-700">
            <MdOutlineEmail className="text-blue-950 text-7xl mb-4" />
            <p className="text-lg sm:text-2xl">Email</p>
            <p className="text-lg sm:text-lg">husammusa468@gmail.com</p>
          </div>
          <div className="flex flex-col items-center text-gray-700">
            <IoPhonePortraitOutline className="text-blue-950 text-7xl mb-4" />
            <p className="text-lg sm:text-2xl">Phone</p>
            <p className="text-lg sm:text-lg">+961 81 932 448</p>
          </div>
        </div>
      </section>

      <hr />
      <footer className="bg-gray-100 p-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl sm:text-2xl text-gray-700 text-center md:text-left">
            © Husam 2025, All Rights Reserved.
          </h2>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/kayan_frontend" target="_blank" rel="noopener noreferrer" className="text-blue-950 duration-300 hover:text-orange-500 text-xl transition">
              <FaInstagram />
            </a>
            <a href="https://wa.me/96181932448" target="_blank" rel="noopener noreferrer" className="text-blue-950 duration-300 hover:text-orange-500 text-xl transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
