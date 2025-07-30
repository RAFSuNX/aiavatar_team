import { useParams, Link } from 'react-router-dom';
import { employees } from '../data/employees';
import { useEffect, useState } from 'react';
import { Mail, Phone, Building2, User, ArrowLeft, MapPin, Code, Cpu, Target, CheckCircle, ExternalLink } from 'lucide-react';

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
      <div className="min-h-screen bg-[rgb(var(--color-background))] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-orb absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-violet-500/15"></div>
          <div className="floating-orb absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-l from-violet-500/10 to-blue-500/10"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <div className="w-20 h-20 relative mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-transparent animate-spin border-t-blue-500 border-r-violet-500"></div>
            <div className="absolute inset-3 rounded-full border-2 border-transparent animate-spin border-t-violet-500 border-l-blue-500" style={{ animationDirection: 'reverse' }}></div>
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="tech-gradient-text text-2xl font-semibold mb-2">
            Loading Profile
          </div>
          <div className="text-slate-400 text-sm">Fetching team member data</div>
        </div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="min-h-screen bg-[rgb(var(--color-background))] text-[rgb(var(--color-text))] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-orb absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-violet-500/10"></div>
          <div className="floating-orb absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-bl from-violet-500/8 to-blue-500/8"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <div className="glass-panel rounded-2xl p-12">
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <User className="w-10 h-10 text-slate-400" />
            </div>
            <h1 className="text-3xl font-bold mb-6 tech-gradient-text">
              Team Member Not Found
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              The team member you're looking for doesn't exist in our directory.
            </p>
            <Link 
              to="/" 
              className="tech-button text-white font-medium inline-flex items-center gap-3"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Team Directory
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--color-background))] text-[rgb(var(--color-text))] relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-violet-500/8"></div>
        <div className="floating-orb absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-bl from-violet-500/6 to-blue-500/6"></div>
        <div className="floating-orb absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-violet-500/10"></div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[rgb(var(--color-background))]/80 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-800/50 group-hover:bg-blue-500/20 flex items-center justify-center transition-all duration-300 border border-slate-700/50 group-hover:border-blue-500/30">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span className="font-medium">Back to Team</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Profile Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl blur opacity-20"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden tech-card">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className="tech-badge">
                    <div className="status-indicator"></div>
                    <span>Active</span>
                  </div>
                </div>
                
                {/* Employee ID */}
                <div className="absolute bottom-4 left-4">
                  <div className="glass-panel rounded-lg px-3 py-2">
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Employee ID</p>
                    <p className="text-white font-mono font-semibold">EMP-{employee.id.toString().padStart(4, '0')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-6 h-6 text-blue-400" />
                <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 via-violet-500/30 to-transparent"></div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="tech-gradient-text">
                  {employee.name}
                </span>
              </h1>
              
              <div className="space-y-4 mb-8">
                <div className="tech-badge text-lg px-4 py-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">{employee.role}</span>
                </div>
                
                <div className="tech-badge text-base px-4 py-2 bg-violet-500/10 border-violet-500/20">
                  <Building2 className="w-4 h-4 text-violet-400" />
                  <span>{employee.department}</span>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a 
                href={`mailto:${employee.email}`}
                className="group tech-card rounded-xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Email</p>
                    <p className="font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                      {employee.email}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </a>

              <a 
                href={`tel:${employee.phone.replace(/\s+/g, '')}`}
                className="group tech-card rounded-xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                    <p className="font-semibold text-white group-hover:text-violet-400 transition-colors">
                      {employee.phone}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-violet-400 transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="section-divider">
          <div className="section-divider-icon">
            <Code className="w-5 h-5 text-blue-400" />
          </div>
        </div>

        {/* Responsibilities Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tech-gradient-text">
              Core Responsibilities
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Key areas of expertise and primary responsibilities within the organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {employee.responsibilities.map((responsibility, index) => (
              <div 
                key={index}
                className="group tech-card rounded-xl p-6 hover:scale-105 transition-all duration-300"
                style={{
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease forwards',
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 border border-slate-600/50">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-base leading-relaxed font-medium group-hover:text-blue-400 transition-colors">
                      {responsibility}
                    </p>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-full transition-all duration-500 delay-100 mt-3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Location */}
        <div className="text-center">
          <div className="relative inline-block max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
            <div className="relative glass-panel rounded-2xl p-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-blue-400" />
                <div className="status-indicator"></div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 tech-gradient-text">
                Office Location
              </h3>
              
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                House No-6 (5th Floor), Road No - 2/B,<br />
                Baridhara J Block, Dhaka 1212, Bangladesh
              </p>
              
              <div className="flex items-center justify-center gap-8 pt-6 border-t border-slate-700/50">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Building2 className="w-4 h-4 text-blue-400" />
                  <span>Tech Hub</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Code className="w-4 h-4 text-violet-400" />
                  <span>AI Development Center</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}