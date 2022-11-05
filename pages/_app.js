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

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  
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
