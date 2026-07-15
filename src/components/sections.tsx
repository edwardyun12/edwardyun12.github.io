import React from 'react'
import { ExternalLink, Mail, Award, ArrowUpRight, Link2 } from 'lucide-react'

// lucide-react no longer ships brand icons — inline SVGs instead
const Github: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)
const Linkedin: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

// --- TYPES ---
export interface ExperienceItem {
  role: string
  org: string
  period: string
  bullets: string[]
  tags: string[]
}
export interface FeaturedProject {
  title: string
  description: string
  tags: string[]
  repoUrl?: string
  demoUrl?: string
}
export interface SkillGroup {
  title: string
  items: string[]
}
export interface Cert {
  name: string
  issuer: string
  year: string
  url?: string
  /** 발급처 공식 뱃지 이미지 경로 — 없으면 기본 Award 아이콘 표시 */
  image?: string
}
export interface Article {
  title: string
  summary: string
  date: string
  url: string
}
export interface Moment {
  src: string
  alt: string
  caption: string
  sub: string
  /** LinkedIn 게시물, 블로그 등 링크 — 있으면 카드가 클릭 가능해지고 배지 아이콘이 표시됩니다 */
  url?: string
  /** 링크 배지에 표시할 아이콘. 기본값은 'linkedin' */
  urlIcon?: 'linkedin' | 'link'
}
export interface FooterData {
  name: string
  email: string
  linkedin: string
  github: string
}

// --- SHARED SECTION SHELL ---
const Section: React.FC<{ id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }> = ({
  id,
  eyebrow,
  title,
  children,
}) => (
  <section id={id} className="relative w-full px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <p className="inter-font text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
        <span className="text-[#7d8cfa]">{'// '}</span>
        {eyebrow}
      </p>
      <h2 className="geist-font text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-14">
        {title}
        <span className="text-foreground">.</span>
      </h2>
      {children}
    </div>
    <div className="max-w-6xl mx-auto mt-20">
      <div className="divider" />
    </div>
  </section>
)

// --- EXPERIENCE (+ compact education block) ---
export const ExperienceSection: React.FC<{ items: ExperienceItem[]; education?: ExperienceItem[] }> = ({
  items,
  education,
}) => (
  <Section id="experience" eyebrow="Experience" title={<>Where I&apos;ve <span className="gradient-text">shipped</span></>}>
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <div key={item.role + item.org} className="glass-card rounded-2xl p-6 md:p-8 text-left">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
            <h3 className="geist-font text-lg md:text-xl font-medium text-card-foreground">
              {item.role} · <span className="gradient-text">{item.org}</span>
            </h3>
            <span className="inter-font text-sm text-muted-foreground tabular-nums">{item.period}</span>
          </div>
          <ul className="inter-font text-sm text-muted-foreground leading-relaxed list-disc pl-5 space-y-2 mb-5">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
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

// --- FEATURED PROJECTS ---
export const FeaturedProjectsSection: React.FC<{ projects: FeaturedProject[] }> = ({ projects }) => (
  <Section id="featured" eyebrow="Projects" title={<>Things I&apos;ve <span className="gradient-text">built</span></>}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div key={p.title} className="glass-card rounded-2xl p-6 text-left flex flex-col">
          <h3 className="geist-font text-lg font-medium text-card-foreground mb-2">{p.title}</h3>
          <p className="inter-font text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {p.tags.map((tag) => (
              <span key={tag} className="skill-badge px-2 py-1 rounded text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {p.repoUrl && (
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-foreground inter-font"
              >
                <Github className="w-3.5 h-3.5" /> Code
              </a>
            )}
            {p.demoUrl && (
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-foreground inter-font"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Live
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </Section>
)

// --- SKILLS ---
export const SkillsSection: React.FC<{ groups: SkillGroup[] }> = ({ groups }) => (
  <Section id="stack" eyebrow="Skills" title={<>Tools I <span className="gradient-text">reach for</span></>}>
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

// --- CERTIFICATIONS ---
export const CertsSection: React.FC<{ certs: Cert[] }> = ({ certs }) => (
  <Section id="certs" eyebrow="Certifications" title={<>Credentials that <span className="gradient-text">back it up</span></>}>
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

// --- WRITING ---
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

// --- MOMENTS (photo gallery) ---
const tilts = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']

export const MomentsSection: React.FC<{ moments: Moment[] }> = ({ moments }) => (
  <Section id="moments" eyebrow="Moments" title={<>Beyond the <span className="gradient-text">commits</span></>}>
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

// --- FOOTER ---
export const SiteFooter: React.FC<{ data: FooterData }> = ({ data }) => (
  <footer id="contact" className="relative w-full px-6 pt-8 pb-14">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="geist-font text-2xl md:text-3xl font-light tracking-tight text-foreground mb-3">
        Let&apos;s build something that <span className="gradient-text">actually ships</span>.
      </h2>
      <p className="inter-font text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
        Graduating in 2026 and open to graduate software engineering and GenAI roles — the fastest way to reach me is
        email.
      </p>
      <div className="flex justify-center gap-3 mb-10">
        <a
          href={`mailto:${data.email}`}
          className="glass-button inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground inter-font"
        >
          <Mail className="w-4 h-4" /> Email
        </a>
        <a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground inter-font"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground inter-font"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
      </div>
      <p className="inter-font text-xs text-muted-foreground">
        © 2026 {data.name} · Bournemouth · Seoul · wherever the agents are
      </p>
    </div>
  </footer>
)
