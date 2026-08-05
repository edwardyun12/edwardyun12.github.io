import type React from 'react'

export const Section: React.FC<{
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
