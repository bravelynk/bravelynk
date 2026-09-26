export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  desc: string;
  points: string[];
  techStack?: string[];
};

export const services: Service[] = [
  {
    id: "mobile-web-apps",
    number: "01",
    title: "Mobile & Web App Development",
    short: "Modern, Scalable Web & Mobile Platforms",
    desc: "Design and build modern, scalable applications for web and mobile platforms. We combine intuitive interfaces with high-performance architectures tailored for real-world user engagement.",
    points: [
      "Cross-Platform & Native Mobile Applications",
      "Interactive Full-Stack Web Applications",
      "Responsive UI/UX & Component Systems",
      "Offline-First & Network-Resilient Architecture",
      "App Store & Google Play Store Deployment",
    ],
    techStack: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "ai-solutions",
    number: "02",
    title: "AI Solutions",
    short: "Practical AI Products & Intelligent Automation",
    desc: "Build practical AI-powered products, automation systems, intelligent workflows, and AI integrations for businesses and digital products to eliminate operational friction.",
    points: [
      "Custom AI Integrations & API Pipelines",
      "Intelligent Workflow & Process Automation",
      "Conversational AI & Autonomous Support Agents",
      "Smart Document Parsing & Data Extraction",
      "Predictive Analytics & Recommendation Engines",
    ],
    techStack: ["OpenAI APIs", "Anthropic Claude", "Python", "LangChain", "Vector DBs"],
  },
  {
    id: "backend-solutions",
    number: "03",
    title: "Backend Solutions",
    short: "Reliable APIs, Databases & Server Infrastructure",
    desc: "Build reliable backend systems, APIs, databases, authentication systems, integrations, and server-side infrastructure that scale seamlessly under heavy workloads.",
    points: [
      "High-Throughput REST & GraphQL APIs",
      "Database Architecture & Query Optimization",
      "Zero-Trust Authentication & RBAC Systems",
      "Third-Party Integrations & Payment Gateways",
      "Cloud Infrastructure & Serverless Deployments",
    ],
    techStack: ["Node.js", "PostgreSQL", "MongoDB", "Redis", "Cloud Microservices"],
  },
  {
    id: "website-development",
    number: "04",
    title: "Website Development",
    short: "High-Performance Websites for Businesses & Brands",
    desc: "Create modern, responsive, high-performance websites for businesses, organizations, brands, and professionals that load fast, rank high, and convert visitors.",
    points: [
      "Custom Editorial & Corporate Web Development",
      "Core Web Vitals & Speed Optimization",
      "Technical SEO & Structured Schema Markup",
      "Content Management Systems (CMS) Integration",
      "Conversion Rate Optimization & Tracking Analytics",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion"],
  },
];

export type ProjectCategory =
  | "Web Application"
  | "Business Website"
  | "Developer Tool"
  | "SaaS/Product"
  | "Sports Platform"
  | "Business Platform";

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: ProjectCategory;
  url: string;
  image?: string;
  technologies: string[];
  featured?: boolean;
  highlights?: string[];
  disclaimer?: string;
};

