/**
 * Products Data
 * =============
 * ##TODO: このファイルにプロダクト情報を追加してください
 *
 * 各プロダクトには以下のプロパティを設定できます:
 * - title: プロダクト名 (必須)
 * - description: 説明文 (必須)
 * - image: サムネイル画像のパス (必須) - public/images/products/ に画像を配置
 * - technologies: 使用技術の配列 (必須)
 * - category: カテゴリ ('web', 'mobile', 'other') (任意)
 * - demoUrl: デモサイトのURL (任意)
 * - githubUrl: GitHubリポジトリのURL (任意)
 * - date: 制作時期 (任意)
 */

export interface Product {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category?: string;
  demoUrl?: string;
  githubUrl?: string;
  date?: string;
}

export const products: Product[] = [
  // ##TODO: 以下はサンプルデータです。実際のプロダクトに置き換えてください

  {
    title: 'Sample Portfolio Site',
    description: 'AstroとBootstrap 5で作成したポートフォリオサイト。レスポンシブ対応でモダンなデザインを実現。',
    image: '/images/products/portfolio.jpg',
    technologies: ['Astro', 'TypeScript', 'Bootstrap 5'],
    category: 'web',
    demoUrl: '#',
    githubUrl: '#',
    date: '2025.01'
  },

  {
    title: 'Task Management App',
    description: 'チーム向けのタスク管理アプリケーション。リアルタイム同期とカンバンボード機能を搭載。',
    image: '/images/products/taskapp.jpg',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    category: 'web',
    demoUrl: '#',
    githubUrl: '#',
    date: '2024.12'
  },

  {
    title: 'Weather Forecast API',
    description: '天気予報データを提供するRESTful API。Goで実装し、Dockerでコンテナ化。',
    image: '/images/products/weather-api.jpg',
    technologies: ['Go', 'Docker', 'PostgreSQL', 'GCP'],
    category: 'other',
    githubUrl: '#',
    date: '2024.11'
  }

  // ##TODO: ここに新しいプロダクトを追加
];
