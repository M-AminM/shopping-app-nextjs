import classes from "../../components/products/products.module.scss";
import productData from "../../data/productData";
import Link from "next/link";
import Image from "next/image";

const HomeProducts = () => {
  return (
    <div className="pt-10 ">
      <h1 className="text-white text-4xl flex justify-center items-center">
        Products
      </h1>
      <div
        className="flex justify-center items-center gap-10 md:flex-col flex-wrap"
        style={{ padding: "50px 0" }}
      >
        {productData.map((product, index) => {
          if (index < 4) {
            return (
              <Link key={product.id} href={`/products/${product.alt}`}>
                <div className={classes.productBox}>
                  <div className={classes.circle}></div>
                  <Image
                    src={product.image}
                    className={classes.productImage}
                    alt={product.alt}
                    width={200}
                    height={200}
                  />
                  {/* <h3>{product.alt}</h3> */}
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default HomeProducts;
