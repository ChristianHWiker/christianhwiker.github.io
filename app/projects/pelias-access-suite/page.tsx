import type { Metadata } from "next";
import PeliasAccessSuiteContent from "@/components/content/PeliasAccessSuiteContent";

export const metadata: Metadata = {
  title: "Pelias Access Suite | Christian Hagen Wiker",
  description:
    "Pelias' new dashboard and shared login, built on a clear split between identity and access: Pelias ID handles OIDC login and tenants, the dashboard owns the application rights. Pitched by me, built with me as lead developer.",
};

export default function PeliasAccessSuitePage() {
  return <PeliasAccessSuiteContent />;
}
