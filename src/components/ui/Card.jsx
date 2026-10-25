export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 ${hover ? 'hover:shadow-md transition-shadow duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
