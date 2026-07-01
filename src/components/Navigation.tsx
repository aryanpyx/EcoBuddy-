import { useState } from "react";
import { Home, Activity, BarChart3, Users, Gift, User, Settings, LogOut, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "activity", icon: Activity, label: "Activity" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "community", icon: Users, label: "Community" },
    { id: "rewards", icon: Gift, label: "Rewards" },
  ];

  const handleProfileAction = (action: string) => {
    setIsProfileOpen(false);
    if (action === "profile") {
      onNavigate("profile");
    } else if (action === "settings") {
      // Handle settings
      console.log("Settings clicked");
    } else if (action === "logout") {
      // Handle logout
      console.log("Logout clicked");
    }
  };

  return (
    <>
      {/* Top Header - Desktop & Mobile */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-teal-600 to-emerald-600 shadow-lg backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl md:text-3xl">🌍</span>
              </div>
              <span className="text-white font-bold text-xl md:text-2xl tracking-tight">EcoBuddy</span>
            </div>

            {/* Profile Dropdown - Top Right */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-inner">
                  <User className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="hidden md:block text-white font-medium">Profile</span>
                <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${isProfileOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu with Glassmorphism */}
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-teal-100/50 overflow-hidden"
                  >
                    <div className="p-4 bg-gradient-to-br from-teal-50 to-emerald-50 border-b border-teal-100">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg">
                          <User className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold text-teal-900">Alex Johnson</p>
                          <p className="text-xs text-teal-600">Level 12 • 1,720 pts</p>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <button
                        onClick={() => handleProfileAction("profile")}
                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-teal-50 transition-colors duration-200 text-left"
                      >
                        <User className="w-5 h-5 text-teal-600" />
                        <span className="text-gray-700 font-medium">View Profile</span>
                      </button>
                      <button
                        onClick={() => handleProfileAction("settings")}
                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-teal-50 transition-colors duration-200 text-left"
                      >
                        <Settings className="w-5 h-5 text-teal-600" />
                        <span className="text-gray-700 font-medium">Settings</span>
                      </button>
                      <button
                        onClick={() => handleProfileAction("logout")}
                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-red-50 transition-colors duration-200 text-left border-t border-gray-100 mt-1"
                      >
                        <LogOut className="w-5 h-5 text-red-600" />
                        <span className="text-red-600 font-medium">Logout</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* Click outside to close dropdown */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsProfileOpen(false)}
        />
      )}

      {/* Bottom Navigation - Mobile & Desktop */}
      <nav className="fixed bottom-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-4xl px-4 pb-4">
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-2">
            <div className="flex items-center justify-around">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`relative flex flex-col items-center justify-center px-4 py-3 md:px-6 md:py-3.5 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-white text-teal-700 shadow-lg scale-105"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {/* Glowing effect for active state */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white rounded-2xl"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    <Icon className={`w-6 h-6 md:w-7 md:h-7 ${isActive ? "text-teal-700" : "text-white"}`} />
                    <span className={`text-xs md:text-sm font-medium mt-1 ${
                      isActive ? "text-teal-700" : "text-white/90"
                    }`}>
                      {item.label}
                    </span>

                    {/* Glow effect */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-2xl bg-teal-400/30 blur-xl"
                        style={{ zIndex: -2 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
