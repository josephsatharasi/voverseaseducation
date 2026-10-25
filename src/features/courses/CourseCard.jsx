const colors = [
  { bg: 'from-primary/12 to-primary/4', icon: 'text-primary', border: 'border-primary/20' },
  { bg: 'from-teal/12 to-teal/4',       icon: 'text-teal',    border: 'border-teal/20' },
  { bg: 'from-emerald/12 to-emerald/4', icon: 'text-emerald', border: 'border-emerald/20' },
  { bg: 'from-gold/12 to-gold/4',       icon: 'text-gold',    border: 'border-gold/20' },
  { bg: 'from-primary/12 to-primary/4', icon: 'text-primary', border: 'border-primary/20' },
  { bg: 'from-teal/12 to-teal/4',       icon: 'text-teal',    border: 'border-teal/20' },
]

export default function CourseCard({ course, index }) {
  const Icon = course.icon
  const c = colors[index % colors.length]

  return (
    <div className={`bg-white rounded-3xl p-6 border ${c.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}>
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.bg} flex items-center justify-center mb-5`}>
        <Icon size={22} className={c.icon} />
      </div>
      <h3 className="font-bold text-dark-text text-base mb-2">{course.title}</h3>
      <p className="text-secondary-text text-sm leading-relaxed mb-4">{course.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {course.popular.map((dest) => (
          <span key={dest} className="text-xs bg-soft-bg text-body-text px-2.5 py-1 rounded-full font-medium border border-gray-100">
            {dest}
          </span>
        ))}
      </div>
    </div>
  )
}
