import { useRouter } from "next/router";
import Script from "next/script";
import { memo, useEffect } from "react";

const measurementId = process.env.GA_MEASUREMENT_ID;

const GoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    if (!measurementId || router.isPreview) return;
    gtag("config", measurementId, {
      send_page_view: false,
    });
    gtag("event", "page_view", {
      page_path: window.location.pathname,
      send_to: measurementId,
    });
  }, [router.isPreview]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!measurementId || router.isPreview) return;
      gtag("event", "page_view", {
        page_path: url,
        send_to: measurementId,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events, router.isPreview]);

  if (!measurementId || router.isPreview) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      ></Script>
      {/* 👇 gtag function definition. notice that we don't send page views at this point.  */}
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
        }}
      />
    </>
  );
};

export default memo(GoogleAnalytics);
