import { useParams, Link } from 'react-router-dom';
import { employees } from '../data/employees';
import { useEffect, useState } from 'react';
import { Mail, Phone, Building, User, ArrowLeft, Calendar, MapPin } from 'lucide-react';

export default function EmployeeDetail() {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const employee = employees.find(emp => emp.slug === slug);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-16 h-16 relative">
          <div className="w-16 h-16 rounded-full absolute border-2 border-transparent animate-spin"
               style={{
                 borderTopColor: '#E70B3B',
                 borderRightColor: '#404040',
                 borderBottomColor: '#E70B3B'
               }}>
          </div>
        </div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="w-[95vw] sm:max-w-md text-center">
          <div className="p-[1px] bg-gradient-to-r from-[#E70B3B] via-white to-[#E70B3B] rounded-lg">
            <div className="relative bg-gray-900 p-8 rounded-lg">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">Employee not found</h1>
              <p className="text-gray-400 mb-6">The employee you're looking for doesn't exist or has been removed.</p>
              <Link 
                to="/" 
                className="text-white hover:text-[#E70B3B] transition-colors"
              >
                ← Back to Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white hover:text-[#E70B3B] transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Team Directory</span>
          </Link>
        </div>
      </div>

      {/* Document Container */}
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <div className="bg-white text-black shadow-2xl rounded-lg overflow-hidden">
          {/* Document Header */}
          <div className="bg-gradient-to-r from-[#E70B3B] to-[#B8092E] text-white p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/70 rounded-full"></div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase ml-4">
                Employee Profile Document
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
              {employee.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              {employee.role}
            </p>
          </div>

          {/* Document Body */}
          <div className="p-8 md:p-12">
            {/* Profile Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Photo and Basic Info */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg border-4 border-gray-100">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#E70B3B] rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Building className="w-5 h-5 text-[#E70B3B]" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Department</p>
                      <p className="font-semibold text-gray-900">{employee.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-[#E70B3B]" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Employee ID</p>
                      <p className="font-semibold text-gray-900">EMP-{employee.id.toString().padStart(4, '0')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-[#E70B3B] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">01</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <a 
                      href={`mailto:${employee.email}`}
                      className="group p-6 border-2 border-gray-200 rounded-lg hover:border-[#E70B3B] transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-100 group-hover:bg-[#E70B3B] rounded-lg flex items-center justify-center transition-colors">
                          <Mail className="w-6 h-6 text-gray-600 group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Address</p>
                          <p className="font-semibold text-gray-900 group-hover:text-[#E70B3B] transition-colors break-all">
                            {employee.email}
                          </p>
                        </div>
                      </div>
                    </a>

                    <a 
                      href={`tel:${employee.phone.replace(/\s+/g, '')}`}
                      className="group p-6 border-2 border-gray-200 rounded-lg hover:border-[#E70B3B] transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-100 group-hover:bg-[#E70B3B] rounded-lg flex items-center justify-center transition-colors">
                          <Phone className="w-6 h-6 text-gray-600 group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone Number</p>
                          <p className="font-semibold text-gray-900 group-hover:text-[#E70B3B] transition-colors">
                            {employee.phone}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E70B3B] rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Office Location</p>
                      <p className="font-semibold text-gray-900 leading-relaxed">
                        House No-6 (5th Floor), Road No - 2/B,<br />
                        Baridhara J Block, Dhaka 1212, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsibilities Section */}
            <div className="border-t-2 border-gray-100 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-[#E70B3B] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">02</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Key Responsibilities</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {employee.responsibilities.map((responsibility, index) => (
                  <div 
                    key={index}
                    className="group p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-[#E70B3B] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#E70B3B] rounded-full flex items-center justify-center transition-colors flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-gray-600 group-hover:text-white">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {responsibility}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Footer */}
            <div className="border-t-2 border-gray-100 mt-16 pt-8">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#E70B3B] rounded-full"></div>
                  <span>Team Ai Avatar Bangladesh</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Employee Profile Document</span>
                  <div className="w-2 h-2 bg-[#E70B3B] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}