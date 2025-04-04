
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BusinessPartners = () => {
  const navigate = useNavigate();
  
  const benefits = [
    "Regular waste collection services tailored to your business needs",
    "Corporate sustainability reports for ESG compliance",
    "Reduced waste management costs vs. traditional disposal",
    "Enhanced brand image as an environmentally responsible business",
    "Custom recycling solutions for specialized waste streams"
  ];

  const handleBusinessSubscription = () => {
    navigate("/signin");
  };

  const handleBecomePartner = () => {
    navigate("/become-partner");
  };

  return (
    <section className="py-16 bg-eco-pale-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            For <span className="text-eco-green">Businesses</span> & Partners
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join our network of eco-conscious businesses and waste processing partners
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-eco-green">For Businesses</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-eco-green mt-0.5 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button 
                  className="w-full bg-eco-green hover:bg-eco-teal"
                  onClick={handleBusinessSubscription}
                >
                  Business Subscription Plans
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-eco-green">Partner With Us</h3>
              <p className="mb-6">
                We're looking to partner with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-eco-green transition-colors">
                  <div className="text-3xl mb-2">🏭</div>
                  <h4 className="font-semibold">Recycling Plants</h4>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-eco-green transition-colors">
                  <div className="text-3xl mb-2">🌱</div>
                  <h4 className="font-semibold">Compost Facilities</h4>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-eco-green transition-colors">
                  <div className="text-3xl mb-2">⚡</div>
                  <h4 className="font-semibold">Biogas Producers</h4>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-eco-green transition-colors">
                  <div className="text-3xl mb-2">🔋</div>
                  <h4 className="font-semibold">E-Waste Processors</h4>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Join our network to receive high-quality sorted waste materials at competitive prices.
              </p>
              <Button 
                className="w-full bg-eco-green hover:bg-eco-teal"
                onClick={handleBecomePartner}
              >
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPartners;
