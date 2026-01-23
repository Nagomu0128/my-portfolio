/**
 * Blogs Data
 * ==========
 * ##TODO: このファイルにブログ記事情報を追加してください
 *
 * 各ブログには以下のプロパティを設定できます:
 * - title: 記事タイトル (必須)
 * - excerpt: 記事の概要・抜粋 (必須)
 * - url: 記事のURL (必須) - Zenn, Qiita, noteなどの外部リンク
 * - image: サムネイル画像のパス (必須) - public/images/blogs/ に画像を配置
 * - date: 投稿日 (必須)
 * - category: カテゴリ (任意)
 */

export interface Blog {
  title: string;
  excerpt: string;
  url: string;
  image: string;
  date: string;
  category?: string;
}

export const blogs: Blog[] = [
  // ##TODO: 以下はサンプルデータです。実際のブログ記事に置き換えてください

  {
    title: 'Next.js 15の新機能を試してみた',
    excerpt: 'Next.js 15がリリースされたので、新機能を一通り試してみました。特にPartial Prerenderingが気になっていたので詳しく解説します。',
    url: '#',
    image: '/images/blogs/nextjs.jpg',
    date: '2025.01.15',
    category: 'Tech'
  },

  {
    title: 'DockerとKubernetesの基礎を学ぶ',
    excerpt: 'コンテナ技術の基礎から、実際にKubernetesクラスタを構築するまでの学習記録をまとめました。',
    url: '#',
    image: '/images/blogs/docker.jpg',
    date: '2025.01.08',
    category: 'Infrastructure'
  },

  {
    title: '九州一周一人旅の記録',
    excerpt: 'B2の春休みに行った九州一周一人旅。福岡から始まり、長崎、熊本、鹿児島、宮崎、大分を巡りました。',
    url: '#',
    image: '/images/blogs/kyushu.jpg',
    date: '2024.04.20',
    category: 'Travel'
  }

  // ##TODO: ここに新しいブログ記事を追加
];

// Helper function to get unique categories
export function getCategories(): string[] {
  return [...new Set(blogs.map(blog => blog.category).filter((c): c is string => Boolean(c)))];
}
