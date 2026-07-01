export function ProgramsWheel({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 360" className={className} role="img" aria-label="The five Youth Equipped program tracks">
      <path d="M200,180 L200,10 A170,170 0 0,1 361.6,129.5 Z" fill="#3B82F6" />
      <path d="M200,180 L361.6,129.5 A170,170 0 0,1 300.2,318.6 Z" fill="#22C55E" />
      <path d="M200,180 L300.2,318.6 A170,170 0 0,1 99.8,318.6 Z" fill="#F59E0B" />
      <path d="M200,180 L99.8,318.6 A170,170 0 0,1 38.4,129.5 Z" fill="#EC4899" />
      <path d="M200,180 L38.4,129.5 A170,170 0 0,1 200,10 Z" fill="#8B5CF6" />
      <text x="269" y="90" textAnchor="middle" fill="#fff" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="16">TechReady</text>
      <text x="305" y="222" textAnchor="middle" fill="#fff" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="16">WorkReady</text>
      <text x="200" y="305" textAnchor="middle" fill="#fff" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="16">LeadReady</text>
      <text x="95" y="222" textAnchor="middle" fill="#fff" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="14">CreateReady</text>
      <text x="131" y="90" textAnchor="middle" fill="#fff" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="16">StoryReady</text>
      <circle cx="200" cy="180" r="60" fill="#fff" />
      <text x="173" y="200" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="52" fill="#0F172A">Y</text>
      <rect x="205" y="153" width="26" height="8" rx="2" fill="#06B6D4" />
      <rect x="205" y="166" width="19" height="8" rx="2" fill="#84CC16" />
      <rect x="205" y="179" width="26" height="8" rx="2" fill="#0F172A" />
    </svg>
  );
}
