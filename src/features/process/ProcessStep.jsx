export default function ProcessStep({ step, isLast }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center font-black text-sm shrink-0 shadow-lg shadow-primary/30">
          {step.step}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 mt-3 mb-1 bg-gradient-to-b from-primary/40 to-transparent" />
        )}
      </div>

      <div className="pb-10 pt-1">
        <h3 className="font-bold text-dark-text text-base mb-1.5">{step.title}</h3>
        <p className="text-secondary-text text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}
