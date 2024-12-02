"use client";

import { CustomCard } from "./_components/card";

import { siteConfig } from "@/config/site";

export default function ProjectsPage() {
  const cards = siteConfig.projects.map((project) => CustomCard(project));

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 w-full">
      {cards}
    </div>
  );
}
