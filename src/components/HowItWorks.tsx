
import React from "react";
import { Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Register & Sort",
      description: "Sign up and sort your waste into biodegradable and non-biodegradable categories.",
      icon: "📱"
    },
    {
      title: "Schedule Pickup",
      description: "Request a waste collection through our app at your convenience.",
      icon: "📅"
    },
    {
      title: "Smart Weighing",
      description: "Our collectors weigh your waste using IoT-based smart scales.",
      icon: "⚖️"
    },
    {
      title: "Get Paid Instantly",
      description: "Receive immediate payment based on waste type and quantity.",
      icon: "💰"
    }
  ];

  return (
    <section className="py-16 bg-eco-pale-green" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-eco-green">Works</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our simple four-step process makes recycling rewarding and convenient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-eco-green text-white h-10 w-10 rounded-full flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <div className="text-4xl mb-4 mt-4 text-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-6">Why Choose EcoPay?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-eco-green mt-0.5 mr-2 flex-shrink-0" />
                    <span>AI Sorting Assistance – Upload photos, and our AI auto-detects & categorizes waste</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-eco-green mt-0.5 mr-2 flex-shrink-0" />
                    <span>Instant Payouts at Market Rates – Get the best value for your recyclables</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-eco-green mt-0.5 mr-2 flex-shrink-0" />
                    <span>Blockchain Transparency – Track where your waste goes and its impact</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-eco-green mt-0.5 mr-2 flex-shrink-0" />
                    <span>IoT Smart Weighing System – Ensures accurate payouts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-eco-green mt-0.5 mr-2 flex-shrink-0" />
                    <span>Carbon Credit Rewards – Earn points for sustainable actions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-eco-green to-eco-teal text-white p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-6">Environmental Impact</h3>
                <p className="mb-6">
                  Every kilogram of waste properly recycled through our platform:
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2.5kg</div>
                    <p className="text-sm">CO₂ Emissions Reduced</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">4L</div>
                    <p className="text-sm">Water Saved</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1.8 kWh</div>
                    <p className="text-sm">Energy Conserved</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">0.5m²</div>
                    <p className="text-sm">Landfill Space Saved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
