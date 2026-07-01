import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingDown, Calendar, Award } from "lucide-react";

export function AnalyticsDashboard() {
  const [period, setPeriod] = useState("weekly");

  const weeklyData = [
    { day: "Mon", co2: 3.2, target: 4.5 },
    { day: "Tue", co2: 2.8, target: 4.5 },
    { day: "Wed", co2: 3.5, target: 4.5 },
    { day: "Thu", co2: 2.1, target: 4.5 },
    { day: "Fri", co2: 2.9, target: 4.5 },
    { day: "Sat", co2: 1.8, target: 4.5 },
    { day: "Sun", co2: 2.3, target: 4.5 },
  ];

  const monthlyData = [
    { week: "Week 1", co2: 18.5, target: 31.5 },
    { week: "Week 2", co2: 16.2, target: 31.5 },
    { week: "Week 3", co2: 19.8, target: 31.5 },
    { week: "Week 4", co2: 15.3, target: 31.5 },
  ];

  const categoryData = [
    { name: "Transport", value: 35, color: "#0d9488" },
    { name: "Energy", value: 28, color: "#14b8a6" },
    { name: "Food", value: 22, color: "#2dd4bf" },
    { name: "Waste", value: 15, color: "#5eead4" },
  ];

  const impactData = [
    { month: "Jan", saved: 12, baseline: 20 },
    { month: "Feb", saved: 15, baseline: 20 },
    { month: "Mar", saved: 18, baseline: 20 },
    { month: "Apr", saved: 22, baseline: 20 },
    { month: "May", saved: 25, baseline: 20 },
    { month: "Jun", saved: 28, baseline: 20 },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <h1 className="text-3xl mb-2">Analytics Dashboard 📈</h1>
        <p className="text-teal-50">Track your CO₂ reduction progress over time</p>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 shadow-lg border-teal-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total CO₂ Saved</p>
                <p className="text-3xl font-bold text-teal-700">128 kg</p>
              </div>
              <TrendingDown className="w-12 h-12 text-green-500" />
            </div>
            <p className="text-sm text-green-600 mt-2">↓ 42% from last month</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 shadow-lg border-teal-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Streak</p>
                <p className="text-3xl font-bold text-teal-700">23 days</p>
              </div>
              <Calendar className="w-12 h-12 text-yellow-500" />
            </div>
            <p className="text-sm text-teal-600 mt-2">Keep going! 🔥</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 shadow-lg border-teal-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Achievements</p>
                <p className="text-3xl font-bold text-teal-700">15</p>
              </div>
              <Award className="w-12 h-12 text-purple-500" />
            </div>
            <p className="text-sm text-teal-600 mt-2">5 more to next level</p>
          </Card>
        </motion.div>
      </div>

      {/* CO₂ Reduction Chart */}
      <Tabs defaultValue="weekly" className="space-y-4">
        <TabsList className="bg-white shadow-md">
          <TabsTrigger 
            value="weekly"
            className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
          >
            Weekly
          </TabsTrigger>
          <TabsTrigger 
            value="monthly"
            className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
          >
            Monthly
          </TabsTrigger>
        </TabsList>

        <TabsContent value="weekly">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-6 shadow-lg">
              <h3 className="mb-4">Weekly CO₂ Emissions</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccfbf1" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="co2" 
                    stroke="#0d9488" 
                    strokeWidth={3}
                    name="Your CO₂ (kg)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Average (kg)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="monthly">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-6 shadow-lg">
              <h3 className="mb-4">Monthly CO₂ Emissions</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccfbf1" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="co2" fill="#0d9488" name="Your CO₂ (kg)" />
                  <Bar dataKey="target" fill="#ef4444" name="Average (kg)" opacity={0.5} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Category Breakdown */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 shadow-lg">
            <h3 className="mb-4">Emissions by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Impact Over Time */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6 shadow-lg">
            <h3 className="mb-4">CO₂ Saved Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={impactData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccfbf1" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="saved" fill="#22c55e" name="CO₂ Saved (kg)" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
