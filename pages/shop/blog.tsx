import { AppProps } from "next/app";

export default function Blog(props: AppProps) {
  return <ul>static Blog</ul>;
}

/**
 * getStaticProps runs only on server side
 * initially it get's called at build time
 * at build time HTML gets generated and a json is generated used as a reference to props which will be added in build
 * runs on every request in development mode
 * It also doesn't have access to incoming req object as it generates static HTML
 * cached HTML will be present on cdn
 * 
 * on demand revalidation then need to call revalidate("path of the page")
 * on change call "/api/revalidate"
 */
export const getStaticProps = () => {
  console.log("Blog getStaticProps called");
  return {
    props: { someKey: true },
    revalidate: 60  // used for enabling ISR
  };
};
