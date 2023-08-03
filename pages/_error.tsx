import { NextApiResponse } from "next";
import { AppProps } from "next/app";
import Error from "next/error";

function CustomError({ statusCode }: AppProps & { statusCode: number }) {
  return (
    <Error
      title={
        statusCode != 404
          ? "An error occured on server side"
          : "An error occurred on client"
      }
      statusCode={statusCode}
    />
  );
}

CustomError.getInitialProps = ({
  res,
  err,
}: {
  res: NextApiResponse,
  err: { statusCode: number },
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
