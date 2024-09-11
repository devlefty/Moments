export function url(path = "") {
  const baseUrl = process.env.NEXT_PUBLIC_URL || window.location.origin;

  return new URL(path, baseUrl);
}
