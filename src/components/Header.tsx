import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import { Home, Menu, Search, UserCircle, X } from 'lucide-react'
import BagIcon from './BagIcon'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="p-8 flex items-center h-25 shadow-lg justify-between">
        <div className='flex flex-row gap-2 items-center'>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          <h1 className="ml-4 text-xl font-semibold">
            BRUT
          </h1>
        </div>
        <div className='flex flex-row gap-4 items-center'>
          <Search className='cursor-pointer' />
          <UserCircle className='cursor-pointer' />
          <BagIcon count={0} />
        </div>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white border-r border-r-gray-950 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-900 text-white transition-colors mb-2',
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          {/* Demo Links Start */}

          {/* Demo Links End */}
        </nav>
      </aside>
    </>
  )
}
