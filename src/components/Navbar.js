import React from 'react';

const Navbar = () => {
  const scrollTo = (elementId) => {
    document.getElementById(elementId).scrollIntoView();
    const underline = document.getElementById('menu_underline');
    underline.style.display = 'block';
    if (elementId === 'about_me') {
      underline.style.transform = 'translateX(3px)';
    } else if (elementId === 'projects') {
      underline.style.transform = 'translateX(105px)';
    } else if (elementId === 'resume') {
      underline.style.transform = 'translateX(208px)';
    }
  };

  return (
    <div id="menu_overall" style={{ display: 'block' }}>
      <div id="menu" style={{ display: 'inline-flex' }}>
        <a href="#about_me" onClick={() => scrollTo('about_me')} style={{ marginRight: '30px' }}>About Me</a>
        <a href="#projects" onClick={() => scrollTo('projects')} style={{ marginRight: '20px' }}>Projects</a>
        <a href="#resume" onClick={() => scrollTo('resume')} style={{ marginLeft: '20px' }}>Resume</a>
      </div>
      <div id="menu_underline" style={{ display: 'none' }}></div>
    </div>
  );
};

export default Navbar;
