"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

export default function CVLayout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Tabs
        fullWidth
        aria-label="Tabs"
        className="font-bold"
        color="secondary"
        defaultSelectedKey="personal"
        selectedKey={segment}
        variant="underlined"
      >
        <Tab
          key="personal"
          as={Link}
          className="text-xl"
          href="/cv/personal"
          id="/personal"
          title="Personal Info"
        />
        <Tab
          key="studies"
          as={Link}
          className="text-xl"
          href="/cv/studies"
          id="/studies"
          title="Studies"
        />
        <Tab
          key="experience"
          as={Link}
          className="text-xl"
          href="/cv/experience"
          id="/experience"
          title="Experience"
        />
      </Tabs>
      {children}
    </section>
  );
}
