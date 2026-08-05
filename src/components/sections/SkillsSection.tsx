import type React from 'react'
import type { SkillGroup } from '@/types/portfolio'
import { Section } from './Section'

export const SkillsSection: React.FC<{ groups: SkillGroup[] }> = ({ groups }) => (
  <Section
    id="stack"
    eyebrow="Skills"
    title={<>Tools I <span className="gradient-text">reach for</span></>}
    subtitle="The languages, frameworks, and GenAI tooling I use to take ideas from prototype to shipped."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {groups.map((g) => (
        <div key={g.title} className="glass-card rounded-2xl p-6 text-left">
          <h3 className="inter-font text-xs font-semibold tracking-[0.2em] uppercase gradient-text mb-4">{g.title}</h3>
          <div className="flex flex-wrap gap-2">
            {g.items.map((item) => (
              <span key={item} className="skill-badge px-3 py-1.5 rounded-lg text-sm text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
)
