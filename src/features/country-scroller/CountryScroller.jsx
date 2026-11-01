import { useState } from 'react'
import { destinations } from '../../data/destinations'

const countryCodes = {
  uk: 'gb',
  usa: 'us',
  us: 'us',
  canada: 'ca',
  australia: 'au',
  germany: 'de',
  ireland: 'ie',
  'new-zealand': 'nz',
  dubai: 'ae',
  singapore: 'sg',
  france: 'fr',
  sweden: 'se',
  netherlands: 'nl',
  japan: 'jp',
  italy: 'it',
  spain: 'es',
  switzerland: 'ch',
}

const extraCountries = [
  { id: 'singapore', name: 'Singapore' },
  { id: 'france', name: 'France' },
  { id: 'sweden', name: 'Sweden' },
  { id: 'netherlands', name: 'Netherlands' },
  { id: 'japan', name: 'Japan' },
  { id: 'italy', name: 'Italy' },
  { id: 'spain', name: 'Spain' },
  { id: 'switzerland', name: 'Switzerland' },
]

const allCountries = [
  ...destinations,
  ...extraCountries.filter(
    (extra) => !destinations.some((item) => item.id === extra.id)
  ),
]

const countries = [...allCountries, ...allCountries]

function CountryFlag({ code, name }) {
  const [imageFailed, setImageFailed] = useState(false)

  if (!code || imageFailed) {
    return (
      <span className="text-2xl" role="img" aria-label={`${name} flag`}>
        🌍
      </span>
    )
  }

  return (
    <img
      src={`https://flagcdn.com/w80/${code}.png`}
      srcSet={`https://flagcdn.com/w160/${code}.png 2x`}
      alt={`${name} flag`}
      width="36"
      height="26"
      loading="eager"
      decoding="async"
      onError={() => setImageFailed(true)}
      className="w-9 h-[26px] object-cover rounded-sm shrink-0 shadow-sm"
    />
  )
}

export default function CountryScroller() {
  return (
    <section className="py-14 overflow-hidden bg-[#F8FAFF]">
      <style>{`
        @keyframes countryMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .country-marquee-track {
          display: flex;
          width: max-content;
          gap: 16px;
          animation: countryMarquee 45s linear infinite;
        }

        .country-marquee-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .country-marquee-track {
            animation: none;
          }
        }
      `}</style>

      {/* Section Heading */}
      <div className="text-center mb-10 px-4">
        <div className="inline-flex items-center gap-2 mb-3">
          <div className="w-6 h-px bg-primary" />

          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
            Study Destinations
          </span>

          <div className="w-6 h-px bg-primary" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-dark-text">
          We Support Students Across the Globe
        </h2>
      </div>

      {/* Country Flag Scroller */}
      <div className="relative">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-28 z-10 pointer-events-none bg-gradient-to-r from-[#F8FAFF] to-transparent" />

        {/* Right Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-28 z-10 pointer-events-none bg-gradient-to-l from-[#F8FAFF] to-transparent" />

        <div className="overflow-hidden">
          <div className="country-marquee-track">
            {countries.map((country, index) => {
              const code = countryCodes[country.id]

              return (
                <div
                  key={`${country.id}-${index}`}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-white border border-gray-200 shadow-sm shrink-0 select-none"
                >
                  <CountryFlag
                    code={code}
                    name={country.name}
                  />

                  <span className="text-sm md:text-base font-semibold text-body-text whitespace-nowrap">
                    {country.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
