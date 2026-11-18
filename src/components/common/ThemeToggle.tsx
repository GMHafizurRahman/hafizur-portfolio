import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-lg transition-colors',
        'hover:bg-[var(--bg-card)]',
        className,
      )}
    >
      {theme === 'dark' ? (
        <Sun size={18} style={{ color: 'var(--text-secondary)' }} />
      ) : (
        <Moon size={18} style={{ color: 'var(--text-secondary)' }} />
      )}
    </button>
  )
}
