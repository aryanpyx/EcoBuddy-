import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { ActivityTracker } from "./components/ActivityTracker";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard";
import { CommunityPage } from "./components/CommunityPage";
import { ChallengesPage } from "./components/ChallengesPage";
import { RewardsPage } from "./components/RewardsPage";
import { ProfilePage } from "./components/ProfilePage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "activity":
        return <ActivityTracker />;
      case "analytics":
        return <AnalyticsDashboard />;
      case "community":
        return <CommunityPage />;
      case "challenges":
        return <ChallengesPage />;
      case "settings":
        return <ProfilePage />;
      case "rewards":
        return <RewardsPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {/* Main Content */}
      <main className="pt-20 md:pt-24 pb-24 md:pb-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Toaster position="top-center" />
    </div>
  );
}
