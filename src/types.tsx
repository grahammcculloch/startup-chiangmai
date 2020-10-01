
export interface Author {
  name: string;
  slug: string;
  avatar?: string;
  twitterHandle?: string;
  description: string;
}

export interface BlogSummary {
  title: string;
  image: string;
  permalink: string;
  description: string;
  date: string;
  categories: string[];
  slug: string;
  excerpt: string;
  author: Author;
}

export interface BlogPostsByCategory {
  [key: string]: BlogSummary[];
}