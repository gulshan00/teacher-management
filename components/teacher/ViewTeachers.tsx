'use client';
import Image from 'next/image';
import {
   Mail, Phone,
   MapPin,
} from 'lucide-react';

export default function ViewTeachers() {

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
    }
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Teachers Directory</h1>
        <p className="text-gray-600 mt-2">Explore our top faculty members</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {teachers.map(teacher => (
          <div key={teacher.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center space-x-5 mb-4">
              <div className="relative">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                  unoptimized
                />
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                  teacher.status === 'Available' ? 'bg-green-500' : 'bg-orange-500'
                }`} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900">{teacher.name}</h2>
                <p className="text-sm text-blue-600">{teacher.department}</p>
                <p className="text-xs text-gray-500">{teacher.qualification}</p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm italic text-gray-600">“{teacher.specialization}”</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center text-sm text-gray-600 mb-3">
              <div>
                <div className="text-lg font-bold text-gray-800">{teacher.experience.split(' ')[0]}</div>
                <div>Years Exp.</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-800">{teacher.students}</div>
                <div>Students</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {teacher.subjects.map((subject, i) => (
                <span key={i} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                  {subject}
                </span>
              ))}
            </div>

            <div className="space-y-1 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{teacher.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{teacher.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{teacher.location}</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-200">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
