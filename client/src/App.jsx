import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import SurveyForm from "./components/SurveyForm";
import AdminPanel from "./components/AdminDashboard";
import SuccessPage from "./components/SuccessPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SurveyForm />} />
        <Route path="/admin-home" element={<AdminPanel />} />
        <Route path="/success-page" element={<SuccessPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </>
  );
}
