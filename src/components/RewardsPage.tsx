import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Gift, Star, Crown, Zap, Lock, Sparkles } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function RewardsPage() {
  const [ecoPoints, setEcoPoints] = useState(1720);
  const [claimedRewards, setClaimedRewards] = useState<number[]>([1, 3]);

  const virtualBadges = [
    {
      id: 1,
      name: "Bronze Eco Warrior",
      icon: "🥉",
      cost: 100,
      rarity: "Common",
      claimed: true,
    },
    {
      id: 2,
      name: "Silver Guardian",
      icon: "🥈",
      cost: 500,
      rarity: "Uncommon",
      claimed: false,
    },
    {
      id: 3,
      name: "Gold Protector",
      icon: "🥇",
      cost: 1000,
      rarity: "Rare",
      claimed: true,
    },
    {
      id: 4,
      name: "Platinum Champion",
      icon: "💎",
      cost: 2500,
      rarity: "Epic",
      claimed: false,
    },
    {
      id: 5,
      name: "Diamond Legend",
      icon: "👑",
      cost: 5000,
      rarity: "Legendary",
      claimed: false,
    },
  ];

  const perks = [
    {
      id: 6,
      name: "Profile Theme: Ocean Blue",
      icon: "🌊",
      cost: 300,
      category: "Theme",
      claimed: false,
    },
    {
      id: 7,
      name: "Profile Theme: Forest Green",
      icon: "🌲",
      cost: 300,
      category: "Theme",
      claimed: false,
    },
    {
      id: 8,
      name: "Exclusive Avatar Frame",
      icon: "🖼️",
      cost: 750,
      category: "Avatar",
      claimed: false,
    },
    {
      id: 9,
      name: "Double XP Boost (7 days)",
      icon: "⚡",
      cost: 1200,
      category: "Boost",
      claimed: false,
    },
    {
      id: 10,
      name: "Challenge Skip Token",
      icon: "🎫",
      cost: 400,
      category: "Item",
      claimed: false,
    },
    {
      id: 11,
      name: "VIP Leaderboard Badge",
      icon: "⭐",
      cost: 2000,
      category: "Badge",
      claimed: false,
    },
  ];

  const milestones = [
    { points: 500, reward: "Beginner Badge", unlocked: true },
    { points: 1000, reward: "Intermediate Badge", unlocked: true },
    { points: 2000, reward: "Advanced Badge", unlocked: false },
    { points: 5000, reward: "Expert Badge", unlocked: false },
    { points: 10000, reward: "Master Badge", unlocked: false },
  ];

  const handleRedeem = (id: number, cost: number, name: string) => {
    if (ecoPoints >= cost) {
      setEcoPoints(ecoPoints - cost);
      setClaimedRewards([...claimedRewards, id]);
      toast.success(`Redeemed ${name}! 🎉`);
    } else {
      toast.error("Not enough Eco Points!");
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "bg-gray-500";
      case "Uncommon": return "bg-green-500";
      case "Rare": return "bg-blue-500";
      case "Epic": return "bg-purple-500";
      case "Legendary": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <h1 className="text-3xl mb-2">Rewards 🎁</h1>
        <p className="text-teal-50">Redeem your Eco Points for exclusive rewards</p>
      </motion.div>

      {/* Eco Points Balance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6 shadow-lg bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Your Eco Points</p>
              <p className="text-5xl font-bold text-teal-700 flex items-center gap-2">
                <Star className="w-10 h-10 text-yellow-500" />
                {ecoPoints.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Earn points by completing challenges and activities
          </p>
        </Card>
      </motion.div>

      {/* Milestones */}
      <Card className="p-6 shadow-lg">
        <h2 className="text-xl mb-4 flex items-center gap-2">
          <Zap className="text-yellow-500" />
          Point Milestones
        </h2>
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.points}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  milestone.unlocked ? "bg-green-500" : "bg-gray-300"
                }`}>
                  {milestone.unlocked ? (
                    <Crown className="w-6 h-6 text-white" />
                  ) : (
                    <Lock className="w-6 h-6 text-gray-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{milestone.reward}</span>
                    <span className="text-sm text-muted-foreground">{milestone.points} points</span>
                  </div>
                  <Progress 
                    value={milestone.unlocked ? 100 : Math.min((ecoPoints / milestone.points) * 100, 100)} 
                    className="h-2"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Virtual Badges */}
      <div>
        <h2 className="text-xl mb-4">Virtual Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {virtualBadges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className={`p-6 shadow-lg hover:shadow-xl transition-all ${
                claimedRewards.includes(badge.id) ? "border-2 border-teal-500" : ""
              }`}>
                <div className="text-center">
                  <div className="text-6xl mb-3">{badge.icon}</div>
                  <Badge className={`${getRarityColor(badge.rarity)} mb-2`}>
                    {badge.rarity}
                  </Badge>
                  <h3 className="mb-2">{badge.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-yellow-600 mb-4">
                    <Star className="w-4 h-4" />
                    <span className="font-bold">{badge.cost}</span>
                  </div>
                  {claimedRewards.includes(badge.id) ? (
                    <Badge className="bg-green-500 w-full py-2">
                      <Gift className="w-4 h-4 mr-2" />
                      Claimed
                    </Badge>
                  ) : ecoPoints >= badge.cost ? (
                    <Button
                      onClick={() => handleRedeem(badge.id, badge.cost, badge.name)}
                      className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
                    >
                      Redeem
                    </Button>
                  ) : (
                    <Button disabled className="w-full">
                      <Lock className="w-4 h-4 mr-2" />
                      Locked
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Exclusive Perks */}
      <div>
        <h2 className="text-xl mb-4">Exclusive Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{perk.icon}</div>
                  <Badge className="bg-teal-500">{perk.category}</Badge>
                </div>
                <h4 className="mb-3">{perk.name}</h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-600">
                    <Star className="w-4 h-4" />
                    <span className="font-bold">{perk.cost}</span>
                  </div>
                  {ecoPoints >= perk.cost ? (
                    <Button
                      onClick={() => handleRedeem(perk.id, perk.cost, perk.name)}
                      size="sm"
                      className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
                    >
                      Redeem
                    </Button>
                  ) : (
                    <Button disabled size="sm">
                      <Lock className="w-4 h-4 mr-2" />
                      Locked
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Earning Tips */}
      <Card className="p-6 shadow-lg bg-gradient-to-r from-blue-50 to-teal-50">
        <h3 className="mb-3 flex items-center gap-2">
          <Sparkles className="text-yellow-500" />
          How to Earn More Points
        </h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-teal-600">✓</span>
            <span>Complete daily challenges (+50-100 points)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600">✓</span>
            <span>Finish weekly challenges (+200-300 points)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600">✓</span>
            <span>Log eco-friendly activities (+10-25 points each)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600">✓</span>
            <span>Maintain activity streaks (bonus multiplier)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600">✓</span>
            <span>Participate in community challenges (+400-500 points)</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
