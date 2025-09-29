"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CommandCard from "@/components/ui/CommandCard";
import SearchBar from "@/components/ui/SearchBar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { trendingCommands } from "@/lib/mockData";
import { TrendingUp, Trophy, Award, Medal } from "lucide-react";

const Trending = () => {
  const handleSearch = (query: string) => {
    console.log("Searching trending commands for:", query);
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Award className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-orange-500" />;
      default:
        return <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{rank}</span>;
    }
  };

  const getTrendBadge = (trend: "up" | "stable" | "down") => {
    const variants = {
      up: { color: "text-green-500", bg: "bg-green-500/10", label: "Rising" },
      stable: { color: "text-blue-500", bg: "bg-blue-500/10", label: "Stable" },
      down: { color: "text-orange-500", bg: "bg-orange-500/10", label: "Falling" }
    };
    
    return (
      <Badge variant="outline" className={`${variants[trend].bg} ${variants[trend].color} border-current/20`}>
        {variants[trend].label}
      </Badge>
    );
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-950 to-indigo-950 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
            <defs>
              <pattern id="circuits" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M10 10h30v30h-30z M20 0v50 M0 20h50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="10" cy="10" r="2" fill="currentColor"/>
                <circle cx="40" cy="40" r="2" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuits)" />
          </svg>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-8 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8 py-12"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Trending Commands
              </h1>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Discover the most popular commands used by developers worldwide this week
            </p>
            
            <SearchBar
              placeholder="Search trending commands..."
              onSearch={handleSearch}
              className="max-w-xl mx-auto"
            />
          </div>
        </motion.div>

        {/* Leaderboard Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">
                {trendingCommands[0]?.usage.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Top Usage</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-accent">
                {trendingCommands.filter(cmd => cmd.trend === "up").length}
              </div>
              <div className="text-sm text-white/70">Rising</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-success">
                {trendingCommands.length}
              </div>
              <div className="text-sm text-white/70">Total Tracked</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-500">Live</div>
              <div className="text-sm text-muted-foreground">Updates</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {trendingCommands.slice(0, 3).map((command, index) => (
            <motion.div
              key={command.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className={`relative ${index === 0 ? 'md:order-2' : index === 1 ? 'md:order-1' : 'md:order-3'}`}
            >
              <div className="text-center mb-4">
                <div className="flex justify-center mb-2">
                  {getRankIcon(command.rank!)}
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-bold">#{command.rank}</div>
                  {getTrendBadge(command.trend!)}
                </div>
              </div>
              <CommandCard command={command} index={0} showRank={false} />
            </motion.div>
          ))}
        </motion.div>

        {/* Full Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-center">Complete Leaderboard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCommands.map((command, index) => (
              <div key={command.id} className="relative">
                <div className="absolute -top-2 -left-2 z-10 flex items-center space-x-2">
                  {getRankIcon(command.rank!)}
                  {getTrendBadge(command.trend!)}
                </div>
                <CommandCard 
                  command={command} 
                  index={index} 
                  showRank={false}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Update Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center py-8"
        >
          <p className="text-sm text-muted-foreground">
            Rankings update every hour based on global usage data • Last updated: 2 minutes ago
          </p>
        </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Trending;