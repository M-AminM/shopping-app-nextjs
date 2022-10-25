import Header from "../components/header/header";
import "../styles/globals.css";
import Footer from "../components/footer/footer";

function MyApp({ Component, pageProps }) {
  return (
    <Header>
      <Component {...pageProps} />
      <Footer />
    </Header>
  );
}

export default MyApp;
