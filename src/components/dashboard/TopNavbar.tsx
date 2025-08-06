import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/dashboard/ThemeToggle";

interface TopNavbarProps {
  onMenuClick: () => void;
  title?: string;
}

export function TopNavbar({ onMenuClick, title = "Dashboard" }: TopNavbarProps) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-6 shadow-card">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Bars3Icon className="w-5 h-5" />
        </Button>
        
        <div>
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          <p className="text-sm text-muted-foreground">
            Welcome back! Here's what's happening.
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="icon" className="relative">
          <BellIcon className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full text-xs flex items-center justify-center">
            3
          </span>
        </Button>
        
        <ThemeToggle />
        
        <div className="w-8 h-8 bg-gradient-primary rounded-full cursor-pointer hover:scale-105 transition-transform"></div>
      </div>
    </header>
  );
}