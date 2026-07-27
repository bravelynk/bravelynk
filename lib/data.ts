export type Service = {
  id: string;
  title: string;
  short: string;
  desc: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "software-development",
    title: "Software Development",
    short: "Web, mobile & enterprise apps",
    desc: "Custom web, mobile, and enterprise software engineered to solve your specific business problems — built clean, tested, and made to scale.",
    points: ["Web applications", "Mobile apps (iOS & Android)", "API & systems integration", "Enterprise platforms"],
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy",
    short: "Strategy that pays for itself",
    desc: "Strategic technology advisory that aligns your IT investment with business goals, removes wasted spend, and de-risks your next big decision.",
    points: ["Technology audits", "Digital strategy & roadmap", "Cost optimisation", "Risk & compliance review"],
  },
  {
    id: "hardware-software-installation",
    title: "Hardware & Software Installation",
    short: "Infrastructure, done right",
    desc: "End-to-end procurement, setup, and configuration of hardware infrastructure and software environments — installed once, working every day after.",
    points: ["Networking & servers", "Workstation setup", "OS & software deployment", "Ongoing maintenance"],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    short: "Modernise & automate",
    desc: "We modernise operations, automate manual workflows, and help you compete on technology built for the realities of the African market.",
    points: ["Process automation", "Cloud migration", "Workflow systems", "Data & analytics"],
  },
];

export const siteConfig = {
  name: "Bravelynk Digital Solutions Limited",
  shortName: "Bravelynk",
  rc: "RC: 9270501",
  email: "info@bravelynk.com",
  phone: "+234 (0) 000 000 0000",
  location: "Agege, Lagos, Nigeria",
};
