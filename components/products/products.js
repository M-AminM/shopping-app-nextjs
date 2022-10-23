import classes from "./products.module.scss";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import productData from "../../data/productData";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <div className="pt-10">
      <h1 className="text-white text-4xl flex justify-center items-center">
        Products
      </h1>
      <div
        className="flex justify-center items-center gap-10 md:flex-col"
        style={{ padding: "50px 0" }}
      >
        {productData.map((product) => {
          return (
            <Link key={product.id} href={`/products/${product.alt}`}>
              <div className={classes.productBox} >
                <div className={classes.circle}></div>
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={200}
                  height={200}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
