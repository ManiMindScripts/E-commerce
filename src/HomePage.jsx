import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaYoutube, FaHeart } from "react-icons/fa";
import "./Home.css";

const HomePage = () => {
  const text = [
    "Learn the Fundamentals",
    "with Our Experts",
    "Achieve Your Goals",
  ];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingInterval;
    let timeout;
   
    if(typing)
      typingInterval = setInterval(() => {
           setCurrentText((prev)=>
            text[currentIndex].slice(0, prev.length + 1)
          );
      },100);
     
      if(currentText===text[currentIndex])
        {
          clearInterval(typingInterval)
          timeout = setTimeout(() => setTyping(false),2000) 
        }
        else{
          typingInterval = setInterval(()=> {
                    setCurrentText ((prev) => prev.slice(0,-1));
          },50)
          if(currentText ===""){
            clearInterval (typingInterval)
            setTyping(true)
            setCurrentIndex((prevIndex)=>(prevIndex+1) % text.length)
          }

        }
    return () => {
     clearInterval(typingInterval)
     clearTimeout(timeout)
    }
  }, [currentText,typing,currentIndex,text])
  

  return (
    <div className="homepage">
      {/* Header Section */}
      <div className="header">
        <div className="contact-info">
          <span>📞 +923455555396</span>
          <span>📧 info@ezitech.org</span>
          <span>📍 Westridge 1, Office #304-G Peshawar Road, Rawalpindi</span>
        </div>
        <div className="social-links">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaBehance /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">EZTECH INSTITUTE</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li className="dropdown">
            Internships
            <ul className="dropdown-menu">
              <li>Digital Marketing</li>
              <li>App Development</li>
              <li>Web Development</li>
              <li>2D/3D Architecture</li>
              <li>Graphics Designing</li>
              <li>Artificial Intelligence</li>
              <li>Front-End Development</li>
            </ul>
          </li>
          <li className="dropdown">
            Careers
            <ul className="dropdown-menu-an">
              <li>Seminars</li>
            </ul>
          </li>
          <li>Courses</li>
          <li>Tech Blogs</li>
        </ul>
        <button className="login-btn">iPortal Login</button>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1 className="animated-text">
        {currentText}
        {/* Learn the Fundamentals with Our Experts */}
          <span className="cursor"></span>
        </h1>
        <div className="search-bar">
          <input type="text" placeholder="Search Internships..." />
          <button>Search</button>
        </div>
        <h3>Explore Our more UseFul Products<FaHeart /></h3>
      </div>
    </div>
  );
};

export default HomePage;