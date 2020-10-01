import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles, fade, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import AuthorAvatar from './AuthorAvatar';
import Typography from '@material-ui/core/Typography';

const TWITTER_COLOR = '#1da1f2';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    twitterIcon: {
      color: TWITTER_COLOR,
    },
    twitterChip: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      color: TWITTER_COLOR,
      borderColor: TWITTER_COLOR,
      marginLeft: theme.spacing(2),
    },
  }),
);

export default function AuthorBox({ author }) {
  const styles = useStyles();
  return (
    <Box py={3} display='flex' flexDirection='row' alignItems='center'>
      <AuthorAvatar author={author} size='80px' />
      <Box ml={4}>
        <Typography display='block' variant='h6'>
          {author.name}
          {author.twitterHandle && (
            <Chip
              className={styles.twitterChip}
              component='a'
              icon={<TwitterIcon className={styles.twitterIcon} />}
              href={`https://twitter.com/${author.twitterHandle}`}
              target='_blank'
              clickable
              variant="outlined"
              label='follow'
              size='small'
            />
          )}
        </Typography>
        <Typography color='textSecondary' display='block' variant='body1'>
          {author.description}
        </Typography>
      </Box>
    </Box>
  );
}
