import classes from "./products.module.scss";
import productData from "../../data/productData";
import Link from "next/link";
import { useState } from "react";
import { useMemo } from "react";

const Products = () => {
  const [query, setQuey] = useState("");

  const filteredItems = useMemo(() => {
    return productData.filter((item) => {
      return item.alt.toLowerCase().includes(query);
    });
  }, [query]);

  const items = [
    { name: "", title: "All" },
    { name: "watch", title: "Watches" },
    { name: "shirt", title: "Shirts" },
    { name: "bag", title: "Bags" },
    { name: "shoes", title: "Shoes" },
    { name: "head", title: "Head Phone" },
  ];

  return (
    <div className="pt-20 md:pt-10">
      <div className="flex justify-center items-center pb-10 gap-6 md:flex-wrap px-10">
        {items.map((item, index) => {
          return (
            <button
              className={classes.productButton}
              onClick={() => setQuey(item.name)}
              key={index}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-10 md:flex-col flex-wrap">
        {(filteredItems.length === 0 ? productData : filteredItems).map(
          (product) => {
            return (
              <Link key={product.id} href={`/products/${product.alt}`}>
                <div className={classes.container}>
                  <div className={classes.box}>
                    <img src={product.image} alt={product.alt} />
                    <span>{product.alt}</span>
                  </div>
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
