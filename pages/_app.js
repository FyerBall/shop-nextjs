// react / nextjs
import Router from "next/router";
import { useState } from "react";
// context api
import { AuthContextProvider } from "../store/authContext";
// redux
import { Provider } from "react-redux";
import { store } from "../store/";

// styles
import Layout from "../layout/Layout";
import "../styles/globals.css";

// n progress to show progress bar at the top when the page is loading
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
    setIsLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
    setIsLoading(false);
  });
  return (
    <Provider store={store}>
      <AuthContextProvider>
        {isLoading && (
          <p className="text-gray-500 text-lg fixed  bg-gray-900 bg-opacity-75 z-10 w-full text-center">
            loading...
          </p>
        )}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
