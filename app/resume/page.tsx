import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import { PageHero } from '@/components/ui/Hero'
import { Section, SectionHeader } from '@/components/layout/Section'
import { CTABand } from '@/components/ui/CTABand'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Professional experience and qualifications for GTM consulting engagements.',
}

const experience = [
  {
    title: 'Independent GTM Consultant',
    company: 'GTMstack.pro',
    period: '2023 - Present',
    location: 'Remote',
    description: 'Full-stack GTM consulting for B2B technology companies from seed to scale.',
    highlights: [
      'Delivered 50+ GTM strategy and execution engagements',
      'Generated $500M+ in attributed pipeline for clients',
      'Built automation and analytics infrastructure for 30+ companies',
      'Specialized in PLG, enterprise, and hybrid GTM motions',
    ],
  },
  {
    title: 'VP of Growth',
    company: 'Series C B2B SaaS Company',
    period: '2019 - 2023',
    location: 'San Francisco, CA',
    description: 'Led marketing and growth organization through 5x revenue growth.',
    highlights: [
      'Scaled ARR from $8M to $45M over 4 years',
      'Built and managed team of 15 across demand gen, product marketing, and ops',
      'Implemented attribution and analytics infrastructure',
      'Led successful Series C fundraise marketing efforts',
    ],
  },
  {
    title: 'Director of Demand Generation',
    company: 'Enterprise Software Company',
    period: '2016 - 2019',
    location: 'Boston, MA',
    description: 'Built demand generation function from scratch.',
    highlights: [
      '4x pipeline growth in 3 years',
      'Implemented marketing automation and ABM programs',
      'Reduced CAC by 40% through channel optimization',
      'Launched partner marketing program generating 30% of pipeline',
    ],
  },
  {
    title: 'Marketing Manager',
    company: 'B2B Tech Startup',
    period: '2012 - 2016',
    location: 'New York, NY',
    description: 'Early marketing hire, supporting growth through Series B.',
    highlights: [
      'First marketing hire, built foundation for growth',
      'Launched content marketing program driving 50% of inbound leads',
      'Managed transition from founder-led sales to marketing-supported',
      'Supported successful $20M Series B fundraise',
    ],
  },
]

const skills = {
  strategy: [
    'Go-to-Market Strategy',
    'Market Positioning',
    'Competitive Analysis',
    'ICP Development',
    'Pricing Strategy',
  ],
  analytics: [
    'Attribution Modeling',
    'Revenue Dashboards',
    'Data Pipeline Design',
    'Predictive Analytics',
    'A/B Testing',
  ],
  automation: [
    'HubSpot (Expert)',
    'Marketo',
    'Salesforce',
    'Segment',
    'Looker/Tableau',
  ],
  growth: [
    'Demand Generation',
    'Product-Led Growth',
    'Account-Based Marketing',
    'Content Strategy',
    'Conversion Optimization',
  ],
}

const certifications = [
  'HubSpot Marketing Software Certified',
  'Google Analytics Certified',
  'Salesforce Administrator Certified',
  'Reforge Growth Series',
]

export default function ResumePage() {
  return (
    <>
      <PageHero
        title="Resume"
        description="12+ years of B2B GTM experience across startups, scale-ups, and enterprises."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resume', href: '/resume' },
        ]}
      />

      {/* Download CTA */}
      <Section background="white" padding="sm">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn btn-primary px-5 py-2.5 rounded-xl">
              <Download className="w-4 h-4" />
              Download PDF Resume
            </button>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-5 py-2.5 rounded-xl"
            >
              View LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </Section>

      {/* Experience */}
      <Section background="gradient" padding="lg">
        <SectionHeader
          label="Experience"
          title="Professional Background"
          className="mb-10"
        />

        <FadeIn>
          <StaggerContainer className="space-y-8">
            {experience.map((job) => (
              <StaggerItem key={job.title}>
                <div className="card p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-xl text-slate-900">{job.title}</h3>
                      <p className="text-brand-600 font-medium">{job.company}</p>
                      <p className="text-sm text-slate-500 mt-1">
                        {job.period} · {job.location}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                      <Briefcase className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{job.description}</p>

                  <ul className="space-y-2">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </Section>

      {/* Skills */}
      <Section background="white" padding="lg">
        <SectionHeader
          label="Skills"
          title="Core Competencies"
          className="mb-10"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StaggerItem>
            <div className="card p-6 h-full">
              <h3 className="font-semibold text-slate-900 mb-4">Strategy</h3>
              <ul className="space-y-2">
                {skills.strategy.map((skill) => (
                  <li key={skill} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card p-6 h-full">
              <h3 className="font-semibold text-slate-900 mb-4">Analytics</h3>
              <ul className="space-y-2">
                {skills.analytics.map((skill) => (
                  <li key={skill} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card p-6 h-full">
              <h3 className="font-semibold text-slate-900 mb-4">Tools</h3>
              <ul className="space-y-2">
                {skills.automation.map((skill) => (
                  <li key={skill} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card p-6 h-full">
              <h3 className="font-semibold text-slate-900 mb-4">Growth</h3>
              <ul className="space-y-2">
                {skills.growth.map((skill) => (
                  <li key={skill} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Certifications */}
      <Section background="slate" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <SectionHeader
              label="Credentials"
              title="Certifications & Training"
            />
            <ul className="mt-6 space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-brand-600" />
                  <span className="text-slate-700">{cert}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="card p-6 bg-gradient-to-br from-brand-50 to-white border-brand-100">
              <GraduationCap className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Education</h3>
              <p className="text-slate-700 font-medium">MBA, Marketing</p>
              <p className="text-sm text-slate-500">Top-20 Business School</p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-slate-700 font-medium">BS, Business Administration</p>
                <p className="text-sm text-slate-500">State University</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CTA */}
      <CTABand
        title="Let's work together"
        description="Interested in discussing how my experience can help your company?"
        primaryCta={{ label: 'Start a Conversation', href: '/contact' }}
        secondaryCta={{ label: 'View Case Studies', href: '/case-studies' }}
        variant="gradient"
      />
    </>
  )
}

