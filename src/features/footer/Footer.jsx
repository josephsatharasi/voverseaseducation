
import { Link } from 'react-router-dom'
import logo from '../../assets/image.png'
import { company } from '../../data/company'
import { navLinks } from '../../data/navigation'
import { destinations } from '../../data/destinations'
import {
  AtSign,
  Globe,
  Share2,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

const socialLinks = [
  { icon: AtSign, label: 'Instagram', href: '#' },
  { icon: Globe, label: 'LinkedIn', href: '#' },
  { icon: Share2, label: 'Facebook', href: '#' },
  { icon: ExternalLink, label: 'Twitter/X', href: '#' },
]

export default function Footer() {
  const contactLinks = [
    ...company.mobileNumbers.map((number) => ({
      icon: Phone,
      text: number,
      href: `tel:${number.replace(/\s+/g, '')}`,
    })),
    {
      icon: Mail,
      text: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: MapPin,
      text: company.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`,
    },
  ]

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-5"
              aria-label={`${company.name} home`}
            >
              <img
                src={logo}
                alt="V Overseas Education"
                className="h-12 w-auto object-contain shrink-0"
              />

              <span className="font-extrabold text-base tracking-tight text-white">
                V Overseas <span className="text-gold">Education</span>
              </span>
            </Link>

            <p className="text-blue-200/70 text-sm leading-relaxed mb-6">
              Helping Indian students achieve their international education
              goals with personalised, honest guidance.
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
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-gold mb-5">
              Navigation
            </h4>

            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-blue-200/70 hover:text-white text-sm transition-colors duration-150 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-gold mb-5">
              Destinations
            </h4>

            <ul className="flex flex-col gap-3">
              {destinations.slice(0, 6).map((destination) => (
                <li key={destination.id}>
                  <Link
                    to="/destinations"
                    className="text-blue-200/70 hover:text-white text-sm transition-colors duration-150 inline-flex items-center gap-2"
                  >
                    <span>{destination.flag}</span>
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-gold mb-5">
              Contact
            </h4>

            <ul className="flex flex-col gap-4">
              {contactLinks.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon
                    size={14}
                    className="text-primary-light mt-0.5 shrink-0"
                  />

                  <a
                    href={href}
                    target={href.startsWith('https://') ? '_blank' : undefined}
                    rel={href.startsWith('https://') ? 'noreferrer' : undefined}
                    className="text-blue-200/70 text-sm hover:text-white transition-colors break-words"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300/50 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
