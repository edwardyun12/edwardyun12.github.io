import type React from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { Article } from '@/types/portfolio'
import { Section } from './Section'

export const WritingSection: React.FC<{ articles: Article[] }> = ({ articles }) => (
  <Section id="writing" eyebrow="Writing" title={<>Notes from the <span className="gradient-text">agentic layer</span></>}>
    <div className="flex flex-col gap-4">
      {articles.map((a) => (
        <a
          key={a.title}
          href={a.url}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card rounded-2xl p-6 flex items-start justify-between gap-6 group"
        >
          <div className="text-left">
            <div className="inter-font text-xs text-muted-foreground mb-1 tabular-nums">{a.date}</div>
            <h3 className="geist-font text-lg font-medium text-card-foreground mb-1">{a.title}</h3>
            <p className="inter-font text-sm text-muted-foreground leading-relaxed">{a.summary}</p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ))}
    </div>
  </Section>
)
