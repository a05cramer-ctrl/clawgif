"use client";

interface GiraffeIconProps {
  size?: number;
  className?: string;
}

export function GiraffeIcon({ size = 32, className = "" }: GiraffeIconProps) {
  return (
    <div className={`giraffe-glow giraffe-sway ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="giraffe-idle"
      >
        {/* Head */}
        <ellipse cx="32" cy="12" rx="8" ry="7" fill="#c04848" />

        {/* Ears */}
        <ellipse cx="24.5" cy="7" rx="2.5" ry="3.5" fill="#c04848" />
        <ellipse cx="39.5" cy="7" rx="2.5" ry="3.5" fill="#c04848" />

        {/* Ossicones */}
        <line x1="26" y1="5" x2="25" y2="1.5" stroke="#c04848" strokeWidth="2" strokeLinecap="round" />
        <line x1="38" y1="5" x2="39" y2="1.5" stroke="#c04848" strokeWidth="2" strokeLinecap="round" />
        <circle cx="25" cy="1.5" r="1.2" fill="#40c8c8" />
        <circle cx="39" cy="1.5" r="1.2" fill="#40c8c8" />

        {/* Eyes — tech glow */}
        <circle cx="28.5" cy="11.5" r="1.8" fill="#050508" />
        <circle cx="35.5" cy="11.5" r="1.8" fill="#050508" />
        <circle cx="28.5" cy="11.5" r="1" fill="#40c8c8" />
        <circle cx="35.5" cy="11.5" r="1" fill="#40c8c8" />
        <circle cx="28.5" cy="11.5" r="0.4" fill="#ffffff" opacity="0.8" />
        <circle cx="35.5" cy="11.5" r="0.4" fill="#ffffff" opacity="0.8" />

        {/* Nostrils */}
        <circle cx="30.5" cy="15" r="0.6" fill="#6b2e2e" />
        <circle cx="33.5" cy="15" r="0.6" fill="#6b2e2e" />

        {/* Neck */}
        <path d="M28 18 Q27 30 28 44 L36 44 Q37 30 36 18" fill="#c04848" />

        {/* Circuit lines on neck */}
        <line x1="30" y1="20" x2="30" y2="26" stroke="#40c8c8" strokeWidth="0.5" opacity="0.3" />
        <line x1="34" y1="24" x2="34" y2="32" stroke="#40c8c8" strokeWidth="0.5" opacity="0.3" />
        <line x1="30" y1="30" x2="34" y2="30" stroke="#40c8c8" strokeWidth="0.5" opacity="0.2" />
        <circle cx="30" cy="26" r="0.8" fill="#40c8c8" opacity="0.4" />
        <circle cx="34" cy="32" r="0.8" fill="#40c8c8" opacity="0.4" />

        {/* Spots on neck */}
        <circle cx="31" cy="23" r="1.5" fill="#6b2e2e" opacity="0.4" />
        <circle cx="33" cy="28" r="1.3" fill="#6b2e2e" opacity="0.4" />
        <circle cx="31" cy="35" r="1.5" fill="#6b2e2e" opacity="0.4" />
        <circle cx="34" cy="39" r="1.2" fill="#6b2e2e" opacity="0.4" />

        {/* Body */}
        <ellipse cx="32" cy="50" rx="14" ry="8" fill="#c04848" />

        {/* Body spots */}
        <circle cx="26" cy="48" r="2" fill="#6b2e2e" opacity="0.3" />
        <circle cx="36" cy="47" r="2.2" fill="#6b2e2e" opacity="0.3" />
        <circle cx="32" cy="52" r="1.8" fill="#6b2e2e" opacity="0.3" />

        {/* Legs */}
        <rect x="22" y="55" width="3.5" height="8" rx="1.5" fill="#c04848" />
        <rect x="28" y="56" width="3.5" height="7" rx="1.5" fill="#c04848" />
        <rect x="33" y="56" width="3.5" height="7" rx="1.5" fill="#c04848" />
        <rect x="38.5" y="55" width="3.5" height="8" rx="1.5" fill="#c04848" />

        {/* Tail */}
        <path d="M46 48 Q50 44 48 40" stroke="#c04848" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="48" cy="39.5" r="1.2" fill="#40c8c8" opacity="0.5" />
      </svg>
    </div>
  );
}
