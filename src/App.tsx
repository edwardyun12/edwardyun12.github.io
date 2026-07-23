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
import { Database, Layers, Network, Mic, ScanSearch, Trophy } from 'lucide-react'

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
    titleLine1: 'GenAI Software Engineer,',
    titleLine2Gradient: 'building RAG systems that measure up',
    subtitle:
      'Chanyeong Yun — built RAG and LLM-evaluation pipelines on AWS Bedrock at Bespin Global. Previously a software engineer at Vitality, one of the UK’s largest health & life insurers. Final-year Software Engineering student at Bournemouth University, graduating June 2027 and looking for my next role building AI-powered software.',
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

const experience: ExperienceItem[] = [
  {
    role: 'GenAI Software Engineer',
    org: 'Bespin Global',
    period: '2026.06 — 2026.07',
    logo: '/logos/bespin.webp',
    bullets: [
      'Architected and built a vector-RAG system over enterprise insurance documents on AWS Bedrock, engineering the pipeline so a lightweight open-weight model (Qwen 3.5-35B-A3B) held 94% answer accuracy — within a point of the Sonnet 4.6 baseline, while cutting a daily inference bill of thousands of dollars to a fraction.',
      'Built an LLM-based customer-question classification pipeline (Claude Haiku on Bedrock) across 21 business domains, reaching 93.24% accuracy through evaluation-driven prompt design and a two-stage guideline-generation architecture.',
      'Owned evaluation and cost analysis for GenAI services — golden-set accuracy tracking, RAGAS metrics, and region/latency/cost trade-off decisions for Bedrock deployments.',
    ],
    tags: ['Python', 'RAG', 'LLM Evaluation', 'Prompt Engineering', 'AWS Bedrock', 'Vector Search'],
  },
  {
    role: 'Tactical Systems & Communications Squad Leader, Sergeant',
    org: 'Republic of Korea Army',
    period: '2024.09 — 2026.03',
    logo: '/logos/army.webp',
    bullets: [
      'Mandatory military service — led a squad of 8+ personnel coordinating technical operations to keep tactical systems at high availability.',
      'Managed and optimised tactical network infrastructure, proactively troubleshooting hardware and signal issues to ensure 24/7 connectivity.',
    ],
    tags: ['Leadership', 'Network Operations', 'Mandatory Service'],
  },
  {
    role: 'Associate Software Engineer (Industrial Placement)',
    org: 'Vitality',
    period: '2023.07 — 2024.07',
    logo: '/logos/vitality.webp',
    logoFill: true,
    bullets: [
      'Developed and maintained production backend services in a GraphQL engineering team — GraphQL, NestJS, TypeScript, and Node.js — at one of the UK’s largest health & life insurers.',
      'Built and optimised an internal testing tool with React, JavaScript, and Sitecore, significantly improving development and testing workflows.',
      'Delivered iteratively in a Scaled Agile Framework (SAFe) environment, and proactively moved teams to broaden expertise across engineering stacks.',
    ],
    tags: ['GraphQL', 'NestJS', 'TypeScript', 'Node.js', 'React', 'SAFe'],
  },
]

const education: ExperienceItem[] = [
  {
    role: 'BSc (Hons) Software Engineering',
    org: 'Bournemouth University',
    period: '2021.09 — 2027.06 (expected graduation)',
    bullets: [
      'On track for First Class Honours (GPA 4.5) on a sandwich-degree programme combining academic study with a year in industry.',
      'Elected Student Representative for 100+ Software Engineering peers — coursework spanning systems design, full-stack development, and machine learning.',
    ],
    tags: ['First Class Honours', 'Student Representative', 'Year in Industry'],
  },
]

