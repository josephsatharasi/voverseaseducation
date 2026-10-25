import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrolled } from '../../hooks/useScrolled'
import NavLogo from './NavLogo'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'
import Button from '../../components/ui/Button'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(50)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-lg shadow-navy/8 border-b border-gray-100/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between relative" style={{ height: '72px' }}>
        <NavLogo light={!scrolled} />

        <div className="hidden md:flex items-center gap-2">
          <NavLinks scrolled={scrolled} />
          <div className="w-px h-5 bg-gray-200 mx-2" />
          <Button as={Link} to="/contact" variant="primary" size="sm">
            Free Consultation
          </Button>
        </div>

        <button
          className={`md:hidden p-2.5 rounded-xl transition-colors ${
            scrolled ? 'text-dark-text hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </nav>
    </header>
  )
}
