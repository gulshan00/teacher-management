// 'use client';
// import React, { useState, useEffect } from 'react';
// import {
//   User,
//   Mail,
//   Phone,
//   BookOpen,
//   Briefcase,
//   Upload,
//   ImageIcon,
//   Plus,
//   X,
//   Search,
//   Users,
//   Award,
//   Calendar,
//   MapPin,
// } from 'lucide-react';

// interface TeacherData {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   subject: string;
//   experience: number;
//   imageURL: string;
//   qualification: string;
//   address: string;
//   joinDate: string;
// }

// const TeacherManagement: React.FC = () => {
//   const [image, setImage] = useState<File | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [teacher, setTeacher] = useState<TeacherData>({
//     id: '',
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     experience: 0,
//     imageURL: '',
//     qualification: '',
//     address: '',
//     joinDate: '',
//   });

//   const [savedTeachers, setSavedTeachers] = useState<TeacherData[]>([]);

//   // Load from memory on mount (localStorage replacement)
//   useEffect(() => {
//     // Initialize with some sample data for demonstration
//     const sampleTeachers: TeacherData[] = [
//       {
//         id: '1',
//         name: 'Sarah Johnson',
//         email: 'sarah.johnson@school.edu',
//         phone: '+1 (555) 123-4567',
//         subject: 'Mathematics',
//         experience: 8,
//         imageURL: 'https://images.unsplash.com/photo-1494790108755-2616b69d4d7e?w=150&h=150&fit=crop&crop=face',
//         qualification: 'M.Sc. Mathematics',
//         address: '123 Oak Street, Springfield',
//         joinDate: '2020-08-15',
//       },
//       {
//         id: '2',
//         name: 'Michael Chen',
//         email: 'michael.chen@school.edu',
//         phone: '+1 (555) 234-5678',
//         subject: 'Physics',
//         experience: 12,
//         imageURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
//         qualification: 'Ph.D. Physics',
//         address: '456 Pine Avenue, Springfield',
//         joinDate: '2018-01-20',
//       },
//     ];
//     setSavedTeachers(sampleTeachers);
//   }, []);

