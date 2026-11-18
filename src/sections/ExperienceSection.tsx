import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, MapPin } from 'lucide-react'
import { experiences } from '@/data/experience'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { TechBadge } from '@/components/common/TechBadge'
import { cn } from '@/lib/utils'

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id ?? null)

  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Container>
        <SectionHeading
          label="Professional Experience"
          title="Career timeline"
          description="A chronological record of my professional roles, from enterprise training to technical leadership."
        />

        <div className="relative mt-14">
          <div
            className="absolute bottom-0 left-[15px] top-2 w-px sm:left-[19px]"
            style={{ backgroundColor: 'var(--border)' }}
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const isOpen = expandedId === exp.id
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.3) }}
                  className="relative pl-10 sm:pl-14"
                >
                  <div
                    className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full sm:h-10 sm:w-10"
                    style={{
                      backgroundColor: exp.type === 'work' ? 'var(--accent)' : 'var(--bg-card)',
                      border: exp.type === 'training' ? '2px solid var(--border-hover)' : 'none',
                    }}
                  >
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: exp.type === 'work' ? 'white' : 'var(--accent)' }} />
                  </div>

                  <button
                    onClick={() => setExpandedId(isOpen ? null : exp.id)}
                    className="card-base w-full rounded-xl p-5 text-left sm:p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-bold sm:text-lg" style={{ color: 'var(--text-primary)' }}>
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                          {exp.company}
                        </p>
                        <div
                          className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <span>{exp.period}</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        size={18}
                        className={cn('mt-1 shrink-0 transition-transform', isOpen && 'rotate-180')}
                        style={{ color: 'var(--text-secondary)' }}
                      />
                    </div>

                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
                          {exp.responsibilities.map((r, idx) => (
                            <li
                              key={idx}
                              className="flex gap-2.5 text-sm leading-relaxed"
                              style={{ color: 'var(--text-secondary)' }}
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                              {r}
                            </li>
                          ))}
                        </ul>
                        {exp.technologies && (
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {exp.technologies.map((t) => (
                              <TechBadge key={t} label={t} />
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
