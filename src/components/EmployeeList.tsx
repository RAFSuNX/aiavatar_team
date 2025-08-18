import { Link } from 'react-router-dom';
import { employees, formatEmploymentStatus, getStatusBadgeColor } from '../data/employees';
import { useState, useEffect } from 'react';
import { Search, Users, Building2, Mail, Phone, MapPin, FileText, Calendar, Shield, Minus, Plus } from 'lucide-react';

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
      <div className="min-h-screen bg-[rgb(var(--color-background))] flex items-center justify-center geometric-bg">
        <div className="text-center">
          <div className="organization-seal mb-8">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <div className="text-2xl font-bold text-[rgb(var(--color-text))] mb-4 mono-text loading-line">
            LOADING PERSONNEL DIRECTORY
          </div>
          <div className="text-[rgb(var(--color-text-muted))] mono-text">PLEASE STAND BY...</div>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-2 h-8 bg-[rgb(var(--color-accent))] animate-pulse"></div>
            <div className="w-2 h-8 bg-[rgb(var(--color-text))] animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-8 bg-[rgb(var(--color-accent))] animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
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
    <div className="min-h-screen bg-[rgb(var(--color-background))] geometric-bg">
      {/* Document Header */}
      <header className="document-header">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="letterhead">
            <div className="organization-seal">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="document-title text-5xl text-[rgb(var(--color-text))] mb-4 line-decoration">
              AI AVATAR BANGLADESH
            </h1>
            <div className="flex items-center justify-center space-x-8 mb-6">
              <Minus className="w-12 h-1 text-[rgb(var(--color-accent))]" />
              <p className="text-xl text-[rgb(var(--color-text-secondary))] mono-text font-bold">
                OFFICIAL PERSONNEL DIRECTORY
              </p>
              <Minus className="w-12 h-1 text-[rgb(var(--color-accent))]" />
            </div>
            <div className="document-meta">
              DOCUMENT DATE: {currentDate.toUpperCase()} | CLASSIFICATION: INTERNAL USE ONLY
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Executive Summary */}
        <section className="document-section">
          <h2 className="section-title">
            <FileText className="inline-block w-8 h-8 mr-4" />
            EXECUTIVE SUMMARY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="stats-card">
              <Users className="accent-icon mx-auto mb-4" />
              <div className="text-4xl font-bold text-[rgb(var(--color-text))] mono-text">{employees.length.toString().padStart(2, '0')}</div>
              <div className="text-sm text-[rgb(var(--color-text-muted))] mono-text font-bold mt-2">TOTAL PERSONNEL</div>
            </div>
            <div className="stats-card">
              <Building2 className="accent-icon mx-auto mb-4" />
              <div className="text-4xl font-bold text-[rgb(var(--color-text))] mono-text">05</div>
              <div className="text-sm text-[rgb(var(--color-text-muted))] mono-text font-bold mt-2">DEPARTMENTS</div>
            </div>
            <div className="stats-card">
              <MapPin className="accent-icon mx-auto mb-4" />
              <div className="text-4xl font-bold text-[rgb(var(--color-text))] mono-text">01</div>
              <div className="text-sm text-[rgb(var(--color-text-muted))] mono-text font-bold mt-2">OFFICE LOCATION</div>
            </div>
          </div>
          <div className="border-l-4 border-[rgb(var(--color-accent))] pl-6">
            <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed text-lg">
              This document presents the official organizational directory of <strong>AI Avatar Bangladesh</strong>, 
              detailing our distinguished team members, their professional roles, and contact information. 
              Our organization is committed to excellence in artificial intelligence and avatar technology development.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="document-section no-print">
          <h2 className="section-title">
            <Search className="inline-block w-8 h-8 mr-4" />
            DIRECTORY SEARCH
          </h2>
          <div className="search-container">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 accent-text" />
            </div>
            <input
              type="text"
              placeholder="SEARCH BY NAME, ROLE, OR DEPARTMENT..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </section>

        {/* Team Directory */}
        <section className="document-section">
          <h2 className="section-title">
            <Users className="inline-block w-8 h-8 mr-4" />
            PERSONNEL DIRECTORY
          </h2>
          
          {filteredEmployees.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-8 border-4 border-[rgb(var(--color-border))] flex items-center justify-center">
                <Search className="w-12 h-12 text-[rgb(var(--color-text-muted))]" />
              </div>
              <h3 className="text-2xl font-bold text-[rgb(var(--color-text))] mb-4 mono-text">
                NO PERSONNEL FOUND
              </h3>
              <p className="text-[rgb(var(--color-text-muted))] mb-8 mono-text">
                PLEASE ADJUST YOUR SEARCH CRITERIA AND TRY AGAIN.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="primary-button"
              >
                CLEAR SEARCH
              </button>
            </div>
          ) : (
            <div className="document-grid">
              {filteredEmployees.map((employee, index) => (
                <Link
                  key={employee.id}
                  to={`/${employee.slug}`}
                  className="block hover-line"
                >
                  <article className="professional-card">
                    {/* Employee Photo */}
                    <div className="relative h-80 overflow-hidden photo-frame">
                      <img
                        src={employee.image}
                        alt={`${employee.name} - ${employee.role}`}
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute top-6 right-6">
                        <div className={getStatusBadgeColor(employee.employmentStatus)}>
                          <Shield className="w-3 h-3 mr-2" />
                          {employee.employmentStatus}
                        </div>
                      </div>
                      <div className="absolute top-6 left-6">
                        {employee.positionLevel === 'EXECUTIVE' ? (
                          <div className="executive-badge">
                            EXECUTIVE
                          </div>
                        ) : employee.positionLevel === 'MANAGEMENT' ? (
                          <div className="executive-badge">
                            MANAGEMENT
                          </div>
                        ) : (
                          <div className="department-badge">
                            {employee.departmentCode}
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <div className="text-white mono-text text-sm font-bold">
                          {employee.employeeId}
                        </div>
                      </div>
                    </div>

                    {/* Employee Information */}
                    <div className="p-8">
                      <header className="mb-6">
                        <h3 className="text-2xl font-bold text-[rgb(var(--color-text))] mb-2 mono-text">
                          {employee.name}
                        </h3>
                        <div className="flex items-center space-x-4 mb-2">
                          <Plus className="w-4 h-4 text-[rgb(var(--color-accent))]" />
                          <p className="text-[rgb(var(--color-text-secondary))] font-bold mono-text">
                            {employee.role.toUpperCase()}
                          </p>
                        </div>
                        <p className="text-sm text-[rgb(var(--color-text-muted))] mono-text">
                          {employee.department.toUpperCase()} DEPARTMENT | {employee.positionLevel}
                        </p>
                      </header>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-4 p-3 bg-[rgb(var(--color-surface-secondary))]">
                          <Mail className="w-5 h-5 accent-text" />
                          <span className="contact-link text-sm">
                            {employee.email}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-[rgb(var(--color-surface-secondary))]">
                          <Phone className="w-5 h-5 accent-text" />
                          <span className="text-sm text-[rgb(var(--color-text-secondary))] mono-text">
                            {employee.phone}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="subsection-title mb-4">KEY RESPONSIBILITIES:</h4>
                        <div className="space-y-2">
                          {employee.responsibilities.slice(0, 2).map((responsibility, i) => (
                            <div key={i} className="responsibility-card">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[rgb(var(--color-accent))] mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-[rgb(var(--color-text-secondary))]">
                                  {responsibility}
                                </p>
                              </div>
                            </div>
                          ))}
                          {employee.responsibilities.length > 2 && (
                            <div className="responsibility-card">
                              <div className="flex items-start gap-3">
                                <Plus className="w-4 h-4 text-[rgb(var(--color-text-muted))] mt-1 flex-shrink-0" />
                                <p className="text-sm text-[rgb(var(--color-text-muted))] mono-text font-bold">
                                  +{employee.responsibilities.length - 2} ADDITIONAL RESPONSIBILITIES
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t-2 border-[rgb(var(--color-border))]">
                        <div className="document-meta text-center">
                          <span className="accent-text font-bold">
                            EMPLOYEE ID: {employee.employeeId}
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
            <Building2 className="inline-block w-8 h-8 mr-4" />
            ORGANIZATION INFORMATION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[rgb(var(--color-accent))] pl-8">
              <h3 className="subsection-title mb-6">CORPORATE ADDRESS</h3>
              <address className="text-[rgb(var(--color-text-secondary))] not-italic leading-relaxed text-lg">
                <strong>House No-6 (5th Floor)</strong><br />
                Road No - 2/B, Baridhara J Block<br />
                Dhaka 1212, Bangladesh
              </address>
            </div>
            <div className="border-l-4 border-[rgb(var(--color-text))] pl-8">
              <h3 className="subsection-title mb-6">ORGANIZATION DETAILS</h3>
              <dl className="space-y-4 text-[rgb(var(--color-text-secondary))]">
                <div className="flex gap-6">
                  <dt className="font-bold min-w-[120px] mono-text">ESTABLISHED:</dt>
                  <dd className="mono-text">2024</dd>
                </div>
                <div className="flex gap-6">
                  <dt className="font-bold min-w-[120px] mono-text">INDUSTRY:</dt>
                  <dd>Artificial Intelligence & Avatar Technology</dd>
                </div>
                <div className="flex gap-6">
                  <dt className="font-bold min-w-[120px] mono-text">TYPE:</dt>
                  <dd>Technology Development Company</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Document Footer */}
        <section className="signature-section">
          <div className="text-center">
            <div className="document-meta mb-6">
              <Calendar className="inline-block w-5 h-5 mr-3" />
              DOCUMENT GENERATED: {currentDate.toUpperCase()}
            </div>
            <div className="border-t-2 border-[rgb(var(--color-accent))] pt-6">
              <p className="text-sm text-[rgb(var(--color-text-muted))] mono-text leading-relaxed">
                THIS DOCUMENT CONTAINS CONFIDENTIAL AND PROPRIETARY INFORMATION OF AI AVATAR BANGLADESH.
                <br />
                UNAUTHORIZED DISTRIBUTION OR REPRODUCTION IS STRICTLY PROHIBITED.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}