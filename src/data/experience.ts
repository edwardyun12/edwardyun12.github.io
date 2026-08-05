import type { ExperienceItem } from '@/types/portfolio'

export const experience: ExperienceItem[] = [
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

export const education: ExperienceItem[] = [
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
