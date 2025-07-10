



// 'use client';

// import React, { useState } from 'react';
// import Navbar from '@/components/common/Navbar';
// import Sidebar from '@/components/common/Sidebar';
// import ViewTeachers from '@/components/teacher/ViewTeachers';
// import {
//   BarChart3,
//   PieChart,
//   Activity,
//   Calendar,
//   Users,
//   BookOpen,
//   GraduationCap,
// } from 'lucide-react';

// export default function DashboardPage() {
//   const [activeNav, setActiveNav] = useState('home');
//   const [isTeacherExpanded, setIsTeacherExpanded] = useState(false);

//   const stats = [
//     { title: 'Total Students', value: '1,234', change: '+12%', icon: GraduationCap, color: 'bg-blue-500' },
//     { title: 'Total Teachers', value: '89', change: '+3%', icon: Users, color: 'bg-green-500' },
//     { title: 'Total Courses', value: '45', change: '+8%', icon: BookOpen, color: 'bg-purple-500' },
//     { title: 'Active Sessions', value: '28', change: '+15%', icon: Activity, color: 'bg-orange-500' },
//   ];

//   const recentActivities = [
//     { id: 1, type: 'teacher', message: 'John Smith added a new assignment', time: '2 hours ago' },
//     { id: 2, type: 'student', message: 'Sarah Johnson submitted homework', time: '3 hours ago' },
//     { id: 3, type: 'course', message: 'New course \"Advanced Physics\" created', time: '5 hours ago' },
//     { id: 4, type: 'system', message: 'System maintenance completed', time: '1 day ago' },
//   ];

//   const upcomingEvents = [
//     { id: 1, title: 'Parent-Teacher Meeting', date: '2024-07-15', time: '10:00 AM' },
//     { id: 2, title: 'Science Fair', date: '2024-07-20', time: '2:00 PM' },
//     { id: 3, title: 'Sports Day', date: '2024-07-25', time: '9:00 AM' },
//   ];

