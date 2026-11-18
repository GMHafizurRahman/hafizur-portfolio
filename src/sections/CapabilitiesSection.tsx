import { motion } from 'framer-motion'
import { getIcon } from '@/lib/icons'
import { capabilities } from '@/data/capabilities'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

export function CapabilitiesSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Container>
        <SectionHeading
          label="Engineering Capabilities"
          title="What I can build and deliver"
          description="Beyond individual technologies — the end-to-end capabilities I bring to a software project."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = getIcon(cap.icon)
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                className="card-base rounded-xl p-6"
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'var(--accent-glow)' }}
                >
                  <Icon size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="mb-2 text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {cap.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
