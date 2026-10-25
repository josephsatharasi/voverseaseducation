import { motion } from 'motion/react'
import SectionWrapper from '../../components/layout/SectionWrapper'
import SectionHeader from '../../components/ui/SectionHeader'
import CourseCard from '../../features/courses/CourseCard'
import { courses } from '../../data/courses'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function CoursesPage() {
  const reduced = useReducedMotion()

  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald/8 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary-light mb-4">
              <span className="w-6 h-px bg-primary-light" /> Courses
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5">
              Find Your Field of Study
            </h1>
            <p className="text-blue-200/80 text-xl max-w-2xl leading-relaxed">
              Explore the most popular disciplines among Indian students studying abroad and discover where each field is best studied.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Study Areas"
          title="Popular Courses & Disciplines"
          subtitle="We help you identify the right program and destination for your academic background and career goals."
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
    </>
  )
}
