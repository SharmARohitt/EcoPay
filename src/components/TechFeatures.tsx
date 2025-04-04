
import React from "react";
import { Button } from "@/components/ui/button";

const TechFeatures = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI Waste Recognition",
      description: "Our app uses advanced image recognition AI to help you identify and sort different types of waste correctly.",
    },
    {
      icon: "⛓️",
      title: "Blockchain Tracking",
      description: "Every transaction is securely recorded on blockchain, ensuring transparency in waste collection and processing.",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Track your recycling impact, earnings, and environmental contribution with detailed analytics.",
    },
    {
      icon: "🌱",
      title: "Carbon Credits",
      description: "Earn carbon credits for your recycling efforts that can be traded or used for discounts.",
    },
    {
      icon: "⚖️",
      title: "Smart Weighing",
      description: "IoT-enabled weighing ensures accurate measurement and fair compensation for your recyclables.",
    },
    {
      icon: "🎮",
      title: "Gamified Experience",
      description: "Complete recycling challenges, earn badges and compete with friends to make recycling fun.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-eco-green to-eco-teal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cutting-Edge Technology
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our platform leverages the latest technologies to make recycling smarter and more rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Experience the Future of Recycling?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-eco-green hover:bg-eco-pale-green hover:text-eco-green text-lg px-8 py-6">
              Download App
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFeatures;
