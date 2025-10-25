// import React from "react";
// import { Link } from "react-router-dom";
// import "./SignUpcs.css";

// function SignUpUI() {
//   return (
//     <div className="SignUpMainContainer">
//     <form className="form-s">
//       {/* Name Input */}
//       <div className="flex-column">
//         <label>Name</label>
//       </div>
//       <div className="inputForm-s">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 32 32"
//         >
//           <path d="M16 2a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 16c-6.08 0-11 2.91-11 6.5V28h22v-3.5c0-3.59-4.92-6.5-11-6.5z" />
//         </svg>
//         <input placeholder="Enter your Name" className="input-s" type="text" />
//       </div>

//       {/* Email Input */}
//       <div className="flex-column-s">
//         <label>Email</label>
//       </div>
//       <div className="inputForm-s">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 32 32"
//         >
//           <path d="M30 6H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM28 8l-12 9L4 8zm0 16H4V10l12 9 12-9z" />
//         </svg>
//         <input placeholder="Enter your Email" className="input-s" type="email" />
//       </div>

//       {/* Password Input */}
//       <div className="flex-column-s">
//         <label>Password</label>
//       </div>
//       <div className="inputForm-s">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 512 512"
//         >
//           <path d="M336 512H176a48 48 0 0 1-48-48V240a48 48 0 0 1 48-48h160a48 48 0 0 1 48 48v224a48 48 0 0 1-48 48zM176 224a16 16 0 0 0-16 16v224a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V240a16 16 0 0 0-16-16zM304 224a16 16 0 0 0 16-16v-80a96 96 0 0 0-192 0v80a16 16 0 0 0 32 0v-80a64 64 0 0 1 128 0v80a16 16 0 0 0 16 16z" />
//         </svg>
//         <input
//           placeholder="Enter your Password"
//           className="input-s"
//           type="password"
//         />
//       </div>

//       {/* Sign Up Button */}
//       <button className="button-submit-s">Sign Up</button>

//       {/* Footer Text */}
//       <p className="p-s">
//         Already have an account?{" "}
//         <Link to="/login" className="span">
//           Sign In
//         </Link>
//       </p>

//       <p className="p-s line-s">Or Sign Up With</p>

//       {/* Social Buttons */}
//       <div className="flex-row-s">
//         <button className="btn-s google-s">Google</button>
//         <button className="btn-s apple-s">Apple</button>
//       </div>
//     </form>
//     </div>
//   );
// }

// export default SignUpUI;



// updated:

// frontend/src/SignUpMain/SignUpUI.js

import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"; // <-- 1. Import axios
import "./SignUpcs.css";

function SignUpUI() {
  // --- 2. Add state for inputs, errors, and success ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // --- 3. Create the signup handler ---
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // 4. Send data to your backend's register route
      const response = await axios.post("http://localhost:3002/api/auth/register", {
        name,
        email,
        password,
      });

      // 5. Show success and redirect to login
      setSuccess("Sign up successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login"); // Go to login page
      }, 2000);

    } catch (err) {
      // 6. Show errors
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("Sign up failed. Please try again.");
      }
    }
  };
  // --- End of new code ---

  return (
    <div className="SignUpMainContainer">
      {/* 7. Update the form to use the handler */}
      <form className="form-s" onSubmit={handleSignUp}>
        {/* Name Input */}
        <div className="flex-column">
          <label>Name</label>
        </div>
        <div className="inputForm-s">
          {/* ... svg ... */}
          <input
            placeholder="Enter your Name"
            className="input-s"
            type="text"
            value={name} // <-- Add value
            onChange={(e) => setName(e.target.value)} // <-- Add onChange
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex-column-s">
          <label>Email</label>
        </div>
        <div className="inputForm-s">
          {/* ... svg ... */}
          <input
            placeholder="Enter your Email"
            className="input-s"
            type="email"
            value={email} // <-- Add value
            onChange={(e) => setEmail(e.target.value)} // <-- Add onChange
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex-column-s">
          <label>Password</label>
        </div>
        <div className="inputForm-s">
          {/* ... svg ... */}
          <input
            placeholder="Enter your Password"
            className="input-s"
            type="password"
            value={password} // <-- Add value
            onChange={(e) => setPassword(e.target.value)} // <-- Add onChange
            required
          />
        </div>

        {/* 8. Make this a submit button */}
        <button type="submit" className="button-submit-s">
          Sign Up
        </button>

        {/* 9. Show error or success messages */}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}

        {/* Footer Text */}
        <p className="p-s">
          Already have an account?{" "}
          <Link to="/login" className="span">
            Sign In
          </Link>
        </p>

        {/* ... rest of your file (social logins etc) ... */}
      </form>
    </div>
  );
}

export default SignUpUI;