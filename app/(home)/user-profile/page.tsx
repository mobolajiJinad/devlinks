"use client";

import DesktopLayout from "@/components/DesktopLayout";
import useIsDesktop from "@/hooks/use-is-desktop";
import UserProfile from "@/components/UserProfile";

export default function UserProfilePage() {
  const isDeskTop = useIsDesktop();

  if (isDeskTop) {
    return <DesktopLayout rightComponent={<UserProfile />} />;
  }

  return <UserProfile />;
}
