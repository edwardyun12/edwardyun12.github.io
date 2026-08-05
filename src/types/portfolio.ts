import type React from 'react'

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
