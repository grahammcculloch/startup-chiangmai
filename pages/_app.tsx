import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { API } from "aws-amplify";
import config from "../src/aws-exports";

API.configure(config);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
