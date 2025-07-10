// 'use client'
// import { useState } from 'react'
// import TeacherCard from './TeacherCard'
// import { Teacher } from '@/types/teacher'
// import { Search, Filter, Users } from 'lucide-react'

// const dummyTeachers: Teacher[] = [
//   { id: '1', name: 'Alynia Allan', subject: 'Mathematics', email: 'aly@example.com', department: 'STEM' },
//   { id: '2', name: 'John Smith', subject: 'Physics', email: 'john@example.com', department: 'STEM' },
//   { id: '3', name: 'Sarah Johnson', subject: 'English Literature', email: 'sarah@example.com', department: 'Humanities' },
//   { id: '4', name: 'Michael Chen', subject: 'Chemistry', email: 'michael@example.com', department: 'STEM' },
//   { id: '5', name: 'Emily Davis', subject: 'History', email: 'emily@example.com', department: 'Humanities' },
//   { id: '6', name: 'Robert Wilson', subject: 'Biology', email: 'robert@example.com', department: 'STEM' },
//   { id: '7', name: 'Lisa Rodriguez', subject: 'Spanish', email: 'lisa@example.com', department: 'Languages' },
//   { id: '8', name: 'David Brown', subject: 'Physical Education', email: 'david@example.com', department: 'Sports' },
//   { id: '9', name: 'Jennifer Lee', subject: 'Art', email: 'jennifer@example.com', department: 'Arts' },
//   { id: '10', name: 'Thomas Anderson', subject: 'Computer Science', email: 'thomas@example.com', department: 'STEM' },
//   { id: '11', name: 'Maria Garcia', subject: 'French', email: 'maria@example.com', department: 'Languages' },
//   { id: '12', name: 'Kevin Taylor', subject: 'Music', email: 'kevin@example.com', department: 'Arts' },
//   { id: '13', name: 'Amanda White', subject: 'Geography', email: 'amanda@example.com', department: 'Humanities' },
//   { id: '14', name: 'Daniel Miller', subject: 'Psychology', email: 'daniel@example.com', department: 'Social Sciences' },
//   { id: '15', name: 'Rachel Thompson', subject: 'Philosophy', email: 'rachel@example.com', department: 'Humanities' }
// ]

// export default function TeacherList() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [selectedDepartment, setSelectedDepartment] = useState<string>('all')
//   const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null)

//   // Get unique departments
//   const departments = ['all', ...new Set(dummyTeachers.map(t => t.department).filter(Boolean))]

//   // Filter teachers based on search and department
//   const filteredTeachers = dummyTeachers.filter(teacher => {
//     const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesDepartment = selectedDepartment === 'all' || teacher.department === selectedDepartment
//     return matchesSearch && matchesDepartment
//   })

//   const handleTeacherClick = (teacher: Teacher) => {
//     setSelectedTeacher(teacher)
//   }

//   const clearSelection = () => {
//     setSelectedTeacher(null)
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <Users className="w-8 h-8 text-blue-600" />
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">Teachers Directory</h1>
//             <p className="text-gray-600">{filteredTeachers.length} teachers found</p>
//           </div>
//         </div>
//       </div>

//       {/* Search and Filter Controls */}
//       <div className="flex flex-col sm:flex-row gap-4 bg-gray-50 p-4 rounded-lg">
//         <div className="relative flex-1">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//           <input
//             type="text"
//             placeholder="Search by name or subject..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>
        
//         <div className="relative">
//           <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//           <select
//             value={selectedDepartment}
//             onChange={(e) => setSelectedDepartment(e.target.value)}
//             className="pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[180px]"
//           >
//             {departments.map(dept => (
//               <option key={dept} value={dept}>
//                 {dept === 'all' ? 'All Departments' : dept}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Teacher Grid */}
//       {filteredTeachers.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredTeachers.map((teacher) => (
//             <TeacherCard 
//               key={teacher.id} 
//               teacher={teacher} 
//               onClick={() => handleTeacherClick(teacher)}
//               className="hover:scale-105 transform transition-transform duration-200"
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12">
//           <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
//             <Users className="w-8 h-8 text-gray-400" />
//           </div>
//           <h3 className="text-lg font-medium text-gray-900 mb-2">No teachers found</h3>
//           <p className="text-gray-500">Try adjusting your search or filter criteria</p>
//         </div>
//       )}

//       {/* Quick Stats */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
//         <div className="bg-white p-4 rounded-lg border border-gray-200">
//           <div className="text-2xl font-bold text-blue-600">{dummyTeachers.length}</div>
//           <div className="text-sm text-gray-600">Total Teachers</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg border border-gray-200">
//           <div className="text-2xl font-bold text-green-600">{departments.length - 1}</div>
//           <div className="text-sm text-gray-600">Departments</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg border border-gray-200">
//           <div className="text-2xl font-bold text-purple-600">
//             {new Set(dummyTeachers.map(t => t.subject)).size}
//           </div>
//           <div className="text-sm text-gray-600">Subjects</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg border border-gray-200">
//           <div className="text-2xl font-bold text-orange-600">{filteredTeachers.length}</div>
//           <div className="text-sm text-gray-600">Filtered Results</div>
//         </div>
//       </div>

//       {/* Simple Modal for Teacher Details */}
//       {selectedTeacher && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg p-6 max-w-md w-full">
//             <h2 className="text-xl font-bold mb-4">{selectedTeacher.name}</h2>
//             <div className="space-y-2 text-sm">
//               <p><strong>Subject:</strong> {selectedTeacher.subject}</p>
//               <p><strong>Email:</strong> {selectedTeacher.email}</p>
//               <p><strong>Department:</strong> {selectedTeacher.department}</p>
//             </div>
//             <div className="mt-6 flex gap-2">
//               <button
//                 onClick={clearSelection}
//                 className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
//               >
//                 Close
//               </button>
//               <a
//                 href={`mailto:${selectedTeacher.email}`}
//                 className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-center"
//               >
//                 Send Email
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }



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