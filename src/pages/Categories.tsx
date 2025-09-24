"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/ui/CategoryCard";
import SearchBar from "@/components/ui/SearchBar";
import { categories } from "@/lib/mockData";
import { Grid3X3 } from "lucide-react";

const Categories = () => {
  const handleSearch = (query: string) => {
    console.log("Searching categories for:", query);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-cyan-green">
        <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Grid3X3 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Command Categories</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore commands organized by tools and platforms
          </p>
          
          <SearchBar
            placeholder="Search categories..."
            onSearch={handleSearch}
            className="max-w-xl mx-auto"
          />
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.id} 
              category={category} 
              index={index}
            />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">
                {categories.length}
              </div>
              <div className="text-white/70">Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">
                {categories.reduce((sum, cat) => sum + cat.commandCount, 0)}
              </div>
              <div className="text-white/70">Total Commands</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-success">
                Daily
              </div>
              <div className="text-white/70">Updates</div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;