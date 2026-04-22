interface ActLogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function ActLogo({ className = "", variant = "dark" }: ActLogoProps) {
  const textColor = variant === "light" ? "#ffffff" : "#0d2a45";
  const leafColor = variant === "light" ? "#90c8e8" : "#3a80b5";
  const accentColor = variant === "light" ? "#b8e0f5" : "#5aabdc";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Leaf + air wave mark */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Leaf shape */}
        <path
          d="M18 4C18 4 6 10 6 20C6 26.627 11.373 32 18 32C24.627 32 30 26.627 30 20C30 10 18 4 18 4Z"
          fill={leafColor}
          opacity="0.9"
        />
        {/* Air wave lines */}
        <path
          d="M10 18C12 15 14.5 13.5 18 13.5C21.5 13.5 24 15 26 18"
          stroke={accentColor}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M13 22C14.5 20 16 19 18 19C20 19 21.5 20 23 22"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Center dot */}
        <circle cx="18" cy="24.5" r="1.5" fill={accentColor} />
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className="font-bold text-sm tracking-wide"
          style={{ color: textColor }}
        >
          台灣健康空氣行動聯盟
        </span>
        <span
          className="font-medium text-xs tracking-widest mt-0.5"
          style={{ color: variant === "light" ? "rgba(255,255,255,0.7)" : accentColor }}
        >
          Air Clean Taiwan
        </span>
      </div>
    </div>
  );
}
