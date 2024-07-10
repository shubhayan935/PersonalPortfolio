import React, { useState } from 'react';
import ScratchCard from 'react-scratchcard';
import ConfettiExplosion from 'react-confetti-explosion';
import './SurpriseSection.css';

const SurpriseSection = () => {
  const [isScratched, setIsScratched] = useState(false);

  const settings = {
    width: 320,
    height: 426.67,
    image: 'scratch-cover.png', // Ensure this image exists in the public folder
    finishPercent: 50,
    onComplete: () => setIsScratched(true),
  };

  return (
    <div className="surprise-section">
      {isScratched && <ConfettiExplosion />}
      <h2>Surprise!</h2>
      {isScratched ? (
        <div className="message">
          <p>You've been booped! This load of cuteness is my dog, Casper 🐶. Say Hi!</p>
        </div>
      ) : (
        <div className="message">
          <p>Scratch the card below.</p>
        </div>
      )}
      <div className="scratch-card-container">
        <ScratchCard {...settings}>
          <img src="casper.png" alt="Casper" className={`dog-image ${isScratched ? 'jump' : ''}`} />
        </ScratchCard>
      </div>
    </div>
  );
};

export default SurpriseSection;
