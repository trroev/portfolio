import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import { Work_Sans } from "next/font/google";
import Head from "next/head";
import favicon from "../public/favicon.ico";
import { Navbar } from "../components/Navbar";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-workSans",
});

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
      <main className={`${workSans.variable} font-sans`}>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}

export default MyApp;
