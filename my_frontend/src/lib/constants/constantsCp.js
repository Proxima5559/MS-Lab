import { Brain, Database, Workflow, ShieldCheck, BarChart2, Search, Eye, GitBranch
, Activity, RefreshCw, Lock, FileSearch
} from "lucide-react";
export const sections = [
  {
    id: "applied-ai",
    icon: Brain,
    eyebrow: "Applied AI & ML",
    headline: "The right tool for your problem, not the latest hype.",
    description:
      "From classical machine learning to modern LLM pipelines, we build algorithms that solve specific business challenges. Our focus is on selecting the right tool for your problem, not chasing the latest hype.",
    items: [
      {
        icon: BarChart2,
        title: "Predictive Analytics",
        text: "Demand forecasting, customer churn prediction, and dynamic pricing optimization.",
      },
      {
        icon: Search,
        title: "LLMs & Generative AI",
        text: "Building enterprise RAG systems, text automation, and semantic search.",
      },
      {
        icon: Eye,
        title: "Computer Vision",
        text: "Image recognition, semantic segmentation, and automated visual quality control.",
      },
    ],
  },
  {
    id: "data-platforms",
    icon: Database,
    eyebrow: "Data Platforms",
    headline: "Rock-solid foundations for your data infrastructure.",
    description:
      "Machine learning models are only as good as the data they run on. We build the infrastructure that keeps your models accurate, consistent, and production-ready.",
    items: [
      {
        icon: GitBranch,
        title: "Data Engineering",
        text: "Architecting scalable ETL/ELT pipelines that move and transform data reliably at any scale.",
      },
      {
        icon: Database,
        title: "Feature Stores",
        text: "Creating centralized feature repositories to ensure data consistency between training and inference environments.",
      },
      {
        icon: Activity,
        title: "Data Quality",
        text: "Automated real-time data testing and validation — because bad data is worse than no model.",
      },
    ],
  },
  {
    id: "mlops",
    icon: Workflow,
    eyebrow: "MLOps & Automation",
    headline: "From one-off experiment to continuous engineering process.",
    description:
      "We transform machine learning from a fragile prototype into a reliable, automated engineering discipline — built to run without constant human intervention.",
    items: [
      {
        icon: GitBranch,
        title: "CI/CD for ML",
        text: "Automated testing and deployment pipelines so every model change ships safely and quickly.",
      },
      {
        icon: Activity,
        title: "Monitoring",
        text: "Tracking model drift and prediction quality in production environments before they affect the business.",
      },
      {
        icon: RefreshCw,
        title: "Automated Retraining",
        text: "Setting up triggers and pipelines to update models dynamically on fresh data.",
      },
    ],
  },
  {
    id: "enterprise",
    icon: ShieldCheck,
    eyebrow: "Enterprise Readiness",
    headline: "Security, transparency, and governance from day one.",
    description:
      "Large-scale businesses require the highest standards. We bake security, transparency, and governance into the architecture from the very beginning — not as an afterthought.",
    items: [
      {
        icon: Lock,
        title: "Security & Compliance",
        text: "Role-Based Access Control (RBAC), encryption, and strict adherence to sensitive data handling standards.",
      },
      {
        icon: FileSearch,
        title: "Explainable AI (XAI)",
        text: "Implementing interpretation tools to explain model decisions to business stakeholders and auditors.",
      },
       {
        icon: FileSearch,
        title: "Cost Management:",
        text: " Optimizing inference and maximizing the efficiency of cloud resources (GPU/CPU)",
      },
    ],
  },
];