import { Link } from 'react-router-dom';
import { employees } from '../data/employees';
import { useState, useEffect } from 'react';

export default function EmployeeList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="w-16 h-16 relative">
          <div className="w-16 h-16 rounded-full absolute border-2 border-transparent animate-spin"
               style={{
                 borderTopColor: '#A4488D',
                 borderRightColor: '#593896',
                 borderBottomColor: '#2372BB'
               }}>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg text-[rgb(var(--color-text))] p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-20 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6">
            Team Ai Avatar Bangladesh
          </h1>
          <p className="text-[rgb(var(--color-text-secondary)] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Meet our talented AI Avatar team members who are revolutionizing the digital landscape in Bangladesh
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-[95vw] sm:max-w-md mx-auto mb-12 md:mb-16">
          <div className="p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search by name or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-[rgb(var(--color-background-start))] border-0 focus:ring-0 text-[rgb(var(--color-text))] placeholder-[rgb(var(--color-text-secondary))] text-sm sm:text-base transition-all duration-300 rounded-lg"
            />
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {filteredEmployees.map((employee, index) => (
            <Link
              key={employee.id}
              to={`/${employee.slug}`}
              className="group mx-auto w-[95vw] sm:w-full sm:max-w-[400px] p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              style={{ 
                opacity: 0,
                animation: 'fadeIn 0.5s ease forwards',
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="relative w-full h-[220px] overflow-hidden bg-[rgb(var(--color-background-start))] rounded-lg">
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-background-start))] via-[rgb(var(--color-background-start))]/50 to-transparent opacity-90 group-hover:opacity-95 transition-all duration-500">
                    <div className="absolute bottom-0 p-6 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                      <div className="space-y-2">
                        <h2 className="text-xl sm:text-2xl font-bold gradient-text">
                          {employee.name}
                        </h2>
                        <p className="text-sm sm:text-base text-[rgb(var(--color-text-secondary))] group-hover:text-[rgb(var(--color-text))] transition-colors duration-300">
                          {employee.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredEmployees.length === 0 && (
          <div className="text-center mt-8 p-8 border-[1px] border-[rgb(var(--color-border))] rounded-lg mx-4 bg-[rgb(var(--color-background-start))]/50 backdrop-blur-sm">
            <p className="text-lg text-[rgb(var(--color-text))]">No employees found matching your search.</p>
            <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-2">Try adjusting your search terms</p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 md:mt-24 pb-8 px-4">
          <div className="p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] rounded-lg">
            <div className="bg-[rgb(var(--color-background-start))] rounded-lg p-6 sm:p-8 text-center">
              <p className="text-[rgb(var(--color-text-secondary)] text-sm sm:text-base leading-relaxed">
                House No-6 (5th Floor), Road No - 2/B, Baridhara J Block, Dhaka 1212
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}