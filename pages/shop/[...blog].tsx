import { useAmp } from "next/amp";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

export const config = { amp: "hybrid" };

const imgSrc = "https://placekitten.com/1000/1000";

const Image = () =>
  useAmp() ? (
    <amp-img
      alt="A cute kitten"
      src={imgSrc}
      width="1000"
      height="1000"
      layout="responsive"
    ></amp-img>
  ) : (
    <img alt="A cute kitten" src={imgSrc} width="1000" height="1000"></img>
  );

export default function Blog(props: AppProps) {
  const router = useRouter();
  const isAmp = useAmp();
  console.log(router.query.blog);
  return (
    <>
      catch all Blogs
      <Image />
    </>
  );
}

Blog.getInitialProps = () => {
  console.log("Blog.getInitialProps called");
  return {
    props: {
      someKey: true,
    },
  };
};
