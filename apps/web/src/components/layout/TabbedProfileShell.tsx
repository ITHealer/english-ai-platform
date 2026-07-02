"use client";

import { useEffect, useState, type ReactNode } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { navigation } from "@/config/navigation";
import type { ProfileTabId } from "@/types/profile";

type TabbedProfileShellProps = {
  about: ReactNode;
  courses: ReactNode;
  students: ReactNode;
  contact: ReactNode;
  footer: ReactNode;
};

const validTabs = new Set<ProfileTabId>(navigation.map((item) => item.id));

export function TabbedProfileShell({
  about,
  courses,
  students,
  contact,
  footer,
}: TabbedProfileShellProps) {
  const [activeTab, setActiveTab] = useState<ProfileTabId>("about");
  const panels: Record<ProfileTabId, ReactNode> = { about, courses, students, contact };

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1) as ProfileTabId;
      if (validTabs.has(hash)) {
        setActiveTab(hash);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const selectTab = (tab: ProfileTabId) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar activeTab={activeTab} onSelectTab={selectTab} />
      <main>
        {navigation.map((item) => (
          <section
            key={item.id}
            id={item.id}
            role="tabpanel"
            aria-labelledby={`desktop-tab-${item.id}`}
            tabIndex={0}
            hidden={activeTab !== item.id}
            className="tab-panel min-h-[calc(100svh-4.5rem)] focus:outline-none"
          >
            {panels[item.id]}
          </section>
        ))}
      </main>
      {footer}
    </>
  );
}
