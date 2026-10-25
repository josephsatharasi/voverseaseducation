import { Link } from 'react-router-dom'
import logo from '../../assets/image.png'
import { navLinks } from '../../data/navigation'
import { destinations } from '../../data/destinations'
import { services } from '../../data/services'
import { AtSign, Globe, Share2, ExternalLink, Mail, Phone, MapPin } from 'lucide-react'

const socialLinks = [
  { icon: AtSign,       label: 'Instagram', href: '#' },
  { icon: Globe,        label: 'LinkedIn',  href: '#' },
  { icon: Share2,       label: 'Facebook',  href: '#' },
  { icon: ExternalLink, label: 'Twitter/X', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <div className="inline-block bg-white rounded-xl px-3 py-2">
                <img
                  src={logo}
                  alt="Voverseas Education"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-6">
              Helping Indian students achieve their international education goals with personalised, honest guidance.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/6 border border-white/10 hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-gold mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-blue-200/70 hover:text-white text-sm transition-colors duration-150 hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-gold mb-5">Destinations</h4>
            <ul className="flex flex-col gap-3">
              {destinations.slice(0, 6).map((d) => (
                <li key={d.id}>
                  <Link to="/destinations" className="text-blue-200/70 hover:text-white text-sm transition-colors duration-150 inline-flex items-center gap-2">
                    <span>{d.flag}</span> {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-gold mb-5">Contact</h4>
            <ul className="flex flex-col gap-4">
              {[
                { icon: Phone,  text: '[Phone to be added]' },
                { icon: Mail,   text: '[Email to be added]' },
                { icon: MapPin, text: '[Address to be added]' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon size={14} className="text-primary-light mt-0.5 shrink-0" />
                  <span className="text-blue-200/70 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300/50 text-xs">
            © {new Date().getFullYear()} Voverseas Education. All rights reserved.
          </p>
          <p className="text-blue-400/40 text-xs">
            Contact details will be updated before launch.
          </p>
        </div>
      </div>
    </footer>
  )
}
