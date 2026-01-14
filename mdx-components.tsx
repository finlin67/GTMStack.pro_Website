import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default elements with custom styling
    h1: ({ children }) => (
      <h1 className="font-display text-4xl font-bold text-slate-900 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-xl font-semibold text-slate-900 mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-slate-600 leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => {
      const isExternal = href?.startsWith('http')
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
          >
            {children}
          </a>
        )
      }
      return (
        <Link
          href={href || '#'}
          className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
        >
          {children}
        </Link>
      )
    },
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-slate-600 mb-4">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-500 pl-4 italic text-slate-600 my-6">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-brand-50 text-brand-700 px-1.5 py-0.5 rounded text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    ...components,
  }
}

