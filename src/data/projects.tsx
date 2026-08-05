import { Database, Layers, Mic, Trophy } from 'lucide-react'
import type { FeaturedProject } from '@/types/portfolio'

// 실무 프로젝트는 repoUrl/demoUrl 없이 설명·하이라이트로만 — 버튼은 자동으로 숨겨집니다.
export const featuredProjects: FeaturedProject[] = [
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
