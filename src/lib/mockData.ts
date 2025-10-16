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
// Seed templates per category. These are cycled to generate the requested counts.
const seedByCategory: Record<string, Array<Pick<Command, "title" | "command" | "description" | "tags">>> = {
  git: [
    { title: "Clone Repository", command: "git clone <repo>", description: "Clone a remote repository to local.", tags: ["clone", "repo", "remote"] },
    { title: "Initialize Repository", command: "git init", description: "Create an empty Git repository.", tags: ["init", "repo"] },
    { title: "Stage Changes", command: "git add .", description: "Stage all modified and new files.", tags: ["stage", "add", "index"] },
    { title: "Commit", command: "git commit -m \"message\"", description: "Commit staged changes with a message.", tags: ["commit", "message"] },
    { title: "Push to Remote", command: "git push origin main", description: "Push local commits to remote branch.", tags: ["push", "remote", "branch"] },
    { title: "Pull Latest", command: "git pull", description: "Fetch and merge changes from remote.", tags: ["pull", "fetch", "merge"] },
    { title: "Create Branch", command: "git branch feature/x", description: "Create a new branch.", tags: ["branch", "feature"] },
    { title: "Switch Branch", command: "git checkout main", description: "Switch to another branch.", tags: ["checkout", "switch"] },
    { title: "Merge Branch", command: "git merge feature/x", description: "Merge a branch into current.", tags: ["merge", "branch"] },
    { title: "View Log", command: "git log --oneline --graph --decorate", description: "Compact commit history graph.", tags: ["log", "history", "graph"] },
    { title: "Stash Changes", command: "git stash -u", description: "Temporarily store modifications.", tags: ["stash", "work-in-progress"] },
    { title: "Show Status", command: "git status", description: "Show working tree status.", tags: ["status", "changes"] },
    { title: "Rebase Branch", command: "git rebase main", description: "Replay commits onto another base.", tags: ["rebase", "history"] },
    { title: "Reset File", command: "git reset HEAD~1", description: "Unstage the last commit.", tags: ["reset", "unstage"] },
    { title: "Revert Commit", command: "git revert <hash>", description: "Create a new commit reversing changes.", tags: ["revert", "undo"] },
  ],
  docker: [
    { title: "List Containers", command: "docker ps -a", description: "List running and stopped containers.", tags: ["containers", "list"] },
    { title: "Build Image", command: "docker build -t <image> .", description: "Build an image from Dockerfile.", tags: ["build", "image"] },
    { title: "Run Container", command: "docker run -d -p 3000:3000 <image>", description: "Run container detached with port mapping.", tags: ["run", "port", "detached"] },
    { title: "Container Logs", command: "docker logs -f <container>", description: "Tail container logs.", tags: ["logs", "tail"] },
    { title: "Exec Shell", command: "docker exec -it <container> sh", description: "Open interactive shell in container.", tags: ["exec", "shell"] },
    { title: "List Images", command: "docker images", description: "List local images.", tags: ["images", "list"] },
    { title: "Remove Image", command: "docker rmi <image>", description: "Remove an image.", tags: ["remove", "image"] },
    { title: "Prune", command: "docker system prune -f", description: "Remove unused data.", tags: ["prune", "cleanup"] },
    { title: "Compose Up", command: "docker compose up -d", description: "Start services with Compose.", tags: ["compose", "up"] },
    { title: "Compose Down", command: "docker compose down", description: "Stop and remove Compose resources.", tags: ["compose", "down"] },
  ],
  npm: [
    { title: "Install Package", command: "npm install <pkg>", description: "Install a package and save to dependencies.", tags: ["install", "deps"] },
    { title: "Remove Package", command: "npm uninstall <pkg>", description: "Uninstall a package.", tags: ["uninstall", "remove"] },
    { title: "Run Script", command: "npm run <script>", description: "Run an npm script.", tags: ["script", "run"] },
    { title: "Audit", command: "npm audit", description: "Scan for vulnerabilities.", tags: ["audit", "security"] },
    { title: "Update", command: "npm update", description: "Update dependencies.", tags: ["update", "deps"] },
    { title: "Init", command: "npm init -y", description: "Create a package.json quickly.", tags: ["init", "package.json"] },
    { title: "List", command: "npm ls --depth=0", description: "List top-level dependencies.", tags: ["list", "deps"] },
    { title: "Outdated", command: "npm outdated", description: "Show outdated packages.", tags: ["outdated", "versions"] },
    { title: "Cache Clean", command: "npm cache clean --force", description: "Clean npm cache.", tags: ["cache", "clean"] },
  ],
  linux: [
    { title: "List Files", command: "ls -la", description: "List files with details.", tags: ["ls", "list", "permissions"] },
    { title: "Change Directory", command: "cd <dir>", description: "Change current directory.", tags: ["cd", "directory"] },
    { title: "Make Directory", command: "mkdir <dir>", description: "Create a new directory.", tags: ["mkdir", "folder"] },
    { title: "Remove", command: "rm -rf <path>", description: "Remove files/directories recursively.", tags: ["rm", "delete"] },
    { title: "Move/Rename", command: "mv <src> <dest>", description: "Move or rename files.", tags: ["mv", "rename"] },
    { title: "Copy", command: "cp -r <src> <dest>", description: "Copy files/directories.", tags: ["cp", "copy"] },
    { title: "Find Files", command: "find . -name \"*.log\"", description: "Find files by pattern.", tags: ["find", "search"] },
    { title: "Search Text", command: "grep -R \"error\" .", description: "Search recursively for text.", tags: ["grep", "search"] },
    { title: "Permissions", command: "chmod +x <file>", description: "Change file mode bits.", tags: ["chmod", "permissions"] },
    { title: "Ownership", command: "chown user:group <file>", description: "Change file owner and group.", tags: ["chown", "owner"] },
    { title: "Tar Archive", command: "tar -czf archive.tgz <dir>", description: "Create tar.gz archive.", tags: ["tar", "archive"] },
    { title: "Unzip", command: "unzip <file>.zip", description: "Extract a zip archive.", tags: ["unzip", "archive"] },
    { title: "Systemctl", command: "systemctl status <service>", description: "Service status on systemd.", tags: ["systemctl", "service"] },
    { title: "Journalctl", command: "journalctl -u <service> --since today", description: "View logs for a service.", tags: ["journalctl", "logs"] },
    { title: "Process List", command: "ps aux | grep <name>", description: "List processes.", tags: ["ps", "process"] },
    { title: "Top", command: "top", description: "Show running processes.", tags: ["top", "process"] },
    { title: "Disk Usage", command: "du -sh *", description: "Summarize directory sizes.", tags: ["du", "disk"] },
    { title: "Free Memory", command: "free -h", description: "Display memory usage.", tags: ["free", "memory"] },
    { title: "Curl", command: "curl -I https://example.com", description: "Fetch headers from URL.", tags: ["curl", "http"] },
    { title: "Wget", command: "wget <url>", description: "Download files from the web.", tags: ["wget", "download"] },
  ],
  aws: [
    { title: "Configure", command: "aws configure", description: "Set up AWS credentials and default region.", tags: ["configure", "credentials"] },
    { title: "Who Am I", command: "aws sts get-caller-identity", description: "Show AWS identity.", tags: ["sts", "identity"] },
    { title: "S3 List", command: "aws s3 ls", description: "List S3 buckets.", tags: ["s3", "list"] },
    { title: "S3 Sync", command: "aws s3 sync . s3://bucket", description: "Sync local folder to S3.", tags: ["s3", "sync"] },
    { title: "EC2 Describe", command: "aws ec2 describe-instances", description: "Describe EC2 instances.", tags: ["ec2", "instances"] },
    { title: "EC2 Start", command: "aws ec2 start-instances --instance-ids <id>", description: "Start an EC2 instance.", tags: ["ec2", "start"] },
    { title: "EC2 Stop", command: "aws ec2 stop-instances --instance-ids <id>", description: "Stop an EC2 instance.", tags: ["ec2", "stop"] },
    { title: "Lambda List", command: "aws lambda list-functions", description: "List Lambda functions.", tags: ["lambda", "list"] },
    { title: "Logs Filter", command: "aws logs filter-log-events --log-group-name <name>", description: "Filter CloudWatch logs.", tags: ["logs", "cloudwatch"] },
  ],
  kubernetes: [
    { title: "Get Pods", command: "kubectl get pods", description: "List pods in current namespace.", tags: ["kubectl", "pods"] },
    { title: "Describe Pod", command: "kubectl describe pod <name>", description: "Describe a pod.", tags: ["kubectl", "describe"] },
    { title: "Apply Config", command: "kubectl apply -f manifest.yaml", description: "Apply a manifest file.", tags: ["apply", "manifest"] },
    { title: "Logs", command: "kubectl logs -f <pod>", description: "Tail logs of a pod.", tags: ["logs", "pods"] },
    { title: "Exec", command: "kubectl exec -it <pod> -- sh", description: "Exec into a running pod.", tags: ["exec", "shell"] },
    { title: "Get Services", command: "kubectl get svc", description: "List services.", tags: ["services", "cluster-ip"] },
    { title: "Scale Deployment", command: "kubectl scale deploy <name> --replicas=3", description: "Scale a deployment.", tags: ["scale", "deployment"] },
    { title: "Rollout Status", command: "kubectl rollout status deploy/<name>", description: "Check rollout status.", tags: ["rollout", "status"] },
    { title: "Port Forward", command: "kubectl port-forward svc/<name> 8080:80", description: "Forward a local port.", tags: ["port-forward", "svc"] },
  ],
};

