import { Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="p-1.5 rounded-md bg-gradient-primary">
              <Terminal className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CMDHub
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © CMDHub 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;