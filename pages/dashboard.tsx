// `pages` directory

import Layout from "@/components/layout";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import Image from "next/image";
import { ReactElement } from "react";
import { Almendra } from "next/font/google";

// if it is used in particular file then it will be preloaded in this file only not globally unless it's used in _app.tsx file
// to reused a font it should be imported in a shared file and exported from there as named export and used in other files
const allura = Almendra({
  weight: ["400"],
  subsets: ["latin"],
  preload: true,
  variable: "--font-size",
});

type Products = { id: number, name: string }[];

// it runs on server side only can't be used in non-page file
export const getServerSideProps: GetServerSideProps<{
  products: Products,
}> = async (context) => {
  try {
    const redirect = false;
    const res = await fetch(`http://localhost:3000/api/products`);
    const products: Products = await res.json();
    if (!products) {
      // it will redirect to 404 page
      return { notFound: true };
    }

    if (redirect) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
          // statusCode: 230    // cannot use both permanent and statusCode together
        },
      };
    }
    return { props: { products } };
  } catch (error: unknown) {
    return { props: { products: [] } };
  }
};

const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string,
  width: number,
  quality?: number,
}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Dashboard({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={allura.className}>
      <h2 className="text-[#50d71e] dashboard">Dashboard</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <Image
        // loader={imageLoader}
        src="http://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png"
        alt="demo image"
        width={100} // req for remote images only not for static images for static images this is prefilled at build time
        height={100}
      />
    </div>
  );
}

Dashboard.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
