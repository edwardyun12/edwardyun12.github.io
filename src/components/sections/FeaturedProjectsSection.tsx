import React from 'react'
import { ExternalLink, Award, ChevronLeft, ChevronRight, Trophy } from 'lucide-react'
import type { FeaturedProject, ProjectStage } from '@/types/portfolio'
import { Section } from './Section'
import { Github } from './icons'

// --- STAGE EXPLORER (interactive pipeline walkthrough inside a project card) ---
const StageExplorer: React.FC<{ stages: ProjectStage[] }> = ({ stages }) => {
  const [active, setActive] = React.useState(0)
  const s = stages[active] ?? stages[0]
  const idx = (n: number) => String(n + 1).padStart(2, '0')
  const go = (n: number) => setActive(Math.max(0, Math.min(stages.length - 1, n)))
  const isFirst = active === 0
  const isLast = active === stages.length - 1
  return (
    <div className="mb-6">
      {/* stepper header — signals that the pipeline is interactive */}
      <div className="flex items-center justify-between mb-3">
        <span className="inter-font text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
          Pipeline · {stages.length} stages
        </span>
        <span className="inter-font text-[10px] text-muted-foreground">Click a stage to explore →</span>
      </div>
      {/* pipeline stepper — connected stages, click to inspect */}
      <div className="flex items-start overflow-x-auto pb-2 -mx-1 px-1">
        {stages.map((stage, i) => {
          const isActive = i === active
          return (
            <React.Fragment key={stage.label}>
              {i > 0 && (
                <div className="flex-1 min-w-[14px] h-9 flex items-center" aria-hidden="true">
                  <div className={`w-full h-px ${i <= active ? 'bg-[#7d8cfa]/45' : 'bg-white/12'}`} />
                </div>
              )}
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                aria-label={`Stage ${idx(i)}: ${stage.title}`}
                className="group shrink-0 min-w-[58px] flex flex-col items-center gap-2 cursor-pointer"
              >
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center geist-font text-[13px] font-bold tabular-nums transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[linear-gradient(135deg,#67b7f7,#7d8cfa_55%,#9b7bff)] shadow-[0_0_0_4px_rgba(125,140,250,0.16)]'
                      : 'text-muted-foreground border border-white/15 group-hover:border-white/40 group-hover:text-card-foreground'
                  }`}
                >
                  {idx(i)}
                </span>
                <span
                  className={`inter-font text-[10.5px] font-semibold tracking-[0.08em] uppercase whitespace-nowrap transition-colors ${
                    isActive ? 'text-card-foreground' : 'text-muted-foreground group-hover:text-card-foreground'
                  }`}
                >
                  {stage.label}
                </span>
              </button>
            </React.Fragment>
          )
        })}
      </div>

      {/* active stage detail */}
      <div className="glass-card rounded-xl p-5 md:p-6 mt-4">
        <div key={active} className="project-detail-fade">
          <div className="inter-font text-[10px] font-semibold tracking-[0.18em] uppercase text-[#7d8cfa] mb-2">
            Step {idx(active)} · {s.label}
          </div>
          <h4 className="geist-font text-xl md:text-2xl font-semibold text-card-foreground leading-tight mb-5">
            {s.title}
          </h4>

          {s.image && (
            <div className="min-w-0 mb-6">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0d12] shadow-[0_24px_70px_-25px_rgba(0,0,0,0.7)]">
                <div className="flex items-center gap-2 px-3 py-2.5 bg-white/[0.05] border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
                  {s.imageLabel && (
                    <span className="inter-font text-[11px] text-muted-foreground/60 ml-1.5">{s.imageLabel}</span>
                  )}
                </div>
                <img
                  src={s.image}
                  alt={`${s.title} — screenshot`}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              {s.imageCaption && (
                <p className="inter-font text-[11px] text-muted-foreground/70 mt-2.5 text-center leading-relaxed">
                  {s.imageCaption}
                </p>
              )}
            </div>
          )}

          <div
            className={`min-w-0 ${
              s.insightSteps && s.insightSteps.length > 0
                ? 'grid md:grid-cols-[1fr_1fr] gap-x-8 lg:gap-x-10 gap-y-6 pt-5 border-t border-white/10'
                : ''
            }`}
          >
            <p className="inter-font text-sm md:text-[15px] text-muted-foreground leading-relaxed">{s.desc}</p>

            {s.insightSteps && s.insightSteps.length > 0 && (
              <div className="flex flex-col gap-5">
                {s.insightSteps.map((step, i) => (
                  <div key={step.label}>
                    <div className="inter-font text-[10px] font-semibold tracking-[0.14em] uppercase text-[#7d8cfa] mb-1.5 flex items-center gap-2">
                      <span className="tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                      {step.label}
                    </div>
                    <p className="inter-font text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            )}

            {!s.insightSteps && s.insight && (
              <p className="inter-font text-sm md:text-[15px] text-muted-foreground leading-relaxed mt-3">
                {s.insight}
              </p>
            )}
          </div>

          {s.tags && s.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {s.tags.map((t) => (
                <span key={t} className="skill-badge px-2.5 py-1 rounded-md text-[11px] text-muted-foreground font-mono">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* prev / next controls — make step-through obvious to a first-time visitor */}
        <div className="flex items-center justify-between gap-3 mt-5 pt-4 border-t border-white/10">
          <span className="inter-font text-xs text-muted-foreground tabular-nums">
            <span className="text-card-foreground font-semibold">{idx(active)}</span>
            <span className="text-white/30"> / {idx(stages.length - 1)}</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(active - 1)}
              disabled={isFirst}
              aria-label="Previous stage"
              className="glass-button inline-flex items-center gap-1.5 pl-2.5 pr-3 py-1.5 rounded-lg text-xs font-medium text-foreground inter-font disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              disabled={isLast}
              aria-label="Next stage"
              className="primary-button inline-flex items-center gap-1.5 pl-3 pr-2.5 py-1.5 rounded-lg text-xs font-medium text-foreground inter-font disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function renderAccentTitle(title: string, accent?: string) {
  if (!accent) return title
  const i = title.indexOf(accent)
  if (i === -1) return title
  return (
    <>
      {title.slice(0, i)}
      <span className="gradient-text">{accent}</span>
      {title.slice(i + accent.length)}
    </>
  )
}

// --- FEATURED PROJECTS (interactive master-detail) ---
export const FeaturedProjectsSection: React.FC<{ projects: FeaturedProject[] }> = ({ projects }) => {
  const [active, setActive] = React.useState(0)
  const p = projects[active] ?? projects[0]
  return (
    <Section
      id="featured"
      eyebrow="Projects"
      title={<>Things I&apos;ve <span className="gradient-text">built</span></>}
      subtitle="Production GenAI systems, evaluated against real metrics — plus a few things I built for the love of it."
    >
      <div className="grid lg:grid-cols-[340px_minmax(0,1fr)] gap-5 md:gap-6">
        {/* LEFT — project selector */}
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible -mx-6 px-6 lg:mx-0 lg:px-0 pb-1 lg:pb-0">
          {projects.map((proj, i) => {
            const isActive = i === active
            return (
              <button
                key={proj.title}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`shrink-0 w-[260px] lg:w-full text-left rounded-2xl p-4 md:p-5 border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'glass-card border-[#7d8cfa]/50 shadow-[0_8px_30px_rgba(125,140,250,0.15)]'
                    : 'border-white/10 hover:border-white/25 hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`inter-font text-xs font-semibold tabular-nums pt-0.5 ${
                      isActive ? 'text-[#7d8cfa]' : 'text-muted-foreground'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <div
                      className={`geist-font text-sm font-medium leading-snug ${
                        isActive ? 'text-card-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {proj.navTitle ?? proj.title}
                    </div>
                    {proj.meta && <div className="inter-font text-xs text-muted-foreground mt-1">{proj.meta}</div>}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* RIGHT — active project detail */}
        <div key={active} className="glass-card rounded-2xl p-6 md:p-8 flex flex-col project-detail-fade">
          {/* media zone — hidden when an interactive stage explorer replaces it */}
          {!p.stages && (
            <div className="relative rounded-xl overflow-hidden mb-6 aspect-[16/7] project-image flex items-center justify-center">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined}
                />
              ) : (
                <>
                  <div className="text-white/15 [&>svg]:w-16 [&>svg]:h-16 md:[&>svg]:w-20 md:[&>svg]:h-20">
                    {p.icon ?? <Award className="w-16 h-16" />}
                  </div>
                  {p.meta && (
                    <span className="absolute bottom-3 right-4 inter-font text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30">
                      {p.meta}
                    </span>
                  )}
                </>
              )}
            </div>
          )}

          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
            <div>
              {p.badge && (
                <div className="primary-button inline-flex items-center gap-1.5 mb-2 px-3 py-1 rounded-full">
                  <Trophy className="w-3.5 h-3.5 text-foreground" strokeWidth={2} />
                  <span className="geist-font text-xs font-semibold tracking-wide text-foreground">{p.badge}</span>
                </div>
              )}
              <h3 className="geist-font text-xl md:text-2xl font-semibold text-card-foreground">
                {renderAccentTitle(p.title, p.titleAccent)}
              </h3>
            </div>
            {p.meta && (
              <span className="inter-font text-xs font-semibold tracking-[0.15em] uppercase gradient-text shrink-0">
                {p.meta}
              </span>
            )}
          </div>

          <p className="inter-font text-sm md:text-base text-muted-foreground leading-relaxed mb-5">{p.description}</p>

          {p.stats && p.stats.length > 0 && (
            <div className="flex flex-wrap gap-x-10 gap-y-4 py-5 mb-5 border-y border-white/10">
              {p.stats.map((s) => (
                <div key={s.label}>
                  <div className="geist-font text-2xl md:text-3xl font-semibold gradient-text leading-none mb-1.5">
                    {s.value}
                  </div>
                  <div className="inter-font text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {p.stages && p.stages.length > 0 && <StageExplorer stages={p.stages} />}

          {p.highlights && p.highlights.length > 0 && (
            <ul className="inter-font text-sm text-muted-foreground leading-relaxed space-y-2 mb-6">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#7d8cfa]/60"
                >
                  {h}
                </li>
              ))}
            </ul>
          )}

          {/* global tag row — omitted when the stage explorer already surfaces the stack per step */}
          {!p.stages && (
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {p.tags.map((tag) => (
                <span key={tag} className="skill-badge px-3 py-1.5 rounded-lg text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {(p.repoUrl || p.demoUrl) && (
            <div className="flex flex-wrap gap-3">
              {p.demoUrl && (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground inter-font"
                >
                  <ExternalLink className="w-4 h-4" /> Live demo
                </a>
              )}
              {p.repoUrl && (
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground inter-font"
                >
                  <Github className="w-4 h-4" /> View code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
