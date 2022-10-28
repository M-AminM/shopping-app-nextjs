import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import productData from "../../data/productData";
import Image from "next/image";
import classes from "./product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Product = ({ productData }) => {
  const [order, setOrder] = useState({
    name: productData.alt,
    price: productData.price,
    color: "black",
    size: "M",
    number: 1,
  });
  const increaseNumber = () => {
    setOrder({ ...order, number: order.number + 1 });
  };

  const decreaseNumber = () => {
    if (order.number > 1) {
      setOrder({ ...order, number: order.number - 1 });
    }
  };

  const submitOrder = async () => {
    const response = await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="text-white flex justify-center items-center w-full md:flex-col px-32 gap-12 md:gap-2 md:px-12 py-12">
      <img
        src={productData.image}
        alt={productData.alt}
        width={400}
        height={400}
      />

      <div className="w-5/6 flex flex-col gap-6 md:w-full md:pt-10">
        <h1 className="capitalize text-5xl md:text-3xl">{productData.alt}</h1>
        <p className="w-full text-base">{productData.info}</p>
        <span className="text-4xl">{`$ ${productData.price}.00`}</span>

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
            <select
              name="parameters"
              className="text-black"
              onClick={(e) => setOrder({ ...order, size: e.target.value })}
            >
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">2XL</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="cursor-pointer" onClick={decreaseNumber}>
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <div className={classes.counter}>
            <p className="flex justify-center items-center">{order.number}</p>
          </div>
          <span className="cursor-pointer" onClick={increaseNumber}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
        <button className={classes.cartBtn} onClick={submitOrder}>
          ADD TO CART{" "}
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const productName = context.query.product;
  let data;

  productData.map((product) => {
    if (product.alt === productName) {
      data = product;
    }
  });

  return {
    props: {
      productData: data,
    },
  };
}

export default Product;
