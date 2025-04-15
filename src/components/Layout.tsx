
import React, { useState } from 'react';
import { 
  ActivitySquare, 
  BarChart3, 
  Calendar, 
  Dumbbell, 
  Home, 
  Menu, 
  Settings, 
  X 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-sidebar fixed inset-y-0 left-0 z-50 flex h-full flex-col border-r transition-all duration-300 ease-in-out",
          sidebarOpen ? "w-64" : "w-16"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <h1 
            className={cn(
              "font-bold text-xl text-fitness-purple transition-opacity duration-200",
              sidebarOpen ? "opacity-100" : "opacity-0"
            )}
          >
            FitTrack
          </h1>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="text-fitness-purple hover:bg-fitness-light-purple/20"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <ul className="space-y-2 px-2">
            {[
              { label: 'Dashboard', icon: Home, href: '/' },
              { label: 'Workouts', icon: Dumbbell, href: '/workouts' },
              { label: 'Activities', icon: ActivitySquare, href: '/activities' },
              { label: 'Calendar', icon: Calendar, href: '/calendar' },
              { label: 'Progress', icon: BarChart3, href: '/progress' },
              { label: 'Settings', icon: Settings, href: '/settings' },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-fitness-light-purple/20 text-gray-700 hover:text-fitness-purple transition-colors"
                >
                  <item.icon size={20} />
                  <span className={cn(
                    "transition-opacity duration-200",
                    sidebarOpen ? "opacity-100" : "opacity-0"
                  )}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        sidebarOpen ? "ml-64" : "ml-16"
      )}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
