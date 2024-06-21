// Navbarz.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import "./App.css";

const Navbarz = () => {
  const [action, setAction] = useState("SignUp");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleAuth = (e) => {
    e.preventDefault();
    if (action === "Login") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          navigate("/home");
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (action === "SignUp") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          navigate("/home");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
       
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src="https://i.postimg.cc/zBCgVtQr/Our-logo1.jpg" alt="NatCalPrep" style={{ width: "100px", height: "75px" }} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <a className="nav-link" href="#section1">Home</a>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-link">Help</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section10">Sign Up/Sign in</a>
            </li>
          </ul>
        </div>
        
      </nav>
  
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <video className="video-background" autoPlay loop muted style={{ width: '50%', maxWidth: '500px' }}>
    <source src="/Video1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>


      <div className="overlay"></div>
      <div className="overlay"></div>
      <div id="section10" style={{ border: "1px solid #000" }}>
        <form onSubmit={handleAuth}>
          <h3>{action}</h3>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => {
                setAction("SignUp");
                handleAuth(e);
              }}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={(e) => {
                setAction("Login");
                handleAuth(e);
              }}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbarz;
