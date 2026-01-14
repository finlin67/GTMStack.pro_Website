'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import {
  Mail,
  Calendar,
  Linkedin,
  Twitter,
  ArrowRight,
  CheckCircle2,
  Send,
} from 'lucide-react'
import { PageHero } from '@/components/ui/Hero'
import { Section, SectionHeader } from '@/components/layout/Section'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'

const engagementTypes = [
  {
    title: 'Strategy Consulting',
    description: 'Deep-dive strategic work on positioning, GTM planning, or competitive analysis.',
    duration: '2-4 weeks',
  },
  {
    title: 'Implementation Project',
    description: 'Hands-on buildout of automation, analytics, or operational infrastructure.',
    duration: '4-12 weeks',
  },
  {
    title: 'Fractional Leadership',
    description: 'Ongoing strategic and operational support as a fractional CMO/VP Growth.',
    duration: '3-6 months',
  },
  {
    title: 'Advisory Retainer',
    description: 'Regular strategic advice and guidance on GTM decisions.',
    duration: 'Ongoing',
  },
]

const faqs = [
  {
    question: 'What types of companies do you work with?',
    answer: 'I primarily work with B2B technology companies from seed stage through Series D. Most clients are in SaaS, FinTech, HealthTech, DevTools, and AI/ML.',
  },
  {
    question: 'How do engagements typically work?',
    answer: 'Most engagements start with a discovery call to understand your needs. From there, I\'ll propose a scope, timeline, and investment. Typical projects range from 2-week strategy sprints to 6-month fractional roles.',
  },
  {
    question: 'What\'s your pricing model?',
    answer: 'I offer project-based pricing for defined scope work and monthly retainers for ongoing engagements. Investment varies based on scope and duration—happy to discuss specifics once we\'ve talked.',
  },
  {
    question: 'Are you available for full-time roles?',
    answer: 'I\'m focused on consulting work currently, but happy to discuss fractional leadership arrangements that provide dedicated time for your organization.',
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <PageHero
        title="Let's Talk"
        description="Ready to accelerate your GTM? Let's discuss how I can help your company achieve its growth goals."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* Contact Options */}
      <Section background="white" padding="md">
        <FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <a
                href="mailto:hello@gtmstack.pro"
                className="card card-hover p-6 text-center group block"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                <p className="text-sm text-slate-600">hello@gtmstack.pro</p>
              </a>
            </StaggerItem>

            <StaggerItem>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-6 text-center group block"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Schedule a Call</h3>
                <p className="text-sm text-slate-600">Book 30 min intro</p>
              </a>
            </StaggerItem>

            <StaggerItem>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-6 text-center group block"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">LinkedIn</h3>
                <p className="text-sm text-slate-600">Connect with me</p>
              </a>
            </StaggerItem>
          </StaggerContainer>
        </FadeIn>
      </Section>

      {/* Main Content */}
      <Section background="gradient" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <FadeIn>
            <div className="card p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
                Send a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">
                    Thanks for reaching out. I&apos;ll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-colors"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Engagement Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formState.type}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="strategy">Strategy Consulting</option>
                      <option value="implementation">Implementation Project</option>
                      <option value="fractional">Fractional Leadership</option>
                      <option value="advisory">Advisory Retainer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-colors resize-none"
                      placeholder="Tell me about your GTM challenges and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full py-3 rounded-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Engagement Types */}
          <FadeIn delay={0.2}>
            <SectionHeader
              label="Engagement Models"
              title="How we can work together"
              className="mb-8"
            />

            <div className="space-y-4">
              {engagementTypes.map((type) => (
                <div key={type.title} className="card p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">{type.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{type.description}</p>
                    </div>
                    <span className="badge text-xs shrink-0 ml-4">{type.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white" padding="lg">
        <SectionHeader
          label="FAQ"
          title="Common Questions"
          align="center"
          className="mb-12"
        />

        <StaggerContainer className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <StaggerItem key={faq.question}>
              <div className="card p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600">{faq.answer}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  )
}

