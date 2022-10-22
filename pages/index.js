import styles from "../styles/Home.module.css";
import Slider from "../components/slider/slider"
import { Fragment } from "react";
import Products from "../components/products/products";

export default function Home() {
  return (
    <Fragment>
      <Slider />
      <Products />
    </Fragment>
  );
}
