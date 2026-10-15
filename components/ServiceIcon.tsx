export function ServiceIcon({ slug }: { slug: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8 text-moss"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {slug === "political-power" ? (
        <>
          <path d="M12 19V7" />
          <path d="M7.5 11.5 12 6l4.5 5.5" />
          <path d="M6 20h12" />
        </>
      ) : null}
      {slug === "court-cases" ? (
        <>
          <path d="M12 3.5v15" />
          <path d="M8 20.5h8" />
          <path d="M12 6.5H6.5L5 11h5.5z" />
          <path d="M12 6.5h5.5L19 11h-5.5z" />
        </>
      ) : null}
      {slug === "business-financial" ? (
        <>
          <path d="M4 19V10h4v9" />
          <path d="M10 19V6h4v13" />
          <path d="M16 19v-6h4v6" />
        </>
      ) : null}
      {slug === "traditional-healing" ? (
        <path d="M12 20c4.5-3.2 7-6.4 7-10a7 7 0 0 0-14 0c0 3.6 2.5 6.8 7 10z" />
      ) : null}
      {slug === "spiritual-protection" ? (
        <path d="M12 3.5 19 6.5v6.2c0 3.8-2.8 6.4-7 8.3-4.2-1.9-7-4.5-7-8.3V6.5l7-3z" />
      ) : null}
      {slug === "personal-family-guidance" ? (
        <>
          <circle cx="7" cy="9" r="1.6" />
          <circle cx="12" cy="8" r="1.6" />
          <circle cx="17" cy="9" r="1.6" />
          <path d="M4.5 18c.6-2.6 2.2-4 4.5-4s2.4 1 3 2" />
          <path d="M12 16c.6-1 1.6-2 3.2-2 2.2 0 3.6 1.4 4.3 4" />
        </>
      ) : null}
      {slug === "spiritual-consultation" ||
      ![
        "political-power",
        "court-cases",
        "business-financial",
        "traditional-healing",
        "spiritual-protection",
        "personal-family-guidance",
      ].includes(slug) ? (
        <>
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 4v3.2M12 16.8V20M4 12h3.2M16.8 12H20" />
        </>
      ) : null}
    </svg>
  );
}
