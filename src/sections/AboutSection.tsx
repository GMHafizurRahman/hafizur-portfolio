import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading label="About Me" title="Engineering experience that spans backend, banking, and leadership" />

            <div className="mt-8 grid grid-cols-2 gap-4">
              {profile.badges.map((badge) => (
                <div
                  key={badge}
                  className="card-base rounded-xl px-4 py-3 text-sm font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
