import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outline' | 'demo'
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  if (variant === 'demo') {
    return (
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide',
          className,
        )}
        style={{ borderColor: '#F59E0B', color: '#F59E0B', backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
      >
        {children}
      </span>
    )
  }

  return (
    <span
      className={cn('inline-flex items-center rounded-full px-3 py-1 text-xs font-medium', className)}
      style={{
        backgroundColor: variant === 'outline' ? 'transparent' : 'var(--accent-glow)',
        color: variant === 'outline' ? 'var(--text-secondary)' : 'var(--accent)',
        border: variant === 'outline' ? '1px solid var(--border)' : '1px solid rgba(99,102,241,0.2)',
      }}
    >
      {children}
    </span>
  )
}
