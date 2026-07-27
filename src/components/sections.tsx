import React from 'react'
import { ExternalLink, Mail, Award, ArrowUpRight, Link2, Copy, Check, ChevronLeft, ChevronRight, Trophy } from 'lucide-react'

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
export const AwsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 15.5c6 3.6 12 3.6 18 0"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path d="M18.2 14.4c1.4.2 2.7.7 3.8 1.4-.1 1.2-.5 2.8-1.2 3.9-.15-1.3-.35-2.9-.6-3.9-1-.2-2.4-.6-3.6-1a.3.3 0 0 1 .1-.4c.5-.1 1-.1 1.5 0Z" fill="currentColor" />
  </svg>
)

// --- TYPES ---
export interface ExperienceItem {
  role: string
  org: string
  period: string
  bullets: string[]
  tags: string[]
  /** 조직 로고 경로 — 있으면 흰색 라운드 칩 위에 표시됩니다 */
  logo?: string
  /** true면 로고가 칩을 꽉 채웁니다 (원형·풀블리드 로고용, 예: Vitality) */
  logoFill?: boolean
}
export interface FeaturedProject {
  title: string
  description: string
  tags: string[]
  repoUrl?: string
  demoUrl?: string
  /** 소속·기간 표시 (예: 'Bespin Global · 2026') */
  meta?: string
  /** 상세 불릿 — 있으면 상세 패널에 리스트로 표시됩니다 */
  highlights?: string[]
  /** 왼쪽 목록에 표시할 짧은 제목 — 없으면 title 사용 */
  navTitle?: string
  /** 상세 패널 상단 미디어 영역의 아이콘 (스크린샷이 없을 때) */
  icon?: React.ReactNode
  /** 실제 스크린샷 경로 — 있으면 아이콘 대신 표시 */
  image?: string
  /** image의 object-position (예: 'center 30%') — 크롭 위치 조정용, 기본값 center */
  imagePosition?: string
  /** 제목 위에 트로피 배지로 표시할 성과 (예: '1st Place') */
  badge?: string
  /** title 안에서 gradient-text로 강조할 부분 문자열 (예: 회사명) */
  titleAccent?: string
  /** 핵심 지표 타일 (예: [{value:'96%', label:'golden-set accuracy'}]) */
  stats?: { value: string; label: string }[]
  /** 파이프라인 단계 탐색기 — 있으면 이미지 대신 인터랙티브 stage explorer가 표시됩니다 */
  stages?: ProjectStage[]
  /** @deprecated 더 이상 레이아웃에 사용되지 않음 */
  featured?: boolean
}
export interface ProjectStage {
  /** 단계 라벨 (예: 'INGEST') */
  label: string
  /** 단계 제목 (예: 'Source documents') */
  title: string
  /** 단계 상세 설명 — 이미지 아래 좌측 컬럼에 표시 */
  desc: string
  /** @deprecated insightSteps로 대체 — 구조화되지 않은 단일 문단 인사이트 (fallback) */
  insight?: string
  /** 실제로 겪은 트레이드오프·판단 근거를 3단계로 구조화 — 있으면 desc 옆 컬럼에 번호 목록으로 표시됩니다 */
  insightSteps?: { label: string; text: string }[]
  /** 단계에서 사용한 도구·기술 태그 */
  tags?: string[]
  /** 단계 근거를 보여주는 스크린샷 — 있으면 제목 아래 풀와이드 브라우저 프레임으로 표시됩니다 */
  image?: string
  /** 브라우저 프레임 상단 바에 표시할 짧은 라벨 (예: 'chunking · simulator') */
  imageLabel?: string
  /** 스크린샷 아래 표시할 한 줄 캡션 */
  imageCaption?: string
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
export interface SummaryFact {
  title: string
  value: string
}
export interface FooterData {
  name: string
  email: string
  linkedin: string
  github: string
}

// --- SHARED SECTION SHELL ---
const Section: React.FC<{
  id: string
  eyebrow: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
}> = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="relative w-full px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <p className="inter-font text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
        <span className="text-[#7d8cfa]">{'// '}</span>
        {eyebrow}
      </p>
      <h2 className="geist-font text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-3">
        {title}
        <span className="text-foreground">.</span>
      </h2>
      {subtitle && <p className="inter-font text-base text-muted-foreground max-w-2xl mb-14">{subtitle}</p>}
      {!subtitle && <div className="mb-14" />}
      {children}
    </div>
    <div className="max-w-6xl mx-auto mt-20">
      <div className="divider" />
    </div>
  </section>
)

// --- PROFESSIONAL SUMMARY ---
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

// --- EXPERIENCE (timeline + compact education block) ---
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

// --- SKILLS ---
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

// --- CERTIFICATIONS ---
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

// --- FOOTER ---
export const SiteFooter: React.FC<{ data: FooterData }> = ({ data }) => {
  const [copied, setCopied] = React.useState(false)
  const copyEmail = () => {
    navigator.clipboard.writeText(data.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <footer id="contact" className="relative w-full px-6 pt-8 pb-14">
      <div className="max-w-6xl mx-auto text-center">
        <p className="inter-font text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
          <span className="text-[#7d8cfa]">{'// '}</span>Contact
        </p>
        <h2 className="geist-font text-2xl md:text-4xl font-semibold tracking-tight text-foreground mb-3">
          Let&apos;s build something that <span className="gradient-text">actually ships</span>.
        </h2>
        <p className="inter-font text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
          Available now for software engineering roles building AI-powered products — final-year Software Engineering
          student at Bournemouth University (graduating June 2027). The fastest way to reach me is email.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-10">
          <div className="inline-flex items-center rounded-full bg-white overflow-hidden">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 pl-6 pr-4 py-3.5 text-black text-sm font-semibold inter-font hover:bg-black/5 transition-colors"
            >
              <Mail className="w-4 h-4" /> {data.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              title="이메일 주소 복사"
              className="px-4 py-3.5 border-l border-black/10 text-black hover:bg-black/5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-foreground inter-font"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-foreground inter-font"
          >
            <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <p className="inter-font text-xs text-muted-foreground">
          © 2026 {data.name} · Bournemouth · Seoul · wherever the agents are
        </p>
      </div>
    </footer>
  )
}
