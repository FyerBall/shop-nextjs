// react / nextjs
import Router from "next/router";
import { useState } from "react";
// context api
import { AuthContextProvider } from "../store/authContext";
// redux
import { Provider } from "react-redux";
import { store } from "../store/";

// styles
import PageLayout from "../layout/PageLayout/PageLayout";
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
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
