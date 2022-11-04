import classes from "./cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = ({ results }) => {
  const router = useRouter();

  const removeHandler = async (e) => {
    const id = toast.loading("Please wait...", {
      position: toast.POSITION.TOP_CENTER,
    });
    const results = await fetch("/api/orders", {
      method: "PATCH",
      body: JSON.stringify({ name: e.target.value }),
    });
    const json = await results.json();
    if (json.orders.acknowledged) {
      toast.update(id, {
        render: "Your Order Removed",
        type: "success",
        isLoading: false,
        autoClose: true,
      });
    } else {
      toast.update(id, {
        render: "cannot Removed",
        type: "error",
        isLoading: false,
        autoClose: true,
      });
    }
    router.replace(router.asPath);
  };

  return (
    <section>
      {results.map((order) => {
        return (
          <div
            key={order._id}
            className="flex justify-between "
            style={{ paddingBottom: "40px" }}
          >
            <div className="flex gap-4">
              <Image
                src={order.image}
                alt={order.name}
                width={220}
                height={220}
                className="object-cover rounded-full"
              />
              <div className="py-10 flex flex-col gap-2 ">
                <h2>
                  Product: <span>{order.name}</span>
                </h2>
                <h2>
                  ID: <span>12</span>
                </h2>
                <div
                  className={classes.cartCircle}
                  style={{ background: order.color }}
                ></div>
                <h2>
                  size: <span>{order.size}</span>
                </h2>
                <button
                  className="bg-red text-sm rounded w-24"
                  onClick={removeHandler}
                  value={order.name}
                >
                  Remove
                </button>
                <ToastContainer />
              </div>
            </div>
            <div className="flex flex-col py-10 gap-4">
              <div className="flex gap-2">
                <span className="text-xl text-red pt-2 font-bold" style={{ marginTop: "-8px" }}>
                  num: {order.number}
                </span>
              </div>
              <span className="text-xl">$ {order.price}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Orders;
