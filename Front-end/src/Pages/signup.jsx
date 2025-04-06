import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      navigate("/LanguagePage");
    }
  }, [navigate]);

  // Toggle between login and signup forms
  const handleToggle = (form) => {
    setIsLogin(form === "login");
    resetForm();
  };

  // Reset form fields and errors
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setRePassword("");
    setName("");
    setEmailError("");
    setPasswordError("");
    setServerError("");
  };

  // Validate form inputs
  const validateForm = () => {
    let isValid = true;

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      isValid = false;
    } else if (!isLogin && password !== rePassword) {
      setPasswordError("Passwords do not match.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        if (!isLogin) {
          // Signup logic
          const response = await axios.post("http://localhost:8081/signup", {
            name,
            email,
            password,
          });
          if (response.data.success) {
            alert("Signup successful!");
            resetForm();
            setIsLogin(true); // Switch to login form after successful signup
          } else {
            setServerError(response.data.message || "Signup failed.");
          }
        } else {
          // Login logic
          const response = await axios.post("http://localhost:8081/login", {
            email,
            password,
          });
          if (response.data.success) {
            localStorage.setItem(
              "user",
              JSON.stringify({
                name: response.data.userName,
                email: response.data.userEmail,
              })
            );
            navigate("/LanguagePage"); // Redirect to LanguagePage after login
          } else {
            setServerError(response.data.message || "Invalid credentials.");
          }
        }
      } catch (error) {
        console.error("API Error:", error);
        setServerError(
          error.response?.data?.message ||
            "A network error occurred. Please try again."
        );
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  // Get stored user data
  const storedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center relative">
      {/* Back button */}
      <button
        className="absolute top-4 left-4 px-6 py-2 text-sm font-bold transition-colors duration-300 text-gray-500 bg-transparent border border-gray-500 rounded hover:bg-gray-500 hover:text-white"
        onClick={() => navigate("/")}
      >
        Back
      </button>

      {/* Logout button (if logged in) */}
      {storedUser && (
        <div className="absolute top-4 right-4 flex items-center space-x-4">
          <span className="text-white font-bold">{storedUser.name}</span>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      )}

      {/* Form container */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-center text-gray-800">
            {isLogin ? "Login" : "Signup"}
          </h2>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name field (only for signup) */}
            {!isLogin && (
              <div>
                <input
                  type="text"
                  placeholder="USer name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Email field */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {emailError && (
                <p className="text-sm text-red-500 mt-1">{emailError}</p>
              )}
            </div>

            {/* Password field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={20} />
                ) : (
                  <AiFillEye size={20} />
                )}
              </span>
            </div>

            {/* Re-enter password field (only for signup) */}
            {!isLogin && (
              <div className="relative">
                <input
                  type={showRePassword ? "text" : "password"}
                  placeholder="Re-enter Password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() => setShowRePassword(!showRePassword)}
                >
                  {showRePassword ? (
                    <AiFillEyeInvisible size={20} />
                  ) : (
                    <AiFillEye size={20} />
                  )}
                </span>
              </div>
            )}

            {/* Server error message */}
            {serverError && (
              <p className="text-sm text-red-500 text-center">{serverError}</p>
            )}

            {/* Forgot password (only for login) */}
            {isLogin && (
              <p className="text-right text-sm text-blue-600 cursor-pointer hover:underline">
                Forgot password?
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-blue-800"
            >
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>

          {/* Toggle between login and signup */}
          <div className="text-center mt-4">
            {isLogin ? (
              <p className="text-sm text-gray-600">
                Not a member?{" "}
                <span
                  onClick={() => handleToggle("signup")}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  Signup now
                </span>
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <span
                  onClick={() => handleToggle("login")}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  Login now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;