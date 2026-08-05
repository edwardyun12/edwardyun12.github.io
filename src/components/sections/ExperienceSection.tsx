import type React from 'react'
import type { ExperienceItem } from '@/types/portfolio'
import { Section } from './Section'

export const ExperienceSection: React.FC<{ items: ExperienceItem[]; education?: ExperienceItem[] }> = ({
  items,
  education,
}) => (
  <Section
    id="experience"
    eyebrow="Experience"
    title={<>Where I&apos;ve <span className="gradient-text">shipped</span></>}
    subtitle="From full-stack engineering at a UK insurer to shipping GenAI systems on AWS Bedrock."
  >
    {/* timeline: a vertical rail with a logo chip (or dot) per role */}
    <div className="relative flex flex-col gap-6 before:absolute before:left-[27px] before:top-4 before:bottom-4 before:w-px before:bg-white/10 md:before:left-[31px]">
      {items.map((item, i) => (
        <div key={item.role + item.org} className="relative pl-20 md:pl-24">
          {item.logo ? (
            <span
              className={`absolute left-0 top-5 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.4)] ring-1 ring-white/10 overflow-hidden ${
                item.logoFill ? 'p-0' : 'p-1.5'
              }`}
            >
              <img
                src={item.logo}
                alt={`${item.org} logo`}
                className={`w-full h-full ${item.logoFill ? 'object-cover' : 'object-contain'}`}
              />
            </span>
          ) : (
            <span
              className={`absolute left-[20px] top-6 w-[15px] h-[15px] rounded-full border-2 md:left-[22px] md:w-[19px] md:h-[19px] ${
                i === 0 ? 'border-[#7d8cfa] bg-[#7d8cfa]/30' : 'border-white/25 bg-background'
              }`}
            />
          )}
          <div className="glass-card rounded-2xl p-6 md:p-8 text-left">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
              <h3 className="geist-font text-lg md:text-xl font-medium text-card-foreground">
                {item.role} · <span className="gradient-text">{item.org}</span>
              </h3>
              <span className="inter-font text-sm text-muted-foreground tabular-nums shrink-0">{item.period}</span>
            </div>
            <ul className="inter-font text-sm text-muted-foreground leading-relaxed space-y-2 mb-5">
              {item.bullets.map((b) => (
                <li key={b} className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#7d8cfa]/60">
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="skill-badge px-2 py-1 rounded text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    {education && education.length > 0 && (
      <div className="mt-14">
        <p className="inter-font text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-5">
          <span className="text-[#7d8cfa]">{'// '}</span>
          Education
        </p>
        <div className="flex flex-col gap-4">
          {education.map((item) => (
            <div
              key={item.role + item.org}
              className="glass-card rounded-2xl p-5 md:p-6 text-left flex flex-col md:flex-row md:items-center gap-3 md:gap-6"
            >
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1.5">
                  <h3 className="geist-font text-base md:text-lg font-medium text-card-foreground">
                    {item.role} · <span className="gradient-text">{item.org}</span>
                  </h3>
                  <span className="inter-font text-sm text-muted-foreground tabular-nums">{item.period}</span>
                </div>
                <p className="inter-font text-sm text-muted-foreground leading-relaxed mb-3">
                  {item.bullets.join(' ')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="skill-badge px-2 py-1 rounded text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </Section>
)
