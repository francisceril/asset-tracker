export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      className={className}
    >
      <g clip-path="url(#a)">
        {/* <path fill="#040404" d="M0 0h18v18H0V0Z" /> */}
        <path fill="#F35325" d="M4.5 4.5h4.286v4.286H4.5V4.5Z" />
        <path fill="#81BC06" d="M9.214 4.5H13.5v4.286H9.214V4.5Z" />
        <path fill="#05A6F0" d="M4.5 9.214h4.286V13.5H4.5V9.214Z" />
        <path fill="#FFBA08" d="M9.214 9.214H13.5V13.5H9.214V9.214Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
