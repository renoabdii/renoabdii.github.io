import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold font-heading border-2 border-black transition-transform hover:-translate-y-0.5',
        variant === 'accent'
          ? 'bg-accent text-white border-accent-dark'
          : 'bg-white text-black',
        className
      )}
    >
      {children}
    </span>
  )
}
