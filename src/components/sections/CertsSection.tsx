import type React from 'react'
import { Award } from 'lucide-react'
import type { Cert } from '@/types/portfolio'
import { Section } from './Section'

export const CertsSection: React.FC<{ certs: Cert[] }> = ({ certs }) => (
  <Section
    id="certs"
    eyebrow="Certifications"
    title={<>Credentials that <span className="gradient-text">back it up</span></>}
    subtitle="Vendor certifications — each one links to its verifiable badge."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certs.map((c) => {
        const inner = (
          <>
            {c.image ? (
              <img src={c.image} alt={`${c.name} badge`} loading="lazy" className="w-12 h-12 object-contain shrink-0" />
            ) : (
              <div className="w-10 h-10 rounded-lg project-image flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-white/50" />
              </div>
            )}
            <div className="text-left">
              <div className="geist-font text-sm font-medium text-card-foreground">{c.name}</div>
              <div className="inter-font text-xs text-muted-foreground">
                {c.issuer} · {c.year}
              </div>
            </div>
          </>
        )
        return c.url ? (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-5 flex items-center gap-4"
          >
            {inner}
          </a>
        ) : (
          <div key={c.name} className="glass-card rounded-2xl p-5 flex items-center gap-4">
            {inner}
          </div>
        )
      })}
    </div>
  </Section>
)
