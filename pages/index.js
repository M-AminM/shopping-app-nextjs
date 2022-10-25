import Slider from "../components/slider/slider";
import { Fragment } from "react";
import Products from "../components/products/products";
import Newsletter from "../components/newsletter/newsletter";

export default function Home() {
  return (
    <Fragment>
      <Slider />
      <Products />
      <Newsletter />
      
    </Fragment>
  );
}
