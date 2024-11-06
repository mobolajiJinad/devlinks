"use client";

import DesktopLayout from "@/components/DesktopLayout";
import useIsDesktop from "@/utils/hooks/useIsDesktop";

const Page = () => {
  const isDeskTop = useIsDesktop();

  if (isDeskTop) {
    return <DesktopLayout rightComponent={<div>Page</div>} />;
  }

  return <div>Page</div>;
};

export default Page;
