import {
  UserCheck,
  BookOpen,
  FileText,
  Award,
  Plane,
  HeartHandshake,
  GraduationCap,
} from 'lucide-react'

export const services = [
  {
    id: 'counselling',
    icon: UserCheck,
    title: 'Personalised Counselling',
    description:
      'One-on-one sessions to understand your academic background, goals, and preferences before recommending any path.',
  },
  {
    id: 'university-selection',
    icon: GraduationCap,
    title: 'University & Course Selection',
    description:
      'Shortlisting universities and programs that match your profile, budget, and career aspirations.',
  },
  {
    id: 'application',
    icon: FileText,
    title: 'Application Assistance',
    description:
      'End-to-end support with application forms, SOPs, LORs, and documentation to maximise your chances.',
  },
  {
    id: 'scholarship',
    icon: Award,
    title: 'Scholarship Guidance',
    description:
      'Identifying scholarship opportunities and helping you prepare strong applications for financial support.',
  },
  {
    id: 'visa',
    icon: BookOpen,
    title: 'Visa Guidance',
    description:
      'Step-by-step guidance through the student visa application process for your chosen destination.',
  },
  {
    id: 'pre-departure',
    icon: Plane,
    title: 'Pre-Departure Support',
    description:
      'Preparing you for life abroad — accommodation, travel, banking, and what to expect on arrival.',
  },
  {
    id: 'post-arrival',
    icon: HeartHandshake,
    title: 'Post-Arrival Assistance',
    description:
      'Continued support after you land to help you settle in and navigate your new environment confidently.',
  },
]
