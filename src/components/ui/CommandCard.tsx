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
      <Card className="card-hover group">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                {showRank && (
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <span className="font-bold text-primary">#{command.rank}</span>
                    <TrendingUp className="h-3 w-3" />
                  </div>
                )}
                <CardTitle className="text-lg">{command.title}</CardTitle>
              </div>
              <CardDescription className="mt-1">{command.description}</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleFavorite}
              className={`${
                command.isFavorite ? "text-red-500 hover:text-red-600" : "text-muted-foreground hover:text-red-500"
              }`}
            >
              <Heart className={`h-4 w-4 ${command.isFavorite ? "fill-current" : ""}`} />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <pre className="bg-terminal text-code-foreground p-3 rounded-md text-sm font-mono overflow-x-auto">
                <code>{command.command}</code>
              </pre>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="absolute top-2 right-2 h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {command.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
                {command.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{command.tags.length - 3}
                  </Badge>
                )}
              </div>
              
              <div className="text-xs text-muted-foreground">
                {command.usage.toLocaleString()} uses
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CommandCard;