export type LinkPlatform = 'tiktok' | 'instagram' | 'youtube' | 'article' | 'external';

export function normalizeHref(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (/^(https?:\/\/|mailto:)/i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}
