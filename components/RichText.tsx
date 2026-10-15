import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN = /\[\[(\/[^\]|]+)\|([^\]]+)\]\]/g;

export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(
      <Link key={key} href={match[1]} className="link">
        {match[2]}
      </Link>,
    );
    key += 1;
    last = index + match[0].length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
