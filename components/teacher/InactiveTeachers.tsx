
import { useState } from 'react';
import Head from 'next/head';

export default function InactiveTeachers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for inactive teachers
  const [inactiveTeachers] = useState([
    {
      id: 1,
      name: 'Dr. John Smith',
      department: 'css',
      email: 'john.smith@college.edu',
      phone: '+91-9876543210',
      lastActive: '2024-01-15',
      reason: 'Medical Leave',
      duration: '3 months',
      expectedReturn: '2024-04-15'
    },
    {
      id: 2,
      name: 'Prof. Sarah Johnson',
      department: 'ece',
      email: 'sarah.johnson@college.edu',
      phone: '+91-9876543211',
      lastActive: '2024-02-20',
      reason: 'Sabbatical',
      duration: '6 months',
      expectedReturn: '2024-08-20'
    },
    {
      id: 3,
      name: 'Dr. Michael Brown',
      department: 'civil',
      email: 'michael.brown@college.edu',
      phone: '+91-9876543212',
      lastActive: '2024-01-10',
      reason: 'Personal Leave',
      duration: '2 months',
      expectedReturn: '2024-03-10'
    },
    {
      id: 4,
      name: 'Prof. Emily Davis',
      department: 'mechanical',
      email: 'emily.davis@college.edu',
      phone: '+91-9876543213',
      lastActive: '2024-02-05',
      reason: 'Maternity Leave',
      duration: '4 months',
      expectedReturn: '2024-06-05'
    },
    {
      id: 5,
      name: 'Dr. Robert Wilson',
      department: 'css',
      email: 'robert.wilson@college.edu',
      phone: '+91-9876543214',
      lastActive: '2024-01-25',
      reason: 'Research Assignment',
      duration: '12 months',
      expectedReturn: '2025-01-25'
    },
    {
      id: 6,
      name: 'Prof. Lisa Anderson',
      department: 'ece',
      email: 'lisa.anderson@college.edu',
      phone: '+91-9876543215',
      lastActive: '2024-02-10',
      reason: 'Study Leave',
      duration: '8 months',
      expectedReturn: '2024-10-10'
    }
  ]);

  // Department data
  const departments = [
    { id: 'css', name: 'Computer Science & Software Engineering', code: 'CSS' },
    { id: 'ece', name: 'Electronics & Communication Engineering', code: 'ECE' },
    { id: 'civil', name: 'Civil Engineering', code: 'CIVIL' },
    { id: 'mechanical', name: 'Mechanical Engineering', code: 'MECH' }
  ];

  // Filter teachers based on department and search term
  const filteredTeachers = inactiveTeachers.filter(teacher => {
    const matchesDepartment = selectedDepartment === 'all' || teacher.department === selectedDepartment;
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.reason.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const getDepartmentName = (code) => {
    const dept = departments.find(d => d.id === code);
    return dept ? dept.name : code.toUpperCase();
  };

  const getStatusColor = (reason) => {
    const colors = {
      'Medical Leave': 'bg-red-100 text-red-800 border-red-200',
      'Sabbatical': 'bg-blue-100 text-blue-800 border-blue-200',
      'Personal Leave': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Maternity Leave': 'bg-green-100 text-green-800 border-green-200',
      'Research Assignment': 'bg-purple-100 text-purple-800 border-purple-200',
      'Study Leave': 'bg-indigo-100 text-indigo-800 border-indigo-200'
    };
    return colors[reason] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getDaysSinceLastActive = (lastActiveDate) => {
    const today = new Date();
    const lastActive = new Date(lastActiveDate);
    const diffTime = Math.abs(today.getTime() - lastActive.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getTeachersByDepartment = () => {
    const counts = {};
    departments.forEach(dept => {
      counts[dept.code] = inactiveTeachers.filter(teacher => teacher.department === dept.id).length;
    });
    return counts;
  };

  const departmentCounts = getTeachersByDepartment();

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Inactive Teachers Management</title>
        <meta name="description" content="Manage inactive teachers across departments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Inactive Teachers</h1>
              <p className="text-gray-600 mt-1">Manage and track inactive teaching staff</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  Total: {inactiveTeachers.length}
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">
                  Filtered: {filteredTeachers.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Department Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          {departments.map((dept) => (
            <div key={dept.id} className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{dept.code}</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">{departmentCounts[dept.code] || 0}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Inactive Teachers</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-full flex items-center justify-center mt-2 sm:mt-0 sm:ml-2">
                  <span className="text-blue-600 font-bold text-sm sm:text-base lg:text-lg">{dept.code[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border mb-4 sm:mb-6">
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Teachers</label>
              <input
                type="text"
                placeholder="Search by name, email, or reason..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border text-black border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Department</label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full border text-black border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('all');
                }}
                className="w-full bg-gray-100 text-black hover:bg-gray-200  px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Teachers List */}
        <div className="bg-white shadow-sm rounded-lg border overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Inactive Teachers List ({filteredTeachers.length})
            </h3>
          </div>
          
          {filteredTeachers.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No inactive teachers found</div>
              <p className="text-gray-400 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Teacher Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact Information
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Leave Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredTeachers.map((teacher) => (
                      <tr key={teacher.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                          <div className="text-sm text-gray-500">
                            Inactive for {getDaysSinceLastActive(teacher.lastActive)} days
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-medium">
                            {departments.find(d => d.id === teacher.department)?.code}
                          </div>
                          <div className="text-xs text-gray-500">
                            {getDepartmentName(teacher.department)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{teacher.email}</div>
                          <div className="text-sm text-gray-500">{teacher.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            <span className="font-medium">Duration:</span> {teacher.duration}
                          </div>
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Expected Return:</span> {teacher.expectedReturn}
                          </div>
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Last Active:</span> {teacher.lastActive}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(teacher.reason)}`}>
                            {teacher.reason}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile/Tablet Card View */}
              <div className="lg:hidden">
                <div className="divide-y divide-gray-200">
                  {filteredTeachers.map((teacher) => (
                    <div key={teacher.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                      {/* Teacher Name and Status */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-medium text-gray-900">{teacher.name}</h4>
                          <div className="mt-1 flex flex-wrap items-center gap-2">
                            <span className="text-sm text-gray-500">
                              {departments.find(d => d.id === teacher.department)?.code} Department
                            </span>
                            <span className="text-sm text-gray-400">•</span>
                            <span className="text-sm text-gray-500">
                              Inactive for {getDaysSinceLastActive(teacher.lastActive)} days
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:ml-4">
                          <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(teacher.reason)}`}>
                            {teacher.reason}
                          </span>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Contact Information</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Email:</span> {teacher.email}
                          </div>
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Phone:</span> {teacher.phone}
                          </div>
                        </div>
                      </div>

                      {/* Leave Details */}
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Leave Details</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Duration:</span> {teacher.duration}
                          </div>
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Expected Return:</span> {teacher.expectedReturn}
                          </div>
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Last Active:</span> {teacher.lastActive}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Summary Statistics */}
        <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Summary Statistics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">{inactiveTeachers.length}</div>
              <div className="text-sm text-gray-600 mt-1">Total Inactive Teachers</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl sm:text-3xl font-bold text-red-600">
                {inactiveTeachers.filter(t => t.reason === 'Medical Leave').length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Medical Leave</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">
                {inactiveTeachers.filter(t => new Date(t.expectedReturn) < new Date()).length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Overdue Returns</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}