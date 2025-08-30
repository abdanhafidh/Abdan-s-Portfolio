interface BehanceIconProps {
  className?: string;
}

export function BehanceIcon({ className = "w-4 h-4" }: BehanceIconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.5 9.5c0-.828-.672-1.5-1.5-1.5H2v3h4c.828 0 1.5-.672 1.5-1.5zm0 5c0-.828-.672-1.5-1.5-1.5H2v3h4c.828 0 1.5-.672 1.5-1.5z"/>
      <path d="M0 4v16h8c2.209 0 4-1.791 4-4 0-1.328-.65-2.502-1.647-3.224C11.284 12.224 12 11.172 12 10c0-2.209-1.791-4-4-4H0zm2 2h4c.828 0 1.5.672 1.5 1.5S6.828 9 6 9H2V6zm0 5h4c.828 0 1.5.672 1.5 1.5S6.828 14 6 14H2v-3z"/>
      <circle cx="18" cy="9" r="3"/>
      <path d="M15 15h6c0-1.657-1.343-3-3-3s-3 1.343-3 3z"/>
      <rect x="16" y="6" width="4" height="1"/>
    </svg>
  );
}