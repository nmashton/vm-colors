const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/**
 * Prefix an internal path with Astro's configured base path.
 * Absolute URLs are returned unchanged.
 */
export function url(path: string): string {
  if (/^(?:[a-z]+:)?\/\//i.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`.replace(/\/{2,}/g, "/");
}

/** The preview path for a theme and a logical site path. */
export function themePath(theme: string, path: string): string {
  const clean = path === "/" ? "/" : path.replace(/^\/|\/$/g, "");
  return url(clean ? `/themes/${theme}/${clean}/` : `/themes/${theme}/`);
}
