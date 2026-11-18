import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger

export function DialogContent({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-fade-in" />
      <DialogPrimitive.Content
        className={cn(
          'fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 shadow-card-hover focus:outline-none sm:p-8',
          'max-h-[85vh] overflow-y-auto',
          className,
        )}
        style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-hover)' }}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className="absolute right-4 top-4 rounded-lg p-1.5 transition-colors hover:bg-[var(--bg-card-hover)]"
          aria-label="Close"
        >
          <X size={18} style={{ color: 'var(--text-secondary)' }} />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

export function DialogTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <DialogPrimitive.Title
      className={cn('font-display text-xl font-bold sm:text-2xl', className)}
      style={{ color: 'var(--text-primary)' }}
    >
      {children}
    </DialogPrimitive.Title>
  )
}

export function DialogDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <DialogPrimitive.Description className={cn('mt-2 text-sm', className)} style={{ color: 'var(--text-secondary)' }}>
      {children}
    </DialogPrimitive.Description>
  )
}
