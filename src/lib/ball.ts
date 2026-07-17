// Single source of truth for billiard-ball appearance, shared by the standalone
// <Ball> component and the <BilliardTable> diagram.

export const BALL_COLORS: Record<number, string> = {
  1: 'var(--ball-yellow)',
  2: 'var(--ball-blue)',
  3: 'var(--ball-red)',
  4: 'var(--ball-purple)',
  5: 'var(--ball-orange)',
  6: 'var(--ball-green)',
  7: 'var(--ball-maroon)',
  8: 'var(--ball-black)',
};

/** Standard pool color for a ball number (9–15 reuse 1–7's colors as stripes). */
export function ballColor(n: number): string {
  const idx = n <= 8 ? n : n - 8;
  return BALL_COLORS[idx] ?? 'var(--ball-black)';
}

export function isStripe(n: number): boolean {
  return n >= 9;
}

/** Which owner group a ball belongs to. */
export function groupOf(n: number): 'A' | 'B' | 'C' {
  if (n <= 5) return 'A';
  if (n <= 10) return 'B';
  return 'C';
}
