'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  User,
  Mail,
  Phone,
  BookOpen,
  Briefcase,
  Upload,
  ImageIcon,
  Plus,
  X,
  Search,
  Users,
  Award,
  Calendar,
  MapPin,
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
        joinDate: '2018-01-20',
      },
    ];
    setSavedTeachers(sampleTeachers);
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setTeacher((prev) => ({ ...prev, imageURL }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeacher((prev) => ({
      ...prev,
      [name]: name === 'experience' ? Number(value) : value,
    }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!teacher.name || !teacher.email || !teacher.phone || !teacher.subject || !teacher.qualification || !teacher.address) {
      alert('Please fill in all required fields');
      return;
    }

    const newTeacher = {
      ...teacher,
      id: Date.now().toString(),
      joinDate: new Date().toISOString().split('T')[0],
    };

    const updated = [...savedTeachers, newTeacher];
    setSavedTeachers(updated);
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
    setIsModalOpen(false);
    alert('Teacher added successfully!');
  };

  const filteredTeachers = savedTeachers.filter((t) =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Teacher Management</h1>
              <p className="text-gray-600 mt-1">Manage your educational team efficiently</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add New Teacher</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard icon={<Users className="text-blue-600" />} label="Total Teachers" value={savedTeachers.length} bg="bg-blue-100" />
          <StatCard icon={<BookOpen className="text-green-600" />} label="Subjects Covered" value={new Set(savedTeachers.map(t => t.subject)).size} bg="bg-green-100" />
          <StatCard icon={<Award className="text-purple-600" />} label="Avg. Experience" value={savedTeachers.length > 0 ? Math.round(savedTeachers.reduce((sum, t) => sum + t.experience, 0) / savedTeachers.length) : 0 + ' yrs'} bg="bg-purple-100" />
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search teachers by name or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 text-black py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTeachers.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-all duration-200 hover:border-blue-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 relative">
                  {t.imageURL ? (
                    <Image src={t.imageURL} alt={t.name} fill className="object-cover" unoptimized />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{t.name}</h3>
                  <p className="text-blue-600 font-medium">{t.subject}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <DetailRow icon={<Mail className="w-4 h-4" />} value={t.email} />
                <DetailRow icon={<Phone className="w-4 h-4" />} value={t.phone} />
                <DetailRow icon={<Briefcase className="w-4 h-4" />} value={`${t.experience} years experience`} />
                <DetailRow icon={<Award className="w-4 h-4" />} value={t.qualification} />
                <DetailRow icon={<MapPin className="w-4 h-4" />} value={t.address} />
                <DetailRow icon={<Calendar className="w-4 h-4" />} value={`Joined ${new Date(t.joinDate).toLocaleDateString()}`} />
              </div>
            </div>
          ))}
        </div>

        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No teachers found</p>
            <p className="text-gray-400">Try adjusting your search or add a new teacher</p>
          </div>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Add New Teacher</h2>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Profile Image Upload */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-50 relative">
                  {teacher.imageURL ? (
                    <Image src={teacher.imageURL} alt="Preview" fill className="object-cover" unoptimized />
                  ) : (
                    <ImageIcon className="w-10 h-10 text-gray-400" />
                  )}
                </div>
                <label className="cursor-pointer flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700">
                  <Upload className="w-5 h-5" />
                  <span>Upload Profile Photo</span>
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                </label>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  icon={<User />}
                  name="name"
                  value={teacher.name}
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<Mail />}
                  name="email"
                  value={teacher.email}
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<Phone />}
                  name="phone"
                  value={teacher.phone}
                  placeholder="Phone"
                  type="tel"
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<BookOpen />}
                  name="subject"
                  value={teacher.subject}
                  placeholder="Subject"
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<Briefcase />}
                  name="experience"
                  value={teacher.experience.toString()}
                  placeholder="Experience"
                  type="number"
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<Award />}
                  name="qualification"
                  value={teacher.qualification}
                  placeholder="Qualification"
                  onChange={handleChange}
                  required
                />
              </div>

              <InputField
                icon={<MapPin />}
                name="address"
                value={teacher.address}
                placeholder="Address"
                onChange={handleChange}
                required
              />

              {/* Buttons */}
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
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

// Components
const StatCard = ({ icon, label, value, bg }: { icon: React.ReactNode; label: string; value: number | string; bg: string }) => (
  <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
    <div className="flex items-center">
      <div className={`${bg} p-3 rounded-xl`}>{icon}</div>
      <div className="ml-4">
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

const DetailRow = ({ icon, value }: { icon: React.ReactNode; value: string }) => (
  <div className="flex items-center">
    {icon}
    <span className="ml-2 truncate">{value}</span>
  </div>
);

interface InputProps {
  icon: React.ReactNode;
  name: string;
  type?: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputProps> = ({ icon, name, type = 'text', value, placeholder, onChange, required }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full pl-10 pr-4 py-3 text-black border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);

export default TeacherManagement;
