import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { User, Mail, MapPin, Calendar, Target, TrendingUp, Award, Edit, Save } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex.johnson@email.com");
  const [location, setLocation] = useState("San Francisco, CA");

  const userStats = {
    level: 12,
    currentXP: 3420,
    nextLevelXP: 5000,
    totalCO2Saved: 128,
    activeDays: 87,
    currentStreak: 23,
    longestStreak: 45,
    achievements: 15,
    badges: 12,
    challengesCompleted: 28,
  };

  const goals = [
    { id: 1, title: "Reduce CO₂ by 200kg", progress: 64, target: 200, current: 128, icon: "🎯" },
    { id: 2, title: "30-Day Streak", progress: 77, target: 30, current: 23, icon: "🔥" },
    { id: 3, title: "Complete 50 Challenges", progress: 56, target: 50, current: 28, icon: "🏆" },
    { id: 4, title: "Reach Level 15", progress: 80, target: 15, current: 12, icon: "⭐" },
  ];

  const recentAchievements = [
    { name: "Week Warrior", date: "2 days ago", icon: "📅" },
    { name: "Carbon Crusher", date: "5 days ago", icon: "💪" },
    { name: "Eco Champion", date: "1 week ago", icon: "🏆" },
    { name: "Green Guardian", date: "2 weeks ago", icon: "🌍" },
  ];

  const impactSummary = [
    { label: "Trees Equivalent", value: "12", icon: "🌳" },
    { label: "Water Saved (L)", value: "450", icon: "💧" },
    { label: "Energy Saved (kWh)", value: "85", icon: "⚡" },
    { label: "Waste Recycled (kg)", value: "23", icon: "♻️" },
  ];

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profile updated successfully! ✅");
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <h1 className="text-3xl mb-2">Profile 👤</h1>
        <p className="text-teal-50">Manage your account and track your impact</p>
      </motion.div>

      {/* User Profile Card */}
      <Card className="p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                👤
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
                {userStats.level}
              </div>
            </div>
            <div>
              {isEditing ? (
                <div className="space-y-2">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="font-bold"
                  />
                </div>
              ) : (
                <h2 className="text-2xl">{name}</h2>
              )}
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-teal-500">Level {userStats.level}</Badge>
                <Badge className="bg-purple-500">{userStats.achievements} Achievements</Badge>
              </div>
            </div>
          </div>
          <Button
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
          >
            {isEditing ? (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save
              </>
            ) : (
              <>
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </>
            )}
          </Button>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-teal-600" />
            {isEditing ? (
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            ) : (
              <span>{email}</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-teal-600" />
            {isEditing ? (
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            ) : (
              <span>{location}</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-teal-600" />
            <span>Member since January 2025</span>
          </div>
        </div>

        {/* Level Progress */}
        <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Progress to Level {userStats.level + 1}</span>
            <span className="text-sm text-muted-foreground">
              {userStats.currentXP} / {userStats.nextLevelXP} XP
            </span>
          </div>
          <Progress value={(userStats.currentXP / userStats.nextLevelXP) * 100} className="h-3" />
        </div>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-4 shadow-md text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold text-teal-700">{userStats.totalCO2Saved}kg</p>
            <p className="text-sm text-muted-foreground">CO₂ Saved</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-4 shadow-md text-center">
            <span className="text-4xl block mb-2">🔥</span>
            <p className="text-2xl font-bold text-teal-700">{userStats.currentStreak}</p>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-4 shadow-md text-center">
            <Award className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
            <p className="text-2xl font-bold text-teal-700">{userStats.challengesCompleted}</p>
            <p className="text-sm text-muted-foreground">Challenges</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-4 shadow-md text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl font-bold text-teal-700">{userStats.activeDays}</p>
            <p className="text-sm text-muted-foreground">Active Days</p>
          </Card>
        </motion.div>
      </div>

      {/* Goals Progress */}
      <Card className="p-6 shadow-lg">
        <h2 className="text-xl mb-4 flex items-center gap-2">
          <Target className="text-teal-600" />
          Your Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{goal.icon}</span>
                  <h4>{goal.title}</h4>
                </div>
                <span className="text-sm text-muted-foreground">{goal.progress}%</span>
              </div>
              <Progress value={goal.progress} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">
                {goal.current} / {goal.target}
              </p>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Impact Summary */}
      <Card className="p-6 shadow-lg">
        <h2 className="text-xl mb-4">Your Environmental Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactSummary.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center p-4 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="text-2xl font-bold text-teal-700">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Recent Achievements */}
      <Card className="p-6 shadow-lg">
        <h2 className="text-xl mb-4 flex items-center gap-2">
          <Award className="text-purple-600" />
          Recent Achievements
        </h2>
        <div className="space-y-3">
          {recentAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">{achievement.icon}</div>
                <div>
                  <p className="font-medium">{achievement.name}</p>
                  <p className="text-sm text-muted-foreground">{achievement.date}</p>
                </div>
              </div>
              <Badge className="bg-purple-500">New</Badge>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}
