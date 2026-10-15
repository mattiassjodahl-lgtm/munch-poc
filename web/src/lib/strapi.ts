const BASE = (import.meta.env.STRAPI_URL ?? process.env.STRAPI_URL ?? 'http://localhost:1337').replace(/\/$/, '');
const TOKEN = import.meta.env.STRAPI_TOKEN ?? process.env.STRAPI_TOKEN;

export type Theme = 'pinkBlack' | 'bluePink' | 'goldBlack' | 'blueRed' | 'greenPink' | 'blackOrange' | 'white';
export type Media = { url: string; alternativeText?: string | null } | null;
export type Link = { label: string; url: string };

export type Exhibition = {
  documentId: string;
  kicker: string;
  title: string;
  slug: string;
  teaser?: string;
  dateLabel?: string;
  floor?: string;
  theme: Theme;
  isCollection?: boolean;
  image?: Media;
  imageUrl?: string;
  imageCredit?: string;
  intro?: string;
  body?: Array<Record<string, any> & { __component: string }>;
};

export type EventItem = { title: string; slug: string; category?: string; startsAt?: string; image?: Media; imageUrl?: string };

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}/api${path}`, {
    headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {},
  });
  if (!res.ok) throw new Error(`Strapi ${res.status} on ${path}`);
  return (await res.json()).data as T;
}

export const mediaUrl = (m?: Media, fallback?: string) => {
  if (m?.url) return m.url.startsWith('http') ? m.url : `${BASE}${m.url}`;
  return fallback ?? '';
};

export const getGlobal = () =>
  get<any>('/global?populate[mainNav]=true&populate[footerColumns][populate]=links');

const sectionPopulate = ['link-list', 'cta', 'text-banner', 'exhibition-carousel', 'events-list']
  .map((s) => `populate[sections][on][sections.${s}][populate]=*`)
  .join('&');

export const getHomepage = () =>
  get<any>(`/homepage?populate[hero][populate]=*&${sectionPopulate}`);

export const getExhibitions = () =>
  get<Exhibition[]>('/exhibitions?sort=order:asc&populate[image]=true&pagination[pageSize]=50');

export const getExhibition = async (slug: string) => {
  const list = await get<Exhibition[]>(
    `/exhibitions?filters[slug][$eq]=${encodeURIComponent(slug)}&populate[image]=true&populate[body][populate]=*`,
  );
  return list[0];
};

export const getEvents = (limit = 4) =>
  get<EventItem[]>(`/events?sort=startsAt:asc&populate[image]=true&pagination[pageSize]=${limit}`);

export const themes: Record<Theme, { bg: string; fg: string }> = {
  pinkBlack: { bg: '#eba398', fg: '#000000' },
  bluePink: { bg: '#0f2335', fg: '#eba398' },
  goldBlack: { bg: '#b89e6b', fg: '#000000' },
  blueRed: { bg: '#0f2335', fg: '#fe390f' },
  greenPink: { bg: '#daf5ae', fg: '#ff65b1' },
  blackOrange: { bg: '#141414', fg: '#fe390f' },
  white: { bg: '#ffffff', fg: '#000000' },
};

export const themeStyle = (t?: Theme) => {
  const c = themes[t ?? 'white'] ?? themes.white;
  return `--theme-bg:${c.bg};--theme-fg:${c.fg};`;
};

export const formatEventDate = (iso?: string) => {
  if (!iso) return '';
  const d = new Date(iso);
  const p = (n: number) => String(n).padStart(2, '0');
  const oslo = new Date(d.toLocaleString('en-US', { timeZone: 'Europe/Oslo' }));
  return `${p(oslo.getDate())}.${p(oslo.getMonth() + 1)}.${oslo.getFullYear()}, ${p(oslo.getHours())}:${p(oslo.getMinutes())}`;
};
