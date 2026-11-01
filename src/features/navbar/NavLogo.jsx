import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function NavLogo({ light = false }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 shrink-0"
      aria-label="V Overseas Education Home"
    >
      {/* Original Company Logo */}
     <img
  src={logo}
  alt="V Overseas Education Logo"
  className="h-[67px] w-auto object-contain shrink-0"
/>

      {/* Company Name */}
      <span
        className={`text-lg md:text-xl font-extrabold tracking-tight whitespace-nowrap ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        V Overseas <span className="text-primary">Education</span>
      </span>
    </Link>
  )
}
