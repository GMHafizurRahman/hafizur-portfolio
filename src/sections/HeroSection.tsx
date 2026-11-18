import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin, Briefcase } from 'lucide-react'
import { profile } from '@/data/profile'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/ui/button'
import { scrollToSection } from '@/lib/utils'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-[-10%] h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)' }}
        />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" style={{ color: 'var(--text-primary)' }} />
        </svg>
      </div>

      <Container className="relative z-10 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#22c55e' }} />
              Available for new opportunities
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              <span style={{ color: 'var(--text-primary)' }}>{profile.name}</span>
            </h1>

            <p className="mt-3 text-xl font-semibold sm:text-2xl text-gradient">{profile.title}</p>
            <p className="mt-2 text-base font-medium sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
              {profile.subtitle}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={15} style={{ color: 'var(--accent)' }} />
                5+ Years Experience
              </span>
              <span style={{ color: 'var(--border-hover)' }}>•</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} style={{ color: 'var(--accent)' }} />
                {profile.contact.location}
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={() => scrollToSection('contact')}>
                Let's Talk
                <ArrowRight size={17} />
              </Button>
              <Button variant="ghost" size="lg" onClick={() => scrollToSection('projects')}>
                Explore My Work
              </Button>
              <a href={profile.cv} download>
                <Button variant="ghost" size="lg">
                  <Download size={17} />
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div
        className="absolute inset-8 overflow-hidden rounded-3xl"
        style={{ border: '1px solid var(--border)', boxShadow: '0 24px 60px var(--shadow)' }}
      >
        <img
          src={profile.photo}
          alt={`${profile.name} — ${profile.title}`}
          className="h-full w-full object-cover"
          loading="eager"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
            if (fallback) fallback.style.display = 'flex'
          }}
        />
        <div
          className="h-full w-full items-center justify-center"
          style={{ backgroundColor: 'var(--bg-card)', display: 'none' }}
        >
          <span className="font-display text-7xl font-bold" style={{ color: 'var(--accent)' }}>
            {profile.initials}
          </span>
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(11,13,18,0.55) 100%)' }}
        />
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-2 -top-2 flex items-center gap-2 rounded-xl px-4 py-2.5 shadow-card-hover"
        style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-hover)' }}
      >
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
        <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
          Spring Boot
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-3 -left-3 flex items-center gap-2 rounded-xl px-4 py-2.5 shadow-card-hover"
        style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-hover)' }}
      >
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#8b5cf6' }} />
        <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
          BPMN Workflows
        </span>
      </motion.div>
    </div>
  )
}
