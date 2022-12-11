import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import Head from "next/head";
import favicon from "../public/favicon.ico";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Trevor Mathiak | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio website of full stack developer Trevor Mathiak"
        />
        <meta
          name="keywords"
          content="full stack, web, developer, trevor, mathiak"
        />
        <link rel="icon" href={favicon.src} />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
