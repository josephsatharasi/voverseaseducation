import { motion } from 'motion/react'
import SectionWrapper from '../../components/layout/SectionWrapper'
import SectionHeader from '../../components/ui/SectionHeader'
import ServiceCard from '../../features/why-us/ServiceCard'
import Process from '../../features/process/Process'
import { services } from '../../data/services'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function ServicesPage() {
  const reduced = useReducedMotion()

  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary-light mb-4">
              <span className="w-6 h-px bg-primary-light" /> Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5">
              How We Help You
            </h1>
            <p className="text-blue-200/80 text-xl max-w-2xl leading-relaxed">
              End-to-end support for every stage of your study-abroad journey — from initial counselling to pre-departure preparation.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="Every service is designed to reduce the complexity of studying abroad and give you the best possible chance of success."
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
      </SectionWrapper>

      <Process />
    </>
  )
}
