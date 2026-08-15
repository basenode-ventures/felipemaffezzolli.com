import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE.name },
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
