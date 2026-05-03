export interface Blog {
  title: string;
  excerpt: string;
  url: string;
  image?: string;
  date: string;
  category?: string;
}

const ZENN_USERNAME = 'nagomu';

interface ZennArticle {
  title: string;
  slug: string;
  published_at: string;
  og_image_url?: string;
  path: string;
  publication?: { name: string } | null;
  body_letters_count?: number;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
}

export async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(
      `https://zenn.dev/api/articles?username=${ZENN_USERNAME}&order=latest`
    );
    if (!res.ok) return [];
    const data = (await res.json()) as { articles: ZennArticle[] };
    return data.articles.map((a) => ({
      title: a.title,
      excerpt: '',
      url: `https://zenn.dev${a.path}`,
      image: a.og_image_url,
      date: formatDate(a.published_at),
      category: a.publication?.name ?? 'Zenn',
    }));
  } catch {
    return [];
  }
}

export function getCategories(blogs: Blog[]): string[] {
  return [...new Set(blogs.map((b) => b.category).filter((c): c is string => Boolean(c)))];
}
