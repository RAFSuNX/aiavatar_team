import { useParams, Link } from 'react-router-dom';
import { employees, formatEmploymentStatus, formatEmploymentType, formatClearanceLevel, getStatusBadgeColor } from '../data/employees';
import { useEffect, useState } from 'react';
import { 
  Mail, 
  Phone, 
  Building2, 
  User, 
  ArrowLeft, 
  MapPin, 
  FileText, 
  Calendar,
  Shield,
  Briefcase,
  Award,
  Clock,
  CheckCircle2,
  Minus,
  Plus,
  Square
} from 'lucide-react';

export default function EmployeeDetail() {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const employee = employees.find(emp => emp.slug === slug);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgb(var(--color-background))] flex items-center justify-center geometric-bg">
        <div className="text-center">
          <div className="organization-seal mb-8">
            <User className="w-10 h-10 text-white" />
          </div>
          <div className="text-2xl font-bold text-[rgb(var(--color-text))] mb-4 mono-text loading-line">
            LOADING PERSONNEL RECORD
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

  if (!employee) {
    return (
      <div className="min-h-screen bg-[rgb(var(--color-background))] flex items-center justify-center geometric-bg">
        <div className="max-w-lg mx-auto px-8">
          <div className="document-section text-center">
            <div className="w-24 h-24 mx-auto mb-8 border-4 border-[rgb(var(--color-border))] flex items-center justify-center">
              <User className="w-12 h-12 text-[rgb(var(--color-text-muted))]" />
            </div>
            <h1 className="text-3xl font-bold text-[rgb(var(--color-text))] mb-6 mono-text">
              PERSONNEL RECORD NOT FOUND
            </h1>
            <p className="text-[rgb(var(--color-text-secondary))] mb-8 text-lg">
              The requested employee record could not be located in our directory.
            </p>
            <Link to="/" className="primary-button">
              <ArrowLeft className="w-5 h-5" />
              RETURN TO DIRECTORY
            </Link>
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
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="back-button no-print">
              <ArrowLeft className="w-5 h-5" />
              BACK TO DIRECTORY
            </Link>
            <div className="text-right">
              <div className="document-meta">
                PERSONNEL RECORD | {currentDate.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Employee Profile Header */}
        <section className="document-section">
          <div className="letterhead mb-12">
            <div className="organization-seal">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="document-title text-4xl text-[rgb(var(--color-text))] mb-4 line-decoration">
              OFFICIAL PERSONNEL RECORD
            </h1>
            <div className="flex items-center justify-center space-x-8 mb-6">
              <Minus className="w-12 h-1 text-[rgb(var(--color-accent))]" />
              <div className="document-meta">
                EMPLOYEE ID: {employee.employeeId} | CLASSIFICATION: CONFIDENTIAL
              </div>
              <Minus className="w-12 h-1 text-[rgb(var(--color-accent))]" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Employee Photo */}
            <div className="lg:col-span-2">
              <div className="professional-card overflow-hidden">
                <div className="relative photo-frame">
                  <img
                    src={employee.image}
                    alt={`${employee.name} - Official Portrait`}
                    className="w-full aspect-[4/5] object-cover filter grayscale"
                  />
                  <div className="absolute top-6 right-6">
                    <div className={getStatusBadgeColor(employee.employmentStatus)}>
                      <Shield className="w-3 h-3 mr-2" />
                      {employee.employmentStatus}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm p-4 border-l-4 border-[rgb(var(--color-accent))]">
                      <div className="document-meta text-center">
                        OFFICIAL PORTRAIT | {currentDate.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Employee Information */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {/* Basic Information */}
                <div>
                  <h2 className="section-title">PERSONAL INFORMATION</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border-l-4 border-[rgb(var(--color-accent))] pl-6">
                      <h3 className="text-3xl font-bold text-[rgb(var(--color-text))] mb-4 mono-text">
                        {employee.name}
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Briefcase className="w-5 h-5 accent-text" />
                          <span className="font-bold text-[rgb(var(--color-text))] mono-text">
                            {employee.role.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Building2 className="w-5 h-5 accent-text" />
                          <span className="text-[rgb(var(--color-text-secondary))] mono-text">
                            {employee.department.toUpperCase()} DEPARTMENT
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Clock className="w-5 h-5 accent-text" />
                          <span className="text-[rgb(var(--color-text-secondary))] mono-text">
                            {formatEmploymentType(employee.employmentType)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-[rgb(var(--color-text))] pl-6">
                      <h4 className="subsection-title mb-4">EMPLOYMENT STATUS</h4>
                      <div className="space-y-4">
                        {employee.positionLevel === 'EXECUTIVE' ? (
                          <div className="executive-badge">
                            <Award className="w-4 h-4 mr-2" />
                            EXECUTIVE LEVEL
                          </div>
                        ) : employee.positionLevel === 'MANAGEMENT' ? (
                          <div className="executive-badge">
                            <Award className="w-4 h-4 mr-2" />
                            MANAGEMENT LEVEL
                          </div>
                        ) : employee.positionLevel === 'SPECIALIST' ? (
                          <div className="department-badge">
                            <User className="w-4 h-4 mr-2" />
                            SPECIALIST LEVEL
                          </div>
                        ) : (
                          <div className="department-badge">
                            <User className="w-4 h-4 mr-2" />
                            PROFESSIONAL LEVEL
                          </div>
                        )}
                        <div className="document-meta space-y-1">
                          <div>STATUS: {formatEmploymentStatus(employee.employmentStatus)}</div>
                          <div>CLEARANCE: {formatClearanceLevel(employee.clearanceLevel)}</div>
                          <div>LOCATION: {employee.officeLocation.toUpperCase()}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="section-title">CONTACT INFORMATION</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="professional-card p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Mail className="w-6 h-6 accent-text" />
                        <span className="font-bold text-[rgb(var(--color-text))] mono-text">
                          OFFICIAL EMAIL
                        </span>
                      </div>
                      <a 
                        href={`mailto:${employee.email}`}
                        className="contact-link text-lg mono-text"
                      >
                        {employee.email}
                      </a>
                    </div>
                    <div className="professional-card p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Phone className="w-6 h-6 accent-text" />
                        <span className="font-bold text-[rgb(var(--color-text))] mono-text">
                          DIRECT LINE
                        </span>
                      </div>
                      <a 
                        href={`tel:${employee.phone.replace(/\s+/g, '')}`}
                        className="contact-link text-lg mono-text"
                      >
                        {employee.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Responsibilities */}
        <section className="document-section">
          <h2 className="section-title">
            <FileText className="inline-block w-8 h-8 mr-4" />
            OFFICIAL JOB DESCRIPTION & RESPONSIBILITIES
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[rgb(var(--color-accent))] pl-6">
              <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed text-lg">
                The following outlines the primary responsibilities and duties assigned to this position 
                within the organizational structure of <strong>AI Avatar Bangladesh</strong>:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {employee.responsibilities.map((responsibility, index) => (
                <div 
                  key={index}
                  className="responsibility-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 border-2 border-[rgb(var(--color-accent))] flex items-center justify-center flex-shrink-0 mt-1">
                      <Square className="w-3 h-3 fill-[rgb(var(--color-accent))] text-[rgb(var(--color-accent))]" />
                    </div>
                    <div>
                      <p className="text-[rgb(var(--color-text))] font-medium leading-relaxed">
                        {responsibility}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organization Context */}
        <section className="document-section">
          <h2 className="section-title">
            <Building2 className="inline-block w-8 h-8 mr-4" />
            ORGANIZATIONAL CONTEXT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[rgb(var(--color-accent))] pl-8">
              <h3 className="subsection-title mb-6">DEPARTMENT STRUCTURE</h3>
              <div className="professional-card p-6">
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-[rgb(var(--color-border))] pb-2">
                    <dt className="font-bold text-[rgb(var(--color-text))] mono-text">DEPARTMENT:</dt>
                    <dd className="text-[rgb(var(--color-text-secondary))] mono-text">{employee.department.toUpperCase()}</dd>
                  </div>
                  <div className="flex justify-between border-b border-[rgb(var(--color-border))] pb-2">
                    <dt className="font-bold text-[rgb(var(--color-text))] mono-text">POSITION LEVEL:</dt>
                    <dd className="text-[rgb(var(--color-text-secondary))] mono-text">{employee.positionLevel}</dd>
                  </div>
                  <div className="flex justify-between border-b border-[rgb(var(--color-border))] pb-2">
                    <dt className="font-bold text-[rgb(var(--color-text))] mono-text">REPORTING:</dt>
                    <dd className="text-[rgb(var(--color-text-secondary))] mono-text">{employee.reportsTo.toUpperCase()}</dd>
                  </div>
                  <div className="flex justify-between border-b border-[rgb(var(--color-border))] pb-2">
                    <dt className="font-bold text-[rgb(var(--color-text))] mono-text">DATE JOINED:</dt>
                    <dd className="text-[rgb(var(--color-text-secondary))] mono-text">
                      {new Date(employee.dateJoined).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }).toUpperCase()}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="border-l-4 border-[rgb(var(--color-text))] pl-8">
              <h3 className="subsection-title mb-6">OFFICE LOCATION</h3>
              <div className="professional-card p-6">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 accent-text mt-1" />
                  <div>
                    <h4 className="font-bold text-[rgb(var(--color-text))] mb-3 mono-text">
                      {employee.officeLocation.toUpperCase()}
                    </h4>
                    <address className="text-[rgb(var(--color-text-secondary))] not-italic leading-relaxed">
                      <strong>House No-6 (5th Floor)</strong><br />
                      Road No - 2/B, Baridhara J Block<br />
                      Dhaka 1212, Bangladesh
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Document Authentication */}
        <section className="signature-section">
          <div className="professional-card p-8">
            <h3 className="subsection-title mb-6 text-center">DOCUMENT AUTHENTICATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="document-meta space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>GENERATED: {currentDate.toUpperCase()}</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="document-meta space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>CLASSIFICATION: INTERNAL USE ONLY</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="document-meta space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>DOCUMENT TYPE: PERSONNEL RECORD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t-2 border-[rgb(var(--color-border))] text-center">
              <div className="text-lg font-bold text-[rgb(var(--color-text))] mb-2 mono-text">
                AI AVATAR BANGLADESH
              </div>
              <div className="text-sm text-[rgb(var(--color-text-secondary))] mono-text">
                HUMAN RESOURCES DEPARTMENT | OFFICIAL PERSONNEL DIRECTORY
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[rgb(var(--color-border))] text-center">
              <p className="text-xs text-[rgb(var(--color-text-muted))] mono-text leading-relaxed">
                THIS DOCUMENT CONTAINS CONFIDENTIAL AND PROPRIETARY INFORMATION. 
                UNAUTHORIZED ACCESS, DISTRIBUTION, OR REPRODUCTION IS STRICTLY PROHIBITED AND MAY BE SUBJECT TO LEGAL ACTION.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}