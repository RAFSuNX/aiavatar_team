import { useParams, Link } from 'react-router-dom';
import { employees } from '../data/employees';
import { useEffect, useState } from 'react';

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

  if (!employee) {
    return (
      <div className="min-h-screen gradient-bg text-[rgb(var(--color-text))] p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="w-[95vw] sm:max-w-md text-center">
          <div className="p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] rounded-lg">
            <div className="relative bg-[rgb(var(--color-background-start))] p-8 rounded-lg">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">Employee not found</h1>
              <p className="text-[rgb(var(--color-text-secondary)] mb-6">The employee you're looking for doesn't exist or has been removed.</p>
              <Link 
                to="/" 
                className="text-[rgb(var(--color-text)] hover:text-[#A4488D] transition-colors"
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
    <div className="min-h-screen gradient-bg text-[rgb(var(--color-text))] p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-block text-[rgb(var(--color-text))] hover:text-[#A4488D] mb-8 transition-all duration-300 hover:-translate-x-2"
        >
          ← Back to Team
        </Link>

        <div className="p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] rounded-lg shadow-xl">
          <div className="bg-[rgb(var(--color-background-start))] rounded-lg">
            {/* Hero Section */}
            <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-t-lg">
              <img
                src={employee.image}
                alt={employee.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-background-start))]/95 via-[rgb(var(--color-background-start))]/50 to-transparent"></div>
              <div className="absolute bottom-0 p-6 sm:p-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 gradient-text">
                  {employee.name}
                </h1>
                <p className="text-xl sm:text-2xl text-[rgb(var(--color-text-secondary)]">
                  {employee.role}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight gradient-text">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <a 
                      href={`mailto:${employee.email}`}
                      className="block p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] rounded-lg group hover:scale-[1.02] transition-transform duration-300"
                    >
                      <div className="relative bg-[rgb(var(--color-background-start))] p-4 rounded-lg">
                        <p className="text-[rgb(var(--color-text-secondary))] text-xs uppercase tracking-wider mb-1">Email</p>
                        <p className="text-[rgb(var(--color-text))] font-medium text-lg group-hover:text-[#A4488D] transition-colors">{employee.email}</p>
                      </div>
                    </a>
                    <a 
                      href={`tel:${employee.phone.replace(/\s+/g, '')}`}
                      className="block p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] rounded-lg group hover:scale-[1.02] transition-transform duration-300"
                    >
                      <div className="relative bg-[rgb(var(--color-background-start))] p-4 rounded-lg">
                        <p className="text-[rgb(var(--color-text-secondary))] text-xs uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-[rgb(var(--color-text))] font-medium text-lg group-hover:text-[#A4488D] transition-colors">{employee.phone}</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight gradient-text">
                    Responsibilities
                  </h2>
                  <div className="space-y-3">
                    {employee.responsibilities.map((responsibility, index) => (
                      <div 
                        key={index}
                        className="p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] rounded-lg transition-transform duration-300 hover:translate-x-2"
                      >
                        <div className="relative bg-[rgb(var(--color-background-start))] p-4 rounded-lg">
                          <p className="text-[rgb(var(--color-text))] opacity-90 hover:opacity-100 transition-opacity">
                            {responsibility}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}