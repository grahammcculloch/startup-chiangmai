import React from 'react';
import Link from 'next/link';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import AuthorAvatar from './AuthorAvatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    content: {
      flex: 1,
    },
    actions: {
      padding: theme.spacing(2),
    }
  }),
);

export default function BlogPostCard({ post }) {
  const styles = useStyles();
  return (
    <Link href={`/blog${post.permalink}`}>
      <Card className={styles.card}>
        <CardMedia className={styles.media} image={post.image} />
        <CardContent className={styles.content}>
          <Typography variant='h5' component='h2' gutterBottom>
            {post.title}
          </Typography>
          <Typography display='block' variant='body2' color="textSecondary">
            {post.excerpt}
          </Typography>
        </CardContent>
        <CardActions className={styles.actions}>
          <Box display='flex' flexDirection='row' alignItems="center">
            <AuthorAvatar author={post.author} />
            <Box ml={2}>
              <Typography display='block' variant='caption'>
                {post.author.name}
              </Typography>
              <Typography color="textSecondary" display='block' variant='caption'>
                {post.date}
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Link>
  );
}
