import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Startup Chiang Mai</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Startup Chiang Mai</h1>
        <Link href='/directory'>
          <a>Directory</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </main>
    </>
  );
}
