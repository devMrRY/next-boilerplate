import { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function Blog(props: AppProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <ul>Dynamic Blogs {router.query.blog}</ul>;
}

export const getStaticProps = async () => {
  console.log("Dynamic Blog getStaticProps called");
  await (() => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
      }, 5000)
    })
  })()
  return {
    props: {
      someKey: true,
    },
  };
};

/**
 * no use without getStaticProps
 * can't be used with getServerSideProps
 * need to be used only for dynamic routes
 * can be used only for pages
 * will run at build time only
 */
export const getStaticPaths = () => {
  console.log("Dynamic Blog getStaticPaths called");
  return {
    paths: [{ params: { blog: "1" } }, { params: { blog: "2" } }], // params should contain slug name in this blog for /shop/1 and /shop/2
    fallback: true, // blocking or false
  };
};

/**
 * fallback = false
 * pages that are not returned by getStaticPaths will result in 404 pages
 *
 * fallback = true
 * pages won't result in 404 but show a loading state to new page and when page generated then added to pre-rendered pages
 *
 * fallback = blocking
 * pages won't result in 404 but doesn't show a loading state to new page and when page generated then added to pre-rendered pages
 *
 */
