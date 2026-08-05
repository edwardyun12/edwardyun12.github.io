import { PortfolioPage } from '@/components/ui/starfall-portfolio-landing'
import {
  SummarySection,
  ExperienceSection,
  FeaturedProjectsSection,
  SkillsSection,
  CertsSection,
  WritingSection,
  MomentsSection,
  SiteFooter,
} from '@/components/sections'
import { portfolioData, summary, summaryHighlights, summaryFacts } from '@/data/profile'
import { experience, education } from '@/data/experience'
import { featuredProjects } from '@/data/projects'
import { skillGroups } from '@/data/skills'
import { certs } from '@/data/certs'
import { articles } from '@/data/articles'
import { moments } from '@/data/moments'
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '@/data/site'

function App() {
  return (
    <>
      <PortfolioPage {...portfolioData} />
      <div className="sections-bg">
        <SummarySection
          paragraphs={summary}
          highlights={summaryHighlights}
          name="Chanyeong (Edward) Yun"
          role="Software Engineer"
          photo={{ src: '/photos/bespin-summary.webp', alt: 'Chanyeong (Edward) Yun at Bespin Global' }}
          facts={summaryFacts}
        />
        <FeaturedProjectsSection projects={featuredProjects} />
        <ExperienceSection items={experience} education={education} />
        <SkillsSection groups={skillGroups} />
        <CertsSection certs={certs} />
        <WritingSection articles={articles} />
        <MomentsSection moments={moments} />
        <SiteFooter data={{ name: 'Chanyeong (Edward) Yun', email: EMAIL, linkedin: LINKEDIN_URL, github: GITHUB_URL }} />
      </div>
    </>
  )
}

export default App
