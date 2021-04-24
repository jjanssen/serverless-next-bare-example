function Home() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export const getServerSideProps = () => {
  return { props: {} };
};

export default Home;
