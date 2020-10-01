import React from 'react';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BlogPostCard from '../../src/components/BlogPostCard';
import { BlogSummary } from '../../src/types';

interface BlogIndexProps {
  posts: BlogSummary[];
}

export default function BlogIndexPage({ posts }: BlogIndexProps) {
  return (
    <>
      <Head>
        <title>Blog | Startup Chiang Mai</title>
      </Head>
      <Typography variant='h4' component='h1' gutterBottom>
        All Posts
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post: BlogSummary, idx: number) => (
          <Grid key={post.slug} item xs={12} sm={6} md={4}>
            <BlogPostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const { getBlogPosts } = require('../../src/posts');
  const posts = await getBlogPosts();
  return {
    props: { posts },
  };
}
