import { useState } from 'react'
import { Home, Menu, Search, UserCircle, X } from 'lucide-react'
import BagIcon from './BagIcon'
import SidebarLink from './SidebarLink'
import HeaderLink from './HeaderLink'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useNavigate } from '@tanstack/react-router'
import { SearchJewel } from './products/search'
import { earringsProducts } from '@/constants'

export default function Header() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [isSearchActive, setIsSearchActive] = useState<boolean>(false)

  return (
    <>
      <header className="p-8 flex items-center h-25 shadow-lg justify-between">
        <div className='flex flex-row gap-2 items-center'>
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden block p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          <h1 className="ml-4 text-xl font-semibold">
            BRUT
          </h1>
        </div>
        {
          isSearchActive === false ? (
            <div className='hidden md:flex flex-row gap-4'>
              <HeaderLink page='/new' label='Novos' />
              <HeaderLink page='/popular' label='Populares' />
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <DropdownMenuLabel className='text-lg font-normal hover:underline cursor-pointer'>Brincos</DropdownMenuLabel>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='border-gray-300 space-y-1'>
                  <DropdownMenuItem onClick={() => navigate({ to: "/brincos/$categoriaBrinco", params: { categoriaBrinco: "argolas" } })}>
                    Argolas
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate({ to: "/brincos/$categoriaBrinco", params: { categoriaBrinco: "minimalistas" } })}>
                    Minimalistas
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate({ to: "/brincos/$categoriaBrinco", params: { categoriaBrinco: "cravejados" } })}>
                    Cravejados
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate({ to: "/brincos/$categoriaBrinco", params: { categoriaBrinco: "todos" } })}>
                    Todos
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <SearchJewel products={earringsProducts} />
          )
        }
        <div className='flex flex-row gap-4 items-center'>
          <Search onClick={() => setIsSearchActive(!isSearchActive)} className='cursor-pointer' />
          <UserCircle className='cursor-pointer' />
          <BagIcon count={0} />
        </div>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white border-r border-r-gray-950 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
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
          <SidebarLink icon={Home} label='Home' page='/' />
        </nav>
      </aside>
    </>
  )
}
