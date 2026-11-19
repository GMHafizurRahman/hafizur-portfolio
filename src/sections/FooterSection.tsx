import { ArrowUp } from 'lucide-react'
import { profile } from '@/data/profile'
import { Container } from '@/components/common/Container'
import { SocialLinks } from '@/components/common/SocialLinks'

export function FooterSection() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
      <Container className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg font-display text-sm font-extrabold"
            style={{ backgroundColor: 'var(--accent)', color: 'white' }}
          >
            HR
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              {profile.name}
            </p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {profile.title}
            </p>
          </div>
        </div>

        <SocialLinks />

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-[var(--bg-card)]"
          style={{ border: '1px solid var(--border)' }}
        >
          <ArrowUp size={16} style={{ color: 'var(--text-secondary)' }} />
        </button>
      </Container>

      <Container className="pb-8">
        <p className="text-center text-xs" style={{ color: 'var(--text-muted)' }}>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="mt-1 text-center text-xs" style={{ color: 'var(--text-muted)' }}>
          Built faster with the help of Claude Code, an AI coding agent.
        </p>
      </Container>
    </footer>
  )
}
