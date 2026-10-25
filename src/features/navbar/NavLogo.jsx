import { Link } from 'react-router-dom'
import logo from '../../assets/image.png'

export default function NavLogo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className={`rounded-xl ${light ? 'bg-white px-3 py-1.5' : ''}`}>
        <img
          src={logo}
          alt="Voverseas Education"
          className="h-9 w-auto object-contain"
        />
      </div>
    </Link>
  )
}
