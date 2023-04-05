import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import { Work_Sans } from "next/font/google";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-workSans",
});

function MyApp({ Component, pageProps }: AppProps) {
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={`${workSans.variable} font-sans`}>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}

export default MyApp;
