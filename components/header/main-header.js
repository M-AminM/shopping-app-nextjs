import classes from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MainHeader = () => {
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
          <li>
            <Link href="/">
              <p className="text-white cursor-pointer">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <p className="text-white cursor-pointer">Register</p>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <p className="text-white cursor-pointer">Signup</p>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <FontAwesomeIcon
                className="cursor-pointer"
                color="white"
                icon={faShoppingBasket}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
