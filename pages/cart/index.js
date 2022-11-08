
import { getSession } from "next-auth/react";
import Orders from "./orders";
import { server } from "../../config";

const Cart = ({ data, session }) => {
  const results = data.orders.filter(
    (order) => order.email === session.user.email
  );
  let sum = 0;
  results.forEach((value) => {
    sum += value.price * value.number;
  });

  // console.log(data.orders);

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
          <div className="border border-white p-2.5 w-1/5 flex flex-col gap-3.5 rounded-xl h-full md:w-full">
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
            <button className="bg-orange text-black rounded-xl flex justify-center items-center p-2 font-semibold">Checkout Now</button>
          </div>
        )}
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`${server}/api/orders`);
  const data = await res.json();

  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }

  return {
    props: {
      data: data,
      session: session,
    },
  };
}

export default Cart;
