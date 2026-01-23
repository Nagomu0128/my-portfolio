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
  // SETUP_GUIDE.md を参照してプロダクトを追加してください
];
