import classes from "./cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Orders = ({ results }) => {
  return (
    <section>
      {results.map((order) => {
        return (
          <div
            key={order.id}
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
                  ID: <span>{order.id}</span>
                </h2>
                <div
                  className={classes.cartCircle}
                  style={{ background: order.color }}
                ></div>
                <h2>
                  size: <span>{order.size}</span>
                </h2>
                <button className="bg-red text-sm rounded ">Remove</button>
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
