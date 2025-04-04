
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import WasteCategories from "@/components/WasteCategories";
import { Button } from "@/components/ui/button";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-eco-pale-green">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How <span className="text-eco-green">EcoPay</span> Works
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our innovative platform makes recycling rewarding and convenient 
                while creating a positive impact on the environment.
              </p>
            </div>
          </div>
        </section>
        
        <HowItWorks />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">The Collection Process</h2>
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-eco-green text-white flex items-center justify-center font-bold text-lg mr-4">1</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Download & Register</h3>
                      <p className="text-gray-600">Download our app and create your account with basic details.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-eco-green text-white flex items-center justify-center font-bold text-lg mr-4">2</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Sort Your Waste</h3>
                      <p className="text-gray-600">Use our AI assistance to sort waste into biodegradable and non-biodegradable categories.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-eco-green text-white flex items-center justify-center font-bold text-lg mr-4">3</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Schedule a Pickup</h3>
                      <p className="text-gray-600">Choose a convenient time for our collection team to visit.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-eco-green text-white flex items-center justify-center font-bold text-lg mr-4">4</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Get Paid</h3>
                      <p className="text-gray-600">Our team will weigh your waste and transfer payment directly to your account.</p>
                    </div>
                  </li>
                </ol>
                <div className="mt-8">
                  <Button className="bg-eco-green hover:bg-eco-teal">
                    Download the App
                  </Button>
                </div>
              </div>
              <div className="bg-eco-pale-green p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-eco-green">Tracking & Transparency</h2>
                <p className="mb-6">
                  We use blockchain technology to track your waste from collection to processing, providing:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-eco-green text-white p-1 rounded mr-3 flex-shrink-0">✓</span>
                    <span>Complete transparency on where your waste goes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-eco-green text-white p-1 rounded mr-3 flex-shrink-0">✓</span>
                    <span>Real-time updates on processing status</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-eco-green text-white p-1 rounded mr-3 flex-shrink-0">✓</span>
                    <span>Detailed environmental impact reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-eco-green text-white p-1 rounded mr-3 flex-shrink-0">✓</span>
                    <span>Carbon credits earned through your recycling efforts</span>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-white rounded-lg border border-eco-green">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">🔐</span>
                    <div>
                      <h4 className="font-semibold">Secure & Immutable</h4>
                      <p className="text-sm text-gray-600">All transactions are securely recorded and cannot be altered.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <WasteCategories />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
