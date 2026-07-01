export function Logo({
  className,
  wordmark = true,
  variant = "light",
}: {
  className?: string;
  wordmark?: boolean;
  variant?: "light" | "onDark";
}) {
  const yFill = variant === "onDark" ? "#FFFFFF" : "#0F172A";
  const strokeCircle = variant === "onDark" ? "#FFFFFF" : "#0F172A";
  const bottomBar = variant === "onDark" ? "#FFFFFF" : "#0F172A";
  const wordFill = variant === "onDark" ? "#FFFFFF" : "#0F172A";

  const Badge = (
    <>
      <circle cx="60" cy="60" r="52" fill={variant === "onDark" ? "none" : "#FFFFFF"} stroke={strokeCircle} strokeWidth="6" />
      <text x="26" y="80" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="51" fill={yFill}>Y</text>
      <rect x="63" y="44" width="30" height="11" rx="3" fill="#06B6D4" />
      <rect x="63" y="57" width="21" height="11" rx="3" fill="#84CC16" />
      <rect x="63" y="70" width="30" height="11" rx="3" fill={bottomBar} />
    </>
  );

  if (!wordmark) {
    return (
      <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Youth Equipped">
        {Badge}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 330 120" className={className} role="img" aria-label="Youth Equipped">
      {Badge}
      <text x="135" y="52" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="34" fill={wordFill} letterSpacing="-1">YOUTH</text>
      <text x="135" y="92" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="34" fill={wordFill} letterSpacing="-1">EQUIPPED</text>
    </svg>
  );
}
