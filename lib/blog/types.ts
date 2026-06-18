export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  section: string;
  tags: string[];
  image: string;
  excerpt: string;
};
