import { motion } from 'motion/react'
import { ArrowRight, CalendarCheck, MapPin, GraduationCap, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Button from '../../components/ui/Button'
import heroImg from '../../assets/hero.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const stats = [
  { icon: MapPin,        value: '10+',   label: 'Destinations' },
  { icon: GraduationCap, value: 'Free',  label: 'Consultation' },
  { icon: Users,         value: '100%',  label: 'Personalised' },
]

export default function Hero() {
  const reduced = useReducedMotion()
  const a = (delay) => reduced ? {} : fadeUp(delay)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0B1D35' }}>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div>
            <motion.div {...a(0.1)} className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                India's Trusted Study Abroad Partner
              </span>
            </motion.div>

            <motion.h1 {...a(0.2)} className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              Your Dream
              <br />
              <span style={{ color: '#F59E0B' }}>University</span>
              <br />
              Awaits.
            </motion.h1>

            <motion.p {...a(0.35)} className="text-blue-200/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Expert guidance for Indian students pursuing international higher education — from shortlisting to visa approval.
            </motion.p>

            <motion.div {...a(0.45)} className="flex flex-wrap gap-4 mb-12">
              <Button as={Link} to="/destinations" variant="primary" size="lg">
                Explore Destinations <ArrowRight size={18} />
              </Button>
              <Button as={Link} to="/contact" variant="outline" size="lg">
                <CalendarCheck size={18} /> Free Consultation
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div {...a(0.55)} className="flex items-center gap-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base leading-none">{value}</div>
                    <div className="text-blue-300/70 text-xs mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: floating cards */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <img
                src={heroImg}
                alt="University campus"
                className="w-full h-[480px] object-cover rounded-3xl shadow-2xl shadow-navy/50"
              />
              {/* Overlay gradient on image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-navy/40 to-transparent" />

              {/* Floating card 1 */}
              <motion.div
                animate={reduced ? {} : { y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -left-8 top-12 bg-white rounded-2xl p-4 shadow-2xl shadow-navy/20 w-52"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap size={16} className="text-primary" />
                  </div>
                  <span className="text-xs font-bold text-dark-text">Offer Received</span>
                </div>
                <p className="text-xs text-secondary-text">University of Edinburgh, UK</p>
                <div className="mt-2 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald" />
                  <span className="text-xs text-emerald font-semibold">MSc Data Science</span>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={reduced ? {} : { y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-6 bottom-16 bg-white rounded-2xl p-4 shadow-2xl shadow-navy/20 w-48"
              >
                <div className="text-2xl font-black text-primary mb-1">8+</div>
                <div className="text-xs font-semibold text-dark-text">Countries</div>
                <div className="text-xs text-secondary-text mt-0.5">UK · USA · Canada · AUS</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
