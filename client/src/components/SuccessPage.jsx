import React from 'react';

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <div className="bg-green-500 rounded-full p-4">
            <svg className="text-white h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.293 9.707a1 1 0 111.414-1.414l1.293 1.293 2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-2-2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-2xl text-gray-900 mt-2">Awesome!</h3>
            <p className="text-gray-600 mt-2">Thank You For Submit Form</p>
            {/* <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              OK
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
