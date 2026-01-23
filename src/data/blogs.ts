export interface Blog {
  title: string;
  excerpt: string;
  url: string;
  image: string;
  date: string;
  category?: string;
}

export const blogs: Blog[] = [
  // SETUP_GUIDE.md を参照してブログを追加してください
  {
    title: '分散技術勉強会 〜クラウドと分散技術のよもやま話〜',
    excerpt: 'クラウドと分散技術についての勉強会の記録です。',
    url: 'https://zenn.dev/gdgoc_osaka/articles/16f728d8a845f7',
    image: '/images/blogs/astro.png',
    date: '2025.09.23',
    category: 'Events',
  }
];

export function getCategories(): string[] {
  return [...new Set(blogs.map(blog => blog.category).filter((c): c is string => Boolean(c)))];
}
