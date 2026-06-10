import type { Metadata } from "next";
import PeliasPortalContent from "@/components/content/PeliasPortalContent";

export const metadata: Metadata = {
  title: "Pelias Portal | Christian Hagen Wiker",
  description:
    "An application portal that becomes the front page for everyone logging in at Pelias, with a role-based dashboard and a full authentication rewrite with two-factor login. Pitched by me, built with me as lead developer.",
};

export default function PeliasPortalPage() {
  return <PeliasPortalContent />;
}
