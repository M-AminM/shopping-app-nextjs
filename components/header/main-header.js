import classes from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBasket, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const MainHeader = () => {
  const [input, setInput] = useState();
  const [menu, setMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
   if (menu) {
    setMenu(!menu); 
   }
 }, [router.asPath]);

  return (
    <header className={classes.header}>
      <nav className="flex justify-between items-center">
        <div className="flex w-2/5 bg-white rounded-l md:w-11/12">
          <button className="bg-orange rounded-l w-2/12">
            <FontAwesomeIcon icon={faSearch}/>
          </button>
          <input className={classes.searchInput} onChange={(e) => setInput(e.target.value)} value={input} />
          {input && (
            <div className="flex justify-center items-center pr-2 pl-2 cursor-pointer">
              <FontAwesomeIcon icon={faX} onClick={() => setInput("")} />
            </div>
          )}
        </div>
        <div className="flex justify-end items-center gap-8">
        <Link href="/"><p className="text-white cursor-pointer text-xl md:hidden">home</p></Link>
        <Link href="/register"><p className="text-white cursor-pointer text-xl md:hidden">register</p></Link>
          <Link href="/signup"><p className="text-white cursor-pointer text-xl md:hidden">singup</p></Link>
          <FontAwesomeIcon className="cursor-pointer text-xl md:hidden" color="white" icon={faShoppingBasket}/>
          <FontAwesomeIcon className="cursor-pointer hidden md:flex" color="white" icon={faBars} onClick={() => setMenu(!menu)}/>
        </div>
      </nav>
      {menu && (
        <div className={`${classes.menu} flex justify-center items-center pt-2.5`}>
          <ul className="text-white flex flex-col gap-y-3 ">
            <li>
              <Link href="/">home</Link>
            </li>
            <li><Link href="/register">register</Link></li>
            <li><Link href="/signup">signup</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
