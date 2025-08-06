import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <Sidebar isOpen={true} setIsOpen={() => {}} />
        </div>
        
        {/* Mobile Sidebar */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNavbar 
            onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
            title={title}
          />
          
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="p-4 lg:p-6 space-y-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}