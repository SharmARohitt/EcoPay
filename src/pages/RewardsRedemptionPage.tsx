import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Award, Coins, Gift, Ticket, Share } from "lucide-react";

const RewardsRedemptionPage = () => {
  const [points, setPoints] = useState(1250);

  const handleRedeem = (cost: number, item: string) => {
    if (points >= cost) {
      setPoints(points - cost);
      toast.success(`Successfully redeemed ${item}!`);
    } else {
      toast.error("Not enough points to redeem this reward.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-2">Rewards & Redemption</h1>
        <p className="text-gray-600 mb-6">Turn your recycling efforts into rewards!</p>
        
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold">Your EcoPoints</h2>
              <p className="text-gray-600">Earn points with every recycling pickup</p>
            </div>
            <div className="bg-eco-green text-white px-6 py-3 rounded-lg mt-4 md:mt-0">
              <span className="text-3xl font-bold">{points}</span>
              <span className="ml-2">points</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 bg-green-50">
              <div className="flex items-center mb-3">
                <Award className="h-5 w-5 text-eco-green mr-2" />
                <h3 className="font-bold">How to Earn</h3>
              </div>
              <ul className="text-sm space-y-2">
                <li>• 10 points per kg of recyclables</li>
                <li>• 5 points per kg of compostables</li>
                <li>• 50 points per kg of e-waste</li>
                <li>• 100 bonus points for monthly subscription</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4 bg-blue-50">
              <div className="flex items-center mb-3">
                <Coins className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-bold">Cash Conversion</h3>
              </div>
              <p className="text-sm mb-3">Convert your points to cash deposits directly to your bank account.</p>
              <p className="font-medium text-sm">1000 points = $10 USD</p>
            </div>
            
            <div className="border rounded-lg p-4 bg-amber-50">
              <div className="flex items-center mb-3">
                <Gift className="h-5 w-5 text-amber-600 mr-2" />
                <h3 className="font-bold">Partner Rewards</h3>
              </div>
              <p className="text-sm">Redeem points for gift cards and discounts with our eco-friendly partner brands.</p>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="cash" className="bg-white rounded-xl shadow">
          <div className="p-4 border-b">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="cash">Cash Out</TabsTrigger>
              <TabsTrigger value="discounts">Discounts</TabsTrigger>
              <TabsTrigger value="donations">Donations</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="cash" className="p-6">
            <h2 className="text-xl font-bold mb-4">Convert Points to Cash</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">$5 Cash</h3>
                  <span className="bg-eco-green text-white px-2 py-1 rounded text-sm">500 points</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Minimum cash out amount. Direct deposit to your linked bank account.</p>
                <Button 
                  onClick={() => handleRedeem(500, "$5 Cash")}
                  disabled={points < 500}
                  className="w-full bg-eco-green hover:bg-eco-teal"
                >
                  Redeem Now
                </Button>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">$10 Cash</h3>
                  <span className="bg-eco-green text-white px-2 py-1 rounded text-sm">1000 points</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Most popular option. Direct deposit to your linked bank account.</p>
                <Button 
                  onClick={() => handleRedeem(1000, "$10 Cash")}
                  disabled={points < 1000}
                  className="w-full bg-eco-green hover:bg-eco-teal"
                >
                  Redeem Now
                </Button>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">$20 Cash</h3>
                  <span className="bg-eco-green text-white px-2 py-1 rounded text-sm">1900 points</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Best value! Direct deposit to your linked bank account.</p>
                <Button 
                  onClick={() => handleRedeem(1900, "$20 Cash")}
                  disabled={points < 1900}
                  className="w-full bg-eco-green hover:bg-eco-teal"
                >
                  Redeem Now
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="discounts" className="p-6">
            <h2 className="text-xl font-bold mb-4">Discount Coupons</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">GreenEats</h3>
                  <span className="bg-eco-green text-white px-2 py-1 rounded text-sm">300 points</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">15% off your order at participating organic restaurants.</p>
                <Button 
                  onClick={() => handleRedeem(300, "GreenEats 15% Discount")}
                  disabled={points < 300}
                  className="w-full bg-eco-green hover:bg-eco-teal"
                >
                  Redeem Now
                </Button>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">EcoMarket</h3>
                  <span className="bg-eco-green text-white px-2 py-1 rounded text-sm">500 points</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">$10 off your purchase at sustainable product marketplaces.</p>
                <Button 
                  onClick={() => handleRedeem(500, "EcoMarket $10 Discount")}
                  disabled={points < 500}
                  className="w-full bg-eco-green hover:bg-eco-teal"
                >
                  Redeem Now
                </Button>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">PlantLife</h3>
                  <span className="bg-eco-green text-white px-2 py-1 rounded text-sm">400 points</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">20% off any plant or garden supply at PlantLife stores.</p>
                <Button 
                  onClick={() => handleRedeem(400, "PlantLife 20% Discount")}
                  disabled={points < 400}
                  className="w-full bg-eco-green hover:bg-eco-teal"
                >
                  Redeem Now
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="donations" className="p-6">
            <h2 className="text-xl font-bold mb-4">Donate to Environmental Causes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">Ocean Cleanup</h3>
                  <span className="bg-eco-green text-white px-2 py-1 rounded text-sm">250 points</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Donate to help remove plastic waste from oceans.</p>
                <Button 
                  onClick={() => handleRedeem(250, "Ocean Cleanup Donation")}
                  disabled={points < 250}
                  className="w-full bg-eco-green hover:bg-eco-teal"
                >
                  Donate Now
                </Button>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">Reforestation</h3>
                  <span className="bg-eco-green text-white px-2 py-1 rounded text-sm">200 points</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Plant a tree with our partner reforestation programs.</p>
                <Button 
                  onClick={() => handleRedeem(200, "Reforestation Donation")}
                  disabled={points < 200}
                  className="w-full bg-eco-green hover:bg-eco-teal"
                >
                  Donate Now
                </Button>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">Clean Energy</h3>
                  <span className="bg-eco-green text-white px-2 py-1 rounded text-sm">300 points</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Support renewable energy projects in developing regions.</p>
                <Button 
                  onClick={() => handleRedeem(300, "Clean Energy Donation")}
                  disabled={points < 300}
                  className="w-full bg-eco-green hover:bg-eco-teal"
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RewardsRedemptionPage;
