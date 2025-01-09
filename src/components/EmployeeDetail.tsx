import { useParams, Link } from 'react-router-dom';
import { employees } from '../data/employees';
import { ArrowLeft, Mail, Phone, Building2, ListTodo } from 'lucide-react';
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
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[rgb(var(--color-primary))]"></div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="min-h-screen gradient-bg text-[rgb(var(--color-text))] p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="text-center p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] max-w-md w-full">
          <div className="bg-[rgb(var(--color-background-start))] p-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Employee not found</h1>
            <p className="text-[rgb(var(--color-text-secondary)] mb-6">The employee you're looking for doesn't exist or has been removed.</p>
            <Link to="/" className="inline-flex items-center text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-text-secondary))] transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Team
            </Link>
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
          className="inline-flex items-center text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-text-secondary))] mb-8 transition-all duration-300 hover:-translate-x-2"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Team
        </Link>

        <div className="p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB]">
          <div className="bg-[rgb(var(--color-background-start))]">
            <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
              <img
                src={employee.image}
                alt={employee.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-background-start))]/90 to-transparent"></div>
              <div className="absolute bottom-0 p-6 sm:p-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  {employee.name}
                </h1>
                <p className="text-xl sm:text-2xl text-[rgb(var(--color-text))]">
                  {employee.role}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <a 
                      href={`mailto:${employee.email}`}
                      className="block p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] group hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="bg-[rgb(var(--color-background-start))] p-4 flex items-center gap-3">
                        <Mail className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                        <div>
                          <p className="text-[rgb(var(--color-text-secondary))] text-xs uppercase tracking-wider mb-1 opacity-60">Email</p>
                          <p className="text-[rgb(var(--color-text))] font-medium group-hover:text-[rgb(var(--color-primary-light))]">{employee.email}</p>
                        </div>
                      </div>
                    </a>
                    <a 
                      href={`tel:${employee.phone.replace(/\s+/g, '')}`}
                      className="block p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] group hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="bg-[rgb(var(--color-background-start))] p-4 flex items-center gap-3">
                        <Phone className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                        <div>
                          <p className="text-[rgb(var(--color-text-secondary))] text-xs uppercase tracking-wider mb-1 opacity-60">Phone</p>
                          <p className="text-[rgb(var(--color-text))] font-medium group-hover:text-[rgb(var(--color-primary-light))]">{employee.phone}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <ListTodo className="w-5 h-5" />
                    Responsibilities
                  </h2>
                  <div className="space-y-3">
                    {employee.responsibilities.map((responsibility, index) => (
                      <div 
                        key={index}
                        className="p-[1px] bg-gradient-to-r from-[#A4488D] via-[#593896] to-[#2372BB] transition-all duration-300 hover:translate-x-2"
                      >
                        <div className="bg-[rgb(var(--color-background-start))] p-4">
                          {responsibility}
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