import { motion } from 'motion/react'
import SectionHeader from '../../components/ui/SectionHeader'
import ServiceCard from './ServiceCard'
import { services } from '../../data/services'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function WhyUs() {
  const reduced = useReducedMotion()

  return (
    <section id="services" className="py-24 px-6 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/6 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          eyebrow="What We Do"
          title="How We Support Your Journey"
          subtitle="From your first question to your first day on campus, Voverseas Education provides structured, personalised support at every stage."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={reduced ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <ServiceCard service={service} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
