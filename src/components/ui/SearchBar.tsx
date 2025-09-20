"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Command } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar = ({ 
  placeholder = "Search commands...", 
  onSearch, 
  className = "" 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative ${className}`}
    >
      <form onSubmit={handleSubmit} className="relative group">
        <div className="relative">
          <Command className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-12 h-12 bg-card border-border focus:border-primary/50 focus:ring-primary/20 transition-all duration-200"
          />
          <Button
            type="submit"
            size="sm"
            variant="ghost"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-10 px-3 group-focus-within:bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
        
        <motion.div
          className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 -z-10"
          initial={false}
        />
      </form>
    </motion.div>
  );
};

export default SearchBar;