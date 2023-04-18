import "../styles/globals.css";
import { Work_Sans } from "next/font/google";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { Navbar } from "../components/Navbar";
import { siteConfig } from "../config";
import * as gtag from "../utils/gtag";

const isProd = process.env.NODE_ENV === "production";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-workSans",
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProd) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta
          name="description"
          content="Portfolio website of full stack developer Trevor Mathiak"
          key="desc"
        />
        <meta name="keywords" content={siteConfig.keywords} />
        <meta name="author" content={siteConfig.author} />
        <meta name="creator" content={siteConfig.author} />
        <link rel="author" href={siteConfig.url} />
        <meta
          property="og:title"
          content={siteConfig.openGraph.title}
        />
        <meta
          property="og:description"
          content={siteConfig.openGraph.description}
        />
        <meta property="og:url" content={siteConfig.openGraph.url} />
        <meta
          property="og:site_name"
          content={siteConfig.openGraph.site_name}
        />
        <meta
          property="og:image:secure_url"
          content={siteConfig.openGraph.image}
        />
        <meta
          property="og:image"
          content={siteConfig.openGraph.image}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={siteConfig.openGraph.title}
        />
        <meta
          property="og:type"
          content={siteConfig.openGraph.type}
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
