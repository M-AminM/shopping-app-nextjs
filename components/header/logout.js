import { useEffect } from "react";
import classes from "./logout.module.scss";

const Logout = ({ setLogout, logoutHandler }) => {
  return (
    <>
      <div className={classes.bgLogout}> </div>
      <div className={classes.logout}>
        <p className="text-red font-semibold text-2xl md:text-xl">
          Are you sure you want to log out?
        </p>

        <div className="flex gap-2">
          <button
            className="bg-orange px-6 py-1 rounded-xl"
            onClick={() => setLogout(false)}
          >
            NO
          </button>
          <button
            className="bg-orange px-6 py-1 rounded-xl"
            onClick={logoutHandler}
          >
            YES
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;
