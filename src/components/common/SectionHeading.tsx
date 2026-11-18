import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ label, title, description, className, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : '', className)}>
      {label && (
        <span
          className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest"
          style={{ color: 'var(--accent)' }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn('mt-4 max-w-2xl text-base leading-relaxed', align === 'center' && 'mx-auto')}
          style={{ color: 'var(--text-secondary)' }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
