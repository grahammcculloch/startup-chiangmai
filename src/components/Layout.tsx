import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      minHeight: '60vh',
      backgroundColor: '#fafafa'
    }
  }),
);

export default function Layout ({ children }: LayoutProps) {
  const styles = useStyles();
  return (
    <>
      <Header/>
      <Box className={styles.main}>
        <Container maxWidth="md">
          <Box py={3}>
            {children}
          </Box>
        </Container>
      </Box>
      <Footer/>
    </>
  )
}