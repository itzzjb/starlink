// App mark: a ground station transmitting — a solid node at the lower left with
// three widening arcs sweeping up and over it. Distinct from any upstream mark,
// and legible down to 16px because it is three strokes and a disc, nothing more.
//
// Paints in currentColor so it inverts with the theme like the rest of the ink.
// The wordmark is not part of it — TopBar sets "STARLINK" in type beside it.

export function AppLogo({ size = 26, ...props }: React.ComponentProps<"svg"> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 220 220'
      fill='none'
      role='img'
      aria-label='Starlink'
      {...props}
    >
      <circle cx='55' cy='162' r='16' fill='currentColor' />
      <path
        d='M55,116 A46,46 0 0 1 101,162'
        stroke='currentColor'
        strokeWidth='13'
        strokeLinecap='round'
        opacity='0.95'
      />
      <path
        d='M55,80 A82,82 0 0 1 137,162'
        stroke='currentColor'
        strokeWidth='13'
        strokeLinecap='round'
        opacity='0.6'
      />
      <path
        d='M55,44 A118,118 0 0 1 173,162'
        stroke='currentColor'
        strokeWidth='13'
        strokeLinecap='round'
        opacity='0.32'
      />
    </svg>
  );
}
