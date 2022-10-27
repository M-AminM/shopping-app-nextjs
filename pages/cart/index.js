import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { getSession } from "next-auth/react";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = "/register";
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return (
      <p className="flex justify-center items-center h-screen text-white">
        is Loading
      </p>
    );
  }

  const orders = [
    {
      image: "/media/shoes.png",
      product: "JESSIE THUNDER SHOES",
      id: "93813718292",
      color: "black",
      size: "37.5",
      price: "50",
    },
    {
      image: "/media/shirt.png",
      product: "HAKURA T-SHIRT",
      id: "93813718293",
      color: "gray",
      size: "M",
      price: "20",
    },
  ];

  return (
    <section className="px-8 py-8 text-white">
      <h1 className="flex justify-center items-center text-3xl">YOUR BAG</h1>
      <div className="flex justify-between md:flex-col">
        <div className="w-9/12 md:w-full">
          {orders.map((order) => {
            return (
              <div key={order.id} className="flex justify-between">
                <div className="flex gap-4">
                  <Image
                    src={order.image}
                    alt={order.name}
                    width={220}
                    height={220}
                  />
                  <div className="py-10 flex flex-col gap-2 ">
                    <h2>
                      Product: <span>{order.product}</span>
                    </h2>
                    <h2>
                      ID: <span>{order.id}</span>
                    </h2>
                    <div
                      className={classes.cartCircle}
                      style={{ background: order.color }}
                    ></div>
                    <h2>
                      size: <span>{order.size}</span>
                    </h2>
                    {/* <hr /> */}
                  </div>
                </div>
                <div className="flex flex-col py-10 gap-4">
                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faMinus}
                    />
                    <span className="text-xl" style={{ marginTop: "-8px" }}>
                      1
                    </span>
                    <FontAwesomeIcon className="cursor-pointer" icon={faPlus} />
                  </div>
                  <span className="text-xl">$ {order.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className={classes.orderBox}>
          <h1 className="flex justify-center items-center">ORDER SUMMERY</h1>
          <div className="flex justify-between">
            <h3>Subtotal</h3>
            <span>$ 80</span>
          </div>
          <div className="flex justify-between">
            <h3>Estimated Shipping</h3>
            <span>$ 5.9</span>
          </div>
          <div className="flex justify-between">
            <h3>Shopping Discount</h3>
            <span>- $ 5.9</span>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">Total</h3>
            <span className="text-xl font-bold">$ 80.0</span>
          </div>
          <button className={classes.cartButton}>Checkout Now</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
