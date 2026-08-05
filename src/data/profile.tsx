import type { PortfolioPageProps } from '@/components/ui/starfall-portfolio-landing'
import { AwsIcon } from '@/components/sections'
import type { SummaryFact } from '@/types/portfolio'
import { GITHUB_URL } from './site'

export const portfolioData: PortfolioPageProps = {
  logo: {
    initials: 'CY',
    name: 'Chanyeong (Edward) Yun',
  },
  navLinks: [
    { label: 'Projects', href: '#featured' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#stack' },
    { label: 'Writing', href: '#writing' },
    { label: 'GitHub', href: GITHUB_URL },
  ],
  resume: {
    label: 'Download CV',
    onClick: () => window.open('/cv.pdf', '_blank'),
  },
  avatar: {
    src: '/photos/profile.webp',
    alt: 'Chanyeong (Edward) Yun',
  },
  hero: {
    badge: 'Open to AI & Software Engineer roles',
    titleLine1: 'Software Engineer,',
    titleLine2Gradient: 'building backend systems & AI',
    subtitle: 'I build reliable software, from production backend systems to AI pipelines, that solves real-world problems.',
    tags: ['Python', 'TypeScript', 'System Design', 'RAG'],
    image: {
      src: '/photos/aws.webp',
      alt: 'Chanyeong at AWS Student Community Day, Seoul',
    },
    imageCaption: {
      icon: <AwsIcon className="w-5 h-5 text-white" />,
      title: 'AWS Student Community Day',
      sub: 'Invited to AWS Student Community Day Seoul 2026',
    },
  },
  ctaButtons: {
    primary: {
      label: 'Explore My Work',
      onClick: () => {
        document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })
      },
    },
    secondary: {
      label: 'Contact Me',
      onClick: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      },
    },
  },
  projects: [],
  stats: [],
  showAnimatedBackground: true,
}

export const summary: string[] = [
  'At Bespin Global, a leading cloud and AI consultancy and AWS Premier Tier Services Partner in South Korea, I developed enterprise-grade RAG systems on AWS Bedrock, designed ontology-driven retrieval architectures for insurance knowledge modeled on Palantir’s Ontology framework, and built evaluation pipelines to improve the accuracy and reliability of AI applications.',
  'Previously, I worked as a Software Engineer at Vitality, one of the UK’s leading health and life insurers, where I gained experience building scalable software solutions in a regulated industry.',
  'I’m currently completing my BSc in Software Engineering at Bournemouth University (graduating June 2027) and am seeking Software Engineer or AI Engineer opportunities to build impactful software — AI-powered and otherwise — that bridges cutting-edge research with practical business applications.',
]

export const summaryHighlights = ['Bespin Global', 'AWS Bedrock', 'Palantir’s Ontology framework', 'Vitality', 'Bournemouth University']

export const summaryFacts: SummaryFact[] = [
  { title: 'Based in', value: 'Bournemouth, UK' },
  { title: 'Education', value: 'BSc Software Engineering, expected June 2027' },
  { title: 'Status', value: 'Open to AI & Software Engineer roles' },
]
