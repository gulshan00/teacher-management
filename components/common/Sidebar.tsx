'use client';
import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Menu,
  X,
} from 'lucide-react';
import { navigationItems } from './SidebarNavItems';

interface SidebarProps {
  activeNav: string;
  setActiveNav: (id: string) => void;
  isTeacherExpanded: boolean;
  toggleTeacherExpanded: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeNav,
  setActiveNav,
  isTeacherExpanded,
  toggleTeacherExpanded,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden p-4 bg-slate-800 text-white flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-6 h-6 text-white" />
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Panel */}
      <div
        className={`${
          sidebarOpen ? 'block' : 'hidden'
        } lg:block fixed lg:static z-50 top-0 left-0 h-full w-64 bg-slate-700 text-white flex flex-col transition-all`}
      >
        {/* Header / Logo */}
        <div className="p-6 border-b border-slate-600 hidden lg:flex">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Dashboard</h1>
              <p className="text-sm text-slate-400">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() =>
                    item.id === 'teacher'
                      ? toggleTeacherExpanded()
                      : setActiveNav(item.id)
                  }
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeNav === item.id
                      ? 'bg-slate-600 text-white'
                      : 'text-slate-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {item.expandable && (
                    <div className="flex-shrink-0">
                      {isTeacherExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  )}
                </button>

                {item.expandable && isTeacherExpanded && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.children?.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => setActiveNav(child.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left transition-colors ${
                          activeNav === child.id
                            ? 'bg-slate-600 text-white'
                            : 'text-slate-400 hover:bg-slate-600 hover:text-white'
                        }`}
                      >
                        <child.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{child.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
