import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import productData from "../../data/productData";
import Image from "next/image";
import classes from "./product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const router = useRouter();

  const productName = router.query.product;

  const [product, setProduct] = useState({});

  useEffect(() => {
    productData.map((product) => {
      if (product.alt === productName) {
        setProduct(product);
      }
    });
  }, []);
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div
      className="text-white flex justify-center items-center w-full md:flex-col px-32 gap-12 md:gap-2 md:px-12 py-12"
    //   style={{ padding: "40px 150px" }}
    >
      <Image src={product.image} alt={product.alt} width={400} height={400} />

      <div className="w-5/6 flex flex-col gap-6 md:w-full md:pt-10">
        <h1 className="capitalize text-5xl md:text-3xl">{product.alt}</h1>
        <p className="w-full text-base">{product.info}</p>
        <span className="text-4xl">{`$ ${product.price}.00`}</span>

        <div className="flex">
          <div className="flex gap-px pt-1">
            <h4>Color</h4>
            <div
              className={classes.circleColor}
              style={{ background: "black" }}
            ></div>
            <div
              className={classes.circleColor}
              style={{ background: "darkblue" }}
            ></div>
            <div
              className={classes.circleColor}
              style={{ background: "gray" }}
            ></div>
          </div>
          <div className="flex pl-10 gap-4">
            <h4>Size</h4>
            <select className="text-black">
              <option value="0">M</option>
              <option value="1">L</option>
              <option value="2">XL</option>
              <option value="3">2XL</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="cursor-pointer" onClick={decreaseCount}>
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <div className={classes.counter}>
            <p className="flex justify-center items-center">{count}</p>
          </div>
          <span className="cursor-pointer" onClick={increaseCount}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
        <button className={classes.cartBtn}>ADD TO CART </button>
      </div>
    </div>
  );
};

export default Product;
