import { motion } from 'framer-motion'
import { getIcon } from '@/lib/icons'
import { skillCategories } from '@/data/skills'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Container>
        <SectionHeading
          label="Technical Expertise"
          title="Technologies I build with"
          description="A categorized overview of the languages, frameworks, and tools I use to design and deliver enterprise software."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => {
            const Icon = getIcon(category.icon)
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card-base rounded-xl p-5"
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'var(--accent-glow)' }}
                >
                  <Icon size={19} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="mb-3 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md px-2 py-1 text-xs"
                      style={{ backgroundColor: 'var(--bg-card-hover)', color: 'var(--text-secondary)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