function pick<T>(arr: T[], i: number): T {
  return arr[i % arr.length];
}

function randomUsage(base: number, spread: number): number {
  // Simple bounded random usage for mock trending
  const v = Math.round(base + Math.random() * spread);
  return Math.max(50, v);
}

let idCounter = 1;

function generateCommandsForCategory(catId: string, count: number): Command[] {
  const seeds = seedByCategory[catId] ?? [
    { title: `${catId.toUpperCase()} Command`, command: `${catId} --help`, description: `Common ${catId} command.`, tags: [catId, "help"] },
  ];
  const list: Command[] = [];
  for (let i = 0; i < count; i++) {
    const s = pick(seeds, i);
    list.push({
      id: String(idCounter++),
      title: seeds.length > 1 ? `${s.title}${i >= seeds.length ? ` #${Math.floor(i / seeds.length)}` : ""}` : `${s.title} #${i + 1}`,
      command: seeds.length > 1 ? s.command : `${s.command} #${i + 1}`,
      description: s.description,
      category: catId,
      tags: s.tags,
      usage: randomUsage(400 + i * 3, 1200),
      isFavorite: i % 10 === 0,
    });
  }
  return list;
}

// Build the full commands list according to the category declared commandCount
export const commands: Command[] = categories.flatMap((cat) =>
  generateCommandsForCategory(cat.id, cat.commandCount)
);

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