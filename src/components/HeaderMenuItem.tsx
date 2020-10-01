import React from 'react';
import Link from 'next/link';
import { styled, useTheme, Theme } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import useActive from './useActive';

interface MenuButtonProps {
  selected: boolean;
  theme: Theme;
}

interface MenuButtonWrapperProps extends ButtonProps, MenuButtonProps {};

class MenuButtonWrapper extends React.Component<MenuButtonWrapperProps> {
  render() {
    return <MenuButton {...this.props} />
  }
}

const MenuButton = styled(
  ({
    selected,
    theme,
    ...other
  }: MenuButtonProps & Omit<ButtonProps, keyof MenuButtonProps>) => (
    <Button {...other} />
  ),
)({
  marginLeft: (props) => props.theme.spacing(1),
  marginRight: (props) => props.theme.spacing(1),
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  minWidth: 0,
  borderRadius: 0,
  borderBottomStyle: 'solid',
  borderBottomWidth: 3,
  borderBottomColor: (props: MenuButtonProps) =>
    props.selected
      ? props.theme.palette.getContrastText(props.theme.palette.primary.main)
      : 'transparent',
});

export default function HeaderMenuItem({ label, href, pathRegExp }) {
  const isActive = useActive(pathRegExp)
  const theme = useTheme();
  return (
    <Link href={href} passHref>
      <MenuButtonWrapper color='inherit' selected={isActive} theme={theme}>
        {label}
      </MenuButtonWrapper>
    </Link>
  );
}