//   // Handle image upload
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setImage(file);
//       const imageURL = URL.createObjectURL(file);
//       setTeacher((prev) => ({ ...prev, imageURL }));
//     }
//   };

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setTeacher((prev) => ({ 
//       ...prev, 
//       [name]: name === 'experience' ? Number(value) : value 
//     }));
//   };

//   // Handle form submit
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newTeacher = {
//       ...teacher,
//       id: Date.now().toString(),
//       joinDate: new Date().toISOString().split('T')[0],
//     };
    
//     const updated = [...savedTeachers, newTeacher];
//     setSavedTeachers(updated);

//     // Reset form
//     setTeacher({
//       id: '',
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
//       experience: 0,
//       imageURL: '',
//       qualification: '',
//       address: '',
//       joinDate: '',
//     });
//     setImage(null);
//     setIsModalOpen(false);
//   };

//   // Filter teachers based on search
//   const filteredTeachers = savedTeachers.filter(t =>
//     t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     t.subject.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">Teacher Management</h1>
//               <p className="text-gray-600 mt-1">Manage your educational team efficiently</p>
//             </div>
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
//             >
//               <Plus className="w-5 h-5" />
//               <span>Add New Teacher</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
//             <div className="flex items-center">
//               <div className="bg-blue-100 p-3 rounded-xl">
//                 <Users className="w-6 h-6 text-blue-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm text-gray-600">Total Teachers</p>
//                 <p className="text-2xl font-bold text-gray-900">{savedTeachers.length}</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
//             <div className="flex items-center">
//               <div className="bg-green-100 p-3 rounded-xl">
//                 <BookOpen className="w-6 h-6 text-green-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm text-gray-600">Subjects Covered</p>
//                 <p className="text-2xl font-bold text-gray-900">{new Set(savedTeachers.map(t => t.subject)).size}</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
//             <div className="flex items-center">
//               <div className="bg-purple-100 p-3 rounded-xl">
//                 <Award className="w-6 h-6 text-purple-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm text-gray-600">Avg. Experience</p>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {savedTeachers.length > 0 ? Math.round(savedTeachers.reduce((sum, t) => sum + t.experience, 0) / savedTeachers.length) : 0} yrs
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search teachers by name or subject..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//         </div>

//         {/* Teachers Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredTeachers.map((t) => (
//             <div
//               key={t.id}
//               className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-all duration-200 hover:border-blue-200"
//             >
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
//                   {t.imageURL ? (
//                     <img
//                       src={t.imageURL}
//                       alt={t.name}
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center">
//                       <User className="w-8 h-8 text-gray-400" />
//                     </div>
//                   )}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 text-lg">{t.name}</h3>
//                   <p className="text-blue-600 font-medium">{t.subject}</p>
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <div className="flex items-center text-sm text-gray-600">
//                   <Mail className="w-4 h-4 mr-2" />
//                   <span className="truncate">{t.email}</span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <Phone className="w-4 h-4 mr-2" />
//                   <span>{t.phone}</span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <Briefcase className="w-4 h-4 mr-2" />
//                   <span>{t.experience} years experience</span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <Award className="w-4 h-4 mr-2" />
//                   <span>{t.qualification}</span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <MapPin className="w-4 h-4 mr-2" />
//                   <span className="truncate">{t.address}</span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <Calendar className="w-4 h-4 mr-2" />
//                   <span>Joined {new Date(t.joinDate).toLocaleDateString()}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredTeachers.length === 0 && (
//           <div className="text-center py-12">
//             <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <p className="text-gray-500 text-lg">No teachers found</p>
//             <p className="text-gray-400">Try adjusting your search or add a new teacher</p>
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-2xl font-bold text-gray-900">Add New Teacher</h2>
//                 <button
//                   onClick={() => setIsModalOpen(false)}
//                   className="text-gray-400 hover:text-gray-600 transition-colors"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
//             </div>

//             <div onSubmit={handleSubmit} className="p-6 space-y-6">
//               {/* Image Upload */}
//               <div className="flex items-center space-x-6">
//                 <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-50">
//                   {teacher.imageURL ? (
//                     <img
//                       src={teacher.imageURL}
//                       alt="Preview"
//                       className="object-cover w-full h-full"
//                     />
//                   ) : (
//                     <ImageIcon className="w-10 h-10 text-gray-400" />
//                   )}
//                 </div>
//                 <label className="cursor-pointer flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
//                   <Upload className="w-5 h-5" />
//                   <span>Upload Profile Photo</span>
//                   <input
//                     type="file"
//                     className="hidden"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                   />
//                 </label>
//               </div>

//               {/* Form Fields */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <InputField
//                   icon={<User className="w-5 h-5 text-gray-400" />}
//                   name="name"
//                   value={teacher.name}
//                   placeholder="Full Name"
//                   onChange={handleChange}
//                   required
//                 />
//                 <InputField
//                   icon={<Mail className="w-5 h-5 text-gray-400" />}
//                   name="email"
//                   value={teacher.email}
//                   placeholder="Email Address"
//                   type="email"
//                   onChange={handleChange}
//                   required
//                 />
//                 <InputField
//                   icon={<Phone className="w-5 h-5 text-gray-400" />}
//                   name="phone"
//                   value={teacher.phone}
//                   placeholder="Phone Number"
//                   type="tel"
//                   onChange={handleChange}
//                   required
//                 />
//                 <InputField
//                   icon={<BookOpen className="w-5 h-5 text-gray-400" />}
//                   name="subject"
//                   value={teacher.subject}
//                   placeholder="Subject"
//                   onChange={handleChange}
//                   required
//                 />
//                 <InputField
//                   icon={<Briefcase className="w-5 h-5 text-gray-400" />}
//                   name="experience"
//                   value={teacher.experience.toString()}
//                   placeholder="Years of Experience"
//                   type="number"
//                   onChange={handleChange}
//                   required
//                 />
//                 <InputField
//                   icon={<Award className="w-5 h-5 text-gray-400" />}
//                   name="qualification"
//                   value={teacher.qualification}
//                   placeholder="Qualification"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <InputField
//                 icon={<MapPin className="w-5 h-5 text-gray-400" />}
//                 name="address"
//                 value={teacher.address}
//                 placeholder="Address"
//                 onChange={handleChange}
//                 required
//               />

//               {/* Submit Button */}
//               <div className="flex space-x-4 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="flex-1 px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
//                 >
//                   Add Teacher
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Reusable input field component
// interface InputProps {
//   icon: React.ReactNode;
//   name: string;
//   type?: string;
//   value: string;
//   placeholder: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   required?: boolean;
// }

// const InputField: React.FC<InputProps> = ({
//   icon,
//   name,
//   type = 'text',
//   value,
//   placeholder,
//   onChange,
//   required = false,
// }) => {
//   return (
//     <div className="relative">
//       <span className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
//         {icon}
//       </span>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         required={required}
//         className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//       />
//     </div>
//   );
// };

// export default TeacherManagement;



'use client';
import React, { useState, useEffect } from 'react';
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
  const [image, setImage] = useState<File | null>(null);
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

  // Load from memory on mount (localStorage replacement)
  useEffect(() => {
    // Initialize with some sample data for demonstration
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

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const imageURL = URL.createObjectURL(file);
      setTeacher((prev) => ({ ...prev, imageURL }));
    }
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeacher((prev) => ({ 
      ...prev, 
      [name]: name === 'experience' ? Number(value) : value 
    }));
  };

  // Handle modal close with form reset
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset form when closing modal
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
    setImage(null);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
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

    // Reset form
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
    setImage(null);
    setIsModalOpen(false);
    
    // Show success message
    alert('Teacher added successfully!');
  };

  // Filter teachers based on search
  const filteredTeachers = savedTeachers.filter(t =>
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
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Teachers</p>
                <p className="text-2xl font-bold text-gray-900">{savedTeachers.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-xl">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Subjects Covered</p>
                <p className="text-2xl font-bold text-gray-900">{new Set(savedTeachers.map(t => t.subject)).size}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Avg. Experience</p>
                <p className="text-2xl font-bold text-gray-900">
                  {savedTeachers.length > 0 ? Math.round(savedTeachers.reduce((sum, t) => sum + t.experience, 0) / savedTeachers.length) : 0} yrs
                </p>
              </div>
            </div>
          </div>
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
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTeachers.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-all duration-200 hover:border-blue-200"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                  {t.imageURL ? (
                    <img
                      src={t.imageURL}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
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
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="truncate">{t.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{t.phone}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>{t.experience} years experience</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span>{t.qualification}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="truncate">{t.address}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Joined {new Date(t.joinDate).toLocaleDateString()}</span>
                </div>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Add New Teacher</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Image Upload */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-50">
                  {teacher.imageURL ? (
                    <img
                      src={teacher.imageURL}
                      alt="Preview"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <ImageIcon className="w-10 h-10 text-gray-400" />
                  )}
                </div>
                <label className="cursor-pointer flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  <Upload className="w-5 h-5" />
                  <span>Upload Profile Photo</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  icon={<User className="w-5 h-5 text-gray-400" />}
                  name="name"
                  value={teacher.name}
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<Mail className="w-5 h-5 text-gray-400" />}
                  name="email"
                  value={teacher.email}
                  placeholder="Email Address"
                  type="email"
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<Phone className="w-5 h-5 text-gray-400" />}
                  name="phone"
                  value={teacher.phone}
                  placeholder="Phone Number"
                  type="tel"
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<BookOpen className="w-5 h-5 text-gray-400" />}
                  name="subject"
                  value={teacher.subject}
                  placeholder="Subject"
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<Briefcase className="w-5 h-5 text-gray-400" />}
                  name="experience"
                  value={teacher.experience.toString()}
                  placeholder="Years of Experience"
                  type="number"
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<Award className="w-5 h-5 text-gray-400" />}
                  name="qualification"
                  value={teacher.qualification}
                  placeholder="Qualification"
                  onChange={handleChange}
                  required
                />
              </div>

              <InputField
                icon={<MapPin className="w-5 h-5 text-gray-400" />}
                name="address"
                value={teacher.address}
                placeholder="Address"
                onChange={handleChange}
                required
              />

              {/* Submit Button */}
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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

// Reusable input field component
interface InputProps {
  icon: React.ReactNode;
  name: string;
  type?: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputProps> = ({
  icon,
  name,
  type = 'text',
  value,
  placeholder,
  onChange,
  required = false,
}) => {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
        {icon}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      />
    </div>
  );
};

export default TeacherManagement;