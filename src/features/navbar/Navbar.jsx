import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import NavLogo from './NavLogo'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'
import Button from '../../components/ui/Button'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md border-b border-gray-100">
      <nav
        className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between relative"
      >
        {/* Company Logo and Name */}
        <NavLogo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <NavLinks scrolled={true} />

          <div className="w-px h-5 bg-gray-200 mx-2" />

          <Button as={Link} to="/contact" variant="primary" size="sm">
            Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2.5 rounded-xl text-dark-text hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Navigation */}
        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
      </nav>
    </header>
  )
}
