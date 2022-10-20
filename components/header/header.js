import { Fragment } from "react";
import MainHeader from "./main-header";

const Header = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default Header;
