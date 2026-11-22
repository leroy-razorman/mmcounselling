import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 24, strokeWidth = 1.6, children, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowIcon = (p: IconProps) => (
  <Icon size={18} strokeWidth={1.8} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);
export const ShieldIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3.5 19 6v5.5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
export const VideoIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="6" width="13" height="12" rx="2.5" />
    <path d="m16 10.5 5-3v9l-5-3" />
  </Icon>
);
export const SproutIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 20v-8" />
    <path d="M12 12c0-3.5-2.5-6-6.5-6 0 3.8 2.6 6 6.5 6Z" />
    <path d="M12 14c0-3.2 2.3-5.5 6-5.5 0 3.5-2.4 5.5-6 5.5Z" />
  </Icon>
);
export const PersonIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c1.2-3.6 3.9-5.5 7-5.5s5.8 1.9 7 5.5" />
  </Icon>
);
export const CoupleIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="8.5" cy="8.5" r="3" />
    <circle cx="15.5" cy="8.5" r="3" />
    <path d="M3 19c.8-3 3-4.6 5.5-4.6 1.4 0 2.6.4 3.5 1.2.9-.8 2.1-1.2 3.5-1.2 2.5 0 4.7 1.6 5.5 4.6" />
  </Icon>
);
export const HomeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v9h12v-9" />
    <path d="M10 19v-4.5h4V19" />
  </Icon>
);
export const SchoolIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 20h18" />
    <path d="M5 20V9l7-4 7 4v11" />
    <path d="M9 20v-5h6v5" />
    <path d="M10 10.5h4" />
  </Icon>
);
export const CompassIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </Icon>
);
export const CrossIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 4v16M7 9h10" />
  </Icon>
);
export const ChatIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h7A2.5 2.5 0 0 1 16 6.5v4A2.5 2.5 0 0 1 13.5 13H9l-3.5 3v-3A2.5 2.5 0 0 1 4 10.5Z" />
    <path d="M18 9h.5A1.5 1.5 0 0 1 20 10.5v4a1.5 1.5 0 0 1-1.5 1.5H18v2.5L15 16h-3" />
  </Icon>
);
export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 7 7l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Icon>
);
export const MailIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </Icon>
);
export const PinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </Icon>
);
export const FacebookIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M14.5 8H16V4.5h-2.5A3.5 3.5 0 0 0 10 8v2.5H8V14h2v6h3.5v-6H16l.5-3.5h-3V8.5a.5.5 0 0 1 .5-.5Z" />
  </Icon>
);
export const CheckIcon = (p: IconProps) => (
  <Icon size={20} strokeWidth={1.8} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Icon>
);

/** Decorative botanical line drawing used in the sage approach panel. */
export function Leaf({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 260" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" aria-hidden="true">
      <path d="M100 258 C100 190 98 130 104 60" />
      <path d="M102 170 C70 160 40 130 34 92 C66 96 92 120 102 170 Z" />
      <path d="M103 130 C134 118 160 88 164 50 C132 58 108 86 103 130 Z" />
      <path d="M104 92 C88 70 84 42 96 14 C114 36 114 66 104 92 Z" />
      <path d="M101 210 C128 204 152 186 162 158 C132 160 110 180 101 210 Z" />
    </svg>
  );
}
