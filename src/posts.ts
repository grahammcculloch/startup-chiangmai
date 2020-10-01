import fs from 'fs';
import path from 'path';
import pick from 'lodash/pick';
import forEach from 'lodash/forEach';
import parse from 'date-fns/parse';
import compareDesc from 'date-fns/compareDesc';
import matter from 'gray-matter';
import removeMd from 'remove-markdown';
import { BlogSummary, BlogPostsByCategory, Author } from './types';

const BLOG_POST_DATE_FORMAT = 'dd MMM yyyy';

const comparePostsByDate = (a: BlogSummary, b: BlogSummary) => {
  const refDate = new Date();
  return compareDesc(
    parse(a.date, BLOG_POST_DATE_FORMAT, refDate),
    parse(b.date, BLOG_POST_DATE_FORMAT, refDate),
  );
};

const readFile = (filename: string) =>
  fs.readFileSync(filename, {
    encoding: 'utf-8',
  });

const getExcerpt = (content: string, wordCount: number = 30): string => {
  const stripped = (removeMd(content) as string).trim().replace(/\s+/g, ' ');
  const words = stripped.split(' ');
  const truncated = words.splice(0, wordCount).join(' ');
  return words.length > wordCount ? `${truncated}...` : truncated;
};

const getAuthor = (slug: string): Author => {
  const authorFilename = path.join(process.cwd(), 'authors', `${slug}.md`);
  const rawContent = readFile(authorFilename);
  const { data, content } = matter(rawContent);
  return {
    ...pick(data, 'name', 'slug', 'avatar', 'twitterHandle'),
    description: content,
  };
};

const getBlogPostFilenames = () => {
  const postsPath = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsPath, 'utf-8');
  return files.filter((fn) => fn.endsWith('.md'));
};

export const getBlogPostSlugs = () => {
  const blogPostFilenames = getBlogPostFilenames();
  // The start of the filename should be the date in the format 'yyyy-MM-dd_'
  return blogPostFilenames.map((fn) => fn.slice(11).replace(/\.md$/, ''));
};

export const getBlogPost = async (slug) => {
  const allBlogPostFilenames = getBlogPostFilenames().sort();
  const blogPostIndex = allBlogPostFilenames.findIndex((fn) =>
    fn.endsWith(`${slug}.md`),
  );
  const blogPostPath = path.join(
    process.cwd(),
    'posts',
    allBlogPostFilenames[blogPostIndex],
  );
  const rawContent = readFile(blogPostPath);
  const { data, content } = matter(rawContent);

  data.content = content;

  if (blogPostIndex > 0) {
    data.prevPost = getBlogPostSummary(allBlogPostFilenames[blogPostIndex - 1]);
  }
  if (blogPostIndex < allBlogPostFilenames.length - 1) {
    data.nextPost = getBlogPostSummary(allBlogPostFilenames[blogPostIndex + 1]);
  }

  return {
    ...data,
    slug,
    author: getAuthor(data.author),
  };
};

const getBlogPostSummary = (filename): BlogSummary => {
  const blogPostPath = path.join(process.cwd(), 'posts', filename);
  const rawContent = readFile(blogPostPath);
  const { data, content } = matter(rawContent);
  return {
    ...pick(
      data,
      'title',
      'permalink',
      'image',
      'description',
      'categories',
      'date',
    ),
    slug: filename.slice(11).replace(/\.md$/, ''),
    author: getAuthor(data.author),
    excerpt: getExcerpt(content),
  };
};

export const getBlogPosts = async () => {
  const blogPostFilenames = getBlogPostFilenames();
  const blogPosts = await Promise.all(
    blogPostFilenames.map(getBlogPostSummary),
  );
  return blogPosts.sort(comparePostsByDate);
};

export const getBlogPostsByCategory = async (): Promise<BlogPostsByCategory> => {
  const allBlogPosts = await getBlogPosts();
  const blogsByCategory = allBlogPosts.reduce(
    (
      byCategory: BlogPostsByCategory,
      post: BlogSummary,
    ): BlogPostsByCategory => {
      forEach(post.categories, (category: string) => {
        if (!byCategory[category]) {
          byCategory[category] = [];
        }
        byCategory[category].push(post);
      });
      return byCategory;
    },
    {},
  );

  return blogsByCategory;
};
