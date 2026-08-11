import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const variantClass =
    variant === 'accent' ? 'neo-btn-accent'
    : variant === 'outline' ? 'neo-btn-outline'
    : 'neo-btn'

  return (
    <button
      className={cn(variantClass, sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
