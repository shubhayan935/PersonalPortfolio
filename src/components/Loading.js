import React, { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("loading").classList.add("animated", "fadeOut");
      setTimeout(() => {
        document.getElementById("loading").style.display = "none";
      }, 800);
    }, 1500);
  }, []);

  return (
    <div id="loading">
      <div id="spinner"></div>
    </div>
  );
};

export default Loading;
