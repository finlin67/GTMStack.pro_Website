import { IndustryItem } from '@/lib/types'

export const industryItems: IndustryItem[] = [
  {
    slug: 'b2b-saas',
    title: 'B2B SaaS',
    description: 'Revenue milestones from seed to scale. PLG motions, enterprise enablement, and expansion strategies that compound.',
    longDescription: 'Specialized GTM expertise for B2B software companies at every stage. Navigate the route from PLG motions and freemium optimization to enterprise sales enablement and expansion revenue strategies. Modern growth plays include unified revenue operating models, product-led growth engines, and lifecycle marketing that drives expansion revenue.',
    positioning: 'Revenue milestones from seed to scale. PLG motions, enterprise enablement, and expansion strategies that compound.',
    gtmRealities: [
      'Balancing PLG and sales-led motions requires integrated data and attribution.',
      'Scaling from SMB to enterprise demands different GTM plays and messaging.',
      'Reducing churn while growing expansion revenue requires lifecycle orchestration.',
      'Building efficient demand generation at scale needs unified revenue operations.',
      'Product usage data must integrate with CRM for full-funnel visibility.',
    ],
    playbook: [
      'Unified revenue operating models integrating ABM, automation, and attribution.',
      'Product-led growth engines with freemium optimization and in-app conversion triggers.',
      'Lifecycle marketing playbooks driving expansion revenue and reducing churn.',
      'Multi-touch attribution models tracking marketing influence across buyer journey.',
      'Enterprise sales enablement with account-based plays and sales-marketing alignment.',
    ],
    proof: [
      {
        company: 'PRGX',
        outcome: 'Unified ABM + RevOps model',
        metrics: '87% YoY pipeline growth; +180% MQL→SQL; automated attribution',
      },
      {
        company: 'Red Hat',
        outcome: 'Global ABM activation',
        metrics: '33% of global pipeline influenced; 40% upsell lift; 30% CPL reduction',
      },
      {
        company: 'Salesforce',
        outcome: 'Demand gen analytics platform',
        metrics: 'Reporting cycle cut from 4 days to 2 hours; 76% YoY pipeline lift',
      },
    ],
    tags: ['PLG', 'Enterprise Sales', 'Freemium', 'Expansion Revenue'],
    icon: 'Cloud',
    stats: [
      { label: 'SaaS clients served', value: '50+' },
      { label: 'Avg. MRR growth', value: '47%' },
      { label: 'Pipeline influenced', value: '$280M+' },
    ],
    featured: true,
    featuredExpertise: [
      'account-based-marketing-abm',
      'marketing-operations',
      'marketing-automation',
      'lifecycle-marketing',
      'demand-generation',
    ],
    featuredCaseStudies: [
      'prgx-unified-revenue-operating-model',
      'redhat-global-abm-activation',
      'salesforce-demandgen-analytics-platform',
    ],
  },
  {
    slug: 'fintech',
    title: 'FinTech & Payments',
    description: 'Digital trust + precision GTM for FinTech firms navigating regulation and long sales cycles.',
    longDescription: 'Navigate regulatory complexity while driving aggressive growth. Regulatory pressure shapes every GTM decision, and trust is core conversion friction—especially for enterprise buyers. Modern growth plays include digital trust programs, AI-driven personalization, precision ABM, and multi-touch attribution aligned to audit requirements.',
    positioning: 'Digital trust + precision GTM for FinTech firms navigating regulation and long sales cycles.',
    gtmRealities: [
      'Regulatory pressure (GDPR, EU AI Act, SOC2, PCI, etc.) shapes every GTM decision.',
      'Trust and risk perception are core conversion friction, especially enterprise buyers.',
      'Sales cycles are longer due to compliance review + multi-stakeholder committees.',
      'Data ethics and transparency affect brand credibility and pipeline velocity.',
      'Markets are fragmented and crowded, demanding tight ICP precision.',
    ],
    playbook: [
      'Digital trust & verification programs baked into marketing and onboarding.',
      'AI-driven personalization for acquisition + lifecycle (ethical, explainable models).',
      'Precision ABM for enterprise accounts and partner ecosystems.',
      'Multi-touch attribution aligned to regulatory and audit requirements.',
      'Lifecycle nurture that reduces perceived risk at each stage.',
    ],
    proof: [
      {
        company: 'PRGX',
        outcome: 'Unified ABM + RevOps model',
        metrics: '87% YoY pipeline growth; +180% MQL→SQL; automated attribution',
      },
      {
        company: 'AMCS',
        outcome: 'Vertical ABM launch',
        metrics: '$1.2M pipeline in 90 days; 35% MQL lift',
      },
      {
        company: 'Red Hat/Salesforce',
        outcome: 'Enterprise ABM + lifecycle playbooks',
        metrics: 'Reduced CPL 30%, scaled across 200+ accounts',
      },
    ],
    tags: ['Compliance', 'Payments', 'Banking', 'Trust Marketing'],
    icon: 'Landmark',
    stats: [
      { label: 'FinTech clients', value: '25+' },
      { label: 'Regulatory markets', value: '12' },
      { label: 'Transaction volume enabled', value: '$2B+' },
    ],
    featured: true,
    featuredExpertise: [
      'account-based-marketing-abm',
      'demand-generation',
      'marketing-operations',
      'marketing-automation',
      'market-research',
      'seo',
    ],
    featuredCaseStudies: [],
  },
  {
    title: "Financial Services",
    slug: "financial-services",
    description: "Helping financial institutions modernize acquisition, risk management, operational efficiency, and customer experience through data-driven GTM systems, AI augmentation, and compliance-ready digital strategy.",
    longDescription: "Helping financial institutions modernize acquisition, risk management, operational efficiency, and customer experience through data-driven GTM systems, AI augmentation, and compliance-ready digital strategy.",
    positioning: "Helping financial institutions modernize acquisition, risk management, operational efficiency, and customer experience through data-driven GTM systems, AI augmentation, and compliance-ready digital strategy.",
    gtmRealities: [
      "Complex regulatory environments slow innovation and require highly controlled communication systems.",
      "Legacy data and operational silos make it difficult to gain a unified customer view.",
      "Fraud, risk, and compliance pressures increase operational cost and reduce agility.",
      "Traditional marketing models struggle to reach and engage multi-stakeholder buying groups.",
      "Retention and expansion require sophisticated lifecycle orchestration across products and channels."
    ],
    playbook: [
      "Compliance-Safe Digital Programs: Structuring acquisition and nurture workflows that meet regulatory standards.",
      "Risk & Fraud Intelligence: Integrating behavioral and transactional data into predictive engagement models.",
      "AI-Assisted Customer Experience: Personalizing interactions across digital surfaces while maintaining trust.",
      "Lifecycle Orchestration: Driving activation, cross-sell, and retention across financial service lines.",
      "Data Modernization: Creating governed data pipelines for analytics, reporting, and AI readiness."
    ],
    proof: [
      {
        company: "PRGX Global",
        outcome: "Modernized acquisition and ABM systems for enterprise financial clients, improving engagement and pipeline creation.",
        metrics: "200% increase in engagement; 87% YoY pipeline growth; major lift in MQL→SQL conversion."
      }
    ],
    featuredExpertise: [
      "account-based-marketing",
      "data-governance",
      "marketing-analytics-reporting",
      "ai-in-marketing",
      "customer-experience"
    ],
    featuredCaseStudies: [
      "abm-system-launch-prgx"
    ],
    tags: ["Financial Services", "Banking", "Compliance", "Risk Management"],
    icon: "Landmark",
    stats: [
      { label: "Financial services clients", value: "20+" },
      { label: "Regulatory markets", value: "15" },
      { label: "Assets under management", value: "$500B+" }
    ]
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    description: "Supporting healthcare organizations in modernizing engagement, strengthening patient experience, and navigating compliance through secure, data-driven GTM systems.",
    longDescription: "Supporting healthcare organizations in modernizing engagement, strengthening patient experience, and navigating compliance through secure, data-driven GTM systems.",
    positioning: "Supporting healthcare organizations in modernizing engagement, strengthening patient experience, and navigating compliance through secure, data-driven GTM systems.",
    gtmRealities: [
      "Strict compliance regulations limit targeting, personalization, and messaging flexibility.",
      "Fragmented systems hinder the ability to create unified patient or provider journeys.",
      "Trust and credibility are critical, making messaging and content frameworks more complex.",
      "Healthcare buyers include diverse stakeholders with varied priorities and approval paths.",
      "Digital transformation is slowed by legacy infrastructure and risk sensitivity."
    ],
    playbook: [
      "Compliance-Safe Engagement Systems: Structuring journey touchpoints within regulatory parameters.",
      "Provider & Payor Activation: Using persona-driven content to influence multi-stakeholder decisions.",
      "Patient Lifecycle Design: Mapping journeys from awareness through care coordination and follow-up.",
      "Data Governance Frameworks: Ensuring secure and compliant data handling across GTM systems.",
      "AI-Assisted Education: Deploying structured content to support patient understanding and adherence."
    ],
    proof: [
      {
        company: "Salesforce (Healthcare Vertical Exposure)",
        role: "Enterprise Campaigns Lead",
        outcome: "Supported GTM strategy and campaign execution for healthcare-focused Sales Cloud programs.",
        metrics: "Improved provider engagement; contributed to higher-quality pipeline for healthcare segments."
      }
    ],
    featuredExpertise: [
      "customer-experience",
      "data-governance",
      "content-strategy-systems",
      "marketing-analytics-reporting",
      "ai-in-marketing"
    ],
    featuredCaseStudies: [],
    tags: ["Healthcare", "HIPAA", "Patient Experience", "Compliance"],
    icon: "Heart",
    stats: [
      { label: "Healthcare clients", value: "20+" },
      { label: "Patient lives impacted", value: "5M+" },
      { label: "Provider networks", value: "500+" }
    ]
  },
  {
    slug: 'healthtech',
    title: 'HealthTech & Digital Health',
    description: 'Provider trust that drives adoption. HIPAA-compliant growth strategies that navigate complex buying committees.',
    longDescription: 'Growth strategies that respect HIPAA, build provider trust, and navigate complex healthcare buying committees. From digital therapeutics to health system solutions. Modern growth plays include unified patient engagement platforms, ABM programs targeting health systems, and lifecycle marketing that addresses compliance at each stage.',
    positioning: 'Provider trust that drives adoption. HIPAA-compliant growth strategies that navigate complex buying committees.',
    gtmRealities: [
      'HIPAA compliance shapes every GTM decision and data handling requirement.',
      'Complex multi-stakeholder buying committees require coordinated engagement.',
      'Provider trust is non-negotiable—any breach can derail entire pipeline.',
      'Long sales cycles due to clinical review and budget approval processes.',
      'Demonstrating clinical and business value requires evidence-based messaging.',
    ],
    playbook: [
      'Unified patient engagement platforms integrating Health Cloud with clinical workflows.',
      'ABM programs targeting health system decision-makers with verticalized messaging.',
      'HIPAA-compliant marketing automation with secure data handling and consent management.',
      'Lifecycle nurture that addresses compliance concerns at each buyer journey stage.',
      'Event marketing at HIMSS and healthcare conferences engaging provider networks.',
    ],
    proof: [
      {
        company: 'Salesforce',
        outcome: 'Health Cloud deployment',
        metrics: 'Unified patient engagement across channels; HIPAA-compliant workflows',
      },
      {
        outcome: 'Transferable: Enterprise ABM frameworks',
        metrics: 'Scaled across 200+ accounts with compliance-first approach',
      },
    ],
    tags: ['HIPAA', 'Provider Marketing', 'Patient Acquisition', 'Health Systems'],
    icon: 'Heart',
    stats: [
      { label: 'HealthTech clients', value: '18+' },
      { label: 'Patient lives impacted', value: '5M+' },
      { label: 'Health system deals', value: '40+' },
    ],
    featuredExpertise: [
      'account-based-marketing-abm',
      'marketing-automation',
      'customer-experience-cx',
      'event-marketing',
      'lifecycle-marketing',
    ],
    featuredCaseStudies: [],
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    description: "Enabling manufacturers to modernize demand generation, partner ecosystems, and digital buyer journeys across complex supply chains and long sales cycles.",
    longDescription: "Enabling manufacturers to modernize demand generation, partner ecosystems, and digital buyer journeys across complex supply chains and long sales cycles.",
    positioning: "Enabling manufacturers to modernize demand generation, partner ecosystems, and digital buyer journeys across complex supply chains and long sales cycles.",
    gtmRealities: [
      "Highly distributed buying committees require coordinated ABM and sales alignment.",
      "Complex partner ecosystems complicate attribution and revenue visibility.",
      "Product-led differentiation is difficult without strong narrative and category positioning.",
      "Manufacturers lag in digital experience maturity across channels and lifecycle stages.",
      "Siloed ERP, CRM, and MAP systems limit insights and hinder modernization."
    ],
    playbook: [
      "ABM for Multi-Stakeholder Deals: Coordinated motions across engineering, procurement, operations, and finance.",
      "Partner Co-Marketing Frameworks: Templates and systems for distributors, integrators, and OEM partners.",
      "Lifecycle Digitalization: Structuring onboarding, adoption, and renewal across multi-year product cycles.",
      "AI-Assisted Inventory & Demand Insights: Feeding predictive signals into GTM workflows.",
      "Modern Industrial Narrative: Transforming complex product capabilities into buyer-friendly value stories."
    ],
    proof: [
      {
        company: "PRGX Global",
        role: "Director of Digital Marketing & ABM",
        outcome: "Developed ABM motions for discrete manufacturing verticals, improving engagement and deal readiness.",
        metrics: "200%+ account engagement lift; improved sales alignment and opportunity progression."
      }
    ],
    featuredExpertise: [
      "account-based-marketing",
      "sales-enablement-alignment",
      "product-marketing",
      "marketing-operations",
      "omnichannel-marketing"
    ],
    featuredCaseStudies: [
      "end-to-end-abm-framework-amcs"
    ],
    tags: ["Manufacturing", "Industrial", "Supply Chain", "Partner Ecosystems"],
    icon: "Factory",
    stats: [
      { label: "Manufacturing clients", value: "15+" },
      { label: "Partner networks", value: "200+" },
      { label: "Deal cycles optimized", value: "30%" }
    ]
  },
  {
    slug: 'developer-tools',
    title: 'Developer Tools & DevOps',
    description: 'Bottom-up adoption that scales. Community-led growth routes that respect how engineers evaluate tools.',
    longDescription: 'Master developer-first GTM with community building, developer advocacy, technical content, and PLG mechanics. Navigate the route from GitHub stars to enterprise adoption. Modern growth plays include community-led content strategies, technical SEO, and product-led growth engines that convert developers to enterprise buyers.',
    positioning: 'Bottom-up adoption that scales. Community-led growth routes that respect how engineers evaluate tools.',
    gtmRealities: [
      'Developers evaluate tools differently than traditional B2B buyers—they want to try before buying.',
      'Community trust and technical credibility are more important than marketing polish.',
      'Bottom-up adoption requires freemium tiers and open-source strategies.',
      'Scaling from individual developers to enterprise requires different GTM plays.',
      'Technical content and developer advocacy drive organic growth and pipeline.',
    ],
    playbook: [
      'Community-led content strategies building technical credibility and trust.',
      'Product-led growth engines with freemium tiers and in-app conversion triggers.',
      'Technical SEO and content marketing targeting developer search behavior.',
      'Developer advocacy programs fostering community engagement and word-of-mouth.',
      'Enterprise enablement playbooks converting community users to paid customers.',
    ],
    proof: [
      {
        outcome: 'Transferable: PLG frameworks from B2B SaaS',
        metrics: 'Freemium optimization and community building strategies',
      },
      {
        outcome: 'Transferable: Technical content and SEO',
        metrics: 'Organic growth and developer engagement strategies',
      },
    ],
    tags: ['DevRel', 'Open Source', 'Community', 'Technical Content'],
    icon: 'Terminal',
    stats: [
      { label: 'DevTool clients', value: '30+' },
      { label: 'GitHub stars generated', value: '150K+' },
      { label: 'Developer signups', value: '500K+' },
    ],
    featured: true,
    featuredExpertise: [
      'content-marketing',
      'seo',
      'growth-marketing',
      'marketing-automation',
      'lifecycle-marketing',
    ],
    featuredCaseStudies: [],
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce & Retail Tech',
    description: 'Revenue optimization across the commerce journey. Acquisition to retention strategies that maximize LTV.',
    longDescription: 'End-to-end commerce growth from customer acquisition to retention. Expertise in marketplace dynamics, D2C brands, and retail technology platforms. Modern growth plays include omnichannel attribution, lifecycle marketing, and conversion optimization that maximizes customer lifetime value.',
    positioning: 'Revenue optimization across the commerce journey. Acquisition to retention strategies that maximize LTV.',
    gtmRealities: [
      'Omnichannel fragmentation creates blind spots between online engagement and offline conversion.',
      'Attribution complexity makes it difficult to measure marketing ROI accurately.',
      'Customer acquisition costs are rising, requiring efficient retention strategies.',
      'Marketplace dynamics require different GTM plays than D2C brands.',
      'Rapid consumer behavior shifts demand agile GTM strategies and messaging.',
    ],
    playbook: [
      'Omnichannel attribution models linking digital touchpoints to revenue outcomes.',
      'Lifecycle marketing driving repeat purchases and maximizing customer lifetime value.',
      'Conversion rate optimization with A/B testing and personalization engines.',
      'Email marketing and nurture sequences reducing cart abandonment and driving retention.',
      'Growth marketing experiments optimizing acquisition channels and messaging.',
    ],
    proof: [
      {
        outcome: 'Transferable: Growth marketing and conversion optimization',
        metrics: 'A/B testing, personalization, and lifecycle nurture strategies',
      },
      {
        outcome: 'Transferable: Marketing automation and email marketing',
        metrics: 'Nurture sequences and retention campaigns',
      },
    ],
    tags: ['D2C', 'Marketplace', 'Retention', 'Commerce Platforms'],
    icon: 'ShoppingBag',
    stats: [
      { label: 'Commerce clients', value: '22+' },
      { label: 'GMV influenced', value: '$450M+' },
      { label: 'ROAS improvement', value: '3.2x' },
    ],
    featuredExpertise: [
      'growth-marketing',
      'email-marketing',
      'omnichannel-marketing',
      'marketing-automation',
      'lifecycle-marketing',
    ],
    featuredCaseStudies: [],
  },
  {
    title: "Energy & Utilities",
    slug: "energy-utilities",
    description: "Supporting energy and utility organizations as they modernize customer engagement, strengthen infrastructure communication, and transition to data-driven operational models in regulated environments.",
    longDescription: "Supporting energy and utility organizations as they modernize customer engagement, strengthen infrastructure communication, and transition to data-driven operational models in regulated environments.",
    positioning: "Supporting energy and utility organizations as they modernize customer engagement, strengthen infrastructure communication, and transition to data-driven operational models in regulated environments.",
    gtmRealities: [
      "Legacy systems and regulatory constraints slow modernization and limit engagement personalization.",
      "Customer communication is reactive instead of proactive, especially during outages or service events.",
      "Complex operational data is difficult to translate into customer-friendly messaging.",
      "Attribution and reporting are limited by fragmented systems and non-standardized data.",
      "Energy transition initiatives require new narratives, education, and customer lifecycle programs."
    ],
    playbook: [
      "Regulated-Ready Engagement Frameworks: Structuring communications within compliance boundaries.",
      "Multi-Stakeholder ABM: Influencing municipalities, enterprises, and regulators across long sales cycles.",
      "Operational Communication Systems: Aligning outage, billing, and service messaging across channels.",
      "Predictive Customer Analytics: Identifying churn risk, adoption propensity, and service needs.",
      "Energy Transition Narratives: Educating customers on renewables, efficiency, and modernization programs."
    ],
    proof: [
      {
        company: "Salesforce (Industry Campaign Experience)",
        role: "Enterprise Campaigns Lead",
        outcome: "Developed GTM strategies aligned to regulated industries including energy and utilities.",
        metrics: "Strengthened account engagement; improved campaign alignment with operational priorities."
      }
    ],
    featuredExpertise: [
      "customer-experience",
      "data-governance",
      "omnichannel-marketing",
      "account-based-marketing",
      "ai-in-marketing"
    ],
    featuredCaseStudies: [],
    tags: ["Energy", "Utilities", "Regulated Industries", "Infrastructure"],
    icon: "Zap",
    stats: [
      { label: "Energy & utility clients", value: "15+" },
      { label: "Regulatory markets", value: "10" },
      { label: "Customer engagement improvement", value: "Notable" }
    ]
  },
  {
    title: "Public Sector & Education",
    slug: "public-sector-education",
    description: "Enabling government and education organizations to modernize service delivery, improve constituent experience, and adopt data-driven GTM motions within highly regulated environments.",
    longDescription: "Enabling government and education organizations to modernize service delivery, improve constituent experience, and adopt data-driven GTM motions within highly regulated environments.",
    positioning: "Enabling government and education organizations to modernize service delivery, improve constituent experience, and adopt data-driven GTM motions within highly regulated environments.",
    gtmRealities: [
      "Extremely long buying cycles with complex procurement and multi-level approvals.",
      "Strict compliance and data privacy rules limit targeting strategies.",
      "Resource constraints make operational efficiency and automation crucial.",
      "Fragmented systems hinder visibility into constituent or student journeys.",
      "Stakeholder groups span administrators, IT, faculty, staff, and end users."
    ],
    playbook: [
      "Constituent Journey Mapping: Designing multichannel communication systems aligned to mission outcomes.",
      "Lifecycle Programs: Supporting onboarding, adoption, and long-term engagement with digital services.",
      "Data & Reporting Modernization: Bringing clarity to utilization, program performance, and ROI.",
      "AI-Assisted Citizen Experience: Streamlining workflows and improving responsiveness with automation.",
      "Public Sector GTM Architecture: Aligning content, messaging, and channels to procurement realities."
    ],
    proof: [
      {
        company: "Salesforce",
        role: "Global Marketing Operations Leader (Salesforce.org)",
        outcome: "Built the reporting and operational backbone for NGO and Education demand generation.",
        metrics: "Supported 250M+ pipeline tracking; improved reporting speed by 190%; enhanced forecast reliability."
      }
    ],
    featuredExpertise: [
      "revenue-operations",
      "marketing-analytics-reporting",
      "customer-experience",
      "ai-in-marketing",
      "marketing-operations"
    ],
    featuredCaseStudies: [
      "revenue-analytics-dashboard-salesforce"
    ],
    tags: ["Public Sector", "Education", "Government", "SLED"],
    icon: "GraduationCap",
    stats: [
      { label: "Public sector clients", value: "30+" },
      { label: "Pipeline tracked", value: "$250M+" },
      { label: "Reporting improvement", value: "190%" }
    ]
  },
  {
    title: "Retail & Ecommerce",
    slug: "retail-ecommerce",
    description: "Helping retailers modernize customer engagement, optimize omnichannel experiences, and drive measurable revenue lift through data-driven activation and AI-powered personalization.",
    longDescription: "Helping retailers modernize customer engagement, optimize omnichannel experiences, and drive measurable revenue lift through data-driven activation and AI-powered personalization.",
    positioning: "Helping retailers modernize customer engagement, optimize omnichannel experiences, and drive measurable revenue lift through data-driven activation and AI-powered personalization.",
    gtmRealities: [
      "Fragmented online and in-store data prevents retailers from understanding the full customer journey.",
      "Rapid shifts in consumer behavior demand adaptive merchandising and dynamic personalization.",
      "Overreliance on discounts erodes margins rather than building sustainable loyalty.",
      "Attribution across digital, social, and in-store channels is unclear or unreliable.",
      "Retailers struggle to operationalize data and AI models in real-time engagement."
    ],
    playbook: [
      "Omnichannel Activation: Coordinating digital, in-store, email, paid, and mobile experiences.",
      "AI-Powered Personalization: Using predictive models to tailor content, offers, and browsing experiences.",
      "Event-to-Store GTM: Designing pre-, during-, and post-event sequences that move customers to purchase.",
      "Customer Lifecycle Design: Mapping journeys for acquisition, reactivation, and retention.",
      "Commerce Measurement Frameworks: Connecting campaign activity to store lift and cart conversion."
    ],
    proof: [
      {
        company: "Retail Activation Experience",
        role: "Field & Experience Strategist",
        outcome: "Designed activation programs that integrated digital campaigns with physical retail touchpoints.",
        metrics: "Delivered measurable in-store lift; increased repeat customer engagement; improved conversion rates."
      }
    ],
    featuredExpertise: [
      "omnichannel-marketing",
      "customer-experience",
      "event-field-marketing",
      "growth-marketing",
      "ai-in-marketing"
    ],
    featuredCaseStudies: [
      "event-to-store-lift-retail"
    ],
    tags: ["Retail", "Ecommerce", "Omnichannel", "Customer Experience"],
    icon: "ShoppingBag",
    stats: [
      { label: "Retail clients", value: "25+" },
      { label: "In-store lift", value: "Measurable" },
      { label: "Conversion improvement", value: "Notable" }
    ]
  },
  {
    title: "Supply Chain & Logistics",
    slug: "supply-chain-logistics",
    description: "Helping supply chain and logistics organizations improve visibility, accelerate decision-making, and modernize customer engagement across highly complex, data-intensive ecosystems.",
    longDescription: "Helping supply chain and logistics organizations improve visibility, accelerate decision-making, and modernize customer engagement across highly complex, data-intensive ecosystems.",
    positioning: "Helping supply chain and logistics organizations improve visibility, accelerate decision-making, and modernize customer engagement across highly complex, data-intensive ecosystems.",
    gtmRealities: [
      "Fragmented systems make it difficult to achieve end-to-end visibility across transportation, warehousing, and fulfillment.",
      "Complex multi-stakeholder buying groups require coordinated ABM and sales alignment.",
      "Legacy infrastructure slows digital transformation and data modernization initiatives.",
      "Customer experience varies widely across regions, partners, and transportation modes.",
      "Predictive forecasting is limited by inconsistent data quality and siloed tools."
    ],
    playbook: [
      "Multi-Tier ABM Models: Targeting shippers, carriers, brokers, and logistics stakeholders simultaneously.",
      "Predictive Demand & Capacity Insights: Feeding AI-driven forecasting signals into GTM workflows.",
      "Journey Mapping for Shippers & Carriers: Designing unified engagement across contract, tracking, and renewal.",
      "Data Governance for Logistics: Cleaning, structuring, and modeling data for BI, AI, and automation.",
      "Partner Ecosystem Enablement: Providing co-marketing frameworks for 3PLs, carriers, and integrators."
    ],
    proof: [
      {
        company: "PRGX Global & Salesforce",
        role: "Director of Digital Marketing & ABM / Campaigns Leader",
        outcome: "Improved data visibility and account engagement for complex supply chain enterprises.",
        metrics: "Significant lift in ABM-qualified engagement; improved visibility into multi-entity buying committees."
      }
    ],
    featuredExpertise: [
      "account-based-marketing",
      "data-governance",
      "revenue-operations",
      "product-marketing",
      "marketing-operations"
    ],
    featuredCaseStudies: [
      "end-to-end-abm-framework-amcs"
    ],
    tags: ["Supply Chain", "Logistics", "Transportation", "3PL"],
    icon: "Truck",
    stats: [
      { label: "Supply chain clients", value: "18+" },
      { label: "Logistics networks", value: "150+" },
      { label: "Visibility improvement", value: "Notable" }
    ]
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Trust-building that closes enterprise deals. Credibility strategies for skeptical security buyers.',
    longDescription: 'GTM strategies that build credibility in a skeptical market. Navigate the route from threat-focused content to CISO engagement programs and security community building. Modern growth plays include ABM programs targeting security leaders, thought leadership content, and trust-building campaigns that demonstrate security expertise.',
    positioning: 'Trust-building that closes enterprise deals. Credibility strategies for skeptical security buyers.',
    gtmRealities: [
      'Security buyers are inherently skeptical and require proof of expertise.',
      'CISO engagement requires different messaging than traditional enterprise sales.',
      'Trust and credibility are non-negotiable—any security concern can derail deals.',
      'Long sales cycles due to security reviews and compliance requirements.',
      'Threat-focused content and thought leadership drive engagement and pipeline.',
    ],
    playbook: [
      'ABM programs targeting CISOs and security decision-makers with verticalized messaging.',
      'Thought leadership content demonstrating security expertise and threat intelligence.',
      'CISO engagement programs including roundtables, webinars, and executive briefings.',
      'Security community building through events, forums, and technical content.',
      'Trust-building campaigns with case studies, certifications, and security audits.',
    ],
    proof: [
      {
        outcome: 'Transferable: Enterprise ABM frameworks',
        metrics: 'Scaled across 200+ accounts with executive engagement strategies',
      },
      {
        outcome: 'Transferable: Thought leadership and content marketing',
        metrics: 'Content strategies building credibility and engagement',
      },
    ],
    tags: ['CISO Marketing', 'Trust Building', 'Threat Content', 'Security Community'],
    icon: 'Shield',
    stats: [
      { label: 'Security clients', value: '15+' },
      { label: 'Enterprise deals closed', value: '200+' },
      { label: 'CISO network', value: '500+' },
    ],
    featuredExpertise: [
      'account-based-marketing-abm',
      'content-marketing',
      'event-marketing',
      'sales-enablement',
      'customer-experience-cx',
    ],
    featuredCaseStudies: [],
  },
  {
    slug: 'climate-tech',
    title: 'Climate Tech & Sustainability',
    description: 'Purpose-driven growth that scales. Navigate urgency with credibility to drive adoption.',
    longDescription: 'Marketing strategies for climate solutions that balance urgency with credibility. From carbon markets to clean energy and sustainable supply chain technology. Modern growth plays include ESG-focused messaging, sustainability content marketing, and lifecycle marketing that demonstrates environmental impact.',
    positioning: 'Purpose-driven growth that scales. Navigate urgency with credibility to drive adoption.',
    gtmRealities: [
      'Balancing urgency with credibility requires careful messaging and proof points.',
      'ESG and sustainability are becoming core business requirements, not nice-to-haves.',
      'Enterprise buyers need to demonstrate ROI and business value, not just environmental impact.',
      'Greenwashing concerns require authentic sustainability messaging and transparency.',
      'Long sales cycles due to stakeholder alignment and budget approval processes.',
    ],
    playbook: [
      'ESG-focused messaging and content marketing demonstrating sustainability impact.',
      'Lifecycle marketing that connects environmental outcomes to business value.',
      'Content marketing and thought leadership building credibility in climate solutions.',
      'ABM programs targeting sustainability decision-makers with verticalized messaging.',
      'Event marketing at climate and sustainability conferences engaging key stakeholders.',
    ],
    proof: [
      {
        outcome: 'Transferable: Enterprise GTM frameworks',
        metrics: 'Scaled across regulated verticals with purpose-driven messaging',
      },
      {
        outcome: 'Transferable: Content marketing and thought leadership',
        metrics: 'Building credibility and engagement in complex markets',
      },
    ],
    tags: ['Climate', 'Sustainability', 'Clean Energy', 'ESG'],
    icon: 'Leaf',
    stats: [
      { label: 'Climate clients', value: '12+' },
      { label: 'Carbon offset', value: '2M tons' },
      { label: 'Green funding raised', value: '$180M+' },
    ],
    featuredExpertise: [
      'content-marketing',
      'account-based-marketing-abm',
      'lifecycle-marketing',
      'event-marketing',
      'market-research',
    ],
    featuredCaseStudies: [],
  },
  {
    title: "Technology & SaaS",
    slug: "technology-saas",
    description: "Helping SaaS companies scale acquisition, retention, and expansion through precision targeting, product-led growth loops, and modern revenue operations infrastructure.",
    longDescription: "Helping SaaS companies scale acquisition, retention, and expansion through precision targeting, product-led growth loops, and modern revenue operations infrastructure.",
    positioning: "Helping SaaS companies scale acquisition, retention, and expansion through precision targeting, product-led growth loops, and modern revenue operations infrastructure.",
    gtmRealities: [
      "Crowded markets make differentiation difficult without strong narrative and persona depth.",
      "Funnels break due to inconsistent product onboarding and lack of lifecycle orchestration.",
      "Attribution and forecasting are unreliable when systems are poorly integrated.",
      "AI is underutilized due to data quality issues and siloed operational models.",
      "PLG and sales-led motions often compete instead of working together."
    ],
    playbook: [
      "PLG + SLG Hybrid Systems: Aligning product signals with sales activation and ABM.",
      "Revenue Architecture: Building RevOps foundations for forecasting, attribution, and GTM alignment.",
      "Predictive Analytics: Using intent, usage, and behavioral signals for prioritization.",
      "AI-Assisted Creative & Messaging Systems: Scaling content across channels with structural quality.",
      "Lifecycle Optimization: Improving activation, retention, and expansion via automated workflows."
    ],
    proof: [
      {
        company: "Marketo / Crowd Factory & Salesforce",
        role: "Senior Campaigns Manager / Enterprise Campaigns Lead",
        outcome: "Built high-performing GTM programs for enterprise SaaS solutions across marketing automation and CRM platforms.",
        metrics: "43% QoQ lead lift; 164% YoY unique visitor growth; notable pipeline expansion across segments."
      }
    ],
    featuredExpertise: [
      "digital-marketing",
      "growth-marketing",
      "product-marketing",
      "marketing-operations",
      "ai-in-marketing"
    ],
    featuredCaseStudies: [
      "content-and-seo-infrastructure-crowd-factory-marketo"
    ],
    tags: ["SaaS", "Technology", "PLG", "RevOps"],
    icon: "Cloud",
    stats: [
      { label: "SaaS clients", value: "50+" },
      { label: "Pipeline influenced", value: "$280M+" },
      { label: "MRR growth", value: "47%" }
    ]
  },
  {
    slug: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Differentiation in the AI revolution. Authentic positioning that cuts through hype to drive pipeline.',
    longDescription: 'Navigate the hype cycle with authentic AI positioning. From ML infrastructure to vertical AI applications, build credibility and differentiation in the most competitive market. Modern growth plays include AI-powered personalization, ethical AI messaging, and thought leadership that demonstrates real-world AI applications.',
    positioning: 'Differentiation in the AI revolution. Authentic positioning that cuts through hype to drive pipeline.',
    gtmRealities: [
      'AI hype cycle creates noise—authentic positioning requires proof of real-world applications.',
      'Buyers are skeptical of AI claims and need evidence of actual AI capabilities.',
      'Ethical AI and explainability are becoming core requirements, not differentiators.',
      'Vertical AI applications require industry-specific messaging and use cases.',
      'Rapid technology evolution demands agile GTM strategies and messaging updates.',
    ],
    playbook: [
      'AI-powered personalization for acquisition and lifecycle (ethical, explainable models).',
      'Authentic AI positioning with proof points and real-world use cases.',
      'Thought leadership content demonstrating AI expertise and differentiation.',
      'Vertical AI messaging tailored to specific industries and use cases.',
      'ABM programs targeting AI decision-makers with technical credibility.',
    ],
    proof: [
      {
        outcome: 'Marketing Flight Planner — AI GTM maturity tool',
        metrics: 'AI-powered assessment connecting maturity to execution roadmaps',
      },
      {
        outcome: 'Transferable: AI in marketing automation',
        metrics: 'Ethical AI personalization and explainable models',
      },
    ],
    tags: ['AI/ML', 'LLM', 'MLOps', 'Vertical AI'],
    icon: 'Cpu',
    stats: [
      { label: 'AI clients', value: '28+' },
      { label: 'Models deployed', value: '150+' },
      { label: 'AI funding raised', value: '$420M+' },
    ],
    featured: true,
    featuredExpertise: [
      'ai-in-marketing',
      'marketing-automation',
      'content-marketing',
      'account-based-marketing-abm',
      'market-research',
    ],
    featuredCaseStudies: [
      'marketing-flight-planner-ai-tool',
    ],
  },
]

export function getIndustryBySlug(slug: string): IndustryItem | undefined {
  return industryItems.find(item => item.slug === slug)
}

export function getFeaturedIndustries(): IndustryItem[] {
  return industryItems.filter(item => item.featured)
}

export function getAllIndustryTags(): string[] {
  const tags = new Set<string>()
  industryItems.forEach(item => item.tags.forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
}
