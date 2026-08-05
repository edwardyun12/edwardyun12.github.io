import type { SkillGroup } from '@/types/portfolio'

export const skillGroups: SkillGroup[] = [
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
