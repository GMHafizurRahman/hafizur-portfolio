import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navItems } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/ui/button'
import { scrollToSection, cn } from '@/lib/utils'

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(navItems.map((n) => n.href))

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setMobileOpen(false)
  }

  return (
    <header className="nav-backdrop fixed inset-x-0 top-0 z-40">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-xl font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Back to top"
          >
            <span style={{ color: 'var(--accent)' }}>H</span>R
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'relative rounded-md px-4 py-2 text-sm font-medium transition-colors',
                  activeSection === item.href ? '' : 'hover:text-[var(--text-primary)]',
                )}
                style={{ color: activeSection === item.href ? 'var(--accent)' : 'var(--text-secondary)' }}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <a href={profile.cv} download>
              <Button size="sm" variant="primary">
                <Download size={15} />
                Download CV
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg"
            >
              {mobileOpen ? (
                <X size={20} style={{ color: 'var(--text-primary)' }} />
              ) : (
                <Menu size={20} style={{ color: 'var(--text-primary)' }} />
              )}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden lg:hidden"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors"
                  style={{ color: activeSection === item.href ? 'var(--accent)' : 'var(--text-secondary)' }}
                >
                  {item.label}
                </button>
              ))}
              <a href={profile.cv} download className="mt-2">
                <Button size="sm" variant="primary" className="w-full">
                  <Download size={15} />
                  Download CV
                </Button>
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
