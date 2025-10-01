"use client";

import { useState, useCallback, useEffect } from "react";
import { Search, Command } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@/lib/performance";

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
  const debouncedQuery = useDebounce(query, 300);

  // Call onSearch with debounced query
  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
  }, []);

  // Effect to handle debounced search
  useEffect(() => {
    if (debouncedQuery) {
      onSearch?.(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative group">
        <div className="relative">
          <Command className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
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
        
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 -z-10" />
      </form>
    </div>
  );
};

export default SearchBar;