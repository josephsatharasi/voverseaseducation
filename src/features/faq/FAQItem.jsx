import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'

export default function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${open ? 'border-primary/30 shadow-md shadow-primary/8' : 'border-gray-200 hover:border-gray-300'}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white"
        aria-expanded={open}
      >
        <span className={`font-semibold text-sm leading-snug transition-colors ${open ? 'text-primary' : 'text-dark-text'}`}>
          {faq.question}
        </span>
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${open ? 'bg-primary text-white' : 'bg-gray-100 text-secondary-text'}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-secondary-text text-sm leading-relaxed border-t border-gray-100 pt-4 bg-soft-bg/50">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
