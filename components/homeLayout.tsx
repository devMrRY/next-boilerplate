import { AppProps } from "next/app";

export default function Layout(
  props: AppProps & { children: React.ReactNode }
) {
  return (
    <div>
      <div className="p-3 bg-cyan-500 text-white">Home Navbar</div>
      {props.children}
    </div>
  );
}
