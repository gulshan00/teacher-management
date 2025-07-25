'use client';
import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Edit, Trash2, Plus, Search, Star,
  Users, BookOpen, Award, Clock, X, ArrowLeft,
} from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewTeachers() {

  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const [teachers, setTeachers] = useState([
    {
      id: 1, name: "Dr. Sarah Johnson", email: "sarah.johnson@school.edu", phone: "+1 (555) 123-4567",
      subjects: ["Mathematics", "Statistics"], department: "Mathematics", experience: "8 years", rating: 4.9,
      students: 156, qualification: "PhD in Mathematics", specialization: "Advanced Calculus & Statistics",
      location: "Building A, Room 205", status: "Available"
    },
    {
      id: 2, name: "Prof. Michael Chen", email: "michael.chen@school.edu", phone: "+1 (555) 234-5678",
      subjects: ["Physics", "Chemistry"], department: "Science", experience: "12 years", rating: 4.8,
      students: 203, qualification: "PhD in Physics", specialization: "Quantum Physics & Organic Chemistry",
      location: "Science Block, Lab 3", status: "In Class"
    },
    {
      id: 3, name: "Ms. Emily Rodriguez", email: "emily.rodriguez@school.edu", phone: "+1 (555) 345-6789",
      subjects: ["English", "Literature"], department: "Literature", experience: "6 years", rating: 4.7,
      students: 189, qualification: "MA in English", specialization: "Modern Literature & Creative Writing",
      location: "Building B, Room 102", status: "Available"
    },
    {
      id: 4, name: "Dr. James Wilson", email: "james.wilson@school.edu", phone: "+1 (555) 456-7890",
      subjects: ["History", "Geography"], department: "Social Studies", experience: "10 years", rating: 4.6,
      students: 142, qualification: "PhD in History", specialization: "World History & Political Geography",
      location: "Building C, Room 301", status: "On Leave"
    },
    {
      id: 5, name: "Prof. Lisa Thompson", email: "lisa.thompson@school.edu", phone: "+1 (555) 567-8901",
      subjects: ["Biology", "Environmental Science"], department: "Science", experience: "9 years", rating: 4.8,
      students: 167, qualification: "PhD in Biology", specialization: "Marine Biology & Ecology",
      location: "Science Block, Lab 1", status: "Available"
    },
    {
      id: 6, name: "Mr. David Kim", email: "david.kim@school.edu", phone: "+1 (555) 678-9012",
      subjects: ["Computer Science", "Programming"], department: "Technology", experience: "7 years", rating: 4.9,
      students: 234, qualification: "MS in Computer Science", specialization: "AI & Machine Learning",
      location: "Tech Center, Room 105", status: "In Class"
    },
    {
      id: 7, name: "Dr. Amanda Garcia", email: "amanda.garcia@school.edu", phone: "+1 (555) 789-0123",
      subjects: ["Spanish", "French"], department: "Languages", experience: "11 years", rating: 4.7,
      students: 178, qualification: "PhD in Linguistics", specialization: "Romance Languages & Literature",
      location: "Building D, Room 201", status: "Available"
    },
    {
      id: 8, name: "Prof. Robert Lee", email: "robert.lee@school.edu", phone: "+1 (555) 890-1234",
      subjects: ["Art", "Design"], department: "Arts", experience: "13 years", rating: 4.6,
      students: 123, qualification: "MFA in Fine Arts", specialization: "Digital Art & Graphic Design",
      location: "Art Studio, Room 301", status: "Available"
    },
    {
      id: 9, name: "Ms. Jennifer Brown", email: "jennifer.brown@school.edu", phone: "+1 (555) 901-2345",
      subjects: ["Music", "Theater"], department: "Performing Arts", experience: "8 years", rating: 4.8,
      students: 145, qualification: "MA in Music", specialization: "Classical Music & Drama",
      location: "Music Hall, Room 102", status: "In Class"
    },


  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', department: '', qualification: '',
    specialization: '', location: '', experience: '', status: 'Available'
  });

  const departments = ['All', ...new Set(teachers.map(t => t.department))];
  const statuses = ['All', 'Available', 'In Class', 'On Leave'];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(search.toLowerCase()) ||
      teacher.department.toLowerCase().includes(search.toLowerCase()) ||
      teacher.subjects.some(s => s.toLowerCase().includes(search.toLowerCase()));
    const matchesFilter = filter === 'All' || teacher.department === filter || teacher.status === filter;
    return matchesSearch && matchesFilter;
  });

  const handleEdit = (teacher) => {
    setEditingTeacher(teacher.id);
    setForm({
      name: teacher.name, email: teacher.email, phone: teacher.phone,
      department: teacher.department, qualification: teacher.qualification,
      specialization: teacher.specialization, location: teacher.location,
      experience: teacher.experience, status: teacher.status
    });
    setShowModal(true);
  };

  const handleSave = () => {
    const requiredFields = ['name', 'email', 'phone', 'department', 'qualification', 'specialization', 'location', 'experience', 'status'];

    const isFormValid = requiredFields.every(field => form[field].trim() !== '');

    if (!isFormValid) {
      toast.error('Please fill in all required fields before submitting.');
      return;
    }

    if (editingTeacher) {
      setTeachers(teachers.map(t => t.id === editingTeacher ? { ...t, ...form } : t));
      toast.success('Teacher updated successfully!');
    } else {
      const newTeacher = {
        id: Date.now(),
        ...form,
        subjects: ['New Subject'],
        rating: 4.5,
        students: 0
      };
      setTeachers([...teachers, newTeacher]);
      toast.success('New teacher added!');
    }

    // Reset and close modal
    setShowModal(false);
    setEditingTeacher(null);
    setForm({
      name: '', email: '', phone: '', department: '', qualification: '',
      specialization: '', location: '', experience: '', status: 'Available'
    });
  };

  const handleDelete = (id) => {
    setTeachers(teachers.filter(t => t.id !== id));
    toast.info('Teacher removed');
  };

  const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();
  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return 'bg-green-500';
      case 'In Class': return 'bg-blue-500';
      case 'On Leave': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
       {selectedTeacher ? (
  <div className="bg-white rounded-2xl shadow-xl border p-8">
    {/* Go Back */}
    <button
      onClick={() => setSelectedTeacher(null)}
      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-6"
    >
      <ArrowLeft className="w-5 h-5" />
      Go Back
    </button>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">
            {selectedTeacher.name}
          </h2>
          <p className="text-sm text-purple-600 font-semibold">
            {selectedTeacher.department}
          </p>
        </div>

        <div className="space-y-2 text-sm text-gray-700">
          <p><Mail className="inline w-4 h-4 mr-2 text-gray-500" /> {selectedTeacher.email}</p>
          <p><Phone className="inline w-4 h-4 mr-2 text-gray-500" /> {selectedTeacher.phone}</p>
          <p><MapPin className="inline w-4 h-4 mr-2 text-gray-500" /> {selectedTeacher.location}</p>
          <p><BookOpen className="inline w-4 h-4 mr-2 text-gray-500" /> {selectedTeacher.qualification}</p>
          <p><Award className="inline w-4 h-4 mr-2 text-gray-500" /> {selectedTeacher.specialization}</p>
          <p><Clock className="inline w-4 h-4 mr-2 text-gray-500" /> {selectedTeacher.experience}</p>
          <p><Users className="inline w-4 h-4 mr-2 text-gray-500" /> {selectedTeacher.students} students</p>
          <p><Star className="inline w-4 h-4 mr-2 text-yellow-500" /> Rating: {selectedTeacher.rating}</p>
        </div>
      </div>

      {/* Right Section */}
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-3">Subjects Taught</h4>
        <div className="flex flex-wrap gap-3">
          {selectedTeacher.subjects.map((subject, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm px-3 py-1 rounded-full shadow-sm border"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
) : (


          <>
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border p-8 mb-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Teachers Directory</h1>
                      <p className="text-gray-600 mt-1">Manage and explore our faculty members</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 shadow-lg"
                  >
                    <Plus className="w-5 h-5" />
                    Add Teacher
                  </button>
                </div>
              </div>
              {/* Search and Filters */}
              <div className="bg-white rounded-xl shadow-lg border p-6 mb-8">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search teachers, departments, or subjects..."
                      className="w-full pl-12 pr-4 py-3 border text-black border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <select
                    className="px-4 py-3 border border-gray-200  text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    {[...departments, ...statuses.filter(s => s !== 'All')].map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-lg border p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Teachers</p>
                      <p className="text-2xl font-bold text-gray-900">{teachers.length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg border p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Available</p>
                      <p className="text-2xl font-bold text-gray-900">{teachers.filter(t => t.status === 'Available').length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg border p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">In Class</p>
                      <p className="text-2xl font-bold text-gray-900">{teachers.filter(t => t.status === 'In Class').length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg border p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <BookOpen className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Departments</p>
                      <p className="text-2xl font-bold text-gray-900">{departments.length - 1}</p>
                    </div>
                  </div>
                </div>
              </div>
              {filteredTeachers.length === 0 && (
                <div className="bg-white rounded-xl shadow-lg border p-12 text-center">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No teachers found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTeachers.map(teacher => (
                <div key={teacher.id} className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            {getInitials(teacher.name)}
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(teacher.status)}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">{teacher.name}</h3>
                          <p className="text-xs text-blue-600">{teacher.department}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEdit(teacher)}
                          className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(teacher.id)}
                          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Mail className="w-3 h-3" />
                        <span className="truncate">{teacher.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Phone className="w-3 h-3" />
                        <span>{teacher.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{teacher.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {teacher.subjects.slice(0, 2).map((subject, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {subject}
                        </span>
                      ))}
                      {teacher.subjects.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          +{teacher.subjects.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center text-xs text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span>{teacher.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{teacher.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{teacher.experience}</span>
                      </div>
                    </div>
                    <button onClick={() => setSelectedTeacher(teacher)} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-transparent backdrop-blur-sm">
          {/* Ambient floating shadows */}
          <div className="absolute w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000" />
          </div>

          {/* Modal content */}
          <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingTeacher ? 'Edit Teacher' : 'Add New Teacher'}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(form).map(([key, value]) => (
                  <div key={key} className={key === 'specialization' ? 'md:col-span-2' : ''}>
                    {key === 'status' ? (
                      <select
                        className="w-full p-3 bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={value}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      >
                        <option value="Available">Available</option>
                        <option value="In Class">In Class</option>
                        <option value="On Leave">On Leave</option>
                      </select>
                    ) : (

                      <input
                        className="w-full p-3 bg-white text-gray-900 placeholder-gray-500 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        value={value}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      />

                    )}
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={handleSave}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
                >
                  {editingTeacher ? 'Update Teacher' : 'Add Teacher'}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}


