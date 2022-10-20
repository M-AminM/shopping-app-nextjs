import classes from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBasket, faBars } from "@fortawesome/free-solid-svg-icons";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className="flex w-2/5 md:w-11/12">
        <input className={classes.searchInput}/>
        <button className="bg-orange rounded-r w-2/12">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
      <div className="flex justify-end items-center gap-8">
        <p className="text-white cursor-pointer text-xl md:hidden">register</p>
        <p className="text-white cursor-pointer text-xl md:hidden">signin</p>
        <FontAwesomeIcon className="cursor-pointer text-xl md:hidden" color="white" icon={faShoppingBasket}/>
        <FontAwesomeIcon className="cursor-pointer hidden md:flex" color="white" icon={faBars}/>
      </div>
    </header>
  );
};

export default MainHeader;
