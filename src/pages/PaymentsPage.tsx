
import React from "react";
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
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const PaymentsPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    navigate("/");
  };

  // Mock transaction history data
  const transactions = [
    {
      id: "TX789012",
      date: "Apr 1, 2025",
      description: "Schedule Pickup - Mixed Recyclables",
      amount: "₹250",
      status: "Completed",
      weight: "7.2 kg",
      location: "Home Address"
    },
    {
      id: "TX789011",
      date: "Mar 25, 2025",
      description: "Schedule Pickup - Plastic Waste",
      amount: "₹180",
      status: "Completed",
      weight: "5.4 kg",
      location: "Home Address"
    },
    {
      id: "TX789010",
      date: "Mar 18, 2025",
      description: "Schedule Pickup - Electronic Waste",
      amount: "₹350",
      status: "Completed",
      weight: "3.2 kg",
      location: "Office Address"
    },
    {
      id: "TX789009",
      date: "Mar 10, 2025",
      description: "Schedule Pickup - Paper Waste",
      amount: "₹120",
      status: "Completed",
      weight: "4.8 kg",
      location: "Home Address"
    },
    {
      id: "TX789008",
      date: "Mar 2, 2025",
      description: "Premium Subscription - Monthly",
      amount: "₹499",
      status: "Completed",
      weight: "N/A",
      location: "N/A"
    }
  ];

  // Summary statistics
  const totalSpent = "₹1,399";
  const thisMonthSpent = "₹900";
  const pickupsCompleted = 4;
  const avgSpendPerPickup = "₹225";

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-eco-green text-white p-6">
        <div className="flex items-center gap-2 mb-8">
          <Recycle className="h-6 w-6" />
          <span className="font-bold text-xl">EcoPay</span>
        </div>
        
        <nav className="flex flex-col space-y-2 flex-1">
          <Link to="/dashboard" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10">
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
          <Link to="/payments" className="flex items-center gap-3 py-2 px-3 rounded-md bg-white/10">
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
          <h1 className="text-3xl font-bold mb-6">Payment History</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500 mb-2">Total Spent</h3>
              <p className="text-3xl font-bold">{totalSpent}</p>
              <div className="text-gray-500 text-sm mt-2">All time</div>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500 mb-2">This Month</h3>
              <p className="text-3xl font-bold">{thisMonthSpent}</p>
              <div className="text-gray-500 text-sm mt-2">Apr 2025</div>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500 mb-2">Pickups</h3>
              <p className="text-3xl font-bold">{pickupsCompleted}</p>
              <div className="text-gray-500 text-sm mt-2">Completed this month</div>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500 mb-2">Avg per Pickup</h3>
              <p className="text-3xl font-bold">{avgSpendPerPickup}</p>
              <div className="text-gray-500 text-sm mt-2">This month</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow mb-8">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">Transaction History</h2>
              <p className="text-gray-500">Your recent payment activity</p>
            </div>
            
            <div className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>ID</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.date}</TableCell>
                      <TableCell className="text-sm text-gray-500">{transaction.id}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.weight}</TableCell>
                      <TableCell>{transaction.location}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {transaction.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="p-4 border-t text-center">
              <Button variant="outline" className="text-eco-green border-eco-green hover:bg-eco-pale-green">
                Download Payment History
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
            <div className="flex items-start gap-3 border p-4 rounded-lg">
              <CreditCard className="h-5 w-5 text-eco-green mt-1" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">Credit Card ending in 4242</h3>
                  <span className="bg-eco-pale-green text-eco-green text-xs px-2 py-0.5 rounded">Default</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Expires 04/28</p>
              </div>
            </div>
            <div className="mt-4">
              <Button className="bg-eco-green hover:bg-eco-teal">
                Add Payment Method
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PaymentsPage;
