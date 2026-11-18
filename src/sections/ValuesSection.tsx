import { motion } from 'framer-motion'
import { getIcon } from '@/lib/icons'
import { values } from '@/data/values'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

export function ValuesSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Container>
        <SectionHeading label="Professional Values" title="How I approach my work" align="center" className="mx-auto" />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = getIcon(value.icon)
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.25) }}
                className="rounded-xl p-5 text-center"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div
                  className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'var(--accent-glow)' }}
                >
                  <Icon size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="mb-1.5 text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                  {value.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
