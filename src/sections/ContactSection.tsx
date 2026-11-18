import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react'
import { profile } from '@/data/profile'
import { Container } from '@/components/common/Container'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
      action: (
        <button onClick={copyEmail} aria-label="Copy email" className="ml-2 shrink-0">
          {copied ? <Check size={15} style={{ color: '#22c55e' }} /> : <Copy size={15} style={{ color: 'var(--text-muted)' }} />}
        </button>
      ),
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.contact.phone,
      href: profile.contact.phoneTel,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'GMHafizurRahman',
      href: profile.contact.github,
      external: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'hafizur-rahman',
      href: profile.contact.linkedin,
      external: true,
    },
  ]

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Have a project or opportunity in mind?
          </h2>
          <p className="mt-4 text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            I'm always interested in discussing meaningful engineering challenges, technology opportunities, and
            innovative software solutions.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card-base flex items-center gap-4 rounded-xl p-5"
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: 'var(--accent-glow)' }}
              >
                <method.icon size={19} style={{ color: 'var(--accent)' }} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                  {method.label}
                </p>
                <p className="truncate text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {method.value}
                </p>
              </div>
              {method.action}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm"
          style={{ color: 'var(--text-secondary)' }}
        >
          <MapPin size={15} style={{ color: 'var(--accent)' }} />
          Based in {profile.contact.location}
        </motion.div>
      </Container>
    </section>
  )
}
