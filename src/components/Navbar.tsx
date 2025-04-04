
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Recycle } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 bg-white/90 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Recycle className="h-6 w-6 text-eco-green" />
          <span className="font-bold text-xl text-eco-green">EcoPay</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-eco-green transition-colors">
            Home
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-eco-green transition-colors">
            How It Works
          </Link>
          <Link to="/rewards" className="text-gray-700 hover:text-eco-green transition-colors">
            Rewards
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-eco-green transition-colors">
            About
          </Link>
          <Button className="bg-eco-green hover:bg-eco-teal ml-4">
            Sign In
          </Button>
          <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-pale-green">
            Register
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-eco-green transition-colors">
              Home
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-eco-green transition-colors">
              How It Works
            </Link>
            <Link to="/rewards" className="text-gray-700 hover:text-eco-green transition-colors">
              Rewards
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-eco-green transition-colors">
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button className="bg-eco-green hover:bg-eco-teal w-full">
                Sign In
              </Button>
              <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-pale-green w-full">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
