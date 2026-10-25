import { motion } from 'motion/react'
import Contact from '../../features/contact/Contact'
import FAQ from '../../features/faq/FAQ'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function ContactPage() {
  const reduced = useReducedMotion()

  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/8 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary-light mb-4">
              <span className="w-6 h-px bg-primary-light" /> Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5">
              Let's Talk About<br />Your Future
            </h1>
            <p className="text-blue-200/80 text-xl max-w-2xl leading-relaxed">
              Book a free consultation and take the first step toward your international education journey.
            </p>
          </motion.div>
        </div>
      </section>

      <Contact />
      <FAQ />
    </>
  )
}
