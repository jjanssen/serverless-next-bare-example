import Link from "next/link";

function Slug({ hostname, req }) {
  return (
    <>
      <h1>{hostname} - SSR [...slug]</h1>
      <Link href="/">Home</Link>
      <br />
      <br />
      <Link href="/[...slug]" as="/different-random-dynamic-page/">
        Different random dynamic page
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

export default Slug;
