import classes from "./cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Orders = ({ results }) => {
  const removeHandler = (e) => {
    const data = { id: e.target.value };
    console.log(data);
    fetch("/api/orders", {
      method: "PATCH",
      body: JSON.stringify({ id: e.target.value }),
    })
      .then((response) => {
        response.json().then((response) => {
          console.log(response);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section>
      {results.map((order) => {
        // console.log(order._id);
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
                  value={order._id}
                >
                  Remove
                </button>
                {/* <hr /> */}
              </div>
            </div>
            <div className="flex flex-col py-10 gap-4">
              <div className="flex gap-2">
                <FontAwesomeIcon className="cursor-pointer" icon={faMinus} />
                <span className="text-xl" style={{ marginTop: "-8px" }}>
                  {order.number}
                </span>
                <FontAwesomeIcon className="cursor-pointer" icon={faPlus} />
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
