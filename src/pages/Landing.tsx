"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Terminal, Code, Zap, Star, ArrowRight, GitBranch, Database, Shield, Users, Rocket } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-12 max-w-5xl mx-auto">
            {/* Animated Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="p-6 rounded-3xl bg-gradient-primary animate-glow-pulse">
                <Terminal className="h-20 w-20 text-primary-foreground" />
              </div>
            </motion.div>

            {/* Hero Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                    CMDHub
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                  Master Every Command
                </p>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The ultimate collection of command-line tools, scripts, and best practices. 
                From Git to Docker, from Linux to Windows PowerShell - we've got you covered.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { number: "2K+", label: "Commands" },
                { number: "50+", label: "Categories" },
                { number: "10K+", label: "Developers" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button 
                asChild
                size="lg"
                className="btn-hero text-xl px-12 py-8 h-auto group"
              >
                <Link to="/signup">
                  Start Exploring
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="btn-ghost text-xl px-12 py-8 h-auto"
              >
                <Link to="/dashboard">
                  Browse Commands
                  <Code className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial opacity-10 blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Everything You Need
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From basic commands to advanced scripting, CMDHub provides comprehensive resources for developers at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GitBranch className="h-10 w-10" />,
                title: "Version Control",
                description: "Master Git commands, workflows, and best practices for collaborative development.",
                gradient: "from-green-400 to-blue-500"
              },
              {
                icon: <Database className="h-10 w-10" />,
                title: "Database Operations",
                description: "SQL queries, NoSQL commands, and database administration tools at your fingertips.",
                gradient: "from-purple-400 to-pink-500"
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: "Security Tools",
                description: "Essential security commands, vulnerability scanning, and system hardening techniques.",
                gradient: "from-red-400 to-orange-500"
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "System Admin",
                description: "Server management, user administration, and system monitoring commands.",
                gradient: "from-blue-400 to-cyan-500"
              },
              {
                icon: <Rocket className="h-10 w-10" />,
                title: "DevOps & CI/CD",
                description: "Docker, Kubernetes, Jenkins, and deployment automation commands.",
                gradient: "from-yellow-400 to-orange-500"
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: "Development Tools",
                description: "Package managers, build tools, testing frameworks, and development utilities.",
                gradient: "from-indigo-400 to-purple-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden"
              >
                <div className="bg-card/70 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-2 transition-opacity duration-300 rounded-2xl`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Ready to Level Up?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Join thousands of developers who've mastered their command-line skills with CMDHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild
                size="lg"
                className="btn-hero text-xl px-12 py-8 h-auto group"
              >
                <Link to="/signup">
                  Get Started Free
                  <Zap className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="btn-ghost text-xl px-12 py-8 h-auto"
              >
                <Link to="/dashboard">
                  Explore Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
        </div>
      </section>
    </div>
  );
};

export default Landing;