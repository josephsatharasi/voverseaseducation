import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import SectionWrapper from '../../components/layout/SectionWrapper'
import SectionHeader from '../../components/ui/SectionHeader'
import ProcessStep from './ProcessStep'
import { processSteps } from '../../data/process'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Button from '../../components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function Process() {
  const reduced = useReducedMotion()

  return (
    <SectionWrapper id="process">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            eyebrow="Your Journey"
            title="From Consultation to Campus"
            subtitle="A clear, guided process designed to take the stress out of studying abroad."
            centered={false}
          />
          <Button as={Link} to="/contact" variant="primary" size="lg" className="mb-10">
            Start Your Journey <ArrowRight size={18} />
          </Button>

          <div className="relative rounded-3xl overflow-hidden h-64 shadow-xl shadow-navy/15">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=80"
              alt="Student studying"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white font-bold text-lg">7 steps to your international offer</p>
              <p className="text-blue-200 text-sm">Guided by experts at every stage</p>
            </div>
          </div>
        </div>

        {/* Right: steps */}
        <div className="pt-2">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={reduced ? {} : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <ProcessStep step={step} isLast={i === processSteps.length - 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
