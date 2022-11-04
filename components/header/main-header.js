import classes from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const MainHeader = () => {
  const session = useSession();

  const logoutHandler = () => {
    signOut();
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.leftSide}>
          <input className={classes.searchInput} />
          <button className={classes.searchBtn}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <ul className={classes.rightSide}>
          {session.data && (
            <li>
              <button className="text-red" onClick={logoutHandler}>
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
    </header>
  );
};

export default MainHeader;
