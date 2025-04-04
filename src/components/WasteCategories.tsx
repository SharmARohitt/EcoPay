
import React from "react";
import { Recycle, DollarSign } from "lucide-react";

const WasteCategories = () => {
  const categories = [
    {
      title: "Biodegradable Waste",
      description: "Food scraps, garden trimmings, and other organic matter that can be composted.",
      examples: ["Food scraps", "Garden waste", "Paper products", "Wood"],
      rate: "₹8-12 per kg",
      icon: "🍃"
    },
    {
      title: "Plastics",
      description: "Various types of plastic materials that can be recycled and repurposed.",
      examples: ["PET bottles", "HDPE containers", "Plastic bags", "Packaging"],
      rate: "₹15-25 per kg",
      icon: "♳"
    },
    {
      title: "Metals",
      description: "Recyclable metal items including aluminum, steel, copper, and more.",
      examples: ["Aluminum cans", "Steel containers", "Copper wires", "Metal parts"],
      rate: "₹40-100 per kg",
      icon: "🔧"
    },
    {
      title: "E-Waste",
      description: "Electronic devices and components containing valuable recoverable materials.",
      examples: ["Old phones", "Computers", "Batteries", "Cables"],
      rate: "₹50-200 per kg",
      icon: "💻"
    }
  ];

  return (
    <section className="py-16 bg-white" id="waste-categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Waste <span className="text-eco-green">Categories</span> & Rates
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Different types of waste have different values. See how much you can earn by recycling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:border-eco-green">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Recycle className="h-5 w-5 text-eco-green mr-2" />
                    Common Examples:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, i) => (
                      <span key={i} className="bg-eco-pale-green text-eco-green px-3 py-1 rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-eco-leaf-gold mr-2" />
                    <span className="font-semibold">Average Rate:</span>
                  </div>
                  <span className="text-eco-green font-bold">{category.rate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            * Rates may vary based on quality, location, and market conditions. 
            Our app provides real-time pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WasteCategories;
