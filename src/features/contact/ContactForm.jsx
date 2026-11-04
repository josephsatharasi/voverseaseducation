import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { saveEnquiry } from '../../utils/enquiryStorage'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10)

      setForm((prev) => ({
        ...prev,
        phone: digitsOnly,
      }))

      return
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.phone.length !== 10) {
      return
    }

    try {
      saveEnquiry(form)
      setSubmitted(true)
      setForm(initialForm)
    } catch (error) {
      console.error('Unable to save enquiry:', error)
      alert('Unable to submit your enquiry. Please try again.')
    }
  }

  const labelClass =
    'mb-2 block text-sm font-semibold text-gray-700'

  const inputClass =
    'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100'

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle
          className="mx-auto mb-4 text-green-600"
          size={48}
        />

        <h3 className="text-xl font-bold text-gray-900">
          Thank You!
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Your enquiry has been submitted successfully.
          Our team will contact you soon.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Submit Another Enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name *
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address *
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email address"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number *
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]{10}"
          maxLength={10}
          minLength={10}
          required
          placeholder="Enter 10-digit mobile number"
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
        />

        <p className="mt-1 text-xs text-gray-500">
          {form.phone.length}/10 digits
        </p>

        {form.phone.length > 0 && form.phone.length !== 10 && (
          <p className="mt-1 text-xs text-red-500">
            Please enter exactly 10 digits.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="destination" className={labelClass}>
          Preferred Study Destination *
        </label>

        <select
          id="destination"
          name="destination"
          required
          value={form.destination}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a destination</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="Ireland">Ireland</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Dubai">Dubai / UAE</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Your Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your study plans..."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={form.phone.length !== 10}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Send size={18} />
        Submit Enquiry
      </button>
    </form>
  )
}