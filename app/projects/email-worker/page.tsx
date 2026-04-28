import type { Metadata } from "next";
import EmailWorkerContent from "@/components/content/EmailWorkerContent";

export const metadata: Metadata = {
  title: "Email Worker Service | Christian Hagen Wiker",
  description:
    "A standalone C# email engine that eliminated daily server hangs by offloading email generation into an independent scheduled service with a full web dashboard.",
};

export default function EmailWorkerPage() {
  return <EmailWorkerContent />;
}
