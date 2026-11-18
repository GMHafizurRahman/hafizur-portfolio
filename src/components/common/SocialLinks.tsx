import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

interface SocialLinksProps {
  className?: string
  iconSize?: number
}

export function SocialLinks({ className, iconSize = 18 }: SocialLinksProps) {
  const links = [
    { href: profile.contact.github, label: 'GitHub', icon: Github },
    { href: profile.contact.linkedin, label: 'LinkedIn', icon: Linkedin },
    { href: `mailto:${profile.contact.email}`, label: 'Email', icon: Mail },
  ]

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-[var(--bg-card)]"
        >
          <Icon size={iconSize} style={{ color: 'var(--text-secondary)' }} />
        </a>
      ))}
    </div>
  )
}
