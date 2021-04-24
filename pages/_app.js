import { Provider as AuthProvider } from "next-auth/client";

/**
 * Bootstrap the next.js configuration
 */
const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default App;
