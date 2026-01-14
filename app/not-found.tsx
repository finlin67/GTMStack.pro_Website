import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import { BackButton } from '@/components/ui/BackButton'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="container-width text-center">
        <div className="max-w-md mx-auto">
          <h1 className="font-display text-6xl md:text-7xl font-bold text-slate-900 mb-4">
            404
          </h1>
          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-slate-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="btn btn-primary px-6 py-3 rounded-xl"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <BackButton className="btn btn-secondary px-6 py-3 rounded-xl">
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </BackButton>
          </div>
        </div>
      </div>
    </section>
  )
}

