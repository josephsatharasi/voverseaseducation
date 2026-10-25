import { motion } from 'motion/react'
import SectionWrapper from '../../components/layout/SectionWrapper'
import SectionHeader from '../../components/ui/SectionHeader'
import DestinationCard from '../../features/destinations/DestinationCard'
import { destinations } from '../../data/destinations'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function DestinationsPage() {
  const reduced = useReducedMotion()

  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary-light mb-4">
              <span className="w-6 h-px bg-primary-light" /> Study Destinations
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5">
              Where Will You Study?
            </h1>
            <p className="text-blue-200/80 text-xl max-w-2xl leading-relaxed">
              Explore the countries we support. Each destination offers unique academic, cultural, and career opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <SectionHeader
          eyebrow="All Destinations"
          title="Choose Your Destination"
          subtitle="We support students applying to universities across these countries. Let us help you find the right fit for your goals and budget."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={reduced ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <DestinationCard destination={dest} />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
