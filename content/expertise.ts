import { ExpertiseItem } from '@/lib/types'

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Account-Based Marketing (ABM)",
    slug: "account-based-marketing",
    positioning: "Designing precision GTM systems focused on winning high-value accounts through coordinated sales + marketing plays, multithreaded engagement, and intelligence-driven personalization at scale.",
    challenges: [
      "Traditional demand programs focus on volume, not strategic account penetration, leading to poor enterprise impact.",
      "Sales and Marketing often lack alignment on target accounts, roles, buying committees, and success definitions.",
      "Orchestration across channels is inconsistent, resulting in disjointed touchpoints and low conversion.",
      "ABM programs stall due to lack of content personalization, insufficient account intelligence, or weak data foundations.",
      "Measurement defaults to vanity metrics instead of focusing on MQAs, progression, influence, and pipeline impact."
    ],
    modern_plays: [
      "ABM Operating System: Establishing tiering models, engagement rules, ICP filters, and unified account selection.",
      "Multithreaded Engagement: Designing plays that reach champions, influencers, mobilizers, and economic buyers.",
      "Personalization Infrastructure: Creating modular content, dynamic messaging, and persona-based activation kits.",
      "Account Intelligence Pipelines: Using intent, technographics, product usage, and CRM signals to inform sequences.",
      "Full-Funnel ABX Orchestration: Coordinating sales, SDR, marketing, paid, and executive alignment across the deal cycle."
    ],
    proof: {
      company: "PRGX Global",
      role: "Director of Digital Marketing & ABM",
      outcome: "Launched the company's first unified ABM system connecting Demandbase, CRM, MAP, and analytics for enterprise targeting.",
      metrics: "87% YoY pipeline growth; 180% lift in MQL→SQL conversion; 200% increase in strategic account engagement."
    },
    relevant_expertise_slugs: [
      "demand-generation",
      "sales-enablement-alignment",
      "marketing-operations",
      "ai-in-marketing",
      "digital-marketing"
    ],
    relevant_case_study_slugs: [
      "abm-system-launch-prgx",
      "enterprise-abm-activation-red-hat",
      "end-to-end-abm-framework-amcs"
    ]
  },
  {
    slug: 'account-based-marketing-abm',
    title: 'Account-Based Marketing (ABM)',
    description: 'ABM frameworks that scale. Verticalized plays, account selection, and multi-channel orchestration that deliver $1.2M+ pipeline in 90 days.',
    pillar: 'strategy-insights',
    pillarLabel: 'Strategy & Insights',
    tags: ['ABM', 'Account-Based', '6Sense', 'Demandbase'],
    icon: 'Building2',
    featured: true,
    order: 1,
  },
  {
    title: "Attribution & Measurement",
    slug: "attribution-and-measurement",
    positioning: "Building accurate, trustworthy measurement systems that reveal which channels, messages, and plays actually drive revenue—enabling better decisions, smarter budgets, and predictive insights.",
    challenges: [
      "Organizations rely on last-touch or incomplete attribution models that distort investment decisions.",
      "Marketing and Sales operate on inconsistent definitions of pipeline, stages, and contribution.",
      "Data quality issues create unreliable dashboards and undermine stakeholder trust.",
      "Manual reporting cycles slow down insight generation and strategic decision-making.",
      "Attribution does not reflect real buying behavior across multi-touch, multi-channel journeys."
    ],
    modern_plays: [
      "Multi-Touch Attribution (MTA): Designing models that reflect real-world GTM motions across channels.",
      "Pipeline & Revenue Alignment: Connecting marketing activity directly to opportunity creation and progression.",
      "Automated Reporting Pipelines: Reducing manual work and ensuring consistency across BI layers.",
      "Predictive Measurement: Using machine learning to identify leading indicators of pipeline and churn.",
      "Executive Reporting Systems: Designing dashboards that answer 'so what?' rather than show vanity metrics."
    ],
    proof: {
      company: "Salesforce",
      role: "Global Marketing Operations Leader",
      outcome: "Built and maintained the DemandGen scorecard and analytics infrastructure powering global NGO and Education GTM.",
      metrics: "Cut reporting cycles by 190%; improved CRM data quality by ~85%; materially increased SQL generation and pipeline contribution."
    },
    relevant_expertise_slugs: [
      "marketing-analytics-reporting",
      "revenue-operations",
      "marketing-operations",
      "data-governance",
      "ai-in-marketing"
    ],
    relevant_case_study_slugs: [
      "revenue-analytics-dashboard-salesforce"
    ]
  },
  {
    title: "BI & Data Engineering (GTM-Focused)",
    slug: "bi-data-engineering",
    positioning: "Designing and maintaining the data pipelines, models, and BI infrastructure required to power accurate GTM reporting, predictive insights, and AI-driven decision-making.",
    challenges: [
      "Data is scattered across CRM, MAP, analytics, finance systems, and spreadsheets—making it difficult to unify.",
      "Poor data quality and inconsistent schemas lead to unreliable dashboards and reporting drift.",
      "Legacy pipelines require manual intervention and often break during GTM or system changes.",
      "Teams make decisions from descriptive dashboards instead of predictive or diagnostic insights.",
      "AI and automation cannot operate effectively without clean, well-modeled, high-signal data."
    ],
    modern_plays: [
      "Data Pipeline Architecture: Designing stable data flows between CRM, MAP, analytics tools, and warehouses.",
      "Semantic Modeling: Creating business-ready data layers that unify KPIs, definitions, and GTM logic.",
      "Automated QA Frameworks: Implementing validation rules to ensure data trustworthiness.",
      "Predictive Signal Engineering: Generating intent, risk, and propensity scores for GTM teams.",
      "BI Dashboard Systems: Building executive and field dashboards tied to pipeline, performance, and forecasts."
    ],
    proof: {
      company: "Salesforce",
      role: "Global Marketing Operations Leader",
      outcome: "Managed BI and data pipelines supporting the DemandGen scorecard, Oracle SQL validation, and downstream Tableau reporting.",
      metrics: "Reduced BI processing from days to hours; improved data trust significantly; enabled 76% YoY pipeline lift using better insights."
    },
    relevant_expertise_slugs: [
      "marketing-analytics-reporting",
      "data-governance",
      "revenue-operations",
      "ai-in-marketing",
      "marketing-operations"
    ],
    relevant_case_study_slugs: [
      "revenue-analytics-dashboard-salesforce"
    ]
  },
  {
    title: "AI in Marketing",
    slug: "ai-in-marketing",
    positioning: "Integrating AI, automation, and agentic systems into the marketing engine to dramatically improve speed, personalization, insight, and operational efficiency.",
    challenges: [
      "Teams adopt AI tools without governance, risking accuracy, compliance, and brand integrity.",
      "Legacy MarTech stacks lack the data quality needed for effective AI and predictive modeling.",
      "Organizations struggle to scale AI usage beyond experimentation into core workflows.",
      "Content quality declines when AI is used without strategic guardrails or editorial control.",
      "Lack of understanding of AI's impact on discovery, search, and customer expectations."
    ],
    modern_plays: [
      "Agentic Workflow Automation: Deploying task-oriented AI agents to reduce manual workload across marketing ops and campaign execution.",
      "AI Personalization Engines: Using behavioral and firmographic data to tailor messaging across channels.",
      "Responsible AI Governance: Implementing standards, review layers, and guardrails to ensure safe usage.",
      "AI-Accelerated Content Ops: Rapid message testing, creative iteration, and structured content generation.",
      "GEO (Generative Engine Optimization): Optimizing content for LLM-based discovery and answer engines."
    ],
    proof: {
      company: "PRGX Global",
      role: "Director of Digital Marketing & ABM",
      outcome: "Implemented AI-based messaging and creative testing frameworks across the funnel.",
      metrics: "Increased conversion rates by ~40%; reduced cost-per-acquisition by ~25%."
    },
    relevant_expertise_slugs: [
      "martech-optimization",
      "marketing-operations",
      "marketing-analytics-reporting",
      "content-marketing",
      "search-engine-optimization"
    ],
    relevant_case_study_slugs: []
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    positioning: "Building authoritative, structured content systems that fuel both human audiences and AI discovery engines, positioning the brand as the definitive voice in its category.",
    challenges: [
      "Content is created reactively instead of operating from a strategic, structured content architecture.",
      "Difficulty mapping content to buyer stages, personas, and revenue outcomes.",
      "Teams lack frameworks for consistent tone, quality, and message hierarchy across channels.",
      "Short-lived content limits long-term compounding organic value and authority.",
      "Content often underperforms in AI-driven search environments due to lack of structure and metadata."
    ],
    modern_plays: [
      "Content System Design: Building repeatable templates, taxonomies, and editorial operations that scale.",
      "Topic Clustering: Creating deep pillar pages and content hubs aligned to audience intent and category authority.",
      "AI-Assisted Production: Using AI for ideation, outlines, variants, and rapid iteration while maintaining brand control.",
      "Thought Leadership Engines: Developing executive narratives and POVs that define the market conversation.",
      "Content for AI Optimization (AEO/GEO): Structuring content so generative engines can cite, summarize, and elevate it."
    ],
    proof: {
      company: "Crowd Factory / Marketo",
      role: "Senior Manager, Enterprise Campaigns",
      outcome: "Built a content and SEO infrastructure that materially improved organic visibility and campaign performance.",
      metrics: "164% YoY increase in unique visitors; 43% QoQ increase in net new leads from content-driven programs."
    },
    relevant_expertise_slugs: [
      "search-engine-optimization",
      "digital-marketing",
      "demand-generation",
      "ai-in-marketing",
      "marketing-analytics-reporting"
    ],
    relevant_case_study_slugs: [
      "content-and-seo-infrastructure-crowd-factory-marketo"
    ]
  },
  {
    title: "Content Strategy Systems",
    slug: "content-strategy-systems",
    positioning: "Building scalable, structured content ecosystems—frameworks, taxonomies, templates, and workflows—that power consistent storytelling, AI discoverability, and multi-channel execution.",
    challenges: [
      "Content is created ad hoc without templates, taxonomies, or a system for scale.",
      "Teams struggle to maintain consistency across long-form, short-form, campaigns, and product narratives.",
      "Content is not structured for AI retrieval, generative summarization, or semantic search.",
      "Editorial workflows are manual, inconsistent, and difficult to measure.",
      "Organizations lack a single source of truth for messaging, frameworks, and reusable assets."
    ],
    modern_plays: [
      "Content Architecture: Designing content models, metadata, and structured schemas for scale.",
      "Modular Content Systems: Creating components that can be reused across campaigns and channels.",
      "Editorial Operations: Establishing workflows, review stages, and publishing cadences.",
      "Narrative Framework Development: Building core story frameworks spanning brand, product, and industry POVs.",
      "AI-Centric Structuring: Formatting content so LLMs, generative engines, and semantic search can index and surface it."
    ],
    proof: {
      company: "Crowd Factory / Marketo",
      role: "Senior Manager, Enterprise Campaigns",
      outcome: "Built foundational content infrastructure that unified SEO, campaigns, and Sales Cloud acquisition programs.",
      metrics: "164% YoY growth in unique visitors; improved lead quality and content-driven SQL contribution."
    },
    relevant_expertise_slugs: [
      "content-marketing",
      "search-engine-optimization",
      "digital-marketing",
      "ai-in-marketing",
      "brand-strategy"
    ],
    relevant_case_study_slugs: [
      "content-and-seo-infrastructure-crowd-factory-marketo"
    ]
  },
  {
    title: "Channel Partner Marketing",
    slug: "channel-partner-marketing",
    positioning: "Equipping, enabling, and activating partners through co-marketing, joint campaigns, and shared GTM motions that expand market reach and accelerate revenue.",
    challenges: [
      "Partners lack clear messaging, positioning, and enablement assets aligned to the core product.",
      "Co-marketing efforts are inconsistent, underfunded, or disconnected from pipeline goals.",
      "Channel programs often lack shared metrics or visibility into partner-sourced pipeline.",
      "Resource constraints limit the ability to support many partners with scalable programs.",
      "Partners struggle to execute high-quality demand plays without structured templates or guidance."
    ],
    modern_plays: [
      "Co-Marketing Playbooks: Templates for joint campaigns, landing pages, and shared content assets.",
      "Partner Enablement Kits: Messaging, competitive positioning, demo flows, and battlecards.",
      "Tiered Partner Programs: Prioritizing support and funding based on strategic value and performance.",
      "Pipeline & Attribution Systems: Tracking partner-sourced and partner-influenced revenue accurately.",
      "Field + Partner Motion Alignment: Coordinating regional teams with partner activation plans."
    ],
    proof: {
      company: "Salesforce",
      role: "Enterprise Campaigns Lead",
      outcome: "Enabled partner-aligned Sales Cloud campaigns with shared messaging and GTM assets.",
      metrics: "Increased partner engagement; improved co-marketing pipeline contribution across enterprise segments."
    },
    relevant_expertise_slugs: [
      "product-marketing",
      "sales-enablement-alignment",
      "demand-generation",
      "content-marketing",
      "revenue-operations"
    ],
    relevant_case_study_slugs: [
      "enterprise-abm-activation-red-hat"
    ]
  },
  {
    title: "Customer Experience (CX)",
    slug: "customer-experience",
    positioning: "Designing seamless, end-to-end customer journeys that maximize retention, loyalty, and long-term revenue through experience-led growth.",
    challenges: [
      "Fragmented systems make it impossible to deliver a unified customer journey across teams and channels.",
      "Customer pain points are detected too late due to lack of proactive health, sentiment, and behavior signals.",
      "Marketing, Sales, and Customer Success operate in silos, limiting shared accountability for NRR.",
      "Organizations struggle to connect CX initiatives directly to retention and revenue impact.",
      "Support experiences are inconsistent and overly manual, leading to high operational cost."
    ],
    modern_plays: [
      "Unified Journey Mapping: Designing experience flows across onboarding, adoption, retention, and advocacy.",
      "Experience Scorecards: Implementing quantitative CX frameworks tied to NRR and churn prediction.",
      "Personalized CX Programs: Tailoring communications based on product usage, lifecycle stage, and customer intent.",
      "CX Automation: Using AI agents and workflow automation to streamline support and reduce response times.",
      "Voice of Customer Systems: Integrating feedback loops into product, sales, and marketing decisions."
    ],
    proof: {
      company: "Salesforce & Red Hat",
      role: "Enterprise Campaigns Leader / Senior Principal ABM Manager",
      outcome: "Built experience-led programs that improved renewal and expansion outcomes across enterprise accounts.",
      metrics: "Delivered 25+ point lift in NRR; reduced churn by ~40% across targeted segments."
    },
    relevant_expertise_slugs: [
      "lifecycle-marketing",
      "revenue-operations",
      "ai-in-marketing",
      "customer-marketing",
      "data-analytics-reporting"
    ],
    relevant_case_study_slugs: [
      "enterprise-abm-activation-red-hat"
    ]
  },
  {
    slug: 'customer-experience-cx',
    title: 'Customer Experience (CX)',
    description: 'CX strategies that reduce churn and drive expansion. Journey mapping, touchpoint optimization, and experience measurement.',
    pillar: 'strategy-insights',
    pillarLabel: 'Strategy & Insights',
    tags: ['CX', 'Customer Experience', 'Journey'],
    icon: 'Heart',
    order: 2,
  },
  {
    title: "Customer Marketing",
    slug: "customer-marketing",
    positioning: "Deepening customer value, accelerating expansion, and strengthening loyalty through targeted programs that activate, educate, and mobilize existing customers.",
    challenges: [
      "Customer programs focus too heavily on acquisition while neglecting post-sale engagement.",
      "Organizations struggle to operationalize advocacy, references, and community at scale.",
      "Lack of structured programs for onboarding, enablement, and expansion reduces product adoption.",
      "Customer health signals are fragmented across tools, making proactive engagement difficult.",
      "Marketing and Customer Success lack shared goals, metrics, and lifecycle playbooks."
    ],
    modern_plays: [
      "Customer Lifecycle Programs: Structured motions for onboarding, adoption, renewal, and expansion.",
      "Advocacy & Community Building: Creating scalable reference, review, and ambassador programs.",
      "Expansion Marketing: Targeted campaigns to influence cross-sell and upsell opportunities.",
      "Voice of Customer Pipelines: Integrating feedback, NPS, and intent signals into product and GTM loops.",
      "Customer Education Systems: Always-on content experiences that drive self-service learning and adoption."
    ],
    proof: {
      company: "Red Hat",
      role: "Senior Principal Program Manager, ABM",
      outcome: "Helped architect global customer activation and retention programs used by regional teams.",
      metrics: "Supported 25+ point improvement in NRR and increased upsell engagement by ~40%."
    },
    relevant_expertise_slugs: [
      "lifecycle-marketing",
      "customer-experience",
      "revenue-operations",
      "ai-in-marketing",
      "content-marketing"
    ],
    relevant_case_study_slugs: [
      "enterprise-abm-activation-red-hat"
    ]
  },
  {
    title: "Data Governance",
    slug: "data-governance",
    positioning: "Ensuring GTM, Sales, and Marketing systems operate on trusted, high-quality data that fuels accurate reporting, effective automation, and reliable AI-driven decisions.",
    challenges: [
      "Duplicate, incomplete, or inaccurate CRM/MAP data undermines forecasting and segmentation.",
      "Multiple teams operate without shared definitions, standards, or data quality rules.",
      "Lack of governance leads to broken automation, unreliable attribution, and reporting drift.",
      "Legacy integrations and undocumented processes create compounding technical debt.",
      "AI models produce unreliable insights when foundational data is poor or inconsistent."
    ],
    modern_plays: [
      "Data Standards & Taxonomies: Defining field structures, naming conventions, and validation rules.",
      "Data Quality Monitoring: Automated checks and remediation workflows for ongoing cleanliness.",
      "Governed Integrations: Ensuring stable, documented connections between CRM, MAP, and BI layers.",
      "Golden Record Architecture: Consolidating disparate sources into unified, high-trust customer profiles.",
      "AI Readiness Programs: Preparing systems for predictive and generative AI by improving signal quality."
    ],
    proof: {
      company: "Salesforce",
      role: "Global Marketing Operations Leader",
      outcome: "Led data integrity and validation processes for global demand gen scorecards and revenue reporting.",
      metrics: "Improved CRM data quality by up to 85%; reduced reporting errors dramatically; accelerated update cycles by 190%."
    },
    relevant_expertise_slugs: [
      "marketing-operations",
      "revenue-operations",
      "marketing-analytics-reporting",
      "ai-in-marketing",
      "martech-optimization"
    ],
    relevant_case_study_slugs: [
      "revenue-analytics-dashboard-salesforce"
    ]
  },
  {
    title: "Demand Generation",
    slug: "demand-generation",
    positioning: "Building predictable, scalable pipeline through orchestrated multi-channel programs, precision targeting, and data-backed optimization across the full funnel.",
    challenges: [
      "Inconsistent pipeline creation due to fragmented campaigns and lack of structured full-funnel design.",
      "Poor lead quality resulting from misaligned targeting and insufficient persona/buying committee insight.",
      "Overreliance on volume-based metrics (MQLs) without visibility into actual revenue contribution.",
      "Lack of systems and automation needed to scale programs efficiently across regions and segments.",
      "Difficulty integrating paid, organic, and ABM plays into one coherent pipeline engine."
    ],
    modern_plays: [
      "Pipeline Architecture: Designing multi-stage funnel programs aligned to revenue stages and conversion milestones.",
      "Persona & Segment Precision: Targeting ideal accounts/users with differentiated messaging and channel sequencing.",
      "Integrated Paid Media Systems: Coordinating social, search, display, and retargeting aligned to ICP intent signals.",
      "Nurture Maturity Models: Building automated lifecycle, behavior-based, and persona-based nurture flows.",
      "Predictive Pipeline Modeling: Using intent, engagement velocity, and scoring models to prioritize high-propensity accounts."
    ],
    proof: {
      company: "PRGX Global",
      role: "Director of Digital Marketing & ABM",
      outcome: "Architected coordinated demand programs integrating ABM, paid channels, and nurture frameworks to lift pipeline creation.",
      metrics: "87% YoY pipeline growth | 180% MQL-to-SQL lift | 200% YoY account engagement lift."
    },
    relevant_expertise_slugs: [
      "account-based-marketing",
      "marketing-operations",
      "marketing-analytics-reporting",
      "search-engine-optimization",
      "revenue-operations"
    ],
    relevant_case_study_slugs: [
      "abm-system-launch-prgx",
      "end-to-end-abm-framework-amcs"
    ]
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    positioning: "Modern digital marketing blends creative narrative, data-driven optimization, and orchestration across paid, organic, social, and web channels to generate measurable growth and deepen customer engagement.",
    challenges: [
      "Fragmented channel execution without a unified strategy tied to funnel stages and revenue outcomes.",
      "Difficulty scaling consistent messaging and campaigns across web, paid media, social, and email.",
      "Inability to measure true ROI of digital channels due to incomplete attribution and poor data quality.",
      "Rising customer acquisition costs (CAC) driven by saturated channels and competition.",
      "Struggle to maintain brand consistency and content velocity across fast-moving digital surfaces."
    ],
    modern_plays: [
      "Full-Funnel Digital Architecture: Orchestrating awareness, engagement, and conversion programs that meaningfully connect to pipeline.",
      "Multi-Channel Activation: Coordinated paid, social, SEO, and email programs aligned to ICP behavior and intent signals.",
      "Conversion Rate Optimization (CRO): Iterative testing of landing pages, messaging, and creative to lift engagement and conversions.",
      "AI-Enhanced Creative Ops: Using AI tools for message testing, creative iteration, and targeted personalization.",
      "Performance Measurement: Building dashboards with channel-level attribution tied to revenue rather than vanity metrics."
    ],
    proof: {
      company: "Embarcadero Technologies",
      role: "Global Online Marketing Manager",
      outcome: "Established the company's global digital presence with foundational SEO and social systems.",
      metrics: "Achieved 300% increase in web traffic; delivered sustained improvements to keyword visibility and organic acquisition."
    },
    relevant_expertise_slugs: [
      "search-engine-optimization",
      "demand-generation",
      "content-marketing",
      "marketing-automation",
      "marketing-analytics-reporting"
    ],
    relevant_case_study_slugs: [
      "content-and-seo-infrastructure-crowd-factory-marketo"
    ]
  },
  {
    slug: 'email-marketing',
    title: 'Email Marketing & Nurture',
    description: 'Email programs that convert. Lifecycle sequences, segmentation, and automation that move buyers through the funnel.',
    pillar: 'content-engagement',
    pillarLabel: 'Content & Engagement',
    tags: ['Email', 'Nurture', 'Automation'],
    icon: 'Mail',
    featured: true,
    order: 2,
  },
  {
    slug: 'event-marketing',
    title: 'Event Marketing & Webinars',
    description: 'Events that generate pipeline. Virtual and in-person event programs, webinars, and field marketing that drive qualified leads.',
    pillar: 'demand-growth',
    pillarLabel: 'Demand & Growth',
    tags: ['Events', 'Webinars', 'Field Marketing'],
    icon: 'Calendar',
    order: 5,
  },
  {
    title: "Event Marketing & Field Marketing",
    slug: "event-field-marketing",
    positioning: "Creating high-impact in-person and virtual experiences that build relationships, accelerate deals, and drive measurable revenue through targeted field and event activation.",
    challenges: [
      "Events are executed without clear ICP, account targeting, or pipeline goals.",
      "Sales, field, and marketing lack coordinated pre-, during-, and post-event engagement workflows.",
      "Lead capture systems and follow-up processes are inconsistent or entirely manual.",
      "Event ROI is difficult to measure due to weak attribution and fragmented data.",
      "Field teams lack structured playbooks for regional activation and account engagement."
    ],
    modern_plays: [
      "Event-to-Pipeline Systems: Coordinating targeted outreach before and after events to drive deal acceleration.",
      "Experience Design: Creating immersive, message-aligned interactions that deepen customer understanding.",
      "Field Activation Kits: Regional playbooks, talk tracks, and ABM-style guides for account outreach.",
      "Event Attribution Frameworks: Measuring influenced pipeline, meetings booked, and acceleration impact.",
      "Retail & Activation Modeling: Structuring event programs that directly drive on-site or post-event conversion."
    ],
    proof: {
      company: "Salesforce & Retail Activation Work",
      role: "Campaigns Lead / Field Activation Strategist",
      outcome: "Designed multi-stage pre- and post-event motions that significantly lifted pipeline and on-site conversions.",
      metrics: "Achieved measurable in-store lift; improved SQL production from field campaigns; strengthened enterprise account engagement."
    },
    relevant_expertise_slugs: [
      "account-based-marketing",
      "sales-enablement-alignment",
      "omnichannel-marketing",
      "demand-generation",
      "customer-experience"
    ],
    relevant_case_study_slugs: [
      "event-to-store-lift-retail"
    ]
  },
  {
    title: "Growth Marketing",
    slug: "growth-marketing",
    positioning: "Driving accelerated, experimental, data-driven growth across acquisition, activation, retention, and expansion using rapid iteration and measurable optimization frameworks.",
    challenges: [
      "Organizations lack experimentation cultures, slowing learning cycles and optimization speed.",
      "Growth programs often operate without clear hypotheses, KPIs, or instrumentation.",
      "Teams focus too heavily on acquisition and neglect activation, retention, and expansion.",
      "Fragmented data makes it difficult to identify bottlenecks or leading indicators.",
      "Creative and messaging decisions are guided by intuition rather than structured testing."
    ],
    modern_plays: [
      "Experimentation Systems: Creating hypotheses, control groups, and analytics pipelines for rapid testing.",
      "Full-Funnel Growth Loops: Designing compounding loops across acquisition, retention, and advocacy.",
      "Activation Optimization: Improving onboarding flows, value time, and early product engagement.",
      "Retention-First Growth: Building programs that increase LTV and reduce churn as primary drivers.",
      "Signal-Driven Personalization: Using intent, product usage, and behavioral signals to customize journeys."
    ],
    proof: {
      company: "PRGX Global & Salesforce",
      role: "Director of Digital Marketing & ABM / Global Marketing Ops Leader",
      outcome: "Introduced structured experimentation across messaging, sequencing, channels, and workflows.",
      metrics: "Lifted conversion rates by ~40%; increased SQL volume by 65%; improved multi-touch campaign efficiency."
    },
    relevant_expertise_slugs: [
      "demand-generation",
      "lifecycle-marketing",
      "customer-marketing",
      "digital-marketing",
      "ai-in-marketing"
    ],
    relevant_case_study_slugs: [
      "abm-system-launch-prgx"
    ]
  },
  {
    title: "Lifecycle Marketing",
    slug: "lifecycle-marketing",
    positioning: "Designing and orchestrating end-to-end customer journeys that drive acquisition, onboarding, product adoption, expansion, and retention with measurable impact on NRR and churn.",
    challenges: [
      "Over-focus on top-of-funnel acquisition while neglecting onboarding, adoption, and renewal motions.",
      "Fragmented systems and teams prevent a single, continuous view of the customer lifecycle.",
      "Inconsistent messaging and value delivery across customer stages, leading to stalled adoption and churn.",
      "Difficulty measuring lifecycle impact on Net Revenue Retention (NRR) and expansion pipeline.",
      "Lack of clear ownership and playbooks for post-sale engagement across Marketing, CS, and Sales."
    ],
    modern_plays: [
      "Journey Architecture: Mapping and instrumenting end-to-end lifecycle stages from first touch through renewal and expansion.",
      "Behavioral Nurture Systems: Trigger-based communications driven by product usage, engagement, and health scores.",
      "Expansion & Renewal Playbooks: Aligning Marketing, CS, and Sales around structured renewal and expansion motions.",
      "Lifecycle Health KPIs: Defining and tracking leading indicators for NRR, churn, product adoption, and advocacy.",
      "AI-Assisted Personalization: Using AI to surface next-best actions, content, and offers at each lifecycle stage."
    ],
    proof: {
      company: "Red Hat",
      role: "Senior Principal Program Manager, ABM",
      outcome: "Designed lifecycle-focused ABM and customer marketing programs to drive retention and expansion across global enterprise accounts.",
      metrics: "Increased Net Revenue Retention (NRR) by 25+ percentage points and reduced churn by ~40% across targeted segments."
    },
    relevant_expertise_slugs: [
      "customer-experience",
      "customer-marketing",
      "revenue-operations",
      "marketing-analytics-reporting",
      "ai-in-marketing"
    ],
    relevant_case_study_slugs: [
      "enterprise-abm-activation-red-hat"
    ]
  },
  {
    slug: 'marketing-automation',
    title: 'Marketing Automation',
    description: 'Marketing automation platforms that scale. Marketo, Eloqua, Pardot, and HubSpot implementations that automate the revenue journey.',
    pillar: 'systems-operations',
    pillarLabel: 'Systems & Operations',
    tags: ['Marketo', 'Eloqua', 'Pardot', 'HubSpot'],
    icon: 'Settings2',
    featured: true,
    order: 2,
  },
  {
    title: "Marketing Analytics & Reporting",
    slug: "marketing-analytics-reporting",
    positioning: "Turning disconnected data into a unified intelligence layer that gives leaders real-time visibility into pipeline, performance, and ROI across every GTM motion.",
    challenges: [
      "Dashboards are fragmented, focused on vanity metrics, and fail to answer core revenue questions.",
      "Reporting cycles are slow and manual, causing leadership to operate on stale data.",
      "Inconsistent definitions for KPIs across teams make performance comparisons unreliable.",
      "Poor data quality in CRM and MAP systems undermines trust in any analytics initiative.",
      "Analytics outputs are descriptive, not prescriptive—lots of charts, very few decisions."
    ],
    modern_plays: [
      "Executive-Grade Dashboards: Designing concise, role-based views for CMOs, CROs, and regional leaders.",
      "Standardized KPI Frameworks: Defining shared metrics, calculations, and data dictionaries across GTM.",
      "Automated Data Pipelines: Replacing spreadsheet-based workflows with governed BI integrations.",
      "Predictive & Diagnostic Analytics: Moving from rear-view reporting to forward-looking models and alerts.",
      "Embedded Insights: Surfacing key signals directly inside CRM and workflow tools, not just BI tools."
    ],
    proof: {
      company: "Salesforce",
      role: "Global Marketing Operations Leader",
      outcome: "Replaced manual demand generation scorecards with dynamic Tableau/Einstien dashboards for global NGO and Education teams.",
      metrics: "Reduced reporting lead time by 190% (4 days to 2 hours); increased SQLs by 65%; supported 76% YoY pipeline growth in covered segments."
    },
    relevant_expertise_slugs: [
      "revenue-operations",
      "marketing-operations",
      "data-analytics-reporting",
      "martech-optimization",
      "ai-in-marketing"
    ],
    relevant_case_study_slugs: [
      "revenue-analytics-dashboard-salesforce"
    ]
  },
  {
    title: "Marketing Operations",
    slug: "marketing-operations",
    positioning: "Building the operational backbone of modern marketing: data, processes, platforms, and governance that enable scalable, predictable revenue execution.",
    challenges: [
      "Siloed tools and disconnected data sources make it impossible to get a single source of truth.",
      "Manual reporting processes consume time and introduce errors, slowing decision-making.",
      "Inconsistent processes across regions and teams cause execution gaps and quality issues.",
      "MarTech stacks are bloated, underutilized, and poorly governed, driving up cost and complexity.",
      "Lack of clear ownership for data quality, documentation, and enablement across the GTM stack."
    ],
    modern_plays: [
      "Ops Architecture: Designing unified operating models and process frameworks across Marketing, Sales, and RevOps.",
      "Automation at Scale: Implementing workflows, triggers, and integrations to remove manual effort and delays.",
      "Data Quality & Governance: Defining standards, monitoring, and remediation processes for CRM and MAP data.",
      "MarTech Rationalization: Consolidating and right-sizing the stack to improve utilization and reduce spend.",
      "Insight Infrastructure: Standing up dashboards and scorecards that show performance by segment, region, and motion."
    ],
    proof: {
      company: "Salesforce",
      role: "Global Marketing Operations Leader (Salesforce.org)",
      outcome: "Built the Demand Gen reporting and operations infrastructure supporting global NGO and Education (SLED) marketing teams.",
      metrics: "Tracked $250M+ pipeline; reduced reporting lead time by 190% (4 days to 2 hours); improved CRM data quality by up to 85% and reduced MarTech waste by ~30%."
    },
    relevant_expertise_slugs: [
      "revenue-operations",
      "marketing-analytics-reporting",
      "martech-optimization",
      "data-governance",
      "ai-in-marketing"
    ],
    relevant_case_study_slugs: [
      "revenue-analytics-dashboard-salesforce"
    ]
  },
  {
    slug: 'market-research',
    title: 'Market Research & Intelligence',
    description: 'Market insights that inform strategy. Competitive analysis, buyer research, and market positioning that guides GTM decisions.',
    pillar: 'strategy-insights',
    pillarLabel: 'Strategy & Insights',
    tags: ['Research', 'Competitive', 'Intelligence'],
    icon: 'Search',
    order: 5,
  },
  {
    title: "MarTech Optimization",
    slug: "martech-optimization",
    positioning: "Transforming a noisy, underutilized marketing tech stack into a lean, integrated ecosystem that accelerates revenue instead of dragging it down.",
    challenges: [
      "Bloated stacks with overlapping tools and low utilization driving unnecessary cost.",
      "Disconnected systems create data silos and break end-to-end customer journey visibility.",
      "Lack of clear ownership and governance leads to shadow IT and inconsistent processes.",
      "Complex integrations make it risky to change tools or processes without breaking something.",
      "Teams underuse powerful platforms like Salesforce, Marketo, Demandbase, and 6sense."
    ],
    modern_plays: [
      "Stack Audit & Rationalization: Mapping tools to capabilities, eliminating redundancy, and renegotiating spend.",
      "Utilization Uplift Programs: Driving adoption through enablement, playbooks, and embedded best practices.",
      "Integration Architecture: Designing robust, scalable data flows between CRM, MAP, ABM, and analytics layers.",
      "AI & Automation Layering: Adding AI capabilities on top of a clean, governed stack to multiply impact.",
      "Governance & Ownership: Defining RACI, access models, and change processes for the entire GTM stack."
    ],
    proof: {
      company: "PRGX Global & Salesforce",
      role: "Director of Digital Marketing & ABM / Global Marketing Operations Leader",
      outcome: "Consolidated and standardized core MarTech platforms while improving usage across global teams.",
      metrics: "Reduced MarTech spend by ~30%; increased platform utilization from ~20% to ~80%; improved database health and data quality by ~30%."
    },
    relevant_expertise_slugs: [
      "marketing-operations",
      "revenue-operations",
      "marketing-analytics-reporting",
      "ai-in-marketing",
      "data-governance"
    ],
    relevant_case_study_slugs: [
      "abm-system-launch-prgx",
      "revenue-analytics-dashboard-salesforce"
    ]
  },
  {
    slug: 'omnichannel-marketing',
    title: 'Omnichannel Marketing',
    description: 'Coordinated campaigns across channels. Unified messaging and orchestration that delivers consistent buyer experiences.',
    pillar: 'content-engagement',
    pillarLabel: 'Content & Engagement',
    tags: ['Omnichannel', 'Campaigns', 'Orchestration'],
    icon: 'Radio',
    order: 3,
  },
  {
    title: "Paid Advertising",
    slug: "paid-advertising",
    positioning: "Driving high-quality demand through coordinated performance media systems that align channels, creative, and targeting to measurable pipeline and revenue impact.",
    challenges: [
      "Rising customer acquisition costs (CAC) make paid channels less efficient without disciplined targeting.",
      "Fragmented campaigns across teams lead to inconsistent messaging and poor conversion paths.",
      "Over-reliance on last-click attribution hides the true contribution of paid channels.",
      "Audiences are not aligned to ICP, buying committees, or intent signals, reducing lead quality.",
      "Creative and messaging lack structured testing frameworks, limiting optimization speed."
    ],
    modern_plays: [
      "ICP-Aligned Targeting: Using firmographic, technographic, and intent signals to refine audiences.",
      "Full-Funnel Campaign Architecture: Coordinating awareness, engagement, and conversion programs.",
      "Creative & Message Testing: Structured experimentation to optimize CTR, CVR, and cost efficiency.",
      "Multi-Channel Orchestration: Aligning search, social, display, and retargeting into one system.",
      "Revenue-Based Optimization: Managing budgets and bidding strategies tied to pipeline, not clicks."
    ],
    proof: {
      company: "PRGX Global",
      role: "Director of Digital Marketing & ABM",
      outcome: "Established targeted paid media programs aligned to ABM and demand generation strategy.",
      metrics: "Contributed to 87% YoY pipeline growth; improved MQL→SQL conversion by 180%; reduced CPL meaningfully across enterprise segments."
    },
    relevant_expertise_slugs: [
      "demand-generation",
      "account-based-marketing",
      "digital-marketing",
      "marketing-analytics-reporting",
      "ai-in-marketing"
    ],
    relevant_case_study_slugs: [
      "abm-system-launch-prgx"
    ]
  },
  {
    slug: 'paid-advertising-sem',
    title: 'Paid Advertising & SEM',
    description: 'Paid campaigns that deliver ROI. Google Ads, LinkedIn Ads, and retargeting programs optimized for pipeline contribution.',
    pillar: 'demand-growth',
    pillarLabel: 'Demand & Growth',
    tags: ['Paid Ads', 'SEM', 'PPC'],
    icon: 'Megaphone',
    order: 4,
  },
  {
    title: "Product Marketing",
    slug: "product-marketing",
    positioning: "Defining the narrative, positioning, messaging, personas, and go-to-market strategy that connect product value to real customer problems and drive market adoption.",
    challenges: [
      "Organizations struggle to communicate product value in a clear, differentiated, customer-centric narrative.",
      "Personas and ICP profiles are outdated, vague, or unused by GTM teams.",
      "Product launches lack structured messaging frameworks, enablement, and cross-functional alignment.",
      "Feedback loops between customers, product, sales, and marketing are inconsistent or informal.",
      "Content and campaigns fail to reflect the true value proposition or competitive advantage."
    ],
    modern_plays: [
      "Positioning & Messaging Architecture: Creating layered messaging for brand, product, persona, and solution levels.",
      "Persona & ICP Frameworks: Defining buying committees, pains, triggers, and value drivers.",
      "Launch & GTM Planning: Coordinating cross-functional campaigns, enablement, and metrics.",
      "Competitive Intelligence Systems: Providing sales and marketing with insights and differentiation points.",
      "Narrative Design: Crafting category-level stories that influence how buyers think about the problem."
    ],
    proof: {
      company: "Salesforce",
      role: "Campaigns Lead, Sales Cloud",
      outcome: "Drove Sales Cloud narrative consistency, campaign messaging, and persona-based GTM activation.",
      metrics: "Improved alignment across sales and marketing; contributed to significant pipeline growth across targeted industries."
    },
    relevant_expertise_slugs: [
      "content-strategy-systems",
      "sales-enablement-alignment",
      "demand-generation",
      "digital-marketing",
      "ai-in-marketing"
    ],
    relevant_case_study_slugs: [
      "singles-and-doubles-playbook-salesforce"
    ]
  },
  {
    title: "Revenue Operations (RevOps)",
    slug: "revenue-operations",
    positioning: "Aligning Sales, Marketing, and Finance around a unified revenue engine, with shared data, processes, and forecasts that turn strategy into predictable growth.",
    challenges: [
      "Sales, Marketing, and Finance operate on different definitions of pipeline, forecasts, and success.",
      "Reliance on manual spreadsheets and disconnected reports leads to slow, inaccurate decision-making.",
      "No unified revenue intelligence layer connecting demand generation through renewal and expansion.",
      "Inconsistent qualification criteria and SLAs cause friction between Sales and Marketing.",
      "Leadership lacks trustworthy, real-time views of pipeline health and forecast risk."
    ],
    modern_plays: [
      "Unified Intelligence Layer: Building a single source of truth for pipeline, forecasts, and revenue performance.",
      "Standardized SLAs & Definitions: Aligning lead, opportunity, and stage definitions across GTM functions.",
      "Prescriptive Guidance: Embedding AI-driven diagnostics and recommendations into frontline workflows.",
      "Operational Cadence: Implementing recurring, data-driven business reviews and forecast checkpoints.",
      "Process Orchestration: Designing cross-functional workflows from lead capture through renewal and expansion."
    ],
    proof: {
      company: "Salesforce",
      role: "Global Marketing Operations Leader",
      outcome: "Modernized revenue reporting and pipeline visibility for NGO and Education verticals by replacing manual scorecards with dynamic analytics.",
      metrics: "Reduced reporting lead time by 190% (4 days to 2 hours); improved forecast accuracy and lifted SQL volume by 65%; supported 76% YoY pipeline growth in target segments."
    },
    relevant_expertise_slugs: [
      "marketing-operations",
      "marketing-analytics-reporting",
      "data-analytics-reporting",
      "sales-enablement-alignment",
      "ai-in-marketing"
    ],
    relevant_case_study_slugs: [
      "revenue-analytics-dashboard-salesforce",
      "abm-system-launch-prgx"
    ]
  },
  {
    title: "Search Engine Optimization (SEO)",
    slug: "search-engine-optimization",
    positioning: "Using search and discovery as a strategic growth channel by combining technical SEO, content strategy, and now generative engine optimization (GEO) for AI-driven results.",
    challenges: [
      "Organic search is treated as a side project instead of a primary, compounding growth channel.",
      "Sites lack technical foundations (speed, structure, schema) needed to rank and be understood by search/AI systems.",
      "Content is produced without a clear keyword, intent, or topic cluster strategy.",
      "Difficulty connecting SEO performance to pipeline and revenue, not just traffic.",
      "AI-driven search and answer engines are changing how buyers discover solutions."
    ],
    modern_plays: [
      "Technical SEO Foundations: Ensuring crawlability, performance, information architecture, and structured data.",
      "Intent-Driven Keyword Strategy: Mapping topics and queries to personas and buying stages.",
      "Content Cluster Development: Building topic hubs that earn authority and internal linking strength.",
      "GEO (Generative Engine Optimization): Structuring content to be favored by AI assistants and answer engines.",
      "SEO-to-Revenue Mapping: Connecting organic sessions and queries to leads, opportunities, and pipeline."
    ],
    proof: {
      company: "Embarcadero Technologies & Crowd Factory (Marketo)",
      role: "Global Online Marketing Manager / Senior Manager, Enterprise Campaigns",
      outcome: "Led SEO and content programs that materially increased organic visibility and acquisition.",
      metrics: "300% increase in web traffic at Embarcadero; 164% YoY increase in unique visitors and 43% QoQ increase in net new leads at Crowd Factory/Marketo."
    },
    relevant_expertise_slugs: [
      "digital-marketing",
      "content-marketing",
      "demand-generation",
      "marketing-analytics-reporting",
      "ai-in-marketing"
    ],
    relevant_case_study_slugs: [
      "content-and-seo-infrastructure-crowd-factory-marketo"
    ]
  },
  {
    slug: 'sales-enablement',
    title: 'Sales Enablement',
    description: 'Sales enablement that accelerates deals. Content libraries, playbooks, and tools that reduce sales cycles and improve win rates.',
    pillar: 'systems-operations',
    pillarLabel: 'Systems & Operations',
    tags: ['Sales Enablement', 'Seismic', 'Content'],
    icon: 'Handshake',
    order: 5,
  },
  {
    title: "Sales Enablement & Alignment",
    slug: "sales-enablement-alignment",
    positioning: "Aligning Sales and Marketing through shared messaging, playbooks, intelligence, and operational cadences that increase win rates and accelerate pipeline.",
    challenges: [
      "Sales and Marketing lack unified definitions, messaging, and qualification criteria.",
      "Reps operate without consistent playbooks, competitive intelligence, or buyer insights.",
      "Enablement assets are scattered across systems, difficult to access, or outdated.",
      "There is no structured rhythm for pipeline reviews, deal strategy, and field feedback loops.",
      "Marketing-generated pipeline often stalls without coordinated follow-up processes."
    ],
    modern_plays: [
      "Unified Value Messaging: Creating cross-functional messaging frameworks and competitive narratives.",
      "Sales Playbooks & Kits: Structured assets that equip reps for discovery, objection handling, and demos.",
      "Pipeline Intelligence: Surfacing intent, engagement, and risk signals directly into CRM workflows.",
      "Revenue Cadence Design: Standing up consistent business reviews and forecast checkpoints.",
      "Account Activation Programs: Integrated ABM and Sales motions for deep multi-threading."
    ],
    proof: {
      company: "Salesforce & Red Hat",
      role: "Campaigns Lead / Senior ABM Strategist",
      outcome: "Equipped Sales teams with frameworks and intelligence that measurably improved top-of-funnel conversion and opportunity progression.",
      metrics: "Supported 65% lift in SQL volume; contributed to 33% of pipeline in ABM-aligned segments at Red Hat."
    },
    relevant_expertise_slugs: [
      "revenue-operations",
      "account-based-marketing",
      "demand-generation",
      "marketing-operations",
      "ai-in-marketing"
    ],
    relevant_case_study_slugs: [
      "enterprise-abm-activation-red-hat",
      "revenue-analytics-dashboard-salesforce"
    ]
  },
  {
    title: "Social Media",
    slug: "social-media",
    positioning: "Driving awareness, engagement, and brand authority across organic and paid social channels through structured content frameworks, community signals, and narrative consistency that connects directly to pipeline.",
    challenges: [
      "Social content is often reactive and disconnected from larger campaign narratives.",
      "Lack of structured testing prevents optimization of creative, format, and audience performance.",
      "Teams struggle to tie social media activity to measurable business outcomes.",
      "Brand voice becomes inconsistent across channels without a unified editorial framework.",
      "Algorithmic changes and channel fragmentation make it difficult to maintain reach."
    ],
    modern_plays: [
      "Editorial Architecture: Designing repeatable content themes, pillars, and narrative frameworks.",
      "Creative Iteration Loops: Rapid testing of visuals, hooks, CTAs, and short-form content formats.",
      "Audience Intelligence: Using behavioral and engagement data to refine targeting and messaging.",
      "Full-Funnel Social Activation: Coordinating organic and paid social campaigns within GTM programs.",
      "AI-Assisted Content Ops: Leveraging AI for ideation, caption variants, repurposing, and trend analysis."
    ],
    proof: {
      company: "Embarcadero Technologies",
      role: "Global Online Marketing Manager",
      outcome: "Built the company's early social presence, integrating organic social and content systems that drove meaningful acquisition lift.",
      metrics: "Contributed to a 300% increase in global web traffic alongside SEO and content infrastructure improvements."
    },
    relevant_expertise_slugs: [
      "digital-marketing",
      "content-marketing",
      "content-strategy-systems",
      "search-engine-optimization",
      "brand-strategy"
    ],
    relevant_case_study_slugs: [
      "content-and-seo-infrastructure-crowd-factory-marketo"
    ]
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'B2B social that builds brand and drives demand. LinkedIn, Twitter, and community strategies that generate qualified leads.',
    pillar: 'content-engagement',
    pillarLabel: 'Content & Engagement',
    tags: ['Social Media', 'LinkedIn', 'Community'],
    icon: 'Share2',
    order: 4,
  },
  {
    slug: 'video-marketing',
    title: 'Video Marketing & Webinars',
    description: 'Video content that educates and converts. Webinar programs, video series, and interactive content that accelerates buyer decisions.',
    pillar: 'content-engagement',
    pillarLabel: 'Content & Engagement',
    tags: ['Video', 'Webinars', 'ON24'],
    icon: 'Video',
    order: 5,
  },
]

export function getExpertiseBySlug(slug: string): ExpertiseItem | undefined {
  return expertiseItems.find(item => item.slug === slug)
}

export function getExpertiseByPillar(pillar: string): ExpertiseItem[] {
  return expertiseItems
    .filter(item => item.pillar === pillar)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
}

export function getFeaturedExpertise(): ExpertiseItem[] {
  return expertiseItems.filter(item => item.featured)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  expertiseItems.forEach(item => (item.tags ?? []).forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
}
