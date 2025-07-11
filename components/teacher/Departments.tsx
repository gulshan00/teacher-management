'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Users,
  GraduationCap,
  FlaskConical,
  Briefcase,
  Monitor,
  Wrench,
  ArrowRight,
  Star,
} from 'lucide-react';

const departments = [
  { 
    id: 1, 
    name: 'Science', 
    icon: <FlaskConical className="w-7 h-7" />,
    courses: 24,
    teachers: 12,
    color: 'from-emerald-400 to-teal-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700'
  },
  { 
    id: 2, 
    name: 'Mathematics', 
    icon: <GraduationCap className="w-7 h-7" />,
    courses: 18,
    teachers: 8,
    color: 'from-purple-400 to-indigo-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700'
  },
  { 
    id: 3, 
    name: 'Arts', 
    icon: <BookOpen className="w-7 h-7" />,
    courses: 32,
    teachers: 15,
    color: 'from-pink-400 to-rose-600',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-700'
  },
  { 
    id: 4, 
    name: 'Humanities', 
    icon: <Users className="w-7 h-7" />,
    courses: 28,
    teachers: 14,
    color: 'from-amber-400 to-orange-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700'
  },
  { 
    id: 5, 
    name: 'Business', 
    icon: <Briefcase className="w-7 h-7" />,
    courses: 22,
    teachers: 10,
    color: 'from-blue-400 to-cyan-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700'
  },
  { 
    id: 6, 
    name: 'Computer Science', 
    icon: <Monitor className="w-7 h-7" />,
    courses: 35,
    teachers: 18,
    color: 'from-violet-400 to-purple-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-700'
  },
  { 
    id: 7, 
    name: 'Engineering', 
    icon: <Wrench className="w-7 h-7" />,
    courses: 41,
    teachers: 22,
    color: 'from-slate-400 to-gray-600',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-700'
  },
];

const Departments = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Academic Excellence
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-4">
            Our Departments
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of academic departments, each offering world-class education and research opportunities.
          </p>
        </div>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                hoveredCard === dept.id ? 'z-10' : ''
              }`}
              onMouseEnter={() => setHoveredCard(dept.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${dept.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">
                    #{dept.id.toString().padStart(2, '0')}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {dept.icon}
                  </div>
                  {/* Decorative Pattern */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                    {dept.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Courses</span>
                      <span className="font-semibold text-gray-700">{dept.courses}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Teachers</span>
                      <span className="font-semibold text-gray-700">{dept.teachers}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex items-center gap-2 ${dept.textColor} text-sm font-medium`}>
                      <div className={`w-2 h-2 rounded-full bg-current`}></div>
                      Active
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-600 transition-colors">
                      <span className="text-sm">Explore</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>

              {/* Floating Badge */}
              <div className={`absolute -top-3 -right-3 w-8 h-8 ${dept.bgColor} rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                <div className={`w-3 h-3 ${dept.textColor.replace('text-', 'bg-')} rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default Departments;
