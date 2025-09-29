"use client";

import { motion } from "framer-motion";
import { Copy, Heart, Tag, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Command } from "@/lib/mockData";

interface CommandCardProps {
  command: Command;
  index?: number;
  showRank?: boolean;
  onFavoriteToggle?: (id: string) => void;
}

const CommandCard = ({ command, index = 0, showRank = false, onFavoriteToggle }: CommandCardProps) => {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(command.command);
    toast({
      title: "Copied!",
      description: "Command copied to clipboard",
    });
  };

  const handleFavorite = () => {
    onFavoriteToggle?.(command.id);
    toast({
      title: command.isFavorite ? "Removed from favorites" : "Added to favorites",
      description: command.title,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/10 transition-all duration-300 group">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              {showRank && (
                <div className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                  <span className="font-bold text-cyan-400 text-sm">#{command.rank}</span>
                  <TrendingUp className="h-3 w-3 text-cyan-400" />
                </div>
              )}
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                {command.title}
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{command.description}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleFavorite}
            className={`${
              command.isFavorite 
                ? "text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20" 
                : "text-slate-400 hover:text-red-400 hover:bg-red-500/10"
            } rounded-xl transition-all duration-200`}
          >
            <Heart className={`h-4 w-4 ${command.isFavorite ? "fill-current" : ""}`} />
          </Button>
        </div>
        
        
        <div className="space-y-4">
          <div className="relative">
            <pre className="bg-slate-900/50 text-green-400 p-4 rounded-xl text-sm font-mono overflow-x-auto border border-slate-700/50">
              <code>{command.command}</code>
            </pre>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="absolute top-3 right-3 h-8 w-8 p-0 bg-slate-800/50 border-slate-600/50 hover:bg-slate-700/50 hover:border-slate-500/50 opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <Copy className="h-3 w-3 text-slate-300" />
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {command.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs px-2 py-1">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
              {command.tags.length > 3 && (
                <Badge variant="outline" className="border-slate-500/30 text-slate-400 text-xs">
                  +{command.tags.length - 3}
                </Badge>
              )}
            </div>
            
            <div className="text-xs text-slate-400 bg-slate-800/30 px-2 py-1 rounded-lg">
              {command.usage.toLocaleString()} uses
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CommandCard;