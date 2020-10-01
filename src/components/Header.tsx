import React from 'react';
import Link from 'next/link';
import List from '@material-ui/core/List';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import HeaderMenuItem from './HeaderMenuItem';
import DrawerMenuItem from './DrawerMenuItem';

const MENU_ITEMS = {
  directory: {
    href: '/startups',
    label: 'Directory',
    pathRegExp: new RegExp(/^\/startups/),
  },
  posts: {
    href: '/blog',
    label: 'Posts',
    pathRegExp: new RegExp(/^\/blog/),
  },
  about: {
    href: '/about',
    label: 'About',
    pathRegExp: new RegExp(/^\/about/),
  },
  contact: {
    href: '/contact',
    label: 'Contact',
    pathRegExp: new RegExp(/^\/contact/),
  }
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      height: '40px',
      [theme.breakpoints.down('sm')]: {
        height: '30px',
      },
    },
    drawerList: {
      minWidth: '40vw',
    },
  }),
);

type HideOnScrollProps = {
  children: React.ReactElement;
};

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar() {
  const styles = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Container maxWidth='md'>
              <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'
              >
                <Link href='/' passHref>
                  <ButtonBase>
                    <img
                      className={styles.logo}
                      src='/img/logo-white.png'
                      alt='Startup Chiang Mai logo'
                    />
                  </ButtonBase>
                </Link>
                <Hidden smDown>
                  <Box display='flex' flexDirection='row' alignItems='center'>
                    <HeaderMenuItem {...MENU_ITEMS.directory} />
                    <HeaderMenuItem {...MENU_ITEMS.posts} />
                    <HeaderMenuItem {...MENU_ITEMS.about} />
                    <HeaderMenuItem {...MENU_ITEMS.contact} />
                  </Box>
                </Hidden>
                <Hidden mdUp>
                  <IconButton
                    onClick={() => setIsDrawerOpen(true)}
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    anchor='right'
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                  >
                    <div onClick={() => setIsDrawerOpen(false)}>
                      <List className={styles.drawerList}>
                        <DrawerMenuItem {...MENU_ITEMS.directory} />
                        <DrawerMenuItem {...MENU_ITEMS.posts} />
                        <DrawerMenuItem {...MENU_ITEMS.about} />
                        <DrawerMenuItem {...MENU_ITEMS.contact} />
                      </List>
                    </div>
                  </Drawer>
                </Hidden>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
