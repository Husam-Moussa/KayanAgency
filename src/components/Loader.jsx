import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay (for example, 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[#0D1117]">
      {loading ? (
        <div className="text-orange-500 text-7xl font-extrabold">
          <span className="block animate-pulse">KAYAN FRONTEND</span>
        </div>
      ) : (
        <div className="text-orange-500 text-7xl font-extrabold">
          KAYAN FRONTEND Loaded
        </div>
      )}
    </div>
  );
};

export default Loader;
