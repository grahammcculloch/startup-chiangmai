import React from 'react';
import Head from 'next/head';
import parse from 'date-fns/parse';
import formatISO from 'date-fns/formatISO';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { mdToReact } from '../../src/markdown';
import AuthorBox from '../../src/components/AuthorBox';
import ChipList from '../../src/components/ChipList';
import BlogLinks from '../../src/components/BlogLinks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  }),
);

function BlogPostPage({ post }) {
  const styles = useStyles();
  const content = React.useMemo(() => {
    return mdToReact(post.content);
  }, [post]);
  return (
    <>
      <Head>
        <title>{`${post.title} | Startup Chiang Mai`}</title>
        <meta name='author' content={post.author.name} />
        <meta name='description' content={post.description} />
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.description} />
        <meta property='og:site_name' content='Startup Chiang Mai' />
        <meta property='og:image' content={post.image} />
        <meta property='og:type' content='article' />
        <meta
          property='article:published_time'
          content={formatISO(parse(post.date, 'dd MMM yyyy', new Date()))}
        />
      </Head>
      <AuthorBox author={post.author} />
      <Typography variant='h3' component='h1' gutterBottom>
        {post.title}
      </Typography>
      <Typography variant='overline' gutterBottom>
        {post.date}
      </Typography>
      {post.image && <img src={post.image} width='100%' />}
      {content}
      <ChipList
        chips={post.categories.map((category: string) => ({
          label: category,
          color: 'secondary',
          href: `/blog/categories#${category}`,
        }))}
      />
      <BlogLinks prevPost={post.prevPost} nextPost={post.nextPost} />
    </>
  );
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const { getBlogPost } = require('../../src/posts');
  const post = await getBlogPost(context.params.slug);
  return {
    props: { post },
  };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
  const { getBlogPostSlugs } = require('../../src/posts');
  return {
    paths: getBlogPostSlugs().map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}

export default BlogPostPage;
