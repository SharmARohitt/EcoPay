
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  CreditCard, 
  Recycle, 
  Package, 
  History, 
  Award, 
  MapPin, 
  User, 
  LogOut 
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const handleSchedulePickup = () => {
    navigate("/schedule-pickup");
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-eco-green text-white p-6">
        <div className="flex items-center gap-2 mb-8">
          <Recycle className="h-6 w-6" />
          <span className="font-bold text-xl">EcoPay</span>
        </div>
        
        <nav className="flex flex-col space-y-2 flex-1">
          <Link to="/dashboard" className="flex items-center gap-3 py-2 px-3 rounded-md bg-white/10">
            <Package className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link to="/schedule-pickup" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10">
            <Calendar className="h-5 w-5" />
            <span>Schedule Pickup</span>
          </Link>
          <Link to="/history" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10">
            <History className="h-5 w-5" />
            <span>History</span>
          </Link>
          <Link to="/rewards" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10">
            <Award className="h-5 w-5" />
            <span>Rewards</span>
          </Link>
          <Link to="/payments" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10">
            <CreditCard className="h-5 w-5" />
            <span>Payments</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10">
            <User className="h-5 w-5" />
            <span>Profile</span>
          </Link>
        </nav>
        
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10 mt-auto"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <header className="md:hidden bg-eco-green text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Recycle className="h-6 w-6" />
            <span className="font-bold text-xl">EcoPay</span>
          </div>
          {/* Mobile menu button would go here */}
        </header>
        
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Welcome, John Doe</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500 mb-2">Total Earnings</h3>
              <p className="text-3xl font-bold">$124.50</p>
              <div className="text-eco-green text-sm mt-2">+$12.75 this month</div>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500 mb-2">Waste Recycled</h3>
              <p className="text-3xl font-bold">87.3 kg</p>
              <div className="text-eco-green text-sm mt-2">Saved 35kg CO₂ emissions</div>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500 mb-2">Next Pickup</h3>
              <p className="text-xl font-medium">Apr 8, 2025 - 10:00 AM</p>
              <Button 
                variant="outline" 
                size="sm"
                className="mt-2 text-eco-green border-eco-green hover:bg-eco-pale-green"
                onClick={handleSchedulePickup}
              >
                Reschedule
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow mb-8">
            <Tabs defaultValue="recent">
              <div className="p-4 border-b">
                <TabsList className="grid grid-cols-2 md:w-[400px]">
                  <TabsTrigger value="recent">Recent Activity</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming Pickups</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="recent" className="p-4">
                <div className="space-y-4">
                  <div className="flex items-start justify-between p-3 border-b">
                    <div>
                      <p className="font-medium">Mixed Recyclables</p>
                      <p className="text-sm text-gray-500">Mar 28, 2025 - 7.2 kg</p>
                    </div>
                    <span className="text-green-600 font-medium">+$8.64</span>
                  </div>
                  <div className="flex items-start justify-between p-3 border-b">
                    <div>
                      <p className="font-medium">Food Waste</p>
                      <p className="text-sm text-gray-500">Mar 21, 2025 - 5.1 kg</p>
                    </div>
                    <span className="text-green-600 font-medium">+$3.57</span>
                  </div>
                  <div className="flex items-start justify-between p-3 border-b">
                    <div>
                      <p className="font-medium">Electronics</p>
                      <p className="text-sm text-gray-500">Mar 15, 2025 - 2.3 kg</p>
                    </div>
                    <span className="text-green-600 font-medium">+$11.50</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="upcoming" className="p-4">
                <div className="space-y-4">
                  <div className="flex items-start p-3 border-b">
                    <div className="flex-1">
                      <p className="font-medium">Regular Pickup</p>
                      <p className="text-sm text-gray-500">Apr 8, 2025 - 10:00 AM</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Home address</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-eco-green border-eco-green hover:bg-eco-pale-green"
                    >
                      Edit
                    </Button>
                  </div>
                  <div className="flex items-start p-3 border-b">
                    <div className="flex-1">
                      <p className="font-medium">Regular Pickup</p>
                      <p className="text-sm text-gray-500">Apr 15, 2025 - 10:00 AM</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Home address</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-eco-green border-eco-green hover:bg-eco-pale-green"
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button 
                onClick={handleSchedulePickup}
                className="bg-eco-green hover:bg-eco-teal py-6"
              >
                Schedule Pickup
              </Button>
              <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-pale-green py-6">
                View Recycling Guide
              </Button>
              <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-pale-green py-6">
                Redeem Rewards
              </Button>
              <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-pale-green py-6">
                Invite Friends
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
