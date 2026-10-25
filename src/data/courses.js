import { Cpu, Briefcase, Stethoscope, Palette, Database, Wrench } from 'lucide-react'

export const courses = [
  {
    id: 'cs',
    icon: Cpu,
    title: 'Computer Science & IT',
    description: 'Software engineering, cybersecurity, AI, and information systems.',
    popular: ['UK', 'USA', 'Canada', 'Australia'],
  },
  {
    id: 'business',
    icon: Briefcase,
    title: 'Business & Management',
    description: 'MBA, finance, marketing, international business, and entrepreneurship.',
    popular: ['UK', 'USA', 'Australia', 'Ireland'],
  },
  {
    id: 'engineering',
    icon: Wrench,
    title: 'Engineering & Technology',
    description: 'Mechanical, civil, electrical, and chemical engineering programs.',
    popular: ['Germany', 'USA', 'Canada', 'Australia'],
  },
  {
    id: 'healthcare',
    icon: Stethoscope,
    title: 'Healthcare & Life Sciences',
    description: 'Nursing, pharmacy, public health, and biomedical sciences.',
    popular: ['UK', 'Australia', 'Ireland', 'New Zealand'],
  },
  {
    id: 'data',
    icon: Database,
    title: 'Data Science & AI',
    description: 'Machine learning, data analytics, big data, and artificial intelligence.',
    popular: ['USA', 'UK', 'Canada', 'Germany'],
  },
  {
    id: 'arts',
    icon: Palette,
    title: 'Arts & Humanities',
    description: 'Design, media, communication, social sciences, and liberal arts.',
    popular: ['UK', 'USA', 'Australia', 'New Zealand'],
  },
]
