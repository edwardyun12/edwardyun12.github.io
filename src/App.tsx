import { PortfolioPage, type PortfolioPageProps } from '@/components/ui/starfall-portfolio-landing'
import {
  ExperienceSection,
  FeaturedProjectsSection,
  SkillsSection,
  CertsSection,
  WritingSection,
  MomentsSection,
  SiteFooter,
  type ExperienceItem,
  type FeaturedProject,
  type SkillGroup,
  type Cert,
  type Article,
  type Moment,
} from '@/components/sections'
import { Database, Bot, Plug } from 'lucide-react'

const GITHUB_URL = 'https://github.com/edwardyun12'
const LINKEDIN_URL = 'https://uk.linkedin.com/in/chanyeongyun'
const EMAIL = 'edward767976@gmail.com'

const portfolioData: PortfolioPageProps = {
  logo: {
    initials: 'CY',
    name: 'Chanyeong Yun',
  },
  navLinks: [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#featured' },
    { label: 'Skills', href: '#stack' },
    { label: 'Writing', href: '#writing' },
    { label: 'GitHub', href: GITHUB_URL },
  ],
  resume: {
    label: 'Download CV',
    onClick: () => window.open('/cv.pdf', '_blank'),
  },
  hero: {
    titleLine1: 'Building the agentic layer:',
    titleLine2Gradient: 'AI agents · MCP · RAG',
    subtitle:
      'Chanyeong Yun — GenAI Software Engineer at Bespin Global and final-year Software Engineering student at Bournemouth University, shipping production GenAI systems on AWS Bedrock. Previously at Vitality.',
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
        window.location.href = `mailto:${EMAIL}`
      },
    },
  },
  projects: [
    {
      title: 'RAG Systems',
      description:
        'End-to-end retrieval-augmented generation: ingestion pipelines, hybrid search, reranking, and grounded answers with citations — tuned with retrieval evaluation, not guesswork.',
      tags: ['Python', 'AWS Bedrock', 'Vector Search'],
      imageContent: <Database className="w-10 h-10 text-white/40" />,
    },
    {
      title: 'AI Agents',
      description:
        'Agentic workflows that plan, call tools, and recover from failure — reliable multi-step execution with guardrails, structured outputs, and human-in-the-loop approval.',
      tags: ['Orchestration', 'Tool Use', 'Guardrails'],
      imageContent: <Bot className="w-10 h-10 text-white/40" />,
    },
    {
      title: 'MCP Servers',
      description:
        'Model Context Protocol servers exposing enterprise APIs, databases, and documents to LLMs through typed, permission-aware tool interfaces.',
      tags: ['MCP', 'TypeScript', 'REST APIs'],
      imageContent: <Plug className="w-10 h-10 text-white/40" />,
    },
  ],
  stats: [
    { value: '2+', label: 'Years in Industry' },
    { value: '3', label: 'GenAI Domains — RAG · Agents · MCP' },
    { value: '2026', label: 'BSc Software Engineering, Bournemouth' },
  ],
  showAnimatedBackground: true,
}

const experience: ExperienceItem[] = [
  {
    role: 'GenAI Software Engineer',
    org: 'Bespin Global',
    period: '2026.06 — Present',
    bullets: [
      'Design and build RAG systems for enterprise clients — document ingestion, chunking and embedding strategies, hybrid retrieval, and answer grounding with citations.',
      'Develop AI agent workflows that decompose business tasks into tool-using, multi-step executions with guardrails and human-in-the-loop checkpoints.',
      'Build and maintain MCP (Model Context Protocol) servers that connect LLMs to internal APIs, databases, and knowledge bases with safe, typed tool interfaces.',
      'Ship on AWS Bedrock and own the reliability side: retrieval evaluation, prompt regression testing, and observability for LLM services in production.',
    ],
    tags: ['Python', 'RAG', 'MCP', 'AI Agents', 'AWS Bedrock', 'Vector Search'],
  },
  {
    role: 'Associate Software Engineer',
    org: 'Vitality',
    period: '2023.07 — 2024.07',
    bullets: [
      'Spent a full year as a developer on production systems at one of the UK’s largest health & life insurers.',
      'Delivered features end-to-end within an agile team — from design and implementation through code review, testing, and release in a regulated environment.',
      'Worked across the stack on customer-facing insurance products, collaborating with QA, product, and platform teams.',
    ],
    tags: ['Full-stack', 'Agile', 'CI/CD', 'Production Systems'],
  },
]

