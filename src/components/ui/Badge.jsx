export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-primary ${className}`}
    >
      {children}
    </span>
  )
}
