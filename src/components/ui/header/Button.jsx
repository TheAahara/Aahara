import React from 'react'

function Button({label,Icon}) {
  return (
      <button className="hidden bg-yellow-300 text-green-800 font-medium px-4 py-2 rounded-full md:flex items-center cursor-pointer border-2 border-slate-700">
          {label}
          <Icon className="ml-2 w-4 h-4" />
        </button>
  )
}

export default Button