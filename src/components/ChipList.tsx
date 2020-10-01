import React from 'react';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

type ChipDataProps = {
  label: string;
  size: 'small' | 'medium';
  href?: string;
  color?: 'default' | 'primary' | 'secondary';
};

interface ChipListProps {
  chips: ChipDataProps[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
    },
  }),
);

export default function ChipList({ chips }: ChipListProps) {
  const styles = useStyles();
  return (
    <Box my={2} flexWrap='wrap' display='flex' flexDirection='row'>
      {chips.map((chip: ChipDataProps) => (
        <Chip
          className={styles.chip}
          key={chip.label}
          clickable={Boolean(chip.href)}
          color={chip.color || 'default'}
          label={chip.label}
          size={chip.size || 'small'}
          component={chip.href ? 'a' : undefined}
          href={chip.href}
        />
      ))}
    </Box>
  );
}
