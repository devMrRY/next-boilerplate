import { AppProps } from "next/app";

function CustomError({ statusCode }: AppProps & { statusCode: number }) {
  return (
    <div>Custom 500 to handle server side errors</div>
  );
}

export default CustomError;
