import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { PageBackground } from "@/components/ui/Layout";
import { GlowDivider } from "@/components/ui/UI";

import Hero from "./sections/Hero";

const ProjectSection = lazy(() => import("./sections/ProjectSection"));

const ProjectSkeleton = () => (
  <div className="w-full min-h-[50vh] flex flex-col items-center justify-center space-y-4 opacity-30">
    <div className="w-3/4 h-64 bg-[#d9a406]/5 rounded-3xl animate-pulse" />
    <div className="w-1/2 h-8 bg-white/10 rounded-full animate-pulse" />
  </div>
);

export default function ProjectsPage({ t, dark }) {
  return (
    <>
      <PageBackground t={t} dark={dark}/>
 
      <Hero t={t} dark={dark} />
 
      <GlowDivider theme={t} dark={dark} />
 
      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectSection t={t} dark={dark} />
      </Suspense>
 
      <GlowDivider theme={t} dark={dark} />
    </>
  );
}