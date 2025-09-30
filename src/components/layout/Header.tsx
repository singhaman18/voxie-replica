import { Link, useLocation } from "react-router-dom";
import { Terminal } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const navigationItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Categories", href: "/categories" },
    { name: "Favorites", href: "/favorites" },
    { name: "Trending", href: "/trending" },
    { name: "Profile", href: "/profile" },
    { name: "Admin", href: "/admin" }
  ];

  const authItems = [
    { name: "Login", href: "/login" },
    { name: "Signup", href: "/signup" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="p-2 rounded-lg bg-gradient-primary group-hover:animate-glow-pulse transition-all duration-300">
            <Terminal className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CMDHub
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-link text-sm font-medium ${
                isActive(item.href) ? "text-primary active" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        

        <div className="flex items-center space-x-4">
          {authItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-link text-sm font-medium ${
                isActive(item.href) ? "text-primary active" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;