'use client';
import { useState } from 'react'

export default function ActiveTeachers() {
  const [teachers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      subject: "Mathematics",
      experience: "8 years",
      rating: 4.9,
      initials: "SJ",
      bgColor: "bg-blue-500",
      students: 45,
      status: "Online"
    },
    {
      id: 2,
      name: "Michael Chen",
      subject: "Physics",
      experience: "12 years",
      rating: 4.8,
      initials: "MC",
      bgColor: "bg-green-500",
      students: 38,
      status: "Online"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      subject: "Biology",
      experience: "6 years",
      rating: 4.7,
      initials: "ER",
      bgColor: "bg-yellow-500",
      students: 42,
      status: "Away"
    },
    {
      id: 4,
      name: "David Wilson",
      subject: "Chemistry",
      experience: "10 years",
      rating: 4.9,
      initials: "DW",
      bgColor: "bg-red-500",
      students: 35,
      status: "Online"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      subject: "English Literature",
      experience: "15 years",
      rating: 4.8,
      initials: "LT",
      bgColor: "bg-purple-500",
      students: 50,
      status: "Offline"
    },
    {
      id: 6,
      name: "James Martinez",
      subject: "History",
      experience: "9 years",
      rating: 4.6,
      initials: "JM",
      bgColor: "bg-cyan-500",
      students: 40,
      status: "Online"
    }
  ])

  const getStatusColor = (status) => {
    switch(status) {
      case 'Online': return 'bg-green-500'
      case 'Away': return 'bg-yellow-500'
      case 'Offline': return 'bg-gray-400'
      default: return 'bg-gray-400'
    }
  }

  const totalTeachers = teachers.length
  const onlineTeachers = teachers.filter(t => t.status === 'Online').length
  const avgRating = (teachers.reduce((sum, t) => sum + t.rating, 0) / teachers.length).toFixed(1)
  const totalStudents = teachers.reduce((sum, t) => sum + t.students, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Active Teachers</h1>
          <p className="text-gray-600 text-lg">Manage and connect with your teaching staff</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Teachers</h3>
                <p className="text-3xl font-bold text-gray-800">{totalTeachers}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">👥</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Online Now</h3>
                <p className="text-3xl font-bold text-gray-800">{onlineTeachers}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">🟢</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Avg Rating</h3>
                <p className="text-3xl font-bold text-gray-800">{avgRating}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-bold text-lg">⭐</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Students</h3>
                <p className="text-3xl font-bold text-gray-800">{totalStudents}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">🎓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Card Header with gradient */}
              <div className={`${teacher.bgColor} h-20 relative`}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(teacher.status)} shadow-lg`}></div>
                </div>
              </div>

              {/* Profile Section */}
              <div className="px-6 pb-6 -mt-12 relative">
                <div className="flex flex-col items-center">
                  {/* Avatar with border */}
                  <div className={`w-24 h-24 ${teacher.bgColor} rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-4`}>
                    <span className="text-white font-bold text-xl">{teacher.initials}</span>
                  </div>

                  {/* Teacher Info */}
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">{teacher.subject}</p>
                  
                  {/* Status Badge */}
                  <div className={`px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    teacher.status === 'Online' ? 'bg-green-100 text-green-800' :
                    teacher.status === 'Away' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {teacher.status}
                  </div>

                  {/* Stats Row */}
                  <div className="flex justify-between w-full mb-6 text-sm">
                    <div className="text-center">
                      <p className="font-bold text-gray-800">{teacher.experience}</p>
                      <p className="text-gray-500">Experience</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-800">{teacher.students}</p>
                      <p className="text-gray-500">Students</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="font-bold text-gray-800">{teacher.rating}</span>
                      </div>
                      <p className="text-gray-500">Rating</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 w-full">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                      View Profile
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}