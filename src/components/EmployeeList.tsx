import { Link } from 'react-router-dom';
import { employees } from '../data/employees';
import { MapPin } from 'lucide-react';
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
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[rgb(var(--color-primary))]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg text-[rgb(var(--color-text))] p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text px-2 mb-4">
           Team Ai Avatar Bangladesh
          </h1>
          <p className="text-[rgb(var(--color-text-secondary)] max-w-2xl mx-auto text-sm sm:text-base">
           Meet our talented AI Avatar team members who are revolutionizing the digital landscape in Bangladesh
          </p>
        </div>

        <div className="relative max-w-md mx-auto mb-12 md:mb-16 px-4 sm:px-0">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 sm:py-4 surface border-2 border-[rgb(var(--color-primary))]/20 focus:border-[rgb(var(--color-primary))] text-[rgb(var(--color-text))] placeholder-[rgb(var(--color-text-secondary))] text-sm sm:text-base transition-all duration-300"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 sm:px-6 md:px-0">
          {filteredEmployees.map((employee, index) => (
            <Link
              key={employee.id}
              to={`/${employee.slug}`}
              className="group block w-full max-w-[400px] mx-auto p-[2px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] rounded-sm hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full h-[220px] overflow-hidden bg-[rgb(var(--color-background-start))]">
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-background-start))]/90 via-[rgb(var(--color-background-start))]/50 to-transparent group-hover:from-[rgb(var(--color-background-start))]/95 transition-all duration-500">
                    <div className="absolute bottom-0 p-6 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                      <h2 className="text-xl sm:text-2xl font-bold mb-2 gradient-text opacity-90 group-hover:opacity-100 transition-all duration-500">
                        {employee.name}
                      </h2>
                      <p className="text-sm sm:text-base text-[rgb(var(--color-text-secondary))] mb-2 transform transition-all duration-500 group-hover:text-[rgb(var(--color-text))]">
                        {employee.role}
                      </p>
                      <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                        <p className="text-sm text-[rgb(var(--color-text-secondary))]">
                          {employee.department}
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
          <div className="text-center text-[rgb(var(--color-text-secondary))] mt-12 p-8 border-2 border-[rgb(var(--color-border))]">
            <p className="text-lg">No employees found matching your search.</p>
          </div>
        )}

        <footer className="mt-16 md:mt-24 pb-8">
          <div className="gradient-border p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <MapPin className="w-6 h-6 text-[#A4488D]" />
            <p className="text-[rgb(var(--color-text-secondary))]">
              House No-6 (5th Floor), Road No - 2/B, Baridhara J Block, Dhaka 1212
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}