import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Car, Zap, Utensils, Trash2, Plus, Check } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ActivityTracker() {
  const [activities, setActivities] = useState<any[]>([
    { id: 1, type: "transport", mode: "Bicycle", distance: 5, co2: 0, time: "Today 8:30 AM" },
    { id: 2, type: "energy", usage: 12, source: "Solar", co2: 0.5, time: "Today 10:00 AM" },
    { id: 3, type: "food", meal: "Vegetarian", portions: 2, co2: 1.2, time: "Today 12:30 PM" },
  ]);

  const handleAddActivity = (type: string) => {
    toast.success(`${type} activity logged successfully! 🌱`);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <h1 className="text-3xl mb-2">Activity Tracker 📊</h1>
        <p className="text-teal-50">Log your daily activities to track your environmental impact</p>
      </motion.div>

      <Tabs defaultValue="transport" className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full bg-white shadow-md">
          <TabsTrigger value="transport" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
            <Car className="w-4 h-4 mr-2" />
            Transport
          </TabsTrigger>
          <TabsTrigger value="energy" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
            <Zap className="w-4 h-4 mr-2" />
            Energy
          </TabsTrigger>
          <TabsTrigger value="food" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
            <Utensils className="w-4 h-4 mr-2" />
            Food
          </TabsTrigger>
          <TabsTrigger value="waste" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
            <Trash2 className="w-4 h-4 mr-2" />
            Waste
          </TabsTrigger>
        </TabsList>

        {/* Transport Tab */}
        <TabsContent value="transport">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 shadow-lg">
              <h3 className="mb-4">Log Transportation</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="transport-mode">Mode of Transport</Label>
                  <select className="w-full mt-2 p-2 border border-teal-300 rounded-lg bg-white">
                    <option>Car (Petrol)</option>
                    <option>Car (Electric)</option>
                    <option>Bus</option>
                    <option>Train</option>
                    <option>Bicycle</option>
                    <option>Walking</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="distance">Distance (km)</Label>
                  <Input id="distance" type="number" placeholder="0" className="mt-2" />
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
                  onClick={() => handleAddActivity("Transport")}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Log Activity
                </Button>
              </div>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Energy Tab */}
        <TabsContent value="energy">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 shadow-lg">
              <h3 className="mb-4">Log Energy Usage</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="energy-source">Energy Source</Label>
                  <select className="w-full mt-2 p-2 border border-teal-300 rounded-lg bg-white">
                    <option>Grid (Mixed)</option>
                    <option>Solar</option>
                    <option>Wind</option>
                    <option>Hydro</option>
                    <option>Coal</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="usage">Usage (kWh)</Label>
                  <Input id="usage" type="number" placeholder="0" className="mt-2" />
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
                  onClick={() => handleAddActivity("Energy")}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Log Activity
                </Button>
              </div>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Food Tab */}
        <TabsContent value="food">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 shadow-lg">
              <h3 className="mb-4">Log Food Consumption</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="meal-type">Meal Type</Label>
                  <select className="w-full mt-2 p-2 border border-teal-300 rounded-lg bg-white">
                    <option>Vegan</option>
                    <option>Vegetarian</option>
                    <option>Pescatarian</option>
                    <option>Chicken/Poultry</option>
                    <option>Beef/Lamb</option>
                    <option>Mixed</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="portions">Portions</Label>
                  <Input id="portions" type="number" placeholder="1" className="mt-2" />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="local" className="w-4 h-4" />
                  <Label htmlFor="local">Locally sourced</Label>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
                  onClick={() => handleAddActivity("Food")}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Log Activity
                </Button>
              </div>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Waste Tab */}
        <TabsContent value="waste">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 shadow-lg">
              <h3 className="mb-4">Log Waste Management</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="waste-type">Waste Type</Label>
                  <select className="w-full mt-2 p-2 border border-teal-300 rounded-lg bg-white">
                    <option>Recycling</option>
                    <option>Composting</option>
                    <option>General Waste</option>
                    <option>E-Waste</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input id="weight" type="number" placeholder="0" className="mt-2" />
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
                  onClick={() => handleAddActivity("Waste")}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Log Activity
                </Button>
              </div>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Recent Activities */}
      <Card className="p-6 shadow-lg">
        <h3 className="mb-4">Recent Activities</h3>
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">
                    {activity.type === "transport" && `${activity.mode} - ${activity.distance}km`}
                    {activity.type === "energy" && `${activity.source} - ${activity.usage}kWh`}
                    {activity.type === "food" && `${activity.meal} - ${activity.portions} portions`}
                  </p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-teal-700">{activity.co2} kg</p>
                <p className="text-xs text-muted-foreground">CO₂</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}
