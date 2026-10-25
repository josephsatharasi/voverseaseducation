export default function ServiceCard({ service, index }) {
  const Icon = service.icon
  return (
    <div className="relative bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
      {/* Background number */}
      <span className="absolute top-4 right-5 text-6xl font-black text-gray-50 select-none leading-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-5 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
          <Icon size={22} className="text-white" />
        </div>
        <h3 className="font-bold text-dark-text text-base mb-2.5">{service.title}</h3>
        <p className="text-secondary-text text-sm leading-relaxed">{service.description}</p>
      </div>
    </div>
  )
}
