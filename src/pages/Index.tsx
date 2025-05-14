
import React, { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import LoginScreen from "@/components/LoginScreen";

const Index: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container bg-white">
      {showSplash ? <SplashScreen /> : <LoginScreen />}
    </div>
  );
};

export default Index;
