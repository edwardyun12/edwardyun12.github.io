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

const GITHUB_URL = 'https://github.com/edwardyun12'
const LINKEDIN_URL = 'https://uk.linkedin.com/in/chanyeongyun'
const EMAIL = 'edward767976@gmail.com'

const portfolioData: PortfolioPageProps = {
  logo: {
    initials: 'CY',
    name: 'Chanyeong Yun',
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
    alt: 'Chanyeong Yun',
  },
  hero: {
    titleLine1: 'Building the agentic layer:',
    titleLine2Gradient: 'AI agents · MCP · RAG',
    subtitle:
      'Chanyeong Yun — GenAI Software Engineer at Bespin Global and final-year Software Engineering student at Bournemouth University (graduating June 2027), shipping production GenAI systems on AWS Bedrock. Previously at Vitality.',
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
  projects: [],
  stats: [],
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
    period: '2021.09 — 2027.06 (expected graduation)',
    bullets: [
      'Sandwich-degree programme combining academic study with a year in industry.',
      'Coursework spanning software design, distributed systems, databases, and applied machine learning.',
    ],
    tags: ['Final Year', 'Year in Industry'],
  },
]

// 실무 프로젝트는 repoUrl/demoUrl 없이 설명·하이라이트로만 — 버튼은 자동으로 숨겨집니다.
const featuredProjects: FeaturedProject[] = [
  {
    title: 'Insurance Document RAG — 96% accuracy on an SLM',
    meta: 'Bespin Global · 2026',
    description:
      'Production vector-RAG system over a global insurance provider’s policy documents, shipped end-to-end as a FastAPI service with a React front end. Engineered the pipeline so an SLM (Qwen) holds 96% answer accuracy on the golden test set — within 2 points of the 98% Claude Sonnet baseline, while cutting a four-figure daily inference bill to a fraction.',
    highlights: [
      'Multi-engine document parsing (PyMuPDF4LLM, Docling, PaddleOCR), with Claude on AWS Bedrock converting tables, images, and flowcharts into LLM-readable text.',
      'Hybrid chunking that preserves both token budgets and table structure, combined with LangChain’s RecursiveCharacterTextSplitter for plain prose.',
      'Titan Embeddings v2 into Weaviate and ChromaDB with hybrid retrieval (BM25 + vector) — BM25 tuned at the tokeniser level (Kagome KR, trigram) for Korean policy terms, then sharpened with LLM-based reranking.',
      'Prompt-engineered generation that grounds Qwen’s answers in retrieved chunks, evaluated continuously with golden-set accuracy and RAGAS metrics.',
    ],
    tags: ['Python', 'FastAPI', 'React', 'AWS Bedrock', 'LangChain', 'Weaviate', 'ChromaDB', 'RAGAS'],
    featured: true,
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
  {
    title: 'Languages & Frameworks',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'FastAPI', 'React'],
  },
  {
    title: 'GenAI / LLM',
    items: [
      'RAG pipelines',
      'LangChain',
      'AWS Bedrock',
      'Vector DBs — Weaviate · ChromaDB',
      'Hybrid retrieval & reranking',
      'Document parsing & OCR',
      'LLM evaluation — RAGAS · golden sets',
      'AI agent orchestration',
      'MCP servers',
    ],
  },
  { title: 'Platform & Delivery', items: ['AWS', 'Docker', 'CI/CD', 'Git', 'REST APIs', 'Agile delivery'] },
]

const certs: Cert[] = [
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026',
    url: 'https://www.credly.com/badges/153342e4-1f15-4317-adcc-77a7b7e2af8e',
    image: '/badges/aws-ai-practitioner.webp',
  },
  {
    name: 'Graph Developer - Professional',
    issuer: 'Apollo GraphQL',
    year: '2023',
    url: 'https://www.apollographql.com/tutorials/certifications/bd2b323e-9491-4386-a5fe-be7c38b345b3',
    image: '/badges/apollo-professional.svg',
  },
  {
    name: 'Graph Developer - Associate',
    issuer: 'Apollo GraphQL',
    year: '2023',
    url: 'https://www.apollographql.com/tutorials/certifications/ec6acb84-89e1-4b0f-98e6-5105a0ed4b5d',
    image: '/badges/apollo-associate.svg',
  },
  {
    name: 'IBM MQ Developer Essentials',
    issuer: 'IBM',
    year: '2022',
    url: 'https://www.credly.com/badges/34675a7d-17a1-4473-9469-162a5b38c3a7',
    image: '/badges/ibm-mq.webp',
  },
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
    src: '/photos/aws.webp',
    alt: 'Chanyeong at the AWS office',
    caption: 'Invited to AWS Student Community Day 2026 in Seoul',
    sub: 'Seoul, South Korea · 2026',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7479152619706544129/',
  },
  {
    src: '/photos/bespin.webp',
    alt: 'Chanyeong at the Bespin Global office',
    caption: 'First day at Bespin Global as a GenAI Software Engineer',
    sub: 'Seoul, South Korea · 2026',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7467213468073463808/',
  },
  {
    src: '/photos/vitality-awards.webp',
    alt: 'Tech Tribe Awards with the Vitality team',
    caption: 'Tech Tribe Awards with the Vitality team',
    sub: 'UK · 2024',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7219637696611106816/',
  },
  {
    src: '/photos/bu-team.webp',
    alt: 'Chanyeong and his Bournemouth University team presenting their project to J.P. Morgan',
    caption: 'Presenting our team project to J.P. Morgan',
    sub: 'Bournemouth · 2022',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:6935899938622988288/',
  },
  {
    src: '/photos/nepal.webp',
    alt: 'Chanyeong with students and volunteers at a school in Kathmandu',
    caption: 'Teaching English at a school in Kathmandu',
    sub: 'Nepal · 2019',
    url: 'https://ty2019superadventure2kathmandu.home.blog/',
    urlIcon: 'link',
  },
]

function App() {
  return (
    <>
      <PortfolioPage {...portfolioData} />
      <div className="sections-bg">
        <FeaturedProjectsSection projects={featuredProjects} />
        <ExperienceSection items={experience} education={education} />
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