export const projects: Project[] = [
  {
    id: "bravecard",
    title: "BraveCard",
    slug: "bravecard",
    description: "Digital profile and smart business card platform allowing professionals and teams to share credentials, portfolios, and contact information seamlessly in one tap.",
    category: "Web Application",
    url: "https://bravecard.vercel.app/",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    featured: true,
    highlights: ["Contactless profile sharing", "Dynamic social bio links", "Instant QR connection"],
  },
  {
    id: "berrybby",
    title: "Berrybby Luxe Living",
    slug: "berrybby-luxe-living",
    description: "High-end architectural lighting and luxury furnishing showcase website delivering an editorial visual presentation and curated catalog for interior designers.",
    category: "Business Website",
    url: "https://berrybby.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Editorial UI", "Responsive Design"],
    featured: true,
    highlights: ["Curated architectural fixtures", "Luxury furniture portfolio", "High-conversion design"],
  },
  {
    id: "dajj-engineering",
    title: "DAJJ Engineering",
    slug: "dajj-engineering",
    description: "Corporate multi-disciplinary engineering services website showcasing technical civil capabilities, infrastructure contracting, and project execution portfolios.",
    category: "Business Website",
    url: "https://dajj-engineering.vercel.app/",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    featured: true,
    highlights: ["Engineering project portfolio", "Technical services showcase", "Corporate client portal"],
  },
  {
    id: "shinar",
    title: "Shinar",
    slug: "shinar",
    description: "Interactive software engineering portfolio and tech applications showcase highlighting modern frontend development, interactive experiments, and code solutions.",
    category: "Web Application",
    url: "https://shinar930.vercel.app/",
    technologies: ["React", "Next.js", "CSS Animations", "Vercel"],
    featured: false,
    highlights: ["Interactive project showcases", "Modern interface animations", "Developer documentation"],
  },
  {
    id: "devsearchengine",
    title: "DevSearch Engine",
    slug: "devsearch-engine",
    description: "Developer-focused search platform engineered to help software engineers quickly index and discover curated programming documentation, API references, and technical tools.",
    category: "Developer Tool",
    url: "https://devsearchengine.vercel.app/",
    technologies: ["React", "JavaScript", "API Integration", "Search Indexing"],
    featured: true,
    highlights: ["Fast technical search", "Curated developer resources", "Minimalist lookup interface"],
  },
  {
    id: "naija-review",
    title: "Naija Reviews",
    slug: "naija-reviews",
    description: "Community discovery and rating platform built to help consumers find, evaluate, and review verified Nigerian businesses, vendors, and service providers.",
    category: "Business Platform",
    url: "https://naija-review.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Authentication", "Review System"],
    featured: true,
    highlights: ["Verified business directory", "User ratings & feedback", "Location-based filtering"],
  },
  {
    id: "orion-manager",
    title: "Orion Manager",
    slug: "orion-manager",
    description: "Privacy-focused Google activity management product enabling users to securely review and permanently delete search history, YouTube activity, and location logs in one click.",
    category: "SaaS/Product",
    url: "https://orion-manager.vercel.app/",
    technologies: ["HTML5 Canvas", "JavaScript", "Paystack Integration", "OAuth Security"],
    featured: true,
    highlights: ["Permanent activity deletion", "Multi-service support", "End-to-end data encryption"],
    disclaimer: "Independent utility product; not affiliated with Google LLC.",
  },
  {
    id: "whatsapp-msg",
    title: "WhatsApp Direct Message",
    slug: "whatsapp-direct-message",
    description: "Productivity utility that generates instant WhatsApp click-to-chat links, enabling users to launch conversations immediately without cluttering contacts with unsaved numbers.",
    category: "Developer Tool",
    url: "https://whatsapp-msg-one.vercel.app/",
    technologies: ["JavaScript", "Web APIs", "Responsive CSS", "Vercel"],
    featured: false,
    highlights: ["No contact saving required", "Instant universal deep linking", "Clean mobile-first UX"],
  },
  {
    id: "cosmos-fc",
    title: "COSMOS FC",
    slug: "cosmos-fc",
    description: "Official digital club platform for football team operations, player squad profiles, match fixture tracking, league tables, and supporter community updates.",
    category: "Sports Platform",
    url: "https://cosmos-fc.vercel.app/",
    technologies: ["React", "Next.js", "Tailwind CSS", "Sports Media"],
    featured: false,
    highlights: ["Live match fixture calendar", "Player roster & squad stats", "Club news & media hub"],
  },
  {
    id: "sm-generator",
    title: "SM Generator",
    slug: "sm-generator",
    description: "Social media username and cryptographically secure password generation tool featuring real-time password entropy analysis and platform-tailored suggestions.",
    category: "Developer Tool",
    url: "https://sm-generator-one.vercel.app/",
    technologies: ["JavaScript", "Web Crypto API", "Interactive UI", "Vercel"],
    featured: false,
    highlights: ["Platform-specific usernames", "Cryptographic password entropy", "One-click clipboard copy"],
  },
  {
    id: "mersh-capital",
    title: "Mersh Capital",
    slug: "mersh-capital",
    description: "Specialized corporate website for high-security perimeter engineering, 358 anti-finger mesh installations, and industrial security protection systems across Nigeria.",
    category: "Business Website",
    url: "https://mershcapital.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Corporate Architecture"],
    featured: false,
    highlights: ["358 Anti-Finger mesh showcase", "Perimeter security specifications", "Direct contractor inquiry"],
  },
];

