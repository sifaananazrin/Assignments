import React, { useState, useEffect } from 'react';
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
function AdminPanel() {
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
   
    const fetchSurveys = async () => {
      try {
        const response = await axios.get('/admin/getallSurveys');
        setSurveys(response.data);
      } catch (error) {
        console.error('Error fetching surveys:', error);
     
      }
    };

    fetchSurveys();
  }, []);


  const handleLogout = () => {
    // Add any logout logic here if necessary
    navigate('/admin-login');
  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-teal-700 text-white">
    <nav className="bg-teal-900 p-4 flex justify-between">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <button 
        onClick={handleLogout} 
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
      >
        Logout
      </button>
    </nav>
      <main className="container mx-auto p-4">
        <div className="bg-gray-900 rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Survey Form Submissions</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-teal-700">
                  <th className="border py-2 px-4">Name</th>
                  <th className="border py-2 px-4">Gender</th>
                  <th className="border py-2 px-4">Nationality</th>
                  <th className="border py-2 px-4">Email</th>
                  <th className="border py-2 px-4">Phone Number</th>
                  <th className="border py-2 px-4">Address</th>
                  <th className="border py-2 px-4">Message</th>
                </tr>
              </thead>
              <tbody>
                {surveys.map((survey, index) => (
                  <tr key={index} className="hover:bg-teal-800 transition duration-300">
                    <td className="border py-2 px-4">{`${survey.firstName} ${survey.lastName}`}</td>
                    <td className="border py-2 px-4">{survey.gender}</td>
                    <td className="border py-2 px-4">{survey.nationality}</td>
                    <td className="border py-2 px-4">{survey.email}</td>
                    <td className="border py-2 px-4">{survey.phoneNumber}</td>
                    <td className="border py-2 px-4">{survey.address}</td>
                    <td className="border py-2 px-4">{survey.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminPanel;
