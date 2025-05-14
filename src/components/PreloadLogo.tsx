import React, { useState, useEffect } from "react";
import logo from '../assets/logo.png';

const MIN_SPLASH_TIME = 400; // 1.5 seconds

const PreloadLogo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = logo;
    img.onload = () => setLoaded(true);

    const timer = setTimeout(() => setMinTimePassed(true), MIN_SPLASH_TIME);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded || !minTimePassed) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <img src={logo} alt="Logo" className="w-24 h-24" />
      </div>
    );
  }

  return <>{children}</>;
};

export default PreloadLogo; 