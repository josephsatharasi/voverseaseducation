import { motion } from 'motion/react'
import SectionWrapper from '../../components/layout/SectionWrapper'
import SectionHeader from '../../components/ui/SectionHeader'
import DestinationCard from './DestinationCard'
import { destinations } from '../../data/destinations'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Destinations() {
  const reduced = useReducedMotion()

  return (
    <SectionWrapper id="destinations" bg="bg-soft-bg">
      <SectionHeader
        eyebrow="Where Will You Study?"
        title="Explore Study Destinations"
        subtitle="We support students applying to universities across these countries. Each destination offers unique opportunities — let us help you find the right fit."
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
  )
}
