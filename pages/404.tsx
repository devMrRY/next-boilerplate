import { NextApiResponse } from "next";
import { AppProps } from "next/app";
import Error from "next/error";

function CustomError({ statusCode }: AppProps & { statusCode: number }) {
  return (
    <div>Custom 404 required as custom _error page exists needed </div>
  );
}

export default CustomError;
