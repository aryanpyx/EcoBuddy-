import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Trophy, Medal, Award, Star, Crown } from "lucide-react";

export function CommunityPage() {
  const leaderboard = [
    { rank: 1, name: "Sarah Green", score: 2450, avatar: "🌟", co2Saved: 185, badges: 28 },
    { rank: 2, name: "Mike Eco", score: 2280, avatar: "🌱", co2Saved: 167, badges: 25 },
    { rank: 3, name: "Emma Plant", score: 2150, avatar: "🌿", co2Saved: 158, badges: 23 },
    { rank: 4, name: "John Forest", score: 1980, avatar: "🌳", co2Saved: 142, badges: 21 },
    { rank: 5, name: "Lisa Ocean", score: 1850, avatar: "🌊", co2Saved: 135, badges: 19 },
    { rank: 6, name: "You", score: 1720, avatar: "👤", co2Saved: 128, badges: 15, isUser: true },
    { rank: 7, name: "Tom Breeze", score: 1650, avatar: "💨", co2Saved: 121, badges: 17 },
    { rank: 8, name: "Kate Sun", score: 1520, avatar: "☀️", co2Saved: 115, badges: 14 },
  ];

  const achievements = [
    { name: "First Steps", icon: "🚶", description: "Log your first activity", unlocked: true },
    { name: "Week Warrior", icon: "📅", description: "7-day streak", unlocked: true },
    { name: "Carbon Crusher", icon: "💪", description: "Save 100kg CO₂", unlocked: true },
    { name: "Eco Champion", icon: "🏆", description: "Reach top 10", unlocked: true },
    { name: "Green Guardian", icon: "🌍", description: "30-day streak", unlocked: false },
    { name: "Planet Protector", icon: "🛡️", description: "Save 500kg CO₂", unlocked: false },
  ];

  const badges = [
    { name: "Bike Master", icon: "🚲", level: 3, color: "bg-blue-500" },
    { name: "Solar Powered", icon: "☀️", level: 2, color: "bg-yellow-500" },
    { name: "Vegan Hero", icon: "🥗", level: 4, color: "bg-green-500" },
    { name: "Recycle King", icon: "♻️", level: 2, color: "bg-emerald-500" },
    { name: "Water Saver", icon: "💧", level: 3, color: "bg-cyan-500" },
    { name: "Zero Waste", icon: "🗑️", level: 1, color: "bg-teal-500" },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <h1 className="text-3xl mb-2">Community 🌍</h1>
        <p className="text-teal-50">Join forces with eco-warriors around the world</p>
      </motion.div>

      {/* Leaderboard */}
      <Card className="p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl flex items-center gap-2">
            <Trophy className="text-yellow-500" />
            Global Leaderboard
          </h2>
          <Badge className="bg-teal-500">Weekly</Badge>
        </div>

        <div className="space-y-3">
          {leaderboard.map((user, index) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                user.isUser
                  ? "bg-gradient-to-r from-teal-100 to-emerald-100 border-2 border-teal-500 shadow-md"
                  : "bg-gradient-to-r from-gray-50 to-teal-50 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  {user.rank === 1 && (
                    <Crown className="absolute -top-3 -left-2 w-6 h-6 text-yellow-500" />
                  )}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                    user.rank === 1 ? "bg-yellow-500" :
                    user.rank === 2 ? "bg-gray-400" :
                    user.rank === 3 ? "bg-orange-600" :
                    "bg-teal-500"
                  } text-white font-bold`}>
                    {user.rank <= 3 ? user.rank : user.avatar}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">{user.name}</p>
                    {user.isUser && <Badge className="bg-teal-600 text-xs">You</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {user.co2Saved}kg CO₂ saved • {user.badges} badges
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-teal-700">{user.score}</p>
                <p className="text-xs text-muted-foreground">points</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6 shadow-lg">
        <h2 className="text-xl mb-4 flex items-center gap-2">
          <Award className="text-purple-500" />
          Achievements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`p-4 rounded-lg text-center transition-all duration-300 ${
                achievement.unlocked
                  ? "bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-lg hover:shadow-xl"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <h4 className={achievement.unlocked ? "text-white" : ""}>{achievement.name}</h4>
              <p className={`text-xs mt-1 ${achievement.unlocked ? "text-teal-50" : "text-gray-500"}`}>
                {achievement.description}
              </p>
              {achievement.unlocked && (
                <Badge className="mt-2 bg-white text-teal-700">Unlocked</Badge>
              )}
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Badges Collection */}
      <Card className="p-6 shadow-lg">
        <h2 className="text-xl mb-4 flex items-center gap-2">
          <Star className="text-yellow-500" />
          Your Badges
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`${badge.color} p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <div className="text-4xl mb-2">{badge.icon}</div>
                <p className="text-xs text-white font-bold">{badge.name}</p>
                <Badge className="mt-2 bg-white/20 text-white text-xs">
                  Level {badge.level}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Community Stats */}
      <Card className="p-6 shadow-lg bg-gradient-to-r from-teal-50 to-emerald-50">
        <h2 className="text-xl mb-4">Global Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-teal-700">12.5K</p>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-teal-700">2.8M kg</p>
            <p className="text-sm text-muted-foreground">CO₂ Saved</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-teal-700">45K</p>
            <p className="text-sm text-muted-foreground">Trees Planted</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-teal-700">128</p>
            <p className="text-sm text-muted-foreground">Countries</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
