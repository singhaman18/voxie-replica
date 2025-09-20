"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CommandCard from "@/components/ui/CommandCard";
import SearchBar from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";
import { favoriteCommands } from "@/lib/mockData";
import { Heart, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Favorites = () => {
  const [favorites, setFavorites] = useState(favoriteCommands);
  const { toast } = useToast();

  const handleRemoveFavorite = (commandId: string) => {
    setFavorites(prev => prev.filter(cmd => cmd.id !== commandId));
    toast({
      title: "Removed from favorites",
      description: "Command has been removed from your favorites",
    });
  };

  const handleClearAll = () => {
    setFavorites([]);
    toast({
      title: "All favorites cleared",
      description: "All commands have been removed from your favorites",
    });
  };

  const handleSearch = (query: string) => {
    console.log("Searching favorites for:", query);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl md:text-4xl font-bold">Your Favorites</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quick access to your most-used and bookmarked commands
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <SearchBar
              placeholder="Search your favorites..."
              onSearch={handleSearch}
              className="max-w-xl"
            />
            {favorites.length > 0 && (
              <Button 
                variant="outline" 
                onClick={handleClearAll}
                className="text-destructive hover:bg-destructive/10 hover:border-destructive/50"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>
        </motion.div>

        {/* Favorites List */}
        {favorites.length > 0 ? (
          <>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-card px-4 py-2 rounded-full border">
                <span className="text-2xl font-bold text-primary">{favorites.length}</span>
                <span className="text-muted-foreground">favorite commands</span>
              </div>
            </motion.div>

            {/* Commands Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {favorites.map((command, index) => (
                <div key={command.id} className="relative group">
                  <CommandCard 
                    command={command} 
                    index={index} 
                    onFavoriteToggle={handleRemoveFavorite}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveFavorite(command.id)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center py-16"
          >
            <div className="space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
                <Heart className="h-12 w-12 text-muted-foreground/50" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">No favorites yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Start exploring commands and click the heart icon to add them to your favorites for quick access.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="btn-hero">
                  <a href="/dashboard">Browse Commands</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/categories">Explore Categories</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;