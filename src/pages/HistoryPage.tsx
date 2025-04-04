
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Package, Recycle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HistoryPage = () => {
  // Sample history data - in a real app this would come from an API
  const historyData = [
    {
      id: 1,
      date: "Apr 2, 2025",
      time: "9:30 AM",
      type: "Mixed Recyclables",
      weight: "7.2 kg",
      location: "Home Address",
      amount: "$8.64",
      status: "Completed"
    },
    {
      id: 2,
      date: "Mar 28, 2025",
      time: "2:15 PM",
      type: "Food Waste",
      weight: "5.1 kg",
      location: "Home Address",
      amount: "$3.57",
      status: "Completed"
    },
    {
      id: 3,
      date: "Mar 21, 2025", 
      time: "10:00 AM",
      type: "Electronics",
      weight: "2.3 kg",
      location: "Office Address",
      amount: "$11.50",
      status: "Completed"
    },
    {
      id: 4,
      date: "Mar 15, 2025",
      time: "4:45 PM",
      type: "Paper & Cardboard",
      weight: "3.8 kg",
      location: "Home Address",
      amount: "$4.56",
      status: "Completed"
    },
    {
      id: 5,
      date: "Mar 8, 2025",
      time: "11:30 AM",
      type: "Glass",
      weight: "1.9 kg",
      location: "Home Address",
      amount: "$2.85",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Collection History</h1>
        
        <Tabs defaultValue="all" className="bg-white rounded-xl shadow mb-8">
          <div className="p-4 border-b">
            <TabsList className="grid grid-cols-3 md:w-[400px]">
              <TabsTrigger value="all">All History</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="p-4">
            <div className="space-y-4">
              {historyData.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start gap-3">
                      <div className="bg-eco-pale-green p-2 rounded-full">
                        <Recycle className="h-6 w-6 text-eco-green" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.type}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{item.date} - {item.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Package className="h-4 w-4 mr-1" />
                          <span>{item.weight}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 md:mt-0 flex flex-col items-end">
                      <span className="text-green-600 font-medium">{item.amount}</span>
                      <span className="text-sm text-gray-500">{item.status}</span>
                      <Link 
                        to={`/pickup-details/${item.id}`} 
                        className="text-sm text-eco-green hover:underline mt-2"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pending" className="p-4">
            <div className="text-center py-8 text-gray-500">
              No pending pickups
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="p-4">
            <div className="space-y-4">
              {historyData.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start gap-3">
                      <div className="bg-eco-pale-green p-2 rounded-full">
                        <Recycle className="h-6 w-6 text-eco-green" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.type}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{item.date} - {item.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Package className="h-4 w-4 mr-1" />
                          <span>{item.weight}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 md:mt-0 flex flex-col items-end">
                      <span className="text-green-600 font-medium">{item.amount}</span>
                      <span className="text-sm text-gray-500">{item.status}</span>
                      <Link 
                        to={`/pickup-details/${item.id}`} 
                        className="text-sm text-eco-green hover:underline mt-2"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HistoryPage;
