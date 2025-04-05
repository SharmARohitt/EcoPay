import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon, Clock, ArrowLeft, Recycle, MapPin } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import SimpleMap from "@/components/SimpleMap";

const formSchema = z.object({
  address: z.string().min(5, { message: "Please enter your address" }),
  wasteType: z.string({
    required_error: "Please select a waste type",
  }),
  estimatedWeight: z.string().min(1, { message: "Please enter estimated weight" }),
  date: z.date({
    required_error: "Please select a date",
  }),
  timeSlot: z.string({
    required_error: "Please select a time slot",
  }),
  additionalNotes: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SchedulePickupPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [mapCoordinates, setMapCoordinates] = useState({
    latitude: 28.6139, // Default to Delhi
    longitude: 77.2090,
  });
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      wasteType: "",
      estimatedWeight: "",
      date: undefined,
      timeSlot: "",
      additionalNotes: "",
      latitude: 28.6139,
      longitude: 77.2090,
    },
  });

  const handleLocationSelect = (lat: number, lng: number, address?: string) => {
    setMapCoordinates({
      latitude: lat,
      longitude: lng,
    });
    
    form.setValue("latitude", lat);
    form.setValue("longitude", lng);
    
    // If address is provided from reverse geocoding, update the address field
    if (address) {
      form.setValue("address", address);
    }
    
    console.log(`Location selected: ${lat}, ${lng}, ${address || 'No address'}`);
  };

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    
    try {
      // Add coordinates to the values
      const completeValues = {
        ...values,
        latitude: mapCoordinates.latitude,
        longitude: mapCoordinates.longitude
      };
      
      // This would connect to a backend service in a real app
      console.log("Form values:", completeValues);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Pickup scheduled successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Failed to schedule pickup. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar with back button for smaller screens */}
      <div className="w-16 bg-eco-green text-white p-4 flex flex-col items-center">
        <button 
          onClick={() => navigate("/dashboard")}
          className="mb-6 hover:bg-white/10 p-2 rounded-full"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <Recycle className="h-6 w-6 mb-6" />
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Schedule Pickup</h1>
          <p className="text-gray-600 mb-8">Fill out the form below to schedule your waste pickup</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map - Now displayed first on mobile for better UX */}
            <div className="order-1 lg:order-2 h-[500px] rounded-xl overflow-hidden shadow-md border">
              <SimpleMap 
                latitude={mapCoordinates.latitude}
                longitude={mapCoordinates.longitude}
                onLocationSelect={handleLocationSelect}
                height="100%"
              />
            </div>
            
            {/* Form */}
            <div className="order-2 lg:order-1">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Address field with location button */}
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pickup Address</FormLabel>
                        <div className="flex items-center">
                          <FormControl>
                            <Input placeholder="Your full address" {...field} />
                          </FormControl>
                          <Button 
                            type="button" 
                            variant="outline" 
                            className="ml-2 flex-shrink-0"
                            onClick={() => {
                              // Display a message about using the map
                              toast.info("Please use the map to select your exact location");
                            }}
                          >
                            <MapPin className="h-4 w-4" />
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* We'll display the coordinates in a small text below the address */}
                  {(form.watch("latitude") && form.watch("longitude")) && (
                    <div className="text-xs text-gray-500 -mt-4">
                      Location coordinates: {form.watch("latitude")?.toFixed(4)}, {form.watch("longitude")?.toFixed(4)}
                    </div>
                  )}
                  
                  {/* Rest of the form fields */}
                  <FormField
                    control={form.control}
                    name="wasteType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Waste Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select waste type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mixed_recyclables">Mixed Recyclables</SelectItem>
                            <SelectItem value="organic_waste">Organic Waste</SelectItem>
                            <SelectItem value="paper_cardboard">Paper & Cardboard</SelectItem>
                            <SelectItem value="plastic">Plastic</SelectItem>
                            <SelectItem value="glass">Glass</SelectItem>
                            <SelectItem value="metal">Metal</SelectItem>
                            <SelectItem value="electronic">Electronic Waste</SelectItem>
                            <SelectItem value="hazardous">Hazardous Waste</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="estimatedWeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated Weight (kg)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g. 5" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Pickup Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="timeSlot"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Time Slot</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select time">
                                  {field.value ? (
                                    <div className="flex items-center">
                                      <Clock className="mr-2 h-4 w-4" />
                                      <span>{field.value}</span>
                                    </div>
                                  ) : (
                                    <span>Select time</span>
                                  )}
                                </SelectValue>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="08:00 - 10:00">08:00 - 10:00</SelectItem>
                              <SelectItem value="10:00 - 12:00">10:00 - 12:00</SelectItem>
                              <SelectItem value="12:00 - 14:00">12:00 - 14:00</SelectItem>
                              <SelectItem value="14:00 - 16:00">14:00 - 16:00</SelectItem>
                              <SelectItem value="16:00 - 18:00">16:00 - 18:00</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any special instructions for the pickup team" 
                            {...field} 
                            className="resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="bg-gray-50 rounded-lg p-4 border">
                    <div className="flex justify-between mb-2">
                      <span>Base pickup fee</span>
                      <span>$5.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Extra weight fee</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>Total</span>
                      <span>$5.00</span>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-eco-green hover:bg-eco-teal py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Schedule and Pay $5.00"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePickupPage;
