"use client";

import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CommandCard from "@/components/ui/CommandCard";
import SearchBar from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";
import { getCategoryById, getCommandsByCategory } from "@/lib/mockData";
import { ArrowLeft, Filter } from "lucide-react";

const CategoryDetail = () => {
  const { category: categoryId } = useParams<{ category: string }>();
  const category = categoryId ? getCategoryById(categoryId) : null;
  const commands = categoryId ? getCommandsByCategory(categoryId) : [];

  const handleSearch = (query: string) => {
    console.log("Searching commands for:", query);
  };

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Link to="/categories">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Categories
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Breadcrumb */}
          <Link to="/categories">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Categories
            </Button>
          </Link>

          {/* Category Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className={category.color}>{category.name}</span> Commands
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {category.description}
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span>{commands.length} commands available</span>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <SearchBar
              placeholder={`Search ${category.name} commands...`}
              onSearch={handleSearch}
              className="max-w-xl"
            />
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
        </motion.div>

        {/* Commands Grid */}
        {commands.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {commands.map((command, index) => (
              <Link key={command.id} to={`/commands/${command.id}`}>
                <CommandCard command={command} index={index} />
              </Link>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center py-16"
          >
            <h3 className="text-xl font-semibold mb-2">No commands found</h3>
            <p className="text-muted-foreground">
              Commands for this category are coming soon!
            </p>
          </motion.div>
        )}

        {/* Load More */}
        {commands.length > 12 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <Button variant="outline" size="lg">
              Load More Commands
            </Button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryDetail;