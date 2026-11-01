import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import SectionWrapper from '../../components/layout/SectionWrapper'
import SectionHeader from '../../components/ui/SectionHeader'
import ContactForm from './ContactForm'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { company } from '../../data/company'

const addressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`

export default function Contact() {
  const reduced = useReducedMotion()

  const contactDetails = [
    ...company.mobileNumbers.map((number, index) => ({
      icon: Phone,
      label:
        company.mobileNumbers.length > 1
          ? `Mobile ${index + 1}`
          : 'Mobile',
      value: number,
      href: `tel:${number.replace(/\s+/g, '')}`,
    })),

    {
      icon: Mail,
      label: 'Official Email',
      value: company.email,
      href: `mailto:${company.email}`,
    },

    {
      icon: MapPin,
      label: 'Office Address',
      value: company.address,
      href: addressUrl,
    },

    {
      icon: Clock,
      label: 'Office Hours',
      value: 'Mon – Sat, 9:00 AM – 7:00 PM',
    },
  ]

  return (
    <SectionWrapper id="contact" bg="bg-soft-bg">
      <SectionHeader
        eyebrow="Get In Touch"
        title="Book Your Free Consultation"
        subtitle="Ready to explore your options? Reach out to our team or send an enquiry. We will be happy to guide you through your overseas education plans."
      />

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={reduced ? {} : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 flex flex-col gap-5"
        >
          <div className="bg-navy rounded-3xl p-7 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />

            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-teal flex items-center justify-center mb-5 shadow-lg">
                <span className="text-white font-black text-xl">V</span>
              </div>

              <h3 className="font-black text-xl mb-2">
                {company.name}
              </h3>

              <p className="text-blue-200/80 text-sm mb-7 leading-relaxed">
                Your trusted partner for international higher education
                guidance.
              </p>

              <div className="flex flex-col gap-4">
                {contactDetails.map(
                  ({ icon: Icon, label, value, href }) => (
                    <div
                      key={label}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-gold" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-[10px] text-blue-300/70 font-semibold uppercase tracking-wider mb-0.5">
                          {label}
                        </div>

                        {href ? (
                          <a
                            href={href}
                            target={
                              label === 'Office Address'
                                ? '_blank'
                                : undefined
                            }
                            rel={
                              label === 'Office Address'
                                ? 'noreferrer'
                                : undefined
                            }
                            className="text-sm text-white/90 hover:text-gold transition-colors break-words"
                          >
                            {value}
                          </a>
                        ) : (
                          <div className="text-sm text-white/90">
                            {value}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-primary/10 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald" />

              <span className="text-sm font-bold text-dark-text">
                Free, no-obligation consultation
              </span>
            </div>

            <p className="text-secondary-text text-xs leading-relaxed">
              Our initial consultation is completely free. We will listen to
              your goals and give you an honest assessment of your options —
              with no pressure.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? {} : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
        >
          <h3 className="font-bold text-dark-text text-lg mb-1">
            Send us an enquiry
          </h3>

          <p className="text-secondary-text text-sm mb-7">
            Fill in your details and we’ll be in touch shortly.
          </p>

          <ContactForm />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}