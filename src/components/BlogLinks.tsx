import React from 'react';
import Link from 'next/link';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { default as MuiLink } from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

type BlogLink = {
  slug: string;
  title: string;
};

interface BlogLinksProps {
  prevPost: BlogLink;
  nextPost: BlogLink;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center'
    },
    right: {
      justifyContent: 'flex-end'
    }
  }),
);

export default function BlogLinks({ prevPost, nextPost }: BlogLinksProps) {
  const styles = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        {prevPost && (
          <Link href={`/blog/${prevPost.slug}`} passHref>
            <MuiLink variant="button" className={styles.link}>
              <ArrowLeftIcon />
              {prevPost.title}
            </MuiLink>
          </Link>
        )}
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        {nextPost && (
          <Link href={`/blog/${nextPost.slug}`} passHref>
            <MuiLink variant="button" className={`${styles.link} ${styles.right}`}>
              {nextPost.title}
              <ArrowRightIcon />
            </MuiLink>
          </Link>
        )}
      </Grid>
    </Grid>
  );
}
