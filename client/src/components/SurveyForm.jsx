import React,{useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "First Name must only contain alphabetic characters and spaces"
    )
    .required("First Name is required"),
  lastName: Yup.string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "Last Name must only contain alphabetic characters and spaces"
    )
    .required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone Number must be only digits")
    .min(10, "Phone Number must be exactly 10 digits")
    .max(10, "Phone Number must be exactly 10 digits")
    .required("Phone Number is required"),
  gender: Yup.string().required("Gender is required"),
  nationality: Yup.string().required("Nationality is required"),
  address: Yup.string().required("Address is required"),
  message: Yup.string().required("Message is required"),
});

const SurveyForm = () => {
  const navigate = useNavigate();

  const [isVerified, setIsVerified] = useState(false);

  const handleCaptcha = (value) => {
    setIsVerified(true);
  };
  const handleSubmit = async (values, actions) => {

    if (!isVerified || values.honeypot) {
     
      return;
    }
    try {
      const response = await axios.post("/api/submit-survey", values);

      if (response.data && response.data.message === 'Survey added successfully') {
        navigate('/success-page'); // Navigate to success page
      } else {
       console.log("failed")
      }
      actions.resetForm();
    } catch (error) {
      console.error(error);
      // Handle error, maybe show an error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-teal-500">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="bg-black p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center text-white">
            Contact Form
          </h2>
          <p className="mb-8 text-center text-white">
            Please fill in your information, and we'll be sending your order in
            no time.
          </p>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              gender: "",
              nationality: "",
              address: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="md:w-1/2 md:mr-2">
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full mb-4 md:mb-0"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-400 text-xs"
                    />
                  </div>
                  <div className="md:w-1/2 md:ml-2">
                    <Field
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-400 text-xs"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div
                    role="group"
                    aria-labelledby="my-radio-group"
                    className="flex items-center space-x-4"
                  >
                    <label className="inline-flex items-center text-white">
                      <Field
                        type="radio"
                        name="gender"
                        value="Male"
                        className="form-radio text-teal-600"
                      />
                      <span className="ml-2">Male</span>
                    </label>
                    <label className="inline-flex items-center text-white">
                      <Field
                        type="radio"
                        name="gender"
                        value="Female"
                        className="form-radio text-pink-600"
                      />
                      <span className="ml-2">Female</span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-400 text-xs"
                  />
                </div>

                <div className="mb-4">
                  <Field
                    name="nationality"
                    type="text"
                    placeholder="Nationality"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="nationality"
                    component="div"
                    className="text-red-400 text-xs"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-400 text-xs"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    name="phoneNumber"
                    type="tel"
                    placeholder="Phone Number"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-400 text-xs"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    name="address"
                    type="text"
                    placeholder="Address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-400 text-xs"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="Your message"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-400 text-xs"
                  />
                </div>
                <ReCAPTCHA
                  sitekey="6LfaxzYpAAAAAIA4oCxXevSGKN76OVWBnk1ylxLc"
                  onChange={handleCaptcha}
                />

                <button
                  type="submit"
                  disabled={!isVerified}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit Form
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
