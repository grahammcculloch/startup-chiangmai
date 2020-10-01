import React from 'react';
import type { AppProps } from 'next/app';
import { API } from 'aws-amplify';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import theme from '../src/theme';
import Layout from '../src/components/Layout';
import '../styles/globals.css';

// HACK: Copied from the auto-generated src/aws-exports.js (and modified to protect the API key)
const awsConfig = {
  "aws_project_region": "ap-southeast-1",
  "aws_appsync_graphqlEndpoint": "https://3i4n625lhvfg3khgusr264ly5y.appsync-api.ap-southeast-1.amazonaws.com/graphql",
  "aws_appsync_region": "ap-southeast-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": process.env.APPSYNC_API_KEY
};

API.configure(awsConfig);

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Startup Chiang Mai</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
