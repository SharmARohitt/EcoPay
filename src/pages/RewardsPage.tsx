
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const RewardsPage = () => {
  const rewardTiers = [
    {
      name: "Green Starter",
      points: "0-500",
      benefits: [
        "Cash payments for recyclables",
        "Basic recycling reports",
        "App features"
      ],
      icon: "🌱"
    },
    {
      name: "Eco Enthusiast",
      points: "501-2000",
      benefits: [
        "All Green Starter benefits",
        "5% bonus on recycling payments",
        "Monthly environmental impact report",
        "Exclusive educational content"
      ],
      icon: "🌿"
    },
    {
      name: "Sustainability Champion",
      points: "2001-5000",
      benefits: [
        "All Eco Enthusiast benefits",
        "10% bonus on recycling payments",
        "Priority pickup scheduling",
        "Quarterly sustainability certificate",
        "Partner discount vouchers"
      ],
      icon: "🌳"
    },
    {
      name: "Earth Guardian",
      points: "5001+",
      benefits: [
        "All Sustainability Champion benefits",
        "15% bonus on recycling payments",
        "Premium pickup slots",
        "Personalized sustainability advisor",
        "VIP access to eco-events",
        "Annual tree planting in your name"
      ],
      icon: "🌍"
    }
  ];

  const challenges = [
    {
      title: "Weekly Recycling Streak",
      points: "+50 points",
      description: "Schedule and complete a pickup every week for a month."
    },
    {
      title: "Diverse Recycler",
      points: "+100 points",
      description: "Recycle at least 4 different categories of waste in a single month."
    },
    {
      title: "Community Champion",
      points: "+200 points",
      description: "Refer 5 friends who complete their first recycling pickup."
    },
    {
      title: "E-Waste Hero",
      points: "+150 points",
      description: "Recycle over 5kg of electronic waste in a single pickup."
    },
    {
      title: "Plastic Purger",
      points: "+75 points",
      description: "Recycle over 10kg of plastic waste in a month."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-br from-eco-green to-eco-teal text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Rewards & Carbon Credits
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                At EcoPay, recycling isn't just good for the planet—it's good for your wallet too.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Our Rewards Work</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Earn points and climb reward tiers while helping the environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rewardTiers.map((tier, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-eco-green hover:shadow-md transition-all">
                  <div className="text-4xl mb-4 text-center">{tier.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-center">{tier.name}</h3>
                  <div className="bg-eco-pale-green text-eco-green text-center py-1 rounded-full mb-4">
                    {tier.points} points
                  </div>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-eco-green mr-2">✓</span>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-eco-pale-green">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Earning Points</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Multiple ways to earn points and boost your rewards tier
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-6 text-eco-green">Recycling Activities</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span>Each kg of biodegradable waste</span>
                    <span className="font-semibold">+2 points</span>
                  </li>
                  <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span>Each kg of plastic</span>
                    <span className="font-semibold">+5 points</span>
                  </li>
                  <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span>Each kg of metal</span>
                    <span className="font-semibold">+10 points</span>
                  </li>
                  <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span>Each kg of e-waste</span>
                    <span className="font-semibold">+15 points</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Each successful pickup</span>
                    <span className="font-semibold">+20 points</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-6 text-eco-green">Challenges & Bonuses</h3>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
                      <div>
                        <p className="font-medium">{challenge.title}</p>
                        <p className="text-sm text-gray-600">{challenge.description}</p>
                      </div>
                      <span className="font-semibold text-eco-green">{challenge.points}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-xl p-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-eco-green">Carbon Credits</h3>
                  <p className="mb-4">
                    In addition to points, your recycling activities generate carbon credits that:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-eco-green mr-2">✓</span>
                      <span>Contribute to verified carbon offset projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco-green mr-2">✓</span>
                      <span>Can be tracked through blockchain verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco-green mr-2">✓</span>
                      <span>Provide you with official carbon reduction certificates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco-green mr-2">✓</span>
                      <span>Can be redeemed for eco-friendly products and services</span>
                    </li>
                  </ul>
                  <Button className="bg-eco-green hover:bg-eco-teal">
                    Learn More About Carbon Credits
                  </Button>
                </div>
                <div className="bg-eco-pale-green rounded-xl p-6">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-4">🌳</div>
                    <h4 className="text-xl font-bold text-eco-green">Your Impact Visualized</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Average User Monthly Impact</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">CO₂ Reduction</span>
                        <span className="font-bold">24.5 kg</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Equivalent to</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold">🚗</p>
                          <p className="text-sm">62 km</p>
                          <p className="text-xs text-gray-500">not driven</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">💡</p>
                          <p className="text-sm">89 kWh</p>
                          <p className="text-xs text-gray-500">energy saved</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RewardsPage;
