import Hero from '../../features/hero/Hero'
import Highlights from '../../features/highlights/Highlights'
import CountryScroller from '../../features/country-scroller/CountryScroller'
import Destinations from '../../features/destinations/Destinations'
import WhyUs from '../../features/why-us/WhyUs'
import Process from '../../features/process/Process'
import Courses from '../../features/courses/Courses'
import Testimonials from '../../features/testimonials/Testimonials'
import FAQ from '../../features/faq/FAQ'
import Contact from '../../features/contact/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <CountryScroller />
      <Destinations />
      <WhyUs />
      <Process />
      <Courses />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
