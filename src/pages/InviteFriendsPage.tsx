
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link, Mail } from "lucide-react";

const InviteFriendsPage = () => {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState<string[]>([]);
  const [message, setMessage] = useState(
    "Hey! I've been using EcoPay to recycle my waste and earn money. It's a great way to help the environment while making some extra cash. Use my referral link to sign up and we'll both get bonus points!"
  );

  const handleAddEmail = () => {
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (emails.includes(email)) {
      toast.error("This email is already in your list");
      return;
    }

    setEmails([...emails, email]);
    setEmail("");
    toast.success("Email added to invitation list");
  };

  const handleRemoveEmail = (emailToRemove: string) => {
    setEmails(emails.filter(e => e !== emailToRemove));
  };

  const handleSendInvitations = () => {
    if (emails.length === 0) {
      toast.error("Please add at least one email address");
      return;
    }

    // In a real app, this would send the invitations via API
    toast.success(`Invitations sent to ${emails.length} friends!`);
    
    // Reset the form
    setEmails([]);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://ecopay.com/signup?ref=YOUR_REFERRAL_CODE")
      .then(() => {
        toast.success("Referral link copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy link. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-2">Invite Friends</h1>
        <p className="text-gray-600 mb-6">
          Share EcoPay with your friends and family and earn bonus points for each referral
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Send Email Invitations</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Friend's Email Address
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="friend@example.com"
                      className="flex-1 p-2 border rounded-md focus:ring-eco-green focus:border-eco-green"
                    />
                    <Button
                      onClick={handleAddEmail}
                      className="bg-eco-green hover:bg-eco-teal whitespace-nowrap"
                    >
                      Add Email
                    </Button>
                  </div>
                </div>
                
                {emails.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Invitation List ({emails.length})
                    </label>
                    <div className="border rounded-md p-2 bg-gray-50 max-h-32 overflow-y-auto">
                      {emails.map((e, i) => (
                        <div key={i} className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                          <span className="text-sm">{e}</span>
                          <button
                            onClick={() => handleRemoveEmail(e)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Personalized Message (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full p-2 border rounded-md focus:ring-eco-green focus:border-eco-green"
                  />
                </div>
                
                <Button
                  onClick={handleSendInvitations}
                  className="bg-eco-green hover:bg-eco-teal w-full"
                  disabled={emails.length === 0}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Invitations
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-bold mb-4">Share Your Referral Link</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Unique Referral Link
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value="https://ecopay.com/signup?ref=YOUR_REFERRAL_CODE"
                      readOnly
                      className="flex-1 p-2 border rounded-l-md bg-gray-50"
                    />
                    <Button
                      onClick={handleCopyLink}
                      className="rounded-l-none bg-eco-green hover:bg-eco-teal"
                    >
                      <Link className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </div>
                
                <div className="pt-2">
                  <p className="text-sm font-medium text-gray-700 mb-3">Share via:</p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      onClick={() => toast.info("Would share to Facebook")}
                    >
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-400 text-blue-400 hover:bg-blue-50"
                      onClick={() => toast.info("Would share to Twitter")}
                    >
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50"
                      onClick={() => toast.info("Would share to WhatsApp")}
                    >
                      WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-700 text-blue-700 hover:bg-blue-50"
                      onClick={() => toast.info("Would share to LinkedIn")}
                    >
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-eco-pale-green rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-eco-green mb-4">Referral Rewards</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold mb-2">For You</h3>
                  <p className="text-gray-700 mb-2">Earn for each friend who signs up and completes their first recycling pickup:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Bonus Points:</span>
                      <span className="font-bold">200 points</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Cash Bonus:</span>
                      <span className="font-bold">₹100</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold mb-2">For Your Friend</h3>
                  <p className="text-gray-700 mb-2">They'll get these benefits when they sign up with your link:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Welcome Bonus:</span>
                      <span className="font-bold">100 points</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">First Pickup Bonus:</span>
                      <span className="font-bold">+25% value</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Tier Rewards</h3>
                  <p className="text-gray-700 mb-2">Invite more friends to unlock bigger rewards:</p>
                  <ul className="space-y-3">
                    <li>
                      <div className="flex justify-between">
                        <span className="text-gray-600">5 Friends:</span>
                        <span className="font-bold">Premium status (1 month)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-eco-green h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">3/5 completed</div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <span className="text-gray-600">10 Friends:</span>
                        <span className="font-bold">Free pickup (2 months)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-eco-green h-2 rounded-full" style={{ width: "30%" }}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">3/10 completed</div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <span className="text-gray-600">25 Friends:</span>
                        <span className="font-bold">₹2500 bonus</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-eco-green h-2 rounded-full" style={{ width: "12%" }}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">3/25 completed</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteFriendsPage;
