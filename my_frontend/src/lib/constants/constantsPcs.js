import { Search, FlaskConical, Rocket } from "lucide-react";
export const steps = [
  {
    index: "01",
    icon: Search,
    label: "Discover",
    sublabel: "Analysis & Architecture",
    body: "We don't write code on day one. We dive deep into your business, audit your data, define Key Performance Indicators (KPIs), and map out technical constraints.",
    outcome: "A clear architectural blueprint and project roadmap.",
  },
  {
    index: "02",
    icon: FlaskConical,
    label: "Prototype",
    sublabel: "Validation & MVP",
    body: "Rapid development of a Proof of Concept (PoC) or MVP. We use simplified models and available data to prove viability and deliver measurable results within 3 to 6 weeks.",
    outcome: "A working prototype and a data-driven decision on scaling.",
  },
  {
    index: "03",
    icon: Rocket,
    label: "Scale",
    sublabel: "Production & Deployment",
    body: "Transitioning the successful prototype into a fault-tolerant enterprise system. We wrap models into microservices, set up MLOps pipelines, implement monitoring and CI/CD, and transfer knowledge to your internal team.",
    outcome: "A robust, high-load-ready AI system.",
  },
];