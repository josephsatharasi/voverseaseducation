import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Target, Eye, Heart, ArrowRight } from 'lucide-react'
import SectionWrapper from '../../components/layout/SectionWrapper'
import SectionHeader from '../../components/ui/SectionHeader'
import Highlights from '../../features/highlights/Highlights'
import Button from '../../components/ui/Button'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const values = [
  { icon: Target, title: 'Our Mission', description: 'To make quality international education accessible to every Indian student by providing honest, personalised, and expert guidance throughout their study-abroad journey.' },
  { icon: Eye,    title: 'Our Vision',  description: 'To be the most trusted study-abroad consultancy for Indian students — known for integrity, results, and a genuine commitment to student success.' },
  { icon: Heart,  title: 'Our Values',  description: 'Transparency, student-first thinking, honest advice, and a commitment to guiding every student toward the path that truly fits their goals and potential.' },
]

export default function AboutPage() {
  const reduced = useReducedMotion()

  return (
    <>
      {/* Page hero */}
      <section className="bg-hero-gradient pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary-light mb-4">
              <span className="w-6 h-px bg-primary-light" /> About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5">
              Who We Are
            </h1>
            <p className="text-blue-200/80 text-xl max-w-2xl leading-relaxed">
              Voverseas Education is a dedicated study-abroad consultancy helping Indian students navigate the path to top international universities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader eyebrow="Our Story" title="Dedicated to Your Global Future" centered={false} />
            <div className="flex flex-col gap-4 text-secondary-text text-base leading-relaxed">
              <p>Voverseas Education was founded with a single purpose — to give Indian students the same quality of guidance that students in other countries take for granted when applying to international universities.</p>
              <p>We believe that every student deserves honest, personalised advice — not a one-size-fits-all approach. Our counsellors take the time to understand your background, goals, and circumstances before making any recommendation.</p>
              <p>From your first consultation to your pre-departure briefing, we are with you at every step of the journey.</p>
            </div>
            <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-8">
              Book a Free Consultation <ArrowRight size={18} />
            </Button>
          </motion.div>

          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-navy/15 h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="Students in consultation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper bg="bg-soft-bg">
        <SectionHeader eyebrow="What Drives Us" title="Our Mission, Vision & Values" />
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                initial={reduced ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-dark-text text-lg mb-3">{v.title}</h3>
                <p className="text-secondary-text text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>

      <Highlights />
    </>
  )
}
