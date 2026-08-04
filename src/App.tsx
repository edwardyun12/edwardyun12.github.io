import { PortfolioPage, type PortfolioPageProps } from '@/components/ui/starfall-portfolio-landing'
import {
  SummarySection,
  ExperienceSection,
  FeaturedProjectsSection,
  SkillsSection,
  CertsSection,
  WritingSection,
  MomentsSection,
  SiteFooter,
  AwsIcon,
  type ExperienceItem,
  type FeaturedProject,
  type SkillGroup,
  type Cert,
  type Article,
  type Moment,
} from '@/components/sections'
import { Database, Layers, Mic, Trophy } from 'lucide-react'

const GITHUB_URL = 'https://github.com/edwardyun12'
const LINKEDIN_URL = 'https://uk.linkedin.com/in/chanyeongyun'
const EMAIL = 'edward767976@gmail.com'

const portfolioData: PortfolioPageProps = {
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

const summary: string[] = [
  'At Bespin Global, a leading cloud and AI consultancy and AWS Premier Tier Services Partner in South Korea, I developed enterprise-grade RAG systems on AWS Bedrock, designed ontology-driven retrieval architectures for insurance knowledge modeled on Palantir’s Ontology framework, and built evaluation pipelines to improve the accuracy and reliability of AI applications.',
  'Previously, I worked as a Software Engineer at Vitality, one of the UK’s leading health and life insurers, where I gained experience building scalable software solutions in a regulated industry.',
  'I’m currently completing my BSc in Software Engineering at Bournemouth University (graduating June 2027) and am seeking Software Engineer or AI Engineer opportunities to build impactful software — AI-powered and otherwise — that bridges cutting-edge research with practical business applications.',
]

const summaryHighlights = ['Bespin Global', 'AWS Bedrock', 'Palantir’s Ontology framework', 'Vitality', 'Bournemouth University']

const summaryFacts = [
  { title: 'Based in', value: 'Bournemouth, UK' },
  { title: 'Education', value: 'BSc Software Engineering, expected June 2027' },
  { title: 'Status', value: 'Open to AI & Software Engineer roles' },
]

const experience: ExperienceItem[] = [
  {
    role: 'AI Software Engineer (Intern)',
    org: 'Bespin Global',
    period: '2026.06 — 2026.07',
    logo: '/logos/bespin.webp',
    bullets: [
      'Architected and built a vector-RAG system over enterprise insurance documents on AWS Bedrock, engineering the pipeline so a lightweight open-weight model (Qwen3.5-35B-A3B) held 94% answer accuracy — within a point of the Sonnet 4.6 baseline, while replacing a $250/day pay-per-call API bill with self-hosted, fixed-cost GPU inference.',
      'Diagnosed where pure vector similarity fell short — multi-hop, relationship-dependent questions the VectorDB kept missing — and proposed an ontology-based knowledge layer, modeled on Palantir’s Ontology framework, to encode insurance domain objects and their schema-defined relationships explicitly, aiming to let retrieval traverse defined links rather than rely on embedding distance alone.',
      'Built an LLM-based customer-question classification pipeline (Claude Haiku on Bedrock) across 21 business domains, reaching 93.24% accuracy through evaluation-driven prompt design and a two-stage guideline-generation architecture.',
      'Owned evaluation and cost analysis for GenAI services — golden-set accuracy tracking, RAGAS metrics, and region/latency/cost trade-off decisions for Bedrock deployments.',
    ],
    tags: ['Python', 'RAG', 'LLM Evaluation', 'Prompt Engineering', 'AWS Bedrock', 'Vector Search', 'Ontology Modeling'],
  },
  {
    role: 'Tactical Systems & Communications Squad Leader, Sergeant',
    org: 'Republic of Korea Army',
    period: '2024.09 — 2026.03',
    logo: '/logos/army.webp',
    bullets: [
      'Mandatory military service — led a squad of 8+ personnel managing tactical communication infrastructure and resolving hardware and signal issues.',
      'Earned a Company Commander’s Commendation for excellence in communications and leadership during a large-scale field exercise at the Korea Combat Training Center (KCTC).',
    ],
    tags: ['Leadership', 'Tactical Communications', 'Mandatory Service'],
  },
  {
    role: 'Associate Software Engineer (Industrial Placement)',
    org: 'Vitality',
    period: '2023.07 — 2024.07',
    logo: '/logos/vitality.webp',
    logoFill: true,
    bullets: [
      'Contributed to a proof-of-concept migrating REST APIs to GraphQL, then delivered and maintained the resulting production backend services (NestJS, TypeScript, Node.js) at one of the UK’s largest health & life insurers, within a Scaled Agile Framework (SAFe) team.',
      'Built and optimised an internal React-based API testing tool that automated endpoint extraction from OpenAPI specifications, adopted by multiple engineering teams beyond the original team.',
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
      'Elected Student Representative for 100+ Software Engineering peers — coursework spanning systems design, full-stack development, application programming, and machine learning.',
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
      { value: '95%→94%', label: 'Sonnet 4.6 → Qwen SLM accuracy' },
      { value: '$250/day→$0', label: 'Sonnet API cost avoided' },
    ],
    description:
      'Insurance domain-specific Q&A RAG system, designed and built end-to-end for a global insurer’s policy documents — a FastAPI backend with a React front end. Accuracy measured against a golden set built by insurance domain experts. Started from a 95% accuracy baseline on AWS Bedrock’s Sonnet 4.6, then, to optimise cost, moved to a lightweight SLM (Qwen3.5-35B-A3B) and pushed answer accuracy back to 94% in three weeks — replacing a $250/day pay-per-call API bill with self-hosted, fixed-cost GPU inference.',
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
        insightSteps: [
          {
            label: 'The harness',
            text: 'Built an internal parsing playground that runs the same policy document through Docling, PyMuPDF, pdfplumber, pypdf, pdfminer.six and Unstructured side by side, diffing extracted text, tables, and latency.',
          },
          {
            label: 'What it showed',
            text: 'Docling captured layout and tables most accurately, but was too slow across the corpus — the average policy document ran 200+ pages.',
          },
          {
            label: 'The trade-off',
            text: 'Traded some layout fidelity for PyMuPDF4LLM’s speed on the bulk of the corpus, and routed images, flowcharts, and reference diagrams to a vision LLM — initially Claude Sonnet on AWS Bedrock.',
          },
        ],
        image: '/projects/parsing-playground.png',
        imageCaption: 'Parser comparison playground I built — same policy PDF run through Docling, PyMuPDF, pdfplumber and others side by side.',
        tags: ['PyMuPDF4LLM', 'Docling', 'Parser Benchmarking', 'PaddleOCR', 'Claude · Bedrock'],
      },
      {
        label: 'Chunk',
        title: 'Hybrid chunking',
        desc: 'A custom hybrid chunker splits each parsed page along its document structure — sections, procedures, and whole/block/row-level tables — so table integrity and heading hierarchy survive the split. For plain prose, it borrows the idea behind recursive character splitting — cutting along token boundaries while preserving the hierarchical structure — all under a hard token ceiling.',
        insightSteps: [
          {
            label: 'The simulator',
            text: 'Pick a parsed Markdown document and watch the chunker build chunks live — source on the left, chunked output on the right, each chunk’s type and boundaries inspectable.',
          },
          {
            label: 'What it caught',
            text: 'Cases where a naive fixed-size split would have separated a table from its heading, or cut a procedure mid-step.',
          },
          {
            label: 'The result',
            text: 'Structure-aware splitting kept sections, procedures, and tables intact, while the token-based half of the hybrid — built on the recursive-splitting idea — handled prose, all under a fixed token budget.',
          },
        ],
        image: '/projects/chunking-stage.png',
        imageLabel: 'chunking · simulator',
        imageCaption: 'Same parsed document, structure-aware chunks on the right — each chunk’s type and boundaries inspectable.',
        tags: ['Table-aware', 'Hybrid Chunking', 'Token budgeting', 'Pipeline Simulator'],
      },
      {
        label: 'Index',
        title: 'Embed & store',
        desc: 'AWS Bedrock’s Titan Embeddings v2 embeds each parsed chunk, written into both Weaviate and ChromaDB — Weaviate chosen for its built-in BM25 + dense vector hybrid search, giving keyword and semantic retrieval out of the box. Chunks indexed across procedures, sections, and table-level splits.',
        insightSteps: [
          {
            label: 'The visualiser',
            text: 'Built a live semantic search over the Weaviate collection — a query box that hits the real VectorDB with pure similarity search (no reranking, no multi-hop), returns the top-5 nearest chunks, and plots every stored vector on a PCA-projected 2D scatter, colour-coded by chunk type.',
          },
          {
            label: 'What it showed',
            text: 'Confirmed the previous stage’s chunks were actually landing correctly in the VectorDB — table_row chunks, the clear majority of the corpus, formed their own tight cluster, separate from procedure, section, and table_block chunks, instead of one blurred mass.',
          },
          {
            label: 'Why it mattered',
            text: 'That gave a clean baseline: if pure similarity search here doesn’t surface the right chunk, the problem is upstream in chunking or embedding; if it does surface correctly here but the chatbot still gets it wrong, the problem is downstream in retrieval.',
          },
        ],
        image: '/projects/embedding-stage.png',
        imageLabel: 'embedding explorer · live Weaviate',
        imageCaption: 'Vectors from the live Weaviate collection, projected to 2D with PCA — searchable in real time against the actual VectorDB.',
        tags: ['Titan v2', 'Weaviate', 'ChromaDB', 'PCA Projection'],
      },
      {
        label: 'Retrieve',
        title: 'Hybrid + rerank',
        desc: 'BM25 — tuned at the tokeniser level (Kagome KR, trigram) for Korean policy terms — fused with vector search, then sharpened by LLM-based reranking.',
        insightSteps: [
          {
            label: 'The tuning console',
            text: 'Built a UI to re-run hybrid search on a live query with the alpha (keyword-vs-vector) balance and per-field BM25 weights — content, search_text, title, document_name — all exposed as sliders, re-searching against the real Weaviate collection on every change.',
          },
          {
            label: 'What it caught',
            text: 'Instead of guessing that a higher BM25 weight would just mean more keyword matching, I moved each weight against real queries and watched the results actually change — that’s how I caught document_name or title overpowering content.',
          },
          {
            label: 'The result',
            text: 'Manually walking the weight space against real queries — instead of guessing at defaults — settled on field weights and an alpha that measurably improved which chunks got retrieved, feeding directly into the accuracy gain downstream.',
          },
        ],
        image: '/projects/retrieval-stage.png',
        imageLabel: 'hybrid search tuner · live Weaviate',
        imageCaption: 'Alpha and per-field BM25 weights tuned live against the real collection — re-search on every change to inspect which chunks come back.',
        tags: ['BM25', 'Vector', 'LLM rerank', 'Weight Tuning'],
      },
      {
        label: 'Generate',
        title: 'SLM answer synthesis',
        desc: 'Qwen3.5-35B-A3B answers at 94% — within a point of the Sonnet 4.6 baseline, at a fraction of the cost. A strict JSON schema and citation grounding force every answer to cite its source chunk.',
        insightSteps: [
          {
            label: 'The chatbot',
            text: 'Built a native chat interface right into the pipeline visualiser — ask a question, watch the retriever pull chunks from the VectorDB, then the LLM answers with citations. Top K, conversation memory, and multi-hop reasoning are all exposed and adjustable per query.',
          },
          {
            label: 'What it enabled',
            text: 'Expanding an answer’s cited sources shows the exact chunks it was grounded in, end to end — turning every failed or shaky answer into a debuggable trace back through retrieval and chunking instead of a black box.',
          },
          {
            label: 'The result',
            text: 'Running real policy questions through the full pipeline this way — not just isolated eval scores — surfaced synthesis-level issues (hallucinated citations, multi-hop questions needing more than Top K=5) that were fixed before they showed up in the accuracy numbers.',
          },
        ],
        image: '/projects/chatbot-stage.png',
        imageLabel: 'RAG chatbot · live pipeline',
        imageCaption: 'End-to-end chat over the indexed insurance documents — Top K, memory, and multi-hop all adjustable, every answer citation-grounded.',
        tags: ['Qwen3.5-35B-A3B', 'JSON schema', 'Citations', 'Multi-hop'],
      },
    ],
    tags: ['Python', 'FastAPI', 'React', 'AWS Bedrock', 'LangChain', 'Weaviate', 'ChromaDB', 'Prompt Engineering', 'RAGAS'],
  },
  {
    title: 'Customer Query Classification System — 93.24% across 21 domains',
    navTitle: 'Customer Query Classification System',
    meta: 'Bespin Global · 2026',
    icon: <Layers strokeWidth={1.25} />,
    image: '/projects/classification-pipeline.png',
    stats: [
      { value: '93.24%', label: 'accuracy' },
      { value: '0.94', label: 'Macro F1' },
      { value: '21', label: 'business domains' },
    ],
    description:
      'LLM-based classification system for a large insurance provider’s customer questions. Prompts run against Claude Haiku on AWS Bedrock were tested and iterated against a golden set of verified domain answers until predictions matched 93.24% of the time (Macro F1 0.9432) — the resulting pipeline is what classifies incoming customer questions going forward, with 14 of 21 domains hitting 100%.',
    highlights: [
      'Two-stage architecture: an LLM first mines labelled examples to auto-generate per-domain classification guidelines (an "ontologist" persona prompt), then a second pass classifies new questions in parallel batches against those guidelines.',
      'A hard-boundary rule matrix injected ahead of the model’s own judgement to eliminate recurring confusions between frequently-mixed domains.',
      'Evaluation-driven iteration: per-class precision/recall (not just headline accuracy) pinpointed exactly which domains needed sharper rules, with an auto-generated error notebook driving each round of prompt fixes.',
    ],
    tags: ['Python', 'AWS Bedrock', 'Claude Haiku', 'Prompt Engineering', 'Evaluation'],
  },
  {
    title: 'Nexus — a voice-first AI agent that runs my job hunt',
    navTitle: 'Nexus — voice AI agent',
    meta: 'Personal project · Jul 2026',
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
    tags: ['React', 'TypeScript', 'MCP', 'Groq', 'Llama 3.3 70B', 'Node.js', 'Express', 'Notion API', 'Web Speech API'],
    repoUrl: 'https://github.com/edwardyun12/nexus-ai',
    demoUrl: 'https://nexus-ai-zkmf.onrender.com',
  },
  {
    title: 'JPMorgan Chase’s Computing in Business Week',
    navTitle: '1st Place — JPMorgan',
    badge: '1st Place',
    titleAccent: 'JPMorgan Chase',
    meta: 'Bournemouth University · 2022',
    icon: <Trophy strokeWidth={1.25} />,
    image: '/photos/bu-team.webp',
    imagePosition: 'center 75%',
    description:
      'Won first place in JPMorgan Chase’s Computing in Business Week competition. Translated JPMorgan’s stakeholder requirements into technical specifications and shipped a full-stack solution — Python/Flask backend with a responsive front end — earning an invitation to a two-day workshop at JPMorgan’s Bournemouth office.',
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

// TODO: writing-drafts/ 아래 글을 Medium/dev.to 등에 게시한 뒤, 아래 url을 실제 게시 링크로 교체하세요.
// 분류 파이프라인 글(writing-drafts/llm-classification-93-percent.md)은 회사 확인 전까지 보류 — 승인 후 여기에 다시 추가.
const articles: Article[] = [
  {
    title: 'PDF Parsing Is the Hidden Bottleneck in Your RAG Pipeline',
    summary:
      'A hands-on benchmark of PDF parsing libraries for RAG over table-heavy Korean documents — and why parsing, not the LLM, is responsible for most wrong answers.',
    date: '2026-07',
    url: 'https://dev.to/edwardyun/pdf-parsing-is-the-hidden-bottleneck-in-your-rag-pipeline-37gn',
  },
  {
    title: '31.8x Speedup by Changing One File: Async Embedding Calls on AWS Bedrock',
    summary:
      'The embedding stage of a RAG ingestion pipeline took 50 seconds per document. One file changed, no infrastructure touched — 1.56 seconds.',
    date: '2026-07',
    url: 'https://dev.to/edwardyun/318x-speedup-by-changing-one-file-async-embedding-calls-on-aws-bedrock-4l61',
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
    caption: 'First day at Bespin Global as an AI Software Engineer',
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
        <SummarySection
          paragraphs={summary}
          highlights={summaryHighlights}
          name="Chanyeong (Edward) Yun"
          role="Software Engineer"
          photo={{ src: '/photos/bespin-summary.webp', alt: 'Chanyeong (Edward) Yun at Bespin Global' }}
          facts={summaryFacts}
        />
        <FeaturedProjectsSection projects={featuredProjects} />
        <ExperienceSection items={experience} education={education} />
        <SkillsSection groups={skillGroups} />
        <CertsSection certs={certs} />
        <WritingSection articles={articles} />
        <MomentsSection moments={moments} />
        <SiteFooter data={{ name: 'Chanyeong (Edward) Yun', email: EMAIL, linkedin: LINKEDIN_URL, github: GITHUB_URL }} />
      </div>
    </>
  )
}

export default App
