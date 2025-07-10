
'use client';
import React, { useState } from 'react';
import { Search, Mail, Phone, BookOpen, Filter, Grid, List, Star, Award, MapPin, Users } from 'lucide-react';

export default function ViewTeachers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  // Enhanced teacher data with more professional details
  const teachers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@school.edu",
      phone: "+1 (555) 123-4567",
      subjects: ["Mathematics", "Statistics"],
      image: "https://images.unsplash.com/photo-1494790108755-2616c96f40a3?w=200&h=200&fit=crop&crop=face",
      department: "Mathematics Department",
      experience: "8 years",
      rating: 4.9,
      students: 156,
      qualification: "PhD in Mathematics",
      specialization: "Advanced Calculus & Statistics",
      location: "Building A, Room 205",
      status: "Available"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      email: "michael.chen@school.edu",
      phone: "+1 (555) 234-5678",
      subjects: ["Physics", "Chemistry"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      department: "Science Department",
      experience: "12 years",
      rating: 4.8,
      students: 203,
      qualification: "PhD in Physics",
      specialization: "Quantum Physics & Organic Chemistry",
      location: "Science Block, Lab 3",
      status: "In Class"
    },
    {
      id: 3,
      name: "Ms. Emily Rodriguez",
      email: "emily.rodriguez@school.edu",
      phone: "+1 (555) 345-6789",
      subjects: ["English Literature", "Creative Writing"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      department: "English Department",
      experience: "6 years",
      rating: 4.7,
      students: 134,
      qualification: "MA in English Literature",
      specialization: "Modern Literature & Creative Writing",
      location: "Humanities Wing, Room 102",
      status: "Available"
    },
    {
      id: 4,
      name: "Mr. David Thompson",
      email: "david.thompson@school.edu",
      phone: "+1 (555) 456-7890",
      subjects: ["History", "Social Studies"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      department: "Social Studies Department",
      experience: "10 years",
      rating: 4.6,
      students: 189,
      qualification: "MA in History",
      specialization: "World History & Political Science",
      location: "Main Building, Room 301",
      status: "Available"
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      email: "lisa.park@school.edu",
      phone: "+1 (555) 567-8901",
      subjects: ["Biology", "Environmental Science"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      department: "Science Department",
      experience: "9 years",
      rating: 4.9,
      students: 167,
      qualification: "PhD in Biology",
      specialization: "Molecular Biology & Ecology",
      location: "Science Block, Lab 1",
      status: "Available"
    },
    {
      id: 6,
      name: "Mr. James Wilson",
      email: "james.wilson@school.edu",
      phone: "+1 (555) 678-9012",
      subjects: ["Physical Education", "Health"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      department: "Physical Education Department",
      experience: "5 years",
      rating: 4.5,
      students: 245,
      qualification: "MS in Sports Science",
      specialization: "Athletic Training & Health Education",
      location: "Sports Complex, Gym 1",
      status: "In Class"
    }
  ];

  // Get unique subjects for filter
  const allSubjects = [...new Set(teachers.flatMap(teacher => teacher.subjects))];

  // Filter teachers based on search and subject
  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         teacher.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSubject = selectedSubject === '' || teacher.subjects.includes(selectedSubject);
    
    return matchesSearch && matchesSubject;
  });

  const TeacherCard = ({ teacher }) => (
    <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
      {/* Status Badge */}
      <div className="flex justify-between items-start mb-4">
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          teacher.status === 'Available' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-orange-100 text-orange-700'
        }`}>
          {teacher.status}
        </div>
        <div className="flex items-center space-x-1 text-yellow-500">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-medium text-gray-700">{teacher.rating}</span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <img 
            src={teacher.image} 
            alt={teacher.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
          />
          <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-1">
            <Award className="w-4 h-4" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-3 mb-1">{teacher.name}</h3>
        <p className="text-sm text-blue-600 font-medium">{teacher.department}</p>
        <p className="text-xs text-gray-500 mt-1">{teacher.qualification}</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">{teacher.experience.split(' ')[0]}</div>
          <div className="text-xs text-gray-600">Years Exp.</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">{teacher.students}</div>
          <div className="text-xs text-gray-600">Students</div>
        </div>
      </div>

      {/* Specialization */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 text-center italic">"{teacher.specialization}"</p>
      </div>

      {/* Subjects */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {teacher.subjects.map((subject, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full font-medium"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-gray-600 group-hover:text-blue-600 transition-colors">
          <Mail className="w-4 h-4" />
          <span className="text-sm truncate">{teacher.email}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 group-hover:text-blue-600 transition-colors">
          <Phone className="w-4 h-4" />
          <span className="text-sm">{teacher.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 group-hover:text-blue-600 transition-colors">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{teacher.location}</span>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
        View Profile
      </button>
    </div>
  );

  const TeacherRow = ({ teacher }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
      <div className="flex items-center space-x-6">
        <div className="relative">
          <img 
            src={teacher.image} 
            alt={teacher.name}
            className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-md"
          />
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
            teacher.status === 'Available' ? 'bg-green-500' : 'bg-orange-500'
          }`}></div>
        </div>
        
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-gray-900">{teacher.name}</h3>
            <p className="text-sm text-blue-600 font-medium">{teacher.department}</p>
            <p className="text-xs text-gray-500">{teacher.qualification}</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{teacher.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{teacher.phone}</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{teacher.experience.split(' ')[0]}</div>
                <div className="text-xs text-gray-500">Years</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{teacher.students}</div>
                <div className="text-xs text-gray-500">Students</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium text-gray-700">{teacher.rating}</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-wrap gap-1 justify-center mb-2">
              {teacher.subjects.map((subject, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full font-medium"
                >
                  {subject}
                </span>
              ))}
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Teachers Directory</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our exceptional faculty members who are dedicated to providing quality education and shaping the future of our students.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{teachers.length}</h3>
                <p className="text-gray-600">Total Teachers</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{allSubjects.length}</h3>
                <p className="text-gray-600">Subjects Offered</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {Math.round(teachers.reduce((acc, teacher) => acc + teacher.rating, 0) / teachers.length * 10) / 10}
                </h3>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search teachers, departments, or subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-200"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="pl-12 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-gray-50 focus:bg-white transition-all duration-200 min-w-48"
                >
                  <option value="">All Subjects</option>
                  {allSubjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-6">
          <p className="text-gray-600 text-lg">
            Showing <span className="font-semibold text-gray-900">{filteredTeachers.length}</span> of <span className="font-semibold text-gray-900">{teachers.length}</span> teachers
          </p>
        </div>

        {/* Teachers Display */}
        {filteredTeachers.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No teachers found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredTeachers.map(teacher => (
              viewMode === 'grid' ? (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ) : (
                <TeacherRow key={teacher.id} teacher={teacher} />
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
}