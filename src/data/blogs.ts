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
];

export function getCategories(): string[] {
  return [...new Set(blogs.map(blog => blog.category).filter((c): c is string => Boolean(c)))];
}
