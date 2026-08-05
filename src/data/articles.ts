import type { Article } from '@/types/portfolio'

// TODO: writing-drafts/ 아래 글을 Medium/dev.to 등에 게시한 뒤, 아래 url을 실제 게시 링크로 교체하세요.
// 분류 파이프라인 글(writing-drafts/llm-classification-93-percent.md)은 회사 확인 전까지 보류 — 승인 후 여기에 다시 추가.
export const articles: Article[] = [
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
