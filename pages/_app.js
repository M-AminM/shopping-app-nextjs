import Header from "../components/header/header";
import "../styles/globals.css";
import Footer from "../components/footer/footer";
import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import Loading from "../components/loading/loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <SessionProvider session={pageProps.session}>
          <Header>
            <Component {...pageProps} />
            <Footer />
          </Header>
        </SessionProvider>
      )}
    </>
  );
}

export default MyApp;
