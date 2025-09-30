"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Search,
  Terminal,
  Shield,
  Database,
  Tag
} from "lucide-react";
import { Command, commands as initialCommands, categories } from "@/lib/mockData";

const Admin = () => {
  const [commands, setCommands] = useState(initialCommands);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingCommand, setEditingCommand] = useState<Command | null>(null);
  const [newCommand, setNewCommand] = useState({
    title: "",
    description: "",
    command: "",
    category: "",
    tags: [] as string[],
    tagInput: ""
  });
  const { toast } = useToast();

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleAddCommand = () => {
    if (!newCommand.title || !newCommand.description || !newCommand.command) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const command: Command = {
      id: `cmd-${Date.now()}`,
      title: newCommand.title,
      description: newCommand.description,
      command: newCommand.command,
      category: newCommand.category || "general",
      tags: newCommand.tags,
      usage: 0,
      isFavorite: false,
      rank: commands.length + 1,
    };

    setCommands(prev => [...prev, command]);
    setNewCommand({
      title: "",
      description: "",
      command: "",
      category: "",
      tags: [],
      tagInput: ""
    });
    setIsAddDialogOpen(false);
    
    toast({
      title: "Success",
      description: "Command added successfully",
    });
  };

  const handleEditCommand = (command: Command) => {
    setEditingCommand(command);
    setIsEditDialogOpen(true);
  };

  const handleUpdateCommand = () => {
    if (!editingCommand) return;

    setCommands(prev => prev.map(cmd => 
      cmd.id === editingCommand.id ? editingCommand : cmd
    ));
    setEditingCommand(null);
    setIsEditDialogOpen(false);
    
    toast({
      title: "Success",
      description: "Command updated successfully",
    });
  };

  const handleDeleteCommand = (commandId: string) => {
    setCommands(prev => prev.filter(cmd => cmd.id !== commandId));
    toast({
      title: "Success",
      description: "Command deleted successfully",
    });
  };

  const addTag = (tags: string[], tagInput: string, setTags: (tags: string[]) => void, setTagInput: (input: string) => void) => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tags: string[], tagToRemove: string, setTags: (tags: string[]) => void) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-8 space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 py-12"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Admin Panel
                </h1>
              </div>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                Manage commands, categories, and system settings
              </p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <Terminal className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{commands.length}</p>
                  <p className="text-slate-400 text-sm">Total Commands</p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{categories.length}</p>
                  <p className="text-slate-400 text-sm">Categories</p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <Tag className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    {Array.from(new Set(commands.flatMap(cmd => cmd.tags))).length}
                  </p>
                  <p className="text-slate-400 text-sm">Unique Tags</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 justify-between items-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search commands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400"
              />
            </div>
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Command
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Command</DialogTitle>
                  <DialogDescription className="text-slate-400">
                    Create a new command with all the necessary details.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">Title</Label>
                    <Input
                      id="title"
                      value={newCommand.title}
                      onChange={(e) => setNewCommand(prev => ({ ...prev, title: e.target.value }))}
                      className="col-span-3 bg-slate-800 border-slate-600"
                      placeholder="Command title"
                    />
                  </div>
                  
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">Description</Label>
                    <Textarea
                      id="description"
                      value={newCommand.description}
                      onChange={(e) => setNewCommand(prev => ({ ...prev, description: e.target.value }))}
                      className="col-span-3 bg-slate-800 border-slate-600"
                      placeholder="Command description"
                    />
                  </div>
                  
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="command" className="text-right">Command</Label>
                    <Input
                      id="command"
                      value={newCommand.command}
                      onChange={(e) => setNewCommand(prev => ({ ...prev, command: e.target.value }))}
                      className="col-span-3 bg-slate-800 border-slate-600 font-mono"
                      placeholder="actual command"
                    />
                  </div>
                  
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">Category</Label>
                    <select
                      id="category"
                      value={newCommand.category}
                      onChange={(e) => setNewCommand(prev => ({ ...prev, category: e.target.value }))}
                      className="col-span-3 bg-slate-800 border border-slate-600 rounded-md px-3 py-2"
                    >
                      <option value="">Select category</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="tags" className="text-right pt-2">Tags</Label>
                    <div className="col-span-3 space-y-2">
                      <div className="flex gap-2">
                        <Input
                          id="tags"
                          value={newCommand.tagInput}
                          onChange={(e) => setNewCommand(prev => ({ ...prev, tagInput: e.target.value }))}
                          className="bg-slate-800 border-slate-600"
                          placeholder="Add a tag"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              addTag(newCommand.tags, newCommand.tagInput, 
                                (tags) => setNewCommand(prev => ({ ...prev, tags })), 
                                (tagInput) => setNewCommand(prev => ({ ...prev, tagInput })));
                            }
                          }}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => addTag(newCommand.tags, newCommand.tagInput, 
                            (tags) => setNewCommand(prev => ({ ...prev, tags })), 
                            (tagInput) => setNewCommand(prev => ({ ...prev, tagInput })))}
                        >
                          Add
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {newCommand.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-blue-500/20 text-blue-300">
                            {tag}
                            <X 
                              className="h-3 w-3 ml-1 cursor-pointer" 
                              onClick={() => removeTag(newCommand.tags, tag, 
                                (tags) => setNewCommand(prev => ({ ...prev, tags })))}
                            />
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddCommand} className="bg-blue-600 hover:bg-blue-700">
                    <Save className="h-4 w-4 mr-2" />
                    Add Command
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Commands List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Commands ({filteredCommands.length})</h2>
            
            <div className="grid gap-4">
              {filteredCommands.map((command, index) => (
                <motion.div
                  key={command.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold text-white">{command.title}</h3>
                        <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs">
                          {categories.find(cat => cat.id === command.category)?.name || command.category}
                        </Badge>
                      </div>
                      
                      <p className="text-slate-300 text-sm">{command.description}</p>
                      
                      <div className="bg-slate-900/50 text-green-400 p-3 rounded-xl text-sm font-mono overflow-x-auto border border-slate-700/50">
                        <code>{command.command}</code>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {command.tags.map(tag => (
                          <Badge key={tag} className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="text-xs text-slate-400">
                        Used {command.usage.toLocaleString()} times
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditCommand(command)}
                        className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteCommand(command.id)}
                        className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredCommands.length === 0 && (
              <div className="text-center py-12 text-slate-400">
                <Terminal className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No commands found matching your search.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Command</DialogTitle>
            <DialogDescription className="text-slate-400">
              Update the command details.
            </DialogDescription>
          </DialogHeader>
          
          {editingCommand && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-title" className="text-right">Title</Label>
                <Input
                  id="edit-title"
                  value={editingCommand.title}
                  onChange={(e) => setEditingCommand(prev => prev ? { ...prev, title: e.target.value } : null)}
                  className="col-span-3 bg-slate-800 border-slate-600"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-description" className="text-right">Description</Label>
                <Textarea
                  id="edit-description"
                  value={editingCommand.description}
                  onChange={(e) => setEditingCommand(prev => prev ? { ...prev, description: e.target.value } : null)}
                  className="col-span-3 bg-slate-800 border-slate-600"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-command" className="text-right">Command</Label>
                <Input
                  id="edit-command"
                  value={editingCommand.command}
                  onChange={(e) => setEditingCommand(prev => prev ? { ...prev, command: e.target.value } : null)}
                  className="col-span-3 bg-slate-800 border-slate-600 font-mono"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-category" className="text-right">Category</Label>
                <select
                  id="edit-category"
                  value={editingCommand.category}
                  onChange={(e) => setEditingCommand(prev => prev ? { ...prev, category: e.target.value } : null)}
                  className="col-span-3 bg-slate-800 border border-slate-600 rounded-md px-3 py-2"
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right pt-2">Tags</Label>
                <div className="col-span-3">
                  <div className="flex flex-wrap gap-2">
                    {editingCommand.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-blue-500/20 text-blue-300">
                        {tag}
                        <X 
                          className="h-3 w-3 ml-1 cursor-pointer" 
                          onClick={() => setEditingCommand(prev => prev ? {
                            ...prev, 
                            tags: prev.tags.filter(t => t !== tag)
                          } : null)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateCommand} className="bg-blue-600 hover:bg-blue-700">
              <Save className="h-4 w-4 mr-2" />
              Update Command
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Admin;