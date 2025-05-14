
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${isVisible ? "" : "fade-out"}`}>
      <Logo size={80} />
    </div>
  );
};

export default SplashScreen;
