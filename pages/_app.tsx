import "@/styles/globals.scss";
import { NextPage } from "next";
import NextNProgress from "nextjs-progressbar";

import type { AppContext, AppInitialProps, AppProps } from "next/app";
import App from "next/app";
import { ReactElement, ReactNode } from "react";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode,
};

export default function MyApp({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout,
}) {
  const getLayout =
    Component.getLayout ??
    ((page: React.ReactNode) => (
      <>
        <div className="p-3">
          <h2>Default Layout</h2>
        </div>
        {page}
      </>
    ));
  return getLayout(
    <main className={roboto.className}>
      <NextNProgress color="red" />
      <Component {...pageProps} />
    </main>
  );
}

// If getInitialProps is used in a custom _app.js, and the page being navigated to is using getServerSideProps, then getInitialProps will also run on the server.
// Using getInitialProps in App will disable Automatic Static Optimization for pages without getStaticProps.
MyApp.getInitialProps = async function (
  context: AppContext,
): Promise<AppInitialProps> {
  console.log("MyApp.getInitialProps called");
  const ctx = await App.getInitialProps(context);

  return { ...ctx };
};
