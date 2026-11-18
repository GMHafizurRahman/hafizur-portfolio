import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Layers } from 'lucide-react'
import { projects } from '@/data/projects'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { TechBadge } from '@/components/common/TechBadge'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import type { Project } from '@/types'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Container>
        <SectionHeading
          label="Featured Projects"
          title="Selected work"
          description="Enterprise systems and personal projects that showcase how I design, build, and deliver software."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.07, 0.3) }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const isDemo = project.status === 'Demo Content'

  return (
    <Dialog>
      <div className="card-base flex h-full flex-col rounded-xl p-6">
        <div className="flex items-start justify-between gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: 'var(--accent-glow)' }}
          >
            <Layers size={20} style={{ color: 'var(--accent)' }} />
          </div>
          {isDemo ? (
            <Badge variant="demo">Demo Content</Badge>
          ) : (
            <Badge variant="outline">{project.status}</Badge>
          )}
        </div>

        <h3 className="mt-4 text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--accent)' }}>
          {project.category}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((t) => (
            <TechBadge key={t} label={t} />
          ))}
          {project.technologies.length > 5 && (
            <span className="tech-badge">+{project.technologies.length - 5}</span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t pt-4" style={{ borderColor: 'var(--border)' }}>
          <DialogTrigger asChild>
            <button
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:gap-2"
              style={{ color: 'var(--accent)' }}
            >
              View Details
              <ArrowUpRight size={15} />
            </button>
          </DialogTrigger>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                <Github size={17} style={{ color: 'var(--text-secondary)' }} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                <ExternalLink size={17} style={{ color: 'var(--text-secondary)' }} />
              </a>
            )}
          </div>
        </div>
      </div>

      <DialogContent>
        <div className="flex flex-wrap items-center gap-2">
          {isDemo ? <Badge variant="demo">Demo Content</Badge> : <Badge variant="outline">{project.status}</Badge>}
          <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--accent)' }}>
            {project.category}
          </span>
        </div>
        <DialogTitle className="mt-3">{project.title}</DialogTitle>
        <DialogDescription>{project.longDescription}</DialogDescription>

        {project.architectureNote && (
          <div className="mt-5">
            <h4 className="mb-2 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              Architecture Overview
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.architectureNote}
            </p>
          </div>
        )}

        <div className="mt-5">
          <h4 className="mb-2 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            Key Features
          </h4>
          <ul className="space-y-1.5">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <h4 className="mb-2 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
