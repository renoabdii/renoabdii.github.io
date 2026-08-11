import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface CardProps {
  className?: string
  children: ReactNode
}

export default function Card({ className, children }: CardProps) {
  return (
    <div className={cn('neo-card', className)}>
      {children}
    </div>
  )
}
