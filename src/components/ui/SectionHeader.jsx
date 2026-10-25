export default function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-4 ${centered ? 'justify-center' : ''}`}>
          <div className="w-6 h-px bg-primary" />
          <span className={`text-xs font-bold tracking-[0.2em] uppercase ${light ? 'text-primary-light' : 'text-primary'}`}>
            {eyebrow}
          </span>
          <div className="w-6 h-px bg-primary" />
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 ${light ? 'text-white' : 'text-dark-text'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-blue-200' : 'text-secondary-text'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
