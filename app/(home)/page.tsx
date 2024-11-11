"use client";

import DesktopLayout from "@/components/DesktopLayout";
import Home from "@/components/Home";
import useIsDesktop from "@/hooks/use-is-desktop";

export default function HomePage() {
  const isDeskTop = useIsDesktop();

  if (isDeskTop) {
    return <DesktopLayout rightComponent={<Home />} />;
  }

  return <Home />;
}
