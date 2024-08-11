import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="relative w-36 h-36 rounded-full overflow-hidden bg-white">
        <div className="liquid absolute top-0 w-[200%] h-[200%] bg-gradient-to-t from-sky-300 to-sky-500 rounded-[40%] animate-wave"></div>
        <div className="loading-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-white z-10"></div>
      </div>
    </div>
  );
};

export default Loader;
