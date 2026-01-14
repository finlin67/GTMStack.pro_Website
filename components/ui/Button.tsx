import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

type ButtonProps = BaseButtonProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  )

const variantStyles = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500 shadow-md hover:shadow-lg hover:shadow-glow',
  secondary:
    'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 focus-visible:ring-slate-400 shadow-sm hover:shadow-md',
  accent:
    'bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500 shadow-md hover:shadow-lg hover:shadow-glow-accent',
  ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80',
  outline:
    'bg-transparent text-brand-600 border border-brand-300 hover:bg-brand-50 focus-visible:ring-brand-500 shadow-sm hover:shadow-md',
}

const sizeStyles = {
  sm: 'px-3.5 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-6 py-3 text-base rounded-xl gap-2',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      className,
      children,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center font-medium',
      'transition-all duration-200 ease-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
      'hover:-translate-y-0.5 active:translate-y-0',
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      className
    )

    const content = (
      <>
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {rightIcon}
      </>
    )

    if (href) {
      const isExternal = href.startsWith('http')
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseStyles}
            {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </a>
        )
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseStyles}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseStyles}
        disabled={loading}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

