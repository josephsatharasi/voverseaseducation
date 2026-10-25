import { motion } from 'motion/react'
import SectionWrapper from '../../components/layout/SectionWrapper'
import SectionHeader from '../../components/ui/SectionHeader'
import FAQItem from './FAQItem'
import { faqs } from '../../data/faqs'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function FAQ() {
  const reduced = useReducedMotion()

  return (
    <SectionWrapper id="faq" bg="bg-soft-bg">
      <SectionHeader
        eyebrow="Common Questions"
        title="Frequently Asked Questions"
        subtitle="Answers to the questions we hear most often from students and parents exploring study-abroad options."
      />

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={faq.id}
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <FAQItem faq={faq} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
