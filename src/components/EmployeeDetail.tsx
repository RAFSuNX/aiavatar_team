import { useParams, Link } from 'react-router-dom';
import { employees } from '../data/employees';
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
  CheckCircle2
} from 'lucide-react';

export default function EmployeeDetail() {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const employee = employees.find(emp => emp.slug === slug);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgb(var(--color-background))] flex items-center justify-center">
        <div className="text-center">
          <div className="organization-seal mb-6">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="text-xl font-semibold text-[rgb(var(--color-text))] mb-2">
            Loading Personnel Record
          </div>
          <div className="text-[rgb(var(--color-text-muted))]">Please wait...</div>
        </div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="min-h-screen bg-[rgb(var(--color-background))] flex items-center justify-center">
        <div className="max-w-md mx-auto px-6">
          <div className="document-section text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgb(var(--color-surface-secondary))] flex items-center justify-center">
              <User className="w-8 h-8 text-[rgb(var(--color-text-muted))]" />
            </div>
            <h1 className="text-2xl font-bold text-[rgb(var(--color-text))] mb-4">
              Personnel Record Not Found
            </h1>
            <p className="text-[rgb(var(--color-text-secondary))] mb-6">
              The requested employee record could not be located in our directory.
            </p>
            <Link to="/" className="primary-button">
              <ArrowLeft className="w-4 h-4" />
              Return to Directory
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
    <div className="min-h-screen bg-[rgb(var(--color-background))]">
      {/* Document Header */}
      <header className="document-header">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="back-button no-print">
              <ArrowLeft className="w-4 h-4" />
              Back to Directory
            </Link>
            <div className="text-right">
              <div className="document-meta">
                Personnel Record | {currentDate}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Employee Profile Header */}
        <section className="document-section">
          <div className="letterhead mb-8">
            <div className="organization-seal">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="document-title text-3xl text-[rgb(var(--color-text))] mb-2">
              Official Personnel Record
            </h1>
            <div className="document-meta">
              Employee ID: EMP-{employee.id.toString().padStart(4, '0')} | 
              Classification: Confidential
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Employee Photo */}
            <div className="lg:col-span-1">
              <div className="professional-card overflow-hidden">
                <div className="relative">
                  <img
                    src={employee.image}
                    alt={`${employee.name} - Official Portrait`}
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="status-badge">
                      <Shield className="w-3 h-3 mr-1" />
                      Active
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="document-meta text-center">
                        Official Portrait
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Employee Information */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Basic Information */}
                <div>
                  <h2 className="section-title">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[rgb(var(--color-text))] mb-2">
                        {employee.name}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Briefcase className="w-4 h-4 accent-text" />
                          <span className="font-medium text-[rgb(var(--color-text))]">
                            {employee.role}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Building2 className="w-4 h-4 accent-text" />
                          <span className="text-[rgb(var(--color-text-secondary))]">
                            {employee.department} Department
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 accent-text" />
                          <span className="text-[rgb(var(--color-text-secondary))]">
                            Full-time Employee
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="subsection-title">Employment Status</h4>
                      <div className="space-y-2">
                        {employee.role.toLowerCase().includes('director') || 
                         employee.role.toLowerCase().includes('lead') ? (
                          <div className="executive-badge">
                            <Award className="w-4 h-4 mr-2" />
                            Executive Level
                          </div>
                        ) : (
                          <div className="department-badge">
                            <User className="w-4 h-4 mr-2" />
                            Professional Staff
                          </div>
                        )}
                        <div className="document-meta">
                          Status: Active Employment<br />
                          Clearance: Internal Access
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="section-title">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="professional-card p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Mail className="w-5 h-5 accent-text" />
                        <span className="font-medium text-[rgb(var(--color-text))]">
                          Official Email
                        </span>
                      </div>
                      <a 
                        href={`mailto:${employee.email}`}
                        className="contact-link text-lg"
                      >
                        {employee.email}
                      </a>
                    </div>
                    <div className="professional-card p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Phone className="w-5 h-5 accent-text" />
                        <span className="font-medium text-[rgb(var(--color-text))]">
                          Direct Line
                        </span>
                      </div>
                      <a 
                        href={`tel:${employee.phone.replace(/\s+/g, '')}`}
                        className="contact-link text-lg"
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
            <FileText className="inline-block w-6 h-6 mr-2" />
            Official Job Description & Responsibilities
          </h2>
          <div className="space-y-4">
            <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
              The following outlines the primary responsibilities and duties assigned to this position 
              within the organizational structure of AI Avatar Bangladesh:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {employee.responsibilities.map((responsibility, index) => (
                <div 
                  key={index}
                  className="responsibility-card"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full accent-bg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
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
            <Building2 className="inline-block w-6 h-6 mr-2" />
            Organizational Context
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="subsection-title">Department Structure</h3>
              <div className="professional-card p-4">
                <dl className="space-y-3">
                  <div>
                    <dt className="font-medium text-[rgb(var(--color-text))]">Department:</dt>
                    <dd className="text-[rgb(var(--color-text-secondary))]">{employee.department}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[rgb(var(--color-text))]">Position Level:</dt>
                    <dd className="text-[rgb(var(--color-text-secondary))]">
                      {employee.role.toLowerCase().includes('director') ? 'Executive' :
                       employee.role.toLowerCase().includes('lead') ? 'Management' : 'Professional'}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[rgb(var(--color-text))]">Reporting Structure:</dt>
                    <dd className="text-[rgb(var(--color-text-secondary))]">
                      Reports to Executive Management
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div>
              <h3 className="subsection-title">Office Location</h3>
              <div className="professional-card p-4">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 accent-text mt-1" />
                  <div>
                    <h4 className="font-medium text-[rgb(var(--color-text))] mb-2">
                      Corporate Headquarters
                    </h4>
                    <address className="text-[rgb(var(--color-text-secondary))] not-italic leading-relaxed">
                      House No-6 (5th Floor)<br />
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
          <div className="professional-card p-6">
            <h3 className="subsection-title mb-4">Document Authentication</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="document-meta space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Generated: {currentDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Classification: Internal Use Only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Document Type: Personnel Record</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-[rgb(var(--color-text-muted))]">
                  <strong>AI Avatar Bangladesh</strong><br />
                  Human Resources Department<br />
                  Official Personnel Directory
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[rgb(var(--color-border))] text-center">
              <p className="text-xs text-[rgb(var(--color-text-muted))]">
                This document contains confidential and proprietary information. 
                Unauthorized access, distribution, or reproduction is strictly prohibited and may be subject to legal action.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}