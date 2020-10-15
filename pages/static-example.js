import Link from "next/link";

function StaticExample() {
  return (
    <>
      <h1>Static example</h1>
      <Link href="/">Home</Link>
      <br />
      <br />
      <Link href="/[...slug]" as="/random-dynamic-page/">
        Random dynamic page
      </Link>
    </>
  );
}

export default StaticExample;
