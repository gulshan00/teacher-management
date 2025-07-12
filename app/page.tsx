'use client';
import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Sidebar from '@/components/common/Sidebar';
import ViewTeachers from '@/components/teacher/ViewTeachers';
import AddNewTeacher from '@/components/teacher/AddNewTeacher';
import ActiveTeachers from '@/components/teacher/ActiveTeachers';
import InactiveTeachers from '@/components/teacher/InactiveTeachers';
import Departments from '@/components/teacher/Departments';
import Schedule from '@/components/teacher/Schedule';
import Dashboard from '@/components/teacher/Dashboard';

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [isTeacherExpanded, setIsTeacherExpanded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeNav) {
      case 'dashboard':
        return <Dashboard />;
      case 'view-teachers':
        return <ViewTeachers />;
      case 'add-teacher':
        return <AddNewTeacher />;
      case 'active-teachers':
        return <ActiveTeachers />;
      case 'inactive-teachers':
        return <InactiveTeachers />;
      case 'departments':
        return <Departments />;
      case 'schedule':
        return <Schedule />;
      default:
        return <div className="p-6">Page not found.</div>;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 relative">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        isTeacherExpanded={isTeacherExpanded}
        toggleTeacherExpanded={() => setIsTeacherExpanded(!isTeacherExpanded)}
      />

      <div className="flex flex-col flex-1 w-full">
        <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

