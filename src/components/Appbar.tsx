"use client"
import { useState } from 'react'
import { User2Icon, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Appbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
           <img src="	https://quantdash-sg.vercel.app/_next/image?url=%2Flight-logo.png&w=96&q=75" alt="" />
          </div>
          
          <div className="hidden md:flex space-x-4">
            {['Questions', 'Playlists', 'Experts', 'About us', 'Pricing'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-primary-foreground hover:text-secondary-foreground font-medium transition-colors duration-200 ease-in-out relative group"
              >
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-secondary-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
              </a>
            ))}
          </div>
          
          <div className="hidden md:block">
            <Button variant="secondary" size="sm" className="flex items-center gap-2 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 ease-in-out transform hover:scale-105">
              <User2Icon size={18} />
              <span className="font-semibold">Register</span>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Questions', 'Playlists', 'Experts', 'About us', 'Pricing'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-primary-foreground hover:text-secondary-foreground block px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-primary">
            <Button variant="secondary" size="sm" className="ml-3 flex items-center gap-2">
              <User2Icon size={18} />
              <span className="font-semibold">Register</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}