import React from 'react'
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react'
import type { FooterData } from '@/types/portfolio'
import { Github, Linkedin } from './icons'

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
