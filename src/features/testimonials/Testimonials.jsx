import { motion } from 'motion/react'
import { Quote, Star } from 'lucide-react'
import SectionWrapper from '../../components/layout/SectionWrapper'
import SectionHeader from '../../components/ui/SectionHeader'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const testimonials = [
  {
    id: 1,
    name: 'Priya S.',
    destination: 'MSc Data Science',
    university: 'University of Edinburgh, UK',
    quote: 'The team at Voverseas guided me through every step — from shortlisting universities to my visa approval. I could not have done it without their support.',
    avatar: 'PS',
    color: 'from-primary to-primary-dark',
  },
  {
    id: 2,
    name: 'Rahul M.',
    destination: 'MBA',
    university: 'University of Toronto, Canada',
    quote: 'What impressed me most was how personalised the advice was. They understood my profile and recommended programs that were genuinely the right fit.',
    avatar: 'RM',
    color: 'from-teal to-primary',
  },
  {
    id: 3,
    name: 'Ananya K.',
    destination: 'BEng Mechanical Engineering',
    university: 'TU Munich, Germany',
    quote: 'Studying in Germany seemed complicated, but Voverseas made the entire process straightforward. Their knowledge of German university applications is excellent.',
    avatar: 'AK',
    color: 'from-emerald to-teal',
  },
]

export default function Testimonials() {
  const reduced = useReducedMotion()

  return (
    <SectionWrapper id="testimonials" bg="bg-soft-bg">
      <SectionHeader
        eyebrow="Student Experiences"
        title="What Our Students Say"
        subtitle="Placeholder testimonials — these will be replaced with verified student stories before launch."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={reduced ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={14} className="text-gold fill-gold" />
              ))}
            </div>

            <Quote size={24} className="text-primary/20 mb-3" />
            <p className="text-body-text text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>

            <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
              <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.color} text-white flex items-center justify-center text-xs font-black shrink-0`}>
                {t.avatar}
              </div>
              <div>
                <div className="font-bold text-dark-text text-sm">{t.name}</div>
                <div className="text-primary text-xs font-semibold">{t.destination}</div>
                <div className="text-secondary-text text-xs">{t.university}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
