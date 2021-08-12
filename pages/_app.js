import PageLayout from "../layout/PageLayout/PageLayout";
import "../styles/globals.css";
import { useState } from "react";
import Head from "next/head";
import NProgress from "nprogress";
NProgress.configure({ showSpinner: false });

import Router from "next/router";
import nProgress from "nprogress";
function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    console.log("loading...");
    NProgress.start();
    setIsLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
    console.log("Complete...");
    setIsLoading(false);
  });
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      {/* ref. for responsive-ness */}
      <div className="bg-red-500 h-2 sm:bg-green-500 md:bg-blue-500 lg:bg-purple-500 xl:bg-yellow-500 2xl:bg-pink-500"></div>
      {isLoading && (
        <p className="text-blue-500 text-lg fixed  bg-gray-900 bg-opacity-75 z-10 w-full text-center">
          loading...
        </p>
      )}
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}

export default MyApp;
