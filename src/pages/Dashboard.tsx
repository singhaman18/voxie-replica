"use client";

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
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float will-change-transform"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float will-change-transform" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float will-change-transform" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-8 space-y-12">
        {/* Welcome Section */}
        <section className="text-center space-y-8 py-12 animate-fade-in-up">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Welcome to CMDHub
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Discover and master command-line tools with our comprehensive collection of commands, tutorials, and interactive examples
              </p>
            </div>
            
            <div className="mt-8">
              <SearchBar
                placeholder="Search thousands of commands..."
                onSearch={handleSearch}
                className="max-w-2xl mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Trending Commands */}
        <section className="space-y-8 animate-fade-in-up" style={{animationDelay: '200ms'}}>
          <div className="flex items-center space-x-3 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Trending Commands</h2>
              <p className="text-slate-400">Most popular commands this week</p>
            </div>
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
        </section>

        {/* Favorites Preview */}
        <section className="space-y-8 animate-fade-in-up" style={{animationDelay: '400ms'}}>
          <div className="flex items-center justify-between backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Your Favorites</h2>
                <p className="text-slate-400">Commands you've saved for quick access</p>
              </div>
            </div>
            {favoriteCommands.length > 3 && (
              <a href="/favorites" className="nav-link text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors">
                View all →
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
        </section>

        {/* Categories Grid */}
        <section className="space-y-8 animate-fade-in-up" style={{animationDelay: '600ms'}}>
          <div className="flex items-center space-x-3 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Browse by Category</h2>
              <p className="text-slate-400">Explore commands organized by tools and platforms</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                index={index}
              />
            ))}
          </div>
        </section>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;