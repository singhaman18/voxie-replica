"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Terminal, Code, Zap, Star } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center space-y-8">
            {/* Animated Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="p-4 rounded-2xl bg-gradient-primary animate-glow-pulse">
                <Terminal className="h-16 w-16 text-primary-foreground" />
              </div>
            </motion.div>

            {/* Animated Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Master Commands
                </span>
                <br />
                <span className="text-foreground">Like a Pro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover, learn, and master command-line tools with our comprehensive 
                collection of commands, examples, and best practices.
              </p>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                asChild
                size="lg"
                className="btn-hero text-lg px-8 py-6 h-auto"
              >
                <Link to="/signup">
                  Get Started
                  <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="btn-ghost text-lg px-8 py-6 h-auto"
              >
                <Link to="/dashboard">
                  Explore as Guest
                  <Code className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Terminal className="h-8 w-8 text-primary" />,
                title: "Comprehensive Library",
                description: "Access thousands of carefully curated commands across multiple platforms and tools."
              },
              {
                icon: <Star className="h-8 w-8 text-accent" />,
                title: "Trending Commands",
                description: "Stay updated with the most popular and trending commands used by developers."
              },
              {
                icon: <Code className="h-8 w-8 text-success" />,
                title: "Copy & Execute", 
                description: "One-click copying with detailed explanations and usage examples."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card-hover transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {feature.icon}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1s" }} />
        </div>
      </section>
    </div>
  );
};

export default Landing;