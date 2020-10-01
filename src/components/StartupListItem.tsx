import React from 'react';
import Link from 'next/link';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({}),
);
  
export default function StartupListItem({ startup }) {
  return (
    <Card>
      <Typography variant="h4">{startup.name}</Typography>
      <Link href={`/startups/${startup.id}`} passHref>
        <Button variant="contained">Details...</Button>
      </Link>
    </Card>
  )
}