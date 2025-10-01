"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Terminal, Code, Zap, Star, ArrowRight, GitBranch, Database, Shield, Users, Rocket, Search, Heart, TrendingUp, User, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

// Smooth scroll utility
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Optimized Scroll Progress Indicator
const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPx = document.documentElement.scrollTop;
          const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (scrollPx / winHeightPx) * 100;
          
          // Direct DOM manipulation for better performance
          if (progressRef.current) {
            progressRef.current.style.width = `${scrolled}%`;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-black/20">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-primary to-accent will-change-transform"
        style={{ width: '0%', transition: 'width 0.1s ease-out' }}
      />
    </div>
  );
};

// Floating Back to Top Button
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.2 }}
      onClick={() => smoothScrollTo('hero')}
      className="fixed bottom-8 right-8 z-40 p-3 bg-primary hover:bg-primary/80 text-white rounded-full shadow-lg backdrop-blur-sm border border-white/10 hover:shadow-xl transition-all duration-200"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <ArrowRight className="h-6 w-6 rotate-[-90deg]" />
    </motion.button>
  );
};

// Optimized Navigation Component
const SmoothScrollNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Features', id: 'features' },
    { name: 'Advanced', id: 'advanced' },
    { name: 'Get Started', id: 'cta' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.1
    };

    let lastUpdate = 0;
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const now = Date.now();
      if (now - lastUpdate < 100) return; // Throttle updates
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          lastUpdate = now;
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Delay observer setup to avoid initial render lag
    const timer = setTimeout(() => {
      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => smoothScrollTo(item.id)}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id 
                  ? 'text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/70 hover:text-white transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  smoothScrollTo(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left transition-colors duration-200 text-sm font-medium py-2 px-2 rounded-lg ${
                  activeSection === item.id 
                    ? 'text-white bg-primary/20' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Optimized Animated Lines Component
const AnimatedLines = () => {
  const linesRef = useRef(null);

  useEffect(() => {
    // Add smooth scroll CSS and animated lines styles
    if (!document.getElementById('animated-lines-styles')) {
      const style = document.createElement('style');
      style.id = 'animated-lines-styles';
      style.textContent = `
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
        .animated-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          margin: auto;
          width: 90vw;
          pointer-events: none;
          will-change: transform;
        }
        
        .animated-line {
          position: absolute;
          width: 1px;
          height: 100%;
          top: 0;
          left: 50%;
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
          will-change: transform;
        }

        .animated-line::after {
          content: '';
          display: block;
          position: absolute;
          height: 12vh;
          width: 100%;
          top: -50%;
          left: 0;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(132, 0, 255, 0.6) 50%, rgba(132, 0, 255, 0.8) 100%);
          animation: drop-animation 8s 0s infinite;
          animation-fill-mode: forwards;
          animation-timing-function: ease-in-out;
          will-change: transform;
        }
        
        .animated-line:nth-child(1) {
          margin-left: -25%;
        }
        
        .animated-line:nth-child(1)::after {
          animation-delay: 2s;
        }
        
        .animated-line:nth-child(3) {
          margin-left: 25%;
        }
        
        .animated-line:nth-child(3)::after {
          animation-delay: 2.5s;
        }
        
        @keyframes drop-animation {
          0% {
            top: -50%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 110%;
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div ref={linesRef} className="animated-lines">
      <div className="animated-line"></div>
      <div className="animated-line"></div>
      <div className="animated-line"></div>
    </div>
  );
};

// Optimized Vanta Halo Background Component with performance improvements
const VantaHaloBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Only initialize if not already initialized and element exists
    if (!vantaEffect.current && vantaRef.current) {
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        vantaEffect.current = HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          amplitudeFactor: 0.7, // Slightly reduced for better performance
          xOffset: 0.13,
          yOffset: 0.17,
          size: 0.7, // Reduced for better performance
          baseColor: 0x2a0845,
          backgroundColor: 0x000000
        });
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="relative w-full h-full">
      {children}
    </div>
  );
};

// Optimized Interactive Card Component
const InteractiveCard = ({ children, className = "", delay = 0 }) => {
  const cardRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      if (animationRef.current) animationRef.current.kill();
      animationRef.current = gsap.to(card, {
        rotateX: 2,
        rotateY: 2,
        duration: 0.2,
        ease: "power1.out",
        transformPerspective: 1000
      });
    };

    const handleMouseLeave = () => {
      if (animationRef.current) animationRef.current.kill();
      animationRef.current = gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.2,
        ease: "power1.out"
      });
    };

    // Throttled mouse move for better performance
    let isMoving = false;
    const handleMouseMove = (e) => {
      if (isMoving) return;
      isMoving = true;
      
      requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -3; // Reduced intensity
        const rotateY = ((x - centerX) / centerX) * 3;

        if (animationRef.current) animationRef.current.kill();
        animationRef.current = gsap.to(card, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: "power1.out",
          transformPerspective: 1000
        });
        
        isMoving = false;
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) animationRef.current.kill();
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <ScrollProgressIndicator />
      <SmoothScrollNav />
      <BackToTopButton />
      <VantaHaloBackground>
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-12 max-w-6xl mx-auto">
            {/* Interactive Logo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <InteractiveCard delay={0} className="group">
                <div className="relative p-8 rounded-[20px] bg-[#060010] border border-[#392e4e] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(132,0,255,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Terminal className="h-16 w-16 text-white relative z-10 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300" />
                </div>
              </InteractiveCard>
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
                <p className="text-2xl md:text-3xl text-white/80 font-medium">
                  Master Every Command
                </p>
              </div>
              
              <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                The ultimate collection of command-line tools, scripts, and best practices. 
                From Git to Docker, from Linux to Windows PowerShell - we've got you covered.
              </p>
            </motion.div>

            {/* Interactive Stats Cards */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { number: "2K+", label: "Commands" },
                { number: "50+", label: "Categories" },
                { number: "10K+", label: "Developers" }
              ].map((stat, index) => (
                <InteractiveCard
                  key={index}
                  delay={0.5 + index * 0.1}
                  className="group"
                >
                  <div className="text-center bg-[#060010] border border-[#392e4e] rounded-[20px] p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(132,0,255,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 relative z-10">{stat.number}</div>
                    <div className="text-white/70 text-lg relative z-10">{stat.label}</div>
                  </div>
                </InteractiveCard>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button 
                onClick={() => smoothScrollTo('features')}
                size="lg"
                className="btn-hero text-xl px-12 py-8 h-auto group"
              >
                Explore Features
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => smoothScrollTo('cta')}
                size="lg"
                variant="outline"
                className="btn-ghost text-xl px-12 py-8 h-auto"
              >
                Get Started
                <Rocket className="ml-3 h-6 w-6" />
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

      {/* Features Bento Grid Section */}
      <section id="features" className="py-20 bg-background/30 backdrop-blur-sm">
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
                Explore Our Features
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover powerful tools and resources designed to enhance your command-line experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Terminal className="h-8 w-8" />,
                  title: "Command Library",
                  description: "Extensive collection of CLI commands",
                  label: "Library"
                },
                {
                  icon: <Search className="h-8 w-8" />,
                  title: "Smart Search",
                  description: "Find commands instantly with AI",
                  label: "Search"
                },
                {
                  icon: <GitBranch className="h-8 w-8" />,
                  title: "Categories",
                  description: "Organized command categories for every need",
                  label: "Organization"
                },
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Favorites",
                  description: "Save your most used commands",
                  label: "Bookmarks"
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Trending",
                  description: "Popular commands in community",
                  label: "Popular"
                },
                {
                  icon: <User className="h-8 w-8" />,
                  title: "Profile",
                  description: "Track your command usage",
                  label: "Analytics"
                }
              ].map((feature, index) => (
                <InteractiveCard
                  key={index}
                  delay={0.3 + index * 0.1}
                  className="group"
                >
                  <div className="relative h-full bg-[#060010] border border-[#392e4e] rounded-[20px] p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(132,0,255,0.2)] flex flex-col justify-between min-h-[200px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="flex justify-between items-start relative z-10">
                      <span className="text-white/80 text-sm font-medium">{feature.label}</span>
                      <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400 group-hover:bg-purple-600/40 group-hover:scale-110 transition-all duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <div className="space-y-2 relative z-10">
                      <h3 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section id="advanced" className="py-20 bg-background/50 backdrop-blur-sm relative overflow-hidden">
        <AnimatedLines />
        <div className="container mx-auto px-4 relative z-10">
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
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From basic commands to advanced scripting, CMDHub provides comprehensive resources for developers at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: <GitBranch className="h-8 w-8" />,
                title: "Version Control",
                description: "Master Git commands, workflows, and best practices for collaborative development.",
                label: "Git"
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "Database Operations",
                description: "SQL queries, NoSQL commands, and database administration tools at your fingertips.",
                label: "Database"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Security Tools",
                description: "Essential security commands, vulnerability scanning, and system hardening techniques.",
                label: "Security"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "System Admin",
                description: "Server management, user administration, and system monitoring commands.",
                label: "Admin"
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "DevOps & CI/CD",
                description: "Docker, Kubernetes, Jenkins, and deployment automation commands.",
                label: "DevOps"
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Development Tools",
                description: "Package managers, build tools, testing frameworks, and development utilities.",
                label: "Tools"
              }
            ].map((feature, index) => (
              <InteractiveCard
                key={index}
                delay={index * 0.1}
                className="group"
              >
                <div className="relative h-full bg-[#060010] border border-[#392e4e] rounded-[20px] p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(132,0,255,0.2)] flex flex-col justify-between min-h-[240px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-white/80 text-sm font-medium">{feature.label}</span>
                    <div className="p-3 rounded-lg bg-purple-600/20 text-purple-400 group-hover:bg-purple-600/40 group-hover:scale-110 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-3 relative z-10">
                    <h3 className="text-white font-semibold text-xl group-hover:text-purple-300 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 relative overflow-hidden">
        <AnimatedLines />
        <div className="container mx-auto px-4 relative z-10">
          <InteractiveCard
            delay={0}
            className="max-w-4xl mx-auto group"
          >
            <div className="relative bg-[#060010] border border-[#392e4e] rounded-[20px] p-12 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(132,0,255,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="text-center space-y-8 relative z-10">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-bold">
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Ready to Level Up?
                    </span>
                  </h2>
                  <p className="text-xl md:text-2xl text-white/70">
                    Join thousands of developers who've mastered their command-line skills with CMDHub.
                  </p>
                </div>
                
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
                    onClick={() => smoothScrollTo('hero')}
                    size="lg"
                    variant="outline"
                    className="btn-ghost text-xl px-12 py-8 h-auto"
                  >
                    Back to Top
                    <ArrowRight className="ml-3 h-6 w-6 rotate-[-90deg]" />
                  </Button>
                </div>

                {/* Stats inside CTA */}
                <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-white/10">
                  {[
                    { number: "99%", label: "Satisfaction" },
                    { number: "24/7", label: "Support" },
                    { number: "Free", label: "Forever" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </InteractiveCard>
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
        </div>
      </section>
      </VantaHaloBackground>
    </div>
  );
};

export default Landing;