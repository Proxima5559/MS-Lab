import {

    TrendingUp, FileText, Camera,
    AlertCircle, Lightbulb, BarChart2

} from "lucide-react";
export const projects = [
    {
        id: "intelligent-ops",
        index: "01",
        icon: TrendingUp,
        category: "Predictive Analytics",
        title: "Intelligent Operations Platform",
        tags: ["ERP Integration", "Ensemble ML", "Forecasting", "Executive Dashboards"],
        problem: {
            label: "The Problem",
            text: "Lack of transparency in supply chains and high risks of cash flow gaps due to inaccurate demand forecasting.",
        },
        solution: {
            label: "The Solution",
            text: "Developed a unified predictive analytics system aggregating data from ERP, CRM, and external market sources. Deployed an ensemble of ML models for scenario-based forecasting.",
        },
        result: {
            label: "The Result",
            text: "Increased forecasting accuracy by 24%, reduced operational costs, and implemented real-time executive dashboards for top management.",
        },
        metrics: [
            { value: "+24%", label: "Forecast accuracy" },
            { value: "3×", label: "Data sources unified" },
            { value: "Real-time", label: "Executive dashboards" },
        ],
    },
    {
        id: "document-ai",
        index: "02",
        icon: FileText,
        category: "LLMs & Generative AI",
        title: "Document AI Pipeline",
        tags: ["RAG", "OCR", "LLMs", "Human-in-the-loop"],
        problem: {
            label: "The Problem",
            text: "Slow, error-prone manual processing of thousands of legal and financial contracts every month.",
        },
        solution: {
            label: "The Solution",
            text: `Architected a RAG system utilizing state-of-the-art LLMs and OCR modules. Developed a "Human-in-the-loop" interface allowing operators to validate complex or disputed cases.`,
        },
        result: {
            label: "The Result",
            text: "Reduced document processing time from 15 minutes to 40 seconds per document. Achieved 98%+ data extraction accuracy.",
        },
        metrics: [
            { value: "40s", label: "Per document (was 15 min)" },
            { value: "98%+", label: "Extraction accuracy" },
            { value: "∞", label: "Scalable throughput" },
        ],
    },
    {
        id: "vision-qc",
        index: "03",
        icon: Camera,
        category: "Computer Vision",
        title: "Vision Quality Control",
        tags: ["Object Detection", "Edge Deploy", "60 FPS", "Segmentation"],
        problem: {
            label: "The Problem",
            text: "High defect rates on a high-speed production line that classical optical sensors failed to detect.",
        },
        solution: {
            label: "The Solution",
            text: "Implemented a computer vision system (Object Detection & Segmentation) running on Edge devices directly on the manufacturing line. Optimized models for high-speed inference at 60 FPS.",
        },
        result: {
            label: "The Result",
            text: "Decreased the pass-through rate of defective products by 99.5%, enabling continuous 24/7 operation without precision loss.",
        },
        metrics: [
            { value: "99.5%", label: "Defect catch rate" },
            { value: "60 FPS", label: "Inference speed" },
            { value: "24/7", label: "Continuous operation" },
        ],
    },
];

export const statIcons = { problem: AlertCircle, solution: Lightbulb, result: BarChart2 };