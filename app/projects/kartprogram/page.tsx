import type { Metadata } from "next";
import KartprogramContent from "@/components/content/KartprogramContent";

export const metadata: Metadata = {
  title: "Blazor Map Application | Christian Hagen Wiker",
  description:
    "A multi-tenant map and trend tool built in Blazor for Pelias. Visualize maps, track trend data, and link everything to work orders for daily operations.",
};

export default function KartprogramPage() {
  return <KartprogramContent />;
}
