import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Startup Chiang Mai</title>
      </Head>
      <Typography variant='h3' component='h1' gutterBottom>
        Get in touch with Startup Chiang Mai
      </Typography>
      <form
        method='POST'
        action='https://formspree.io/lily@startupchiangmai.com'
      >
        <input type='hidden' name='_next' value='/' />
        <input type='hidden' name='_language' value='en' />
        <Grid container>
          <Grid item xs={12} sm={8} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id='name' label='Name' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='E-mail'
                  inputProps={{ type: 'email' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={4}
                  id='message'
                  label='Message'
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  size='large'
                  type='submit'
                  variant='contained'
                  color='primary'
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
