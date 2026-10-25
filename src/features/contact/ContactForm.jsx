import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import Button from '../../components/ui/Button'

const destinationOptions = ['United Kingdom', 'United States', 'Canada', 'Australia', 'Germany', 'Ireland', 'New Zealand', 'Other']
const levelOptions = ['Undergraduate', 'Postgraduate (Masters)', 'PhD / Research', 'Diploma / Foundation', 'Not sure yet']

const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-dark-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 bg-white hover:border-gray-300'
const labelClass = 'block text-xs font-bold text-dark-text mb-2 tracking-wide uppercase'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', level: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-emerald" />
        </div>
        <h3 className="font-bold text-dark-text text-xl mb-2">Enquiry Received</h3>
        <p className="text-secondary-text text-sm max-w-xs">
          Thank you! One of our counsellors will be in touch within one working day.
        </p>
        <p className="text-xs text-muted mt-4">(Form submission not yet connected — demo only)</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input id="name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email Address *</label>
          <input id="email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="destination" className={labelClass}>Preferred Destination</label>
          <select id="destination" name="destination" value={form.destination} onChange={handleChange} className={inputClass}>
            <option value="">Select a destination</option>
            {destinationOptions.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="level" className={labelClass}>Intended Study Level</label>
        <select id="level" name="level" value={form.level} onChange={handleChange} className={inputClass}>
          <option value="">Select study level</option>
          {levelOptions.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" name="message" rows={4} placeholder="Tell us about your background and goals..." value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
        <Send size={16} /> Send Enquiry
      </Button>

      <p className="text-xs text-muted text-center">
        This form is a UI demonstration. Submission will be connected before launch.
      </p>
    </form>
  )
}
