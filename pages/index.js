import styles from "../styles/Home.module.css";
import Slider from "../components/slider/slider";
import { Fragment } from "react";
import Products from "../components/products/products";
import Newsletter from "../components/newsletter/newsletter";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <Fragment>
      <Slider />
      <Products />
      <Newsletter />
      <Footer />
    </Fragment>
  );
}
