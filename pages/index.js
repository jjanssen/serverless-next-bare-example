import Link from "next/link";

function Home({ hostname, req }) {
  return (
    <>
      <h1>{hostname} - SSR index</h1>
      <Link href="/[...slug]" as="/random-dynamic-page/" passHref>
        Random dynamic page
      </Link>
      <br />
      <br />
      <Link href="/static-example">Static page</Link>
      <br />
      <br />
      <pre>{JSON.stringify(req, null, 4)}</pre>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      hostname: context.req.headers.host,
      req: context.req,
    },
  };
}

export default Home;
