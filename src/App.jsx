import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import Loader from './components/Loader'; // Your custom loader
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  const [user, loading] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (for example, 2 seconds before navigating to login)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after delay
    }, 5000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />; // Show loader only before the login page
  }

  return (
    <Router>
      <Routes>
        {/* Default route: Redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
