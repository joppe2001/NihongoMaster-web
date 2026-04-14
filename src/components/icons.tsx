import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & { size?: number };

const icon = (path: React.ReactNode) => ({ size = 24, ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {path}
  </svg>
);

export const SunIcon = icon(
  <>
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07-1.42 1.42M6.35 17.65l-1.42 1.42m0-14.14 1.42 1.42m11.3 11.3 1.42 1.42" />
  </>
);

export const MoonIcon = icon(<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />);

export const CheckIcon = icon(<polyline points="4 12 10 18 20 6" />);

export const ArrowRightIcon = icon(
  <>
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13 5 20 12 13 19" />
  </>
);

export const SparkleIcon = icon(
  <>
    <path d="M12 3 14 10 21 12 14 14 12 21 10 14 3 12 10 10Z" />
  </>
);

export const BookOpenIcon = icon(
  <>
    <path d="M3 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3Z" />
    <path d="M21 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8Z" />
  </>
);

export const BrainIcon = icon(
  <>
    <path d="M9.5 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 .5 5 3 3 0 0 0 4.5 3V3Z" />
    <path d="M14.5 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-.5 5 3 3 0 0 1-4.5 3V3Z" />
  </>
);

export const BoltIcon = icon(<polyline points="13 2 4 14 12 14 11 22 20 10 12 10" />);

export const TrophyIcon = icon(
  <>
    <path d="M8 4h8v5a4 4 0 0 1-8 0Z" />
    <path d="M16 5h3a2 2 0 0 1-2 4" />
    <path d="M8 5H5a2 2 0 0 0 2 4" />
    <path d="M12 13v4" />
    <path d="M8 21h8" />
    <path d="M10 17h4l1 4H9Z" />
  </>
);

export const WriteIcon = icon(
  <>
    <path d="M4 20h4l10-10-4-4L4 16Z" />
    <path d="m14 6 4 4" />
  </>
);

export const TimerIcon = icon(
  <>
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2.5 2.5" />
    <path d="M10 2h4" />
  </>
);

export const SpeakerIcon = icon(
  <>
    <path d="M4 9v6h4l5 4V5L8 9Z" />
    <path d="M16 8a5 5 0 0 1 0 8" />
    <path d="M19 5a9 9 0 0 1 0 14" />
  </>
);

export const LeafIcon = icon(
  <>
    <path d="M20 4c-9 1-14 6-15 15 7-0.5 13-4.5 15-15Z" />
    <path d="M5 19c5-6 10-10 15-15" />
  </>
);

export const OfflineIcon = icon(
  <>
    <path d="M3 8l9 5 9-5" />
    <path d="M3 8v8l9 5 9-5V8" />
    <line x1="4" y1="4" x2="20" y2="20" />
  </>
);

export const ChartIcon = icon(
  <>
    <line x1="4" y1="20" x2="4" y2="4" />
    <line x1="4" y1="20" x2="20" y2="20" />
    <rect x="7" y="11" width="3" height="7" />
    <rect x="12" y="7" width="3" height="11" />
    <rect x="17" y="14" width="3" height="4" />
  </>
);

export const PhoneIcon = icon(
  <>
    <rect x="7" y="3" width="10" height="18" rx="2" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </>
);

export const DeviceIcon = icon(
  <>
    <rect x="3" y="5" width="18" height="12" rx="1" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </>
);