// 실무 프로젝트는 repoUrl/demoUrl 없이 설명·하이라이트로만 — 버튼은 자동으로 숨겨집니다.
const featuredProjects: FeaturedProject[] = [
  {
    title: 'Insurance Document RAG — 94% accuracy on an SLM',
    navTitle: 'Insurance Document RAG',
    meta: 'Bespin Global · 2026',
    icon: <Database strokeWidth={1.25} />,
    stats: [
      { value: '94%', label: 'Qwen SLM answer accuracy' },
      { value: '−1pt', label: 'vs 95% Sonnet 4.6 baseline' },
      { value: '$1000s/day', label: 'inference cost cut' },
    ],
    description:
      'Insurance domain-specific Q&A RAG system, designed and built end-to-end for a global insurer’s policy documents — a FastAPI backend with a React front end. Started from a 95% accuracy baseline on AWS Bedrock’s Sonnet 4.6, then, to optimise cost, moved to a lightweight SLM (Qwen 3.5-35B-A3B) and pushed answer accuracy back to 94% in three weeks — cutting a daily inference bill of thousands of dollars to a fraction.',
    stages: [
      {
        label: 'Ingest',
        title: 'Source documents',
        desc: 'A global insurer’s policy documents — PDF forms, scanned tables, and flowcharts — ingested as the corpus behind every answer.',
        tags: ['PDF', 'Insurance policies'],
      },
      {
        label: 'Parse',
        title: 'Multi-engine extraction',
        desc: 'Documents parsed primarily with PyMuPDF4LLM, with PaddleOCR for scanned pages and a vision LLM converting tables, images, and flowcharts into clean, LLM-readable text.',
        insight:
          'Built an internal parsing playground to make that call with evidence rather than guesswork — a harness that runs the same policy document through Docling, PyMuPDF, pdfplumber, pypdf, pdfminer.six and Unstructured side by side, diffing extracted text, tables, and latency to see which held up on scanned tables and multi-column layouts. Docling captured layout and tables most accurately, but was too slow across the corpus — roughly 100 policy documents averaging 200+ pages each. Traded some layout fidelity for PyMuPDF4LLM’s speed on the bulk of the corpus, and routed images, flowcharts, and reference diagrams to a vision LLM — initially Claude Sonnet on AWS Bedrock.',
        image: '/projects/parsing-playground.png',
        imageCaption: 'Parser comparison playground I built — same policy PDF run through Docling, PyMuPDF, pdfplumber and others side by side.',
        tags: ['PyMuPDF4LLM', 'Docling', 'Parser Benchmarking', 'PaddleOCR', 'Claude · Bedrock'],
      },
      {
        label: 'Chunk',
        title: 'Hybrid chunking',
        desc: 'Table-aware splitting preserves both token budgets and table structure, paired with LangChain’s recursive splitter for plain prose.',
        tags: ['Table-aware', 'LangChain'],
      },
      {
        label: 'Index',
        title: 'Embed & store',
        desc: 'Titan Embeddings v2 written into Weaviate and ChromaDB, indexed for fast hybrid retrieval.',
        tags: ['Titan v2', 'Weaviate', 'ChromaDB'],
      },
      {
        label: 'Retrieve',
        title: 'Hybrid + rerank',
        desc: 'BM25 — tuned at the tokeniser level (Kagome KR, trigram) for Korean policy terms — fused with vector search, then sharpened by LLM-based reranking.',
        tags: ['BM25', 'Vector', 'LLM rerank'],
      },
      {
        label: 'Generate',
        title: 'SLM answer synthesis',
        desc: 'Qwen 3.5-35B-A3B answers at 94% — within a point of the Sonnet 4.6 baseline, at a fraction of the cost. A strict JSON schema and citation grounding force every answer to cite its source chunk.',
        tags: ['Qwen 3.5-35B-A3B', 'JSON schema', 'Citations'],
      },
    ],
    tags: ['Python', 'FastAPI', 'React', 'AWS Bedrock', 'LangChain', 'Weaviate', 'ChromaDB', 'Prompt Engineering', 'RAGAS'],
  },
  {
    title: 'Customer Query Classification — 93.24% across 21 domains',
    navTitle: 'Customer Query Classification',
    meta: 'Bespin Global · 2026',
    icon: <Layers strokeWidth={1.25} />,
    stats: [
      { value: '93.24%', label: 'accuracy' },
      { value: '0.94', label: 'Macro F1' },
      { value: '21', label: 'business domains' },
    ],
    description:
      'LLM-based pipeline that automatically routes call-centre customer questions to the correct business domain for a large insurance provider. Built with Claude Haiku on AWS Bedrock, reaching 93.24% accuracy (Macro F1 0.9432) on a 695-question evaluation set — 14 of 21 domains hit 100%.',
    highlights: [
      'Two-stage architecture: an LLM first mines labelled examples to auto-generate per-domain classification guidelines (an "ontologist" persona prompt), then a second pass classifies new questions in parallel batches against those guidelines.',
      'A hard-boundary rule matrix injected ahead of the model’s own judgement to eliminate recurring confusions between frequently-mixed domains.',
      'Evaluation-driven iteration: per-class precision/recall (not just headline accuracy) pinpointed exactly which domains needed sharper rules, with an auto-generated error notebook driving each round of prompt fixes.',
    ],
    tags: ['Python', 'AWS Bedrock', 'Claude Haiku', 'Prompt Engineering', 'Evaluation'],
  },
  {
    title: 'GraphRAG for Insurance — a knowledge-graph prototype',
    navTitle: 'GraphRAG for Insurance',
    meta: 'Bespin Global · 2026 (R&D spike)',
    icon: <Network strokeWidth={1.25} />,
    description:
      'A proof-of-concept exploring where knowledge graphs outperform vector search on domain documents. Built a Neo4j sandbox modelling how the pipeline’s hardest cases for VectorRAG — complex compound medical terms that embeddings struggle to disambiguate — could instead be captured as explicit graph relationships, testing where a GraphRAG approach earns its added complexity over plain vector retrieval.',
    tags: ['Neo4j', 'GraphRAG', 'Knowledge Graph', 'Ontology', 'Cypher'],
  },
  {
    title: 'Nexus — a voice-first AI agent that runs my job hunt',
    navTitle: 'Nexus — voice AI agent',
    meta: 'Personal project · 2026',
    icon: <Mic strokeWidth={1.25} />,
    image: '/projects/nexus.png',
    stats: [
      { value: '3', label: 'LLM-callable tools' },
      { value: '1', label: 'MCP server, from scratch' },
      { value: 'Live', label: 'public demo, no sign-up' },
    ],
    description:
      'Not a wrapper around an LLM API — Nexus runs a full tool-calling loop against job-tracker-mcp, a Model Context Protocol server I built from scratch, so the model decides when to call add_application / list_applications / update_status and how to fill the arguments from a spoken sentence, then reads the result back to you. Deployed live with a self-cleaning public demo — no sign-up, no setup, break it freely.',
    highlights: [
      'Built the MCP tool layer myself rather than proxying Notion’s own API — designing the actual typed interface an LLM reasons over, not just relaying a REST call.',
      'One codebase, two runtimes: Vite dev middleware locally, a thin Express server in production, sharing the same auth and request-handling logic so the two paths can’t drift.',
      'A self-cleaning public demo — the live instance points at a sandbox Notion workspace that’s wiped and re-seeded every 30 minutes, so visitors get a real writable environment with nothing at risk.',
      'Security sized to the threat model: per-IP and global-daily rate limits, capped request bodies, upstream errors never relayed verbatim, timing-safe access-key comparison.',
      'Voice as a first-class input — wake-word listening, speech recognition, and text-to-speech via the Web Speech API, with the mic cut the instant Nexus starts speaking.',
    ],
    tags: ['React', 'TypeScript', 'MCP', 'Node.js', 'Express', 'Notion API', 'Web Speech API'],
    repoUrl: 'https://github.com/edwardyun12/nexus-ai',
    demoUrl: 'https://nexus-ai-zkmf.onrender.com',
  },
  {
    title: 'HireReady AI — LLM-powered CV analysis',
    navTitle: 'HireReady AI',
    meta: 'Personal project · 2025 — Present',
    icon: <ScanSearch strokeWidth={1.25} />,
    description:
      'Full-stack platform that analyses CVs in real time and recommends skill optimisations to improve job-application success. React front end over an asynchronous FastAPI backend, with LLMs performing deep semantic analysis to surface critical skill gaps and data-driven recommendations.',
    tags: ['React', 'FastAPI', 'Python', 'LLM'],
    repoUrl: 'https://github.com/edwardyun12/cv-job-matcher',
  },
  {
    title: '1st Place — JPMorgan Computing in Business Week',
    navTitle: '1st Place — JPMorgan',
    meta: 'Bournemouth University · 2022',
    icon: <Trophy strokeWidth={1.25} />,
    stats: [{ value: '1st', label: 'of all competing teams' }],
    description:
      'Won first place in JPMorgan Chase’s Computing in Business Week competition. Translated stakeholder requirements into technical specifications and shipped a full-stack solution — Python/Flask backend with a responsive front end — earning an invitation to a two-day workshop at JPMorgan’s Bournemouth office.',
    tags: ['Python', 'Flask', 'Full-stack', 'Requirements Analysis'],
  },
]

const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Frameworks',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'Kotlin', 'SQL', 'React', 'FastAPI', 'NestJS', 'GraphQL'],
  },
  {
    title: 'GenAI / LLM',
    items: [
      'RAG pipelines',
      'Prompt engineering',
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
    caption: 'Winning 1st place at JPMorgan’s Computing in Business Week',
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
