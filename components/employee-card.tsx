import Link from 'next/link'
import { Employee } from '@/lib/employees'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="team-card"
    >
      <Link href={`/${employee.slug}`}>
        <div className="relative group overflow-hidden rounded-lg w-full p-[1px] bg-gradient-to-r from-purple-400 to-blue-400" style={{ aspectRatio: '400/220' }}>
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <Image
              src={employee.imageUrl}
              alt={employee.name}
              fill
              className="object-cover object-center transition-all duration-500"
            />
            <div className="absolute inset-0 team-card-overlay opacity-90 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wider">
                {employee.name}
              </h3>
              <p className="text-xs sm:text-sm bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-medium uppercase tracking-wider mt-1">
                {employee.position}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

