import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import Orders from "./orders";
import Loading from "../../components/loading/loading";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = "/register";
      } else {
        setIsLoading(false);
      }
    });
    fetch("/api/orders")
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(false);
        setOrders(data.orders);
      });
  }, []);

  if (isLoading || isLoaded) {
    return (
      <Loading />
    );
  }

  const userEmail = session.user.email;

  const results = orders.filter((order) => order.email === userEmail);

  let sum = 0;

  results.forEach((value) => {
    sum += value.price;
  });

  console.log(sum);
  console.log(results.length === 0);
  return (
    <section className="px-8 py-8 text-white min-h-screen">
      <h1 className="flex justify-center items-center text-3xl">YOUR BAG</h1>
      <div className="flex justify-between md:flex-col">
        <div
          className={`${results.length === 0 ? "w-full" : "w-9/12 md:w-full"}`}
        >
          {results.length === 0 ? (
            <p className="flex justify-center items-center pt-10 text-4xl text-red md:text-3xl">
              Nothing Ordered
            </p>
          ) : (
            <Orders results={results} />
          )}
        </div>
        {results.length === 0 ? (
          ""
        ) : (
          <div className={classes.orderBox}>
            <h1 className="flex justify-center items-center">ORDER SUMMERY</h1>
            <div className="flex justify-between">
              <h3>Subtotal</h3>
              <span>$ {sum}</span>
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
              <span className="text-xl font-bold">$ {sum - 5.9}</span>
            </div>
            <button className={classes.cartButton}>Checkout Now</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
