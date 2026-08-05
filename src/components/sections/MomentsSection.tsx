import React from 'react'
import { Link2 } from 'lucide-react'
import type { Moment } from '@/types/portfolio'
import { Section } from './Section'
import { Linkedin } from './icons'

const tilts = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']

export const MomentsSection: React.FC<{ moments: Moment[] }> = ({ moments }) => (
  <Section
    id="moments"
    eyebrow="Moments"
    title={<>Beyond the <span className="gradient-text">commits</span></>}
    subtitle="A few moments from the journey — click through to the story behind each."
  >
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
      {moments.map((m, i) => {
        const card = (
          <figure
            className={`glass-card relative rounded-2xl p-3 pb-4 m-0 ${tilts[i % tilts.length]} hover:rotate-0 hover:scale-[1.03] transition-transform duration-300`}
          >
            <div className="relative">
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover rounded-xl mb-3 saturate-[0.9] hover:saturate-100 transition-[filter]"
              />
              {m.url && (
                <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/55 border border-white/20 flex items-center justify-center">
                  {m.urlIcon === 'link' ? (
                    <Link2 className="w-3.5 h-3.5 text-white/85" />
                  ) : (
                    <Linkedin className="w-3.5 h-3.5 text-white/85" />
                  )}
                </span>
              )}
            </div>
            <figcaption className="text-left px-1">
              <div className="geist-font text-sm font-medium text-card-foreground leading-snug">{m.caption}</div>
              <div className="inter-font text-xs text-muted-foreground mt-0.5">{m.sub}</div>
            </figcaption>
          </figure>
        )
        return m.url ? (
          <a key={m.src} href={m.url} target="_blank" rel="noopener noreferrer" aria-label={`${m.caption} — view on LinkedIn`}>
            {card}
          </a>
        ) : (
          <React.Fragment key={m.src}>{card}</React.Fragment>
        )
      })}
    </div>
  </Section>
)
