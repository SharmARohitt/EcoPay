
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Recycle } from "lucide-react";

const RecyclingGuidePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-2">Recycling Guide</h1>
        <p className="text-gray-600 mb-6">Learn how to properly sort and prepare your waste for maximum environmental and economic benefit</p>
        
        <Tabs defaultValue="general" className="bg-white rounded-xl shadow">
          <div className="p-4 border-b">
            <TabsList className="grid grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="plastics">Plastics</TabsTrigger>
              <TabsTrigger value="paper">Paper</TabsTrigger>
              <TabsTrigger value="organics">Organics</TabsTrigger>
              <TabsTrigger value="ewaste">E-Waste</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="general" className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">General Recycling Guidelines</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-eco-green mb-2">The 3 R's Hierarchy</h3>
                    <p className="mb-2 text-gray-700">Always remember to follow the waste hierarchy in order of priority:</p>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                      <li><strong>Reduce</strong> - Minimize waste by avoiding single-use items and excessive packaging</li>
                      <li><strong>Reuse</strong> - Find new purposes for items before recycling them</li>
                      <li><strong>Recycle</strong> - Convert waste into new materials and products</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-eco-green mb-2">Clean Before Recycling</h3>
                    <p className="text-gray-700">Make sure all containers are empty and rinsed. Food residue can contaminate entire batches of recyclables.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-eco-green mb-2">Proper Sorting</h3>
                    <p className="text-gray-700">Sort your waste according to type. The EcoPay app will help you identify the correct category for each item.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-eco-green mb-2">What Not to Recycle</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Contaminated food packaging</li>
                      <li>Plastic bags (these require special recycling)</li>
                      <li>Ceramics or pyrex glass</li>
                      <li>Medical waste</li>
                      <li>Items made from multiple materials that cannot be separated</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-eco-pale-green rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Recycle className="h-6 w-6 text-eco-green" />
                  <h3 className="text-lg font-bold text-eco-green">EcoPay Benefits</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-1">Economic Value</h4>
                    <p className="text-sm text-gray-600">By properly sorting your waste, you maximize your earnings with EcoPay's premium rates for clean, sorted recyclables.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-1">Environmental Impact</h4>
                    <p className="text-sm text-gray-600">Correct recycling reduces landfill waste and greenhouse gas emissions while conserving natural resources.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-1">AI Assistance</h4>
                    <p className="text-sm text-gray-600">Use our app's AI scanning feature to identify recyclable materials and get sorting recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="plastics" className="p-6">
            <h2 className="text-2xl font-bold mb-4">Plastic Recycling Guide</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-50 p-4">
                  <h3 className="font-bold text-lg mb-1">Type 1: PET</h3>
                  <p className="text-sm text-gray-600">Polyethylene Terephthalate</p>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-3">Common in beverage bottles, food containers</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-20 text-xs font-medium text-gray-500">Preparation:</div>
                      <div className="text-sm">Empty, rinse, remove labels if possible</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-xs font-medium text-gray-500">Value:</div>
                      <div className="text-sm text-green-600 font-medium">High (₹15-20/kg)</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-xs font-medium text-gray-500">Examples:</div>
                      <div className="text-sm">Water bottles, soda bottles, cooking oil containers</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-50 p-4">
                  <h3 className="font-bold text-lg mb-1">Type 2: HDPE</h3>
                  <p className="text-sm text-gray-600">High-Density Polyethylene</p>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-3">Common in milk jugs, detergent bottles</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-20 text-xs font-medium text-gray-500">Preparation:</div>
                      <div className="text-sm">Empty, rinse, crush to save space</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-xs font-medium text-gray-500">Value:</div>
                      <div className="text-sm text-green-600 font-medium">Medium (₹12-18/kg)</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-xs font-medium text-gray-500">Examples:</div>
                      <div className="text-sm">Milk jugs, shampoo bottles, cleaning product containers</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-50 p-4">
                  <h3 className="font-bold text-lg mb-1">Type 5: PP</h3>
                  <p className="text-sm text-gray-600">Polypropylene</p>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-3">Common in yogurt containers, bottle caps</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-20 text-xs font-medium text-gray-500">Preparation:</div>
                      <div className="text-sm">Clean thoroughly, remove food residue</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-xs font-medium text-gray-500">Value:</div>
                      <div className="text-sm text-green-600 font-medium">Medium (₹10-15/kg)</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-xs font-medium text-gray-500">Examples:</div>
                      <div className="text-sm">Yogurt cups, medicine bottles, straws, bottle caps</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 lg:col-span-3 bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="font-bold mb-2 text-amber-800">Important Notes on Plastics</h3>
                <ul className="list-disc pl-5 space-y-2 text-amber-800">
                  <li>Not all plastics are recyclable. Types 3 (PVC), 6 (PS), and 7 (Other) may not be accepted.</li>
                  <li>Plastic bags should be recycled at special collection points, not in regular recycling.</li>
                  <li>Remove non-plastic components like metal springs in spray bottles.</li>
                  <li>Use our app's AI scanning feature to identify plastic types if you're unsure.</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="paper" className="p-6">
            <h2 className="text-2xl font-bold mb-4">Paper Recycling Guide</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-eco-green mb-3">Accepted Paper Items</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mt-0.5">✓</div>
                    <div>
                      <p className="font-medium">Newspapers & Magazines</p>
                      <p className="text-sm text-gray-600">Keep dry and flat. Remove plastic wrapping.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mt-0.5">✓</div>
                    <div>
                      <p className="font-medium">Office Paper</p>
                      <p className="text-sm text-gray-600">White and colored paper, printouts, letters.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mt-0.5">✓</div>
                    <div>
                      <p className="font-medium">Cardboard</p>
                      <p className="text-sm text-gray-600">Flatten boxes, remove tape and staples.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mt-0.5">✓</div>
                    <div>
                      <p className="font-medium">Paperboard</p>
                      <p className="text-sm text-gray-600">Cereal boxes, shoe boxes, paper towel rolls.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mt-0.5">✓</div>
                    <div>
                      <p className="font-medium">Books</p>
                      <p className="text-sm text-gray-600">Paperbacks can be recycled whole. Hardcovers need the cover removed.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-500 mb-3">Not Accepted Paper Items</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full p-1 mt-0.5">✗</div>
                    <div>
                      <p className="font-medium">Food-Contaminated Paper</p>
                      <p className="text-sm text-gray-600">Pizza boxes with grease, food-stained paper bags.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full p-1 mt-0.5">✗</div>
                    <div>
                      <p className="font-medium">Waxed or Laminated Paper</p>
                      <p className="text-sm text-gray-600">Waxed cardboard, glossy laminated paper.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full p-1 mt-0.5">✗</div>
                    <div>
                      <p className="font-medium">Thermal Paper</p>
                      <p className="text-sm text-gray-600">Receipts, fax paper, some types of tickets.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full p-1 mt-0.5">✗</div>
                    <div>
                      <p className="font-medium">Tissue Paper Products</p>
                      <p className="text-sm text-gray-600">Tissues, toilet paper, paper towels, napkins.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full p-1 mt-0.5">✗</div>
                    <div>
                      <p className="font-medium">Carbon Paper & NCR Paper</p>
                      <p className="text-sm text-gray-600">Multi-part forms, carbon copy paper.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="md:col-span-2 bg-eco-pale-green p-5 rounded-lg">
                <h3 className="font-bold text-eco-green mb-3">Preparation Tips for Maximum Value</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="bg-white p-3 rounded">
                    <p className="font-medium mb-1">Keep It Dry</p>
                    <p className="text-sm text-gray-600">Wet paper loses quality and value. Store in a dry place.</p>
                  </li>
                  <li className="bg-white p-3 rounded">
                    <p className="font-medium mb-1">Remove Non-Paper Items</p>
                    <p className="text-sm text-gray-600">Take out plastic windows, metal clips, and bindings.</p>
                  </li>
                  <li className="bg-white p-3 rounded">
                    <p className="font-medium mb-1">Bundle Similar Types</p>
                    <p className="text-sm text-gray-600">Sort by type for higher value: newsprint, cardboard, white paper.</p>
                  </li>
                  <li className="bg-white p-3 rounded">
                    <p className="font-medium mb-1">Flatten and Compact</p>
                    <p className="text-sm text-gray-600">Break down boxes, stack newspapers, tie with string if possible.</p>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="organics" className="p-6">
            <h2 className="text-2xl font-bold mb-4">Organic Waste Recycling Guide</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-eco-green mb-3">Composting Basics</h3>
                <p className="mb-4 text-gray-700">Organic waste can be converted into nutrient-rich compost that helps plants grow and reduces landfill waste.</p>
                
                <div className="bg-eco-pale-green p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">Why We Value Your Organic Waste</h4>
                  <p className="text-sm text-gray-700">Your organic waste is converted into biogas (energy) and compost (fertilizer) at specialized facilities. These products help reduce dependence on fossil fuels and chemical fertilizers.</p>
                </div>
                
                <h4 className="font-medium mb-2">Preparation Guidelines</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Keep food waste in a separate container with a lid to control odors</li>
                  <li>Drain excess liquids before collection</li>
                  <li>Remove any non-organic materials (plastic stickers, ties, etc.)</li>
                  <li>For garden waste, cut larger branches into smaller pieces</li>
                </ul>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-green-50 p-4">
                  <h3 className="font-bold text-lg">Accepted Organic Materials</h3>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="border rounded p-3">
                    <h4 className="font-medium mb-2">Food Waste</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Fruit and vegetable scraps</li>
                      <li>• Eggshells (crushed)</li>
                      <li>• Coffee grounds and filters</li>
                      <li>• Tea bags (remove staples)</li>
                      <li>• Bread and grains</li>
                      <li>• Spoiled food (no packaging)</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded p-3">
                    <h4 className="font-medium mb-2">Garden Waste</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Grass clippings</li>
                      <li>• Leaves and flowers</li>
                      <li>• Small branches and twigs</li>
                      <li>• Plant trimmings</li>
                      <li>• Houseplants (no pots)</li>
                      <li>• Weeds (without seeds)</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded p-3">
                    <h4 className="font-medium mb-2">Other Compostables</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Uncoated paper plates</li>
                      <li>• Paper napkins & towels</li>
                      <li>• Cardboard egg cartons</li>
                      <li>• Toothpicks & bamboo skewers</li>
                      <li>• Natural cork</li>
                      <li>• Certified compostable bags</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded p-3 border-red-200 bg-red-50">
                    <h4 className="font-medium mb-2 text-red-800">Not Accepted</h4>
                    <ul className="text-sm space-y-1 text-red-700">
                      <li>• Meat, fish, or dairy</li>
                      <li>• Oils and fats</li>
                      <li>• Pet waste</li>
                      <li>• Diseased plants</li>
                      <li>• Plastic bags (even biodegradable)</li>
                      <li>• Treated or painted wood</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-3">Value of Your Organic Waste</h3>
              <p className="text-amber-800 mb-4">EcoPay offers the following rates for clean, properly sorted organic waste:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded border border-amber-100">
                  <h4 className="font-medium mb-1">Food Waste</h4>
                  <p className="text-xl font-bold text-eco-green">₹3-5/kg</p>
                  <p className="text-xs text-gray-500 mt-1">Converted to biogas and liquid fertilizer</p>
                </div>
                
                <div className="bg-white p-3 rounded border border-amber-100">
                  <h4 className="font-medium mb-1">Garden Waste</h4>
                  <p className="text-xl font-bold text-eco-green">₹2-4/kg</p>
                  <p className="text-xs text-gray-500 mt-1">Processed into compost and mulch products</p>
                </div>
                
                <div className="bg-white p-3 rounded border border-amber-100">
                  <h4 className="font-medium mb-1">Premium Compostables</h4>
                  <p className="text-xl font-bold text-eco-green">₹5-7/kg</p>
                  <p className="text-xs text-gray-500 mt-1">Coffee grounds, specific plant varieties</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ewaste" className="p-6">
            <h2 className="text-2xl font-bold mb-4">E-Waste Recycling Guide</h2>
            
            <div className="bg-red-50 p-5 rounded-lg border border-red-100 mb-6">
              <h3 className="font-bold text-red-700 mb-2">Important Safety Information</h3>
              <p className="text-red-700 mb-3">E-waste contains valuable materials but also hazardous components. Proper handling is essential for both environmental protection and human safety.</p>
              <ul className="list-disc pl-5 space-y-1 text-red-700">
                <li>Never break open batteries, screens, or components containing mercury</li>
                <li>Store e-waste in a dry location away from children and pets</li>
                <li>Wipe personal data from devices before recycling (we offer secure data wiping services)</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-50 p-4">
                  <h3 className="font-bold text-lg mb-1">Small Electronics</h3>
                  <p className="text-sm text-gray-600">High-value recyclables</p>
                </div>
                <div className="p-4">
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• Mobile phones</li>
                    <li>• Tablets and e-readers</li>
                    <li>• Digital cameras</li>
                    <li>• MP3 players</li>
                    <li>• Gaming devices</li>
                    <li>• Portable speakers</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t">
                    <div className="flex items-center">
                      <div className="w-20 text-xs font-medium text-gray-500">Value:</div>
                      <div className="text-sm text-green-600 font-medium">Very High (₹100-500/kg)</div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="w-20 text-xs font-medium text-gray-500">Preparation:</div>
                      <div className="text-sm">Remove batteries if possible, wipe personal data</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-50 p-4">
                  <h3 className="font-bold text-lg mb-1">Computers & Components</h3>
                  <p className="text-sm text-gray-600">Medium to high value</p>
                </div>
                <div className="p-4">
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• Laptops and desktops</li>
                    <li>• Hard drives and storage</li>
                    <li>• Memory (RAM)</li>
                    <li>• Processors</li>
                    <li>• Keyboards and mice</li>
                    <li>• Circuit boards</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t">
                    <div className="flex items-center">
                      <div className="w-20 text-xs font-medium text-gray-500">Value:</div>
                      <div className="text-sm text-green-600 font-medium">High (₹70-250/kg)</div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="w-20 text-xs font-medium text-gray-500">Preparation:</div>
                      <div className="text-sm">Keep components intact, secure data deletion</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-50 p-4">
                  <h3 className="font-bold text-lg mb-1">Household Appliances</h3>
                  <p className="text-sm text-gray-600">Lower but still valuable</p>
                </div>
                <div className="p-4">
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• TVs and monitors</li>
                    <li>• Printers and scanners</li>
                    <li>• Microwaves</li>
                    <li>• Electric kettles</li>
                    <li>• Fans and heaters</li>
                    <li>• Audio equipment</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t">
                    <div className="flex items-center">
                      <div className="w-20 text-xs font-medium text-gray-500">Value:</div>
                      <div className="text-sm text-green-600 font-medium">Medium (₹30-80/kg)</div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="w-20 text-xs font-medium text-gray-500">Preparation:</div>
                      <div className="text-sm">Remove batteries, keep cords attached</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-eco-pale-green p-5 rounded-lg">
              <h3 className="font-bold text-eco-green mb-3">The E-Waste Recycling Process</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded">
                  <h4 className="font-medium mb-2">1. Collection</h4>
                  <p className="text-sm text-gray-600">EcoPay collects your e-waste and records its weight and type for payment calculation.</p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h4 className="font-medium mb-2">2. Sorting</h4>
                  <p className="text-sm text-gray-600">Items are categorized by type and potential for parts recovery or recycling.</p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h4 className="font-medium mb-2">3. Dismantling</h4>
                  <p className="text-sm text-gray-600">Devices are carefully taken apart to separate valuable materials and remove hazardous components.</p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h4 className="font-medium mb-2">4. Material Recovery</h4>
                  <p className="text-sm text-gray-600">Precious metals, plastics, and other materials are extracted and sent to specialized recyclers.</p>
                </div>
              </div>
              
              <div className="mt-4 bg-white p-4 rounded">
                <h4 className="font-medium mb-2">Environmental Impact</h4>
                <p className="text-sm text-gray-700">Recycling 1 kg of e-waste through EcoPay:</p>
                <ul className="text-sm list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Prevents up to 10 kg of CO₂ emissions</li>
                  <li>Recovers valuable metals like gold, silver, copper, and palladium</li>
                  <li>Keeps toxic materials like lead, mercury, and cadmium out of landfills</li>
                  <li>Reduces the need for environmentally destructive mining operations</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RecyclingGuidePage;
