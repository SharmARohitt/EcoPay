
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const SubscriptionPage = () => {
  const navigate = useNavigate();

  const handleSubscribe = (planType: string) => {
    toast.success(`${planType} subscription selected!`);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Choose Your <span className="text-eco-green">Subscription</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select a plan that works for you and start turning your waste into rewards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="border rounded-xl shadow-sm p-8 bg-white">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">Basic</h3>
              <div className="mt-4 text-eco-green">
                <span className="text-3xl font-bold">Free</span>
              </div>
              <p className="text-gray-500 mt-2">For occasional recyclers</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>2 free pickups per month</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Basic recycling categories</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Standard payouts</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Mobile app access</span>
              </li>
            </ul>

            <Button 
              onClick={() => handleSubscribe("Basic")}
              className="w-full bg-eco-green hover:bg-eco-teal"
            >
              Get Started
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="border-2 border-eco-green rounded-xl shadow-lg p-8 bg-white relative">
            <div className="absolute top-0 right-0 bg-eco-green text-white px-4 py-1 rounded-bl-lg rounded-tr-lg font-medium">
              Popular
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">Premium</h3>
              <div className="mt-4 text-eco-green">
                <span className="text-3xl font-bold">$9.99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-gray-500 mt-2">For regular recyclers</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Unlimited pickups</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>All recycling categories</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Premium rates (+15%)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Priority pickup times</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Monthly recycling reports</span>
              </li>
            </ul>

            <Button 
              onClick={() => handleSubscribe("Premium")}
              className="w-full bg-eco-green hover:bg-eco-teal"
            >
              Subscribe Now
            </Button>
          </div>

          {/* Business Plan */}
          <div className="border rounded-xl shadow-sm p-8 bg-white">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">Business</h3>
              <div className="mt-4 text-eco-green">
                <span className="text-3xl font-bold">$49.99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-gray-500 mt-2">For companies and organizations</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Daily scheduled pickups</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>All recycling categories</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Premium rates (+20%)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>ESG reporting and compliance</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-eco-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Carbon credit certificates</span>
              </li>
            </ul>

            <Button 
              onClick={() => handleSubscribe("Business")}
              className="w-full bg-eco-green hover:bg-eco-teal"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubscriptionPage;
