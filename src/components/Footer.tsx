import React from 'react';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';

export default function Footer() {
  const theme = useTheme();
  return (
    <Box py={3} color='background.paper'>
      <Container maxWidth="md">
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <Typography variant='body2'>
            Copyright © {new Date().getFullYear()} Startup Chiang Mai
          </Typography>
          <Typography variant='body2'>
            Site by{' '}
            <Link href='https://www.linkedin.com/in/graham-mcculloch/'>
              Graham McCulloch
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
