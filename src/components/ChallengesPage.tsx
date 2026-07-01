import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Target, Clock, Users, CheckCircle, TrendingUp } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ChallengesPage() {
  const [joinedChallenges, setJoinedChallenges] = useState<number[]>([1, 3]);

  const dailyChallenges = [
    {
      id: 1,
      title: "Zero Car Day",
      description: "Use public transport, bike, or walk today",
      icon: "🚲",
      points: 50,
      progress: 75,
      timeLeft: "4 hours left",
      participants: 1250,
    },
    {
      id: 2,
      title: "Plant-Based Meals",
      description: "Eat only plant-based foods today",
      icon: "🥗",
      points: 40,
      progress: 0,
      timeLeft: "8 hours left",
      participants: 980,
    },
    {
      id: 3,
      title: "Energy Saver",
      description: "Reduce electricity usage by 30%",
      icon: "💡",
      points: 60,
      progress: 45,
      timeLeft: "6 hours left",
      participants: 1450,
    },
  ];

  const weeklyChallenges = [
    {
      id: 4,
      title: "7-Day Recycling Streak",
      description: "Recycle every day this week",
      icon: "♻️",
      points: 200,
      progress: 57,
      timeLeft: "3 days left",
      participants: 2340,
      difficulty: "Medium",
    },
    {
      id: 5,
      title: "No Plastic Challenge",
      description: "Avoid single-use plastics for a week",
      icon: "🚫",
      points: 300,
      progress: 0,
      timeLeft: "6 days left",
      participants: 1890,
      difficulty: "Hard",
    },
    {
      id: 6,
      title: "Water Conservation",
      description: "Reduce water usage by 40% this week",
      icon: "💧",
      points: 250,
      progress: 0,
      timeLeft: "5 days left",
      participants: 1560,
      difficulty: "Medium",
    },
  ];

  const communityChallenges = [
    {
      id: 7,
      title: "Global Tree Planting",
      description: "Community goal: Plant 10,000 trees",
      icon: "🌳",
      points: 500,
      progress: 68,
      target: "10,000 trees",
      current: "6,800 trees",
      participants: 8500,
    },
    {
      id: 8,
      title: "Plastic-Free Ocean",
      description: "Community goal: Collect 5 tons of beach plastic",
      icon: "🌊",
      points: 400,
      progress: 42,
      target: "5 tons",
      current: "2.1 tons",
      participants: 5200,
    },
  ];

  const handleJoinChallenge = (id: number, title: string) => {
    if (joinedChallenges.includes(id)) {
      toast.success(`Challenge completed! 🎉`);
    } else {
      setJoinedChallenges([...joinedChallenges, id]);
      toast.success(`Joined "${title}"! Good luck! 💪`);
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <h1 className="text-3xl mb-2">Challenges 🏆</h1>
        <p className="text-teal-50">Take on eco-challenges and earn rewards</p>
      </motion.div>

      {/* Challenge Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-4 shadow-md bg-gradient-to-br from-blue-50 to-teal-50">
            <Target className="w-8 h-8 text-teal-600 mb-2" />
            <p className="text-2xl font-bold text-teal-700">12</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-4 shadow-md bg-gradient-to-br from-green-50 to-emerald-50">
            <Clock className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold text-teal-700">3</p>
            <p className="text-sm text-muted-foreground">Active</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-4 shadow-md bg-gradient-to-br from-yellow-50 to-orange-50">
            <TrendingUp className="w-8 h-8 text-yellow-600 mb-2" />
            <p className="text-2xl font-bold text-teal-700">1,250</p>
            <p className="text-sm text-muted-foreground">Points Earned</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-4 shadow-md bg-gradient-to-br from-purple-50 to-pink-50">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-2xl font-bold text-teal-700">85%</p>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </Card>
        </motion.div>
      </div>

      {/* Daily Challenges */}
      <div>
        <h2 className="text-xl mb-4">Daily Challenges</h2>
        <div className="space-y-4">
          {dailyChallenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-5xl">{challenge.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3>{challenge.title}</h3>
                        {joinedChallenges.includes(challenge.id) && (
                          <Badge className="bg-green-500">Active</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>{challenge.progress}% complete</span>
                          <span className="text-teal-600 font-bold">+{challenge.points} points</span>
                        </div>
                        <Progress value={challenge.progress} className="h-2" />
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {challenge.timeLeft}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {challenge.participants.toLocaleString()} joined
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleJoinChallenge(challenge.id, challenge.title)}
                    className={`${
                      joinedChallenges.includes(challenge.id)
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
                    }`}
                  >
                    {joinedChallenges.includes(challenge.id) ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Complete
                      </>
                    ) : (
                      "Join"
                    )}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Weekly Challenges */}
      <div>
        <h2 className="text-xl mb-4">Weekly Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weeklyChallenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="p-6 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">{challenge.icon}</div>
                  <Badge className={
                    challenge.difficulty === "Hard" ? "bg-red-500" :
                    challenge.difficulty === "Medium" ? "bg-yellow-500" :
                    "bg-green-500"
                  }>
                    {challenge.difficulty}
                  </Badge>
                </div>
                <h3 className="text-center mb-2">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground text-center mb-4 flex-1">
                  {challenge.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-teal-600 font-bold">+{challenge.points} points</span>
                    <span className="text-muted-foreground">{challenge.timeLeft}</span>
                  </div>
                  <div className="text-center text-xs text-muted-foreground">
                    <Users className="w-3 h-3 inline mr-1" />
                    {challenge.participants.toLocaleString()} participants
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700">
                    Join Challenge
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Community Challenges */}
      <div>
        <h2 className="text-xl mb-4">Community Challenges</h2>
        <div className="space-y-4">
          {communityChallenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="p-6 shadow-lg bg-gradient-to-r from-teal-50 to-emerald-50">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-5xl">{challenge.icon}</div>
                    <div className="flex-1">
                      <h3 className="mb-1">{challenge.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>{challenge.current} / {challenge.target}</span>
                          <span className="text-teal-600 font-bold">+{challenge.points} points</span>
                        </div>
                        <Progress value={challenge.progress} className="h-3" />
                        <div className="text-sm text-muted-foreground">
                          <Users className="w-4 h-4 inline mr-1" />
                          {challenge.participants.toLocaleString()} contributors
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                    Contribute
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
