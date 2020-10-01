import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BlogPostCard from '../src/components/BlogPostCard';
import { BlogSummary } from '../src/types';

interface HomeProps {
  posts: BlogSummary[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Typography variant='h4' component='h1' gutterBottom>
        Recent Posts
      </Typography>
      <Grid container spacing={3}>
        {posts.slice(0, 3).map((post: BlogSummary, idx: number) => (
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
  const { getBlogPosts } = require('../src/posts');
  const posts = await getBlogPosts();
  return {
    props: { posts },
  };
}