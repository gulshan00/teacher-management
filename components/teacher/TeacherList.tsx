import React from 'react'
import { Users, UserPlus, UserCheck, UserX, Building2 } from 'lucide-react'

interface TeachersPageProps {
  pageType: 'view-teachers' | 'add-teacher' | 'active-teachers' | 'inactive-teachers' | 'departments'
}

export default function TeachersPage({ pageType }: TeachersPageProps) {
  const getPageContent = () => {
    switch (pageType) {
      case 'view-teachers':
        return {
          title: 'Teachers Directory',
          subtitle: 'Manage and view all teachers in the system',
          icon: Users,
          content: (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">All Teachers</h3>
                <p className="text-gray-600">This is where you would see the complete teachers list with search and filtering options.</p>
                {/* Add your TeacherList component here */}
              </div>
            </div>
          )
        }
      
      case 'add-teacher':
        return {
          title: 'Add New Teacher',
          subtitle: 'Add a new teacher to the system',
          icon: UserPlus,
          content: (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Teacher Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter teacher's full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select Subject</option>
                      <option>Mathematics</option>
                      <option>Physics</option>
                      <option>Chemistry</option>
                      <option>English</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select Department</option>
                      <option>STEM</option>
                      <option>Humanities</option>
                      <option>Languages</option>
                      <option>Arts</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add Teacher
                  </button>
                </div>
              </div>
            </div>
          )
        }
      
      case 'active-teachers':
        return {
          title: 'Active Teachers',
          subtitle: 'View all currently active teachers',
          icon: UserCheck,
          content: (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Active Teachers List</h3>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    89 Active
                  </div>
                </div>
                <p className="text-gray-600">List of all teachers who are currently active in the system.</p>
              </div>
            </div>
          )
        }
      
      case 'inactive-teachers':
        return {
          title: 'Inactive Teachers',
          subtitle: 'View all inactive teachers',
          icon: UserX,
          content: (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Inactive Teachers List</h3>
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    12 Inactive
                  </div>
                </div>
                <p className="text-gray-600">List of all teachers who are currently inactive in the system.</p>
              </div>
            </div>
          )
        }
      
      case 'departments':
        return {
          title: 'Departments',
          subtitle: 'Manage school departments',
          icon: Building2,
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'STEM', teachers: 25, color: 'bg-blue-500' },
                  { name: 'Humanities', teachers: 18, color: 'bg-green-500' },
                  { name: 'Languages', teachers: 12, color: 'bg-purple-500' },
                  { name: 'Arts', teachers: 8, color: 'bg-orange-500' },
                  { name: 'Sports', teachers: 5, color: 'bg-red-500' },
                  { name: 'Social Sciences', teachers: 7, color: 'bg-indigo-500' },
                ].map((dept, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg ${dept.color} flex items-center justify-center`}>
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">{dept.teachers}</p>
                        <p className="text-sm text-gray-500">Teachers</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">Department overview</p>
                  </div>
                ))}
              </div>
            </div>
          )
        }
      
      default:
        return {
          title: 'Page Not Found',
          subtitle: 'The requested page was not found',
          icon: Users,
          content: <div>Page not found</div>
        }
    }
  }

  const pageContent = getPageContent()

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <pageContent.icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{pageContent.title}</h1>
          <p className="text-gray-600">{pageContent.subtitle}</p>
        </div>
      </div>

      {/* Page Content */}
      {pageContent.content}
    </div>
  )
}