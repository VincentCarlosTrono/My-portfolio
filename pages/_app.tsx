import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

import type { AppProps /*, AppContext */ } from "next/app";
import { MenuProvider } from "../ContextApi/openMenu";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      // mirror: true,
      offset: 120,
      duration: 2000,
    });
  }, []);
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
