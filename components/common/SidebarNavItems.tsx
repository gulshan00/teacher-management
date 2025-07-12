// components/common/SidebarNavItems.tsx
import {
  Home,
  Users,
  UserPlus,
  UserCheck,
  UserX,
  Building2,
  Calendar,
  LogOut
} from 'lucide-react';

export const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, href: '#' },
  {
    id: 'teacher',
    label: 'Teacher Management',
    icon: Users,
    expandable: true,
    children: [
      { id: 'view-teachers', label: 'View All Teachers', icon: Users },
      { id: 'add-teacher', label: 'Add New Teacher', icon: UserPlus },
      { id: 'active-teachers', label: 'Active Teachers', icon: UserCheck },
      { id: 'inactive-teachers', label: 'Inactive Teachers', icon: UserX },
      { id: 'departments', label: 'Departments', icon: Building2 }
    ]
  },
  { id: 'schedule', label: 'Schedule', icon: Calendar, href: '#' },
  { id: 'logout', label: 'Logout', icon: LogOut, href: '#' },
];
