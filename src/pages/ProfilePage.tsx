
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { User, MapPin, CreditCard, Calendar } from "lucide-react";

const ProfilePage = () => {
  // Mock user data - in a real app this would come from an API/auth context
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    address: {
      street: "123 Green Street",
      city: "New Delhi",
      state: "Delhi",
      zip: "110001",
      country: "India"
    },
    joinedDate: "January 15, 2025",
    recyclingStats: {
      totalRecycled: "102.4 kg",
      totalEarned: "₹5,120",
      co2Saved: "73.8 kg",
      pickupsCompleted: 14
    },
    paymentMethods: [
      {
        id: 1,
        type: "Credit Card",
        last4: "4242",
        expiryDate: "04/28",
        isDefault: true
      }
    ]
  });

  const handleSaveChanges = () => {
    toast.success("Profile updated successfully!");
  };

  const handleAddPaymentMethod = () => {
    toast.info("Payment method functionality would connect to a payment gateway API");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Summary Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow p-6 sticky top-24">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-eco-pale-green p-4 rounded-full mb-4">
                  <User className="h-12 w-12 text-eco-green" />
                </div>
                <h2 className="text-xl font-bold">{userData.name}</h2>
                <p className="text-gray-600 text-sm">{userData.email}</p>
                <p className="text-gray-500 text-xs mt-1">Member since {userData.joinedDate}</p>
              </div>
              
              <div className="space-y-4">
                <div className="border-t pt-4">
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Recycling Impact</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-xs text-gray-500">Total Recycled</p>
                      <p className="font-bold">{userData.recyclingStats.totalRecycled}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-xs text-gray-500">Total Earned</p>
                      <p className="font-bold">{userData.recyclingStats.totalEarned}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-xs text-gray-500">CO₂ Saved</p>
                      <p className="font-bold">{userData.recyclingStats.co2Saved}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-xs text-gray-500">Pickups</p>
                      <p className="font-bold">{userData.recyclingStats.pickupsCompleted}</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-eco-green text-eco-green hover:bg-eco-pale-green"
                  onClick={() => toast.info("Download functionality would be implemented here")}
                >
                  Download My Impact Report
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-red-500 text-red-500 hover:bg-red-50"
                  onClick={() => toast.info("Logout functionality would be implemented here")}
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Profile Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="personal" className="bg-white rounded-xl shadow">
              <div className="p-4 border-b">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="addresses">Addresses</TabsTrigger>
                  <TabsTrigger value="payment">Payment Methods</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="personal" className="p-6">
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value={userData.name}
                      onChange={(e) => setUserData({...userData, name: e.target.value})}
                      className="w-full p-2 border rounded-md focus:ring-eco-green focus:border-eco-green"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      value={userData.email}
                      onChange={(e) => setUserData({...userData, email: e.target.value})}
                      className="w-full p-2 border rounded-md focus:ring-eco-green focus:border-eco-green"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      value={userData.phone}
                      onChange={(e) => setUserData({...userData, phone: e.target.value})}
                      className="w-full p-2 border rounded-md focus:ring-eco-green focus:border-eco-green"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={handleSaveChanges}
                      className="bg-eco-green hover:bg-eco-teal"
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="addresses" className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">My Addresses</h2>
                  <Button 
                    variant="outline" 
                    className="border-eco-green text-eco-green hover:bg-eco-pale-green"
                    onClick={() => toast.info("Add address functionality would be implemented here")}
                  >
                    Add New Address
                  </Button>
                </div>
                
                <div className="border rounded-lg p-4 mb-4">
                  <div className="flex justify-between">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-eco-green mt-1" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">Home</h3>
                          <span className="bg-eco-pale-green text-eco-green text-xs px-2 py-0.5 rounded">Default</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{userData.address.street}</p>
                        <p className="text-gray-600 text-sm">{userData.address.city}, {userData.address.state} {userData.address.zip}</p>
                        <p className="text-gray-600 text-sm">{userData.address.country}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => toast.info("Edit functionality would be implemented here")}
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => toast.info("This is your only address")}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="payment" className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Payment Methods</h2>
                  <Button 
                    variant="outline" 
                    className="border-eco-green text-eco-green hover:bg-eco-pale-green"
                    onClick={handleAddPaymentMethod}
                  >
                    Add Payment Method
                  </Button>
                </div>
                
                {userData.paymentMethods.map(method => (
                  <div key={method.id} className="border rounded-lg p-4 mb-4">
                    <div className="flex justify-between">
                      <div className="flex items-start gap-3">
                        <CreditCard className="h-5 w-5 text-eco-green mt-1" />
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{method.type} ending in {method.last4}</h3>
                            {method.isDefault && (
                              <span className="bg-eco-pale-green text-eco-green text-xs px-2 py-0.5 rounded">Default</span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mt-1">Expires {method.expiryDate}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-gray-500 hover:text-gray-700"
                          onClick={() => toast.info("Edit functionality would be implemented here")}
                        >
                          Edit
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => toast.info("This is your only payment method")}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 border-t pt-4">
                  <h3 className="font-medium mb-2">Payment History</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 1, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Monthly Subscription</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹499</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 1, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Monthly Subscription</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹499</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feb 1, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Monthly Subscription</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹499</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
