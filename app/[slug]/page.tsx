import { notFound } from 'next/navigation'
import { employees } from '@/lib/employees'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function EmployeePage({ params }: { params: { slug: string } }) {
  const employee = employees.find(e => e.slug === params.slug)

  if (!employee) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href="/" 
        className="inline-flex items-center text-gray-400 hover:text-white mb-6 sm:mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back to Team
      </Link>
      
      <Card className="overflow-hidden bg-gray-900/50 border-gray-800">
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
          <Image
            src={employee.imageUrl}
            alt={employee.name}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-wider">
              {employee.name}
            </h1>
            <p className="text-lg sm:text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-medium uppercase tracking-wider">
              {employee.position}
            </p>
          </div>
        </div>
        <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-300">Contact Information</h2>
              <div className="space-y-2 text-sm sm:text-base text-gray-400">
                <p>
                  <span className="text-gray-500">Email:</span><br />
                  {employee.email}
                </p>
                <p>
                  <span className="text-gray-500">Phone:</span><br />
                  {employee.phone}
                </p>
                <p>
                  <span className="text-gray-500">Department:</span><br />
                  {employee.department}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-300">Responsibilities</h2>
              <ul className="space-y-2">
                {employee.responsibilities.map((responsibility, index) => (
                  <li 
                    key={index} 
                    className="bg-gray-800/50 rounded-lg p-3 text-gray-300 text-sm sm:text-base"
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Generate static params for all employee slugs
export function generateStaticParams() {
  return employees.map((employee) => ({
    slug: employee.slug,
  }))
}

