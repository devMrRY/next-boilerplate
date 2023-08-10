import "@/styles/globals.scss";
import { NextPage } from "next";
import NextNProgress from "nextjs-progressbar";
import ErrorBoundary from '@/components/ErrorBoundary'
import type { AppContext, AppInitialProps, AppProps, NextWebVitalsMetric } from "next/app";
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

// for analytics
export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

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
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </main>
  );
}

MyApp.getInitialProps = async function (
  context: AppContext,
): Promise<AppInitialProps<{pageProps: any}>> {
  console.log("MyApp.getInitialProps called");
  const ctx = await App.getInitialProps(context);

  return { ...ctx };
};
