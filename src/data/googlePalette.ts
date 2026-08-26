export const GOOGLE_COLORS = [
  "#4285F4", // Blue
  "#EA4335", // Red
  "#FBBC05", // Yellow
  "#34A853", // Green
] as const;

export function getGoogleColor(index: number) {
  return GOOGLE_COLORS[index % GOOGLE_COLORS.length];
}
