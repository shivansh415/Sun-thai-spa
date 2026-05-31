"use client";

interface InstagramIconProps {
  className?: string;
}

/**
 * Instagram glyph. Lucide v1 dropped brand icons due to trademark concerns,
 * so this ships as a local SVG component (camera body + lens + flash).
 */
export default function InstagramIcon({
  className = "w-5 h-5",
}: InstagramIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
