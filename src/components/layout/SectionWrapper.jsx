export default function SectionWrapper({ children, id, className = '', bg = '' }) {
  return (
    <section id={id} className={`py-20 px-4 ${bg} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
