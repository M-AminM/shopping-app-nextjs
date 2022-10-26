import Image from "next/image";
import { useState } from "react";
import classes from "./cart.module.scss";

const Cart = () => {
  const [count, setCount] = useState({
    shoes: 1,
    shirt: 1,
  });

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
                <div className="flex flex-col py-10">
                  <div className="flex">
                    <span>-</span>
                    <div>{count.shirt}</div>
                    <span>+</span>
                  </div>
                  <span>$ {order.price}</span>
                </div>
                
              </div>
            );
          })}
          
        </div>

        <div className={classes.orderBox}>
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
            <h3>Total</h3>
            <span>$ 80.0</span>
          </div>
          <button className="">Checkout Now</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
