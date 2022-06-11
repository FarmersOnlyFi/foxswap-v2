import Head from "next/head";

const Meta = ({
  title,
  keywords,
  description,
}: {
  title: string;
  keywords: string;
  description: string;
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/public/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Foxswap v2",
  keywords: "data, defi, blockchain",
  description: "Decentralized Application on Harmony",
};

export default Meta;
