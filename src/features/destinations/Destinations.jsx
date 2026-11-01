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
        subtitle="Discover trusted study destinations, internationally recognised universities, and programmes that match your academic interests and career ambitions. Our counsellors guide you at every step — from choosing the right country and course to preparing a confident application."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, index) => (
          <motion.div
            key={dest.id}
            initial={reduced ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.07,
            }}
          >
            <DestinationCard destination={dest} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}