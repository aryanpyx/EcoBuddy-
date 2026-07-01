import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Leaf, Droplet, Zap, Recycle, TrendingUp, Lightbulb } from "lucide-react";

export function HomePage() {
  const ecoScore = 78;
  const carbonFootprint = 2.4;
  const targetFootprint = 4.5;

  const stats = [
    { icon: Leaf, label: "Trees Saved", value: "12", color: "text-green-600" },
    { icon: Droplet, label: "Water Saved (L)", value: "450", color: "text-blue-600" },
    { icon: Zap, label: "Energy Saved (kWh)", value: "85", color: "text-yellow-600" },
    { icon: Recycle, label: "Waste Recycled (kg)", value: "23", color: "text-teal-600" },
  ];

  const tips = [
    "Use reusable bags when shopping",
    "Turn off lights when leaving a room",
    "Take shorter showers to save water",
    "Bike or walk for short distances",
    "Compost your food waste",
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl"
      >
        <h1 className="text-3xl md:text-4xl mb-2">Welcome back! 🌱</h1>
        <p className="text-teal-50 mb-6">Keep up the great work on your sustainability journey</p>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg">Daily Eco Score</span>
            <span className="text-4xl font-bold">{ecoScore}</span>
          </div>
          <Progress value={ecoScore} className="h-3 bg-white/30" />
          <p className="text-sm text-teal-50 mt-2">Excellent! You're in the top 20%</p>
        </div>
      </motion.div>

      {/* Carbon Footprint Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="p-6 shadow-lg border-teal-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl flex items-center gap-2">
              <TrendingUp className="text-teal-600" />
              Carbon Footprint
            </h2>
            <span className="text-3xl font-bold text-teal-700">{carbonFootprint} <span className="text-base">tons CO₂</span></span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Your footprint</span>
              <span className="text-green-600 font-semibold">{carbonFootprint} tons</span>
            </div>
            <Progress value={(carbonFootprint / targetFootprint) * 100} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Target: {targetFootprint} tons</span>
              <span className="text-green-600">-46% below average!</span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-4 shadow-md hover:shadow-xl transition-shadow duration-300 border-teal-100">
                <Icon className={`w-8 h-8 mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-teal-700">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="p-6 shadow-lg border-teal-200">
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <Lightbulb className="text-yellow-500" />
            Daily Eco Tips
          </h2>
          <div className="space-y-3">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3 p-3 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                <p className="text-sm">{tip}</p>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
