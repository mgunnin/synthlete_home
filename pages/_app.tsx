import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Synthlete</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="favicon.ico" />
<<<<<<< HEAD
        <meta property="og:image" content="/thumbnail.png" />
=======
        <meta property="og:image" content="thumbnail.png" />

>>>>>>> Incoming
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
