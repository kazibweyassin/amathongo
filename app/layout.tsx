import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileContactBar } from "@/components/MobileContactBar";
import { organizationJson, websiteJson } from "@/lib/schema";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = rootMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full border-t-4 border-moss bg-paper pb-20 text-ink md:pb-0">
      <JsonLd data={organizationJson()} />
      <JsonLd data={websiteJson()} />
      <meta
        name="google-site-verification"
        content="UVCWRovWbOItM8RP_oZ5_G5RRy2o_8V0n6lu3mcOCy4"
      />
      <Analytics />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
