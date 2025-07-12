import React from 'react'
import {
    Activity,
    Calendar,
    Users,
    BookOpen,
    GraduationCap,
    TrendingUp,
    Clock,
    MapPin,
    Target,
    Award,
    BookMarked,
} from 'lucide-react';
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    PieChart as RechartsPieChart,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
    Pie,
} from 'recharts';

export default function Dashboard() {
    const stats = [
        { title: 'Total Students', value: '1,234', change: '+12%', icon: GraduationCap, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
        { title: 'Total Teachers', value: '89', change: '+3%', icon: Users, color: 'from-green-500 to-green-600', bgColor: 'bg-green-50', textColor: 'text-green-600' },
        { title: 'Total Courses', value: '45', change: '+8%', icon: BookOpen, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
        { title: 'Active Sessions', value: '28', change: '+15%', icon: Activity, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50', textColor: 'text-orange-600' },
    ];

   const performanceData = [
  { month: 'Jan', students: 1100, teachers: 85, courses: 42 },
  { month: 'Feb', students: 1150, teachers: 86, courses: 43 },
  { month: 'Mar', students: 1180, teachers: 87, courses: 44 },
  { month: 'Apr', students: 1200, teachers: 88, courses: 45 },
  { month: 'May', students: 1220, teachers: 89, courses: 45 },
  { month: 'Jun', students: 1234, teachers: 89, courses: 45 },
  { month: 'Jul', students: 1250, teachers: 90, courses: 46 },
  { month: 'Aug', students: 1275, teachers: 91, courses: 47 },
  { month: 'Sep', students: 1300, teachers: 92, courses: 48 },
  { month: 'Oct', students: 1320, teachers: 93, courses: 48 },
  { month: 'Nov', students: 1340, teachers: 94, courses: 49 },
  { month: 'Dec', students: 1355, teachers: 95, courses: 50 },
];


    const departmentData = [
        { name: 'Science', value: 35, color: '#3b82f6' },
        { name: 'Arts', value: 25, color: '#8b5cf6' },
        { name: 'Commerce', value: 20, color: '#10b981' },
        { name: 'Sports', value: 15, color: '#f59e0b' },
        { name: 'Others', value: 5, color: '#ef4444' },
    ];

    const attendanceData = [
        { day: 'Mon', present: 92, absent: 8 },
        { day: 'Tue', present: 88, absent: 12 },
        { day: 'Wed', present: 95, absent: 5 },
        { day: 'Thu', present: 90, absent: 10 },
        { day: 'Fri', present: 85, absent: 15 },
        { day: 'Sat', present: 78, absent: 22 },
    ];

    const gradeDistribution = [
        { grade: 'A+', count: 45, fill: '#10b981' },
        { grade: 'A', count: 78, fill: '#3b82f6' },
        { grade: 'B+', count: 92, fill: '#8b5cf6' },
        { grade: 'B', count: 65, fill: '#f59e0b' },
        { grade: 'C', count: 23, fill: '#ef4444' },
    ];

    const recentActivities = [
        { id: 1, type: 'teacher', message: 'John Smith added a new assignment', time: '2 hours ago', icon: BookOpen, color: 'text-blue-600', bgColor: 'bg-blue-50' },
        { id: 2, type: 'student', message: 'Sarah Johnson submitted homework', time: '3 hours ago', icon: GraduationCap, color: 'text-green-600', bgColor: 'bg-green-50' },
        { id: 3, type: 'course', message: 'New course "Advanced Physics" created', time: '5 hours ago', icon: BookOpen, color: 'text-purple-600', bgColor: 'bg-purple-50' },
        { id: 4, type: 'system', message: 'System maintenance completed', time: '1 day ago', icon: Activity, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    ];

    const upcomingEvents = [
        { id: 1, title: 'Parent-Teacher Meeting', date: '2024-07-15', time: '10:00 AM', location: 'Main Hall', color: 'from-indigo-500 to-indigo-600' },
        { id: 2, title: 'Science Fair', date: '2024-07-20', time: '2:00 PM', location: 'Science Lab', color: 'from-emerald-500 to-emerald-600' },
        { id: 3, title: 'Sports Day', date: '2024-07-25', time: '9:00 AM', location: 'Sports Ground', color: 'from-rose-500 to-rose-600' },
    ];

    const quickStats = [
        { title: 'Average Grade', value: '8.4', subtitle: 'Out of 10', icon: Award, color: 'from-emerald-500 to-emerald-600' },
        { title: 'Attendance Rate', value: '89%', subtitle: 'This week', icon: Target, color: 'from-blue-500 to-blue-600' },
        { title: 'Assignments', value: '24', subtitle: 'Due this week', icon: BookMarked, color: 'from-purple-500 to-purple-600' },
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                    <p className="font-semibold text-gray-900">{label}</p>
                    {payload.map((entry, index) => (
                        <p key={index} className="text-sm" style={{ color: entry.color }}>
                            {entry.name}: {entry.value}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    Dashboard Overview
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                    Welcome back! Here&apos;s what&apos;s happening at your institution today.
                </p>
            </div>

            {/* Main Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                                <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                                <div className="flex items-center space-x-1">
                                    <TrendingUp className="w-4 h-4 text-green-500" />
                                    <p className="text-sm font-medium text-green-600">{stat.change}</p>
                                    <span className="text-xs text-gray-500">from last month</span>
                                </div>
                            </div>
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className="w-7 h-7 text-white" />
                            </div>
                        </div>
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    </div>
                ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
                {quickStats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                <p className="text-xs text-gray-500">{stat.subtitle}</p>
                            </div>
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                {/* Performance Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-900">Monthly Performance</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span>Students</span>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span>Teachers</span>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                            <YAxis stroke="#6b7280" fontSize={12} />
                            <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} />
                            <Area
                                type="monotone"
                                dataKey="students"
                                stackId="1"
                                stroke="#3b82f6"
                                fill="#3b82f6"
                                fillOpacity={0.1}
                            />
                            <Area
                                type="monotone"
                                dataKey="teachers"
                                stackId="2"
                                stroke="#10b981"
                                fill="#10b981"
                                fillOpacity={0.1}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Department Distribution */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-900">Department Distribution</h3>
                        <div className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">
                            5 Departments
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <RechartsPieChart>
                            <Pie
                                data={departmentData}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {departmentData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </RechartsPieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Additional Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                {/* Attendance Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-900">Weekly Attendance</h3>
                        <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                            89% Average
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={attendanceData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="day" stroke="#6b7280" fontSize={12} />
                            <YAxis stroke="#6b7280" fontSize={12} />
                            <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} />
                            <Bar dataKey="present" fill="#10b981" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="absent" fill="#ef4444" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Grade Distribution */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-900">Grade Distribution</h3>
                        <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                            Current Term
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="90%" data={gradeDistribution}>
                            <RadialBar dataKey="count" cornerRadius={10} fill="#8884d8" />
                            <Tooltip />
                            <Legend />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Activities and Events */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-900">Recent Activities</h3>
                        <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                            Live Updates
                        </div>
                    </div>
                    <div className="space-y-4">
                        {recentActivities.map((activity) => (
                            <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                                <div className={`w-10 h-10 rounded-lg ${activity.bgColor} flex items-center justify-center flex-shrink-0`}>
                                    <activity.icon className={`w-5 h-5 ${activity.color}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 mb-1">{activity.message}</p>
                                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                                        <Clock className="w-3 h-3" />
                                        <span>{activity.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-900">Upcoming Events</h3>
                        <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                            3 Events
                        </div>
                    </div>
                    <div className="space-y-4">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="relative p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-200 border border-gray-200">
                                <div className="flex items-start space-x-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-2">{event.title}</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="w-3 h-3" />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Clock className="w-3 h-3" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center space-x-1 sm:col-span-2">
                                                <MapPin className="w-3 h-3" />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}