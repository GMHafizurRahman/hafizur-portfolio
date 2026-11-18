import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  { label: 'About', href: 'about' },
  { label: 'Expertise', href: 'expertise' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Education', href: 'education' },
  { label: 'Contact', href: 'contact' },
]

export const sectionIds = navItems.map((n) => n.href)
