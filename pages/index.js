import Slider from "../components/slider/slider";
import { Fragment } from "react";
import Products from "../components/products/products";
import Newsletter from "../components/newsletter/newsletter";
import HomeProducts from "../components/home-products/home-products";

export default function Home() {

  return (
    <Fragment>
      <Slider />
      {/* <Products /> */}
      <HomeProducts />
      <Newsletter />
    </Fragment>
  );
}
