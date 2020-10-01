import React from 'react';
import Link from 'next/link';
import useActive from './useActive';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ListItemLink extends React.Component<
  ListItemProps<'a', { button?: true }>
> {
  render() {
    return <ListItem button component='a' {...this.props} />;
  }
}

export default function DrawerMenuItem({ label, href, pathRegExp }) {
  const isActive = useActive(pathRegExp);
  return (
    <Link href={href} passHref>
      <ListItemLink selected={isActive}>
        <ListItemText primary={label} />
      </ListItemLink>
    </Link>
  )
}