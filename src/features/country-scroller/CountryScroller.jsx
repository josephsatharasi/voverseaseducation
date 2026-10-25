import { destinations } from '../../data/destinations'

const extraFlags = [
  { id: 'singapore',   name: 'Singapore',   flag: '🇸🇬' },
  { id: 'france',      name: 'France',      flag: '🇫🇷' },
  { id: 'sweden',      name: 'Sweden',      flag: '🇸🇪' },
  { id: 'netherlands', name: 'Netherlands', flag: '🇳🇱' },
  { id: 'japan',       name: 'Japan',       flag: '🇯🇵' },
  { id: 'italy',       name: 'Italy',       flag: '🇮🇹' },
  { id: 'spain',       name: 'Spain',       flag: '🇪🇸' },
  { id: 'switzerland', name: 'Switzerland', flag: '🇨🇭' },
]

const allItems = [...destinations, ...extraFlags]

// Duplicate so the loop is seamless
const items = [...allItems, ...allItems]

export default function CountryScroller() {
  return (
    <section className="py-14 overflow-hidden" style={{ background: '#F8FAFF' }}>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Heading */}
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

      {/* Scrolling strip */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F8FAFF 40%, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F8FAFF 40%, transparent)' }}
        />

        <div className="overflow-hidden px-2">
          <div className="marquee-track">
            {items.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-gray-200 shadow-sm shrink-0 cursor-default select-none"
              >
                <span style={{ fontSize: 26, lineHeight: 1 }}>{item.flag}</span>
                <span className="text-sm font-semibold text-body-text whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
