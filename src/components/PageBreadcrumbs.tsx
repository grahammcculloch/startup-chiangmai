import React from 'react';
import Link from 'next/link';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { default as MuiLink } from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

type Breadcrumb = {
  label: string,
  href?: string
}

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    breadcrumbs: {
      marginBottom: theme.spacing(2)
    },
    link: {
      display: 'flex'
    },
    icon: {
      width: 20,
      height: 20,
    },
  }),
);

export default function PageBreadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const styles = useStyles();
  return (
    <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbs}>
      <Link href="/" passHref>
        <MuiLink color="inherit" className={styles.link}>
          <HomeIcon className={styles.icon} />
        </MuiLink>
      </Link>
      {breadcrumbs.map(breadcrumb => breadcrumb.href ? (
        <Link href={breadcrumb.href} passHref>
          <MuiLink color="inherit">
            {breadcrumb.label}
          </MuiLink>
        </Link>
      ) : (
        <Typography color="textPrimary">{breadcrumb.label}</Typography>
      ))}
    </Breadcrumbs>
  );
}

