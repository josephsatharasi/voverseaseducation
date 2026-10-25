import { AnimatePresence, motion } from 'motion/react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import Button from '../../components/ui/Button'

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="md:hidden absolute top-full left-0 right-0 overflow-hidden bg-white border-t border-gray-100 shadow-2xl shadow-navy/10"
        >
          <div className="px-4 py-5">
            <ul className="flex flex-col gap-1 mb-5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors
                      ${isActive ? 'bg-primary/8 text-primary' : 'text-dark-text hover:bg-gray-50 hover:text-primary'}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-primary' : 'bg-gray-300'}`} />
                        {link.label}
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <Button as={NavLink} to="/contact" variant="primary" size="md" className="w-full justify-center" onClick={onClose}>
              Free Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
