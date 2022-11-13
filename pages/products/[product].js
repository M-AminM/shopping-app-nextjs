import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import productData from "../../data/productData";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ productData, session }) => {
  const [order, setOrder] = useState({
    email: session.user.email,
    name: productData.alt,
    price: productData.price,
    color: "black",
    size: "M",
    number: 1,
    image: productData.image,
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
    const id = toast.loading("Please wait...", {
      position: toast.POSITION.TOP_CENTER,
    });
    const response = await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      toast.update(id, {
        render: "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: true,
      });
      throw new Error(data.message || "Something went wrong !");
    } else {
      toast.update(id, {
        render: "Your Orders Added",
        type: "success",
        isLoading: false,
        autoClose: true,
      });
    }
  };
  return (
    <section>
      <div className="text-white flex justify-center items-center w-full md:flex-col px-32 gap-12 md:gap-2 md:px-12 py-12">
        <Image
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
            <div className="flex gap-4 pt-1">
              <h4>Color</h4>
              <select
                name="colors"
                className="text-black outline-0"
                onClick={(e) => setOrder({ ...order, color: e.target.value })}
              >
                {productData.color.map((color, index) => {
                  // console.log(color);
                  return (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex pl-10 gap-4">
              <h4>Size</h4>
              <select
                name="parameters"
                className="text-black outline-0"
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
            <div className="border border-white w-7 rounded-2xl">
              <p className="flex justify-center items-center">{order.number}</p>
            </div>
            <span className="cursor-pointer" onClick={increaseNumber}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </div>
          <button
            className="border-none outline-0 bg-orange p-2.5 text-black rounded-xl flex justify-center items-center w-40 font-semibold"
            onClick={submitOrder}
          >
            ADD TO CART
          </button>
          <ToastContainer />
        </div>
      </div>
    </section>
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

  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/register",
        permanent: false,
      },
    };
  }

  return {
    props: {
      productData: data,
      session: session,
    },
  };
}

export default Product;
