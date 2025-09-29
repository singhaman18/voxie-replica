"use client";

import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { getCommandById, getCategoryById } from "@/lib/mockData";
import { 
  ArrowLeft, 
  Copy, 
  Heart, 
  Tag, 
  TrendingUp, 
  Calendar,
  Users,
  Terminal
} from "lucide-react";

const CommandDetail = () => {
  const { id } = useParams<{ id: string }>();
  const command = id ? getCommandById(id) : null;
  const category = command ? getCategoryById(command.category) : null;
  const { toast } = useToast();

  const handleCopy = () => {
    if (command) {
      navigator.clipboard.writeText(command.command);
      toast({
        title: "Copied!",
        description: "Command copied to clipboard",
      });
    }
  };

  const handleFavorite = () => {
    toast({
      title: command?.isFavorite ? "Removed from favorites" : "Added to favorites",
      description: command?.title,
    });
  };

  if (!command) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <Terminal className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl font-bold mb-4">Command Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The command you're looking for doesn't exist or may have been removed.
          </p>
          <Link to="/dashboard">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-cyan-950 to-blue-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <Layout>
        <div className="relative z-10 container mx-auto px-4 py-8 space-y-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/dashboard">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </motion.div>

        {/* Main Command Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-border/50 shadow-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-2xl md:text-3xl">{command.title}</CardTitle>
                    {category && (
                      <Badge variant="secondary" className={category.color}>
                        {category.name}
                      </Badge>
                    )}
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {command.description}
                  </p>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={handleFavorite}
                    className={`${
                      command.isFavorite 
                        ? "text-red-500 border-red-500/50 hover:bg-red-500/10" 
                        : "hover:text-red-500 hover:border-red-500/50"
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${command.isFavorite ? "fill-current" : ""}`} />
                  </Button>
                  
                  <Button onClick={handleCopy} className="btn-hero">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Command
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Command Code Block */}
              <div className="relative group">
                <pre className="bg-terminal text-code-foreground p-6 rounded-lg text-base font-mono overflow-x-auto border border-border/50">
                  <code>{command.command}</code>
                </pre>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopy}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Tags */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-primary" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {command.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{command.usage.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Total Uses</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">1.2k+</div>
                    <div className="text-sm text-muted-foreground">Users</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-success/10">
                    <Calendar className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold">Recently</div>
                    <div className="text-sm text-muted-foreground">Updated</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Usage Examples Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Usage Examples</h2>
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Basic Usage:</h4>
                  <pre className="bg-muted p-3 rounded text-sm font-mono">
                    <code>{command.command}</code>
                  </pre>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Description:</h4>
                  <p className="text-muted-foreground">{command.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
    </div>
  );
};

export default CommandDetail;