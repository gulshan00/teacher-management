'use client';
import React, { useState, useEffect } from 'react';
import {
  User, Mail, Phone, BookOpen, Briefcase, Upload, Image as ImageIcon,
  Plus, X, Search, Award, Calendar, MapPin, Edit3, Trash2, Filter
} from 'lucide-react';

interface TeacherData {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  experience: number;
  imageURL: string;
  qualification: string;
  address: string;
  joinDate: string;
}

const TeacherManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [notification, setNotification] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [teacher, setTeacher] = useState<TeacherData>({
    id: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    experience: 0,
    imageURL: '',
    qualification: '',
    address: '',
    joinDate: '',
  });
  const [savedTeachers, setSavedTeachers] = useState<TeacherData[]>([]);

  useEffect(() => {
    const sampleTeachers: TeacherData[] = [
      {
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah.johnson@school.edu',
        phone: '+1 (555) 123-4567',
        subject: 'Mathematics',
        experience: 8,
        imageURL: 'https://images.unsplash.com/photo-1494790108755-2616b69d4d7e?w=150&h=150&fit=crop&crop=face',
        qualification: 'M.Sc. Mathematics',
        address: '123 Oak Street, Springfield',
        joinDate: '2020-08-15',
      },
      {
        id: '2',
        name: 'Michael Chen',
        email: 'michael.chen@school.edu',
        phone: '+1 (555) 234-5678',
        subject: 'Physics',
        experience: 12,
        imageURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        qualification: 'Ph.D. Physics',
        address: '456 Pine Avenue, Springfield',
        joinDate: '2018-03-10',
      },
      {
        id: '3',
        name: 'Emily Rodriguez',
        email: 'emily.rodriguez@school.edu',
        phone: '+1 (555) 345-6789',
        subject: 'English Literature',
        experience: 6,
        imageURL: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        qualification: 'M.A. English',
        address: '789 Elm Street, Springfield',
        joinDate: '2021-09-01',
      }
    ];
    setSavedTeachers(sampleTeachers);
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeacher((prev) => ({
      ...prev,
      [name]: name === 'experience' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    

    if (!teacher.name.trim()) newErrors.name = 'Name is required';
    if (!emailRegex.test(teacher.email)) newErrors.email = 'Invalid email format';
    if (!phoneRegex.test(teacher.phone)) newErrors.phone = 'Invalid phone number';
    if (!teacher.subject.trim()) newErrors.subject = 'Subject is required';
    if (!teacher.qualification.trim()) newErrors.qualification = 'Qualification is required';
    if (!teacher.address.trim()) newErrors.address = 'Address is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setNotification({type: 'error', message: 'Please fix form errors.'});
      return;
    }

    const newTeacher: TeacherData = {
      ...teacher,
      id: Date.now().toString(),
      imageURL,
      joinDate: new Date().toISOString().split('T')[0],
    };

    setSavedTeachers((prev) => [...prev, newTeacher]);
    setNotification({type: 'success', message: 'Teacher added successfully!'});
    setTeacher({
      id: '',
      name: '',
      email: '',
      phone: '',
      subject: '',
      experience: 0,
      imageURL: '',
      qualification: '',
      address: '',
      joinDate: '',
    });
    setImageURL('');
    setErrors({});
    setIsModalOpen(false);
  };

  const filteredTeachers = savedTeachers.filter((t) =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteTeacher = (id: string) => {
    setSavedTeachers(prev => prev.filter(t => t.id !== id));
    setNotification({type: 'success', message: 'Teacher deleted successfully!'});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100">
      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-lg transform transition-all duration-300 ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            {notification.message}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Teacher Management
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">Manage your educational team efficiently</p>
              </div>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">Add Teacher</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent placeholder-gray-500 text-gray-900"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-white/90 transition-all duration-300">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Teachers</p>
                <p className="text-2xl font-bold text-gray-900">{savedTeachers.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Subjects</p>
                <p className="text-2xl font-bold text-gray-900">{new Set(savedTeachers.map(t => t.subject)).size}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg Experience</p>
                <p className="text-2xl font-bold text-gray-900">
                  {savedTeachers.length > 0 ? Math.round(savedTeachers.reduce((sum, t) => sum + t.experience, 0) / savedTeachers.length) : 0}y
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Teacher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTeachers.map((t) => (
            <div key={t.id} className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {t.imageURL ? (
                      <img 
                        src={t.imageURL} 
                        alt={t.name} 
                        className="w-16 h-16 rounded-xl object-cover border-2 border-gray-200"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                        <User className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{t.name}</h3>
                    <p className="text-blue-600 font-medium">{t.subject}</p>
                  </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                    <Edit3 className="w-4 h-4 text-blue-600" />
                  </button>
                  <button 
                    onClick={() => deleteTeacher(t.id)}
                    className="p-2 bg-red-100 hover:bg-red-200 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm truncate">{t.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{t.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Briefcase className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{t.experience} years experience</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Award className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{t.qualification}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm truncate">{t.address}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">Joined {new Date(t.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No teachers found</h3>
            <p className="text-gray-600">Try adjusting your search or add a new teacher.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Add New Teacher</h2>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Image Upload */}
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                  {imageURL ? (
                    <img src={imageURL} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <ImageIcon className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <div>
                  <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors">
                    <Upload className="w-4 h-4" />
                    <span className="font-medium">Upload Photo</span>
                    <input type="file" hidden accept="image/*" onChange={handleImageChange} />
                  </label>
                  <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF (max 5MB)</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  name="name" 
                  placeholder="Full Name" 
                  icon={<User className="w-4 h-4" />} 
                  value={teacher.name} 
                  onChange={handleChange} 
                  required 
                  error={errors.name} 
                />
                <Input 
                  name="email" 
                  placeholder="Email Address" 
                  icon={<Mail className="w-4 h-4" />} 
                  value={teacher.email} 
                  onChange={handleChange} 
                  required 
                  error={errors.email} 
                />
                <Input 
                  name="phone" 
                  placeholder="Phone Number" 
                  icon={<Phone className="w-4 h-4" />} 
                  value={teacher.phone} 
                  onChange={handleChange} 
                  required 
                  error={errors.phone} 
                />
                <Input 
                  name="subject" 
                  placeholder="Subject" 
                  icon={<BookOpen className="w-4 h-4" />} 
                  value={teacher.subject} 
                  onChange={handleChange} 
                  required 
                  error={errors.subject} 
                />
                <Input 
                  name="experience" 
                  placeholder="Years of Experience" 
                  icon={<Briefcase className="w-4 h-4" />} 
                  value={teacher.experience.toString()} 
                  type="number" 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  name="qualification" 
                  placeholder="Qualification" 
                  icon={<Award className="w-4 h-4" />} 
                  value={teacher.qualification} 
                  onChange={handleChange} 
                  required 
                  error={errors.qualification} 
                />
              </div>
              
              <Input 
                name="address" 
                placeholder="Address" 
                icon={<MapPin className="w-4 h-4" />} 
                value={teacher.address} 
                onChange={handleChange} 
                required 
                error={errors.address} 
              />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-gray-200">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                >
                  Add Teacher
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface InputProps {
  name: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  icon,
  type = 'text',
  value,
  onChange,
  required = false,
  error,
}) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      {icon}
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full pl-10 pr-4 py-3 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 ${
        error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white/50'
      }`}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1 ml-1 flex items-center gap-1">
        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
        {error}
      </p>
    )}
  </div>
);

export default TeacherManagement;