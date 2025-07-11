'use client';
import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Edit, Trash2, Plus, Search, Star, 
  Users, BookOpen, Award, Clock, X,
} from 'lucide-react';

export default function ViewTeachers() {
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
    {
      id: 10, name: "Dr. Thomas Davis", email: "thomas.davis@school.edu", phone: "+1 (555) 012-3456",
      subjects: ["Economics", "Business"], department: "Business", experience: "15 years", rating: 4.9,
      students: 189, qualification: "PhD in Economics", specialization: "Macroeconomics & Finance",
      location: "Building E, Room 205", status: "Available"
    },
    {
      id: 11, name: "Prof. Maria Santos", email: "maria.santos@school.edu", phone: "+1 (555) 123-4567",
      subjects: ["Psychology", "Sociology"], department: "Social Sciences", experience: "9 years", rating: 4.7,
      students: 156, qualification: "PhD in Psychology", specialization: "Clinical Psychology & Social Behavior",
      location: "Building F, Room 103", status: "Available"
    },
    {
      id: 12, name: "Mr. Kevin Zhang", email: "kevin.zhang@school.edu", phone: "+1 (555) 234-5678",
      subjects: ["Mathematics", "Physics"], department: "STEM", experience: "6 years", rating: 4.6,
      students: 178, qualification: "MS in Mathematics", specialization: "Applied Mathematics & Theoretical Physics",
      location: "STEM Center, Room 201", status: "In Class"
    },
    {
      id: 13, name: "Dr. Rachel Green", email: "rachel.green@school.edu", phone: "+1 (555) 345-6789",
      subjects: ["Chemistry", "Biochemistry"], department: "Science", experience: "11 years", rating: 4.8,
      students: 167, qualification: "PhD in Chemistry", specialization: "Organic Chemistry & Biochemistry",
      location: "Science Block, Lab 2", status: "Available"
    },
    {
      id: 14, name: "Prof. Mark Johnson", email: "mark.johnson@school.edu", phone: "+1 (555) 456-7890",
      subjects: ["Philosophy", "Ethics"], department: "Humanities", experience: "14 years", rating: 4.7,
      students: 134, qualification: "PhD in Philosophy", specialization: "Ethics & Moral Philosophy",
      location: "Building G, Room 301", status: "Available"
    },
    {
      id: 15, name: "Ms. Angela White", email: "angela.white@school.edu", phone: "+1 (555) 567-8901",
      subjects: ["Physical Education", "Health"], department: "Health & PE", experience: "7 years", rating: 4.9,
      students: 245, qualification: "MS in Kinesiology", specialization: "Sports Science & Nutrition",
      location: "Gymnasium, Office 101", status: "In Class"
    },
    {
      id: 16, name: "Dr. Daniel Martinez", email: "daniel.martinez@school.edu", phone: "+1 (555) 678-9012",
      subjects: ["Engineering", "Robotics"], department: "Technology", experience: "10 years", rating: 4.8,
      students: 198, qualification: "PhD in Engineering", specialization: "Robotics & Automation",
      location: "Tech Center, Lab 301", status: "Available"
    },
    {
      id: 17, name: "Prof. Nicole Taylor", email: "nicole.taylor@school.edu", phone: "+1 (555) 789-0123",
      subjects: ["Journalism", "Media Studies"], department: "Communications", experience: "8 years", rating: 4.6,
      students: 167, qualification: "MA in Journalism", specialization: "Digital Media & Communications",
      location: "Media Center, Room 201", status: "Available"
    },
    {
      id: 18, name: "Mr. Christopher Lee", email: "christopher.lee@school.edu", phone: "+1 (555) 890-1234",
      subjects: ["Statistics", "Data Science"], department: "Mathematics", experience: "5 years", rating: 4.7,
      students: 145, qualification: "MS in Statistics", specialization: "Data Analytics & Machine Learning",
      location: "Building A, Room 301", status: "In Class"
    },
    {
      id: 19, name: "Dr. Stephanie Clark", email: "stephanie.clark@school.edu", phone: "+1 (555) 901-2345",
      subjects: ["Anthropology", "Archaeology"], department: "Social Sciences", experience: "12 years", rating: 4.8,
      students: 123, qualification: "PhD in Anthropology", specialization: "Cultural Anthropology & Archaeology",
      location: "Building H, Room 201", status: "Available"
    },
    {
      id: 20, name: "Prof. Jonathan Adams", email: "jonathan.adams@school.edu", phone: "+1 (555) 012-3456",
      subjects: ["Law", "Political Science"], department: "Legal Studies", experience: "16 years", rating: 4.9,
      students: 187, qualification: "JD Law Degree", specialization: "Constitutional Law & Political Theory",
      location: "Law Building, Room 105", status: "Available"
    }
  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  // const [viewMode, setViewMode] = useState('grid');
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
    if (editingTeacher) {
      setTeachers(teachers.map(t => t.id === editingTeacher ? { ...t, ...form } : t));
    } else {
      const newTeacher = {
        id: Date.now(),
        ...form,
        subjects: ['New Subject'],
        rating: 4.5,
        students: 0
      };
      setTeachers([...teachers, newTeacher]);
    }
    setShowModal(false);
    setEditingTeacher(null);
    setForm({
      name: '', email: '', phone: '', department: '', qualification: '', 
      specialization: '', location: '', experience: '', status: 'Available'
    });
  };

  const handleDelete = (id) => {
    setTeachers(teachers.filter(t => t.id !== id));
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Available': return 'bg-green-500';
      case 'In Class': return 'bg-blue-500';
      case 'On Leave': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search teachers, departments, or subjects..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

        {/* Teachers Grid */}
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

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTeachers.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg border p-12 text-center">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No teachers found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
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
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={value}
                        onChange={(e) => setForm({...form, [key]: e.target.value})}
                      >
                        <option value="Available">Available</option>
                        <option value="In Class">In Class</option>
                        <option value="On Leave">On Leave</option>
                      </select>
                    ) : (
                      <input
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        value={value}
                        onChange={(e) => setForm({...form, [key]: e.target.value})}
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
    </div>
  );
}