import { motion } from 'motion/react'
import SectionWrapper from '../../components/layout/SectionWrapper'
import SectionHeader from '../../components/ui/SectionHeader'
import CourseCard from './CourseCard'
import { courses } from '../../data/courses'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Courses() {
  const reduced = useReducedMotion()

  return (
    <SectionWrapper id="courses">
      <SectionHeader
        eyebrow="Popular Study Areas"
        title="Find Your Field of Study"
        subtitle="Explore the most sought-after disciplines among Indian students studying abroad. We help you identify the right program and destination for your career goals."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={reduced ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <CourseCard course={course} index={i} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
