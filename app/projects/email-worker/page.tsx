import type { Metadata } from "next";
import EmailWorkerContent from "@/components/content/EmailWorkerContent";

export const metadata: Metadata = {
  title: "Email Worker Service | Christian Hagen Wiker",
  description:
    "A standalone C# email engine that removed on average more than an hour of downtime a day by offloading email generation into an independent scheduled service with a full web dashboard.",
};

export default function EmailWorkerPage() {
  return <EmailWorkerContent />;
}
