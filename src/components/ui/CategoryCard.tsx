"use client";

import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GitBranch, 
  Container, 
  Package, 
  Terminal, 
  Cloud, 
  Network 
} from "lucide-react";
import { Category } from "@/lib/mockData";

interface CategoryCardProps {
  category: Category;
  index?: number;
}

const iconMap = {
  GitBranch,
  Container,
  Package,
  Terminal,
  Cloud,
  Network
};

const CategoryCard = ({ category, index = 0 }: CategoryCardProps) => {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap];

  return (
    <div 
      className="animate-scale-in hover:scale-105 transition-all duration-200 will-change-transform"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
    >
      <Link to={`/categories/${category.id}`}>
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300 group cursor-pointer h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              <div className={`p-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300`}>
                <IconComponent className={`h-7 w-7 text-cyan-400 group-hover:text-cyan-300 transition-colors`} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs px-3 py-1">
              {category.commandCount} commands
            </Badge>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              {category.name}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {category.description}
            </p>
            <div className="pt-2">
              <div className="text-xs text-cyan-400 font-medium">
                Explore commands →
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;