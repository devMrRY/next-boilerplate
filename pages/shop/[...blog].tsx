import { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function Blog(props: AppProps) {
  const router = useRouter();
  console.log(router.query.blog)
  return <ul>catch all Blogs</ul>;
}

Blog.getInitialProps = () => {
  console.log('Blog.getInitialProps called');
  return {
    props: {
      someKey: true
    }
  }
}