export interface Command {
  id: string;
  title: string;
  command: string;
  description: string;
  category: string;
  tags: string[];
  usage: number;
  isFavorite?: boolean;
  rank?: number;
  trend?: "up" | "stable" | "down";
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  commandCount: number;
  color: string;
}

export const categories: Category[] = [
  {
    id: "git",
    name: "Git",
    description: "Version control commands for Git repositories",
    icon: "GitBranch",
    commandCount: 45,
    color: "text-orange-400"
  },
  {
    id: "docker",
    name: "Docker",
    description: "Container management and orchestration",
    icon: "Container",
    commandCount: 32,
    color: "text-blue-400"
  },
  {
    id: "npm",
    name: "NPM",
    description: "Node.js package manager commands",
    icon: "Package",
    commandCount: 28,
    color: "text-red-400"
  },
  {
    id: "linux",
    name: "Linux",
    description: "System administration and file operations",
    icon: "Terminal",
    commandCount: 67,
    color: "text-green-400"
  },
  {
    id: "aws",
    name: "AWS CLI",
    description: "Amazon Web Services command line interface",
    icon: "Cloud",
    commandCount: 24,
    color: "text-yellow-400"
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    description: "Container orchestration platform",
    icon: "Network",
    commandCount: 19,
    color: "text-purple-400"
  }
];

export const commands: Command[] = [
  {
    id: "1",
    title: "Clone Repository",
    command: "git clone <repository-url>",
    description: "Creates a local copy of a remote repository",
    category: "git",
    tags: ["clone", "repository", "remote"],
    usage: 1250,
    isFavorite: true
  },
  {
    id: "2", 
    title: "Commit Changes",
    command: "git commit -m \"commit message\"",
    description: "Records changes to the repository with a descriptive message",
    category: "git",
    tags: ["commit", "message", "changes"],
    usage: 1180,
    isFavorite: false
  },
  {
    id: "3",
    title: "List Containers",
    command: "docker ps -a",
    description: "Shows all Docker containers (running and stopped)",
    category: "docker", 
    tags: ["containers", "list", "status"],
    usage: 890,
    isFavorite: true
  },
  {
    id: "4",
    title: "Install Package",
    command: "npm install <package-name>",
    description: "Installs a package and adds it to dependencies",
    category: "npm",
    tags: ["install", "package", "dependencies"],
    usage: 765,
    isFavorite: false
  },
  {
    id: "5",
    title: "List Files Detailed",
    command: "ls -la",
    description: "Lists all files and directories with detailed information",
    category: "linux",
    tags: ["list", "files", "detailed", "permissions"],
    usage: 923,
    isFavorite: true
  },
  {
    id: "6",
    title: "Build Docker Image",
    command: "docker build -t <image-name> .",
    description: "Builds a Docker image from the current directory's Dockerfile",
    category: "docker",
    tags: ["build", "image", "dockerfile"],
    usage: 654,
    isFavorite: false
  },
  {
    id: "7",
    title: "Push to Remote",
    command: "git push origin main",
    description: "Pushes local commits to the main branch on remote repository",
    category: "git",
    tags: ["push", "remote", "main", "branch"],
    usage: 1050,
    isFavorite: true
  },
  {
    id: "8",
    title: "Find Files by Name",
    command: "find . -name \"*.js\"",
    description: "Searches for files with .js extension in current directory and subdirectories",
    category: "linux",
    tags: ["find", "search", "files", "javascript"],
    usage: 445,
    isFavorite: false
  },
  {
    id: "9",
    title: "Run Container",
    command: "docker run -d -p 3000:3000 <image-name>",
    description: "Runs a Docker container in detached mode with port mapping",
    category: "docker",
    tags: ["run", "container", "port", "detached"],
    usage: 578,
    isFavorite: false
  },
  {
    id: "10",
    title: "Check Git Status",
    command: "git status",
    description: "Shows the working tree status and staged changes",
    category: "git",
    tags: ["status", "changes", "staging"],
    usage: 1340,
    isFavorite: true
  }
];

export const trendingCommands = commands
  .sort((a, b) => b.usage - a.usage)
  .slice(0, 10)
  .map((cmd, index) => ({
    ...cmd,
    rank: index + 1,
    trend: (index < 3 ? "up" : index < 6 ? "stable" : "down") as "up" | "stable" | "down"
  }));

export const favoriteCommands = commands.filter(cmd => cmd.isFavorite);

export const recentlyViewed = commands.slice(0, 5);

export const mockUser = {
  username: "developerX",
  email: "developer@cmdhub.com",
  avatar: "/placeholder.svg",
  joinDate: "2024-01-15",
  stats: {
    totalCommands: 1247,
    favorites: favoriteCommands.length,
    recentlyViewed: recentlyViewed.length,
    commandsShared: 23
  }
};

export const getCommandsByCategory = (categoryId: string) => {
  return commands.filter(cmd => cmd.category === categoryId);
};

export const getCommandById = (id: string) => {
  return commands.find(cmd => cmd.id === id);
};

export const getCategoryById = (id: string) => {
  return categories.find(cat => cat.id === id);
};