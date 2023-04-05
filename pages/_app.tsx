import "../styles/globals.css";
import { Work_Sans } from "next/font/google";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Error from "next/error";
import Script from "next/script";
import * as gtag from "../utils/ga";
import { useEffect } from "react";
import { useRouter } from "next/router";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-workSans",
});

function MyApp({
  Component,
  pageProps,
  err,
}: AppProps & { err: Error }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: false,
            });
          `,
        }}
      />
      <main className={`${workSans.variable} font-sans`}>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}

export default MyApp;
