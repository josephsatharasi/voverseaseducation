import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export default function DestinationCard({ destination }) {
  const { name, flag, image, description, highlights } = destination

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group bg-white rounded-3xl overflow-hidden shadow-md shadow-navy/6 border border-gray-100 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`${name}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600"
          style={{ transitionDuration: '600ms' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
        <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-2.5 py-1.5">
          <span className="text-xl">{flag}</span>
        </div>
        <div className="absolute bottom-3 left-4">
          <h3 className="font-bold text-white text-base drop-shadow">{name}</h3>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-secondary-text text-sm leading-relaxed mb-4 flex-1">{description}</p>

        <ul className="flex flex-wrap gap-1.5 mb-4">
          {highlights.map((h) => (
            <li key={h} className="text-xs bg-primary/6 text-primary px-2.5 py-1 rounded-full font-semibold border border-primary/10">
              {h}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all duration-200"
        >
          Learn More <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  )
}
