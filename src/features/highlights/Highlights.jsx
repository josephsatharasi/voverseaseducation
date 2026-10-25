import { motion } from 'motion/react'
import { UserCheck, Globe, BookOpenCheck, HeartHandshake } from 'lucide-react'
import SectionWrapper from '../../components/layout/SectionWrapper'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const highlights = [
  {
    icon: UserCheck,
    title: 'Student-First Approach',
    description: 'Every recommendation is tailored to your individual profile, goals, and budget — not a generic checklist.',
    color: 'from-primary/15 to-primary/5',
    iconColor: 'text-primary',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We support applications to universities across 8+ countries, covering a wide range of disciplines and intakes.',
    color: 'from-teal/15 to-teal/5',
    iconColor: 'text-teal',
  },
  {
    icon: BookOpenCheck,
    title: 'End-to-End Support',
    description: 'From your first consultation to pre-departure briefing, we are with you at every step of the journey.',
    color: 'from-emerald/15 to-emerald/5',
    iconColor: 'text-emerald',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted Guidance',
    description: 'Honest, transparent advice that prioritises your best interests — we only recommend what genuinely fits your profile.',
    color: 'from-gold/15 to-gold/5',
    iconColor: 'text-gold',
  },
]

export default function Highlights() {
  const reduced = useReducedMotion()

  return (
    <SectionWrapper id="about" bg="bg-soft-bg">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial={reduced ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5`} style={{ width: 52, height: 52 }}>
                <Icon size={24} className={item.iconColor} />
              </div>
              <h3 className="font-bold text-dark-text text-base mb-2.5">{item.title}</h3>
              <p className="text-secondary-text text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