const education: ExperienceItem[] = [
  {
    role: 'BSc (Hons) Software Engineering',
    org: 'Bournemouth University',
    period: '2021.09 — 2027 (expected)',
    bullets: [
      'Sandwich-degree programme combining academic study with a year in industry.',
      'Coursework spanning software design, distributed systems, databases, and applied machine learning.',
    ],
    tags: ['Final Year', 'Year in Industry'],
  },
]

// TODO: 실제 프로젝트로 교체하세요 — repoUrl/demoUrl은 없으면 지우면 버튼이 안 보입니다.
const featuredProjects: FeaturedProject[] = [
  {
    title: 'Project Title One',
    description:
      'One or two sentences: the problem this solves, what you built, and the measurable outcome (e.g. "cut retrieval latency from 2s to 300ms").',
    tags: ['Tech A', 'Tech B', 'Tech C'],
    repoUrl: `${GITHUB_URL}/repo-name`,
    demoUrl: 'https://example.com',
  },
  {
    title: 'Project Title Two',
    description:
      'Focus on your role: what part did you own? Architecture, pipeline, evaluation? Recruiters skim — lead with the impact.',
    tags: ['Tech A', 'Tech B'],
    repoUrl: `${GITHUB_URL}/repo-name`,
  },
  {
    title: 'Project Title Three',
    description:
      'Side projects count too — a small tool with clean code and a good README beats a big claim with nothing to click.',
    tags: ['Tech A', 'Tech B'],
    repoUrl: `${GITHUB_URL}/repo-name`,
  },
]

const skillGroups: SkillGroup[] = [
  { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'] },
  {
    title: 'GenAI / LLM',
    items: ['RAG pipelines', 'AI agent orchestration', 'MCP servers', 'AWS Bedrock', 'Vector databases', 'LLM evaluation'],
  },
  { title: 'Platform & Delivery', items: ['AWS', 'Docker', 'CI/CD', 'Git', 'REST APIs', 'Agile delivery'] },
]

// TODO: 실제 자격증으로 교체하세요 — url이 있으면 카드가 클릭 가능해집니다.
const certs: Cert[] = [
  { name: 'Certification Name', issuer: 'Issuing Organisation', year: '20XX', url: 'https://example.com/credential' },
  { name: 'Certification Name', issuer: 'Issuing Organisation', year: '20XX' },
]

// TODO: 실제 글로 교체하세요 — LinkedIn 아티클, 블로그, Medium 등 링크.
const articles: Article[] = [
  {
    title: 'Article title goes here',
    summary: 'One-line summary of what the reader will learn — e.g. lessons from building an MCP server in production.',
    date: '2026-01',
    url: 'https://example.com/article',
  },
  {
    title: 'Another article title',
    summary: 'Short technical write-ups are a huge differentiator at graduate level — even two posts are enough.',
    date: '2025-11',
    url: 'https://example.com/article',
  },
]

// 사진 파일을 public/photos/ 폴더에 아래 파일명으로 넣으면 표시됩니다.
// url에 해당 LinkedIn 게시물 주소를 넣으면 카드가 클릭 가능해지고 LinkedIn 아이콘이 표시됩니다.
// 게시물 주소는 LinkedIn에서 게시물 우측 상단 ⋯ 메뉴 → "Copy link to post"로 복사할 수 있어요.
const moments: Moment[] = [
  {
    src: '/photos/bespin.png',
    alt: 'Chanyeong at the Bespin Global office',
    caption: 'First day at Bespin Global',
    sub: 'Seoul · 2025',
  },
  {
    src: '/photos/aws.png',
    alt: 'Chanyeong at the AWS office',
    caption: 'Visiting the AWS office',
    sub: 'Seoul · 2025',
  },
  {
    src: '/photos/vitality-awards.jpeg',
    alt: 'Tech Tribe Awards with the Vitality team',
    caption: 'Tech Tribe Awards with the Vitality team',
    sub: 'UK · 2024',
  },
  {
    src: '/photos/bu-team.jpeg',
    alt: 'Project showcase with the Bournemouth University team',
    caption: 'Project showcase with my BU team',
    sub: 'Bournemouth · 2024',
  },
]

function App() {
  return (
    <>
      <PortfolioPage {...portfolioData} />
      <div className="sections-bg">
        <ExperienceSection items={experience} education={education} />
        <FeaturedProjectsSection projects={featuredProjects} />
        <SkillsSection groups={skillGroups} />
        <CertsSection certs={certs} />
        <WritingSection articles={articles} />
        <MomentsSection moments={moments} />
        <SiteFooter data={{ name: 'Chanyeong Yun', email: EMAIL, linkedin: LINKEDIN_URL, github: GITHUB_URL }} />
      </div>
    </>
  )
}

export default App
