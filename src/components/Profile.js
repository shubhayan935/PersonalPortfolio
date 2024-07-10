import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [bioIndex, setBioIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const bios = [
    "I'm passionate about building cutting-edge applications",
    "I work on innovative products to deliver quality experiences to meaningful audiences",
    "A versatile software engineer and enterprising innovator",
    "I build scalable software applications for relevant solutions",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setBioIndex((prevIndex) => (prevIndex + 1) % bios.length);
        setFade(false);
      }, 500); // Match this duration with CSS transition duration
    }, 6000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [bios.length]);

  return (
    <div id="profile">
      <div id="profile_img"><img src='profile-pic.png' /></div>
      <div id="username">
        <span style={{ display: 'block' }}>Shubhayan Srivastava</span>
      </div>
      <div id="userbio" className={fade ? 'fade-out' : ''} style={{ display: 'block' }}>{bios[bioIndex]}</div>
      <div id="about">
        <span id="about-icons" style={{ display: 'block' }}><i className="fas fa-users"></i> &nbsp; CS @University of Southern California</span>
        <span id="about-icons" style={{ display: 'block' }}><i className="fas fa-envelope"></i> &nbsp; shubhaya@usc.edu</span>
        <span id="about-icons" style={{ display: 'block' }}><i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp; Currently in Los Angeles</span>
        <div className="socials">
          <span style={{ display: 'block' }}>
            <a href="https://www.linkedin.com/in/shubhayan935/" target="_blank" className="socials"><i className="fab fa-linkedin-in"></i></a>
          </span>
          <span style={{ display: 'block' }}>
            <a href="https://x.com/Shubhayan935" target="_blank" className="socials"><i className="fab fa-twitter"></i></a>
          </span>
          <span style={{ display: 'block' }}>
            <a href="https://www.github.com/shubhayan935/" target="_blank" className="socials"><i className="fab fa-github"></i></a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;