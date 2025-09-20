"use client";

import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <Link to={`/categories/${category.id}`}>
        <Card className="card-hover group cursor-pointer h-full">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg bg-gradient-primary group-hover:animate-glow-pulse transition-all duration-300`}>
                <IconComponent className={`h-6 w-6 ${category.color}`} />
              </div>
              <Badge variant="outline" className="text-xs">
                {category.commandCount} commands
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent>
            <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
              {category.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {category.description}
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;