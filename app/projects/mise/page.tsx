import type { Metadata } from "next";
import MiseContent from "@/components/content/MiseContent";

export const metadata: Metadata = {
  title: "Recipe Calculator (mise) | Christian Hagen Wiker",
  description:
    "A native Android app in Kotlin and Jetpack Compose that rescales recipes from a single limiting ingredient using exact rational math, ingredient-aware unit conversion, and on-device OCR capture.",
};

export default function MisePage() {
  return <MiseContent />;
}
