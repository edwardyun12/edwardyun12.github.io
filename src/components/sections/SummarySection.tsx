import React from 'react'
import type { SummaryFact } from '@/types/portfolio'
import { Section } from './Section'

function highlightTerms(text: string, terms: string[]): React.ReactNode {
  if (terms.length === 0) return text
  const pattern = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  return text.split(pattern).map((part, i) =>
    terms.includes(part) ? (
      <span key={i} className="text-card-foreground font-semibold">
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  )
}

export const SummarySection: React.FC<{
  paragraphs: string[]
  /** 문단 안에서 굵게 강조할 회사명·기술명 등 (예: ['Bespin Global', 'AWS Bedrock']) */
  highlights?: string[]
  name?: string
  role?: string
  photo?: { src: string; alt: string; position?: string }
  /** 좌측 프로필 컬럼에 표시할 짧은 사실 목록 (위치, 학력, 상태 등) */
  facts?: SummaryFact[]
}> = ({ paragraphs, highlights = [], name, role, photo, facts }) => {
  const [lead, ...rest] = paragraphs
  return (
    <Section id="summary" eyebrow="Summary" title={<>Professional <span className="gradient-text">summary</span></>}>
      <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-8 lg:gap-16 max-w-4xl mx-auto items-start text-left">
        {(name || photo || (facts && facts.length > 0)) && (
          <div className="flex flex-col gap-5 lg:sticky lg:top-28">
            {photo && (
              <div className="w-full max-w-[220px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  style={photo.position ? { objectPosition: photo.position } : undefined}
                />
              </div>
            )}
            {(name || role) && (
              <div>
                {name && <div className="geist-font text-lg font-semibold text-card-foreground">{name}</div>}
                {role && <div className="inter-font text-sm text-muted-foreground mt-0.5">{role}</div>}
              </div>
            )}
            {facts && facts.length > 0 && (
              <>
                <div className="divider" />
                <div className="flex flex-col gap-4">
                  {facts.map((f) => (
                    <div key={f.title}>
                      <div className="inter-font text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-1">
                        {f.title}
                      </div>
                      <div className="inter-font text-sm text-card-foreground">{f.value}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="flex flex-col gap-5">
          {lead && (
            <p className="inter-font text-base md:text-lg text-card-foreground leading-relaxed">
              {highlightTerms(lead, highlights)}
            </p>
          )}
          {rest.length > 0 && (
            <div className="border-l-2 border-[#7d8cfa]/35 pl-5 flex flex-col gap-4">
              {rest.map((p) => (
                <p key={p} className="inter-font text-sm md:text-base text-muted-foreground leading-relaxed">
                  {highlightTerms(p, highlights)}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
