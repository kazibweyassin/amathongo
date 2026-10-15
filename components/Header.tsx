"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { nav } from "@/lib/site";

function current(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="page-wrap relative flex items-center justify-between gap-4 py-4">
        <Logo />
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line px-3 text-sm font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="site-nav"
          aria-label="Primary"
          className={`${open ? "absolute inset-x-0 top-full block border-b border-line bg-paper px-5 py-4" : "hidden"} md:static md:block md:border-0 md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-5">
            {nav.map((item) => {
              const active = current(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-2 text-sm no-underline ${active ? "font-semibold text-ink" : "text-bark hover:text-ink"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 md:pt-0">
              <WhatsAppButton label="WhatsApp" className="w-full md:w-auto" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
