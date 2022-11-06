import Header from "../components/header/header";
import "../styles/globals.css";
import Footer from "../components/footer/footer";
import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import Loading from "../components/loading/loading";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
