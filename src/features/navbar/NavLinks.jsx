import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navigation'

export default function NavLinks({ onLinkClick, scrolled }) {
  return (
    <ul className="flex items-center gap-1">
      {navLinks.map((link) => (
        <li key={link.href}>
          <NavLink
            to={link.href}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 group
              ${isActive
                ? 'text-primary bg-primary/8'
                : scrolled
                  ? 'text-dark-text hover:text-primary hover:bg-primary/6'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                )}
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
