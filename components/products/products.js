import classes from "./products.module.scss";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import productData from "../../data/productData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMemo } from "react";

const Products = () => {
  const [query, setQuey] = useState();

  const filteredItems = useMemo(() => {
    return productData.filter((item) => {
      return item.alt.toLowerCase().includes(query);
    });
  }, [query]);
  console.log();

  return (
    <div className="pt-10 ">
      <div className="flex justify-center items-center pb-10 ">
        <form className={classes.searchBox}>
          <input
            type="text"
            placeholder=" "
            value={query}
            onChange={(e) => setQuey(e.target.value)}
          />
          <button type="reset"></button>
        </form>

      </div>
      {/* <h1 className="text-white text-4xl flex justify-center items-center">
        Products
      </h1> */}
      <div
        className="flex justify-center items-center gap-10 md:flex-col flex-wrap"
        style={{ padding: "50px 0" }}
      >
        {(filteredItems.length === 0 ? productData : filteredItems).map(
          (product) => {
            return (
              <Link key={product.id} href={`/products/${product.alt}`}>
                <div className={classes.container}>
                  <div className={classes.box}>
                    <img src={product.image} />
                    <span>{product.alt}</span>
                  </div>
                  {/* <div className={classes.box}>
                    <img src={product.image} />
                    <span>Image</span>
                  </div>
                  <div className={classes.box}>
                    <img src={product.image} />
                    <span>Hover</span>
                  </div>
                  <div className={classes.box}>
                    <img src={product.image} />
                    <span>Effect</span>
                  </div> */}
                </div>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Products;
