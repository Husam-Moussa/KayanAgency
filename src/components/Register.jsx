import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../assets/google-logo.png"; 
import Modal from "./Modal"; // Import the modal component
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [actionText, setActionText] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setModalMessage("Account created successfully!");
      setActionText("Go to Home");
      setModalOpen(true);
    } catch (error) {
      console.error("Registration error: ", error);
      alert("Registration failed: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setModalMessage("Account created successfully with Google!");
      setActionText("Go to Home");
      setModalOpen(true);
    } catch (error) {
      console.error("Google Sign-In error: ", error);
      alert("Google sign-in failed: " + error.message);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    navigate("/Home");
  };

  useEffect(() => {
        AOS.init({
          duration: 1500,
          once: false,
        });
      }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Left side content with text */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center px-12 space-y-6 bg-white pt-10"data-aos='fade-right'>
        <h2 className="text-orange-600 text-5xl text-center">Create Your Account</h2>
        <p className="text-blue-950 text-3xl text-center">
          Access the most powerful web agency <br /> in the entire design and web industry
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="bg-gray-300 p-4 rounded-2xl w-full sm:w-80 mt-3"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-300 p-4 rounded-2xl w-full sm:w-80 mt-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative w-full sm:w-80">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-gray-300 p-4 rounded-2xl w-full pr-12"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute right-4 top-4 cursor-pointer text-blue-950"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <div className="flex gap-3 mt-3">
          <button
            onClick={handleRegister}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg cursor-pointer duration-300 hover:opacity-70"
          >
            register
          </button>
          <Link
            to="/login"
            className="bg-blue-950 text-white px-6 py-3 rounded-lg duration-300 hover:opacity-70 text-center"
          >
            Login
          </Link>
        </div>

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="mt-4 flex items-center justify-center gap-3 border cursor-pointer border-gray-400 px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100 duration-300"
        >
          <img src={googleLogo} alt="Google Logo" className="w-6 h-6 cursor-pointer" />
          Sign up with Google
        </button>
      </div>

      {/* Right side with image, visible only on large screens (laptops) */}
      <div className="hidden lg:block w-1/2 h-full">
        <img src="/LoginImages/Logo.png" className="w-full h-full object-cover" alt="Register Art" />
      </div>

      {/* Modal for successful registration */}
      {modalOpen && (
        <Modal 
          message={modalMessage}
          onClose={() => setModalOpen(false)}
          onAction={closeModal}
          actionText={actionText}
        />
      )}
    </div>
  );
};

export default Register;





