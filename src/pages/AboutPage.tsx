
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Rohit Sharma",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      bio: "Environmental engineer with 10+ years experience in waste management solutions."
    },
    {
      name: "Ubee Kapoor",
      role: "CTO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Blockchain expert and former tech lead at Google with a passion for sustainability."
    },
    {
      name: "Prachi Gupta",
      role: "COO",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Operations specialist with experience scaling green startups across South Asia."
    },
    {
      name: "Tulip",
      role: "Head of Partnerships",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      bio: "Former sustainability consultant connecting businesses with eco-friendly solutions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-eco-pale-green">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-eco-green">EcoPay</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our mission is to revolutionize waste management by making recycling 
                profitable for individuals and sustainable for our planet.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="mb-4 text-gray-700">
                  EcoPay was born from a simple observation: while waste is a massive environmental problem, 
                  it also contains valuable resources that are often overlooked.
                </p>
                <p className="mb-4 text-gray-700">
                  Founded in 2022 by a team of environmental engineers and tech innovators, 
                  we set out to create a platform that bridges the gap between waste generators (consumers and businesses) 
                  and those who can extract value from sorted waste materials.
                </p>
                <p className="mb-6 text-gray-700">
                  By leveraging technology like AI, IoT, and blockchain, we've created a transparent, 
                  efficient system that incentivizes proper waste segregation and recycling while 
                  providing fair compensation to participants.
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-eco-green hover:bg-eco-teal">
                    Our Vision
                  </Button>
                  <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-pale-green">
                    Join Our Team
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-eco-teal flex items-center justify-center">
                    <div className="text-6xl">🌿</div>
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-eco-green flex items-center justify-center">
                    <div className="text-6xl">♻️</div>
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-eco-green flex items-center justify-center">
                    <div className="text-6xl">💰</div>
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-eco-teal flex items-center justify-center">
                    <div className="text-6xl">🌎</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-eco-pale-green">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-4 text-center">🌱</div>
                <h3 className="text-xl font-bold mb-3 text-center">Environmental Impact</h3>
                <p className="text-gray-700 text-center">
                  Every decision we make is evaluated based on its environmental impact. 
                  We're committed to creating measurable positive change for our planet.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-4 text-center">⚖️</div>
                <h3 className="text-xl font-bold mb-3 text-center">Economic Fairness</h3>
                <p className="text-gray-700 text-center">
                  We believe in fair compensation for everyone in our ecosystem, 
                  from individuals recycling at home to our waste processing partners.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-4 text-center">🔍</div>
                <h3 className="text-xl font-bold mb-3 text-center">Transparency</h3>
                <p className="text-gray-700 text-center">
                  Through blockchain technology, we provide complete transparency 
                  in our waste management processes and financial transactions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The passionate minds behind EcoPay
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-eco-green font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-br from-eco-green to-eco-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Impact So Far</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">50K+</div>
                <p className="text-lg opacity-90">Active Users</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <p className="text-lg opacity-90">Tons Recycled</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">₹20L+</div>
                <p className="text-lg opacity-90">Paid to Users</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">12K+</div>
                <p className="text-lg opacity-90">Trees Saved</p>
              </div>
            </div>
            <div className="mt-12">
              <Button className="bg-white text-eco-green hover:bg-eco-pale-green hover:text-eco-green">
                View Our Sustainability Report
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
