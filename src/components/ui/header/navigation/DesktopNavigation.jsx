import React from 'react'
import { ChevronDown } from 'lucide-react'

function DesktopNavigation() {
  return (
   <nav className="hidden md:flex justify-center items-center space-x-8">

        <div className="text-green-800 font-medium text-lg cursor-pointer hover:scale-105">
          Home
        </div>

        <div className="flex items-center text-green-800 font-medium text-lg cursor-pointer hover:scale-105">
          About Aahara
          <ChevronDown className="ml-1 mt-1 w-4 h-4" />
        </div>

        <div className="flex items-center text-green-800 font-medium text-lg cursor-pointer hover:scale-105">
          Join Us
          <ChevronDown className="ml-1 mt-1 w-4 h-4" />
        </div>

        <div className="text-green-800 font-medium text-lg cursor-pointer hover:scale-105">
            Careers
        </div>
        
        <div className="text-green-800 font-medium text-lg cursor-pointer hover:scale-105">
            Contact Us
        </div>
      </nav>
  )
}

export default DesktopNavigation