import { useEffect } from "react";

const Draft = () => {
  useEffect(() => {
  }, []);
  return <div>Draft</div>;
};

export const getStaticProps = async (context) => {
    fetch("http://localhost:3000/api/draft?slug=/shop/blog/23");

  //   console.log(res)
  return {
    props: {},
  };
};

export default Draft;
