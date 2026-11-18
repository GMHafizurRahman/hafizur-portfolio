import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { educations } from '@/data/education'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

export function EducationSection() {
  return (
    <section id="education" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Container>
        <SectionHeading label="Education" title="Academic background" />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {educations.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.24) }}
              className="card-base rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'var(--accent-glow)' }}
                >
                  <GraduationCap size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                    {edu.institution}
                  </h3>
                  <p className="mt-1 text-sm font-medium" style={{ color: 'var(--accent)' }}>
                    {edu.degree}
                  </p>
                  <p className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                    {edu.period}
                  </p>

                  {edu.note && (
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {edu.note}
                    </p>
                  )}

                  {edu.subjects && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {edu.subjects.map((s) => (
                        <span
                          key={s}
                          className="rounded-md px-2 py-1 text-xs"
                          style={{ backgroundColor: 'var(--bg-card-hover)', color: 'var(--text-secondary)' }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
