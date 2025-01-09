'use client'

import { useState } from 'react'
import { employees } from '@/lib/employees'
import { EmployeeCard } from '@/components/employee-card'
import { Input } from "@/components/ui/input"
import { motion } from 'framer-motion'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 sm:space-y-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Team AI Avatar Bangladesh
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
          Meet our talented AI Avatar team members who are revolutionizing the digital landscape in Bangladesh
        </p>
        <div className="max-w-md mx-auto px-4">
          <Input
            type="text"
            placeholder="Search team members..."
            className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {filteredEmployees.map((employee, index) => (
          <motion.div
            key={employee.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <EmployeeCard employee={employee} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

