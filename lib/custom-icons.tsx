import type { SVGProps } from 'react'

export function ProcreateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="10" r="1.25" />
      <path d="M13 7.5l4.5 4.5" />
      <path d="M16.5 12l-3 3" />
    </svg>
  )
}

export function SketchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <g transform="translate(0 3) scale(1 0.85)">
        <path d="M12 3l7 7-7 11-7-11 7-7z" />
        <path d="M5 10h14" />
        <path d="M9 10l3 11" />
        <path d="M15 10l-3 11" />
      </g>
    </svg>
  )
}

export function ZeplinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <ellipse cx="12" cy="10" rx="8" ry="5" />
      <path d="M4 10h-1" />
      <path d="M20 10h1" />
      <path d="M9 15h6" />
      <rect x="10" y="15" width="4" height="2" rx="0.75" />
      <path d="M18.5 9.5l2.5-1.5" />
      <path d="M18.5 10.5l2.5 1.5" />
    </svg>
  )
}
