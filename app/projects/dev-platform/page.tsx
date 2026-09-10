import type { Metadata } from "next";
import DevPlatformContent from "@/components/content/DevPlatformContent";

export const metadata: Metadata = {
  title: "Development Platform and DevOps | Christian Hagen Wiker",
  description:
    "The development platform I designed and built for Pelias: a coding standard enforced by the build, a Visual Studio project template, an on-prem Azure DevOps Server, and two Ubuntu Server VMs running Docker for builds and tests.",
};

export default function DevPlatformPage() {
  return <DevPlatformContent />;
}
