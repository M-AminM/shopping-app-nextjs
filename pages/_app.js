import Header from "../components/header/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}

export default MyApp;
