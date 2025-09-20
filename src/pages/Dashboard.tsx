"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SearchBar from "@/components/ui/SearchBar";
import CommandCard from "@/components/ui/CommandCard";
import CategoryCard from "@/components/ui/CategoryCard";
import { categories, trendingCommands, favoriteCommands } from "@/lib/mockData";
import { TrendingUp, Heart } from "lucide-react";

const Dashboard = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Welcome Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">
              Welcome to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CMDHub</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover and master command-line tools with our comprehensive collection
            </p>
          </div>
          
          <SearchBar
            placeholder="Search thousands of commands..."
            onSearch={handleSearch}
            className="max-w-2xl mx-auto"
          />
        </motion.section>

        {/* Trending Commands */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Trending Commands</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCommands.slice(0, 6).map((command, index) => (
              <CommandCard 
                key={command.id} 
                command={command} 
                index={index}
                showRank={true}
              />
            ))}
          </div>
        </motion.section>

        {/* Favorites Preview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-bold">Your Favorites</h2>
            </div>
            {favoriteCommands.length > 3 && (
              <a href="/favorites" className="nav-link text-primary text-sm font-medium">
                View all
              </a>
            )}
          </div>
          
          {favoriteCommands.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteCommands.slice(0, 3).map((command, index) => (
                <CommandCard key={command.id} command={command} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Heart className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No favorites yet. Start exploring commands!</p>
            </div>
          )}
        </motion.section>

        {/* Categories Grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                index={index}
              />
            ))}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Dashboard;