import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ simple = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShowWhiteNavbar = scrolled || simple || isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        shouldShowWhiteNavbar ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Centered logo when simple */}
        <div className={`flex-1 flex justify-${simple ? 'center' : 'start'} items-center`}>
          <img
            src="/HomeImages/KAYAN LOGO ICON.png"
            alt="Kayan Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Show links and hamburger ONLY if not simple */}
        {!simple && (
          <>
            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map(({ id, label }) => (
                <Link
                  key={id}
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${
                    shouldShowWhiteNavbar ? 'text-orange-500' : 'text-white'
                  } hover:text-orange-500`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div
              className="md:hidden text-2xl cursor-pointer flex justify-center items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={`${shouldShowWhiteNavbar ? 'text-orange-500' : 'text-orange-500'}`}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {!simple && (
        <div
          className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 text-center py-4">
            {navLinks.map(({ id, label }) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={500}
                offset={-60}
                onClick={() => setIsOpen(false)}
                className="text-blue-950 hover:text-orange-500 cursor-pointer text-lg"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
