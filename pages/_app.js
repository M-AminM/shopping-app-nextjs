import Header from "../components/header/header";
import "../styles/globals.css";
import Footer from "../components/footer/footer";
import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import Loading from "../components/loading/loading";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <NextNProgress />

      <SessionProvider session={pageProps.session}>
        <Header>
          <Component {...pageProps} />
          <Footer />
        </Header>
      </SessionProvider>
    </>
  );
}

export default MyApp;