// Preserved for any legacy components that use caseStudies
export const caseStudies = projects.map((p) => ({
  id: p.id,
  title: p.title,
  client: p.title,
  category: p.category,
  shortDesc: p.description,
  challenge: "Businesses require dependable digital products engineered with clean architecture, high speed, and verifiable reliability.",
  solution: `Bravelynk engineered ${p.title} with modern technologies, responsive interfaces, and production-tested code.`,
  results: p.highlights || ["Production deployed", "High responsiveness", "Optimized performance"],
  metrics: { value: "Live", label: p.category },
  tags: p.technologies,
  url: p.url,
}));

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand the business, problem, users, and technical requirements through thorough discovery and scoping.",
    highlights: ["Operational bottleneck audits", "User needs & requirements mapping", "Technical feasibility analysis"],
  },
  {
    step: "02",
    title: "Plan",
    desc: "Define the product architecture, core features, user flows, database structures, and engineering roadmap.",
    highlights: ["Detailed system architecture", "Wireframes & interactive user flows", "Predictable milestone budgeting"],
  },
  {
    step: "03",
    title: "Build",
    desc: "Design and develop the solution using modern, maintainable technologies with regular milestone demo builds.",
    highlights: ["Clean, scalable codebase", "Zero-trust security & API design", "Agile sprint releases"],
  },
  {
    step: "04",
    title: "Launch",
    desc: "Rigorous testing, performance optimization, cloud deployment, and preparing the product for real-world traffic.",
    highlights: ["Automated testing & QA review", "Zero-downtime CI/CD deployment", "Server & database tuning"],
  },
  {
    step: "05",
    title: "Improve",
    desc: "Monitor live systems, maintain stability, iterate based on user metrics, and scale infrastructure over time.",
    highlights: ["Committed SLA & uptime monitoring", "Iterative feature enhancements", "Proactive security patching"],
  },
];

export const techCapabilities = {
  frontend: {
    title: "Frontend Engineering",
    desc: "Modern, high-performance user interfaces crafted with precision, responsiveness, and fluid interaction.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  backend: {
    title: "Backend & Systems",
    desc: "Reliable, fault-tolerant server-side systems, data storage pipelines, and secure API architectures.",
    skills: ["Node.js", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "Authentication", "Server Infrastructure"],
  },
  ai: {
    title: "AI & Automation",
    desc: "Practical intelligence integrated directly into existing workflows and standalone digital products.",
    skills: ["AI Integrations", "AI-Powered Workflows", "Intelligent Automation", "Conversational AI", "AI Product Development"],
  },
};

export const whyBravelynkPillars = [
  {
    title: "Built Around Problems",
    desc: "We don't just write code blindly. We take time to deeply understand the operational or market problem your software needs to solve.",
  },
  {
    title: "Modern Technology",
    desc: "We build with proven modern engineering frameworks, clean modular architectures, and maintainable codebases built to stand the test of time.",
  },
  {
    title: "Business-Focused",
    desc: "Every technical choice supports measurable business objectives: faster user acquisition, fewer support tickets, and zero downtime.",
  },
  {
    title: "Built to Evolve",
    desc: "Digital products must adapt as your company grows. We build modular foundations designed for future feature expansion and painless scaling.",
  },
];

export const siteConfig = {
  name: "Bravelynk Digital Solutions Limited",
  shortName: "Bravelynk",
  rc: "RC: 9270501",
  email: "info@bravelynk.com",
  phone: "07014942919",
  location: "16, Ishola Yusuf Street, Lagos, Nigeria",
  communityUrl: "https://t.me/bravelynk",
  locations: [
    { country: "Nigeria (HQ)", address: "16, Ishola Yusuf Street, Lagos, Nigeria" },
    { country: "United Kingdom", address: "London Partner Office (Consultancy & Diaspora)" },
    { country: "North America", address: "Tech & Strategic Alliance Partners" },
  ],
};
