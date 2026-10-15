"use client";

import Script from "next/script";
import { useEffect } from "react";

function measurementId(): string | null {
  const value = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
  return /^G-[A-Z0-9]+$/.test(value) ? value : null;
}

function containerId(): string | null {
  const value = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "";
  return /^GTM-[A-Z0-9]+$/.test(value) ? value : null;
}

function track(name: string) {
  const win = window as Window & {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  };
  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push({ event: name });
  win.gtag?.("event", name);
}

export function Analytics() {
  const ga = measurementId();
  const gtm = containerId();

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const tracked = target.closest("[data-track]");
      const name = tracked?.getAttribute("data-track");
      if (name) track(name);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {gtm ? (
        <Script id="gtm" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id=${gtm}';document.head.appendChild(s);`}
        </Script>
      ) : null}
      {ga ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}
