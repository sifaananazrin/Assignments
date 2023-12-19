import React from 'react';

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-600 p-4">
      <div className="max-w-md w-full bg-black p-4 md:p-8 rounded-lg shadow-2xl">
        <div className="flex flex-col items-center">
          <div className="bg-teal-500 rounded-full p-3">
            <svg className="text-white h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.293 9.707a1 1 0 111.414-1.414l1.293 1.293 2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-2-2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold">Awesome!</h3>
            <p className="text-sm sm:text-base text-white mt-2">Your booking has been confirmed. Check your email for details.</p>
            <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-700 text-sm sm:text-base">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
