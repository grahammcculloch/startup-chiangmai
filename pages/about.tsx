import Head from 'next/head';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Startup Chiang Mai</title>
      </Head>
      <Typography variant="h3" component="h1" gutterBottom>About Startup Chiang Mai</Typography>
      <Box
        p={3}
        mb={3}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        bgcolor="text.primary"
        color="background.paper"
      >
        <Typography variant="h4" component="h2" gutterBottom>
          How many startups are there in Chiang Mai?
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom>
        No one seems to know how many startups there are in Chiang Mai, much less how many 
        of those are investable businesses. Are these startups only Thai-focused or do they 
        have global potential? Are there any ventures founded by the city's huge community 
        of digital nomads that are worth knowing about?
      </Typography>
      <Typography variant="body1" gutterBottom>
        The questions abound, but the answers are hard to find (especially in English).
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Shining a Spotlight on Chiang Mai
      </Typography>
      <Typography variant="body1" gutterBottom>
        Startup Chiang Mai is an attempt to improve visibility into Chiang Mai's local tech, 
        entrepreneurship and startup ecosystem.
      </Typography>
      <Typography variant="body1" gutterBottom>
        By building a directory of all the startups in Chiang Mai, this project aims to provide 
        insight into the local ecosystem and kickstart connections and opportunities.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We'll also be telling the stories of founders, investors and ecosystem players, helping 
        to share knowledge and foster community.
      </Typography>
      <Typography variant="h5" component="h3" gutterBottom>
        Join Us in Building Chiang Mai’s future
      </Typography>
      <Typography variant="body1" gutterBottom>
        This project is created by <Link target="_blank" href="https://lilybruns.com/">Lily Bruns</Link>, Chiang Mai 
        native, startup geek, and a founder of the <Link target="_blank" href="https://www.facebook.com/ChiangMaiEntrepreneurs/">
        Chiang Mai Entrepreneurship Association</Link>.
      </Typography>
    </>
  )
}

