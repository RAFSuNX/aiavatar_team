import { Link } from 'react-router-dom';
import { employees } from '../data/employees';
import { useState, useEffect } from 'react';
import { Search, Users, Building2, Mail, Phone, MapPin, FileText, Calendar, Shield } from 'lucide-react';

export default function EmployeeList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgb(var(--color-background))] flex items-center justify-center">
        <div className="text-center">
          <div className="organization-seal mb-6">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <div className="text-xl font-semibold text-[rgb(var(--color-text))] mb-2">
            Loading Official Directory
          </div>
          <div className="text-[rgb(var(--color-text-muted))]">Please wait...</div>
        </div>
      </div>
    );
  }

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-[rgb(var(--color-background))]">
      {/* Document Header */}
      <header className="document-header">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="letterhead">
            <div className="organization-seal">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="document-title text-4xl text-[rgb(var(--color-text))] mb-2">
              AI Avatar Bangladesh
            </h1>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] mb-4">
              Official Team Directory & Organizational Structure
            </p>
            <div className="document-meta">
              Document Date: {currentDate} | Classification: Internal Use
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Executive Summary */}
        <section className="document-section">
          <h2 className="section-title">Executive Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="stats-card">
              <Users className="accent-icon mx-auto mb-2" />
              <div className="text-2xl font-bold text-[rgb(var(--color-text))]">{employees.length}</div>
              <div className="text-sm text-[rgb(var(--color-text-muted))]">Total Personnel</div>
            </div>
            <div className="stats-card">
              <Building2 className="accent-icon mx-auto mb-2" />
              <div className="text-2xl font-bold text-[rgb(var(--color-text))]">5</div>
              <div className="text-sm text-[rgb(var(--color-text-muted))]">Departments</div>
            </div>
            <div className="stats-card">
              <MapPin className="accent-icon mx-auto mb-2" />
              <div className="text-2xl font-bold text-[rgb(var(--color-text))]">1</div>
              <div className="text-sm text-[rgb(var(--color-text-muted))]">Office Location</div>
            </div>
          </div>
          <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
            This document presents the official organizational directory of AI Avatar Bangladesh, 
            detailing our distinguished team members, their professional roles, and contact information. 
            Our organization is committed to excellence in artificial intelligence and avatar technology development.
          </p>
        </section>

        {/* Search Section */}
        <section className="document-section no-print">
          <h2 className="section-title">Directory Search</h2>
          <div className="search-container">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 accent-text" />
            </div>
            <input
              type="text"
              placeholder="Search by name, role, or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </section>

        {/* Team Directory */}
        <section className="document-section">
          <h2 className="section-title">
            <FileText className="inline-block w-6 h-6 mr-2" />
            Personnel Directory
          </h2>
          
          {filteredEmployees.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-[rgb(var(--color-text-muted))] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[rgb(var(--color-text))] mb-2">
                No Personnel Found
              </h3>
              <p className="text-[rgb(var(--color-text-muted))]">
                Please adjust your search criteria and try again.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="primary-button mt-4"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="document-grid">
              {filteredEmployees.map((employee, index) => (
                <Link
                  key={employee.id}
                  to={`/${employee.slug}`}
                  className="block"
                >
                  <article className="professional-card">
                    {/* Employee Photo */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={employee.image}
                        alt={`${employee.name} - ${employee.role}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="status-badge">
                          <Shield className="w-3 h-3 mr-1" />
                          Active
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        {employee.role.toLowerCase().includes('director') || 
                         employee.role.toLowerCase().includes('lead') ? (
                          <div className="executive-badge">
                            Executive
                          </div>
                        ) : (
                          <div className="department-badge">
                            {employee.department}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Employee Information */}
                    <div className="p-6">
                      <header className="mb-4">
                        <h3 className="text-xl font-bold text-[rgb(var(--color-text))] mb-1">
                          {employee.name}
                        </h3>
                        <p className="text-[rgb(var(--color-text-secondary))] font-medium">
                          {employee.role}
                        </p>
                        <p className="text-sm text-[rgb(var(--color-text-muted))]">
                          {employee.department} Department
                        </p>
                      </header>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 accent-text" />
                          <span className="contact-link text-sm">
                            {employee.email}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 accent-text" />
                          <span className="text-sm text-[rgb(var(--color-text-secondary))]">
                            {employee.phone}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="subsection-title text-sm">Key Responsibilities:</h4>
                        <ul className="formal-list text-sm">
                          {employee.responsibilities.slice(0, 2).map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                          {employee.responsibilities.length > 2 && (
                            <li className="text-[rgb(var(--color-text-muted))]">
                              +{employee.responsibilities.length - 2} additional responsibilities
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="mt-4 pt-4 border-t border-[rgb(var(--color-border))]">
                        <div className="document-meta">
                          <span className="gradient-text font-semibold">
                            Employee ID: EMP-{employee.id.toString().padStart(4, '0')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Organization Information */}
        <section className="document-section">
          <h2 className="section-title">
            <Building2 className="inline-block w-6 h-6 mr-2" />
            Organization Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="subsection-title">Corporate Address</h3>
              <address className="text-[rgb(var(--color-text-secondary))] not-italic leading-relaxed">
                House No-6 (5th Floor)<br />
                Road No - 2/B, Baridhara J Block<br />
                Dhaka 1212, Bangladesh
              </address>
            </div>
            <div>
              <h3 className="subsection-title">Organization Details</h3>
              <dl className="space-y-2 text-[rgb(var(--color-text-secondary))]">
                <div className="flex gap-4">
                  <dt className="font-medium min-w-[100px]">Established:</dt>
                  <dd>2024</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-medium min-w-[100px]">Industry:</dt>
                  <dd>Artificial Intelligence & Avatar Technology</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-medium min-w-[100px]">Type:</dt>
                  <dd>Technology Development Company</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Document Footer */}
        <section className="signature-section">
          <div className="text-center">
            <div className="document-meta mb-4">
              <Calendar className="inline-block w-4 h-4 mr-2" />
              Document Generated: {currentDate}
            </div>
            <p className="text-sm text-[rgb(var(--color-text-muted))]">
              This document contains confidential and proprietary information of AI Avatar Bangladesh.
              <br />
              Unauthorized distribution or reproduction is strictly prohibited.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}