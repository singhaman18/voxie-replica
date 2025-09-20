"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CommandCard from "@/components/ui/CommandCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { mockUser, recentlyViewed } from "@/lib/mockData";
import { 
  User, 
  Mail, 
  Calendar, 
  TrendingUp, 
  Heart, 
  Eye, 
  Share2,
  LogOut,
  Settings,
  Trophy
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been signed out of your account",
    });
    // Redirect to login page
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };

  const handleEditProfile = () => {
    toast({
      title: "Coming Soon",
      description: "Profile editing feature will be available soon",
    });
  };

  const stats = [
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      label: "Commands Used",
      value: mockUser.stats.totalCommands.toLocaleString(),
      description: "Total commands executed"
    },
    {
      icon: <Heart className="h-5 w-5 text-red-500" />,
      label: "Favorites",
      value: mockUser.stats.favorites,
      description: "Bookmarked commands"
    },
    {
      icon: <Eye className="h-5 w-5 text-accent" />,
      label: "Recently Viewed",
      value: mockUser.stats.recentlyViewed,
      description: "Commands viewed today"
    },
    {
      icon: <Share2 className="h-5 w-5 text-success" />,
      label: "Shared",
      value: mockUser.stats.commandsShared,
      description: "Commands shared with team"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-border/50 shadow-card">
            <CardHeader>
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <Avatar className="w-20 h-20 border-2 border-primary/20">
                  <AvatarImage src={mockUser.avatar} alt={mockUser.username} />
                  <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-primary-foreground">
                    {mockUser.username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-3">
                    <h1 className="text-2xl md:text-3xl font-bold">{mockUser.username}</h1>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      <Trophy className="h-3 w-3 mr-1" />
                      Pro User
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Mail className="h-4 w-4" />
                      <span>{mockUser.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {new Date(mockUser.joinDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" onClick={handleEditProfile}>
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleLogout}
                    className="text-destructive hover:bg-destructive/10 hover:border-destructive/50"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
            >
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-card-hover">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Recently Viewed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold">Recently Viewed</h2>
            </div>
            <Button variant="ghost" className="nav-link text-primary">
              View All History
            </Button>
          </div>
          
          {recentlyViewed.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentlyViewed.map((command, index) => (
                <CommandCard key={command.id} command={command} index={index} />
              ))}
            </div>
          ) : (
            <Card className="border-border/50">
              <CardContent className="p-8 text-center">
                <Eye className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
                <h3 className="font-semibold mb-2">No recent activity</h3>
                <p className="text-muted-foreground mb-4">
                  Start exploring commands to see your recent activity here
                </p>
                <Button asChild className="btn-hero">
                  <a href="/dashboard">Explore Commands</a>
                </Button>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Activity Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Card className="border-border/50 bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Trophy className="h-6 w-6 text-primary" />
                <span>Achievement Progress</span>
              </CardTitle>
              <CardDescription>
                Complete challenges to unlock new features and badges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div className="font-semibold">Command Explorer</div>
                  <div className="text-sm text-muted-foreground">500/1000 commands used</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-2">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <div className="font-semibold">Collector</div>
                  <div className="text-sm text-muted-foreground">4/10 favorites added</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-success/20 flex items-center justify-center mb-2">
                    <Share2 className="h-8 w-8 text-success" />
                  </div>
                  <div className="font-semibold">Collaborator</div>
                  <div className="text-sm text-muted-foreground">23/50 commands shared</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Profile;