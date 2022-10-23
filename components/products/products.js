import classes from "./products.module.scss";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import productData from "../../data/productData";
import Image from "next/image";

const Products = () => {
  return (
    <div>
      <h1 className="text-white text-4xl flex justify-center items-center">Products</h1>
      <div
        className="flex justify-center items-center gap-10 md:flex-col"
        style={{ padding: "50px 0" }}
      >
        {productData.map((product) => {
          return (
            <div className={classes.productBox} key={product.id}>
              <div className={classes.circle}></div>
              <Image
                src={product.image}
                alt={product.alt}
                width={200}
                height={200}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
