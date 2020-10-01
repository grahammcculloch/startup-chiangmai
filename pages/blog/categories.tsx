import React from 'react';
import Head from 'next/head';
import map from 'lodash/map';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BlogPostCard from '../../src/components/BlogPostCard';
import { BlogPostsByCategory, BlogSummary } from '../../src/types';

interface BlogCategoriesProps {
  postsByCategory: BlogPostsByCategory;
}

export default function BlogCategoriesPage({
  postsByCategory,
}: BlogCategoriesProps) {
  return (
    <>
      <Head>
        <title>Blog Categories | Startup Chiang Mai</title>
      </Head>
      {map(postsByCategory, (posts: BlogSummary[], category: string) => (
        <Box key={category} mb={4}>
          <Typography id={category} variant='h4' component='h1' gutterBottom>
            {category}
          </Typography>
          <Grid container spacing={3}>
            {posts.map((post: BlogSummary, idx: number) => (
              <Grid key={post.slug} item xs={12} sm={6} md={4}>
                <BlogPostCard post={post} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const { getBlogPostsByCategory } = require('../../src/posts');
  const postsByCategory = await getBlogPostsByCategory();
  return {
    props: { postsByCategory },
  };
}
