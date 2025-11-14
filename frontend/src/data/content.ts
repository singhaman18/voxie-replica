export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "How it works", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
];

export const trustedLogos = [
  { name: "Vercel", initials: "VC", label: "Vercel" },
  { name: "Linear", initials: "LN", label: "Linear" },
  { name: "Notion", initials: "NT", label: "Notion" },
  { name: "Shopify", initials: "SP", label: "Shopify" },
  { name: "Zendesk", initials: "ZD", label: "Zendesk" },
];

export const featureCards = [
  {
    title: "5 minute setup",
    description:
      "Connect your GCP projet instantly through guided onboarding with IAM role varification and service account sync.",
    badge: "Setup",
  },
  {
    title: "Continuous Cloud Monitoring",
    description:
      "Cyra continously watches your cloud for misconfiguration, risky IAM permissions, cloud drift, and compliance issues.",
    badge: "Monitoring",
  },
  {
    title: "AI Security Scanning",
    description:
      "Deep AI - powered scans across workloads, APIs, compute IAM roles, and storage- giving complete cloud visibility. ",
    badge: "Scanning",
  },
  {
    title: "5 minute setup",
    description:
      "Connect your GCP projet instantly through guided onboarding with IAM role varification and service account sync.",
    badge: "Setup",
  },
  {
    title: "Continuous Cloud Monitoring",
    description:
      "Cyra continously watches your cloud for misconfiguration, risky IAM permissions, cloud drift, and compliance issues.",
    badge: "Monitoring",
  },
  {
    title: "AI Security Scanning",
    description:
      "Deep AI - powered scans across workloads, APIs, compute IAM roles, and storage- giving complete cloud visibility. ",
    badge: "Scanning",
  },
];

export const workflowSteps = [
  {
    title: "Connect effortlessly",
    description:
      "Drop Cyra into your site, app, or CRM with guided connectors and one-click authentication.",
    image: "/images/1.svg",
  },
  {
    title: "Tune your brand voice",
    description:
      "Train responses with your knowledge base, adjust tone sliders, and preview every scenario in-context.",
    image: "/images/2.avif",
  },
  {
    title: "Launch & learn",
    description:
      "Track transcripts, escalate hand-offs, and surface insights that uncover revenue opportunities.",
    image: "/images/3.avif",
  },
];

export const benefitCards = [
  {
    eyebrow: "Security",
    title: "Real-time threat detection",
    description:
      "Get instant alerts when CYRA identifies misconfigurations, suspicious IAM activities, or potential security threats across your GCP infrastructure.",
  },
  {
    eyebrow: "Compliance",
    title: "Stay audit-ready",
    description:
      "Continuously monitor your cloud environment against security best practices and compliance standards, with automated reporting for your team.",
  },
  {
    eyebrow: "Insights",
    title: "AI-powered recommendations",
    description:
      "Receive intelligent, actionable security recommendations tailored to your GCP projects, helping you fix vulnerabilities before they become incidents.",
  },
];

export const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    blurb: "Start small",
    price: 15,
    yearlyPrice: 12,
    label: "Monthly",
    features: [
      "Essential chatbot capabilities to get you started",
      "Communicate in 10+ languages",
      "Connect with WordPress, Shopify, and Zapier",
      "Up to 1,000 monthly conversations",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    blurb: "Scale your capabilities",
    price: 85,
    yearlyPrice: 72,
    label: "Monthly",
    popular: true,
    features: [
      "Advanced automations and conversation intelligence",
      "Communicate in 50+ languages",
      "Works with every major CRM and help desk",
      "Up to 10,000 monthly conversations",
      "Exportable analytics and proactive alerts",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    blurb: "Do more with enterprise",
    price: 125,
    yearlyPrice: 108,
    label: "Monthly",
    features: [
      "Unlimited messaging with custom SLAs",
      "Communicate in 100+ languages",
      "Dedicated success engineer & private workspace",
      "Deep analytics with forecasting and data lake sync",
    ],
  },
];

export const testimonials = [
  {
    headline: "Easy integration",
    quote:
      "Onboarding Cyra into our CRM and marketing stack took less than a day. Our team now focuses on strategic work instead of triaging repetitive tickets.",
    name: "Will Smith",
    handle: "@willsmith01",
    role: "Operations Lead, Atlas",
    image: "/images/test1.avif",
  },
  {
    headline: "Revenue lift in weeks",
    quote:
      "We saw a 28% increase in qualified leads after launching the proactive chat playbooks. Cyra surfaces buying signals we used to miss.",
    name: "Amelia Chen",
    handle: "@amelia.chen",
    role: "Growth Lead, Zephyr",
    image: "/images/test2.avif",
  },
  {
    headline: "Customers love the experience",
    quote:
      "The multilingual support blows our team away. Customers feel understood instantly, no matter the language or channel they use.",
    name: "Luis Fernandez",
    handle: "@heyitsluis",
    role: "Support Director, Stellr",
    image: "/images/test3.avif",
  },
];

export const faqs = [
  {
    question: "How long does it take to set up the chatbot?",
    answer:
      "Most teams launch within 24 hours. Use guided connectors, import your existing FAQs, and preview every flow in a sandbox before going live.",
  },
  {
    question: "Can the chatbot integrate with my existing tools?",
    answer:
      "Yes. Cyra supports native apps for Shopify, HubSpot, Salesforce, Zendesk, Intercom, Slack, and has an open API for custom integrations.",
  },
  {
    question: "Is the chatbot customizable for my brand?",
    answer:
      "Configure tone, vocabulary, fallback rules, escalation logic, and embed themes to match your brand system perfectly.",
  },
  {
    question: "How does the chatbot handle multilingual support?",
    answer:
      "Cyra automatically detects language, generates responses within the same locale, and routes transcripts to the right team for follow-up.",
  },
  {
    question: "What happens if the chatbot can’t answer a question?",
    answer:
      "Escalation rules hand conversations to human agents with full context, including suggested responses and priority tags.",
  },
  {
    question: "Is there a limit to how many chats Cyra can handle?",
    answer:
      "No caps on concurrency. Plans scale based on total conversations per month, and enterprise tiers can remove limits entirely.",
  },
];
