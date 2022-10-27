import Header from "../components/header/header";
import "../styles/globals.css";
import Footer from "../components/footer/footer";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header>
        <Component {...pageProps} />
        <Footer />
      </Header>
    </SessionProvider>
  );
}

export default MyApp;
