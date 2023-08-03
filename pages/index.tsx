import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeLayout from "@/components/homeLayout";
import { ReactElement, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: AppProps) {
  const router = useRouter();
  const handleLogin = (): void => {
    fetch("http://localhost:3000/api/login")
      .then((res: Response) => res.json())
      .then(() => {
        router.push("/dashboard");
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <Link href="/shop/40009">
        <h2>Home Page</h2>
      </Link>
      <button onClick={handleLogin}>Login</button>
      {/* shallow route only works for same route and only query changes
          shallow route disables data fetching methods to not run
          also it won't works with middlewares as middlewares can't be detected on client-side
       */}
      <button onClick={() => router.push('/shop/303', undefined, { shallow: true })}>Test</button>
    </main>
  );
}

// it also can be used in page files
// it gets called on both server and client side
// at initial load on server then on client whenever navigated from link/router
Home.getInitialProps = () => {
  console.log('Home.getInitialProps called');
  // returning an empty object will affect automatic static optimization
  return {
    someKey: true
  }
}

Home.getLayout = (page: ReactElement) => {
  return <HomeLayout>{page}</HomeLayout>;
};
