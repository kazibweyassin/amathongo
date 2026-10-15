import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  compact?: boolean;
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-3 no-underline" aria-label="House of Amathongo, home">
      {/* Optimized Next.js Image component */}
      <Image 
        src="/logo.png" // Path to your logo in the public/ folder
        alt=""          // Kept empty because aria-label on the Link handles screen readers
        width={100} 
        height={100} 
        className="shrink-0 object-contain"
        priority        // Tells Next.js to load this image instantly (good for headers)
      />
      
      {/* <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] tracking-tight text-ink">Spritual </span>
        {!compact && (
          <span className="mt-1 text-[0.68rem] lowercase tracking-[0.14em] text-muted">
            Healing
          </span>
        )}
      </span> */}
    </Link>
  );
}
