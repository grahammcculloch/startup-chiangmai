import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = ({ size }) => makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: size,
      height: size,
      color: theme.palette.getContrastText(theme.palette.secondary.dark),
      backgroundColor: theme.palette.secondary.dark,
    },
  }),
);

export default function AuthorAvatar({ author, size = '40px' }) {
  const styles = useStyles({size})();
  return (
    <Avatar
      className={styles.avatar}
      alt={author.name}
      src={author.avatar}
    >
      {author.name[0]}
    </Avatar>
  )
}