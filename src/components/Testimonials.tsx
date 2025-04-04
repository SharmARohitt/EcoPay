
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      content: "I've made over ₹5,000 in just two months by recycling waste I used to throw away. The app makes it so easy to schedule pickups and track earnings.",
      author: "Priya Sharma",
      role: "Homeowner",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      content: "As a restaurant owner, we generate a lot of food waste. EcoPay has helped us turn that into a revenue stream while also reducing our environmental footprint.",
      author: "Rajesh Patel",
      role: "Restaurant Owner",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      content: "The blockchain transparency is what sold me. I can actually see where my recycled waste goes and the impact it has. Plus, the carbon credits are a nice bonus!",
      author: "Ananya Gupta",
      role: "Tech Professional",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-eco-green">Users</span> Say
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join thousands of satisfied users who are earning while saving the planet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-eco-green rounded-xl overflow-hidden shadow-lg">
          <div className="p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
            <div className="flex justify-center space-x-12 mb-6">
              <div>
                <p className="text-4xl font-bold">50,000+</p>
                <p className="text-sm opacity-90">Active Users</p>
              </div>
              <div>
                <p className="text-4xl font-bold">500+</p>
                <p className="text-sm opacity-90">Tons Recycled</p>
              </div>
              <div>
                <p className="text-4xl font-bold">₹20 Lakh+</p>
                <p className="text-sm opacity-90">Paid to Users</p>
              </div>
            </div>
            <p className="max-w-2xl mx-auto">
              Start turning your waste into wealth while contributing to a cleaner, greener planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
