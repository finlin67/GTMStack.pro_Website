import Link from 'next/link'
import { Linkedin, Twitter, Github, Mail, ArrowUpRight } from 'lucide-react'
import { PILLARS } from '@/lib/types'

const footerLinks = {
  expertise: PILLARS.map(p => ({ label: p.title, href: p.href })),
  company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Industries', href: '/industries' },
    { label: 'Resume', href: '/resume' },
  ],
  connect: [
    { label: 'Contact', href: '/contact' },
    { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
    { label: 'Twitter', href: 'https://twitter.com', external: true },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Mail, href: 'mailto:hello@gtmstack.pro', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container-width py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                GTMstack<span className="text-brand-400">.pro</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-xs leading-relaxed">
              Strategic GTM consulting for B2B technology companies. From strategy to execution, we help you grow faster.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Expertise Links */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Expertise</h3>
            <ul className="space-y-3">
              {footerLinks.expertise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  {'external' in link ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-width py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} GTMstack.pro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

