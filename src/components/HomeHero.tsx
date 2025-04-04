
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();

  const handleDownloadApp = () => {
    // In a real app, this might direct to app stores
    window.open("https://example.com/download", "_blank");
  };

  const handleSchedulePickup = () => {
    navigate("/signin");
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background with leaf animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-eco-leaf-gold rounded-full opacity-70 animate-leaf-fall" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-eco-green rounded-full opacity-70 animate-leaf-fall" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/5 left-3/4 w-5 h-5 bg-eco-teal rounded-full opacity-70 animate-leaf-fall" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/6 left-1/3 w-4 h-4 bg-eco-leaf-gold rounded-full opacity-70 animate-leaf-fall" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-eco-green rounded-full opacity-70 animate-leaf-fall" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-eco-green">Get Paid</span> for Your 
            <span className="text-eco-teal"> Recyclables</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl">
            The AI-Powered, Blockchain-Backed Waste Management Platform That Turns Your Trash Into Cash
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              className="bg-eco-green hover:bg-eco-teal text-lg px-8 py-6"
              onClick={handleDownloadApp}
            >
              Download App
            </Button>
            <Button 
              variant="outline" 
              className="border-eco-green text-eco-green hover:bg-eco-pale-green text-lg px-8 py-6"
              onClick={handleSchedulePickup}
            >
              Schedule Pickup
            </Button>
          </div>
          
          <div className="flex items-center justify-center animate-bounce mt-8">
            <ArrowDown className="h-6 w-6 text-eco-green" />
            <span className="text-eco-green ml-2">Scroll to learn more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
