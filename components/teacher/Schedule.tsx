
'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Users, Plus, Search, BarChart3, X, BookOpen, MapPin } from 'lucide-react';

export default function TeacherSchedule() {
  const [schedules, setSchedules] = useState([
    { id: 1, teacher: 'John Smith', subject: 'Mathematics', class: '10A', time: '09:00', day: 'Monday', room: '101' },
    { id: 2, teacher: 'Sarah Johnson', subject: 'English Literature', class: '9B', time: '10:45', day: 'Monday', room: '203' },
    { id: 3, teacher: 'Mike Wilson', subject: 'Physics', class: '11C', time: '13:00', day: 'Tuesday', room: 'Lab1' },
    { id: 4, teacher: 'Emily Davis', subject: 'World History', class: '8A', time: '14:45', day: 'Wednesday', room: '105' },
    { id: 5, teacher: 'John Smith', subject: 'Algebra', class: '12B', time: '08:00', day: 'Thursday', room: '101' },
    { id: 6, teacher: 'Sarah Johnson', subject: 'Creative Writing', class: '7A', time: '15:00', day: 'Friday', room: '203' },
  ]);

  const [form, setForm] = useState({ teacher: '', subject: '', class: '', time: '', day: 'Monday', room: '' });
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showGraph, setShowGraph] = useState(false);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['08:00', '09:00', '10:45', '13:00', '14:45', '15:00'];

  const filtered = schedules.filter(s => 
    s.teacher.toLowerCase().includes(search.toLowerCase()) ||
    s.subject.toLowerCase().includes(search.toLowerCase()) ||
    s.class.toLowerCase().includes(search.toLowerCase())
  );

  const addSchedule = () => {
    if (form.teacher && form.subject) {
      setSchedules([...schedules, { ...form, id: Date.now() }]);
      setForm({ teacher: '', subject: '', class: '', time: '', day: 'Monday', room: '' });
      setShowModal(false);
    }
  };

  const deleteSchedule = (id) => setSchedules(schedules.filter(s => s.id !== id));

  const getAvailabilityData = () => {
    const teachers = [...new Set(schedules.map(s => s.teacher))];
    return teachers.map(teacher => {
      const teacherSchedules = schedules.filter(s => s.teacher === teacher);
      const totalSlots = days.length * times.length;
      const bookedSlots = teacherSchedules.length;
      const availability = ((totalSlots - bookedSlots) / totalSlots * 100).toFixed(1);
      
      return {
        teacher,
        availability: parseFloat(availability),
        booked: bookedSlots,
        free: totalSlots - bookedSlots
      };
    });
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getColorByDay = (day) => {
    const colors = {
      Monday: 'bg-blue-500',
      Tuesday: 'bg-green-500',
      Wednesday: 'bg-yellow-500',
      Thursday: 'bg-purple-500',
      Friday: 'bg-pink-500'
    };
    return colors[day] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Teacher Schedule</h1>
                <p className="text-gray-600 mt-1">Manage and organize teacher schedules efficiently</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowGraph(!showGraph)}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <BarChart3 className="w-5 h-5" />
                {showGraph ? 'Hide Analytics' : 'Show Analytics'}
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <Plus className="w-5 h-5" />
                Add Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Search & Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Search */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search teachers, subjects, or classes..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Teachers</p>
                <p className="text-2xl font-bold text-gray-900">{[...new Set(schedules.map(s => s.teacher))].length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Schedules</p>
                <p className="text-2xl font-bold text-gray-900">{filtered.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Dashboard */}
        {showGraph && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Teacher Availability Analytics</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getAvailabilityData().map((data, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {getInitials(data.teacher)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{data.teacher}</h3>
                      <p className="text-sm text-gray-600">{data.booked} scheduled classes</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Availability</span>
                      <span className="text-sm font-semibold text-gray-900">{data.availability}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${data.availability}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{data.booked} booked</span>
                      <span>{data.free} free slots</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(schedule => (
            <div key={schedule.id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {getInitials(schedule.teacher)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{schedule.teacher}</h3>
                    <p className="text-blue-600 text-sm font-medium">{schedule.subject}</p>
                  </div>
                </div>
                <button 
                  onClick={() => deleteSchedule(schedule.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>Class {schedule.class}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{schedule.time}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Room {schedule.room}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getColorByDay(schedule.day)}`}>
                  {schedule.day}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No schedules found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or add a new schedule</p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Add First Schedule
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Add New Schedule</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <input
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Teacher Name"
                value={form.teacher}
                onChange={(e) => setForm({...form, teacher: e.target.value})}
              />
              <input
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({...form, subject: e.target.value})}
              />
              <input
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Class"
                value={form.class}
                onChange={(e) => setForm({...form, class: e.target.value})}
              />
              <select 
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.day}
                onChange={(e) => setForm({...form, day: e.target.value})}
              >
                {days.map(day => <option key={day} value={day}>{day}</option>)}
              </select>
              <select 
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.time}
                onChange={(e) => setForm({...form, time: e.target.value})}
              >
                <option value="">Select Time</option>
                {times.map(time => <option key={time} value={time}>{time}</option>)}
              </select>
              <input
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Room"
                value={form.room}
                onChange={(e) => setForm({...form, room: e.target.value})}
              />
            </div>
            
            <div className="flex gap-3 mt-8">
              <button 
                onClick={addSchedule}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
              >
                Add Schedule
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
      )}
    </div>
  );
}