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
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
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
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg">
                <Grid3X3 className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Command Categories
              </h1>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Explore our comprehensive collection of commands organized by tools, platforms, and use cases
            </p>
            
            <SearchBar
              placeholder="Search categories..."
              onSearch={handleSearch}
              className="max-w-xl mx-auto"
            />
          </div>
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