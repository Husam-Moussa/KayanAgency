import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar'; // Make sure the path is correct

const About = () => {
  const [navbarGlow, setNavbarGlow] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

  return (
    <>
      {/* Navbar with only logo centered */}
      <Navbar simple={true} /> {/* Only logo, centered */}

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="/AboutImages/About1.jpg"
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="overflow-y-hidden text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight"
            data-aos="fade-left"
          >
            About Our Company
          </h1>
          <p
            className="text-white text-lg sm:text-xl md:text-2xl mt-6 max-w-2xl"
            data-aos="fade-right"
          >
            About our company
          </p>
          <Link to="/home">
            <button
              className="mt-10 bg-orange-500 cursor-pointer text-white px-6 py-3 text-lg sm:text-xl rounded-2xl transition duration-300 hover:opacity-70"
              data-aos="fade-in"
            >
              Home
            </button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16 px-4 mt-7">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-center md:text-left" data-aos="fade-right">
            <h2
              className="text-3xl md:text-6xl mb-6 text-orange-500 overflow-y-hidden"
              data-aos="fade-left"
            >
              Kayan Frontend
            </h2>
            <p
              className="text-blue-950 max-w-3xl mx-auto text-xl"
              data-aos="fade-left"
            >
              At Kayan Frontend, we specialize in crafting innovative and user-centric web applications
              that help businesses thrive in the digital world. With a passion for modern design and
              cutting-edge technologies, we deliver seamless, responsive, and scalable solutions that meet
              the unique needs of our clients.
              <br />
              <br />
              Our team is composed of experienced frontend developers, UI/UX designers, and digital
              strategists who collaborate to create outstanding web experiences. We understand that every
              project is different, which is why we take a personalized approach, ensuring that each
              solution is tailored to your brand and business goals.
              <br />
              <br />
              From building intuitive user interfaces to providing seamless navigation and performance
              optimization, we ensure that every aspect of your website is thoughtfully designed and
              expertly executed. Whether you're launching a new project or revamping an existing one,
              Kayan Frontend is here to help you stand out in the digital landscape.
            </p>
          </div>

          {/* Founder Image */}
          <div className="relative group">
            <div className="absolute top-0 left-0 w-full text-white text-2xl p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 text-center">
              Founder
            </div>
            <img
              src="/AboutImages/ME.jpg"
              alt="Founder"
              className="w-full h-auto rounded-lg shadow-lg transition-all duration-300"
              data-aos="fade-right"
            />
            <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-80 transition-all duration-500 z-10"></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
              <div className="flex gap-5">
                <a
                  href="https://www.linkedin.com/in/husam-moussa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white duration-300 hover:text-blue-950"
                >
                  <FaLinkedinIn size={30} />
                </a>
                <a
                  href="https://www.instagram.com/husam_musa_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white duration-300 hover:text-blue-950"
                >
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 p-5 mt-auto" ref={contactRef}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl sm:text-2xl text-gray-700 text-center md:text-left">
            © Husam 2025, All Rights Reserved.
          </h2>
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/kayan_frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-950 duration-300 hover:text-orange-500 text-xl transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/96181932448"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-950 duration-300 hover:text-orange-500 text-xl transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
