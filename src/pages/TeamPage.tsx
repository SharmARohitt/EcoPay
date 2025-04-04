
import React from "react";
import { Mail, Link } from "lucide-react";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Rohit Sharma",
      role: "Co-Founder & CEO",
      bio: "Rohit is a BTech student from Dr. Akhilesh Das Gupta Institute of Professional Studies with a passion for sustainability and technology. He leads the overall vision and strategy for EcoPay.",
      imgUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Tulip Kapoor",
      role: "Co-Founder & CTO",
      bio: "Tulip is a BTech student from Indira Gandhi Delhi Technical University for Women (IGDTUW) who specializes in AI and blockchain technologies. She oversees all technical development at EcoPay.",
      imgUrl: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Ubee Kapoor",
      role: "COO",
      bio: "Ubee is a BTech student from IGDTUW with expertise in operations and supply chain management. She ensures smooth day-to-day operations of the EcoPay platform.",
      imgUrl: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Prachi Singh",
      role: "Head of Sustainability",
      bio: "Prachi is a BTech student from IGDTUW specializing in environmental engineering. She leads EcoPay's sustainability initiatives and partnerships with recycling facilities.",
      imgUrl: "https://randomuser.me/api/portraits/women/17.jpg"
    }
  ];

  const advisors = [
    {
      name: "Dr. Anand Verma",
      role: "Environmental Science Advisor",
      organization: "Indian Institute of Environment",
      imgUrl: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Ritu Sharma",
      role: "Blockchain Technology Advisor",
      organization: "EcoTech Ventures",
      imgUrl: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      name: "Vikram Mehta",
      role: "Waste Management Expert",
      organization: "CleanFuture India",
      imgUrl: "https://randomuser.me/api/portraits/men/42.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're a team of BTech students passionate about creating a sustainable future through innovation, 
            technology, and community engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow overflow-hidden">
              <div className="h-60 overflow-hidden">
                <img 
                  src={member.imgUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-eco-green font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-2">
                  <a 
                    href="#" 
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4 text-gray-700" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label={`LinkedIn profile for ${member.name}`}
                  >
                    <Link className="h-4 w-4 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Story</h2>
          <div className="bg-white rounded-xl shadow p-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-4">
                EcoPay was founded in 2023 by four BTech students who shared a common vision: to revolutionize waste management
                in India by making recycling financially rewarding for everyone while creating a positive environmental impact.
              </p>
              <p className="text-gray-700 mb-4">
                The idea was born during a college hackathon where Rohit and Tulip first conceptualized a mobile app that would
                pay users for recycling. Soon after, Ubee and Prachi joined the team, bringing their expertise in operations
                and environmental science.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a college project quickly gained traction when the team won a national sustainability innovation
                contest, securing their first round of funding. Today, EcoPay operates in multiple cities across India and has
                processed hundreds of tons of recyclable waste, helping thousands of users earn money while contributing to
                a cleaner environment.
              </p>
              <p className="text-gray-700">
                Our mission remains clear: to create a world where waste is seen as a resource, not a problem, and where 
                everyone can participate in the circular economy regardless of their background or economic status.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-6 flex items-center">
                <img 
                  src={advisor.imgUrl} 
                  alt={advisor.name} 
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{advisor.name}</h3>
                  <p className="text-eco-green font-medium text-sm">{advisor.role}</p>
                  <p className="text-gray-600 text-sm">{advisor.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-eco-pale-green rounded-xl shadow p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We're always looking for passionate individuals to join our mission of creating a more sustainable future.
            Check out our current openings or send your resume for future opportunities.
          </p>
          <a 
            href="#" 
            className="inline-block bg-eco-green hover:bg-eco-teal text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
