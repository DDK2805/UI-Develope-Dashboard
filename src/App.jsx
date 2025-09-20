import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setIsLoaded(true), 100);

    // Mouse tracking for subtle parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="app-container"
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      }}
    >
      <div className={`content-wrapper ${isLoaded ? 'loaded' : ''}`}>
        {/* Assignment Badge */}
        <div className="assignment-badge">
          ASSIGNMENT
        </div>
        
        {/* Main Heading */}
        <h1 className="main-heading">
          <span className="heading-line">UI DEVELOPER</span>
          <br />
          <span className="heading-line">ASSIGNMENT</span>
        </h1>
        
        {/* Company Section */}
        <div className="company-section">
          <div className="company-label">
            COMPANY
          </div>
          <div className="company-name">
            Juspay Technologies Private Limited
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;