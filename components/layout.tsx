import { AppProps } from "next/app";
import Link from "next/link";

export default function Layout(
  props: AppProps & { children: React.ReactNode }
) {
  return (
    <div>
      <div className="p-3 bg-[#1da1f2] text-white">
        <Link href="/">Navbar</Link>
      </div>
      {props.children}
    </div>
  );
}
