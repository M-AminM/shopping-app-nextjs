import classes from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import Logout from "./logout";
import { useRouter } from "next/router";

const MainHeader = () => {
  const [logout, setLogout] = useState(false);
  const session = useSession();
  const router = useRouter();

  const logoutHandler = () => {
    signOut();
  };

  console.log(logout);
  useEffect(() => {
    const overflowhide = document.querySelector("body");
    const asda = () => {
      if (logout === false) {
        overflowhide.style.overflow = "";
      } else {
        overflowhide.style.overflow = "hidden";
      }
    };

    asda();
  }, [logout]);

  useEffect(() => {
    if (logout) {
      setLogout(false);
    }
  }, [router.asPath]);

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        {/* classes.leftSide */}
        <div className="font-bold text-white text-xl md:text-base">
          AMIN COLLECTION
          {/* <input className={classes.searchInput} />
          <button className={classes.searchBtn}>
            <FontAwesomeIcon icon={faSearch} />
          </button> */}
        </div>

        <ul className={classes.rightSide}>
          {session.data && (
            <li>
              <button className="text-red" onClick={() => setLogout(!logout)}>
                Logout
              </button>
            </li>
          )}
          <li>
            <Link href="/">
              <p className="text-white cursor-pointer">Home</p>
            </Link>
          </li>
          {!session.data && session.status !== "loading" && (
            <li>
              <Link href="/register">
                <p className="text-white cursor-pointer">Register</p>
              </Link>
            </li>
          )}

          <li>
            <Link href="/products">
              <p className="text-white cursor-pointer">Products</p>
            </Link>
          </li>
          {session.data && (
            <li>
              <Link href="/cart">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  color="white"
                  icon={faShoppingBasket}
                />
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {logout && (
        <Logout
          logout={logout}
          setLogout={setLogout}
          logoutHandler={logoutHandler}
        />
      )}
    </header>
  );
};

export default MainHeader;
