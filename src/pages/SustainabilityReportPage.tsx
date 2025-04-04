
import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SustainabilityReportPage = () => {
  const currentYear = new Date().getFullYear();
  
  const handleDownloadReport = () => {
    toast.success("Downloading sustainability report...");
    // In a real app, this would trigger a file download
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-2">EcoPay Sustainability Report</h1>
        <p className="text-gray-600 mb-6">See the environmental impact we're making together</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
            <p className="text-gray-700 mb-4">
              At EcoPay, our mission is to revolutionize waste management by making recycling financially rewarding
              while maximizing environmental benefits. This report outlines our achievements, challenges, and future goals 
              as we work toward creating a circular economy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-eco-pale-green rounded-lg p-4 text-center">
                <h3 className="text-sm font-medium text-gray-600 mb-1">Total Waste Recycled</h3>
                <p className="text-3xl font-bold text-eco-green">487.3</p>
                <p className="text-sm text-gray-600">Metric Tons</p>
              </div>
              
              <div className="bg-eco-pale-green rounded-lg p-4 text-center">
                <h3 className="text-sm font-medium text-gray-600 mb-1">CO₂ Emissions Avoided</h3>
                <p className="text-3xl font-bold text-eco-green">156.2</p>
                <p className="text-sm text-gray-600">Metric Tons</p>
              </div>
              
              <div className="bg-eco-pale-green rounded-lg p-4 text-center">
                <h3 className="text-sm font-medium text-gray-600 mb-1">Customer Earnings</h3>
                <p className="text-3xl font-bold text-eco-green">₹38.5L</p>
                <p className="text-sm text-gray-600">Paid to Users</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3">Key Achievements</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              <li>Diverted over 487 metric tons of waste from landfills in the past year</li>
              <li>Expanded our operation to 12 cities across India</li>
              <li>Partnered with 35 recycling facilities to ensure proper waste processing</li>
              <li>Launched our AI-powered waste identification system, improving sorting accuracy by 42%</li>
              <li>Achieved a 98.3% customer satisfaction rating</li>
              <li>Reduced our own carbon footprint by 23% through operational improvements</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-3">Looking Ahead</h3>
            <p className="text-gray-700 mb-4">
              Our roadmap for {currentYear + 1} includes expanding to 8 more cities, improving our blockchain tracking system
              for complete waste-to-recycled-product transparency, and launching educational programs in schools to 
              promote responsible waste management from an early age.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <Button 
                onClick={handleDownloadReport}
                className="bg-eco-green hover:bg-eco-teal"
              >
                Download Full Report
              </Button>
              <Button 
                variant="outline" 
                className="border-eco-green text-eco-green hover:bg-eco-pale-green"
                onClick={() => toast.info("Sharing functionality would be implemented here")}
              >
                Share Report
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Waste Collection Breakdown</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">By Material Type</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Plastics</span>
                      <span className="font-medium">38%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "38%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Paper & Cardboard</span>
                      <span className="font-medium">27%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "27%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Organic Waste</span>
                      <span className="font-medium">22%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "22%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>E-Waste</span>
                      <span className="font-medium">8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "8%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Metals</span>
                      <span className="font-medium">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <h3 className="font-medium mb-2">Monthly Collection (in Tons)</h3>
                <div className="h-40 flex items-end space-x-2">
                  {[28, 32, 35, 42, 38, 45, 50, 47, 52, 56, 60, 65].map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-eco-green hover:bg-eco-teal transition-colors rounded-t"
                        style={{ height: `${value * 1.8}px` }}
                      ></div>
                      <span className="text-xs mt-1">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <h3 className="font-medium mb-3">Environmental Impact Metrics</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="text-sm">Trees Saved</span>
                      <span className="font-bold">8,240</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="text-sm">Water Saved</span>
                      <span className="font-bold">3.2M Liters</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="text-sm">Landfill Space Saved</span>
                      <span className="font-bold">1,850 m³</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="text-sm">Energy Saved</span>
                      <span className="font-bold">1.2M kWh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Our Sustainability Goals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-5">
              <h3 className="text-lg font-bold mb-3">Short-Term (1 Year)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="bg-eco-pale-green p-1 rounded-full mt-0.5">
                    <svg className="h-3 w-3 text-eco-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Increase total recycled waste by 50%</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-eco-pale-green p-1 rounded-full mt-0.5">
                    <svg className="h-3 w-3 text-eco-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Expand to 8 new cities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-eco-pale-green p-1 rounded-full mt-0.5">
                    <svg className="h-3 w-3 text-eco-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Implement blockchain tracking for 100% of collections</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-eco-pale-green p-1 rounded-full mt-0.5">
                    <svg className="h-3 w-3 text-eco-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Reduce our operational carbon footprint by 30%</span>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-5">
              <h3 className="text-lg font-bold mb-3">Medium-Term (3 Years)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="bg-amber-100 p-1 rounded-full mt-0.5">
                    <svg className="h-3 w-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Process 1 million tons of waste annually</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-amber-100 p-1 rounded-full mt-0.5">
                    <svg className="h-3 w-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Expand operations to 50 cities nationwide</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-amber-100 p-1 rounded-full mt-0.5">
                    <svg className="h-3 w-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Establish 10 of our own recycling processing centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-amber-100 p-1 rounded-full mt-0.5">
                    <svg className="h-3 w-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Launch EcoPay in 2 neighboring countries</span>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-5">
              <h3 className="text-lg font-bold mb-3">Long-Term (5+ Years)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                    <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Become carbon-negative through our operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                    <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Process 10 million tons of waste annually</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                    <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Operate in 10+ countries across Asia</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                    <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Create a closed-loop system for 80% of collected materials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityReportPage;
