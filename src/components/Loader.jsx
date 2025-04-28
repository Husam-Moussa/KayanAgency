import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0D1117]">
      <div className="text-orange-500 font-extrabold">
        <span className="overflow-hidden block animate-pulse text-[10vw] sm:text-6xl md:text-6xl lg:text-6xl">
          KAYAN FRONTEND
        </span>
      </div>
    </div>
  );
};

export default Loader;