//   const renderContent = () => {
//     switch (activeNav) {
//       case 'home':
//         return (
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {stats.map((stat, index) => (
//                 <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">{stat.title}</p>
//                       <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
//                       <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
//                     </div>
//                     <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
//                       <stat.icon className="w-6 h-6 text-white" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Performance</h3>
//                 <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
//                   <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-2" />
//                   <p className="text-gray-500">Chart visualization would go here</p>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Distribution</h3>
//                 <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
//                   <PieChart className="w-16 h-16 text-gray-400 mx-auto mb-2" />
//                   <p className="text-gray-500">Pie chart visualization would go here</p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
//                 <div className="space-y-4">
//                   {recentActivities.map((activity) => (
//                     <div key={activity.id} className="flex items-start space-x-3">
//                       <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
//                       <div className="flex-1">
//                         <p className="text-sm text-gray-900">{activity.message}</p>
//                         <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
//                 <div className="space-y-4">
//                   {upcomingEvents.map((event) => (
//                     <div key={event.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                       <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
//                         <Calendar className="w-5 h-5 text-purple-600" />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-sm font-medium text-gray-900">{event.title}</p>
//                         <p className="text-xs text-gray-500">{event.date} at {event.time}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'view-teachers':
//         return <ViewTeachers />;
//       // case 'add-teacher':
//       //   return <AddTeacherPage />;
//       // case 'active-teachers':
//       //   return <ActiveTeachersPage />;
//       // case 'inactive-teachers':
//       //   return <InactiveTeachersPage />;
//       // case 'departments':
//       //   return <DepartmentsPage />;
//       // case 'schedule':
//       //   return <SchedulePage />;

//       default:
//         return (
//           <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
//               <p className="text-gray-600">The page you are trying to access does not exist.</p>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar
//         activeNav={activeNav}
//         setActiveNav={setActiveNav}
//         isTeacherExpanded={isTeacherExpanded}
//         toggleTeacherExpanded={() => setIsTeacherExpanded(!isTeacherExpanded)}
//       />
//       <div className="flex-1 flex flex-col">
//         <Navbar />
//         <main className="flex-1 p-6">
//           {renderContent()}
//         </main>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import React, { useState } from 'react';
// import Navbar from '@/components/common/Navbar';
// import Sidebar from '@/components/common/Sidebar';
// import ViewTeachers from '@/components/teacher/ViewTeachers';
// import {
//   BarChart3,
//   PieChart,
//   Activity,
//   Calendar,
//   Users,
//   BookOpen,
//   GraduationCap,
// } from 'lucide-react';

// export default function DashboardPage() {
//   const [activeNav, setActiveNav] = useState('home');
//   const [isTeacherExpanded, setIsTeacherExpanded] = useState(false);

//   const stats = [
//     { title: 'Total Students', value: '1,234', change: '+12%', icon: GraduationCap, color: 'bg-blue-500' },
//     { title: 'Total Teachers', value: '89', change: '+3%', icon: Users, color: 'bg-green-500' },
//     { title: 'Total Courses', value: '45', change: '+8%', icon: BookOpen, color: 'bg-purple-500' },
//     { title: 'Active Sessions', value: '28', change: '+15%', icon: Activity, color: 'bg-orange-500' },
//   ];

//   const recentActivities = [
//     { id: 1, type: 'teacher', message: 'John Smith added a new assignment', time: '2 hours ago' },
//     { id: 2, type: 'student', message: 'Sarah Johnson submitted homework', time: '3 hours ago' },
//     { id: 3, type: 'course', message: 'New course "Advanced Physics" created', time: '5 hours ago' },
//     { id: 4, type: 'system', message: 'System maintenance completed', time: '1 day ago' },
//   ];

//   const upcomingEvents = [
//     { id: 1, title: 'Parent-Teacher Meeting', date: '2024-07-15', time: '10:00 AM' },
//     { id: 2, title: 'Science Fair', date: '2024-07-20', time: '2:00 PM' },
//     { id: 3, title: 'Sports Day', date: '2024-07-25', time: '9:00 AM' },
//   ];

//   const renderContent = () => {
//     switch (activeNav) {
//       case 'home':
//         return (
//           <div className="space-y-6">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {stats.map((stat, index) => (
//                 <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">{stat.title}</p>
//                       <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
//                       <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
//                     </div>
//                     <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
//                       <stat.icon className="w-6 h-6 text-white" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Charts Section */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Performance</h3>
//                 <div className="h-64 bg-gray-50 rounded-lg flex flex-col items-center justify-center">
//                   <BarChart3 className="w-16 h-16 text-gray-400 mb-2" />
//                   <p className="text-gray-500">Chart visualization would go here</p>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Distribution</h3>
//                 <div className="h-64 bg-gray-50 rounded-lg flex flex-col items-center justify-center">
//                   <PieChart className="w-16 h-16 text-gray-400 mb-2" />
//                   <p className="text-gray-500">Pie chart visualization would go here</p>
//                 </div>
//               </div>
//             </div>

//             {/* Activities & Events */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
//                 <div className="space-y-4">
//                   {recentActivities.map((activity) => (
//                     <div key={activity.id} className="flex items-start space-x-3">
//                       <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
//                       <div className="flex-1">
//                         <p className="text-sm text-gray-900">{activity.message}</p>
//                         <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
//                 <div className="space-y-4">
//                   {upcomingEvents.map((event) => (
//                     <div key={event.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                       <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
//                         <Calendar className="w-5 h-5 text-purple-600" />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-sm font-medium text-gray-900">{event.title}</p>
//                         <p className="text-xs text-gray-500">{event.date} at {event.time}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'view-teachers':
//         return <ViewTeachers />;

//       default:
//         return (
//           <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
//               <p className="text-gray-600">The page you are trying to access does not exist.</p>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex h-screen overflow-hidden bg-gray-50">
//       {/* Sidebar */}
//       <Sidebar
//         activeNav={activeNav}
//         setActiveNav={setActiveNav}
//         isTeacherExpanded={isTeacherExpanded}
//         toggleTeacherExpanded={() => setIsTeacherExpanded(!isTeacherExpanded)}
//       />

//       {/* Main Content */}
//       <div className="flex flex-col flex-1">
//         <Navbar />
//         <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
//       </div>
//     </div>
//   );
// }




// app/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Sidebar from '@/components/common/Sidebar';
import ViewTeachers from '@/components/teacher/ViewTeachers';
import AddNewTeacher from '@/components/teacher/AddNewTeacher';
import {
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Users,
  BookOpen,
  GraduationCap,
} from 'lucide-react';

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState('home');
  const [isTeacherExpanded, setIsTeacherExpanded] = useState(false);

  const stats = [
    { title: 'Total Students', value: '1,234', change: '+12%', icon: GraduationCap, color: 'bg-blue-500' },
    { title: 'Total Teachers', value: '89', change: '+3%', icon: Users, color: 'bg-green-500' },
    { title: 'Total Courses', value: '45', change: '+8%', icon: BookOpen, color: 'bg-purple-500' },
    { title: 'Active Sessions', value: '28', change: '+15%', icon: Activity, color: 'bg-orange-500' },
  ];

  const recentActivities = [
    { id: 1, type: 'teacher', message: 'John Smith added a new assignment', time: '2 hours ago' },
    { id: 2, type: 'student', message: 'Sarah Johnson submitted homework', time: '3 hours ago' },
    { id: 3, type: 'course', message: 'New course "Advanced Physics" created', time: '5 hours ago' },
    { id: 4, type: 'system', message: 'System maintenance completed', time: '1 day ago' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Parent-Teacher Meeting', date: '2024-07-15', time: '10:00 AM' },
    { id: 2, title: 'Science Fair', date: '2024-07-20', time: '2:00 PM' },
    { id: 3, title: 'Sports Day', date: '2024-07-25', time: '9:00 AM' },
  ];

  const renderContent = () => {
    switch (activeNav) {
      case 'home':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Performance</h3>
                <div className="h-64 bg-gray-50 rounded-lg flex flex-col items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-gray-400 mb-2" />
                  <p className="text-gray-500">Chart visualization would go here</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Distribution</h3>
                <div className="h-64 bg-gray-50 rounded-lg flex flex-col items-center justify-center">
                  <PieChart className="w-16 h-16 text-gray-400 mb-2" />
                  <p className="text-gray-500">Pie chart visualization would go here</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{event.title}</p>
                        <p className="text-xs text-gray-500">{event.date} at {event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'view-teachers':
        return <ViewTeachers />;
      case 'add-teacher':
        return <AddNewTeacher/>;
      default:
        return (
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
              <p className="text-gray-600">The page you are trying to access does not exist.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="hidden lg:block">
        <Sidebar
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          isTeacherExpanded={isTeacherExpanded}
          toggleTeacherExpanded={() => setIsTeacherExpanded(!isTeacherExpanded)}
        />
      </div>

      <div className="flex flex-col flex-1 w-full">
        <Navbar />
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
