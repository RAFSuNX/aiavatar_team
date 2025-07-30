import { Link } from 'react-router-dom';
import { employees } from '../data/employees';
import { useState, useEffect } from 'react';
import { Search, Users, MapPin, Code, Cpu, Zap, Building2, Mail, Phone } from 'lucide-react';

export default function EmployeeList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgb(var(--color-background))] flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="floating-orb absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-violet-500/20"></div>
          <div className="floating-orb absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-violet-500/15 to-blue-500/15"></div>
        </div>
        
        {/* Loading Animation */}
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 relative mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-transparent animate-spin border-t-blue-500 border-r-violet-500"></div>
            <div className="absolute inset-2 rounded-full border-2 border-transparent animate-spin border-t-violet-500 border-l-blue-500" style={{ animationDirection: 'reverse' }}></div>
          </div>
          <div className="tech-gradient-text text-xl font-semibold mb-2">
            Loading Team Directory
          </div>
          <div className="text-slate-400 text-sm">Initializing AI Avatar Bangladesh</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--color-background))] text-[rgb(var(--color-text))] relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-violet-500/10"></div>
        <div className="floating-orb absolute top-1/2 right-10 w-96 h-96 bg-gradient-to-bl from-violet-500/8 to-blue-500/8"></div>
        <div className="floating-orb absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-blue-500/12 to-violet-500/12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div className="status-indicator"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="tech-gradient-text">Team AI Avatar</span>
            <br />
            <span className="text-slate-300 text-2xl sm:text-3xl lg:text-4xl font-normal">
              Bangladesh
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Meet our innovative team of <span className="text-blue-400 font-medium">AI specialists</span> and 
            <span className="text-violet-400 font-medium"> digital creators</span> building the future of avatar technology
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="metric-card">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-2xl font-bold text-white">{employees.length}</span>
              </div>
              <p className="text-sm text-slate-400">Team Members</p>
            </div>
            <div className="metric-card">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-violet-400" />
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <p className="text-sm text-slate-400">Departments</p>
            </div>
            <div className="metric-card">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <p className="text-sm text-slate-400">Office</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search team members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[rgb(var(--color-surface))]/50 backdrop-blur-xl border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
              />
            </div>
          </div>
        </div>
        
        {/* Team Grid */}
        <div className="tech-grid mb-16">
          {filteredEmployees.map((employee, index) => (
            <Link
              key={employee.id}
              to={`/${employee.slug}`}
              className="group block"
              style={{ 
                opacity: 0,
                animation: 'fadeInUp 0.6s ease forwards',
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="tech-card rounded-2xl overflow-hidden h-[320px] relative">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-surface))] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="tech-badge">
                      <div className="status-indicator"></div>
                      <span>Active</span>
                    </div>
                  </div>
                  
                  {/* Department Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="glass-panel rounded-lg px-3 py-1">
                      <span className="text-xs font-medium text-slate-300">{employee.department}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Name & Role */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {employee.name}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium">{employee.role}</p>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      <span className="truncate max-w-[120px]">{employee.email.split('@')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>Available</span>
                    </div>
                  </div>
                  
                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-1">
                    {employee.responsibilities.slice(0, 2).map((skill, i) => (
                      <span key={i} className="code-accent text-xs">
                        {skill.split(' ').slice(0, 2).join(' ')}
                      </span>
                    ))}
                    {employee.responsibilities.length > 2 && (
                      <span className="text-xs text-slate-500">+{employee.responsibilities.length - 2} more</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredEmployees.length === 0 && (
          <div className="text-center py-16">
            <div className="glass-panel rounded-2xl p-12 max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">No Team Members Found</h3>
              <p className="text-slate-400 mb-6">
                Try adjusting your search criteria or browse all team members.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="tech-button text-white font-medium"
              >
                Clear Search
              </button>
            </div>
          </div>
        )}

        {/* Section Divider */}
        <div className="section-divider">
          <div className="section-divider-icon">
            <Code className="w-5 h-5 text-blue-400" />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pb-12">
          <div className="glass-panel rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-blue-400" />
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Our Tech Hub
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-lg mx-auto">
              House No-6 (5th Floor), Road No - 2/B,<br />
              Baridhara J Block, Dhaka 1212, Bangladesh
            </p>
            
            <div className="flex items-center justify-center gap-8 mt-6 pt-6 border-t border-slate-700/50">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Powered by AI</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span>Est. 2024</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}