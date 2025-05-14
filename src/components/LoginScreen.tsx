
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "./Logo";
import { useToast } from "@/components/ui/sonner";

const LoginScreen: React.FC = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login request
    setTimeout(() => {
      setIsLoading(false);
      toast("Login successful");
    }, 1500);
  };

  const handleSSOLogin = () => {
    toast("SSO login initiated");
  };

  return (
    <div className="flex flex-col items-center px-6 py-8 w-full">
      <Logo className="mb-6" />
      
      <h1 className="text-2xl font-bold mb-8">Log in to OneApp</h1>
      
      <form className="w-full space-y-6" onSubmit={handleLogin}>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">RIL Email/Phone Number</label>
          <Input
            type="text"
            placeholder="e.g. email@ril.com"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full p-3"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Password</label>
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3"
            required
          />
          <div className="text-right">
            <a href="#" className="text-sm text-primary hover:underline">Forgot Password?</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember-me"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked === true)}
          />
          <label
            htmlFor="remember-me"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>
        
        <div className="space-y-3">
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white py-6"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in
              </span>
            ) : (
              "Login"
            )}
          </Button>
          
          <Button
            type="button"
            onClick={handleSSOLogin}
            className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-6"
            variant="outline"
          >
            Sign in with SSO
          </Button>
        </div>
      </form>
      
      <p className="text-xs text-center mt-8 text-gray-600">
        By continuing, you agree to the{" "}
        <a href="#" className="text-primary hover:underline">Terms of Service</a> &{" "}
        <a href="#" className="text-primary hover:underline">Privacy Policy</a>
      </p>
    </div>
  );
};

export default LoginScreen;
