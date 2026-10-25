const variants = {
  primary:   'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-primary/40',
  secondary: 'bg-white text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary/5',
  navy:      'bg-navy text-white hover:bg-navy-light shadow-lg shadow-navy/30',
  ghost:     'text-primary hover:bg-primary/8',
  gold:      'bg-gold text-navy font-semibold hover:bg-gold-light shadow-lg shadow-gold/30',
  outline:   'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60',
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-2.5 text-sm rounded-xl',
  lg: 'px-8 py-3.5 text-base rounded-xl',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center gap-2 font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
